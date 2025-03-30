import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {

  return (
    <div className='App'>
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random Color Component */}
      {/* <RandomColor/> */}

      {/* Star rating component */}
      <StarRating noOfStars={10}/>

      {/* Image slider component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'}/> */}
    </div>
  )
}

export default App;
