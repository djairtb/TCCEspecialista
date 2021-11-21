import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import logo from "./folha1.png";
import { StyledNavbar, Img, NavLink, LogoutButton } from "./styles";
import MobileView from "./MobileView";
import { isMobile } from "react-device-detect";
import { logout } from "../../Redux/Actions";

function NavBar() {
  const dispatch = useDispatch();

  const onLogoutClick = useCallback(() => {
    dispatch(logout());
  }, []);

  if (isMobile) {
    return <MobileView />;
  }

  return (
    <StyledNavbar>
      <NavLink to="/home">
        <Img src={logo} alt="" />
      </NavLink>
      <div>
        <NavLink to="/home">
          <i className="fa fa-home" aria-hidden="true"></i>
          &nbsp; Home &nbsp;|&nbsp; &nbsp;
        </NavLink>
        <NavLink to="/reports">
          <i className="fa fa-pie-chart" aria-hidden="true"></i> &nbsp;
          Relatório &nbsp; | &nbsp;
        </NavLink>
        <NavLink to="/aboutus">
          <i class="fa fa-question-circle" aria-hidden="true"></i> &nbsp; Quem
          somos &nbsp; | &nbsp;
        </NavLink>
        <NavLink to="/contactus">
          <i class="fa fa-phone" aria-hidden="true"></i> &nbsp; Contato&nbsp;
        </NavLink>
      </div>
      <LogoutButton onClick={onLogoutClick}>
        <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
      </LogoutButton>
    </StyledNavbar>
  );
}

export default NavBar;
