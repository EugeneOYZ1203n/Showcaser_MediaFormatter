import "./App.css";
import ClippingPage from "./Components/ClippingPage/ClippingPage";
import FormattingPage from "./Components/FormattingPage/FormattingPage";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="App__PageList">
          <ClippingPage />
          <FormattingPage />
        </div>
      </div>
    </>
  );
}

export default App;
