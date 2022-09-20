const PrimaryCard = ({ article }) => {
  return (
		<article>
			<h3>{article.title}</h3>
			<img 
        src={article.multimedia[1].url}
        alt={article.title} 
      />
		</article>
	);
}

export default PrimaryCard;