// src/Components/Photogallery/Photogallery.jsx
import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Photogallery = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
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
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUrl(downloadURL);

          // Store the URL in Firestore
          await addDoc(collection(db, 'images'), { url: downloadURL });
          console.log('File available at', downloadURL);
        }
      );
    }
  };

  const fetchImages = async () => {
    const querySnapshot = await getDocs(collection(db, 'images'));
    const urls = querySnapshot.docs.map(doc => doc.data().url);
    setImages(urls);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>Upload Progress: {progress}%</div>
      {url && <img src={url} alt="Uploaded Image" />}
      
      <h2>Uploaded Images:</h2>
      <div>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Uploaded #${index}`} style={{ width: '100px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default Photogallery;
