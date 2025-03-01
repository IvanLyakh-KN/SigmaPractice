import './button.css'; 

const Button = ({ text, className = "" }) => {
    return (
        <button className={`btn ${className} `} >
            {text}
        </button>
    );
}
export default Button;