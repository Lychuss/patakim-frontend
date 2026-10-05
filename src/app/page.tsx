import Home from "../components/pages/homePage"
import About from "../components/pages/aboutPage"
import Menu from "../components/pages/menuPage"

export default function Landing(){
  return <main className="mt-[3em] w-full">

    <section className="homePage w-full min-h-screen bg-black">
      <Home />
    </section>
  
    <section className="aboutPage w-full min-h-screen  p-[1em] mt-[2em]">
      <About />
    </section>

    <section className="aboutPage w-full min-h-screen  p-[1em]">
      <Menu />
    </section>

  </main>
}
