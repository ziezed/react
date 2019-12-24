import React from 'react'

function Person({person}) {
    return (
        <div>
            <h3> 
                nama: {person.name} umur: {person.age} keahlian: {person.skill} 
            </h3> 
        </div>
    )
}

export default Person
