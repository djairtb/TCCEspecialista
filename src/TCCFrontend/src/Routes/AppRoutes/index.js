import { Route } from "react-router-dom";
import NavBar from '../../Views/Navbar'

const AppRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <>
          <NavBar />
          <Component {...props} />
        </>
      )}
    />
  );
};

export default AppRoutes;
