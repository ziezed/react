import React from 'react'

const Hello = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello world {props.nama} {props.akhir} </h1>
            <p>ini anak props hello</p>
            {props.children[1]}
        </div>
    )
}

export default Hello
