import {useState} from 'react'
import '../main.css'
import Person from './Person'

const Contents = () => {
  const [people, setPeople] = useState([
    {
      name: "Javohir",
      surname: "G`ulomjonov",
      age: 18
    }
  ]);

  const [person,setPerson] = useState("");
  const [personSur,setPersonSur] = useState("");
  const [personAge,setPersonAge] = useState("");

  function uzgartirish(e) {setPerson(e.target.value)}
  function uzgartirishSur(e) {setPersonSur(e.target.value)}
  function uzgartirishAge(e) {setPersonAge(e.target.value)}

  function qushish(e) {
    setPeople([...people, {name: person, surname:personSur, age: personAge}])
    setPerson("");
    setPersonSur("");
    setPersonAge("");}

  return ( 
  <> 
  <div className="content">
  <div className="container py-5">
  <div className="col-auto text-center">
      <button className="btn btn-success w-100" onClick={qushish}>Qo'shish</button>
   </div>
  <table className="table my-2">
      <thead>
      <tr>
          <th scope="col"></th>
          <th scope="col"> 
          <input
          type="text"
          className="form-control"
          placeholder="Ismingizni kiriting!"
          name="person"
          value={person}
          onChange={uzgartirish}
          required/>
         </th>

          <th scope="col">
          <input
          type="text"
          className="form-control"
          placeholder="Familiyangizni kiriting!"
          name="personSur"
          value={personSur}
          onChange={uzgartirishSur}
          required/>
          </th>

          <th scope="col">
         <input
          type="text"
          className="form-control"
          placeholder="Yoshingizni kiriting!"
          name="personAge"
          value={personAge}
          onChange={uzgartirishAge}
          required/>
          </th>

        </tr>

        <tr>
          <th scope="col">#</th>
          <th scope="col">Ism:</th>
          <th scope="col">Familiya:</th>
          <th scope="col">Yoshi:</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, pos) => (<Person key={pos} name={person.name} surname={person.surname} age={person.age}/>))}
      </tbody>
    </table>
  </div>
  </div> </>
   )
}

export default Contents