import './style.css'
import { Link, useNavigate } from 'react-router-dom'

const HeaderComponent = () => {
  const navigate = useNavigate()

  const handleNavigateToLogin = () => {
    navigate('/login');
  }

  return <div className='header-component'>
    <ul className='header-component__list'>
      <li className='header-component__list-item'>
        <Link to={'/home'}>
          Home
        </Link>
      </li>
      <li className='header-component__list-item'>
        <Link to={'/about'}>
          About
        </Link>
      </li>
      <li className='header-component__list-item'>
        <Link to={'/contact'}>
          Contact
        </Link>
      </li>
    </ul>
    <button onClick={handleNavigateToLogin}>Login</button>
  </div>
}

export default HeaderComponent
