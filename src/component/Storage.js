import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { storage } from "./Firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Storage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imgList, setImgList] = useState(null);
  const imgListRef=ref(storage,`images/`)
  const addFile = () => {
    const storageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, imageUpload).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };
  useEffect(() => {
    listAll(imgListRef).then(response=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then(data=>setImgList(data))
      })
    });
  }, []);
  return (
    <div>
      <Form>
        <input
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        <Button onClick={addFile}>Add file</Button>
      </Form>
      <img src={imgList} style={{width:"200px"}}/>
    </div>
  );
};

export default Storage;
