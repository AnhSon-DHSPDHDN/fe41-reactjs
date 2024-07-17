import CardComponent from '../CardComponent';
import './style.scss'

const Lists = (props) => {
  console.log(props.data, "props.data ne");

  return <>
    <h1>{props.title}</h1>
    <div className="lists">
      {props.data.map((item) => {
        return <CardComponent key={item.id} cardInfo={item} />
      })}
    </div>
  </>
}

export default Lists;
