import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1)
        console.log(count);
    }

    function handle2Click(){
        setCount(count + 10)
        console.log(count);
    }
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={handleClick}>
            Kasvata +1
        </button>
        <button onClick={handle2Click}>
            Kasvata +10
            {/* onClick= () => setCount(count + 10) } */}
        </button>
        <div>
            Laskuri: { count }
        </div>
    </div>
  )
}
