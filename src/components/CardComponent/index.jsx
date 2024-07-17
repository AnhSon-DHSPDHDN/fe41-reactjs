import CardContent from './CardContent';
import CardImage from './CardImage';
import './style.scss';

const CardComponent = (props) => {
  console.log(props, "props CardComponent");

  return <div className='card-component'>
    <CardImage {...props} />
    <CardContent {...props} />
  </div>
}

export default CardComponent;
