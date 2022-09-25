import { Carousel } from 'antd';
import React from 'react';

const ENSECarousel = () => (
  <Carousel effect="fade">
    <div>
      <div id = 'contentStyle'>
        <div id='Pictureframe'>
          <a href='https://ense-701-team-9-seer.herokuapp.com/'
              target='Pic1'>
          <img src='https://firebasestorage.googleapis.com/v0/b/zhanhonglu-fb98f.appspot.com/o/SPEED.jpg?alt=media&token=b59e211f-ff76-44f8-8bde-98a04d24b799'
              alt='Not Found' height='300px' id='picture'/>
          </a>
        </div>
        SPEED Website
      </div>
    </div>
    
    

  </Carousel>
);

export default ENSECarousel;