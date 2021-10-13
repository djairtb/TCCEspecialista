import { Route } from "react-router-dom";
import Footer from "../../Views/Footer";
import NavBar from "../../Views/Navbar";

const AppRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <NavBar />
          <Component {...props} />
          <Footer />
        </>
      )}
    />
  );
};

export default AppRoutes;
