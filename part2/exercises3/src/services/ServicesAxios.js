import axios from 'axios';

export const  getAll = (() => {
    
    return axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
      const {data} = response;
     
     return data;
    })
});


export const postNote =(newNote)=>{

  return axios.post("https://jsonplaceholder.typicode.com/posts",newNote)
  .then((response)=>{
    const {data} = response;
    return data;
    
  }); 


}