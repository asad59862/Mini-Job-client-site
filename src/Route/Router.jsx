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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myjob",
        element: (
          <PrivateRoute>
           <MypostedAllJob></MypostedAllJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        Component: UpdateProfile,
      },
    ],
  },
]);