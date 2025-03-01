import FormPage from "./pages/formPage/formPage.js";
import Header from "./components/header/header.js";
import HeroSection from "./components/heroSection/heroSection.js";
import "./App.css";

const App = () => {
    return (
        <>
            <div className="wrapper">
                <Header></Header>
                <div className="container">
                    <HeroSection></HeroSection>
                </div>
            </div>
        </>
    )
}

export default App;

