import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [filter, setFilter] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(''); // фильтр для категорий
  const [showFilters, setShowFilters] = useState(false); // состояние для показа/скрытия фильтров

  const projects = [
    { title: 'Design a Logo', price: '100 TON', category: 'Design' },
    { title: 'Python Automation Script', price: '200 TON', category: 'Back-end' },
    { title: 'Web App Development', price: '300 TON', category: 'Front-end' },
    { title: 'UI/UX Design', price: '150 TON', category: 'Design' },
    { title: 'API Development', price: '250 TON', category: 'Back-end' },
    // Добавьте больше проектов с разными категориями
  ];

  const filteredProjects = projects.filter(project =>
    project.category.toLowerCase().includes(selectedFilter.toLowerCase()) &&
    project.title.toLowerCase().includes(filter.toLowerCase())
  );

  const scrollToProjects = () => {
    document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryFilter = (category) => {
    setSelectedFilter(category === selectedFilter ? '' : category); // Переключение фильтра
    setShowFilters(false); // скрыть фильтры после выбора
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Our Freelance Platform</h1>
        <p>Your gateway to freelance opportunities with TON payment</p>
        <div className="button-group">
          <button className="publish-btn">Publish</button>
          <button className="look-work-btn" onClick={scrollToProjects}>Look for work</button>
        </div>
      </header>

      <section className="search-filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Filter by skill, e.g., Design, Python..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <img
            src={`${process.env.PUBLIC_URL}/filter.svg`}
            alt="Filter Icon"
            className="filter-icon"
            onClick={() => setShowFilters(!showFilters)} // Показать/скрыть фильтры по клику
          />
        </div>
        {showFilters && (
          <div className="category-filters">
            <button
              className={`filter-button ${selectedFilter === 'Front-end' ? 'active' : ''}`}
              onClick={() => handleCategoryFilter('Front-end')}
            >
              Front-end
            </button>
            <button
              className={`filter-button ${selectedFilter === 'Back-end' ? 'active' : ''}`}
              onClick={() => handleCategoryFilter('Back-end')}
            >
              Back-end
            </button>
            <button
              className={`filter-button ${selectedFilter === 'Design' ? 'active' : ''}`}
              onClick={() => handleCategoryFilter('Design')}
            >
              Design
            </button>
          </div>
        )}
      </section>

      <section id="projects-section" className="projects-section">
        <h2>Available Projects</h2>
        <div className="project-cards">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.price}</p>
              </div>
            ))
          ) : (
            <p>No projects available for the selected filter.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
