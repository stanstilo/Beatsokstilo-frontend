import React from 'react'

export default function SearchItem({showBeats}) {
    return (
    <div className = "search-card">
      {showBeats.map((beat) => {
       return (
       <div key = {beat.id}>
         <p>{beat.title}</p>
       </div>
      )
      })}
    </div>
    )
}
