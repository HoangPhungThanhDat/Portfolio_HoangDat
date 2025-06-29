import MediaIcon from "./MediaIcon";
import media from "@/consts/media";

export default (t) => {
  return /*html*/ `
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />
  <style>
    .footer {
      background-color: #2c2f36;
      color: #eee;
      padding: 30px 20px 20px;
      font-family: 'Inter', sans-serif;
    }

    .footer .container {
      max-width: 1200px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 40px;
    }

    .footer__title {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 16px;
      text-align: left;
    }

    .footer__logo {
      font-size: 26px;
      font-weight: bold;
      color: #00e0ff;
      margin-bottom: 10px;
    }

    .footer__description {
      font-size: 15px;
      line-height: 1.6;
      color: #bbb;
    }

    .footer__email {
      display: inline-block;
      color: #00e0ff;
      margin: 12px 0;
      text-decoration: none;
    }

    .footer__email:hover {
      text-decoration: underline;
      color: #fff;
    }

    .footer__socials {
      display: flex;
      gap: 12px;
      margin-top: 10px;
      flex-wrap: wrap;
    }

    .footer__socials a {
      background: #1a1a1a;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 18px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      transition: 0.3s;
    }

    .footer__socials a:hover {
      background: #00e0ff;
      color: #000;
      transform: translateY(-4px);
    }

    .footer__links ul {
      list-style: none;
      padding: 0;
    }

    .footer__links li {
      margin-bottom: 10px;
    }

    .footer__links a {
      color: #bbb;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer__links a:hover {
      color: #fff;
    }

    .footer__bottom {
      text-align: center;
      margin-top: 20px;
      font-size: 13px;
      color: #888;
      border-top: 1px solid #222;
      padding-top: 20px;
    }

    /* ✅ Tinh chỉnh cho mobile */
    @media (max-width: 768px) {
      .footer .container {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .footer__title {
        text-align: center;
      }

      .footer__socials {
        justify-content: center;
      }

      .footer__email {
        display: block;
        margin: 12px auto;
      }

      .footer__links ul {
        padding-left: 0;
      }
        
    }
  </style>

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
          <a href="https://www.tiktok.com/@yourprofile" target="_blank" title="TikTok">
            <i class="fab fa-tiktok"></i>
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
