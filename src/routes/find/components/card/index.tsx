/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

import "./styles.css";
import axios from "axios";
import UserCard from "../userCard";

type FormData = {
    userName: string;
};

export type UserDTO = {
    avatar_url: string;
    url: string;
    followers: string;
    location: string;
    name: string;
};

export default function Card() {
    const [formData, setFormData] = useState<FormData>({
        userName: "",
    });

    const [userData, setUserData] = useState<UserDTO | null>();

    function handleInputChange(event: any) {
        setFormData({ userName: event.target.value });
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();

        axios
            .get(`https://api.github.com/users/${formData.userName}`)
            .then((response) => {
                setUserData(response.data);
            })
            .catch((err) => {
                if (err) {
                    setUserData(null);
                }
            });
    }

    return (
        <>
            <div className="search-card">
                <h1>Encontre um perfil Github</h1>

                <form onSubmit={handleFormSubmit}>
                    <input
                        name="userName"
                        value={formData.userName}
                        type="text"
                        placeholder="Usuário Github"
                        onChange={handleInputChange}
                    />
                    <button type="submit">Encontrar</button>
                </form>
            </div>

            <section>
                {userData && <UserCard user={userData} />}
                {userData === null && <h1>Erro ao buscar usuario </h1>}
            </section>
        </>
    );
}
