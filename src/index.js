import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import Header from './Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <Header/>
  {/* <h1>Hello world</h1> */}
  <p>Welcome</p>
  <Login/>
  
</div> 
);


