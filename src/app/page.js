"use client";
import "./app.css"
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Items from "./components/Items";
import SideScroll from "./components/SideScroll";
import VerticalAccordion from "./components/VerticalAccordion";
import Loading from "./components/Loading";
export default function Home() {
  return (
    <div>
      <Hero />
      <SideScroll />
      <Feature />
      <Items />
      {/* <VerticalAccordion />  */}
    </div>
  )
}