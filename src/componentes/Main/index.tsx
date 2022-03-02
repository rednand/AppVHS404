import React from "react";
import { MainTeste1, MainTeste2, MainTeste3, Section } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  some: {
    display: "flex",
    margin: "20%",
    backgroundColor: "red",
  },
  containerBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
  },
  childBox0: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    flex: "1",
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <MainTeste1>
      <MainTeste2>
        <MainTeste3>
          <Box className={classes.some}>
            <Box className={classes.childBox0}><h2>sffsdfs</h2>
            <p>wfedbrfgtdnrh6uyjrnfxhgd</p></Box>
          </Box>
        </MainTeste3>
      </MainTeste2>
      <Section>Horror</Section>
    </MainTeste1>
  );
};

export default Main;
