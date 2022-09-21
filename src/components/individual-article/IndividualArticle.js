import './IndividualArticle.css';
const dayjs = require('dayjs');

const IndividualArticle = ({ singleArticle }) => {

  const reformatedDate = dayjs(singleArticle.updated_date).format(
		'dddd, MMMM DD, YYYY'
	);

	return (
		<section className='single-article'>
			{console.log(singleArticle)}
			<article>
				<h2>{singleArticle.title}</h2>
			</article>
			<article>
				<p>{singleArticle.byline}</p>
				<p>Updated: {reformatedDate}</p>
			</article>
			<article>
				{singleArticle.multimedia ? (
					<img
						className='primary-img'
						src={singleArticle.multimedia[0].url}
						alt={singleArticle.title}
					/>
				) : (
					<p></p>
				)}
				<p>{singleArticle.abstract}</p>
			</article>
			<article>
				<a
					className='website'
					href={singleArticle.short_url}
					target='_blank'
					rel='noopener noreferrer'>
					Read the Full Article Here! 
				</a>
			</article>
		</section>
	);
};

export default IndividualArticle;
