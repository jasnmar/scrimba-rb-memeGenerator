import "./Header.css"
import trollFace from "../../assets/troll-face.png"

function Header() {
    return (
        <header className="header">
            <img className="header--image"src={trollFace}></img>
            <h2 className="header--title">Header</h2>
            <h4 className="header--project">React Project 3</h4>
        </header>
    )
}

export default Header