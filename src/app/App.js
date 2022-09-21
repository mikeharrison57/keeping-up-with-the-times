import React, { useState, useEffect } from 'react';
import { fetchHomeNyTimesStories, fetchNyTimesStoriesBySection } from '../utils/api-calls';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import PrimaryContainer from '../components/primary-container/PrimaryContainer';

const App = () => {
	const [articles, setArticles] = useState([]);
	const [sectionArticles, setSectionArticles] = useState([]);
	const [singleArticle, setSingleArticle] = useState({});
	const [error, setError] = useState('');

	const getHomeArticles = async () => {
		fetchHomeNyTimesStories()
			.then((data) => {
				setArticles([...data.results]);
			})
			.catch((err) => {
				console.log(err);
				setError(`Error: ${error.status}: ${error.statusText}`);
			});
	};

	const getArticlesBySection = async (section) => {
		fetchNyTimesStoriesBySection(section)
			.then((data) => {
				setSectionArticles([...data.results]);
			})
			.catch((err) => {
				console.log(err);
				setError(`Error: ${error.status}: ${error.statusText}`);
			});
	};

	const getSingleArticle = (foundArt) => {
		setSingleArticle({...singleArticle, ...foundArt});
	};

	useEffect(() => {
		getHomeArticles();
	}, []);

	return (
		<main className='App'>
			{console.log(singleArticle)}
			<Navbar getArticlesBySection={getArticlesBySection} />
			<Switch>
				<Route exact path='/'>
					<Home 
						articles={articles}
						getSingleArticle={getSingleArticle}
					/>
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
								getSingleArticle={getSingleArticle}
							/>
						);
					}}
				/>
			</Switch>
		</main>
	);
};

export default App;
