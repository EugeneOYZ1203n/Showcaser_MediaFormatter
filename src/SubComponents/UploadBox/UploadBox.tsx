import './UploadBox.css';
import { Accept, useDropzone} from 'react-dropzone';
import { useCallback } from 'react';
/* 
Features: 
1. Given a onDropFunction to pass the files information to (name and path??)
2. Given a storage location to save files on local filesystem?? Maybe just a context will do
3. Given a list of file formats to accept
4. Creates a dropzone for submitting files (Can handle multiple uploads)
*/

const defaultAcceptedTypes = {
  'image/png': ['.png'],
  "image/gif": ['.gif'],
  "image/jpeg": ['.jpg', '.jpeg'],
  "video/mp4": ['.mp4']
}  

function UploadBox({onDropFunction, permanentActive = false, acceptedTypes = defaultAcceptedTypes} : 
  {
    onDropFunction: (acceptedFiles: File[]) => void,
    permanentActive?:Boolean,
    acceptedTypes?: Accept
  }
) {
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop: onDropFunction,
    noClick: true,
    accept: acceptedTypes
  })
  
  return (
    <>
      <div {...getRootProps({
        className: `UploadBox ${isDragActive || permanentActive?"Active":""}`
      })}>
        <input {...getInputProps()} />
        <p className='UploadBox__DropzoneText'>
          {isDragActive || permanentActive?"Drop files here...":""}
        </p>
      </div>
    </>
  )
}

export default UploadBox