import './App.css';
import { useState } from 'react';

var arr_data = [
  {name:"Name" ,roll:"Roll Number" ,class:"Class"},
];

function App() {
    const[name,setname] = useState("");
    const[rno,setrno] = useState("");
    const[class1,setclass1]=useState("");
  
    const submit = () => {
      arr_data = [...arr_data,{name:name,roll:rno,class:class1},]
      console.log(arr_data);
    }
   
  return (
    <>
      <input type="text" name="" onChange={(e) => {setname(e.target.value)}} placeholder='name' id="" />
      <input type="text" name="" onChange={(e) => {setrno(e.target.value)}} placeholder='rno' id="" />
      <input type="text" name="" onChange={(e) => {setclass1(e.target.value)}} placeholder='class' id="" />
      <input type="submit" value="submit" onClick={submit} />
      <p>
        {
          arr_data.map((item) =>{
            return(
              <>
               <div className="flex">
               <input type="text" name="" value={item.name} id="" />
               <input type="text" name="" value={item.roll} id="" />
                <input type="text" name="" value={item.class} id="" />  
                                    
               </div>
              </>
            )
          }
          )
        }
      </p>
    </>
  );
}
export default App;
