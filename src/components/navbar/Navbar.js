import SectionForm from '../section-form/SectionForm';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ getArticlesBySection }) => {
	return (
		<header className='navbar'>
			<NavLink to='/'>
				<h1 className='title'>Keeping Up With The Times</h1>
			</NavLink>
			<SectionForm getArticlesBySection={getArticlesBySection} />
		</header>
	);
};

export default Navbar;
