import SubServiceCard from "./Service";
import Typography from "@mui/material/Typography";
import { getsubcategory, getsubcategoryall } from "../../store/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import "../../../src/styles/demo.css";
import { serialize } from "v8";

const SubServiceAll = () => {
  let servicenamebyid = "";
  const dispatch = useDispatch<any>();
  let { id } = useParams();
  const state1 = useSelector((state: any) => state.category);
  let searchbyid = state1.getcategorybyId;
  let servicearr = state1.getsubCategoryAll;
  let servicename = state1?.getcategoryData;

  servicename?.map((item: any) => {
    console.log(item.servicename);
  });

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
        <div className="card" style={{ display: "flex", flexDirection: "row" }}>
          <Grid container spacing={2}>
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
export default SubServiceAll;
