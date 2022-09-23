import React, { useState } from 'react';
import { sections } from './section-data';
import { Link } from 'react-router-dom';
import './SectionForm.css';

const SectionForm = ({ getArticlesBySection }) => {
	const [section, setSection] = useState('');

	const selectSection = () => {
		const sectionOptions = sections.map((section) => {
			return (
				<option key={section} value={section}>
					{section.toUpperCase()}
				</option>
			);
		});
		return sectionOptions;
	};

	const submitSelectedSection = () => {
		if (section) {
			getArticlesBySection(section);
		} else {
			alert('Please Select a Section')
		}
	};

	return (
		<form className='section-form'>
			<select
				value={section}
				onChange={(e) => setSection(e.target.value)}
				required>
				<option value={''}>--Select A Section--</option>
				{selectSection()}
			</select>
			<Link to={`${section}`}>
				<button onClick={() => submitSelectedSection()}>Select Section</button>
			</Link>
		</form>
	);
};

export default SectionForm;
