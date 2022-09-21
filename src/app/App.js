import React, { useState } from 'react';
import { fetchHomeNyTimesStories, fetchNyTimesStoriesBySection } from '../utils/api-calls';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import PrimaryContainer from '../components/primary-container/PrimaryContainer';

const App = () => {
	const [articles, setArticles] = useState([ ]);
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
	}
  
	const getArticlesBySection = async section => {
		fetchNyTimesStoriesBySection(section)
			.then((data) => {
				setArticles([...data.results]);
			})
			.catch((err) => {
				console.log(err);
				setError(`Error: ${error.status}: ${error.statusText}`);
			});
	};

	return (
		<main className='App'>
			{console.log(articles)}
			<Navbar
				getArticlesBySection={getArticlesBySection}
				setArticles={setArticles}
				articles={articles}
			/>
			<Switch>
				{/* <Route exact path='/home'>
					<PrimaryContainer articles={articles} />
				</Route> */}
				<Route exact path='/:section'>
					<PrimaryContainer articles={articles} />
				</Route>
			</Switch>
		</main>
	);
};

export default App;
