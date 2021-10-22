import React, { useCallback } from "react";
import logo from "../folha1.png";
import { useDispatch } from "react-redux";
import {
  StyledNavbar,
  Img,
  NavLink,
  MobileContainer,
  LogoutButton,
} from "../styles";
import { logout } from "../../../Redux/Actions";

export default function MobileView() {
  const dispatch = useDispatch();

  const onLogoutClick = useCallback(() => {
    dispatch(logout());
  }, []);

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
        <NavLink to="/aboutus">
          <i class="fa fa-question-circle fa-lg" aria-hidden="true"></i>
        </NavLink>
        <NavLink to="/contactus">
          <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
        </NavLink>
      </MobileContainer>
      <LogoutButton onClick={onLogoutClick}>
        <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
      </LogoutButton>
    </StyledNavbar>
  );
}
