import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <Link to='/'>
        <h1>
          TodoList
        </h1>
      </Link>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/'>
          <li>idk</li>
        </Link>
        <Link to='/'>
          <li>idk</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default Navbar;
