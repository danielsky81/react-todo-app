import React from 'react'
import Button from './Button'

const Header = () => {
  const onClick = () => {
    console.log('onClick')
  }

  return (
    <header className='header'>
      <h1>ToDo App</h1>
      <Button color='green' text='Add' onClick={onClick}/>  
    </header>
  )
}

export default Header
