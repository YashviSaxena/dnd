import React, { useState } from 'react'
import Picture from './Picture'
import { useDrop } from 'react-dnd'
import '../style.css'
// const PictureList =[
//   {
//     id:1,
//     url:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNS92ODM0LW5vb24tMTAucG5n.png?s=sPgTA2M4MqH-5cmLLKSorfVtTeazU6MM0tYsMHFNfjQ"
//   },
//   {
//     id:2,
//     url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4BJmNtIF5K69wLxu9gWGK_cl513rPPbeBYGM5wdfZlzii8wVHtgw_MjQnufXG9qLAQo&usqp=CAU"
//   },
//   {
//     id:3,
//     url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png"
//   },
   
// ]
const PictureList = [
  {
    id: 1,
    placeholder: "Input 1"
  },
  {
    id: 2,
    placeholder: "Input 2"
  },
  {
    id: 3,
    placeholder: "Input 3"
  }
];



// function DragDrop() {

//   const [board,setBoard] = useState([]);

//   const [{isOver},drop] = useDrop(()=>({
//        accept:"image",
//        drop: (item) => addImageToBoard(item.id),
//        collect:(monitor)=>({
//         isOver:!!monitor.isOver(),
//       })
//   }));
//   const addImageToBoard = (id) => {
//     const pictureList = PictureList.filter((picture)=>id=== picture.id);
//     setBoard((board)=>[...board,pictureList[0]])
//     // to replace
//     // setBoard([pictureList[0]]);
//   };

//   return (
//    <>
//    <div className="Pictures flex justify-center">
//     {PictureList.map((picture)=>{
//     return<Picture url={picture.url} id={picture.id}/>
//    })}
//    </div>
//    <div className="Board" ref={drop}>
//    {board.map((picture)=>{
//     return<Picture url = {picture.url} id={picture.id}/>;
//    })}
//    </div>
//    </>
//   )
// }

// export default DragDrop

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{isOver}, drop] = useDrop(()=>({
    accept: "input",
    drop: (item) => addInputToBoard(item.id),
    collect:(monitor)=>({
      isOver:!!monitor.isOver(),
    })
  }));

  const addInputToBoard = (id) => {
    const inputList = PictureList.filter((input) => id === input.id);
    setBoard((board)=>[...board,inputList[0]]);
    // to replace
    // setBoard([inputList[0]]);
  };

  return (
    <>
      <div className="Pictures flex justify-center">
        {PictureList.map((input) => {
          return <Picture id={input.id} key={input.id}/>;
        })}
      </div>
      <div className="Board flex" ref={drop}>
        {board.map((input) => {
          return (
            <Picture
              id={input.id}
              key={input.id}
              placeholder={input.placeholder}
            />
          );
        })}
      </div>
    </>
  );
}

export default DragDrop;