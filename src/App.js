// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
 
  const showAlert =(type,message) =>{
        setAlert({
          msg:message,
          type : type
        }) 
        setTimeout(() => {
          setAlert(null);
        }, 3000);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#393838';
      showAlert("success","Dark mode has been Enabled");
      // document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.body.style.color='black';
      showAlert("success","Light mode has been Enabled");
      
    }
  }
  const selectMode = (mde)=>{
    if(mde==='light'){
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.body.style.color='black';
      showAlert("success","Light mode has been Enabled");
    }
    else if(mde==='dark'){
      setMode('dark');
      document.body.style.backgroundColor='#393838';
      showAlert("success","Dark mode has been Enabled");
    }
    else{
      setMode('danger');
      document.body.style.backgroundColor='red';
      showAlert("success","Red mode has been Enabled");
    }
  }
  return (
    //jsx
    <div className="blank">
      <Router>
      <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} selectMode={selectMode}/>
      <Alert alert={alert}/>
       <div className="container my-4" >
       <Routes>
             {/* <Textform heading="Enter Your Text to Analyse Below : " mode={mode} showAlert={showAlert} /> */}
            <Route exact path="/" element={ <Textform heading="Enter Your Text to Analyse Below : " mode={mode} showAlert={showAlert} /> }></Route>
            <Route exact path ="/about" element={<About mode={mode}/>}></Route>
         </Routes>
         </div>
      </Router>
    </div>
  );
}

export default App;
