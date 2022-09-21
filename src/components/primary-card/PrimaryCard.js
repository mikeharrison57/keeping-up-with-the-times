import './PrimaryCard.css';

const PrimaryCard = ({ article, getSingleArticle }) => {
	const submitSingleArt = () => {
		getSingleArticle(article)
	};

	return (
		<article onClick={() => submitSingleArt()} className='primary-card'>
			<h2>{article.title}</h2>
			{article.multimedia ? 
			<img 
				className='primary-img' 
				src={article.multimedia[1].url} 
				alt={article.title} 
			/>
			: <p></p>
			}
		</article>
	);
};

export default PrimaryCard;
