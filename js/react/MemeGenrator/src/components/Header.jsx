import trollFace from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img
                src={trollFace}
                alt="troll-face"
            />

            <h1>Meme Generator</h1>
        </header>
    )
}
