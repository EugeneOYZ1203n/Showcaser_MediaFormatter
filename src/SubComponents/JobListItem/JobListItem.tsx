import './JobListItem.css'

function JobListItem({title, subjobs}:{
  title: string,
  subjobs: Array<{
    title: string,
    progress: number
  }>
}) {

  return (
    <>
       <div>JobListItem</div>
    </>
  )
}

export default JobListItem
