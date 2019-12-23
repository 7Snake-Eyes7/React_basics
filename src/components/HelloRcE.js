import React from 'react'

const HelloRcE = () =>{
    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h4',null,'this is how to create using React.createElement method, where it ll accept a minimum of 3 arguments, i have to chain these React.createElement(...) inorder to achieve the desired results. 2nd argument is taken as null, it accepts a key-value pair.'))
}

export default HelloRcE