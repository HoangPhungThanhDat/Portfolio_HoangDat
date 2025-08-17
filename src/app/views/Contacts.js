export default (t) => {
    return /*html*/ `
      <style>
        .contact-section {
          padding: 50px 20px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
  
        .contact-card, .form-card {
          background: #111;
          border: 1px solid #fff;
          border-radius: 10px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          
        }
  
        /* Trái */
        .contact-card h2 {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          
         
        }
  
        .contact-card p {
          font-size: 16px;
          font-style: italic;
          text-decoration: underline;
          color: #ccc;
        }
  
        /* Phải */
        .form-card h3 {
          font-size: 20px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 30px;
          text-decoration: underline;
          letter-spacing: 2px;
        }
  
        .form-group {
          margin-bottom: 20px;
        }
  
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid #333;
          background: #111;
          color: #fff;
          font-size: 14px;
          outline: none;
        }
  
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #888;
        }
  
        .form-group textarea {
          resize: none;
          height: 120px;
        }
  
        .form-actions {
          text-align: right;
        }
  
        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border: none;
          border-radius: 6px;
          background: #fff;
          color: #000;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
  
        .submit-btn:hover {
          background: var(--primary, #00f2ea);
          color: #000;
        }
  
        /* Responsive */
        @media(max-width: 900px) {
          .contact-section {
            grid-template-columns: 1fr;
          }
          .contact-card h2 {
            font-size: 40px;
          }
        }
      </style>
  
      <section class="contact-section">
        
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
  