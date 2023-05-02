import React from "react"
import { Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query HeroSection {
      heroSection: allContentfulHeroSectionImageAndText {
        edges {
          node {
            heading
            description
            sectionImage {
              url
            }
          }
        }
      }
    }
  `)
  console.log("hero",data)
  return (
    <>
      <div className="flex gap-10 justify-center items-center pt-14 pb-14 flex-wrap HeroSectionBg">
        <div>
          <img
            src={data.heroSection.edges[0].node.sectionImage.url}
            alt="ProductImage"
          />
        </div>
        <div className="">
          <Typography variant="h1" color={"#224635"}>
            {data.heroSection.edges[0].node.heading}
          </Typography>
          <Typography variant="h5" color={"#224635"}>
            {data.heroSection.edges[0].node.description}
          </Typography>
        </div>
      </div>
    </>
  )
}

export default HeroSection
