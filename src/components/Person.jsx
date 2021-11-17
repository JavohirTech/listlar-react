import React from 'react'

const Person = (props)=>{
   return(
     <>
     <tr>
      <th scope="row"></th>
      <td>{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.age}</td>
    </tr>
     </>
   )
}

export default Person