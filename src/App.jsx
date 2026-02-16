import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
    return (<main>
        <NavBar></NavBar>
        <Hero></Hero>
        <Cocktails></Cocktails>
        <About></About>
        <Art></Art>
        <Menu></Menu>
        <Contact></Contact>
    </main>)

}

export default App
