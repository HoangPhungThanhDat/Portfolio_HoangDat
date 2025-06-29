export default (t) => {
    return /*html*/`
    <style>
        .facts {
        padding: 40px 100px;
        background-color: #f9f9f9;
        font-family: 'Inter', sans-serif;
        color: #333;
        }

        .facts .h2 {
        text-align: center;
        font-size: 32px;
        margin-bottom: 40px;
        font-weight: 700;
        color: #222;
        position: relative;
        }

        .facts .h2::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background-color: #00e0ff;
        margin: 16px auto 0;
        border-radius: 4px;
        }

        .facts__content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 40px;
        flex-wrap: wrap;
        }

        .facts__list {
        flex: 1;
        list-style: none;
        padding: 0;
        margin: 0;
        }

        .fact {
        background-color: #fff;
        border-left: 4px solid #00e0ff;
        padding: 16px 20px;
        margin-bottom: 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        font-size: 16px;
        border-radius: 8px;
        transition: transform 0.2s ease;
        }

        .fact:hover {
        transform: translateX(6px);
        }

        .facts__illustrations {
        flex: 1;
        min-height: 200px;
        background-image: url('https://cdn-icons-png.flaticon.com/512/1055/1055687.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.8;
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
                <div class="facts__illustrations">
                    
                </div>
            </div>

        </section>
    `
}