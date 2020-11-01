import React, { useState } from 'react';
import Lightbox from 'react-lightbox-component';

const Light = ({gallery}) => {
const link  =  [
        {
          src: 'some image url',
          title: 'image title',
          description: 'image description'
        }
      ]
    return (
  <div>
    <Lightbox images={gallery} />
  </div>
);
}

export default Light;