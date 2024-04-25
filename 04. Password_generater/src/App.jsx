import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState("")
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "~!@#$%^&*()-_=+[{]}\|;:',<.>/?";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])


  const copypassword = useCallback(() =>{
    console.log("hello");
    passwordRef.current.select();
    passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerater();
  }, [length, numberAllow, charAllow, passwordGenerater])

  return (
    <>
      <div>
        <div>
          <input type="text"
            value={password}
            className=''
            placeholder='Password'
            readOnly
            ref={passwordRef} />
          <button onClick={copypassword}>Copy</button>
        </div>
        <input type="range"
          min={6}
          max={50}
          value={length}
          
          onChange={(e) => { setLength(e.target.value) }} />

        <label > Length : {length}</label>

        <input type="checkbox"
          defaultChecked={numberAllow}
          id=''
          onChange={() => {
            setNumberAllow((prev) => !prev)
          }} />

        <label > Numbers </label>

        <input type="checkbox"
          defaultChecked={charAllow}
          id=''
          onChange={() => {
            setCharAllow((prev) => !prev)
          }} />

        <label > Character </label>
      </div>
    </>
  )
}

export default App
