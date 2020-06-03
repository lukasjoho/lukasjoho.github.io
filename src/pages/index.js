import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxBox from "../components/homepage/parallaxbox"
import Layout from "../components/general/layout"
import SEO from "../components/seo"
import Banner from "../components/homepage/banner"
import Sections from "../components/homepage/sections"
import Hero from "../components/homepage/hero"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/pointer.scss"


class IndexPage extends React.Component {
  constructor() {
    super();
    
  }
  componentDidMount(){
    // const pointer = document.createElement("div")
    // pointer.id = "pointer-dot"
    // const ring = document.createElement("div")
    // ring.id = "pointer-ring"
    // document.body.insertBefore(pointer, document.body.children[0])
    // document.body.insertBefore(ring, document.body.children[0])

    // let mouseX = -100
    // let mouseY = -100
    // let ringX = -100
    // let ringY = -100
    // let isHover = false
    // let mouseDown = false
    // const init_pointer = (options) => {

    //   window.onmousemove = (mouse) => {
    //       mouseX = mouse.clientX
    //       mouseY = mouse.clientY
    //   }

    //   window.onmousedown = (mouse) => {
    //       mouseDown = true
    //   }

    //   window.onmouseup = (mouse) => {
    //       mouseDown = false
    //   }

    //   const trace = (a, b, n) => {
    //       return (1 - n) * a + n * b;
    //   }
    //   window["trace"] = trace

    //   const getOption = (option) => {
    //       let defaultObj = {
    //           pointerColor: "#750c7e",
    //           ringSize: 15,
    //           ringClickSize: (options["ringSize"] || 15) - 5,
    //       }
    //       if (options[option] == undefined) {
    //           return defaultObj[option]
    //       } else {
    //           return options[option]
    //       }
    //   }

    //   const render = () => {
    //       ringX = trace(ringX, mouseX, 0.2)
    //       ringY = trace(ringY, mouseY, 0.2)

    //       if (document.querySelector(".p-action-click:hover")) {
    //           pointer.style.borderColor = getOption("pointerColor")
    //           isHover = true
    //       } else {
    //           pointer.style.borderColor = "white"
    //           isHover = false
    //       }
    //       ring.style.borderColor = getOption("pointerColor")
    //       if (mouseDown) {
    //           ring.style.padding = getOption("ringClickSize") + "px"
    //       } else {
    //           ring.style.padding = getOption("ringSize") + "px"
    //       }

    //       pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    //       ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

    //       requestAnimationFrame(render)
    //   }
    //   requestAnimationFrame(render)
    // }
    // init_pointer({
    //   pointerColor: "white",
    //   ringSize: 15,
    //   ringClickSize: 20
    // });
    //fhsadjkhgfhkjsad
  }
  
  
  render(){
    return(
      <ParallaxProvider>
        <Layout>
          <SEO title="excyted | Creative Studio und Filmproduktion"
              description="Als eine hybride Werbeproduktion entwickeln wir kreative Lösungen für deine Marke, dein Unternehmen oder dein Projekt. Mit dir wollen wir excyten und deine individuellen Projekte Wirklichkeit werden lassen."/>
          <Hero/>
          <Banner/>
          <ParallaxBox/>
          <Sections/>
        </Layout>
      </ParallaxProvider>
    )
  }
}

export default IndexPage
