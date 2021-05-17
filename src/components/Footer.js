import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
    <div className="container-footer">
      <br />
      <h4>Copyright Zeeshan Patel &copy; 2021</h4>
      <br />
        <Link to="/about">
          <button className="btn-about">About</button>
        </Link>
      </div>
    </footer>
  );
};
