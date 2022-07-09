
import './App.css';
import occipital from '../src/assets/occipital/occipital.png';
import frontal from '../src/assets/frontal/frontal.jpg'
import temporal from '../src/assets/temporal/temporal.jpg'
import EasyCarousal from 'carousal-hub';
import cerebellum from '../src/assets/cerebellum/cerebellum.jpg';
import spinalcord from '../src/assets/spinalcord/spinalcord.jpg';
import React from 'react'
import Carousel from 'better-react-carousel'

function App() {
  return (
    <div className="App">
      <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          {/* anything you want to show in the grid */}
        </Carousel.Item>
        {/* ... */}
      </Carousel>
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
