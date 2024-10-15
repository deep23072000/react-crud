import axios from "axios"
import { useEffect, useState } from "react";
const Data = ()=> {
    let [jsondata,setJsondata] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:4000/info').then((e)=>{setJsondata(e.data)});
    },[])
    
     return(
        <>
          {
            jsondata.map((items)=>(
              <section key={items.id}>
                <div>{items.name}</div>
                <div>{items.email}</div>
              </section>
            ))
          }
        </>
     )
}

export default Data;