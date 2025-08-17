import MediaIcon from "./MediaIcon";
import media from "@/consts/media";

export default (t) => {
  return /*html*/ `
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />
  <footer class="footer">
    <div class="container">
      <!-- Cột 1: Logo & giới thiệu -->
      <div>
        <div class="footer__logo">HOÀNG_ĐẠT</div>
        <p class="footer__description">${t.description}</p>
        <a class="footer__email" href="${media.email}">${media.emailRaw}</a>
      </div>

      <!-- Cột 2: Mạng xã hội -->
      <div>
        <div class="footer__title">${t.media}</div>
        <div class="footer__socials">
          <a href="https://www.linkedin.com/in/đạt-hoàng-69b60a327" target="_blank" title="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCdS0e-0qjnR5rrc3cHvD8NQ" target="_blank" title="YOUTUBE">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://github.com/HoangPhungThanhDat" target="_blank" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>

      <!-- Cột 3: Liên kết nhanh -->
      <div class="footer__links">
        <div class="footer__title">Liên kết nhanh</div>
        <ul>
          <li><a href="/about-me">Giới thiệu</a></li>
          <li><a href="/projects">Dự án</a></li>
          <li><a href="/about-me">Kỹ năng</a></li>
          <li><a href="/#contact">Liên hệ</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      © ${t.copyright} – Thiết kế bởi HOÀNG_ĐẠT
    </div>
  </footer>
  `;
};
