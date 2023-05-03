import React from "react"
import NavigationBar from "../components/NavBar"
import { ThemeProvider } from "@mui/material"
import { Theme } from "../styles/CustomTheme"
import HeroSection from "../components/HeroSection"
import ProductTypeComponent from "../components/ProductTypeComponent"
import ProductCardDisplayComponent from "../components/ProductCardDisplayComponent"
import EnlargedProductCard from "../components/EnlargedProductCard"
const index = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <NavigationBar />
        <HeroSection />
        <ProductTypeComponent />
        <ProductCardDisplayComponent edgeNumber={0} />

        <ProductCardDisplayComponent edgeNumber={1} />
        <EnlargedProductCard />
      </ThemeProvider>
    </>
  )
}

export default index
