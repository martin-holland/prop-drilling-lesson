import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../api/api";
import ComponentA from "../components/ComponentA";
import { getDataRedux } from "../store/dataSlice";

// const data = await getData(url);

const Home = () => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  console.log("Data: ", data);

  // useEffect(() => {
  //   dispatch(getDataRedux(url))
  // }, [dispatch])

  useEffect(() => {
    if (data === undefined) dispatch(getDataRedux(url));
  }, [data, dispatch]);

  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      <ComponentA data={data} />
    </div>
  );
};

export default Home;
