import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout.js';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import ModalCommentBox from './components/modal/Modal';

export const SpinnerStyle = styled.div`
      margin: 250px 0px 0px 650px;
      @media (max-width: 800px) {
        margin: 200px 0px 0px 230px;
      }

`
const App = () => {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  return spinner ? <SpinnerStyle><Spinner animation="border" variant="primary" /></SpinnerStyle>
             : <div><Layout/><ModalCommentBox/></div>
};

export default App;