import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import  Containner from  "./Components/Containner"
function App() {
  let [dataapi, setdataapi] = useState("");
  useEffect(() => {
    try {
      function aPI(search) {
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=Pizza`)
          .then((response) => {
            return response.json();
          })
          .then((getdata) => {
            // console.log(getdata.data, "===>> ye data API ka heen");
            setdataapi(getdata.data);
          
          });
      }
      aPI();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main>
      
      <Containner  fooddata={dataapi}/>
    </main>
  );
}

export default App;
