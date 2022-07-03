
import './App.css';
import occipital from '../src/assets/occipital/occipital.png';
import frontal from '../src/assets/frontal/frontal.jpg'
import temporal from '../src/assets/temporal/temporal.jpg'
import EasyCarousal from 'carousal-hub';
import cerebellum from '../src/assets/cerebellum/cerebellum.jpg';
import spinalcord from '../src/assets/spinalcord/spinalcord.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EasyCarousal hint='What are you' boldHint='here to do?'>
          <div className="items full-width text-center">
            <h1 className="product">
              <img src={occipital}></img>
            </h1>
            <p> This is the occipital lobe</p>
          </div>

          <div className="items full-width text-center">
            <h1 className="product">
              <img src={frontal}></img> 2</h1>
            <p>This is the frontal lobe.</p>
          </div>

          <div className="items full-width text-center">
            <h1 className="product">
              <img src={temporal}></img>
            </h1>
            <p>Hello this is the temporal lobe</p>
          </div>

          <div className="items full-width text-center">
            <h1 className="product">
              <img src={cerebellum}></img>
              <p>hello this is the cerebellum</p>
            </h1>
          </div>

          <div className="items full-width text-center">
            <h1 className="product">
              <img src={spinalcord}>
              </img>
              <p>hello this is the spinal cord</p></h1>
          </div>
        </EasyCarousal>

      </header>
    </div>
  );
}

export default App;
