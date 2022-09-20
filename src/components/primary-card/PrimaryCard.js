const PrimaryCard = ({ article }) => {
  return (
		<article className="primary-card">
			<h2>{article.title}</h2>
			<img 
        src={article.multimedia[1].url}
        alt={article.title} 
      />
		</article>
	);
}

export default PrimaryCard;