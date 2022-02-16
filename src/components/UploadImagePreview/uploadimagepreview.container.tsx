import React, { useState } from "react";

import AddProductView from "./uploadimagepreview.view";
import { FileObject } from "./types";

const AddProduct = () => {
  const [images, setImages] = useState<FileObject[]>([]);

  const handleSubmit = () => {
    console.log("Images : ", images);
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      const newFiles = Array.from(files);
      newFiles.forEach((value) => {
        const fr = new FileReader();
        fr.onload = (_e) => {
          if (_e.target?.result) {
            const _obj: FileObject = {
              fileObj: value,
              imgStr: _e.target?.result.toString(),
            };

            setImages((prev: FileObject[]) => {
              return [...prev, _obj];
            });
          }
        };
        fr.readAsDataURL(value);
      });
    }
  };

  const handleUploadImageRemove = (index: number) => {
    const _images = [...images];
    _images.splice(index, 1);

    setImages([..._images]);
  };

  return (
    <AddProductView
      {...{
        handleSubmit,
        handleFileInput,
        handleUploadImageRemove,
        images,
      }}
    />
  );
};

export default AddProduct;
