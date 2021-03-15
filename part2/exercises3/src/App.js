
import {getAll} from './services/ServicesAxios.js'
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';





function App() {


  const [showJson, setShowJson] = useState([]);
  const [newData, setnewData] = useState({
    body:'',
    title:'',
    userId:''

  });

  useEffect(() => {
    let  data = getAll();
    data.then((response)=> {setShowJson(response)}
    )
  }, [])



  const savedcontent = (ev)=>{
    ev.preventDefault();

    const newNote = {
      body: newData.body,
      title :newData.title,
      userId:1
    }

    axios.post("https://jsonplaceholder.typicode.com/posts",newNote)
    .then((response)=>{
      const {data} = response;
      setShowJson((prev)=>prev.concat(data))
      console.log('finsh')
    }

    )
  }
  const typeTitle = (event)=>{
    setnewData({
      ...newData,
      title: event.target.value
    })
  }
  const typeConten = (event)=>{
    setnewData({
      ...newData,
      body: event.target.value
    })
  }
  const typeId = (event)=>{
    setnewData({
      ...newData,
      userId: event.target.value
    })
  }


  return (

    <div >
      <form onSubmit={savedcontent}>
        <label>Title : </label>
        <input type='text'placeholder="Type an title" onChange={typeTitle} value={newData.title} ></input>
        <br></br>
        <label> Content: </label>
        <input type='text'onChange={typeConten} value={newData.body}  ></input>
        <br></br>
        <label> User Id  : </label>
        <input type='text'onChange={typeId} value={newData.userId}></input>
        <br></br>
        <input type='submit' value='Send'></input>
        <br></br>



      </form>

      <h1>Data from json</h1>
    <ul>
    
       {showJson.map((data)=><li key={data.id}>
          <h1>Title :{data.title}</h1>
          <p>User Id:{data.userId}</p>
          <p>Content:{data.body}</p>
        </li>
      )
      } 
    </ul>
    </div>
  );
}

export default App;
