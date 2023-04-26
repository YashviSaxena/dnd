import React from 'react'
import {useDrag} from "react-dnd";

// function Picture({id,url}) {
//    const [{isDragging},drag] = useDrag(()=>({
//     type:"image",
//     item:{id:id},
//     collect:(monitor)=>({
//       isDragging:!!monitor.isDragging(),
//     })
//    }))
//    return( 
//    <div className="flex">
//    <img 
//    ref={drag}
//    src={url} 
//    width="150px" 
//    style={{border: isDragging ? "5px solid pink" : "0px"}}/>
//    </div>
//    )

// }

// export default Picture

function Picture({id}) {
  const [{isDragging}, drag] = useDrag(()=>({
    type:"input",
    item:{id:id},
    collect:(monitor)=>({
      isDragging:!!monitor.isDragging(),
    })
  }));

  return (
    <div className="flex ">
      <input
      className='p-2 w-20 h-10 '
        ref={drag}
        type="text"
        placeholder="Drag me"
        style={{border: isDragging ? "5px solid pink" : "0px"}}
      />
    </div>
  );
}

export default Picture;