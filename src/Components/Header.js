import React from 'react'

let studentsName=["Ali","Aliza","Amar","Arif","Aamna","Arsalan"]


function Header() {
  return (
    <>
    <h2>Students Names</h2>
      {studentsName.map(student => <p>{student}</p>)}
    </>
  )
}

export default Header
