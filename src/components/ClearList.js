import React, { Component } from 'react'

const Clear = (props) => {
  const { clearItems } = props

  return (    
    <div className='clearButton'>
      <button onClick={() => clearItems()}>Clear</button>
    </div>
  )
}

export default Clear