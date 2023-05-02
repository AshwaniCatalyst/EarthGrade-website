import { Box, Typography } from "@mui/material"
import React from "react"
import ProductCard from "./ProductCard"

const ProductCardDisplayComponent = () => {
  return (
    <>
      <Box sx={{ bgcolor: "secondary.light", height: "auto" }} className='flex flex-col gap-20 pl-32 pr-32 pb-32 pt-14'>
        <Typography variant="h3" color="primary" textAlign={'center'}>
          Our Biodecycable
          <br />E-Commerce Products
        </Typography>
        <div className="flex flex-wrap justify-center place-items-center gap-12 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Box>
    </>
  )
}

export default ProductCardDisplayComponent
