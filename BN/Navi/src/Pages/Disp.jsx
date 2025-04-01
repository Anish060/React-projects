import React, { useEffect, useState } from 'react'

function Disp() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/users').then(res=>res.json()).then(data=>setdata(data)).catch(err=>console.log(err));
  })
  return (
    <div className="max-w-6xl px-4 py-8 justify-self-center ">
    <h1 className="text-3xl font-bold text-gray-800">Disp Page</h1>
    <table className='justify-evenly max-w-fit'>
      <thead className='justify-evenly max-w-fit'>
        <th className='padding-10px'>
          ID
        </th>
        <th>
          Name
        </th>
        <th>
          Pass
        </th>
      </thead>
      <tbody className='justify-evenly max-w'>
        {data.map((_da,ind)=>(
          <tr key={ind}>
            <td>{_da.Id}</td>
            <td>{_da.username}</td>
            <td>{_da.password}</td>

          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
</div>
  )
}

export default Disp