import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#95dada",
    border: "1px solid grey",
    borderRadius: "5px",
    padding: "25px",
    cursor: "pointer",
    mozOsxFontSmoothing: "grayscale",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
    transition: "transform 0.25s ease-out",
    "&:hover": {
      transform: "scale(1.05)"
    }
  }
}));
