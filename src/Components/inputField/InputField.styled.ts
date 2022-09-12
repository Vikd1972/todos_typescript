import styled from 'styled-components';

const InputForm = styled.form`
  width: auto;  
  height: 37px;
  color: #424242;
  font-size: 18px;
  background-color: ${props => props.theme.basic_background};
  border: 1px solid ${props => props.theme.font_color};
  display: flex;
  flex-direction: row;
  .is-done-all {
    width: 30px;
    height: 30px;
    margin: 3px;
    cursor: pointer;
  }
  .input-text {
    background-color: ${props => props.theme.basic_background};
    width: 100%;
    font-size: 18px;
    border: none;
    outline: none;
    padding-left: 7px;
  }
`;


InputForm.defaultProps = {
  theme: {
    basic_background: '#fff3e0',   
    font_color: '#424242'
  }
}

export {InputForm}