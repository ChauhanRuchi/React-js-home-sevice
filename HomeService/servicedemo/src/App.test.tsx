import React, { Reducer } from "react";
import * as redux from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Home from "./Componets/Home";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "./store";
import { useSelector,useDispatch } from "react-redux";
import MainServiceEdit from "./Componets/Admin/Service/MainServiceEdit";

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: ()=>jest.fn(),
useDispatch:()=> jest.fn()}));

test("should be render app componet", () => {
 render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
 
});

test("dispatch",()=>{
  render(
     <Home /> 
  );
     
const spy = jest.spyOn(redux, 'useSelector').mockReturnValueOnce(0)
let mockfun=jest.fn(()=> 0)

})

