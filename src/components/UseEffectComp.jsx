import { useEffect, useState } from "react";

function UseEffectComp() {
  // At first if you want have a A FEW EFFECTS in ONE COMPONENT, you have to create a few useEffect hooks 
  // you can use useEffect hook in three ways:

  // 1. effect after EVERY RENDER
  useEffect(() => {
    console.log("1.effect after every render")
  })

  //2. effect ONLY ONCE after initial render - adding empty Array od dependency
  useEffect(() => {
    console.log("2.effect ONLY ONCE after initial render")
  }, [])

  // 3. effect after state value has been changed

  const [state, setState] = useState("")

  const handler = () => {
    setState(Math.random())
  }

  useEffect(() => {
    console.log("3.effect after state value has been changed")
  }, [state])

  return ( 
    <>
      <h3>useEffect</h3>
      <button onClick={handler}>Click to change state value</button>
    </>
   );
}

export default UseEffectComp