import ItemListContainer from "./components/ItemListContainer";
import NavbarMenu from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <NavbarMenu />
      <ItemListContainer greeting="Próximamente nuestro catálogo..." />
    </div>
  )
}
