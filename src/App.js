import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/features/counter/counterSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import HeaderComponent from "./components/HeaderComponents";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import GlobalNavigate from "./utils/globalNavigate";
import { useEffect } from "react";
import { actGetInfoMe } from "./redux/features/auth/authSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(actGetInfoMe());
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalNavigate />
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:idProduct" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>

      {/* <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button> */}
    </div>
  );
}

export default App;
