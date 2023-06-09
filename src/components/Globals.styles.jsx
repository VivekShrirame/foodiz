import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: "Poppins", sans-serif;
  /* transition: all 0.2s linear; */
}

html {
  font-size: 15px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor}
}
`;
