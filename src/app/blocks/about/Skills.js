import SkillBlock from "@/components/SkillBlock";
import skills from "@/consts/skills";

export default (t, t2) => {
  return /*html*/ `
  <style>
    .skills {
    padding: 60px 20px;
    background-color: #ffffff;
    font-family: 'Inter', sans-serif;
    color: #000; /* ✅ Chữ mặc định màu đen */
    }

    .skills .h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #000; /* ✅ Tiêu đề màu đen */
    position: relative;
    }

    .skills .h2::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #00e0ff;
    margin: 16px auto 0;
    border-radius: 4px;
    }

    .skills__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    }

    /* Nếu SkillBlock trả về class này */
    .skill-block {
    background-color: #f9f9f9;
    padding: 20px 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: #000; /* ✅ Màu chữ trong khối cũng là đen */
    }

    .skill-block:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    /* Responsive */
    @media (max-width: 768px) {
    .skills__content {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .skills .h2 {
        font-size: 26px;
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
