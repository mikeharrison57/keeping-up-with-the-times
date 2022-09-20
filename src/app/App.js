import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar/Navbar";
import { fetchNyTimesStories } from "../utils/api-calls";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  const getArticlesByCategory = async () => {
    fetchNyTimesStories().then(data => {
      setArticles([...articles, ...data.results])
    }).catch(error => {
      console.log(error)
      setError(`Error: ${error.status}: ${error.statusText}`);
    })
  };

  useEffect(() => {
    getArticlesByCategory();
  }, []);

  return (
    <main className="App">
      <Navbar />
    </main>
  );
};

export default App;
