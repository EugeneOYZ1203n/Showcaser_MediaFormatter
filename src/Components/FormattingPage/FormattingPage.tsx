import FormattingMenu from "../../SubComponents/FormattingMenu/FormattingMenu";
import Preview from "../../SubComponents/Preview/Preview";
import ResourceSelector from "../../SubComponents/ResourceSelector/ResourceSelector";
import UploadBox from "../../SubComponents/UploadBox/UploadBox";
import "./FormattingPage.css";

function FormattingPage() {
  return (
    <>
      <div className="FormattingPage highlightBorder">
        <div className="FormattingPage__HorizontalFlex">
          <div className="FormattingPage__PreviewSelector">
            <Preview />
            <div className="FormattingPage__Selector">
              <ResourceSelector />
              <UploadBox onDropFunction={(acceptedFiles)=>{}}/>
            </div>
          </div>

          <FormattingMenu />
        </div>
      </div>
    </>
  );
}

export default FormattingPage;
