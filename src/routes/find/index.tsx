import { Outlet } from "react-router-dom";
import Card from "./components/card";

export default function find() {
    return (
        <>
            <Card />
            <Outlet />
        </>
    );
}
