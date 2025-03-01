import "./mainForm.css";

const MainForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className="mainForm">
            <form onSubmit={handleSubmit}>
                <div className="mainForm__title">
                    <h2>1. Paste your job description</h2>
                    <hr />
                </div>
                <p className="mainForm__descr">
                    To start, copy and paste the job description you want to compare your resume to.
                    Don't have a job in mind yet? Instantly get a free resume review with Score My Resume.
                </p>

                <textarea
                    className="mainForm__textarea"
                    required
                    minLength={50}
                    maxLength={400}
                    type="text"
                    placeholder="Paste your job description here to get result."
                ></textarea>

                <button type="submit" className="mainForm__btn">Next</button>
            </form>
        </section>
    );
}

export default MainForm;
