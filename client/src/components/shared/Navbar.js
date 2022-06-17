import { Link } from 'react-router-dom';

const Navbar = () => (
  <>

    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow sticky-top">
  <button className="navbar-toggler" data-toggle="collapse" data-target="#navContent">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to='/'>Home</Link>
      </li>
      <li className="nav-item">
      <Link to='/workers'>Workers</Link>
      </li>
      <li className="nav-item">
      {/* <Link to='/'>Home</Link> */}
      </li>
    </ul>

  </div>
  <a className="navbar-brand" href="/">Website</a>
  </nav>
  </>
)

export default Navbar;
