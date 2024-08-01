import React, { useState } from 'react'

const RandomColorSelection = () => {
  const [typeOfColor,setTypeOfColor]=useState("hex");
  const [color,setColor]=useState("#000000");

  const handleCreateRandomHexColor=()=>{

  }

  const handleCreateRandomRgbColor=()=>{

  }
  return (
    <div style={{
      height:"100vh",
      width:"100vw",
      backgroundColor:color

    }}>
      <button onClick={()=>setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={()=>setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={()=>
        typeOfColor=="hex"?handleCreateRandomHexColor:handleCreateRandomRgbColor
       }>Create Ranodm Color</button>
    </div>
  )
}

export default RandomColorSelection;
