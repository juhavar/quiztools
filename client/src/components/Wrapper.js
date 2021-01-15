import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Finnish from '../lang/fi.json'
import Vietnamese from '../lang/vi.json'
import English from '../lang/en.json'

export const Context = React.createContext();

//const local = navigator.language;
/* 
let lang;
if (local === 'fi') {
   lang = Finnish;
}else {
   if (local === 'vn') {
       lang = Vietnamese;
   } else {
       lang = English;
   }
}
 */
const Wrapper = (props) => {
    const [locale, setLocale] = useState('fi');
    const [messages, setMessages] = useState('fi');

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'fi') {
            setMessages(Finnish);
        } else {
            if (newLocale === 'vi') {
                setMessages(Vietnamese);

            } else {
                setMessages(English)
            }
        }
    }
        return (

            <Context.Provider value={{ locale, selectLanguage }}>
                <IntlProvider messages={messages} locale={locale}>
                    {props.children}
                </IntlProvider>
            </Context.Provider>
        );
    
}
export default Wrapper;