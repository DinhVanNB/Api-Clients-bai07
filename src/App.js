import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {
  let [works, getWork] =useState([]);
  let [work, setWork] = useState({
    "completed": false
  })
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res=>getWork(res.data))
      .catch(e=>alert(e))}
  ,[])
  const onSubmit =()=>{
      axios.post("https://jsonplaceholder.typicode.com/todos",work)
      .then(res=>
        alert(`Thêm thành công "${res.data.title}" trạng thái "${res.status}" !!!`)
      )
      .catch(e=>alert(e))
  }
  const onChange= (e)=>setWork({...work,[e.target.name]: e.target.value})
  

  return (
    <div>
        <h1>Todo List</h1>
        <input name="title" onChange={onChange} type="text" />
        <br></br>
        <button type='button' onClick={onSubmit}>Submit</button>
        <ul>
          {works.map(work=>(<li key={work.id}>
              {work.title}
          </li>))}
        </ul>
    </div>
  );
}

export default App;
