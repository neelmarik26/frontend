'use client'
import styles from "./page.module.css";
import { useState } from "react";
import Navbar_front from "@/components/front_nav/Navbar_front.js";
import Footer from "@/components/front_footer/footer.js";
import Body from "@/components/front_body/body.js";


export default function Home() {
  console.log("hello world")
  return (
    <main>
      <Navbar_front />
      <Body/>
      <Footer />
    </main>
  );
}
