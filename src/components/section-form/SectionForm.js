import React, { useState, useEffect } from 'react';
import { sections } from './section-data';

const SectionForm = ({ getArticlesBySection, setArticles, articles }) => {
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
			<select
				value={section}
				onChange={(e) => setSection(e.target.value)}
				required>
				<option value={''}>--Select A Section--</option>
				{selectSection()}
			</select>
		</form>
	);
};

export default SectionForm;
