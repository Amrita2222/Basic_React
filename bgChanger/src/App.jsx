import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className="h-screen bg-blue-500 w-full duration-200"  style={{backgroundColor: color}}>
      <div className="flex fixed bottom-20 inset-x-2 justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl rounded-3xl bg-white px-2 py-1">
          <button 
            onClick={() => {setColor("red")}}
            className='outline-none px-4 py-1 rounded-full shadow-2xl text-white' 
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button 
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full shadow-2xl text-white' 
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button 
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full shadow-2xl text-white' 
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button 
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-full shadow-2xl text-white' 
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button 
            onClick={() => setColor("pink")}
            className='outline-none px-4 py-1 rounded-full shadow-2xl text-white' 
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button 
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-1 rounded-full shadow-2xl text-white' 
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button 
            onClick={() => setColor("black")}
            className='outline-none px-4 py-1 rounded-full shadow-2xl text-white' 
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
