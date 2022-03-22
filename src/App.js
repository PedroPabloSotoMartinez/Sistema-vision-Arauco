import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReactPlayer from 'react-player';


function App() {
  return (
    <div className="container-fluid fondo">
      <Navbar />
      <div className="row mt-5">
        <div className="col mt-3 py-4">
          <ReactPlayer 
            url="https://youtu.be/0_FTJufm1DE"
            width="100%"
            controls
          />
          <p className="text-center text-camara py-2"><a href="#">Cámara 1</a></p>
        </div>
        <div className="col mt-3 py-4">
        <ReactPlayer 
            url="https://youtu.be/0_FTJufm1DE"
            width="100%"
            controls
          />
          <p className="text-center text-camara py-2"><a href="#">Cámara 2</a></p>
        </div>
        <div className="col mt-3 py-4">
        <ReactPlayer 
            url="https://youtu.be/0_FTJufm1DE"
            width="100%"
            controls
          />
          <p className="text-center text-camara py-2"><a href="#">Cámara 3</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
