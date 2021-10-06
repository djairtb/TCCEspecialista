import React from "react";
import logo from "../folha1.png";
import { StyledNavbar, Img, NavLink, MobileContainer } from "../styles";

export default function MobileView() {
  return (
    <StyledNavbar>
      <Img src={logo} alt="" />
      <MobileContainer>
        <NavLink to="/home">
          <span>
            <i className="fa fa-home fa-lg" aria-hidden="true"></i>
          </span>
        </NavLink>
        <NavLink to="/reports">
          <i className="fa fa-pie-chart fa-lg" aria-hidden="true"></i>
        </NavLink>
        <NavLink to="/whoweare">
          <i class="fa fa-question-circle fa-lg" aria-hidden="true"></i>
        </NavLink>
        <NavLink to="/contactus">
          <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
        </NavLink>
      </MobileContainer>
      <NavLink to="/login">
        <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
      </NavLink>
    </StyledNavbar>
  );
}
