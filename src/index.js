import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Body from './Components/Body';
// // import Acecreed from './Components/Acecreed'
// import Footer from './Components/Footer';
// import Profile from './Components/Profile' 
// import  Container1  from './Components/Container';
// import Addbook from './Components/Addbook';
// import Editbook from './Components/Editbook';
// import Success from './Components/Success'
// import Mate from './Components/Mate';
// import  Booklist  from './Components/Booklist';
// import TableDemo from './Anithp/Practice';
// import NumberList from './Anithp/Practice';
// import Admin from './Components/Adminboard';


ReactDOM.render(<App/>,
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
 //Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
