import React, {useCallback} from 'react';
import { useDropzone } from "react-dropzone";
import request from "superagent";


const Dropzonedemo = () => {
    const maxSize = 1048576
    const onDrop = useCallback(files => {
        console.log(files);
    
        const req = request.post('http://localhost:5000/upload');
    
        files.forEach(file => {
          req.attach('file', file);
        });
        req.end((err, res) => {
          console.log(res)
        });
    
      }, []);

      const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
        onDrop,
        accept: 'image/png',
        minSize: 0,
        maxSize,
      });
      
    //  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

      return (
        <div className="container text-center mt-5">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive && 'Click here or drop a file to upload!'}
            {isDragActive && !isDragReject && "Drop it like it's hot!"}
            {isDragReject && "File type not accepted, sorry!"}
 {/*            {isFileTooLarge && (
              <div className="text-danger mt-2">
                File is too large.
              </div>
            )} */}
          </div>
        </div>
      );

  }
  export default Dropzonedemo