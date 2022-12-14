import { Carousel } from 'antd';
import React from 'react';
import "./Carousel.css";

const PicCarousel = () => (
  <Carousel effect="fade">
    <div>
      <div id = 'contentStyle'>
        <div id='Pictureframe'>
          <a href='https://firebasestorage.googleapis.com/v0/b/zhanhonglu-fb98f.appspot.com/o/BlendzPoster.png?alt=media&token=a98df4d0-33a2-483a-9df7-4bfae7a53ea9'
              target='Pic1'>
            <img src='https://firebasestorage.googleapis.com/v0/b/zhanhonglu-fb98f.appspot.com/o/BlendzPoster.png?alt=media&token=a98df4d0-33a2-483a-9df7-4bfae7a53ea9'
                alt='Not Found' height='300px' id = 'picture'/>
          </a>
        </div>
        Poster
      </div>
    </div>
    
    <div>
      <div id = 'contentStyle'>
          <div id='Pictureframe'>
            <a href='https://blendz.herokuapp.com/'
                target='Pic1'>
              <img src='https://firebasestorage.googleapis.com/v0/b/zhanhonglu-fb98f.appspot.com/o/BlednzPic.jpg?alt=media&token=4beaae83-d3b2-4f7c-86b3-87b38c7f6420'
                  alt='Not Found' height='300px' id = 'picture'/>
            </a>
          </div>
          Website
        </div>
    </div>
    
    
    <div>
    <div id = 'contentStyle'>
          <div id='Pictureframe'>
            <a href='https://www.figma.com/file/fhISbXA1Dk6qZoehMUhDI9/Blendz?node-id=0%3A1'
                target='Pic1'>
              <img src='https://firebasestorage.googleapis.com/v0/b/zhanhonglu-fb98f.appspot.com/o/BlenzUIDesignPic.jpg?alt=media&token=4615bde4-f029-4e4b-8396-fe5ac8c877ba'
                  alt='Not Found' height='300px' id = 'picture'/>
            </a>
          </div>
          UI Design
        </div>
    </div>

  </Carousel>
);

export default PicCarousel;