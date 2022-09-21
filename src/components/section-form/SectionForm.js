import React, { useState, useEffect } from 'react';
import { sections } from './section-data';
import { Link } from 'react-router-dom';

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
		getArticlesBySection(section);
	};
	
	return (
		<form>
			{console.log(section)}
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
