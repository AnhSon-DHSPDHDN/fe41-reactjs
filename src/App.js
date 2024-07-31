import { useState, useMemo, useCallback } from "react";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";

function App() {
  const [triggerRerender, setTriggerRerender] = useState(false);
  const variable = 5;
  const data = useMemo(() => {
    return [];
  }, []);

  const handleClick = useCallback(() => {}, []);

  return (
    <div className="App">
      <h1>Demo Render in react</h1>
      <button onClick={() => setTriggerRerender(!triggerRerender)}>
        Trigger App Rerender
      </button>
      {triggerRerender && <b>Say hi!!!</b>}

      <hr />
      <HeaderComponent />
      <hr />
      <MainComponent
        variable={variable}
        data={data}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
