import Preview from '../../SubComponents/Preview/Preview'
import ResourceSelector from '../../SubComponents/ResourceSelector/ResourceSelector'
import VideoSlider from '../../SubComponents/VideoSlider.tsx/VideoSlider'
import './ClippingPage.css'

function ClippingPage() {
  return (
    <>
       <div className='ClippingPage highlightBorder'>
          <div className='ClippingPage__HorizontalFlex'>
            <div className='ClippingPage__Clipper'>
              <Preview />
              <VideoSlider />
            </div>
            
            <ResourceSelector />
          </div>
       </div>
    </>
  )
}

export default ClippingPage