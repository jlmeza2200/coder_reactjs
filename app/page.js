import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <ItemListContainer greeting="Próximamente nuestro catálogo..." />
    </div>
  )
}
