import "./styles.css";
import type { UserDTO } from "../card";

type Props = {
    user: UserDTO;
};

export default function UserCard({ user }: Props) {
    return (
        <div className="user-card-container">
            <div className="user-card-content">
                <div className="user-avatar">
                    <img src={user.avatar_url} alt={user.name} />
                </div>

                <div className="user-info">
                    <h2 className="info-title">Informações</h2>

                    <div className="info-item">
                        <p className="info-label">Perfil: {user.url}</p>
                        
                    </div>

                    <div className="info-item">
                        <p className="info-label">
                            Seguidores: {user.followers}
                        </p>
                        <p className="info-value"></p>
                    </div>

                    <div className="info-item">
                        <p className="info-label">
                            Localidade: {user.location}
                        </p>
                    </div>

                    <div className="info-item">
                        <p className="info-label">Nome: {user.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
