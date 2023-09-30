import React from "react"

import { Seo } from "../components/Seo"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer"

export default function Layout({ children, navbarData }) {
  return (
    <div className="whole_container h-full">
      <Navbar data={navbarData} />
      { children }
      <Footer />
    </div>
  )
}