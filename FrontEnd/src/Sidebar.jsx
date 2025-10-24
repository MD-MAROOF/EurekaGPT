import "./Sidebar.css";
import logo from "./assets/gptlogo.jpg";

function Sidebar(){
    return (
        <section className = "sidebar">
            {/* new chat button */}
            <button>
                <img src="src/assets/gptlogo.jpg" alt="gpt log o" className="logo"></img>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
                
            </button>

            {/* history  */}
            <ul className="history">
                <li>Thread 1</li>
                <li>Thread 2</li>
                <li>Thread 3</li>
            </ul>   

            {/* sign  */}
            <div className="sign">
            <p>By Maroof </p>
            </div>
        </section>
    )
}

export default Sidebar;