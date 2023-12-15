import React, { useState } from "react";

const CustomFileInput = () => {
    const [isDragActive, setIsDragActive] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragActive(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragActive(false);

        const files = e.dataTransfer.files;
        // Handle the dropped files as needed
        console.log("Dropped files:", files);
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        // Handle the selected files as needed
        console.log("Selected files:", files);
    };

    return (
        <div
            className={`p-4 flex flex-col items-center gap-2 bg-[#1A1E46] text-violet-500 rounded-lg shadow-md cursor-pointer ${isDragActive ? "border-2 border-blue-500" : ""}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <label htmlFor="fileInput" className="cursor-pointer">
                <span>Drag and Drop or <span className="text-blue-500">browse</span></span>
                <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={handleFileInputChange}
                />
            </label>
        </div>
    );
};

export default CustomFileInput;
