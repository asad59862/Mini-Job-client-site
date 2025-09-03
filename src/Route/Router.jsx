import { createBrowserRouter } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomeLayOut from "../LayOut/MainLayOut/HomeLayOut";
import HomePage from "../Home/HomePage";
import AddTask from "../AddTask/AddTask";
import LoginPage from "../Auth/LoginPage";
import RegisterPage from "../Auth/RegisterPage";
import BrowseTask from "../BrowseTask/BrowseTask";
import TaskDetails from "../BrowseTask/TaskDetails";
import MypostedAllJob from "../My-posted-job/MypostedAllJob";
import UpdateProfile from "../profile/UpdateProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayOut,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/addtask",
        Component: AddTask,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/browseTask",
        Component: BrowseTask,
      },
      {
        path: "/task/:id",
        Component: TaskDetails,
      },
      {
        path: "/myjob",
        Component: MypostedAllJob,
      },
      {
        path: "/update-profile",
        Component:UpdateProfile
      },
    ],
  },
]);