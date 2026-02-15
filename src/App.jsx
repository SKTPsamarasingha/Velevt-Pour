import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
    return (<main>
        <NavBar></NavBar>
        <Hero></Hero>
        <div className={'h-dvh bg-black'}></div>
    </main>)

}

export default App
