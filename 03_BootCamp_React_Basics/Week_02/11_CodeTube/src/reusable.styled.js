import styles from 'styled-components';

export const Button = styles.button`
    outline: none;
    border: none;
    cursor: pointer;
    margin: 10px;
    padding: 7px 15px;
    color: #fff;
    font-weight: bold;
    background-color: ${(props) => props.className === 'instructor'? props.bg : props.bg};
`;

export const Container = styles.div`
    flex: ${(props) => props.flex? props.flex: 1};
    display: flex;
    flex-direction: column;
    gap: 30px;
`;