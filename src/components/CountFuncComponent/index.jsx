import { useEffect, useState } from "react";

let timer = null;
const CountFuncComponent = () => {
  const [btcPrice, setBtcPrice] = useState(65000);

  useEffect(() => {
    console.log("ComponentDidMount Run!!!");

    timer = setInterval(() => {
      console.log("Cập nhật giá BTC");
      setBtcPrice(60000 + Math.floor(Math.random() * 10000))
    }, 2000)

    return () => {
      console.log("componentWillUnMount Run!!!");
      clearInterval(timer);
    }
  }, [])
  // [] => dependencies là những tham số phụ thuộc
  // khi dependencies là [] thì effect sẽ chạy 1 lần duy nhất sau render

  useEffect(() => {
    // console.log("ComponentDidUpdate Run!!!");
    if (btcPrice < 63000) {
      console.log("Buy BTC");
    }
  }, [btcPrice]) // => trở thành componentDidupdate
  // [btcPrice] Phụ thuộc dependencies nếu thay đổi thì chạy lại hàm callback

  console.log("Render Run !!!");
  return <div>
    <h1>Bitcoin Price: FuncComponent</h1>
    <h3>{btcPrice}</h3>
  </div>
}

export default CountFuncComponent;
