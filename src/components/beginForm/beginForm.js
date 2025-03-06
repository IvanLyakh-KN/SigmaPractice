import './beginForm.css';
import Button from '../button/button.js';
const BeginForm = () => {
    return (
        <form className="beginForm">
            <div className="beginForm__field">
                <textarea
                    className="beginForm__input"
                    type="text"
                    placeholder="Job description"
                />
            </div>

            <div className="beginForm__button">
                <Button text={"Next"} className="btn"></Button>
            </div>
        </form>
    );
}
export default BeginForm;