import React, {useEffect, useState, useRef} from 'react';
import './DisplayImages.css';
import CrossFadeImage from 'react-crossfade-image';
import withMemo from '../../withMemo';

const images = {
  //#region
  image_1:
    'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  image_2:
    'https://images.pexels.com/photos/2531353/pexels-photo-2531353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  image_3:
    'https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  image_4:
    'https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  image_5:
    //'https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  //#endregion
};
const TOTAL_IMAGES = 5;
function DisplayImages() {
  //keep track of current image
  
  const [imageDisplay, updateImage] = useState(images['image_1']);
  const image = useRef(imageDisplay);
  image.current = imageDisplay;
  let interval = null;

  function getNextImage() {
    //get the current image
    let curImageKey = Object.keys(images).find((key) => {
      return images[key] === image.current;
    });

    //get the index of the current image
    const curImageNum = Number(curImageKey.substr(6));
    //add 1 to current image index and mod by total images
    const nextImage = ((curImageNum + 1) % TOTAL_IMAGES) + 1;
    return images[`image_${nextImage}`];
  }
  useEffect(() => {
    //update image every 5 seconds
    setTimeout(() => {
      //update to next image
      updateImage(getNextImage());
    }, 5000);
  });

  return (
    <div
      className='displayImage'
      style={{
        backgroundImage: `url(${imageDisplay})`,
      }}
    />
  );
}

export default withMemo(DisplayImages, []);