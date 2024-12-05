import { Link } from 'react-router-dom';

const Nav = () => {
// TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav style={{ 
      padding: '10px',
      position: 'absolute', 
      top: '0', 
      left: '0'
    }}>
      <ul style={{ 
        display: 'flex', 
        listStyleType: 'none', 
        padding: 0, 
        margin: 0 
      }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/SavedCandidates" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
            Potential Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

