import React from 'react'
import { useState } from 'react'
const TestingHooks = () => {
    const [show, set] = useState(true);
    const arr = [{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus nam quisquam minus asperiores, animi alias? Vero corrupti accusamus eum voluptatum molestias nobis cumque odio et quibusdam dolores culpa necessitatibus, explicabo minima, nostrum itaque pariatur tempora iste architecto! Quibusdam deserunt mollitia molestias nemo eos delectus magnam sapiente vitae dolor ea consequatur, tempore quis cupiditate fuga exercitationem numquam vero facilis cum quos quisquam doloremque amet illo maxime fugit! Sunt soluta provident placeat alias id incidunt quod libero. Delectus placeat assumenda nesciunt atque voluptate debitis illo earum quaerat, animi veniam cupiditate maiores dolor! Sed consequuntur dolorem, exercitationem at nemo neque adipisci ipsam!"}]
    let desc = arr[0].text;
    if(show){
        desc = desc.substring(0,60)+'...';
    }
  return (
    <div>
        <div>{desc}</div>
        
        <button onClick={()=>(set((prev)=>(!prev)))}>{show? 'More':'Less'}</button></div>
    
  )
}

export default TestingHooks