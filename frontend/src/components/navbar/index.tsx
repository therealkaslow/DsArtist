import { MoviePage } from 'types/movie';
import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import './styles.css';

function Navbar() {
  return (
    <header className='header'>
      <nav className="container">
        <div className="dstrap-nav-content">
          <h1>DsArtist</h1>
          <a href="https://github.com/therealkaslow">
            <div className='dstrap-contact'>
              <GithubIcon/>
              <p className='dstrap-contact-link'>/therealkaslow</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
