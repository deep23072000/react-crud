
import axios from "axios"
import { useEffect, useState } from "react";

const Data = ()=> {
    let [jsondata,setJsondata] = useState([]);
    let [show,setShow] = useState("none");
    let [updatedata,setUpdatedata] = useState({
      "id":"",
      "name":"",
      "email":""
    })
    let [upid,setUpid] = useState(null);
    let [searchdata,setSearchdata] = useState('');

    console.log(searchdata)



    
    useEffect(()=>{
        axios.get('http://localhost:4000/info').then((e)=>{setJsondata(e.data)});
    },[])

    const search = ()=>{
      let filterdata = jsondata.filter((e)=> e.name === searchdata);
      console.log(filterdata);
    }
    
    const del = (arg)=>{
      axios.delete(`http://localhost:4000/info/${arg}`).then(()=>{alert("data deleted")})
    }
    
   
    const showform = (arg)=>{
          setUpid(arg.id);
          setShow("block");
          setUpdatedata({
            ...updatedata,
            ...{
            "id":arg.id,
            "name":arg.name,
            "email":arg.email
            }
          })
          console.log(updatedata)
    }

    const finalupdate = ()=>{
      alert(upid)
      axios.put(`http://localhost:4000/info/${upid}`,JSON.stringify(updatedata)).then(()=>{alert("data updated ")})
    }

    const handleinput = (e)=>{
      
      let key = e.target.name;
      let value = e.target.value;
      setUpdatedata({
        ...updatedata,
        ...{
          [key]:value
        }
      })

      console.log(updatedata)
    }




    
     return(
        <>

        <input type="text" value={searchdata} onChange={(e)=>{setSearchdata(e.target.value)}} />
        <button onClick={search}>search</button>
        
          {
            jsondata.map((items)=>(
              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td><button onClick={()=>{del(items.id)}}>delete</button></td>
                <td><button onClick={()=>{showform(items)}}> Update </button></td>
              </tr>
            ))
          }

          <form style={{display:show}}>
            <h1>Update form </h1>
           <input type="text" name="name" value={updatedata.name} onChange={handleinput} placeholder="Enter name" /><br></br>
           <input type="text" name="email" value={updatedata.email} onChange={handleinput} placeholder="Enter email addres" /><br></br>
           <button onClick={finalupdate}> update data </button>
           </form>
       
        </>
     )
}

export default Data;