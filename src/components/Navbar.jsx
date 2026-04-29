
const Navbar = ({ setIsModalOpen, setType }) => {
  return (
    <div className="navbar">
        <h1>FilmVault</h1>

        <div className="right_side">
            <div className="search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <button className='btn_add' onClick={() => {setIsModalOpen(true); setType("add")}}>
                <i class="fa-solid fa-plus"></i>
              Add Film
            </button>
        </div>
    </div>
  )
}

export default Navbar
