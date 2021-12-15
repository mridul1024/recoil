import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  header: {
    fontSize: "34px",
    textTransform: "uppercase",
    letterSpacing: "4px",
    textAlign: "center",
  },
  entriesText: {
    fontSize: "18px",
    textAlign: "center",
  },
  cardContainer: {
    border: "2px solid white",
    margin: "10px 10px",
    color: "grey",
  },
  listContainer: {
    width: "100%",
    height: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  cardText: {
    display: "flex",
  },
  cardButton: {
    marginRight: "0px",
    background: "white",
    color: "black",
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  fields: {
    marginBottom: "4px",
    background: "white",
    color: "white",
    textAlign: "center",
  },
  fieldButton: {
    marginTop: "5px",
    border: "2px solid black",
    color: "black",
  },
});
