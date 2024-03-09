import { useState, useEffect } from "react";
import { storage } from "../firebase"
import { listAll, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { v4 } from "uuid";

const Images = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            })
        })
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            console.log(response);
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                })
            })
        })
    }, []);

    return <div className='container'>
        <div id="upload-area">
            <input type="file" id="browse-button" onChange={(event) => {setImageUpload(event.target.files[0])}}></input>
            <button id="upload-button" onClick={uploadImage}>Upload Image</button>
        </div>
        <div id="image-list">
            {imageList.map((url) => {
                return <img id="image-uploads" src={url} />
            })}
        </div>
    </div>;
};
  
export default Images;