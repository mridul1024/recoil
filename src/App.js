import { useState } from "react";
import { useStyles } from "./styles";
import { useRecoilValue, useRecoilState } from "recoil";
import { allData, entries } from "./recoil/atom";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

function App() {
  const classes = useStyles();

  const [stateData, setStateData] = useRecoilState(allData);
  const entryCount = useRecoilValue(entries);
  const [fieldInput, setFieldInput] = useState({ id: "", name: "", data: "" });

  const handleChange = (e) => {
    setFieldInput({
      ...fieldInput,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
    console.log(fieldInput);
  };

  const storeNewData = () => {
    console.log("store new data");
    console.log(fieldInput);
    setStateData((prev) => [
      ...prev,
      {
        id: fieldInput.id,
        name: fieldInput.name,
        data: fieldInput.data,
      },
    ]);
  };

  const deleteData = (e) => {
    setStateData((prev) => {
      let arr = [...prev];
      arr.splice(e.currentTarget.id, 1);
      return arr;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className={classes.header}>Recoil Demo App</p>

        <p className={classes.entriesText}>Total Entries : {entryCount}</p>
        <div className={classes.fieldContainer}>
          <TextField
            type="number"
            name="id"
            onChange={handleChange}
            placeholder="Enter id"
            className={classes.fields}
            InputProps={{ disableUnderline: true }}
          />
          <TextField
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter name"
            className={classes.fields}
            InputProps={{ disableUnderline: true }}
          />
          <TextField
            type="text"
            name="data"
            onChange={handleChange}
            placeholder="Enter content"
            className={classes.fields}
            InputProps={{ disableUnderline: true }}
          />
          <Button onClick={storeNewData} className={classes.fieldButton}>
            add
          </Button>
        </div>

        <div className={classes.listContainer}>
          {stateData.map((item, index) => (
            <Card key={index} className={classes.cardContainer}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  className={classes.cardContent}
                >
                  {item.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  id={index}
                  size="small"
                  className={classes.cardButton}
                  onClick={deleteData}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
