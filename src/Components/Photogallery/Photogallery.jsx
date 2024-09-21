// src/Components/Photogallery/Photogallery.jsx
import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

const Photogallery = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progressValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressValue);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            console.log('File available at', downloadURL);
          });
        }
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>Upload Progress: {progress}%</div>
      {url && <img src={url} alt="Uploaded Image" />}
    </div>
  );
};

export default Photogallery; // Ensure this is the default export
