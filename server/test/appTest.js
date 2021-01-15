const assert = require('chai').assert;
//const should = require('chai').should;
const expect = require('chai').expect
const request = require('supertest');

const app = require('../index');

const haloo = require('../testaus').haloo;
const merkkijono = require('../testaus').merkkijono;
const vuosiLuku = require('../testaus').vuosiLuku;
const salasana = require('../testaus').salasana;
const eriSalasana = require('../testaus').eriSalasana;
const adminTest = require('../routes/middleware').adminCheck;


describe('Kokeilutestaus', function () {
    it('haloo-funktion tulisi palauttaa haloo', function () {
        assert.equal(haloo(), 'haloo')
    }
    )

    it('nyt pitäisi olla vuosi 2021', function () {
        assert.equal(vuosiLuku(), '2021')
    })
    it('merkkijono on tekstiä', function () {
        let result = merkkijono()
        assert.typeOf(result, 'string')
    }
    )

    it(`merkkijonon sisältö on merkkijono 'merkkejä'`, function () {
        let result = merkkijono()
        assert.equal(result, 'merkkejä')
    }
    )
})

describe('salasanan testaus', function () {
    it('testaa salasanan testaus (promise)', function () {
        let testi = salasana
        return testi().then(result => {
            assert.equal(result, true)
        })
    }
    )
    it('annettu salasana ei täsmää (await/async)', async function () {
        let testi = await eriSalasana("asiakas01012000")
        assert.notEqual(testi, true)
    }
    )
})


describe('Tietokantatestaukset', function () {
    describe('GET /kysymykset', function () {
        it('hakee kaikki kysymykset tietokannasta', function (done) {
            request(app)
                .get('/kysymykset')
                .set('Accept', 'application/json')
                .expect('Content-type', /json/)
                .expect(200, done)
        })

        it('hakee tietyn tentin kysymykset tietokannasta', function (done) {
            request(app)
                .get('/kysymykset/1')
                .set('Accept', 'application/json')
                .expect('Content-type', /json/)
                .end((function (err, res) {
                    expect(res.body).to.be.an('array')
                    expect(res.body).to.not.be.empty
                    done()
                })
                )
        })

        it('ei palauta mitään virheellisellä tentti_id:llä (404)', function (done) {
            request(app)
                .get('/kysymykset/404')
                .set('Accept', 'application/json')
                .end((function (err, res) {
                    expect(res.body).to.be.an('array')
                    expect(res.body).to.be.empty
                    done()
                })
                )

        })

    })

})


describe('Käyttäjien testaus', function () {
    describe('#login', function () {
        it('väärillä käyttäjätiedoilla ei pääse kirjautumaan sisään', function () {
            request(app)
                .post('/login')
                .send({
                    email: "unknown@user.com",
                    salasana: "password"
                })
                .expect(401)

        })
    })



    let token
    before(function (done) {
        // kirjaudutaan sisään
        request(app)
            .post('/login')

            .send({
                email: "testi@testi",
                salasana: "testi"
            })
            .end((err, response) => {
                token = response.body.token
                done()
            })
    })
    describe('#token', function () {
        it('tokenin tarkastus', async function () {

            await request(app)
                .get('/token')
                .set('auth-token', token)
                .expect(202)



        })
    })
})