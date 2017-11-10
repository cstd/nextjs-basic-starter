import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background-color: #34A69A;
  font-size: 20px;
  font-weight: bold;
  padding: 20px 10px;
  width: 300px;
  max-width: 100%;
  border: 0;
  border-radius: 7px;
  cursor: pointer;
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.9;
  }
`;

const BigButton = ({ onClick, label }) => (
    <Button type="button" onClick={onClick}>{label}</Button>
);

export default BigButton;
