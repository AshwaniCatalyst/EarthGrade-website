import React from "react"
import ButtonComponent from "./ButtonComponent"
import { IconButton, Typography } from "@mui/material"
import { FavoriteBorderOutlined } from "@mui/icons-material"

const ProductCard = ({productTitle,productDescription,productPrice,productImage}) => {
  return (
    <>
      <div className="ProductCardOuterContainer bg-white ">
        <div
          sx={{ backgroundColor: "light", padding: "2rem" }}
          className="productCardImageContainer flex flex-col "
        >
          <IconButton
            variant="plain"
            sx={{ width: "24px", height: "22px" }}
            className="ProductCardFavouriteIcon"
          >
            <FavoriteBorderOutlined fontSize="large" color="secondary" />
          </IconButton>
          <img src={productImage} alt="Product_Image" />
        </div>
        <div className=" flex flex-col items-center gap-4 text-center">
          <Typography variant="h4" color={"primary"}>
            {productTitle}
          </Typography>
          <Typography variant="h5" color={"primary.dark"}>
            {productDescription}
          </Typography>
          <div className="flex flex-wrap mt-1  items-center gap-2">
            <Typography variant="h6" color="secondary">
              {productPrice}
            </Typography>
            <ButtonComponent btnText={"Buy Now"} btnWidth={"168px"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
