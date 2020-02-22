import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import initialData from "./initial-data";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const state = initialData;

  return (
    <DragDropContext onDragEnd={() => console.log("derp")}>
      {state.columnOrder.map(columnId => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = initialData;
//     this.onDragEnd = this.onDragEnd.bind(this);
//   }

//   onDragEnd(result) {
//     // dropped outside the list
//     console.log("drag ended");
//   }

//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <div>
//           {this.state.columnOrder.map(columnId => {
//             const column = this.state.columns[columnId];
//             const tasks = column.taskIds.map(
//               taskId => this.state.tasks[taskId]
//             );

//             return <Column key={column.id} column={column} tasks={tasks} />;
//           })}
//         </div>
//       </DragDropContext>
//     );
//   }
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
