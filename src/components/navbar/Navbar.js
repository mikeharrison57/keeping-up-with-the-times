import SectionForm from '../section-form/SectionForm';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ getArticlesBySection }) => {
	return (
		<header className='navbar'>
			<Link to='/' style={{ textDecoration: 'none' }}>
				<h1 className='title'>Keeping Up With The Times</h1>
			</Link>
			<SectionForm getArticlesBySection={getArticlesBySection} />
		</header>
	);
};

export default Navbar;
