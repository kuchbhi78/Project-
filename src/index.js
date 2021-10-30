import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Alldata from './Datas';

import Carausels from './Carausel';
import Container from './Container';
// import Game from './Indec';
// import Time from './Time';

ReactDOM.render(
  <>
  <Alldata/>
  <Carausels/>
  <Container/>
  
    {/* <Game/>
    <Time/> */}
  </>  
   ,document.getElementById('demo')
);
