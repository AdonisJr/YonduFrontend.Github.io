import React from 'react'

export default function DisplayResult({calcValue}) {
  return (
    <div className='displayResult'>
        {calcValue || 0}
    </div>
  )
}
