import React from "react"
import ButtonComponent from "./ButtonComponent"
import { IconButton, Typography } from "@mui/material"
import { FavoriteBorderOutlined } from "@mui/icons-material"
import cardImage from "../images/Earthgrade_PaperRollPhotog2 copy.svg"

const ProductCard = () => {
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
          <img src={cardImage} alt="Product_Image" />
        </div>
        <div className=" flex flex-col items-center gap-4 text-center">
          <Typography variant="h4" color={"primary"}>
            Biodecycable Bubble Paper Wrap
          </Typography>
          <Typography variant="h5" color={"primary.dark"}>
            Discover our sustainable packaging solution. Earthgrade Bubble Paper
            Wrap.
          </Typography>
          <div className="flex flex-wrap mt-1  items-center gap-2">
            <Typography variant="h6" color="secondary">
              $100.00
            </Typography>
            <ButtonComponent btnText={"Buy Now"} btnWidth={"168px"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
