import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
const Updateform = () => {
  let nav = useNavigate()
  let [data,setData] = useState(
    {
      "name":"",
      "email":""
    }
  );
    let {id} = useParams();
    console.log(id);


    const handleinput = (e)=>{
      let key = e.target.name;
      let value = e.target.value;
      setData({
        ...data,
        ...{
          [key]:value
        }
      })

      console.log(data)

    }

    const upd = ()=>{
      axios.put(`http://localhost:4000/info/${id}`,JSON.stringify(data)).then(()=>{alert("update")}).then(()=>{nav("/")})
     }
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" name="name" value={data.name} placeholder="Enter name" onChange={handleinput} />
          <Form.Text className="text-muted">
            We'll never share your name with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={data.email} placeholder="Email" onChange={handleinput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={upd}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Updateform;
