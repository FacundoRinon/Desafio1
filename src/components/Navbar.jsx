import './navbar.css'
import { useState } from 'react'

function Navbar(){
    const [showMenu, setShowMenu] = useState(false);

    const handleBurger = () => {
        setShowMenu(!showMenu)
    }

    return (
    <>
    <div className="row nav-bar">
      <h4><a href="/">Home</a></h4>
      <h4><a href="/">Equipo</a></h4>
      <h4><a href="">Servicios</a></h4>
      <h4><a href="">Contacto</a></h4>
      <h2><i class="bi bi-list" onClick={handleBurger}></i></h2>
    </div>
    {showMenu && (
    <div className="row burguerMenu">
        <h5><a href="/">Home</a></h5>
        <h5><a href="/">Equipo</a></h5>
        <h5><a href="">Servicios</a></h5>
        <h5><a href="">Contacto</a></h5>
    </div>
      )}
    </>
    )
}

export default Navbar