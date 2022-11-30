import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from 'react-bootstrap';
import './navbar1.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Navbar1() {
  
  return (
    <div>
        <Navbar bg="light" variant="light">
            <Container className='custom-container'>
                <Navbar.Brand href="./home" className='custom-brand'>Cohort System</Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}
export default Navbar1;