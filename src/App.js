import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Header from "./Components/Header";
import Task from "./Components/Task";
library.add(faList, faTrashCan);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Task />
      </div>
    </div>
  );
}

export default App;
