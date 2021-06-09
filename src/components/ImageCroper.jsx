import React from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ImageCroper = props => {
    console.log('im the cropper', {props});
    return (
        <div>
            <p>I'm the cropper</p>
            <Cropper
                src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
                // style={{ height: 400, width: "100%" }}
                // Cropper.js options
                initialAspectRatio={16 / 9}
                guides={false}
                // crop={onCrop}
                // ref={cropperRef}
            />
        </div>
    )
}

export default ImageCroper;
