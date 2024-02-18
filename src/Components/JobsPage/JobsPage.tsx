import JobListItem from '../../SubComponents/JobListItem/JobListItem'
import './JobsPage.css'

function JobsPage() {
  return (
    <>
       <div className='JobsPage highlightBorder'>
            <h1>Current Session Jobs</h1>
            <JobListItem title='Test' subjobs={[
              {title: "Sub Test 1", progress: 0},
              {title: "Sub Test 2", progress: 0},
              {title: "Sub Test 3", progress: 0}
            ]}/>
            <JobListItem title='Test' subjobs={[
              {title: "Sub Test 1", progress: Math.round(Math.random()*30+5)},
              {title: "Sub Test 2", progress: Math.round(Math.random()*30+45)},
              {title: "Sub Test 3", progress: 100}
            ]}/>
            <h1>Past Session Jobs</h1>
            <JobListItem title='Test' subjobs={[
              {title: "Sub Test 1", progress: 100},
              {title: "Sub Test 2", progress: 100},
              {title: "Sub Test 3", progress: 100}
            ]}/>
       </div>
    </>
  )
}

export default JobsPage 