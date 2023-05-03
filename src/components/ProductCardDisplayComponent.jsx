import { Box, Typography } from "@mui/material"
import React from "react"
import ProductCard from "./ProductCard"
import { graphql, useStaticQuery } from "gatsby"

const ProductCardDisplayComponent = ({edgeNumber}) => {
  const cardsDisplayData = useStaticQuery(graphql`
    query CardDataQuery {
      allContentfulProductCardsDisplay {
        edges {
          node {
            colouredBackground
            productCards {
              productDescription
              productPrice
              productTitle
              productImage {
                url
              }
            }
            sectionHeading
          }
        }
      }
    }
  `)

  const setColor =
    cardsDisplayData.allContentfulProductCardsDisplay.edges[edgeNumber].node
      .colouredBackground;
  // const sectionNumber =  setColor?0:1;
  // console.log("edge number",sectionNumber);
  return (
    <>
      <Box
        sx={setColor ? { bgcolor: "secondary.light" } : { bgcolor: "primary" }}
        className="flex flex-col gap-20 pl-32 pr-32 pb-32 pt-14"
      >
        <Typography variant="h3" color="primary" textAlign={"center"}>
          {
            cardsDisplayData.allContentfulProductCardsDisplay.edges[edgeNumber].node
              .sectionHeading
          }
        </Typography>
        <div className="flex flex-wrap justify-center place-items-center gap-12 ">
          {cardsDisplayData.allContentfulProductCardsDisplay.edges[edgeNumber].node.productCards.map(
            card => (
              <ProductCard
                key={card.productTitle}
                productTitle={card.productTitle}
                productDescription={card.productDescription}
                productPrice={card.productPrice}
                productImage={card.productImage.url}
              />
            )
          )}
        </div>
      </Box>
    </>
  )
}

export default ProductCardDisplayComponent
