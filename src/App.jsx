import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CircularProgress } from '@mui/material';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Report from './OemExceptionReport/Report';
import MisReport from './misReport/MisReport';
function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
  
    <Route path='/' element={<PrivateRoute component={Report} />} ></Route>
    <Route path='/misReport' element={<PrivateRoute component={MisReport} />} ></Route>
   </Routes>
  )
}

const PrivateRoute = ({ component: Component }) => {
  

  return  (
    <>
      {/* {isLoading && (
        <div className="loadingContainer">
          <CircularProgress />
        </div>
      )} */}
      <Header />
      <div className="app-container">
        <Sidebar className="sidebar" />
        <div className="content">
          <Component />
        </div>
      </div>
    </>
  ) 
};


export default App
