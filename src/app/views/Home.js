import Hero from "@/blocks/home/Hero.js";
import Quote from "@/blocks/home/Quote.js";
import Projects from "@/blocks/home/Projects.js";
import Skills from "@/blocks/home/Skills.js";
import About from "@/blocks/home/About.js";
import Contacts from "@/blocks/home/Contacts.js";

import "styles/pages/home.sass";

export default (t, locale) => {
    return /*html*/`
   
        <video autoplay muted loop id="bg-video">
            <source src="/images/video.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
        </video>
        <div class="content">
            ${Hero(t.hero)}
            ${Quote(t.quote)}
            ${Projects(t.projects, locale.projects)}
            ${Skills(t.skills, locale.skills)}
            ${About(t.about)}
            ${Contacts(t.contacts)}
        </div>
    `;
};
