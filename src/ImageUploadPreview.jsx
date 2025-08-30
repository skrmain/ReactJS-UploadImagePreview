import { useState } from "react";

const ImpageUploadPreview = () => {
    const [images, setImages] = useState([]);

    const handleSubmit = () => {
        console.log("Images : ", images);
    };

    const handleFileInput = (event) => {
        const { files } = event.target;

        if (files) {
            const newFiles = Array.from(files);
            newFiles.forEach((value) => {
                const fr = new FileReader();
                fr.onload = (_e) => {
                    if (_e.target?.result) {
                        const _obj = {
                            fileObj: value,
                            imgStr: _e.target?.result.toString(),
                        };

                        setImages((prev) => {
                            return [...prev, _obj];
                        });
                    }
                };
                fr.readAsDataURL(value);
            });
        }
    };

    const handleUploadImageRemove = (index) => {
        const _images = [...images];
        _images.splice(index, 1);

        setImages([..._images]);
    };

    return <>
        <h1>Image Upload Preview</h1>
        <input
            accept="image/*"
            onInput={handleFileInput}
            type="file"
            multiple
        />
        {images?.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-around' }}>
                {images?.map((value, index) => (
                    <div key={index} style={{ display: "flex", flexDirection: 'column', margin: '1rem' }}>
                        <img
                            src={value.imgStr}
                            style={{ width: '10rem' }}
                        />
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleUploadImageRemove(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        )}

        <button style={{ margin: '2rem' }} onClick={handleSubmit}>Log to Console</button>
    </>
}

export default ImpageUploadPreview