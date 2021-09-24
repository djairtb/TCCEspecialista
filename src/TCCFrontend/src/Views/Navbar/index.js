import React from "react";
import logo from "./logo.png";
import { StyledNavbar, Img, NavLink } from "./styles";

function NavBar() {
  return (
    <StyledNavbar>
      <Img src={logo} alt="" />
      <div>
        <NavLink to="/home">
          <span>
            <i className="fa fa-home" aria-hidden="true"></i>
          </span>
           Home |&nbsp;
        </NavLink>
        <NavLink to="/reports">
          <i className="fa fa-pie-chart" aria-hidden="true"></i> Relatório |&nbsp;
        </NavLink>
        <NavLink to="/whoweare">
          <i class="fa fa-question-circle" aria-hidden="true"></i> Quem somos |&nbsp;
        </NavLink>
        <NavLink to="/contactus">
          <i class="fa fa-phone" aria-hidden="true"></i> Contato
        </NavLink>
      </div>
      <NavLink to="/login"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</NavLink>
    </StyledNavbar>
  );
}

export default NavBar;
