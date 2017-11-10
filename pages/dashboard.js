import React from 'react';
import withRedux from 'next-redux-wrapper';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import initStore from '../utils/store';
import request from '../utils/request';
import MyContainer from '../containers/MyContainer';
import BigButton from '../components/BigButton';

const Ul = styled.ul`
`;

const Li = styled.li`
	padding: 5px 10px;
`;

class Dashboard extends React.Component {
	static async getInitialProps(context) {
		const { store } = context;
		
		const data = await request(
			'https://node-hnapi.herokuapp.com/news'
		);
		console.log(data);
		return {
			news: data
		};
	}
	
	render() {
		const { news } = this.props;
		return (
			<MyContainer>
					<Helmet>
						<title>Dashboard</title>
					</Helmet>
					<Ul>
						{news.map(item => 
							<Li key={item.id}>
								<a href={item.url} target="_blank">{item.title}</a>
							</Li>
						)}
					</Ul>
			</MyContainer>
		);
	}
}

export default withRedux(initStore)(Dashboard);
