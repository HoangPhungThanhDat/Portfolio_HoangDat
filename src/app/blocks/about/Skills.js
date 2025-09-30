import SkillBlock from "@/components/SkillBlock";
import skills from "@/consts/skills";

export default (t, t2) => {
  return /*html*/ `
  <style>
    /* === Section Skills === */
    .skills {
      padding: 80px 20px;
      background: linear-gradient(135deg, #0d0d0d, #111);
      font-family: 'Inter', sans-serif;
      color: #fff;
    }

    /* Title */
    .skills .h2 {
      text-align: center;
      font-size: 36px;
      font-weight: 800;
      margin-bottom: 50px;
      color: #00f2ea;
      position: relative;
      animation: glowText 2s infinite alternate;
    }

    .skills .h2::after {
      content: "";
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #00f2ea, #00c6ff);
      margin: 16px auto 0;
      border-radius: 4px;
    }

    @keyframes glowText {
      from { text-shadow: 0 0 5px #00f2ea; }
      to { text-shadow: 0 0 20px #00f2ea; }
    }

    /* Grid skill blocks */
    .skills__content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
    }

    /* Skill block */
    .skill-block {
      background: linear-gradient(145deg, #111, #1a1a1a);
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0,255,234,0.1);
      color: #fff;
      text-align: center;
      transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.6s forwards;
    }

    /* Animation delay cho từng block */
    .skill-block:nth-child(1) { animation-delay: 0.1s; }
    .skill-block:nth-child(2) { animation-delay: 0.2s; }
    .skill-block:nth-child(3) { animation-delay: 0.3s; }
    .skill-block:nth-child(4) { animation-delay: 0.4s; }
    .skill-block:nth-child(5) { animation-delay: 0.5s; }
    .skill-block:nth-child(6) { animation-delay: 0.6s; }

    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .skill-block:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 12px 30px rgba(0,255,234,0.3);
      background: linear-gradient(145deg, #00f2ea, #00c6ff);
      color: #111;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .skills__content {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      .skills .h2 {
        font-size: 28px;
        margin-bottom: 30px;
      }
    }
  </style>

  <section class="skills">
    <h2 class="h2">${t.title}</h2>
    <div class="skills__content">
      ${Object.keys(skills)
        .map((id) => SkillBlock({ id }, t2))
        .join("")}
    </div>
  </section>
  `;
};
