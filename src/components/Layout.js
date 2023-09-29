import React from "react"

import { Seo } from "../components/Seo"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer"

export default function Layout({ children, navbarData, title, description, url }) {
  return (
    <div className="whole_container h-full">
      <Seo title={title} description={description} url={url}/>
      <Navbar data={navbarData} />
      { children }
      <Footer />
    </div>
  )
}