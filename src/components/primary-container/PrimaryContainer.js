import PrimaryCard from '../primary-card/PrimaryCard';
import './PrimaryContainer.css';

const PrimaryContainer = ({ articles }) => {
	const establishPrimaryArticles = () => {
		// const half = Math.ceil(articles.length / 2);
		// const primaryArticles = articles.slice(0, half);
		const primaryCards = articles.map((article) => {
			return <PrimaryCard key={Math.random()} article={article} />;
		});
		return primaryCards;
	};

	return <section className='primary-container'>{establishPrimaryArticles()}</section>;
};

export default PrimaryContainer;
