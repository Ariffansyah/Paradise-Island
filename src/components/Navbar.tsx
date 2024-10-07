import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg bgcolor">
      <div className="container-fluid">
        <img src={logo} alt="..." height="50px" width="50px"></img>
        <button className="navbar-toggler" type="button" data-bs-theme="dark" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">Profil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/Tour">Tour</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/Culinary">Culinary</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
