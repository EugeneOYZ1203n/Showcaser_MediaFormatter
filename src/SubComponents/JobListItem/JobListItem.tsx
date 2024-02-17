import { useState } from 'react'
import './JobListItem.css'

function JobListItem({title, subjobs}:{
  title: string,
  subjobs: Array<{
    title: string,
    progress: number
  }>
}) {

  const [isOpen, setIsOpen] = useState(false);

  const overallProgress = (subjobs.reduce((acc,el)=>acc+el.progress, 0) / subjobs.length).toFixed(1)
  const status = overallProgress==="0.0"?"In Queue":overallProgress==="100.0"?"Completed":"In Progress";

  return (
    <>
      <div className='JobListItem'>
        <button className={'JobListItem__AccordionButton'} onClick={()=>setIsOpen(!isOpen)}>
          <span className='JobListItem__Title'>{title}</span>
          <span className='JobListItem__Status'>{status}</span>
          <span className='JobListItem__Progress'>{`${overallProgress}%`}</span>
          <span>{isOpen?"-":"+"}</span>
        </button>
        <div className='JobListItem__SubJobList'>
          {subjobs.map((subjob, index)=>
            (<div className={isOpen?'SubJobListItem show':'SubJobListItem'} key={index}>
              <span className='SubJobListItem__Title'>{subjob.title}</span>
              <span className='SubJobListItem__Progress'>{`${subjob.progress.toFixed(1)}%`}</span>
            </div>)
          )}
        </div>
      </div>
    </>
  )
}

export default JobListItem
