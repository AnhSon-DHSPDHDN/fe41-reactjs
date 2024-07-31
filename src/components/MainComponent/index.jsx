import React from "react";

const MainComponent = (props) => {

  // Gỉa lập xử lý nặng ở main
  for (let i = 0; i < 30000; i++) {
    console.log("main cp rerender");
  }

  return <h3>Main Component</h3>
}

export default React.memo(MainComponent) // HOCs
