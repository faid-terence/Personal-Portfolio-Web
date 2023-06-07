import { useEffect } from "react"
import Aos from "aos"
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import './App.css'
import { Hero } from "./components/UI/Hero";



export default function App() {
  useEffect(() => {
    Aos.init();
    }, [])

  return (
    <>
    <Header/>
    <main>
      <Hero/>
    </main>
    <Footer/>
    </>
  )
}