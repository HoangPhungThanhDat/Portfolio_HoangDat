import Dots from "@/components/Dots";
export default (t) => {
  return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="#contacts">${
                  t.button
                } =></a>
                <a class="button button__secondary" href="/images/CV_HoangDat_PHP.pdf" download>Tải và xem CV</a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" class="hero__logo">
                <img src="/images/logo.png" alt="Elias" class="hero__image">
                <div class="hero__status">${t.status}</div>
                
            </div>
        </section>

        <div class="social-container">
                <a
                  href="https://www.linkedin.com/in/đạt-hoàng-69b60a327"
                  target="_blank"
                  class="social-btn linkedin"
                >
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/channel/UCdS0e-0qjnR5rrc3cHvD8NQ"
                  target="_blank"
                  class="social-btn tiktok"
                >
                  <i class="fab fa-youtube"></i> YouTube
                </a>
                <a
                  href="https://github.com/HoangPhungThanhDat"
                  class="social-btn github"
                >
                  <i class="fab fa-github"></i> GitHub
                </a>
            </div>
    `;
};
