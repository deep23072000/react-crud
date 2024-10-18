import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';




function MyVerticallyCenteredModal(props) {
  let [adddata,setAdddata] = useState({
    "name":"",
    "email":""
  })
  const handleInput = (e)=>{
    let key = e.target.name; 
    let value = e.target.value;
    setAdddata({
      ...adddata,
      ...{[key]:value}
    })   
    console.log(adddata)   
  }

  const submitdata = ()=>{
    axios.post('http://localhost:4000/info',JSON.stringify(adddata)).then((e)=>{alert("data submitted")})
  }
 
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <p>
            {/* ========================form========= */}
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name='name' value={adddata.name} onChange={handleInput} placeholder="Enter name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" name='email' value={adddata.email} onChange={handleInput} placeholder="Enter email" />
      </Form.Group>
      <Button onClick={submitdata} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    {/* ================================================ */}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


const Tabledata = ()=>{
   let nav = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    let [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/info').then((e)=>{setData(e.data)});
    },[data]);

    const del = (arg)=>{
      axios.delete(`http://localhost:4000/info/${arg}`).then((e)=>{alert("data deleted successfully")});

    }

    const showform=(arg)=>{
        nav(`/updateform/${arg}`)
    }

    return(
        <>
         {/* ========================================================= */}
         
    <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        {/* ====================================================== */}
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       

        {
            data.map((e)=>(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>                 
                    <td><MdDelete onClick={()=>{del(`${e.id}`)}} />
                      <FaEdit onClick={()=>{showform(`${e.id}`)}} /><FaEye />
                    </td>
                </tr>
            ))
        }
        
        
      </tbody>
    </Table>  
        </>
    )
}

export default Tabledata;