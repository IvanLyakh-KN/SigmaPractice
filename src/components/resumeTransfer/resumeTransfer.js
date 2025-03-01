import './resumeTransfer.css';
import Button from '../button/button';

const resumeTransfer = ({ title, descr, btnText, btnClasses }) => {
    return (
        <div className="resumeTransfer">
            <h2 className="resumeTransfer__title">
                {title}
            </h2>
            <p className='resumeTransfer__descr'>
                {descr}
            </p>
            <Button text={btnText} className={btnClasses}></Button>
        </div>
    );
}

export default resumeTransfer;