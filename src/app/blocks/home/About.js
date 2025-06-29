export default (t) => {
    return /*html*/ `
    <style>
    .about {
    color: white;
    }

    .about .about__description,
    .about .h2,
    .about .button {
        color: white;
    }

    </style>
        <section class="about">
            <div class="about__content">
                <h2 class="h2">${t.title}</h2>
                <div class="about__text">
                    ${t.description.map(
                        (text) =>
                            /*html*/ `<p class="about__description">${text}</p>`
                    ).join("")}
                </div>

                <a href="/about-me" class="button">${t.button} -></a>
            </div>
            <img src="/images/anhCN.jpg" alt="" class="about__image">
        </section>
    `;
};
