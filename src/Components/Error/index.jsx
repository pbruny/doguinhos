import React from 'react'

const Error = ({ error }) => {
  if(!error) return null

  return (
    <p className='errorMessage'>{error}</p>
  )
}

export default Error