import styled from 'styled-components';
import { css } from 'styled-components';

export interface Button {  
    illuminatebutton?: string;
}

const ControlPanel = styled.div<Button>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: auto;
  max-width: 600px;
  margin: 0 5px 2px 5px;
  .count {
    &:hover {
      cursor: pointer;  
    }
  }
  .button {
    font-size: 16px;
    margin-left: 10px;
    padding: 0 5px 0 5px;
    background-color: ${({ theme }) => theme.colors.backrgaund};
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.font};
    border-radius: 1${({ theme }) => theme.borderRadius};;
    caret-color: transparent !important;
    width: auto;
    &:hover {
      background-color: ${({ theme }) => theme.colors.active};
    }
  }
  .button-all {
    ${(props) => {
      if (props.illuminatebutton === 'all') {
        return css`
          background-color: ${({ theme }) => theme.colors.active};
        `;
      }
    }}
  }
  .button-active {
    ${(props) => {
      if (props.illuminatebutton === 'active') {
        return css`
          background-color: ${({ theme }) => theme.colors.active};
        `;
      }
    }}
  }
  .button-completed {
    ${(props) => {
      if (props.illuminatebutton === 'completed') {
        return css`
          background-color: ${({ theme }) => theme.colors.active};
        `;
      }
    }}
  }
  .button-clear {
    opacity: 0;
  }
`;

const ControlPanelButton = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 445px) {
    order: 1;
    margin: 5px auto 0 auto
  }
`;

export {
  ControlPanel,
  ControlPanelButton
}