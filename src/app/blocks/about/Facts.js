export default (t) => {
    return /*html*/`
    <style>
        .facts {
            padding: 60px 40px;
            background: linear-gradient(135deg, #0d0d0d, #111);
            font-family: 'Inter', sans-serif;
            color: #fff;
            position: relative;
            overflow: hidden;
        }

        .facts .h2 {
            text-align: center;
            font-size: 36px;
            margin-bottom: 50px;
            font-weight: 800;
            color: #00f2ea;
            position: relative;
            animation: glowText 2s infinite alternate;
        }

        .facts .h2::after {
            content: "";
            display: block;
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #00f2ea, #00c6ff);
            margin: 16px auto 0;
            border-radius: 4px;
        }

        @keyframes glowText {
            from { text-shadow: 0 0 5px #00f2ea; }
            to { text-shadow: 0 0 20px #00f2ea; }
        }

        .facts__content {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 40px;
            flex-wrap: wrap;
        }

        .facts__list {
            flex: 2; /* chiếm 2/3 */
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .fact {
            background: rgba(0,255,234,0.05);
            border-left: 4px solid #00f2ea;
            padding: 16px 20px;
            margin-bottom: 16px;
            font-size: 16px;
            border-radius: 10px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            opacity: 0;
            transform: translateX(-30px);
            animation: fadeInRight 0.6s forwards;
        }

        /* Animation delay cho từng fact */
        .fact:nth-child(1) { animation-delay: 0.1s; }
        .fact:nth-child(2) { animation-delay: 0.3s; }
        .fact:nth-child(3) { animation-delay: 0.5s; }
        .fact:nth-child(4) { animation-delay: 0.7s; }
        .fact:nth-child(5) { animation-delay: 0.9s; }

        .fact:hover {
            transform: translateX(10px) scale(1.02);
            background: rgba(0,255,234,0.2);
            box-shadow: 0 10px 30px rgba(0,255,234,0.4);
        }

        @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(-30px); }
            100% { opacity: 1; transform: translateX(0); }
        }

        .facts__illustrations {
            flex: 1; /* chiếm 1/3 */
            max-width: 300px; /* giới hạn chiều ngang */
            min-height: 250px;
            background-image: url('/images/facts.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.8;
            animation: floatIllustration 4s ease-in-out infinite;
        }

        @keyframes floatIllustration {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }

        @media (max-width: 768px) {
            .facts__content {
                flex-direction: column;
                align-items: center;
            }

            .facts__illustrations {
                width: 100%;
                height: 200px;
                margin-top: 30px;
            }

            .fact {
                font-size: 15px;
                text-align: center;
            }
        }
    </style>

    <section class="facts">
        <h2 class="h2">${t.title}</h2>
        <div class="facts__content">
            <ul class="facts__list">
                ${t.list.map(fact => /*html*/`
                    <li class="fact">${fact}</li>
                `).join("")}
            </ul>
            <div class="facts__illustrations"></div>
        </div>
    </section>
    `;
}
