import Dots from "@/components/Dots";
import SkillBlock from "@/components/SkillBlock";
import skills from "@/consts/skills";

export default (t, t2) => {
  return /*html*/ `
    <style>
        .skills {
        padding: 80px 20px;
        
        color: #fff;
        position: relative;
        overflow: hidden;
        }

        .skills .h2 {
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 48px;
        text-transform: uppercase;
        color: var(--primary, #00f2ea);
        position: relative;
        }

        .skills__content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 40px;
        align-items: flex-start;
        max-width: 1200px;
        margin: 0 auto;
        }

        .skills__illustrations {
        flex: 1 1 300px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        }

        .illustrations__logo {
        width: 100px;
        opacity: 0.1;
        position: absolute;
        top: 20px;
        left: 20px;
        }

        .skills__list {
        flex: 2 1 600px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 24px;
        }

        .skill-block {
        background: #1a1a1a;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-block:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .skill-block__title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--primary, #00f2ea);
        }

        .skill-block__items {
        list-style: none;
        padding: 0;
        margin: 0;
        }

        .skill-block__items li {
        padding: 6px 0;
        font-size: 16px;
        border-bottom: 1px solid #333;
        color: #ccc;
        }
    </style>
        <sections class="skills">
            <h2 class="h2">${t.title}</h2>
            <div >
                <div >
                    <img src="/images/logo-outline.svg" alt="" class="illustrations__logo">
                    
                </div>
                <div class="skills__list">
                    ${Object.keys(skills)
                      .filter((id) => id !== "tool")
                      .map((id) => SkillBlock({ id }, t2))
                      .join("")}
                </div>

            </div>

        </sections>
    `;
};
