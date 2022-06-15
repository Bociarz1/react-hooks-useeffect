import { useEffect, useState } from "react";
import MouseEventComp from "./MouseEventComp";

function CleanUpComp() {
  // CleanUp helps unmounting components functionality
  const [toggle, setToggle] = useState(false)
  return ( 
    <>
      <h3>CleanUp</h3>
      <button onClick={()=>setToggle(!toggle)}>Start counting</button> <br/>
      {toggle && <MouseEventComp/>}
    </>
   );
  <>

  </>
}

export default CleanUpComp;