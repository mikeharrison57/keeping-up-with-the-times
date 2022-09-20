import React, { useState } from 'react';
import { sections } from './section-data';

const SectionForm = () => {
  const [section, setSection] = useState('');

  const selectSection = () => {
    const sectionOptions = sections.map((section) => {
      return (
        <option key={section} value={section}>{section.toUpperCase()}</option>
      )
    })
    return sectionOptions
  }

	return (
    <form>
      <select value={section} onChange={event => setSection(event.target.value)} required>
        <option>--Select A Section--</option>
        {selectSection()}
      </select>
    </form>
  )
};

export default SectionForm;
