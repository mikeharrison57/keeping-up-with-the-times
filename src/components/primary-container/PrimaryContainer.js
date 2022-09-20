import PrimaryCard from '../primary-card/PrimaryCard';

const PrimaryContainer = ({ articles }) => {
	const establishPrimaryArticles = () => {
		const half = Math.ceil(articles.length / 2);
		const primaryArticles = articles.slice(0, half);
		const primaryCards = primaryArticles.map((article) => {
			return <PrimaryCard key={Math.random()} article={article} />;
		});
		return primaryCards;
	};

	return <section>{establishPrimaryArticles()}</section>;
};

export default PrimaryContainer;
