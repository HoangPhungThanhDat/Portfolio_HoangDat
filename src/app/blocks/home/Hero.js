import Dots from "@/components/Dots";

export default (t) => {
  return /*html*/ `
        <style>       
           .social-container {
            display: flex;
            gap: 20px;
            margin-left: -400px;   /* sang trái hơn nữa */
            margin-top: -140px;     /* lên trên nhiều hơn */
            }

            .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 160px;
            height: 50px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            text-decoration: none;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            transition: 0.4s;
            border: 2px solid transparent;
            }

            .social-btn i {
            font-size: 24px;
            margin-right: 10px;
            transition: 0.3s;
            }

            /* LinkedIn */
            .linkedin {
            background: linear-gradient(45deg, #0077b5, #005582);
            box-shadow: 0 0 15px #0077b5;
            }

            .linkedin:hover {
            background: #005582;
            transform: scale(1.1) rotate(2deg);
            box-shadow: 0 0 25px #0077b5;
            }

            /* TikTok */
            .tiktok {
            background: linear-gradient(45deg, #ff0050, #00f2ea);
            box-shadow: 0 0 15px #ff0050;
            }

            .tiktok:hover {
            background: #ff0050;
            transform: scale(1.1) rotate(-2deg);
            box-shadow: 0 0 25px #ff0050;
            }

            /* GitHub */
            .github {
            background: linear-gradient(45deg, #333, #24292e);
            box-shadow: 0 0 15px #666;
            }

            .github:hover {
            background: #24292e;
            transform: scale(1.1) rotate(2deg);
            box-shadow: 0 0 25px #666;
            }
            @media (max-width: 768px) {
            .social-container {
                flex-direction: column;
                align-items: center;
                margin: 20px auto 0 auto;
                transform: none;
                width: 100%;
                padding: 0 12px; /* thêm padding để không dính sát mép */
            }

            .social-btn {
                width: 100%;            /* chiếm toàn bộ chiều ngang */
                margin-bottom: 16px;
                font-size: 20px;         
                height: 60px;            
                border-radius: 12px; 
                 transform: translateY(-50px);    
            }

            .social-btn i {
                font-size: 26px;         
                margin-right: 12px;
            }   

        </style>

        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                 <a class="button button__primary" href="#contacts">${t.button} =></a>
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
                  href="https://www.tiktok.com/@yourprofile"
                  target="_blank"
                  class="social-btn tiktok"
                >
                  <i class="fab fa-tiktok"></i> TikTok
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
