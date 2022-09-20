import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import { fetchNyTimesStories } from '../utils/api-calls';

const App = () => {
	const [articles, setArticles] = useState([ ]);
	const [error, setError] = useState('');
  
	const getArticlesBySection = async section => {
		fetchNyTimesStories(section)
			.then((data) => {
				setArticles([...data.results]);
			})
			.catch((error) => {
				console.log(error);
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
		</main>
	);
};

export default App;
