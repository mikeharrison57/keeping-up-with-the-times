import './IndividualArticle.css';

const IndividualArticle = ({ singleArticle }) => {
	return (
		<section className='single-article'>
			{console.log(singleArticle)}
			<article>
				<h2>Title</h2>
			</article>
			<article>
				<p>Byline</p>
				<p>Last updated date</p>
			</article>
			<article>
				{/* <img src={article.image} /> */}
				<p>Abstract</p>
			</article>
			<article>
				<p>Article factes</p>
				{/* <a> article link</a> */}
			</article>
		</section>
	);
};

export default IndividualArticle;
