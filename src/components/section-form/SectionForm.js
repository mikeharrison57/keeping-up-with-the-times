import React, { useState, useEffect } from 'react';
import { sections } from './section-data';
import { Link } from 'react-router-dom';

const SectionForm = ({ getArticlesBySection, setArticles }) => {
	const [section, setSection] = useState('home');

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

  
	useEffect(() => {
    submitSelectedSection();
    return () => {
      clearArticles();
    }
	}, [section]);
  
  const clearArticles = () => {
    setArticles([ ])
  }

	return (
		<form onSubmit={() => submitSelectedSection()}>
			{console.log(section)}
			<Link to={`/${section}`}>
				<select
					value={section}
					onChange={(e) => setSection(e.target.value)}
					required>
					<option value={''}>--Select A Section--</option>
					{selectSection()}
				</select>
			</Link>
		</form>
	);
};

export default SectionForm;
