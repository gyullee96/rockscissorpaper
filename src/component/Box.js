import React from 'react'

const Box = (props) => {
    return (
        <div className='box'>
            <h1>{props.title}</h1>
            <img src='https://images.unsplash.com/photo-1584630932270-fe617b089c02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzdHxlbnwwfHwwfHx8MA%3D%3D' className='img'></img>
            <h2>WIN</h2>
        </div>
    )
}

export default Box