import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/features/counter/counterSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import HeaderComponent from "./components/HeaderComponents";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

      {/* <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button> */}
    </div>
  );
}

export default App;
