import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../Views/Footer";
import NavBar from "../../Views/Navbar";

const AppRoutes = ({ component: Component, ...rest }) => {
  /*const history = useHistory();
  const isAuthenticated = useSelector(({ login }) => {
    return login.isAuthenticated;
  });

  useEffect(() => {
    if (isAuthenticated) {
      return;
    }
    history.push("/login");
  }, [isAuthenticated]);
*/
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
