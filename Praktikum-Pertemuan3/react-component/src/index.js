import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import HelloComponent from './component/HelloComponent';
import LoginComponent from './component/LoginComponent';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


//1
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//2
// function HelloComponent(){
//   return <p>HelloComponent</p>
// }
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// //3
// const HelloComponent =()=> {
//   return <p>HelloComponent</p>
// }

// class StateFullComponent extends React.compontent{
//   render(){
//     return<p>StateFullComponent</p>
//   }
// }

//4
// ReactDOM.render(
//   <React.StrictMode>
//     <Test />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//5
// ReactDOM.render(
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//6 Tugas
ReactDOM.render(
  <React.StrictMode>
    <LoginComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<StateFullComponent />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
