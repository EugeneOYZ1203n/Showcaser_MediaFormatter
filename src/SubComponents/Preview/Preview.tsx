import { useCallback } from "react";
import UploadBox from "../UploadBox/UploadBox";
import "./Preview.css";

function Preview() {
  const onDrop = useCallback((acceptedFiles: File[]) =>{
    console.log(acceptedFiles.map(file=>file.path))
  }, [])
  
  return (
    <>
      <div className="Preview">
        Preview
        <UploadBox onDropFunction={onDrop}/>
      </div>
    </>
  );
}

export default Preview;
