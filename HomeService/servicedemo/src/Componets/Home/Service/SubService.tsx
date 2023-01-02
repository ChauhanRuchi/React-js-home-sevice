import SubServiceCard from "./Service";
import Typography from "@mui/material/Typography";
import { getsubcategory, getcategorybyid } from "../../../store/categorySlice";
import { useAppselector, useAppdispatch } from "../../../hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import "../../../../src/styles/style.css";

const Service = () => {
  let servicenamebyid = "";
  const dispatch = useAppdispatch();
  let { id } = useParams();
  const categorystate = useAppselector((state) => state.category);
  let searchbyid = categorystate.getcategorybyId;
  let servicearr = categorystate.getsubCategory;

  useEffect(() => {
    dispatch(getsubcategory({ _id: id }));
    dispatch(getcategorybyid({ id: id }));
  }, []);
  return (
    <>
      <div className="main">
        <Typography
          variant="h5"
          className="subservicetitle"
        >
          {searchbyid?.servicename}
        </Typography>
        <div className="divsubservice">
          <Grid  container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
            {servicearr?.map(function (item: any) {
              return (
                <SubServiceCard
                  title={item?.servicename}
                  decription={item?.decription}
                  image={item?.url}
                  charge={item?.charge}
                  id={item?._id}
                />
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Service;
