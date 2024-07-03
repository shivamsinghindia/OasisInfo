import "./App.css";

import { RouterProvider,Route,createRoutesFromElements, createBrowserRouter } from "react-router-dom";

import Login from "./pages/LoginPage.jsx";
import Registration from "./pages/RegistrationPage.jsx";

import UserProfilePage from "./pages/UserProfilePage.jsx";
import UnauthorisedPage from "./pages/UnauthorisedPage.jsx";
import ChangePasswordPage from './pages/ChangePasswordPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Login />} />
      <Route path="register" element={<Registration />} />
      {/* <Route path="profile" element={<ProfileCard/>}/> */}

      <Route path="userprofile" element={<UserProfilePage/>}/> {/**my profile */}

      <Route path="changePassword" element={<ChangePasswordPage/>} />


      <Route path="unauthorised" element={<UnauthorisedPage/>}/>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
