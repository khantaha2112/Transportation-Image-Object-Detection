import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import ImageUploadForm from './components/ImageUploadForm';
import ImageDisplay from './components/ImageDisplay';

const App = () => {
    const [originalImage, setOriginalImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const backend_url = "http://127.0.0.1:5000"
    const handleImageUpload = (image) => {
       let data = new FormData();
       data.append('image',image)
       fetch(backend_url+'/upload',{
        method:'POST',
        body:data
       }).then((data)=>{
            const res = data.json();
            return res
       }).then((res)=>{
        console.log(res)
        
       })
    }

    return (
        <div>
            <NavigationBar />
            <ImageUploadForm handleImageUpload={handleImageUpload} />
            {originalImage && processedImage && <ImageDisplay originalImage={originalImage} processedImage={processedImage} />}
        </div>
    );
}

export default App;
