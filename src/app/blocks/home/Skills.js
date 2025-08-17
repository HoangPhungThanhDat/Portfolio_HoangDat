export default (t, t2) => {
  return /*html*/ `  
      <section class="skills">
        <h2 class="h2">${t.title}</h2>
        <div class="skills__list">
  
          <div class="skill-card">
            <h3 class="skill-card__title">&lt;Front-End/&gt;</h3>
            <div class="skill-card__items">
              ${[
                "HTML5",
                "CSS3/SCSS",
                "JavaScript",
                "Typescript",
                "ReactJs",
                "NextJs",
                "Tailwind CSS",
                "Bootstrap",
              ]
                .map((item) => `<span class="skill-item">${item}</span>`)
                .join("")}
            </div>
          </div>
  
          <div class="skill-card">
            <h3 class="skill-card__title">&lt;Back-End/&gt;</h3>
            <div class="skill-card__items">
              ${[
                "NodeJs",
                "NestJs",
                "PHP",
                "Laravel",
                "Java",
                "Spring Boot",
                "MySQL",
                "PostgreSQL",
                "GraphQL",
                "SQL Sever",
                "RESTful API",
                "WebSockets",
                "ASP.NET",
                "C#",
                
              ]
                .map((item) => `<span class="skill-item">${item}</span>`)
                .join("")}
            </div>
          </div>
  
          <div class="skill-card">
            <h3 class="skill-card__title">&lt;Tools Skills/&gt;</h3>
            <div class="skill-card__items">
              ${[
                "Github",
                "Gitlab",
                "IntelliJ",
                "PhpStorm",
                "WebStorm",
                "DataGrip",
                "Postman",
                "Docker",
              ]
                .map((item) => `<span class="skill-item">${item}</span>`)
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
};
