import React from 'react'
import "./Logo.css"

export default function Logo(props) {
  return (
    <div className='logo-container'>
        <h1 className='logo-title'>Logo</h1>
        <img className='logo-image' alt={props.image} src={props.image} />
    </div>
  )
}
