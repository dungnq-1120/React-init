import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/templates/DefaultLayout";
import AuthenticatedLayout from "./components/templates/AuthenticatedLayout";
import { routerPath } from "./constants/routerContants";
import Login from "./pages/Login";
import HomePage from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
       <Route element={<AuthenticatedLayout />}>
        {/* all route have authenticate layout as home page, fee page.. */}
        <Route path={routerPath.homePage} element={<HomePage/>}/>
      </Route>
      <Route element={<DefaultLayout />}>
        {/* all route have default layout as login, register... */}
        <Route path={routerPath.Login} element={<Login />}/>
      </Route>

    </Routes>
  );
};

export default AppRoutes;
