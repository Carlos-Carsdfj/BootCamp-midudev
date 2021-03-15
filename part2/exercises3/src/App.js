
import {getAll, postNote} from './services/ServicesAxios.js'
import { useEffect, useState } from 'react';
import './App.css';

const App = ()=> {


  const [showJson, setShowJson] = useState([]);
  const [newData, setnewData] = useState({
    body:'',
    title:'',
    userId:''
  });
  const [loading, setLoadin] = useState(true)

  useEffect(() => {
    let  data = getAll();
    data.then((response)=> {setShowJson(response)}
    )
    setLoadin(false);
  }, [])



  const savedcontent = (ev)=>{
    ev.preventDefault();


    if(newData.body.length > 0 && newData.title.length > 0){
  
      const newNote = {
        body: newData.body,
        title :newData.title,
        userId:1
      }
  
      postNote(newNote)
      .then((response)=>{
        setShowJson((prev)=>prev.concat(response))
      }
      )
    }else{

      alert('we will need a title and content to update the notes. ')
    }
   
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
 
  


  return (

    <div>
      <form onSubmit={savedcontent}>
        <label>Title : </label>
        <input type='text'placeholder="Type the title" onChange={typeTitle} value={newData.title} ></input>
        <br></br>
        <label> Content: </label>
        <input type='text'onChange={typeConten} value={newData.body}  ></input>
        <br></br>
        <input type='submit' value='Send'></input>
      </form>

      <h1>Data from json</h1>
    <ul>
    { loading === true ? <h1>Loading...</h1> :       
     showJson.map((data)=><li key={data.id}>
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
