import React, { useState } from 'react';

export default function Componentfunc(props) {
  
const [count , setCount] = useState(0);
    

return <div style={{textAlign : 'center', margin: 100}}>
 <h2>Functional Component</h2>
 <button onClick={() => setCount(count + 1)}>
    Increment
</button>
<p><h2>{count}</h2></p>
<button onClick={() => setCount(count - 1) }>
    Decrement
</button>
 

</div>
  
}
