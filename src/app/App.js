import React, { useState, useEffect } from 'react';
import {
	fetchHomeNyTimesStories,
	fetchNyTimesStoriesBySection,
} from '../utils/api-calls';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import PrimaryContainer from '../components/primary-container/PrimaryContainer';
import IndividualArticle from '../components/individual-article/IndividualArticle';

const App = () => {
	const [articles, setArticles] = useState([]);
	const [sectionArticles, setSectionArticles] = useState([]);
	const [error, setError] = useState('');

	const getHomeArticles = async () => {
		fetchHomeNyTimesStories()
			.then((data) => {
				setArticles([...data.results]);
			})
			.catch((err) => {
				console.log(err);
				setError(`${err}`);
			});
	};

	const getArticlesBySection = async (section) => {
		fetchNyTimesStoriesBySection(section)
			.then((data) => {
				setSectionArticles([...data.results]);
			})
			.catch((err) => {
				console.log(err);
				setError(`${err}`);
			});
	};

	useEffect(() => {
		getHomeArticles();
	}, []);

	if (error) {
		return <h1>{error}</h1>;
	} else {
		return (
			<main className='App'>
				<Navbar getArticlesBySection={getArticlesBySection} />
				<Switch>
					<Route exact path='/'>
						<Home articles={articles} />
					</Route>
					<Route
						exact
						path='/:section'
						render={({ match }) => {
							return (
								<PrimaryContainer
									section={match.params.section}
									sectionArticles={sectionArticles}
									getArticlesBySection={getArticlesBySection}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/:section/:title'
						render={({ match }) => {
							return (
								<IndividualArticle
									sectionArticles={sectionArticles}
									section={match.params.section}
									title={match.params.title}
									getArticlesBySection={getArticlesBySection}
								/>
							);
						}}
					/>
				</Switch>
			</main>
		);
	}
};

export default App;
