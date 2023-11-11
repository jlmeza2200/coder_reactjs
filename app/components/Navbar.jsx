import Link from 'next/link'
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div className="text-black bg-white border border-b-gray-300 flex gap-2 justify-around py-6">
      <div>
        <Link href="/">
        <p className="font-bold text-left md:text-right text-red-400">E-COMMERCE</p>
        </Link>
      </div>
      <div className="hidden sm:flex gap-4" justify="center">
        <div >
          <Link color="foreground" href="/promociones/category">
            Promociones
          </Link>
        </div>
        
        <div>
          <Link color="primary" href="/mas-vendido/category">
            Mas vendido
          </Link>
        </div>

        <div isActive>
          <Link href="/temporada/category" aria-current="page">
            Temporada
          </Link>
        </div>

      </div>
      <div className='hidden md:flex justify-end'>
        <div>
          <button as={Link} color="primary" href="#" variant="flat">
            <CartWidget />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar

