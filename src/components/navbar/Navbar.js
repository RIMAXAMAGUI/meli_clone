import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>Mercado Libre</h1>
      <input placeholder="Buscar productos..." type="text" />
      <div>
        <button>Producto</button>
        <button>Ingresa</button>
        <image>imagen carrito</image>
      </div>
    </nav>
  )
}

export default Navbar;