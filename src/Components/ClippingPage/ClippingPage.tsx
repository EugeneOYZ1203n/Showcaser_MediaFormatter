import Preview from "../../SubComponents/Preview/Preview";
import ResourceSelector from "../../SubComponents/ResourceSelector/ResourceSelector";
import UploadBox from "../../SubComponents/UploadBox/UploadBox";
import VideoSlider from "../../SubComponents/VideoSlider.tsx/VideoSlider";
import "./ClippingPage.css";

function ClippingPage() {
  return (
    <>
      <div className="ClippingPage highlightBorder">
        <div className="ClippingPage__HorizontalFlex">
          <div className="ClippingPage__Clipper">
            <Preview />
            
            <VideoSlider />
          </div>

          <div className="ClippingPage__Selector">
            <ResourceSelector />
            <UploadBox onDropFunction={(acceptedFiles)=>{}}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClippingPage;
