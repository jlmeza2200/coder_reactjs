import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from 'next/link'
import CartWidget from "./CartWidget";

const NavbarMenu = () => {
  return (
    <Navbar className="text-black bg-white border-2 border-b-black">
      <NavbarBrand>
        <p className="font-bold">E-COMMERCE</p>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem >
          <Link color="foreground" href="#">
            Promociones
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Temporada
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#">
            Mas vendido
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            <CartWidget />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarMenu

