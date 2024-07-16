import "./App.css";
import ChildComponent from "./components/ChildComponent";
import GrandChildren from "./components/GrandChildComponent";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <>
    <ParentComponent/>
    <ChildComponent/>
     <GrandChildren/>
    </>
  );
}

export default App;
