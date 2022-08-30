import React from 'react'
import ImageGallery from 'react-image-gallery';

function Home() {
  const images = [
    {
      original: './slide/9.jpg', //aot
    },
    {
      original: './slide/7119387.jpg', //jijutsu kaisen
    },
    {
      original: './slide/7938860.jpg', // kimetsu no yaiba
    },
    {
      original: './slide/1450990.jpg', //parasite
    },
    {
      original: './slide/1450980.jpg', //naruto
    },
    {
      original: './slide/112.jpg', //mushish  
    },
    {
      original: './slide/21.jpeg', 
    },
    {
      original: './slide/1440990.jpg', //deadly sins
    },
    {
      original: './slide/6233325.jpg', //hxh
    }
  ];
  const imagess = [
    {
      original: './slide/3.jpg',  
    },
    {
      original: './slide/6.jpg',  
    },
    {
      original: './slide/15.png',  
    },
    {
      original: './slide/4.jpg', 
    },
    {
      original: './slide/5.jpg', 
    },
    {
      original: './slide/14.jpg', 
    },
    {
      original: './slide/17.jpg', 
    },
    {
      original: './slide/8.jpg', 
    },
    {
      original: './slide/9.jpg', 
    }
  ];

  const imagesss = [
    {
      original: './slide/10.jpg',  
    },
    {
      original: './slide/11.jpg',  
    },
    {
      original: './slide/115.png',  
    },
    {
      original: './slide/14.jpg', 
    },
    {
      original: './slide/12.png', 
    },
    {
      original: './slide/15.png', 
    },
    {
      original: './slide/16.jpeg', 
    },
    {
      original: './slide/1450980.jpg', //naruto
    },
    {
      original: './slide/112.jpg', //mushish  
    }
  ];
 
  const imagessss = [
    {
      original: './slide/8.jpg',  
    },
    {
      original: './slide/7.jpg',  
    },
    {
      original: './slide/18.jpeg',  
    },
    {
      original: './slide/7938860.jpg', 
    },
    {
      original: './slide/112.jpg', 
    },
    {
      original: './slide/17.jpg',
    },
    {
      original: './slide/115.png', 
    },
    {
      original: './slide/117.jpeg', 
    },
    {
      original: './slide/21.jpeg', 
    }
  ];

  const imagesssss = [
    {
      original: './slide/115.png',  
    },
    {
      original: './slide/8.jpg',  
    },
    {
      original: './slide/1440990.jpg',  
    },
    {
      original: './slide/19.jpeg', 
    },
    {
      original: './slide/8.jpg', 
    },
    {
      original: './slide/3.jpg', 
    },
    {
      original: './slide/17.jpg', 
    },
    {
      original: './slide/1450990.jpg', 
    },
    {
      original: './slide/5.jpg', 
    }
  ];

  return (
    <div>
      <div className='homediv'>
      </div>
      <div style={{display:"inline-flex", justifyContent:"space-between"}}>
        <div>
        <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showNav={false} autoPlay={true} />
        </div>
        <div>
        <ImageGallery items={imagess} showFullscreenButton={false} showPlayButton={false} showNav={false} autoPlay={true} />
        </div>        <div>
        <ImageGallery items={imagesss} showFullscreenButton={false} showPlayButton={false} showNav={false} autoPlay={true} />
        </div>        <div>
        <ImageGallery items={imagessss} showFullscreenButton={false} showPlayButton={false} showNav={false} autoPlay={true} />
        </div>
        <div>
        <ImageGallery items={imagesssss} showFullscreenButton={false} showPlayButton={false} showNav={false} autoPlay={true} />
        </div>
      </div>
    </div>

  )
}

export default Home