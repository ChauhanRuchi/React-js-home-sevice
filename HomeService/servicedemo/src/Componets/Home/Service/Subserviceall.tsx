import SubServiceCard from "./Service";
import Typography from "@mui/material/Typography";
import { getsubcategory, getsubcategoryall } from "../../../store/categorySlice";
import { useAppdispatch, useAppselector } from "../../../hooks";
import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import "../../../../src/styles/style.css";

const SubServiceAll = () => {
  const dispatch = useAppdispatch();
  let { id } = useParams();
  const categorystate = useAppselector((state) => state.category);
  let servicearr = categorystate.getsubCategoryAll;
 
  useEffect(() => {
    dispatch(getsubcategory({ _id: id }));
    dispatch(getsubcategoryall());
  }, []);
  return (
    <>
      <div className="main">
        <Typography variant="h5" style={{ margin: "10px" }}>
          SubService
        </Typography>
        <div className="divsubservice">
          <Grid container spacing={2}>
            {servicearr?.map(function (item:any) {
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
export default SubServiceAll;
