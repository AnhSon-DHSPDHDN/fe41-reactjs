import React from 'react'
import { Flex } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const { userInfo, accessToken } = useSelector(state => state.auth);

  const handleGoToLogin = () => {
    navigate('/login')
  }

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: 70,
      backgroundColor: 'aqua',
      gap: 10,
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to={'/home'}>HomePage</Link>
      <Flex gap={20}>
        {accessToken && <span>Hi: <b>{userInfo?.fullName || ''}</b></span>}
        {
          accessToken
            ? <button>Logout</button>
            : <button onClick={handleGoToLogin}>Login</button>
        }
      </Flex>
    </div>
  )
}

export default HeaderComponent
