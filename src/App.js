

import './App.css';
import Appbar1 from './Appbar1';
import Contextapi from './contextAPI/Context1';
import ErrorBoundary from './errorboundry.js/ErrorBoundary';
import Epract from './errorboundry.js/errorBPrac/Epract';
import Epract1 from './errorboundry.js/errorBPrac/Epract1';
import Epract2 from './errorboundry.js/errorBPrac/Epract2';
import ErrorPract from './errorboundry.js/errorBPrac/ErrorPract';
import First from './errorboundry.js/First';
import First1 from './fetchingapi/First1';
import Counter from './hoccomponentP/Counter';
import HOC from './hoccomponentP/HocComponent';
import OnchangeCounter from './hoccomponentP/OnchangeCounter';
import OnhoverCounter from './hoccomponentP/OnhoverCounter';
import Main from './lazyloading/Main';
import PractL from './lazyloading/PractL';
import Form from './mockquestion/Form';
import Practicef from './mockquestion/Practicef';
import OnChangehover from './practiceofhoc/OnChangehover';
import OnhoverP from './practiceofhoc/OnhoverP';
import FirstComponent from './usememos/hoc/FirstComponent';
import SecondComponent from './usememos/hoc/SecondComponent';
import UseMemo1 from './usememos/UseMemo1';
import Practice1 from './useTransition/Practice1';
import Practice2 from './useTransition/Practice2';
import { connect } from 'react-redux';
import { IncAction,DecAction } from './reactRedux/Actions';
import Mounting1 from './lifecyclemethods/Mounting1';
import Person from './lifecyclemethods/Person';
import Fetchtask from './mockquestion/Fetchtask';
import Fetching from './mockquestion/Fetching';
import Login from './projectsatyam/Login';
import Sidebarsf from "./projectsatyam/Sidebarsf.jsx"
import HorizontalLinearStepper from './studentlearningapp/Stepper1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Step2 from './studentlearningapp/Step2';
import Step3 from './studentlearningapp/Step3';
// import Sidebar2 from './studentlearningapp/Sidebar2';
import ResponsiveDrawer from './studentlearningapp/Slidebarfn2';
import Loginpage from './studentlearningapp/loginpage/login';
import Register from './studentlearningapp/loginpage/registerpage';
// import Sidebar2 from './studentlearningapp/Step3';
function App({local_variable,IncAction,DecAction}) {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage/>} />
          <Route path="/step2" element={<Register />} />
          <Route path="/step3" element={<HorizontalLinearStepper/>}></Route> 
        </Routes>
      </BrowserRouter> 
   {/* <HorizontalLinearStepper/> */}
   {/* <ResponsiveDrawer/> */}
   
   {/* <Loginpage/> */}
   {/* <Register/> */}

         </div>
  );
}

export default App;


//Redux app js code delow
//          <div>
//          <h1>hello:{local_variable}</h1>
//          <button onClick={IncAction}>click to incre</button>
//          <br></br>
//          <br></br>
//          <button onClick={DecAction}>click to decre</button>
        
//     </div>
//   );
// }

// const mapStateToProps= state =>({
//   local_variable:state
// })

// export default connect(mapStateToProps,{IncAction,DecAction}) (App);
