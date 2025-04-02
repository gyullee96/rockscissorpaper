import React from 'react'

const Score = (props) => {
    return (
        <div className='score'>
            <h2>{props.title}</h2>
            <h2>{props.score}</h2>
        </div>
    )
}

export default Score