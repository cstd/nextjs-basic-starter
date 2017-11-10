import React from 'react';
import withRedux from 'next-redux-wrapper';
import styled from 'styled-components';
import Router from 'next/router';
import { Helmet } from 'react-helmet';
import { Flex, Box } from 'grid-styled';
import initStore from '../utils/store';
import { getAccessToken } from '../actions/user';
import BigButton from '../components/BigButton';

const Wrapper = styled(Flex)`
	height: 100vh;
	background-color: #F5F6F7;
`;

const H1 = styled.h1`
	font-size: 30px;
	margin-bottom: 40px;
`;

const Block = styled(Box)`
	background-color: white;
	border: 1px solid #EBEEF0;
	border-radius: 4px;
	text-align: center;
`;

class Home extends React.Component {
	signIn() {
		this.props.dispatch(getAccessToken());
		Router.push('/dashboard');
	}
	
	render() {
		return (
			<Wrapper p={20} justify="center" align="center" direction="column">
				<Helmet>
					<title>NextJS Basic Stater</title>
				</Helmet>
				<H1>NextJS Basic Stater</H1>
				<Block p={[20, 30]} width={[1, 1, 1, 500]}>
					<BigButton onClick={() => this.signIn()} label="Sign In" />
				</Block>
			</Wrapper>
		);
	}
}

export default withRedux(initStore)(Home);
