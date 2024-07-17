const CardImage = (props) => {
  return <div className='card-component__image'>
    <img
      className='card-component__image-img'
      src={props.cardInfo.imgUrl} alt=''
    />
  </div>
}

export default CardImage
