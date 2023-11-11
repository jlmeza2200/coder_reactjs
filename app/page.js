import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

export default function Home() {
  return (
    <div>
      <Header image='/image1.jpeg' title1="-- NEW ITEMS" title2="SUMMER SALE" title3="Discover More" />
      <ItemListContainer />
    </div>
  )
}
