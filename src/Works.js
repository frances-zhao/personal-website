import React, { useState } from 'react';
import './Works.css'; // Import the CSS file

const projects = [
  { title: 'Project 1', description: 'Description 1', tags: ['React', 'JavaScript'], type: 'Logo Design', image: '/poster.png' },
  { title: 'Project 2', description: 'Description 2', tags: ['CSS', 'HTML'], type: 'Branding', image: '/path/to/image2.jpg' },
  { title: 'Project 3', description: 'Description 3', tags: ['CSS', 'Solidworks'], type: 'Marketing', image: '/path/to/image3.jpg' },
  // Add more projects as needed
];

const tags = ['React', 'JavaScript', 'HTML/CSS', 'Solidworks', 'Procreate', 'Adobe'];
const projectTypes = ['Logo Design', 'Branding', 'Marketing', 'Web Development', 'App Development'];

const Works = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleProjectTypeClick = (type) => {
    setSelectedProjectTypes((prevTypes) =>
      prevTypes.includes(type) ? prevTypes.filter((t) => t !== type) : [...prevTypes, type]
    );
  };

  const filteredProjects = projects.filter((project) => {
    const searchWords = searchQuery.toLowerCase().split(' ').filter(Boolean);
    const matchesSearch = searchWords.every(word =>
      project.title.toLowerCase().includes(word) ||
      project.description.toLowerCase().includes(word) ||
      project.tags.some(tag => tag.toLowerCase().includes(word))
    );
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => project.tags.includes(tag));
    const matchesProjectTypes = selectedProjectTypes.length === 0 || selectedProjectTypes.includes(project.type);
    return matchesSearch && matchesTags && matchesProjectTypes;
  });

  return (
    <div className="container">
      <main className="works">
        <section id="projects">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <div className="project-types-container">
            {projectTypes.map((type) => (
              <button
                key={type}
                className={`project-type ${selectedProjectTypes.includes(type) ? 'selected' : ''}`}
                onClick={() => handleProjectTypeClick(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="tags-container">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="projects-container">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project">
                <img src={project.image} alt={`${project.title}`} />
                <div className="project-content">
                  <div className="project-title">{project.title}</div>
                  <div className="project-description">{project.description}</div>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Works;