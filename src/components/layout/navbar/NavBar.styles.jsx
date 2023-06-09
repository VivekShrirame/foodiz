import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 25px;

  span {
    color: #eeeeee;
  }
`;

export const NavLinks = styled.div`
  div {
    display: inline-block;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  margin-right: 50px;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 500;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #ffc14d;
  }
`;

export const ThemeIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, colorTheme }) =>
    colorTheme === "dark" ? "#ffc14d" : theme.fontColor};
  font-size: 20px;
  cursor: pointer;
`;

export const SocialIcons = styled.div`
  display: flex;

  div {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
    a {
      color: ${({ theme }) => theme.fontColor};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      border-radius: 10px;
      border: 2px solid #eeeeee;

      &:hover {
        background: #ffc14d;
        color: ${({ theme }) => theme.backgroundColor};
      }
    }
  }
`;
