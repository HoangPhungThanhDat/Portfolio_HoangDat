export default (t) => {
  return /*html*/`
    <style>
      /* === Layout chính === */
      .contact-section {
        padding: 80px 20px;
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        color: #fff;
        margin-top: -100px;
       
      }


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


      .contact-card, .form-card {
        background: linear-gradient(145deg, #111, #1a1a1a);
        border-radius: 16px;
        padding: 50px 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: transform 0.5s ease, box-shadow 0.5s ease;
      }

      .contact-card:hover, .form-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,255,255,0.3);
      }

      /* ===== Cột trái ===== */
      .contact-card h2 {
        font-size: 52px;
        font-weight: 900;
        line-height: 1.2;
        margin-bottom: 20px;
        background: linear-gradient(90deg, #00f2ea, #00c6ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: floatText 3s ease-in-out infinite;
      }

      @keyframes floatText {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      .contact-card p {
        font-size: 18px;
        font-style: italic;
        text-decoration: underline;
        color: #ccc;
        transition: color 0.3s ease;
      }

      .contact-card p:hover {
        color: #00f2ea;
      }

      /* ===== Cột phải ===== */
      .form-card h3 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 30px;
        letter-spacing: 2px;
        color: #00f2ea;
        text-shadow: 0 0 8px #00f2ea;
        animation: glow 2s infinite alternate;
      }

      @keyframes glow {
        from { text-shadow: 0 0 5px #00f2ea; }
        to { text-shadow: 0 0 20px #00f2ea; }
      }

      .form-group {
        margin-bottom: 20px;
        position: relative;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 14px 18px;
        border-radius: 10px;
        border: 1px solid #333;
        background: #111;
        color: #fff;
        font-size: 14px;
        outline: none;
        transition: all 0.3s ease;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        border-color: #00f2ea;
        box-shadow: 0 0 10px #00f2ea;
      }

      .form-group input::placeholder,
      .form-group textarea::placeholder {
        color: #888;
      }

      .form-group textarea {
        resize: none;
        height: 140px;
      }

      .form-actions {
        text-align: right;
      }

      .submit-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        background: linear-gradient(90deg, #00f2ea, #00c6ff);
        color: #111;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .submit-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -75%;
        width: 50%;
        height: 100%;
        background: rgba(255,255,255,0.3);
        transform: skewX(-25deg);
        transition: all 0.5s ease;
      }

      .submit-btn:hover::before {
        left: 150%;
      }

      .submit-btn:hover {
        color: #fff;
        box-shadow: 0 0 15px #00f2ea, 0 0 30px #00c6ff;
      }

      /* ===== Responsive ===== */
      @media(max-width: 900px) {
        .contact-section {
          grid-template-columns: 1fr;
        }
        .contact-card h2 {
          font-size: 42px;
        }
      }

    </style>

    <section class="contact-section">
  <video autoplay muted loop id="bg-video">
    <source src="/images/video.mp4" type="video/mp4" />
    Trình duyệt của bạn không hỗ trợ video.
  </video>
      <!-- Cột trái -->
      <div class="contact-card">
        <h2>Bạn Muốn<br/>Bắt Đầu Một<br/>Dự Án Mới?</h2>
        <p>Hoặc Chỉ Nói Xin Chào.</p>
      </div>

      <!-- Cột phải -->
      <div class="form-card">
        <h3>Liên hệ</h3>
        <form>
          <div class="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <input type="text" placeholder="Họ tên" required />
          </div>
          <div class="form-group">
            <textarea placeholder="Nhập tin nhắn của bạn ở đây." required></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="submit-btn">Gửi ➤</button>
          </div>
        </form>
      </div>

    </section>
  `;
};
