import React from 'react'
// import './Style.css';
const Studentarray=[{
    name:"Aliza",
    age:"22",
    grade:"A"
},
{
    name:"Ali",
    age:"23",
    grade:"B"
},
{
    name:"Arif",
    age:"24",
    grade:"C"
},
{
    name:"Ammar",
    age:"24",
    grade:"B"
}
]
// let studentsName=["Ali","Aliza","Amar","Arif","Aamna","Arsalan"]
const Studentlist =()=>{



  return (
    <>
    <h2 className='heading'>Students Info</h2>
    {Studentarray.map(std =><p className='para'>Student name is {std.name} age is {std.age} and garde is{std.grade}.</p>)}
    </>
  )
}

export default Studentlist