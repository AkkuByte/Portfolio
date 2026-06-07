import './hoverbar.css'
gsap.from("#Pill",{
    opacity:0,
    scale:0.1,
    duration:2,
    delay:2,
});
function Hoverbar() {
    return (

        <div className="hover_bar" id='Pill'>

             <a href="#Home">Home </a>
            <a href="#About">About</a>
            <a href="#Project">Project</a>
            <a href="#Contact">Contact</a>

        </div>

    );
}
export default Hoverbar;