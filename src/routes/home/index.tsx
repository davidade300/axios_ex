import "./styles.css";
import HomeButton from "./components/homeButton";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>
            <div className="card">
                <h1>Desafio Github API</h1>
                <h2>DevSuperior - Escola de programação</h2>

                <Link to={"/"}>
                    <div className="dflex">
                        <HomeButton />
                    </div>
                </Link>
            </div>
        </>
    );
}
