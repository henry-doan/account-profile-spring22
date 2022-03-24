import { Link } from 'react-router-dom';
import { AccountConsumer } from '../../providers/AccountProvider';

const MainNavbar = () => (
  <AccountConsumer>
    { value => (
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/profile'>
            <li>{value.username}</li>
          </Link>
        </ul>
      </nav>
    )}
  </AccountConsumer>
)

export default MainNavbar;