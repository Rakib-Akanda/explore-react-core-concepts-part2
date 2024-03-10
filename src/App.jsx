import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./users";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick2 = () => {
    alert("Button2 Clicked");
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    // <> etake empty tag ba Fragment bole.
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('Third Button clicked')}}>Third</button>
      {/* vejjailla */}
      <button onClick={() => addToFive(23)}>Four</button>
    </>
  );
}

export default App;
