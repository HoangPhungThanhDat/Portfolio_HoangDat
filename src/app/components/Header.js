import routes from "@/consts/routes";
import MediaIcon from "./MediaIcon";

const paths = ["/", "/projects", "/about-me", "/contacts"];

export default (t) => {
    return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />
            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["discord", "github", "email", "telegram", "twitter"]
                        .map((name) => MediaIcon({ name }))
                        .join("")}
                </div>
            </div>

            <div class="container">
                <div class="header__inner">
                    <a class="logo" href="/">
                    <img class="logo__img" src="/images/Artboard.png" alt="HoangDat logo">
                        <span class="logo__name">HOÀNG_ĐẠT</span>
                    </a>
                    <div class="header__links">
                        ${paths
                            .map(
                                (path) => /*html*/ `
                                <a href="${path}" ${
                                    window.location.pathname === path
                                        ? "header__link_active"
                                        : ""
                                }">${t[routes[path].name]}</a>
                            `
                            )
                            .join("")}
                    </div>
                    <div class="dropdown">
                        <span class="dropdown__label">EN</span>
                        <div class="dropdown__list">
                            <div class="dropdown__option">VN</div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    `;
};
