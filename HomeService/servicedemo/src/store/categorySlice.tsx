import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {category,subcategory, editcategory,editsubcategory,deletecategory,deletesubcategory, getcategorybyId} from "../Types/categoryslice.type"

let setserviceurl = process.env.REACT_APP_URl_SETSERVICE || "";
let setsubserviceurl = process.env.REACT_APP_URl_SETSUBSERVICE || "";
let getsubserviceurl = process.env.REACT_APP_URl_GETSUBSERVICE || "";
let getserviceurl = process.env.REACT_APP_URl_GETSERVICE || "";
let getsubserviceallurl = process.env.REACT_APP_URl_GETSUBSERVICEALL || "";
let seteditservice = process.env.REACT_APP_URl_SETEDITSERVICE || "";
let seteditsubservice = process.env.REACT_APP_URl_SETEDITSUBSERVICE || "";
let setdeleteservice = process.env.REACT_APP_URl_SETDELETESERVICE || "";
let setdeletesubservice = process.env.REACT_APP_URl_SETDELETESUBSERVICE || "";
let getsearchbyidurl = process.env.REACT_APP_URl_GETSEARCHBYID || "";
let getsubservicebyidurl = process.env.REACT_APP_URl_GETSUBSERVICEBYID || "";

export const getcategory = createAsyncThunk("getcategory", async () => {
  try {
    const response = await axios.get(getserviceurl);
    return response.data;
  } catch (e: any) {
    console.log("eroor,,,,", e.response.data);
    return e.response.data;
  }
});
export const createcategory = createAsyncThunk(
  "createcategory",
  async (user: FormData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      };
      const response = await axios.post(setserviceurl, user, config);
      return response.data;
    } catch (e: any) {
      console.log("eroor,,,,", e.response.data);
      return e.response.data;
    }
  }
);
export const createsubcategory = createAsyncThunk(
  "createsubcategory",
  async (user: FormData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      };
      const response = await axios.post(setsubserviceurl, user, config);
      return response.data;
    } catch (e: any) {
      console.log("eroor,,,,", e.response.data);
      return e.response.data;
    }
  }
);
export const getsubcategory = createAsyncThunk(
  "getsubcategory",
  async (user: any) => {
    try {
      const response = await axios.get(getsubserviceurl + user?._id);
      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);
export const getsubcategoryall = createAsyncThunk(
  "getsubcategoryall",
  async () => {
    try {
      const response = await axios.get(getsubserviceallurl);
      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);
export const editCategory = createAsyncThunk(
  "editcategory",
  async (data: { user: FormData; id: any }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      };
      const response = await axios.patch(
        seteditservice + data.id,
        data.user,
        config
      );
      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);
export const editSubcategory = createAsyncThunk(
  "editsubcategory",
  async (data: { user: FormData; id: any }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      };
      const response = await axios.patch(
        seteditsubservice + data.id,
        data.user,
        config
      );
      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);
export const deleteCategory = createAsyncThunk(
  "deletecategory",
  async (id: any) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      };
      const response = await axios.delete(setdeleteservice + id, config);
      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);
export const deleteSubcategory = createAsyncThunk(
  "deletesubcategory",
  async (id: any) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      };
      const response = await axios.delete(setdeletesubservice + id, config);
      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);
export const getcategorybyid = createAsyncThunk(
  "getcategorybyid",
  async (user: any) => {
    try {
      const response = await axios.get(getsearchbyidurl + user?.id);
      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);

export const getsubcategorybyid = createAsyncThunk(
  "getsubcategorybyid",
  async (user: any) => {
    try {
      const response = await axios.get(getsubservicebyidurl + user?._id);
      return response.data;
    } catch (e: any) {
      console.log("eroor,,,,", e.response.data);
      return e.response.data;
    }
  }
);
const initialState:{createCategory:category[],loading:boolean,getcategoryData:category[],createsubCategory:subcategory[],
getsubCategory:subcategory[],getsubCategoryAll:subcategory[],editCategory:editcategory,editsubCategory:editcategory,deleteCategory:deletecategory,deletesubCategory:deletesubcategory,getcategorybyId:getcategorybyId,getsubcategorybyId:subcategory[]}={
    loading: false as boolean,
    getcategoryData: []as category[],
    createCategory: []as category[],
    createsubCategory: [] ,
    getsubCategory: [],
    getsubCategoryAll: [],
    editCategory: {}as editcategory,
    editsubCategory: {} as editsubcategory,
    deleteCategory: {}as deletecategory,
    deletesubCategory: {}as deletesubcategory,
    getcategorybyId: {} as getcategorybyId,
    getsubcategorybyId: []as subcategory[],
}

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    clearsubcategoryState: (state: any) => {
      state.createsubCategory = [];
    },
    clearcategoryState: (state: any) => {
      state.createCategory = [];
    },
    cleareditcategoryState: (state: any) => {
      state.editCategory = [];
    },
    cleareditsubcategoryState: (state: any) => {
      state.editsubCategory = [];
    },
    cleardeletecategoryState: (state: any) => {
      state.deleteCategory = [];
    },
    cleardeletesubcategoryState: (state: any) => {
      state.deletesubCategory = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getcategory.fulfilled, (state: any, action: PayloadAction<category[]>) => {
      state.getcategoryData = action.payload;
      state.loading = false;
    });
    builder.addCase(getcategory.rejected, (state: any, action: any) => {
      state.getcategoryData = action.payload;
      state.loading = false;
    });
    builder.addCase(getcategory.pending, (state: any, action: any) => {
      state.getcategoryData = action.payload;
      state.loading = false;
    });
    builder.addCase(createcategory.fulfilled, (state: any, action: PayloadAction<category[]>) => {
      state.createCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(createcategory.rejected, (state: any, action: any) => {
      state.createCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(createcategory.pending, (state: any, action: any) => {
      state.createCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(createsubcategory.fulfilled, (state: any, action: PayloadAction<subcategory[]>) => {
      state.createsubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(createsubcategory.rejected, (state: any, action: any) => {
      state.createsubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(createsubcategory.pending, (state: any, action: any) => {
      state.createsubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(getsubcategory.fulfilled, (state: any, action: PayloadAction<subcategory[]>) => {
      state.getsubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(getsubcategory.rejected, (state: any, action: any) => {
      state.getsubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(getsubcategory.pending, (state: any, action: any) => {
      state.getsubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(getsubcategoryall.fulfilled, (state: any, action: PayloadAction<subcategory[]>) => {
      state.getsubCategoryAll = action.payload;
      state.loading = false;
    });
    builder.addCase(getsubcategoryall.rejected, (state: any, action: any) => {
      state.getsubCategoryAll = action.payload;
      state.loading = false;
    });
    builder.addCase(getsubcategoryall.pending, (state: any, action: any) => {
      state.getsubCategoryAll = action.payload;
      state.loading = false;
    });
    builder.addCase(editCategory.fulfilled, (state: any, action: PayloadAction<editcategory>) => {
      state.editCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(editCategory.rejected, (state: any, action: any) => {
      state.editCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(editCategory.pending, (state: any, action: any) => {
      state.editCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(editSubcategory.fulfilled, (state: any, action: PayloadAction<editsubcategory>) => {
      state.editsubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(editSubcategory.rejected, (state: any, action: any) => {
      state.editsubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(editSubcategory.pending, (state: any, action: any) => {
      state.editsubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteCategory.fulfilled, (state: any, action: PayloadAction<deletecategory>) => {
      state.deleteCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteCategory.rejected, (state: any, action: any) => {
      state.deleteCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteCategory.pending, (state: any, action: any) => {
      state.deleteCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteSubcategory.fulfilled, (state: any, action: PayloadAction<deletesubcategory>) => {
      state.deletesubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteSubcategory.rejected, (state: any, action: any) => {
      state.deletesubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteSubcategory.pending, (state: any, action: any) => {
      state.deletesubCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(getcategorybyid.fulfilled, (state: any, action: PayloadAction<getcategorybyId>) => {
      state.getcategorybyId = action.payload;
      state.loading = false;
    });
    builder.addCase(getcategorybyid.rejected, (state: any, action: any) => {
      state.getcategorybyId = action.payload;
      state.loading = false;
    });
    builder.addCase(getcategorybyid.pending, (state: any, action: any) => {
      state.getcategorybyId = action.payload;
      state.loading = false;
    });
    builder.addCase(getsubcategorybyid.fulfilled, (state: any, action: PayloadAction<subcategory[]>) => {
      state.getsubcategorybyId = action.payload;
      state.loading = false;
    });
    builder.addCase(getsubcategorybyid.rejected, (state: any, action: any) => {
      state.getsubcategorybyId = action.payload;
      state.loading = false;
    });
    builder.addCase(getsubcategorybyid.pending, (state: any, action: any) => {
      state.getsubcategorybyId = action.payload;
      state.loading = false;
    });
  },
});

export const {
  clearsubcategoryState,
  clearcategoryState,
  cleardeletecategoryState,
  cleardeletesubcategoryState,
  cleareditcategoryState,
  cleareditsubcategoryState,
} = categorySlice.actions;
export default categorySlice.reducer;
