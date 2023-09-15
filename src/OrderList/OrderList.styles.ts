import { Theme } from "@mui/material";

export const orderListStyles = {
  listWrapper: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    margin: "auto",
    gap: "50px",
    width: "70%"
  },
  text: {
    textTransform: "capitalize",
    color: (theme: Theme) => theme.palette.common.white
  },
  listItem: {
    "& span": {
      fontSize: "2rem"
    }
  }
}