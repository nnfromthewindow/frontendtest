import Glide from '@glidejs/glide'
import { useEffect, useRef } from 'react';


const sliderConfiguration= {
  perView: 4,
  type: "carousel"
};

const images = [{
  src: '/public/thumb_1.jpg',
  alt: "Mountain"
},
{
  src: '/public/thumb_2.jpg',
  alt: "Mountain"
},
{
  src: '/public/thumb_1.jpg',
  alt: "Mountain"
},
{
  src: '/public/thumb_2.jpg',
  alt: "Mountain"
},]


const History = () => {

  const ref = useRef();
  useEffect(() => {
    const slider = new Glide(ref.current, sliderConfiguration);
    slider.mount();
  }, [ref])

  
  return (
    <div className="history">
      <div className="history-title">
        <div className="number-container">
        <h1 className="number">01.</h1>
        <h2 className="title">HISTORY</h2>
        </div>
        <h3 className="text-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ducimus, repudiandae possimus tenetur architecto quo at molestias eius asperiores hic! Tenetur mollitia sint iure libero dolore dignissimos consequuntur maiores cumque?
        </h3>
      </div>
      <div className="glide-container">
        <div ref={ref}  className='glide'>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>
              {images.map((image,i)=>{
                return <li className='glide__slide' key={i}><img src={image.src} alt={image.alt} /></li>
              })}
            </ul>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {images.map((image,i)=>{
              return <button key={i} className="glide__bullet" data-glide-dir={`=${i}`}></button>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default History