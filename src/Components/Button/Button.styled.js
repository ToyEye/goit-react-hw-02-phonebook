import styled from '@emotion/styled';

const StyledButton = styled.button`
    padding: 5px 15px;
    width: 110px;
    margin-right:auto;
    margin-left:auto;
    border:none;
    border-radius:5px;
     filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
// const TextButton = styled.span`
// color:black;
// `



const Button = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
};
export default Button