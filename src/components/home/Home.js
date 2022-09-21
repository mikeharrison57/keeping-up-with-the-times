import PrimaryCard from '../primary-card/PrimaryCard';
import './Home.css';

const Home = ({ articles, getSingleArticle }) => {
	const establishPrimaryArticles = () => {
		const primaryCards = articles.map((article) => {
			return (
				<PrimaryCard
					key={Math.random()}
					article={article}
					getSingleArticle={getSingleArticle}
				/>
			);
		});
		return primaryCards;
	};

	return (
		<section className='primary-container'>
			{establishPrimaryArticles()}
		</section>
	);
};

export default Home;
