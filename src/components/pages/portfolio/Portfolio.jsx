import { useState } from "react";
import './Portfolio.css';
import portfolio from '../../../assets/portfolio.png';
import ailandingpage from '../../../assets/landingpage.png';
import admindashboard from '../../../assets/admindashboard.png';
import moderntodo from '../../../assets/moderntodo.png';
import todo from '../../../assets/todo.png';

const projectsData = [
        {
        id: 1,
        title: "Responsive Portfolio",
        category: "web",
        image: portfolio,
        demo: "https://mrityunjayy-portfolio.netlify.app/",
    },
    {
        id: 2,
        title: "AI Landing Page",
        category: "web",
        image: ailandingpage,
        demo: "https://landing-page-mj.netlify.app/",
    },
    {
        id: 3,
        title: "Admin dashboard",
        category: "web",
        image: admindashboard,
        demo: "https://admin-dashboard-bymj.netlify.app/",
    },
    {
        id: 4,
        title: "Modern Todo App",
        category: "web",
        image: moderntodo,
        demo: "https://todo-by-taskly.netlify.app/",
    },
     {
        id: 5,
        title: "Todo App",
        category: "web",
        image: todo,
        demo: "https://todo-bymj.netlify.app/",
    },
    {
        id: 6,
        title: "Design",
        category: "design",
        image: "https://cdn.dribbble.com/userupload/40443513/file/original-af1bcfb920211ae8de4d2b34f8ad9c69.png?resize=1200x900&vertical=center",
        demo: "https://cdn.dribbble.com/userupload/40443513/file/original-af1bcfb920211ae8de4d2b34f8ad9c69.png?resize=1200x900&vertical=center",
    },
    {
        id: 7,
        title: "Mobile App design",
        category: "app",
        image: "https://cdn.dribbble.com/userupload/4585415/file/original-7b9b300faf22e9fe2fd176ec1c70cadc.jpg?resize=1504x1128&vertical=center",
        demo: "https://cdn.dribbble.com/userupload/4585415/file/original-7b9b300faf22e9fe2fd176ec1c70cadc.jpg?resize=1504x1128&vertical=center",
    },
    {
        id: 8,
        title: "Mobile App design",
        category: "app",
        image: "https://cdn.dribbble.com/userupload/9141679/file/original-2a3e9ad21b2fa36e4123636da1fdb45b.jpg?resize=2048x1536&vertical=center",
        demo: "https://cdn.dribbble.com/userupload/9141679/file/original-2a3e9ad21b2fa36e4123636da1fdb45b.jpg?resize=2048x1536&vertical=center",
    },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects =
        activeCategory === "all"
            ? projectsData
            : projectsData.filter(
                (project) => project.category === activeCategory
            );

    return (
        <section className="portfolio" id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <p className="section-subtitle">Most recent work</p>

            {/* Filter Buttons */}
            <div className="filters">
                {["all", "web", "app", "design"].map((cat) => (
                    <button
                        key={cat}
                        className={activeCategory === cat ? "active" : ""}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="portfolio-grid">
                {filteredProjects.map((project, index) => (
                    <div className="portfolio-card" key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
                        <img src={project.image} alt={project.title} />
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <a href={project.demo} target="_blank" rel="noreferrer">
                                Demo →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio