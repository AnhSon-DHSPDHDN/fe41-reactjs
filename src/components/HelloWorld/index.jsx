const HelloWorld = (props) => {
  console.log(props, "props ne!!!!!");
  console.log(props.children, "Children ne!!");

  switch (props.heading) {
    case 1:
      return <h1 style={{ color: props.color }}>{props.children}{props.content}</h1>;
    case 2:
      return <h2 style={{ color: props.color }}>{props.children}{props.content}</h2>;
    case 3:
      return <h3 style={{ color: props.color }}>{props.children}{props.content}</h3>;
    case 4:
      return <h4 style={{ color: props.color }}>{props.children}{props.content}</h4>;
    case 5:
      return <h5 style={{ color: props.color }}>{props.children}{props.content}</h5>;
    case 6:
      return <h6 style={{ color: props.color }}>{props.children}{props.content}</h6>;
    default:
      return <h1 style={{ color: props.color }}>{props.children}{props.content}</h1>
  }
}

export default HelloWorld;
