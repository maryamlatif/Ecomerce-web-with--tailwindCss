
import Reviwes from "./components/Reviwes"

import Categories from "./components/Categories"
import Cart from "./Cart"
import About from "./About"
import Hero from "./components/Hero"


export default function Homepage() {
  return (
    <div className="min-h-screen min-w-full">
      <Cart/>
      <Hero/>
      <About/>
      <Categories/>
      <Reviwes/>
    </div>
  )
}
