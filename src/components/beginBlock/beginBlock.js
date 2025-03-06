import './beginBlock.css';
import editIcon from "../../asset/images/edit-icon.svg"
import BeginForm from '../beginForm/beginForm.js';
import { useState } from 'react';

const BeginBlock = () => {

    const [active, setActive] = useState(null);
    const handleClick = (index) => {
        setActive(active === index ? null : index);
    }

    return (
        <section className="lets-begin">

            <div className="lets-begin__title">
                <h2>Let`s begin</h2>
            </div>

            <div className="lets-begin__step"
            >
                <div className="lets-begin__step-content">
                    <div className="lets-begin__step-number"><span>1</span></div>
                    <p className="lets-begin__step-title">Job description</p>
                    <div className="lets-begin__step-edit" onClick={() => handleClick(1)}>
                        <img src={editIcon} alt="edit-icon" />
                        <span
                        >edit</span>
                    </div>
                </div>
                <div className={`lets-begin__form ${active == 1 ? 'show' : 'hidden'}`}>
                    <BeginForm></BeginForm>
                </div>
            </div>

            <div className="lets-begin__step"            >
                <div className="lets-begin__step-content">
                    <div className="lets-begin__step-number"><span>2</span></div>
                    <p className="lets-begin__step-title">Your resume</p>
                    <div className="lets-begin__step-edit" onClick={() => handleClick(2)}>
                        <img src={editIcon} alt="edit-icon" />
                        <span
                        >edit</span>
                    </div>
                </div>
                <div className={`lets-begin__form ${active == 2 ? 'show' : 'hidden'}`}>
                    <BeginForm></BeginForm>
                </div>
            </div>

        </section >

    );
}
export default BeginBlock;