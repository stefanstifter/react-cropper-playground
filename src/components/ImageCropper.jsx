import React, { useEffect, useRef, useState } from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import CropperControls from './CropperControls';

const ImageCropper = props => {
    const cropperEl = useRef(null);
    const [ imageData, setImageData ] = useState(null);
    const [ croppedImage, setCroppedImage ] = useState(null);

    useEffect(() => {
        if (props.image && props.image?.data) {
            setImageData(props.image.data);
        }
    }, [props.image]);

    useEffect(() => {
        if (croppedImage) {
            props.handleCroppedImage(croppedImage);
        }
    }, [croppedImage]);

    // Get cropped image as png
    function onCrop(event) {
        const cropper = event.target.cropper;
        const croppedImageData = cropper.getCroppedCanvas({
            maxWidth: 1800,
        }).toDataURL('image/png');

        setCroppedImage({
            ...props.image,
            data: croppedImageData
        });
    }

    return (
        <div className="border rounded-sm">
            <Cropper
                src={imageData}
                crop={onCrop}
                ref={cropperEl}

                // Cropper.js options
                aspectRatio={1.41822 / 1}
                style={{ height: 500, width: '100%' }}
                guides={true}
                autoCropArea={1}
                checkOrientation={false}
            />
            <CropperControls
                cropper={cropperEl}
            />
        </div>
    )
}

export default ImageCropper;
