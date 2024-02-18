import { useEffect } from 'react';
import JobListItem from '../../SubComponents/JobListItem/JobListItem'
import './JobsPage.css'
import useCreateJob from './useCreateJob'

function JobsPage() {
  /* 
  Things to Export out:
    1. A way to add a new job, 
    2. A way to update the status of the job, 
    3. A way to show that job failed???

  From context -> CreateJob(jobFunction)
  In the CreateJob Function -> jobFunction(updateFunction, errorFunction)
    - Update function takes a number (0-100) for progress
    - error function takes a string as a reason for failure ("Invalid file format")

  Things to Implement:
    1. Way to store a list of jobs (Probably with id as well so update function calls wont have collision)
  
  Object with Jobs as keys, Subjobs listed in an array??
  
  */

  const [CreateJob, UpdateSubJob, ErrorSubJob, jobList, subjobList]  = useCreateJob();

  return (
    <>
       <div className='JobsPage highlightBorder'>
            <h1>Current Session Jobs</h1>

            <button onClick={()=>{
              const ids = CreateJob("Testting", ["Hello", "Hello2"])

              setTimeout(() => {
                console.log("Hello")
                UpdateSubJob(ids[0], 20)
              }, 1000);

              setTimeout(() => {
                console.log("Hello")
                UpdateSubJob(ids[0], 100)
              }, 3000);

              setTimeout(() => {
                console.log("Hello")
                ErrorSubJob(ids[1])
              }, 5000);
            }}></button>

            {Object.keys(jobList).map((jobTitle)=>(
              <JobListItem title={jobTitle} subjobs={jobList[jobTitle].map((el) => subjobList[el])}/>
            ))}

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
            <JobListItem title='Test' subjobs={[
              {title: "Sub Test 1", progress: 100},
              {title: "Sub Test 2", progress: 100},
              {title: "Sub Test 3", progress: 100}
            ]}/>
            <JobListItem title='Test' subjobs={[
              {title: "Sub Test 1", progress: -1},
              {title: "Sub Test 2", progress: 100},
              {title: "Sub Test 3", progress: 100}
            ]}/>
            <JobListItem title='Test' subjobs={[
              {title: "Sub Test 1", progress: 100},
              {title: "Sub Test 2", progress: 100},
              {title: "Sub Test 3", progress: 100}
            ]}/>
            <JobListItem title='Test' subjobs={[
              {title: "Sub Test 1", progress: 100},
              {title: "Sub Test 2", progress: 100},
              {title: "Sub Test 3", progress: 100}
            ]}/>
            <JobListItem title='Test' subjobs={[
              {title: "Sub Test 1", progress: 100},
              {title: "Sub Test 2", progress: 100},
              {title: "Sub Test 3", progress: 100}
            ]}/>
            <JobListItem title='Test' subjobs={[
              {title: "Sub Test 1", progress: 100},
              {title: "Sub Test 2", progress: 100},
              {title: "Sub Test 3", progress: 100}
            ]}/>
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