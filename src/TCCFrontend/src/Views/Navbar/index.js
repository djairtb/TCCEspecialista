import React from "react";
import logo from "./folha1.png";
import { StyledNavbar, Img, NavLink } from "./styles";
import MobileView from "./MobileView";
import { isMobile } from "react-device-detect";

function NavBar() {
  if (isMobile) {
    return <MobileView />;
  }

  return (
    <StyledNavbar>
      <Img src={logo} alt="" />
      <div>
        <NavLink to="/home">
          <span>
            <i className="fa fa-home" aria-hidden="true"></i>
          </span>
          &nbsp; Home &nbsp;|&nbsp; &nbsp;
        </NavLink>
        <NavLink to="/reports">
          <i className="fa fa-pie-chart" aria-hidden="true"></i> &nbsp;
          Relatório &nbsp; | &nbsp;
        </NavLink>
        <NavLink to="/whoweare">
          <i class="fa fa-question-circle" aria-hidden="true"></i> &nbsp; Quem
          somos &nbsp; | &nbsp;
        </NavLink>
        <NavLink to="/contactus">
          <i class="fa fa-phone" aria-hidden="true"></i> &nbsp; Contato&nbsp;
        </NavLink>
      </div>
      <NavLink to="/login">
        <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
      </NavLink>
    </StyledNavbar>
  );
}

export default NavBar;
