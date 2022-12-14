import styled from 'styled-components';

const TodoField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .todo-name {
    color: ${({ theme }) => theme.colors.font};
    text-align: center;
    margin-top: 50px;
    font-size: 76px;
    width: 600px;
  }
`;

export {TodoField}