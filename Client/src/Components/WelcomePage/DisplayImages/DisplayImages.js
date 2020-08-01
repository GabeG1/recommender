import React, {useEffect, useState, useRef} from 'react';
import './DisplayImages.css';
import CrossFadeImage from 'react-crossfade-image';

const images = {
  //#region
  image_1:
    'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  image_2:
    'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  image_3:
    'https://images.pexels.com/photos/556665/pexels-photo-556665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  image_4:
    'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  image_5:
    'https://images.pexels.com/photos/1652353/pexels-photo-1652353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //#endregion
};

export function DisplayImages() {
  const [imageDisplay, updateImage] = useState(images['image_1']);
  const image = useRef(imageDisplay);
  image.current = imageDisplay;

  function getNextImage() {
    let curImageKey = Object.keys(images).find((key) => {
      return images[key] === image.current;
    });
    const curImageNum = Number(curImageKey.substr(6));
    const nextImage = ((curImageNum + 1) % 5) + 1;
    return images[`image_${nextImage}`];
  }
  useEffect(() => {
    setTimeout(() => {
      updateImage(getNextImage());
    }, 3000);
  });

  return (
    <div className='displayImages'>
      <CrossFadeImage
        duration={1000}
        src={imageDisplay}
        alt='display'
        className='displayImage'
      />
    </div>
  );
}
