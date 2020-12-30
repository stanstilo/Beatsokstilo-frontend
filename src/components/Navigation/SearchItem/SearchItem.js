import React from 'react'
import './SearchItem.css'

export default function SearchItem({searchBeats}) {
    return (
    <div className = "search-card">
      {searchBeats.map((beat) => {
       return (
       <div key = {beat._id}>
         <p>{beat.title}</p>
       </div>
      )
      })}
    </div>
    )
}
