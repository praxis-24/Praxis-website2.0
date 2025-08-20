import Navbar from "./assets/components/navbar";
import Heropage from "./assets/components/heropage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto p-4 grid grid-cols-3 gap-5 max-md:grid-cols-1"></div>
      <Heropage />
    </div>
  );
};

export default App;
