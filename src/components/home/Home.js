import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>Freelance Platform with TON Payments</h1>
        <p>Platform description here...</p>
        <div className="buttons">
          <button className="publish-btn">Publish</button>
          <button className="look-work-btn" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Look for Work
          </button>
        </div>
      </section>

      <section className="projects" id="projects-section">
        <div className="search-filter">
          <input type="text" placeholder="Search by skills, e.g., Python, Design..." />
        </div>
        <div className="project-list">
          {/* Пример карточки проекта */}
          <div className="project-card">
            <h2>Project Title</h2>
            <p>Price: 100 TON</p>
          </div>
          {/* Добавить дополнительные карточки по мере необходимости */}
        </div>
      </section>
    </div>
  );
}

export default Home;
