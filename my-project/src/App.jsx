import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation";
import HomePage from "./Customer/Pages/HomePage/HomePage";
function App() {
  return (
    <>
      <Navigation />
      <div>
        <HomePage/>
      </div>
    </>
  );
}

export default App;
