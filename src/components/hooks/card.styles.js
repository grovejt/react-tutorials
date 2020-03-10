import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "lightblue",
    minWidth: "300px",
    maxWidth: "600px",
    minHeight: "180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    flexDirection: "column",
    padding: "30px",
    fontSize: "20px",
    "& button": {
      backgroundColor: "white",
      border: "1px solid black",
      cursor: "pointer",
      borderRadius: "5px",
      minWidth: "90px",
      minHeight: "30px",
      fontSize: "16px",
      margin: "10px 0",
      padding: "10px"
    }
  }
}));
