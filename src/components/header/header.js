import "./header.css";
import Button from "../button/button.js";
import logo from '../../asset/images/logo.svg';


const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="#">
                    <img src={logo} alt="Logo" />
                </a>
            </div>
            <ul className="header__nav">
                <li className="header__nav-item"><a href="#">Score your resume</a></li>
                <li className="header__nav-item"><a href="#">Targeted resume</a></li>
                <li className="header__nav-item"><a href="#">Help</a></li>
                <li className="header__authorisation-button">
                    {/* Link to btn component */}
                    <Button text={"Log In"} className="btn"></Button>
                </li>
            </ul>
        </header>
    );
}

export default Header;