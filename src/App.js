
import './App.css';
import Appbar1 from './Appbar1';
import ErrorBoundary from './errorboundry.js/ErrorBoundary';
import First from './errorboundry.js/First';
import First1 from './fetchingapi/First1';
import FirstComponent from './usememos/hoc/FirstComponent';
import SecondComponent from './usememos/hoc/SecondComponent';
import UseMemo1 from './usememos/UseMemo1';


function App() {
  return (
    <div className="App">
     
      <Appbar1 />
      {/* <UseMemo1 /> */}
      {/* <FirstComponent />
      <SecondComponent /> */}
      {/* <First1 /> */}
      {/* <ErrorBoundary>
         
      </ErrorBoundary> */}

    </div>
  );
}

export default App;
