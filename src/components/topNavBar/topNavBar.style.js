import styled from "styled-components";

export const TopNavBarContainer = styled.div`
  left: 0;
  top: 0;
  justify-content: space-around;
  flex-direction: column;
  width: 100vw;
  background: #5064de;
  height: 117px;

  .top-nav-bar-image {
    margin-left: 90px;
    margin-right: 90px;
  }
  .logo {
    position: relative;
    top: 50%;
    transform: translateY(50%);
  }
`;
