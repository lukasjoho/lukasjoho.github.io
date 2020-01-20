import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Banner from "../components/banner"

const IndexPage = () => (
  <Layout>
    <SEO title="excyted | Digitalagentur und Filmproduktion"
         description="Als eine hybride Werbeproduktion entwickeln wir kreative Lösungen für deine Marke, dein Unternehmen oder dein Projekt. Mit dir wollen wir excyten und deine individuellen Projekte Wirklichkeit werden lassen."/>
    <Banner/>
  </Layout>
)

export default IndexPage
