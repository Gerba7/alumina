import styles from "./page.module.css";
import Cover from "./ui/components/Cover/Cover";
import Banner from "./ui/components/Banner/Banner";
import ImageRow from "./ui/components/ImageRow/ImageRow";
import Values from "./ui/components/Values/Values";
import Contact from "./ui/components/Contacto/Contact";
import Services from "./ui/components/Services/Services";
import Products from "./ui/components/Products/Products";


export default function Home() {
  return (
      <main className={styles.main}>
        <Cover />
        <Banner />
        <ImageRow />
        <Values />
        <Services />
        <Products />
        <Contact />
      </main>
  );
}
