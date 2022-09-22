import './IndividualArticle.css';
import React, { useState, useEffect } from 'react';
const dayjs = require('dayjs');

const IndividualArticle = ({ singleArticle, articles, title }) => {
	const [article, setArticle] = useState({});

	const foundArticle = articles.find((art) => art.title === title);

	useEffect(() => {
		setArticle(foundArticle);
	}, [title, articles]);

	return (
		<>
			{article && (
				<section className='single-article'>
					{console.log(article)}
					<article>
						<h2>{article.title}</h2>
					</article>
					<article>
						<p>{article.byline}</p>
						<p>
							Updated:{' '}
							{dayjs(article.updated_date).format('dddd, MMMM DD, YYYY')}
						</p>
					</article>
					<article>
						{article.multimedia ? (
							<img
								className='primary-img'
								src={article.multimedia[0].url}
								alt={article.title}
							/>
						) : (
							<p></p>
						)}
						<p>{article.abstract}</p>
					</article>
					<article>
						<a
							className='website'
							href={article.short_url}
							target='_blank'
							rel='noopener noreferrer'>
							Read the Full Article Here!
						</a>
					</article>
				</section>
			)}
		</>
	);
};

export default IndividualArticle;
