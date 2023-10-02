// import Containner from "../Components/Containner";
import Navbar from "./Navbar";
import Footer from "./Footer"
function Main() {

  return (
    <>
      <div className="main-Wrapper" style={{ position: "relative" }}>
        {" "}
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default Main;
