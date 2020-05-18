import React from "react"
import Layout from "../components/general/layout"
import SEO from "../components/seo"
import Values from "../components/sites/values"
import Members from "../components/sites/members"

const Team = () => (
  <Layout>
    <SEO title="Team"
         description="Das sind wir. Ein interdisziplinäres Team aus kreativen Köpfen."/>
    <Members/>
    <Values/>
  </Layout>
)

export default Team