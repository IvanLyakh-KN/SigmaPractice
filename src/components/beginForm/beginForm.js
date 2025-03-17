import './beginForm.css';
import Button from '../button/button.js';
import downloadImg from '../../asset/images/download.svg';
import { useState } from "react";

const BeginForm = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            await uploadFile(selectedFile);
        } else {
            alert("Будь ласка, виберіть PDF-файл.");
        }
    };

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append("pdf", file);

        try {
            const response = await fetch("https://your-api.com/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Файл успішно завантажено!");
            } else {
                alert("Помилка завантаження.");
            }
        } catch (error) {
            console.error("Помилка завантаження:", error);
        }
    };

    return (
        <form className="beginForm" onSubmit={(e) => e.preventDefault()}>
            <div className="beginForm__field">
                <input id="fileInput" type="file" accept="application/pdf" onChange={handleFileChange} />
                <label htmlFor="fileInput" className="fileLabel">
                    <img src={downloadImg} alt="upload" />
                    <p>Click the button above or drop your resume in here! English resumes in PDF or DOCX only.</p>
                </label>
            </div>

            <div className="beginForm__button">
                <Button text={"Next"} className="btn"></Button>
            </div>
        </form>
    );
};

export default BeginForm;
