import JobListItem from '../../SubComponents/JobListItem/JobListItem'
import './JobsPage.css'

function JobsPage() {
  return (
    <>
       <div className='JobsPage highlightBorder'>
            <h1>Current Session Jobs</h1>
            <JobListItem />
            <h1>Past Session Jobs</h1>
            <JobListItem />
       </div>
    </>
  )
}

export default JobsPage 