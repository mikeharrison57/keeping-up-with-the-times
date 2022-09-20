import SectionForm from "../section-form/SectionForm";
import './Navbar.css'

const Navbar = ({ getArticlesBySection, setArticles, articles }) => {
	return (
		<header className='navbar'>
			<h1>Keeping Up With The Times</h1>
			<SectionForm
				getArticlesBySection={getArticlesBySection}
				setArticles={setArticles}
				articles={articles}
			/>
		</header>
	);
};

export default Navbar;