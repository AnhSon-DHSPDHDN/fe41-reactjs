import { useEffect, useRef, useState } from "react";
import CountClassComponent from "./components/CountClassComponent";
import CountFuncComponent from "./components/CountFuncComponent";

function App() {
  const btnRef = useRef(null);
  const myRef = useRef(null);
  let myVariable = 0;
  const [isTrading, setIsTrading] = useState(true);

  useEffect(() => {
    console.log(btnRef.current, "btnRef ne: ");
    myRef.current = [
      {
        id: 1,
        name: "ABC",
      },
    ];
    myVariable = 5;
    btnRef.current.style.color = "red";
    btnRef.current.style.width = "200px";
  }, []);

  console.log(myVariable, "myVariable");
  console.log(myRef.current, "Myref");
  return (
    <div className="App">
      <button ref={btnRef} onClick={() => setIsTrading(!isTrading)}>
        {isTrading ? "NGỪNG" : ""} Trade
      </button>

      {/* Nếu isTrading = true thì hiển thị CountClassComponent */}
      {/* {isTrading && <CountClassComponent />} */}

      {isTrading && <CountFuncComponent />}
    </div>
  );
}

export default App;
