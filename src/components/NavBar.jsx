import {
  AppBar,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material"
import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { graphql, useStaticQuery } from "gatsby"
const NavigationBar = () => {
  const navBarData = useStaticQuery(graphql`
    query HeaderSection {
      navBar: allContentfulNavigationBar {
        edges {
          node {
            navbarLinks
            navbarLogo {
              url
            }
          }
        }
      }
    }
  `)
  console.log("header", navBarData)

  return (
    <>
      <AppBar
        sx={{ position: "static" }}
        className="flex items-center pl-2.5 pr-2.5 pt-4 pb-4"
      >
        <nav className="NavBar gap-4  lg:w-[1440px] w-full">
          <div className="w-1/5">
            <img
              src={navBarData.navBar.edges[0].node.navbarLogo.url}
              alt="Earthgrade Logo"
            />
          </div>
          <div className=" flex  lg:justify-around  items-center min-[260px]:justify-end w-4/5 ">
            <div className="min-[260px]:hidden  lg:flex flex  gap-12">
              {navBarData.navBar.edges[0].node.navbarLinks.map(
                (link, index) => {
                  return (
                    <>
                      <Typography
                        variant="h6"
                        className="cursor-pointer hover:opacity-75"
                      >
                        {link}
                      </Typography>
                    </>
                  )
                }
              )}
            </div>
            <div className="flex items-center gap-6 ">
              <div className="min-[260px]:hidden lg:flex">
                <TextField
                  placeholder="Search"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon className="cursor-pointer hover:opacity-75" />
                      </InputAdornment>
                    ),
                  }}
                  className=" SearchBox pl-1 pr-1"
                />
              </div>
              <div className="flex gap-6">
                <AccountCircleIcon
                  fontSize="large"
                  className="cursor-pointer hover:opacity-75"
                />
                <ShoppingCartIcon
                  fontSize="large"
                  className="cursor-pointer hover:opacity-75"
                />
              </div>
              <div className="lg:hidden md:flex sm:flex">
                <IconButton size="large" color="inherit">
                  <MenuIcon className="cursor-pointer" />
                </IconButton>
              </div>
            </div>
          </div>
        </nav>
      </AppBar>
    </>
  )
}

export default NavigationBar
