import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import Login from './Login';
import pic from "./pexels-photo-949587.webp";
function App() {
  return (
    <div className="App">
     <nav className="menuBar">
     <div className="logo">
          <a style={{color:"rgb(21, 77, 117)",fontWeight:"1000"}}>ATools</a>
        </div>
        <div className='right'>
          <button style={{backgroundColor: "rgb(21, 77, 117)", border:"none", color:"white", borderRadius:"2px", width: "100px"}}>Start free trial</button>
          <button style={{backgroundColor: "rgb(230, 137, 32)", border:"none", color:"white", borderRadius:"2px", width: "100px"}}>Login</button>
        </div>
     </nav>
     <div className='bottom'>
       <div style={{flexGrow:"0.8"}}>
         <Login />
         </div>
       <div style={{flexGrow:"1"}} className="bottom_right"><img src={pic} style={{width:"100%"}}/></div>
     </div>
    </div>
  );
}

export default App;
