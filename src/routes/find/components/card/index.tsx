import "./styles.css"
export default  function Card(){
    return(
        <div className="search-card">
            <h1>Encontre um perfil Github</h1>
            
            <form>
                <input type="text" placeholder="Usuário Github" />
                {/* substituir o botao por uma div com link passando o username */}
                <button type="submit">Econtrar</button>
            </form>
        </div>
    )
}