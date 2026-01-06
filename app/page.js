'use client'
import styles from "./page.module.css";
import Navbar_front from "@/components/front_page_all/front_nav/Navbar_front.js";
import Footer from "@/components/front_page_all/front_footer/footer.js";
import Body from "@/components/front_page_all/front_body/body.js";


export default function Home() {
  console.log("website is running")
  return (
    <main>
      <Navbar_front />
      <Body />
      <Footer />
    </main>
  );
}
