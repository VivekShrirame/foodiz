import styled from "styled-components";

export const StyledHeroSection = styled.div`
  display: flex;
  height: calc(100% - 70px);
  align-items: center;
  justify-content: space-between;
`;

export const HeroContent = styled.div`
  align-self: flex-start;
  margin-top: 80px;
  flex: 1;

  div {
    display: inline-block;

    h2 {
      font-size: 70px;
      font-weight: 500;
      line-height: 90px;
      span {
        color: #ffc14d;
        font-weight: 700;
        display: block;
      }
    }
    p {
      margin-top: 5px;
      margin-bottom: 25px;
    }

    button {
      background: none;
      outline: none;
      border: 2px solid #eeeeee;
      padding: 17px 35px;
      margin-right: 20px;
      border-radius: 30px;
      color: ${({ theme }) => theme.fontColor};

      &:hover {
        background: #ffc14d;
        cursor: pointer;
        color: ${({ theme }) => theme.backgroundColor};
      }
    }
  }
`;

export const StyledButtons = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 1;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 85vh;
    width: auto;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 100px;

  a {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dadada;
    color: ${({ theme }) => theme.fontColor};
    font-size: 20px;

    &:hover {
      background: #ffc14d;
      color: ${({ theme }) => theme.backgroundColor};
    }
  }
`;

export const PhoneIcon = styled.a`
  background: ${({ theme }) => theme.fontColor};

  svg {
    color: ${({ theme }) => theme.backgroundColor};
  }
`;
