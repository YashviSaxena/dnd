import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragDrop from './components/DragDrop';
import './style.css';
import SideLBlock from './components/SideLBlock';

function App() {
  
  return (

    <div className="main">
   <DndProvider backend={HTML5Backend} >
    <div className="App flex justify-center items-center flex-col">
        <DragDrop />
    </div>
   </DndProvider>
   </div>
  );
  }

export default App;
