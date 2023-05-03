import React from "react"
import ButtonComponent from "./ButtonComponent"
import { Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"

const ProductTypeComponent = () => {
  const Productquery = useStaticQuery(graphql`
    query ProductTypeComponent {
      allContentfulImageWithRightSideText {
        edges {
          node {
            boldSubHeading
            description {
              description
            }
            colouredHeading
            sectionImage {
              url
            }
          }
        }
      }
      availableProducts: allContentfulAvailableProducts {
        edges {
          node {
            productImage {
              url
            }
            productName
          }
        }
      }
    }
  `)
  console.log(Productquery)
  return (
    <>
      <div className="bg-white  pl-28 pr-28 flex justify-center items-center flex-col gap-20 pt-20 pb-24">
        <div className="flex flex-wrap gap-20 justify-center items-center ">
          {Productquery.availableProducts.edges.map((node, index) => {
            return (
              <>
                <figure className="flex flex-col " key={index}>
                  <img
                    src={node.node.productImage.url}
                    alt="productImage"
                    className="h-full w-full hover:bg-gray-200 hover:rounded-full p-4"
                  />
                  <figcaption>{node.node.productName}</figcaption>
                </figure>
              </>
            )
          })}
        </div>
        <div className="bg-[#f1f1f1] justify-center items-center flex-wrap flex pl-28 pr-28 pt-16 pb-16 lg:w-[1440px] ">
          <div className="lg:w-2/5 w-full flex">
            <img
              src={
                Productquery.allContentfulImageWithRightSideText.edges[0].node
                  .sectionImage.url
              }
              alt="To_Be_Launched_Product"
            />
          </div>
          <div className="flex flex-col lg:w-3/5  items-start gap-2 ">
            <Typography variant="h5" color={"secondary"}>
              {
                Productquery.allContentfulImageWithRightSideText.edges[0].node
                  .colouredHeading
              }
            </Typography>
            <Typography
              variant="h2"
              sx={{ wordBreak: "break-word" }}
              color={"primary"}
            >
              {
                Productquery.allContentfulImageWithRightSideText.edges[0].node
                  .boldSubHeading
              }
            </Typography>
            <Typography variant="h5" color={"primary.dark"} className=" pt-3">
              {
                Productquery.allContentfulImageWithRightSideText.edges[0].node
                  .description.description
              }
            </Typography>
            <ButtonComponent btnWidth={"168px"} btnText={"Notify me"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductTypeComponent
