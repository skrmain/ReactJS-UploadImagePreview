import { useState } from "react";

export function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = () => {
        console.log("Images : ", images);
    };

    const handleFileInput = (event) => {
        console.log('Select File');

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
        <h1>Hello world!</h1>
        <input
            accept="image/*"
            onInput={handleFileInput}
            type="file"
            multiple
        />
        {images && images.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {images?.map((value, index) => (
                    <div key={index} style={{ margin: ".5rem" }}>
                        <img
                            width="100"
                            src={value.imgStr}
                            alt={"uploaded : " + index}
                        />
                        <button
                            aria-label="delete"
                            onClick={(e) => handleUploadImageRemove(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}

            </div>
        )}
        <button onClick={handleSubmit}>Log to Console</button>
    </>
}