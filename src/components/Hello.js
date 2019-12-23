import React from 'react'

const Hello = () =>{
    return (
        <div>
            <h4>
                hello rak (using jsx tags - even if i use this, 
                jsx internally converts its elements into React.createElement,
                 hence the need of React imports even if it is not vivid in this block of code)
            </h4>
        </div>
    )
}

export default Hello