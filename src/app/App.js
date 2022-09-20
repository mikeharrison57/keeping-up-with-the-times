import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import { fetchNyTimesStories } from '../utils/api-calls';

const App = () => {
	const [articles, setArticles] = useState([ ]);
	const [error, setError] = useState('');
  const [sections, setSections] = useState([ ]);

	const getArticlesBySection = async () => {
		fetchNyTimesStories()
			.then((data) => {
				setArticles([...articles, ...data.results]);
			})
			.catch((error) => {
				console.log(error);
				setError(`Error: ${error.status}: ${error.statusText}`);
			});
	};

  // const getSections = () => {
  //   const sectionArr = articles.reduce((sectArr, article) => {
  //     console.log(article.section)
  //     if (!sectArr.includes(article.section)) {
  //       sectArr.push(article.section)
  //     }
  //     return sectArr
  //   }, []);
  //   setSections([...sections, ...sectionArr])
  // }
  
	useEffect(() => {
    getArticlesBySection();
    // getSections();
	}, []);

	return (
		<main className='App'>
      {/* {console.log(sections)} */}
			<Navbar />
		</main>
	);
};

export default App;
