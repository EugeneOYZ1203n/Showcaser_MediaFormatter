import './UploadBox.css';
import { Accept, useDropzone} from 'react-dropzone';
import { useCallback } from 'react';

/* Example onDropFunction

const onDrop = useCallback((acceptedFiles: File[]) =>{
  console.log(acceptedFiles.map(file=>file.path))
}, [])

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