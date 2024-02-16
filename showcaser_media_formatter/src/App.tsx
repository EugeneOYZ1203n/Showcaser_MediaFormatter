import './App.css'
import ClippingPage from './Components/ClippingPage/ClippingPage'
import FormattingPage from './Components/FormattingPage/FormattingPage'
import JobsPage from './Components/JobsPage/JobsPage'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <div className='App'>
        <Sidebar />
        <div className='App__PageList'>
          <ClippingPage />  
          <FormattingPage />
          <JobsPage />
        </div>
      </div>
    </>
  )
}

export default App
