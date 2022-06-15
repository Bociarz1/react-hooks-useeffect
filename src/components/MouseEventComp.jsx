import { useEffect, useState } from "react";

function MouseEventComp() {
  const [x,setX] = useState("")
  const [y,setY] = useState("")

  const mouseMove = (e) => {
    const clientX = setX(e.clientX)
    const clientY = setY(e.clientY)
    console.log(`mouseMove function working`)
  }
  useEffect(() => {
    console.log("useEffect MouseMove called")
    window.addEventListener("mousemove",mouseMove)

    // clean up function remove listener
    return () => {
      window.removeEventListener("mousemove", mouseMove )
    }
  }, [])
  return ( 
    <>
      X position: {x} <br/>
      Y position: {y}
    </>
   );
}

export default MouseEventComp
