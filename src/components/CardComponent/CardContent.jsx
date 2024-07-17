const CardContent = (props) => {
  return <div className='card-component__content'>
    <h3 className='card-component__title'>{props.cardInfo.name}</h3>
    <p className='card-component__description'>{props.cardInfo.job}</p>
  </div>
}

export default CardContent
