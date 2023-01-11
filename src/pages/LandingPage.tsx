import Nav from "../components/Nav"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Slider from "../components/Slider"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div className="relative mt-11 font-SF">
      {/* NAV  */}
      <Nav />
      <Hero />
      <Grid />
      <Slider />
      <Footer />
    </div>
  )
}

export default LandingPage
