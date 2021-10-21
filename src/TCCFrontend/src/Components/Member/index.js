import React, { memo } from "react";
import { MemberContainer, MemberHeader, MemberBody } from "./styles";

function Member({ image, membersname, occupation }) {
  return (
    <MemberContainer>
      <MemberHeader style={{ backgroundImage: `url(${image})` }}></MemberHeader>
      <MemberBody>
        <p>{membersname}</p>
        <p>{occupation}</p>
      </MemberBody>
    </MemberContainer>
  );
}

export default memo(Member);
