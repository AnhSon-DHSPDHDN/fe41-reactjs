import HelloWorld from "./components/HelloWorld";
import Square from "./components/Square";

function App() {
  return (
    <div>
      <HelloWorld content="SonTVA" color="red" heading={1}>
        <label>Name: </label>
      </HelloWorld>
      <HelloWorld content="18" color="blue" heading={2}>
        <label>Age: </label>
      </HelloWorld>
      <HelloWorld content="Da nang" color="blue" heading={3}>
        <label>Address: </label>
      </HelloWorld>

      <Square />
    </div>
  );
}

export default App;
