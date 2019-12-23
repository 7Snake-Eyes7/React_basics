import React, { Children } from 'react'

// function Greet(){
//     return <h1>welcome rak</h1>
// }

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>hello {props.name} a.k.a {props.heroName} - functional component</h1>
            {props.children}
        </div>
    )
}
export default Greet;