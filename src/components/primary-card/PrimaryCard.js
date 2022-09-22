import './PrimaryCard.css';
import { Link } from 'react-router-dom';

const PrimaryCard = ({ article }) => {
	if (article.title) {
		return (
			<Link to={`/${article.section}/${article.title}`}>
				<article className='primary-card'>
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
			</Link>
		);
	}
};

export default PrimaryCard;
