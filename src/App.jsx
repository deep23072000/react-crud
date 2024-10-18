import Tabledata from "./Table.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Updateform from "./updateform.jsx";
const App = ()=>{
  return(
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Tabledata></Tabledata>}></Route>
              <Route path="/updateform" element={<Updateform></Updateform>}></Route>
              <Route path="/updateform/:id" element={<Updateform></Updateform>}></Route>
              
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;