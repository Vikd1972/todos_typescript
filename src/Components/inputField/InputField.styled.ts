import styled from 'styled-components';

const InputForm = styled.form`
  width: auto;  
  height: 37px;
  color: #424242;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.backrgaund};
  border: 1px solid ${({ theme }) => theme.colors.font};
  display: flex;
  flex-direction: row;
  .is-done-all {
    width: 30px;
    height: 30px;
    margin: 3px;
    cursor: pointer;
  }
  .input-text {
    background-color: ${({ theme }) => theme.colors.backrgaund};
    width: 100%;
    font-size: 18px;
    border: none;
    outline: none;
    padding-left: 7px;
  }
`;

export {InputForm}