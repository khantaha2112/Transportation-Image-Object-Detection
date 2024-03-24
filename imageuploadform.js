import React, { useState } from 'react';

const ImageUploadForm = ({ handleImageUpload }) => {
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleImageUpload(image);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload Image</button>
        </form>
    );
}

export default ImageUploadForm;
