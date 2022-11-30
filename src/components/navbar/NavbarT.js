import React, {     useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,  Container,  Form, Button, Modal} from 'react-bootstrap';


function NavbarT() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>

        <Navbar bg="light"  className='fixed-top'>
            <Container>
                <div style={{marginLeft:"-200px"}}>
                <Navbar.Brand href="/home">Cohort System</Navbar.Brand>  
                </div>  

                    
              <div style={{marginRight:"-200px"}}>

                <div>
                    <Button variant="dark" onClick={handleShow} style={{width: "180px", marginTop: "0px"}}>
                        Create Cohort
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Create your Cohort</Modal.Title>
                      </Modal.Header>
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Name of Cohort</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Section</Form.Label>
                          <Form.Control type="text" placeholder="Section" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Room</Form.Label>
                          <Form.Control type="text" placeholder="Room" />
                        </Form.Group>
                    </Form>

                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                      </Modal.Footer>
                    </Modal>
                </div>              
                </div>
            </Container>
        </Navbar>

        
    </div>
  )
}
export default NavbarT;