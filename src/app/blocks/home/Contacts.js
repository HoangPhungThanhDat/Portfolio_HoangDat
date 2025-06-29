import media from "@/consts/media";

const contacts = [
    {
        name: "discord",
        text: media.discordTag,
    },
    {
        name: "email",
        text: media.emailRaw,
    }
];

export default (t) => {
    return /*html*/ `
    <style>


.contacts .h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--primary, #00f2ea);
  text-transform: uppercase;
}

.contacts__content {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
}

.contacts__description {
  font-size: 18px;
  color: #ccc;
  margin-bottom: 40px;
  line-height: 1.6;
}

.contacts__media {
  margin-top: 20px;
}

.contacts__title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--primary, #00f2ea);
}

.contacts__list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}

.contact {
  background-color: #1a1a1a;
  padding: 16px 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 220px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.contact:hover {
  background-color: #222;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.contact img {
  width: 32px;
  height: 32px;
}

.contact__name {
  font-size: 16px;
  color: #fff;
  font-weight: 500;
}

@media (max-width: 600px) {
  .contacts .h2 {
    font-size: 26px;
  }

  .contacts__title {
    font-size: 20px;
  }

  .contact {
    flex-direction: column;
    gap: 8px;
    padding: 16px;
  }

  .contact__name {
    font-size: 14px;
  }
}

    </style>
        <sections class="contacts" id="contacts">
            <h2 class="h2">${t.title}</h2>
            <div class="contacts__content">
                <p class="contacts__description">${t.text}</p>
                <div class="contacts__media">
                    <h3 class="contacts__title">${t.media}</h3>
                    <div class="contacts__list">
                        ${contacts
                            .map(
                                (contact) => /*html*/ `
                            <a class="contact" href="${media[contact.name]}">
                                <img src="/images/icons/${
                                    contact.name
                                }.svg" alt="">
                                <div class="contact__name">${contact.text}</div>
                            </a>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>

        </sections>
    `;
};
