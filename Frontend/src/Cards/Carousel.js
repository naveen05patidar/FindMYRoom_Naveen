import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('../Assets/images/hero1.jpg'), 
   caption:"Find My Room",
   description:"Find your home fast"
  },
  {
    image:require('../Assets/images/hero2.jpg'), 
    caption:"Find My Room",
    description:"Best Houses here"
   },
   {
    image:require('../Assets/images/hero3.jpg'), 
    caption:"Find My Room",
    description:"your Dreame home waiting for you"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}  style={{ height: "50%" }} >
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={slide.description}>        
        <img
          className="d-block w-100"
          src={slide.image} height={"480px"}
          alt="slider"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;