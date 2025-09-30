import "styles/pages/home.sass";
export default (t) => {
  return /*html*/ `
  <style>
    /* === Video nền === */
    #bg-video {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
      opacity: 0.3;
      filter: brightness(0.6);
    }

    .about {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      padding: 80px 20px;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      margin-top: -100px;
    }

    /* ==== Phần hình ảnh ==== */
    .about__illustrations {
      flex: 1;
      max-width: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -400px;
    }

    .about__image {
      width: 100%;
      border-radius: 16px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
      object-fit: cover;
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      animation: floatImage 4s ease-in-out infinite;
    }

    .about__image:hover {
      transform: scale(1.05) rotate(-1deg);
      box-shadow: 0 15px 40px rgba(0,255,234,0.3);
    }

    @keyframes floatImage {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    /* ==== Phần nội dung ==== */
    .about__text {
      flex: 2;
      max-width: 700px;
      color: white;
    }

    .about__description {
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 16px;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,255,234,0.2);
      opacity: 0;
      transform: translateX(-30px);
      animation: fadeInRight 0.8s forwards;
    }

    /* Delay mỗi đoạn văn để nối tiếp */
    .about__description:nth-child(1) { animation-delay: 0.1s; }
    .about__description:nth-child(2) { animation-delay: 0.3s; }
    .about__description:nth-child(3) { animation-delay: 0.5s; }
    .about__description:nth-child(4) { animation-delay: 0.7s; }

    @keyframes fadeInRight {
      0% { opacity: 0; transform: translateX(-30px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    /* ==== Tiêu đề ==== */
    .about__text h2 {
      font-size: 38px;
      font-weight: 800;
      margin-bottom: 30px;
      color: #00f2ea;
      position: relative;
      animation: glowText 2s infinite alternate;
    }

    .about__text h2::after {
      content: "";
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #00f2ea, #00c6ff);
      margin-top: 12px;
      border-radius: 4px;
    }

    @keyframes glowText {
      from { text-shadow: 0 0 5px #00f2ea; }
      to { text-shadow: 0 0 20px #00f2ea; }
    }

    /* ==== Button ==== */
    .about__text .button {
      display: inline-block;
      padding: 12px 28px;
      font-size: 16px;
      font-weight: 600;
      color: #111;
      background: linear-gradient(90deg, #00f2ea, #00c6ff);
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 0 10px rgba(0,255,234,0.4);
    }

    .about__text .button:hover {
      background: linear-gradient(90deg, #00c6ff, #00f2ea);
      transform: translateY(-3px);
      box-shadow: 0 0 20px rgba(0,255,234,0.6);
    }

    /* ==== Responsive ==== */
    @media (max-width: 900px) {
      .about {
        flex-direction: column-reverse;
        text-align: center;
      }

      .about__illustrations {
        max-width: 300px;
        margin-bottom: 30px;
      }

      .about__description {
        font-size: 16px;
        padding: 12px 16px;
      }

      .about__text h2 {
        font-size: 28px;
      }
    }
  </style>

  <video autoplay muted loop id="bg-video">
    <source src="/images/video.mp4" type="video/mp4" />
    Trình duyệt của bạn không hỗ trợ video.
  </video>

  <section class="about">
    <div class="about__illustrations">
      <img src="/images/anhCN.jpg" alt="About Image" class="about__image">
    </div>
    <div class="about__text">
      <h2>${t.title}</h2>
      ${t.description.map(
        (text) => `<p class="about__description">${text}</p>`
      ).join("")}
    </div>
  </section>
  `;
};
