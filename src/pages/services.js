import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Clients from "../components/clients"
import ServicesComponent from "../components/services"

const Services = () => (
  <Layout>
    <SEO title="Leistungen" description="So setzen wir unsere Projekte um."/>
    <ServicesComponent/>
    <Clients/>
  </Layout>
)

export default Services