import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Flex, Box } from 'grid-styled';

const Header = styled.header`
	height: 50px;
	background-color: #2A2D42;
  > h1 {
		margin: 0;
    color: white;
    text-align: center;
		line-height: 50px;
		font-size: 25px;
  }
`;

const Footer = styled.footer`
	text-align: right;
	padding: 20px;
`;

const MyContainer = props => (
  <div>
    <Helmet titleTemplate="%s - NextJS Basic Stater">
      <title />
    </Helmet>
    <Header>
      <h1>NextJS Basic Stater</h1>
    </Header>
    <Box flex={1}>
      {props.children}
    </Box>
		<Footer>
			<small>hieuktr@gmail.com</small>
		</Footer>
  </div>
);

export default MyContainer;
