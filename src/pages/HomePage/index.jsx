import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllProduct } from '../../redux/features/product/productSlice';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { allProducts, isLoading } = useSelector(state => state.product)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(actFetchAllProduct())
  }, [])

  const handleGoToProductDetail = (idProduct) => {
    navigate(`/product/${idProduct}`)
  }

  return (
    <div>
      <h1>HomePage</h1>
      {isLoading && <Spin />}
      <ul>
        {allProducts.map((_product) => {
          return <li key={_product.id} onClick={() => handleGoToProductDetail(_product.id)}>
            {_product.productName} - {_product.productPrice} $
          </li>
        })}
      </ul>
    </div>
  )
}

export default HomePage
