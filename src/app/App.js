import React, { useState, useEffect } from 'react';
import { fetchNyTimesStories } from '../utils/api-calls';
import Navbar from '../components/navbar/Navbar';
import PrimaryContainer from '../components/primary-container/PrimaryContainer';

const App = () => {
	const [articles, setArticles] = useState([ ]);
	const [error, setError] = useState('');
  
	const getArticlesBySection = async section => {
		fetchNyTimesStories(section)
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
			<PrimaryContainer articles={articles} />
		</main>
	);
};

export default App;
