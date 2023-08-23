import "./index.scss";
import "../public/Font/stylesheet.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Todolist } from "./components/Todolist";

export const App = () => {

   return(
    <>
      <div className="container">
      <Todolist/>
    </div>
    </>
   )
}
export default App