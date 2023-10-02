// import Containner from "./Components/Containner";
import Main from "./Components/Main";
import SelectMenu from "./Components/SelectMenu";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>


      <Routes>
        <Route path="/" Component={Main }></Route>
        <Route path="/selectmenu" Component={SelectMenu}></Route>
      </Routes>
    </>
  );
}


export default App;
