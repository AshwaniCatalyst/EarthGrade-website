import React from "react"
import EnlargedProductImage from "../images/a2021_22_06_POS-Display_Render copy 1.svg"
import { Box, IconButton, Typography } from "@mui/material"
import ButtonComponent from "./ButtonComponent"
import { FavoriteBorderOutlined } from "@mui/icons-material"
const EnlargedProductCard = () => {
  return (
    <>
      <div className="flex flex-col items-center pl-28 pr-28 pt-16 pb-24 gap-12">
        <div>
          <Typography variant="h3" color="primary" textAlign={"center"}>
            Our Sustainable <br />
            Display Solution
          </Typography>
        </div>
        <Box
          sx={{ backgroundColor: "#F1EADB" }}
          className="flex flex-col items-center gap-8 w-full pl-28 pr-28 pt-20 pb-16"
        >
          <div className="EnlargedImageContainer w-2/3 bg-white ">
            <IconButton
              sx={{ width: "24px", height: "22px" }}
              variant="plain"
              className="EnlargedCardFavouriteIcon"
            >
              <FavoriteBorderOutlined fontSize="large" color="secondary" />
            </IconButton>
            <img src={EnlargedProductImage} alt="Enlarge product-img" />
          </div>
          <Typography variant="h3" color={"primary"} textAlign={"center"}>
            Biodecycable Tower Display
          </Typography>
          <Typography variant="h5" color="primary" textAlign={"center"}>
            Discover our sustainable display solution.
            <br /> Earthgrade Display Tower stores your products efficiently.
          </Typography>
          <div className="flex flex-wrap  items-center gap-8">
            <Typography variant="h6" color="primary">
              $100.00
            </Typography>
            <ButtonComponent btnText={"Buy Now"} btnWidth={"168px"} />
          </div>
        </Box>
      </div>
    </>
  )
}

export default EnlargedProductCard
