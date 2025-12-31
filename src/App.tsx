import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./routes/home";
import Find from "./routes/find";

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/find" element={<Find/>}>


                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
