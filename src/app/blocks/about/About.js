import "styles/pages/home.sass";
export default (t) => {
  return /*html*/ `
  <style>
      .about__description {
        color: white;
      }

      /* Section about cũng dịch lên */
      .about {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        padding: 50px 20px 80px; /* ✅ Giảm padding-top xuống một chút */
        position: relative;
        z-index: 1;
        flex-wrap: wrap;
        margin-top: -290px; /* ✅ Dịch toàn bộ section lên */
      }

      .about__illustrations {
        flex: 1;
        max-width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .about__image {
        width: 100%;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        object-fit: cover;
      }

      .about__text {
        flex: 2;
        max-width: 700px;
        color: white;
      }

      .about__description {
        font-size: 17px;
        line-height: 1.8;
        margin-bottom: 16px;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        padding: 12px 16px;
        border-radius: 8px;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .about {
          flex-direction: column;
          padding: 40px 20px;
          margin-top: -20px; /* mobile dịch lên ít hơn */
        }

        .about__illustrations {
          max-width: 300px;
          margin-bottom: 30px;
        }

        .about__description {
          font-size: 15px;
          padding: 10px 14px;
        }
      }
    </style>
    <video autoplay muted loop id="bg-video">
            <source src="/images/video.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
        </video>
        <section class="about">
            <div class="about__illustrations">
                  <img src="/images/anhCN.jpg" alt="" class="about__image">
            </div>
            <div class="about__text">
                ${t.description
                  .map(
                    (text) => /*html*/ `
                    <p class="about__description">${text}</p>
                `
                  )
                  .join("")}
            </div>
        </section>
    `;
};
