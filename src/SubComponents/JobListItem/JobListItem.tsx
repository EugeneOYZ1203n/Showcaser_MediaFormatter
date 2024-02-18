import { CSSProperties, useState } from 'react'
import './JobListItem.css'

function JobListItem({title, subjobs}:{
  title: string,
  subjobs: Array<{
    title: string,
    progress: number
  }>
}) {

  //To show error in job, set progress to -1

  const [isOpen, setIsOpen] = useState(false);

  const isError = subjobs.reduce((acc,el)=>acc || el.progress == -1,false);

  const overallProgress = isError?"-1":(subjobs.reduce((acc,el)=>acc+el.progress, 0) / subjobs.length).toFixed(1)
  const status = (
    isError?"Error":
    overallProgress==="0.0"?"In Queue":
    overallProgress==="100.0"?"Completed":
    "In Progress"
  );

  const getColorStyle = (_progress: number) => (
    _progress==-1?
      {"--main-color":"color-mix(in srgb, var(--tertiary-color) 60%, red)"} as CSSProperties:
    _progress==0?
      {"--main-color":"var(--secondary-color)"} as CSSProperties:
    _progress==100?
      {"--main-color":"color-mix(in srgb, var(--secondary-color) 60%, var(--background-color))"} as CSSProperties:
      {"--main-color":"var(--tertiary-color)"} as CSSProperties)
  
  const getProgressStyle = (_progress: number) => (
    _progress==-1?
    {
      "width": `100%`,
      "background-color": `color-mix(in srgb, var(--main-color) 60%, var(--background-color))`,
    } as CSSProperties
    :
    {
      "width": `${(_progress*0.98+2).toFixed(0)}%`,
      "background-color": `color-mix(in srgb, var(--main-color) ${(_progress*0.4+20).toFixed(0)}%, var(--background-color))`,
    } as CSSProperties
  )
  
  return (
    <>
      <div className='JobListItem' style={getColorStyle(Number(overallProgress))}>
        <button className={'JobListItem__AccordionButton'} onClick={()=>setIsOpen(!isOpen)}>
          <div className='JobListItem__ProgressBar' style={getProgressStyle(Number(overallProgress))}></div>
          <span className='JobListItem__Title'>{title}</span>
          <span className='JobListItem__Status'>{status}</span>
          <span className='JobListItem__Progress'>{`${isError?"XX":overallProgress}%`}</span>
          <span>{isOpen?"-":"+"}</span>
        </button>
        <div className='JobListItem__SubJobList'>
          {subjobs.map((subjob, index)=>
            (<div className={isOpen?'SubJobListItem show':'SubJobListItem'} 
            style={getColorStyle(subjob.progress)}
            key={index}>
              <div className='SubJobListItem__ProgressBar' style={getProgressStyle(subjob.progress)}></div>
              <span className='SubJobListItem__Title'>{subjob.title}</span>
              <span className='SubJobListItem__Progress'>{`${subjob.progress==-1?"XX":subjob.progress.toFixed(1)}%`}</span>
            </div>)
          )}
        </div>
        
      </div>
    </>
  )
}

export default JobListItem
