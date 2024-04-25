
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white");
  const [Auto, setAuto] = useState("Auto Colour");
  let value = 0;
  function auto() {
    let a = "123456789ABCDEF"
    let b = "#";
    let colorcode = b;
    setAuto(`Start  ${++value}`)
    for (let i = 0; i < 6; i++) {
      colorcode += a[Math.floor(Math.random() * a.length)]
    }
    console.log(colorcode);
    setColor(colorcode)
  }

  let autocolor;
  const start = () =>{
    autocolor = setInterval(auto,1000)
    setTimeout(stop,10000)
  }
  const stop = () =>{
    setAuto("Stop")
    clearInterval(autocolor)
    setAuto("Auto Colour")
  } 

  return (
    <>
      <div className="main_div" style={{ backgroundColor: color }}>
        <div className='sub_div'>
          <ul>
            <li style={{ backgroundColor: 'red' }} onClick={() => setColor("red")}>Red</li>
            <li style={{ backgroundColor: 'yellow' }} onClick={() => setColor("yellow")}>Yellow</li>
            <li style={{ backgroundColor: 'blue' }} onClick={() => setColor("blue")}>Blue</li>
            <li style={{ backgroundColor: 'green' }} onClick={() => setColor("green")}>Green</li>
            <li style={{ backgroundColor: 'white' }} onClick={() => setColor("white")}>White</li>
            <li style={{ backgroundColor: 'olive' }} onClick={() => setColor("olive")}>Olive</li>
            <li style={{ backgroundColor: 'gray' }} onClick={() => setColor("gray")}>Gray</li>
            <li style={{ backgroundColor: 'pink' }} onClick={() => setColor("pink")}>Pink</li>
            <li style={{ backgroundColor: 'purple' }} onClick={() => setColor("purple")}>Purple</li>
            <li style={{ backgroundColor: 'lavender' }} onClick={() => setColor("lavender")}>Lavender</li>
            <li style={{ backgroundColor: 'white' }} onClick={start}>{Auto}</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
