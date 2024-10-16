import axios from "axios";
import { useEffect, useState } from "react"

const Senddata = ()=>{
    let [userdata,setUserdata]= useState({
        "name":"",
        "email":""
    })

    const handleinput = (e)=>{
        let key = e.target.name;
        let value = e.target.value;
        setUserdata({
            ...userdata,
            ...{[key]:value}
        })

        console.log(userdata)
    };

    // useEffect(()=>{
       
    // },[userdata])

    const sub = ()=>{
        axios.post('http://localhost:4000/info',JSON.stringify(userdata))
        .then(()=>{window.alert("data submitted")})
        .then(()=>{setUserdata({
            "name":"",
            "email":""
        })})
    }
    return(
        <>
        <form>
           <input type="text" name="name" value={userdata.name} onChange={handleinput} placeholder="Enter name" /><br></br>
           <input type="text" name="email" value={userdata.email} onChange={handleinput} placeholder="Enter email addres" /><br></br>
           <button onClick={sub}> submit </button>
           </form>

        </>
    )
}

export default Senddata;