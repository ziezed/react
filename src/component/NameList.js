import React from 'react'
import Person from './Person'
import Orang from './Orang'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 31,
            skill: 'react'
        },
        {
            id: 2,
            name: 'nana',
            age: 44,
            skill: 'angular'
        },
        {
            id: 3,
            name: 'rudi',
            age: 24,
            skill: 'vue'
        }
    ]

    const personList = persons.map(person => <Person person={person} /> )
    

    // const oranglist = () =>(Orang )

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
