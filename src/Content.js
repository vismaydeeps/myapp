import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Content() {
  const [products,setProducts] = useState([])
  const url = "http://localhost:8080/"

  const getData = async() => {
    const response  = await axios.get(url)
    setProducts(response.data)
  }

  useEffect(()=>{
    getData()
  },[])

  const  deleteprod = async (id) =>{
    await axios.delete(url+id) // this is done to add the id to url
    getData()
  }
// const prodcuts =[
//   {name:"Product1",price:34,url:"https://picsum.photos/id/1/200/200"},
//   {name:"Product2",price:35,url:"https://picsum.photos/id/2/200/200"},
//   {name:"Product3",price:37,url:"https://picsum.photos/id/3/200/200"},
// ]

  return (
    <div style ={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      {products.map((value,index)=>(
        <div style = {{backgroundColor:'bisque', margin:'10px', padding:'10px'}}>
          <img src = {value.url}></img>
          <h2 key = {index}>{value.name}</h2>
          <h3>${value.price} <h6>M.R.P $100</h6></h3>
          <button>Add to cart</button>
          <button onClick = {()=>deleteprod(value._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
