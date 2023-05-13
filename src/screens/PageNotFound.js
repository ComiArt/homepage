import '../App.css';
import notfound from '../assets/img/404.png'

function PageNotFound() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={notfound} className="App-logo" alt="logo" />
            <p>404 Not Found</p>
        </header>
    </div>
  );
}

export default PageNotFound;