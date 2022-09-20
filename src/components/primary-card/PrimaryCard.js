import './PrimaryCard.css';

const PrimaryCard = ({ article }) => {
	// const primaryImg = article.multimedia[1].url;

	return (
		<article className='primary-card'>
			<h3>{article.title}</h3>
			{article.multimedia[1].url && (
				<img className='primary-img' src={article.multimedia[1].url} alt={article.title} />
			)}
		</article>
	);
};

export default PrimaryCard;
