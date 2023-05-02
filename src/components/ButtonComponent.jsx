import { Button } from "@mui/material"
import React from "react"

const ButtonComponent = ({ btnWidth, btnText }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#D6832B",
          borderRadius: "88px",
          width: `${btnWidth}`,
          padding: "15px 35px",
        }}
      >
        {btnText}
      </Button>
    </>
  )
}

export default ButtonComponent
