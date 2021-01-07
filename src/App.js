import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout.js';
import { Spinner } from 'react-bootstrap';
import ModalCommentBox from './components/modal/Modal';
import { Footer, SpinnerStyle } from './components/layout/LayoutStyle';


const App = () => {
  const [spinner, setSpinner ] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null)
  const [show, setShow] = useState(true);
  const [item, setItem] = useState(null)
  
  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000)
  }, []);
  return spinner ? <SpinnerStyle><Spinner animation="border" variant="primary" /></SpinnerStyle>
             : <div>
                  <Layout setSelectedImg={setSelectedImg} setShow={setShow} setItem={setItem}/> 
                    {selectedImg 
                    &&<ModalCommentBox 
                    show={show} 
                    setShow={setShow} 
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                    item={item}
                    setItem={setItem}
                    />}
              </div>
};

export default App;