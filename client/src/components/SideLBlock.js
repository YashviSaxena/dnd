import React from 'react'
import '../style.css'
import {useDrag} from "react-dnd";

function SideLBlock(id) {
    const [{isDragging}, drag] = useDrag(()=>({
      type:"box",
      item:{id:id},
      collect:(monitor)=>({
        isDragging:!!monitor.isDragging(),
      })
    }));
  return (
    <div className='container'>
      <div className="flex flex-col justify-center items-center"  >
          
        <p className="p-2 bg-pink cursor-pointer text-black bg-teal-400 mt-2" 
        ref={drag}
        type="box"
        style={{border: isDragging ? "5px solid white" : "0px"}}>My name is Yashvi</p>
      </div>
      
    </div>
  )
}

export default SideLBlock