import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GenericContainerDemo from './GenericContainer/GenericContainerDemo';
import CustomFormDemo from './CustomForm/CustomFormDemo';
import LoaderDemo from './LoadDemo/LoaderDemo';
import RequireAuthDemo from './ProtectedRoutes/RequireAuthDemo';
import RefsDemo from './RefsDemo/RefsDemo';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <GenericContainerDemo/> */}
    {/* <CustomFormDemo/> */}
    {/* <LoaderDemo/> */}
    {/* <RequireAuthDemo/> */}
    {/* <RefsDemo/> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
