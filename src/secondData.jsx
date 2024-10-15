import { useEffect, useState } from "react";
import axios from "axios";

const Seconddata =()=>{
    let [userdata,setUserdata] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/info').then((items)=>{setUserdata(items.data)});
    },[])

    return(
        <>
          {
            console.log(userdata)
          }
        </>
    )
} 

export default Seconddata;