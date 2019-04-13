import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  #root,
  body,
  .ant-layout {
    min-height: 100%;
    margin: 0;
    padding: 0;
    background-color: gray;
  }
  .ant-form-item {
    margin: 0;
  }
  .ant-btn-primary, h3.ant-typography {
    margin-top: 24px;
  }
`;

export const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
`;
