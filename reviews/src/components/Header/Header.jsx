import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h2 className='display-3 fw-bold'>{props.title}</h2>
      <div className='accent-line'></div>
    </div>
  )
}

export default Header
