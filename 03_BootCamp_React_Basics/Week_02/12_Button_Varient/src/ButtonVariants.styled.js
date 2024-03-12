import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
/* Default styles */
  background-color: #fff;
  color: #000;
  border-color: #000;
  
  /* Conditional styles based on props */
  ${(props) =>
    (props.filled &&
    `
      background-color: ${props.bg || 'inherit'};
      color: ${props.color || 'inherit'};
      border: none;
    `)
  }
`;
