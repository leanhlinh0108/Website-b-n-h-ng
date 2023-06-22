import { render } from "@testing-library/react";
import { Component } from "react";
import HomePage from "./pages/users/homePage";
import { Route,Routes } from "react-router-dom";
import { ROUTERS } from "./utils/router";
const renderUserRouter = () =>{
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component : <HomePage></HomePage>
        },
       
    ]
    return (
        <Routes>
            {
                userRouters.map((item, key) =>(<Route key= {key} path={item} element={item.component} >

                    </Route>))
            }
        </Routes>
    )
}
const RouterCustom = () => {
     return renderUserRouter;
};
export default RouterCustom;