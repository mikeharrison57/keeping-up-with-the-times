import PrimaryCard from '../primary-card/PrimaryCard';
import './PrimaryContainer.css';

const PrimaryContainer = ({ articles }) => {
	const establishPrimaryArticles = () => {
		const primaryCards = articles.map((article) => {
			return <PrimaryCard key={Math.random()} article={article} />;
		});
		return primaryCards;
	};

	return <section className='primary-container'>{establishPrimaryArticles()}</section>;
};

export default PrimaryContainer;
