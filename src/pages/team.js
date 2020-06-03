import React from "react";
import Layout from "../components/general/layout";
import SEO from "../components/seo";
import Values from "../components/sites/values";
import Members from "../components/sites/members";
import Jubel from "../components/sites/jubel";

const Team = () => (
  <Layout>
    <SEO
      title="Team"
      description="Das sind wir. Ein interdisziplinäres Team aus kreativen Köpfen."
    />
    <Members />
    <Jubel />
    <Values />
  </Layout>
);

export default Team;
