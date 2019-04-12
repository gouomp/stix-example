import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  #root,
  body,
  .ant-layout {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
`;
