import {useState} from 'react'

import {ShowAll} from './ShowAll.js'

const App = ({phones})=>{
  const [phoneBook, setphoneBook] = useState([...phones]);
  const [newPhone, setNewPhone] = useState({
    name:'',
    number:''
  });
  const [search, setsearch] = useState('')

  const handleClick=(ev)=>{
    ev.preventDefault();
    if((newPhone.name.length === 0 ) ||  (newPhone.number.length === 0 )){
      alert('name or number empty')
    }else {
    const newP ={
      name:newPhone.name,
      number: newPhone.number,
      id:phoneBook.length+1
    }
    setphoneBook(phoneBook.concat(newP))
    setNewPhone({
      name:'',
      number:''
    })
    }
  }

  const handleChangeName =(event)=>{
    setNewPhone({
      ...newPhone,
      name:event.target.value
    })
  }

  const handleSearch = (event)=>{
    const newSearch = event.target.value; 
    setsearch(newSearch)
  }
  const handleChangeNumber =(event)=>{
    setNewPhone({
      ...newPhone,
      number:event.target.value
    })
  }

  const phoneForFilter = search.length > 0 ?phoneBook.filter((phone)=>phone.name.toLowerCase().includes(search.toLowerCase())):phoneBook;
  return (
    <div className="App">

    <label>Search</label>
    <input type ='text' onChange={handleSearch}  
    value={search}></input>

      <form onSubmit={handleClick}>
        <h1>PhoneBook</h1>
      <label>Name</label>
      <input type ='text' onChange={handleChangeName}  value={newPhone.name}></input>
      <br></br>
      <label>Number</label>
      <input type ='text' onChange={handleChangeNumber}  value={newPhone.number}></input>
      <button type="submit">save</button>
      </form>
      <ShowAll phones={phoneForFilter}></ShowAll>
    </div>
  );
}

export default App;
