import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
    return (<main>
        <NavBar></NavBar>
        <Hero></Hero>
        <Cocktails></Cocktails>
        <About></About>
        <Art></Art>
    </main>)

}

export default App
