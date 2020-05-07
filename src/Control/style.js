import styled from 'styled-components';

export const CardsContainerStyled = styled.div`
  position: relative;
  border: 1px solid #c8c8c8;
  overflow: auto;
  height: ${props => props.height ? `${props.height}px` : '100%'};
  width: 100%;
  background-color: #f6f6f6;
`;

export const CardsStyled = styled.div`
    position: absolute;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, ${props => `${props.widthCard}px`});
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding: 5px;
    overflow: auto;
    justify-content: ${props => props.justifyContentItems};
`;

export const CardStyled = styled.div`
    position: relative;
    display: grid;
    height: auto;
    width: auto;
    box-shadow: 8px 8px 6px -11px rgba(0,0,0,0.69);
    padding: 5px;
    background: #fff;
    overflow: hidden;
    background-color: ${props => props.isSelected ? 'rgba(0, 0, 0, 0.1)' : 'white'};
    border: 2px solid ${props => props.isSelected ? 'rgba(0, 0, 0, 0.1)' : 'white'};
    box-sizing: border-box;

    :hover {
        border: 2px solid #0078d4;

      .display-actions {
        display: grid;
      }
    }

  .display-actions {
    position: absolute;
    display: none;
    width: 100%;
    height: 40px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.03);
    animation-name: animation_display-actions;
    animation-duration: 0.4s;
  }

  @keyframes animation_display-actions {
    from {
      height: 0px;
    }
    to {
      height: 40px;
    }
  }
`;
