import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
