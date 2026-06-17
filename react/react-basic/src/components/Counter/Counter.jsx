import { useState } from "react"
import './Counter.css'
import { useEffect } from "react"

function Counter({ state }) {
 const [count, setCount] = useState(0);
 const [isFlashed, setFlashed] = useState(false);
 console.log(`render ${count} ${state}`)

// useEffect(() => {
//     setFlashed(true);
    
//      const timeoutId = setTimeout(() => {
//         setFlashed(false)
//     }, 1000)

//     return () => { 
//         clearTimeout(timeoutId)
//     };
//  }, [count]);

  return (
      <button
        type="button"
        className={`Counter ${isFlashed ? 'Counter_flashed' : ''}`}
        onClick={() => {
            setCount((count) => count + 1)
            setFlashed(true);
    
            const timeoutId = setTimeout(() => {
                setFlashed(false)
            }, 1000)

            return () => { 
                clearTimeout(timeoutId)
            };
        }}
      >
        Count is {count}
      </button>
  )
}


export default Counter