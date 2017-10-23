import styled from 'styled-components';
import { DODGER_BLUE, WHITE, BLACK } from 'constants/colours';
import { FONT_FAMILY } from 'constants/typography';

export const Form = styled.form`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 45px;
  font-family: ${FONT_FAMILY};
  margin-bottom: 30px;
`;

export const Input = styled.input`
  appearance: none;
  text-align: center;
  min-width: 400px;
  padding: 16px 0 8px 0;
  font-size: 16px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${BLACK};

  :hover,
  :active,
  :focus {
    border-bottom-color: ${DODGER_BLUE};
    outline: none;
  }
`;

export const Button = styled.button`
  border-radius: 2px;
  background-color: ${DODGER_BLUE};
  text-transform: uppercase;
  min-height: 36px;
  padding: 0 8px;
  min-width: 64px;
  margin: 20px 8px 0 8px;
  color: ${WHITE};
  text-align: center;
  font-family: ${FONT_FAMILY};
  font-size: 14px;
  appearance: none;
  border: 0;
  box-shadow: 1px 2px 6px rgba(123, 123, 123, 0.9);
  cursor: pointer;
  position: relative;

  :after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.12);
    opacity: 0;
    transition: opacity 0.2s;
  }

  :focus {
    outline: none;
  }

  :hover:after,
  :focus:after {
    opacity: 1;
  }

  :active {
    box-shadow: 1px 4px 10px rgba(123, 123, 123, 0.9);
  }

  :active:after {
    opacity: 0;
  }
`;

export const Container = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
