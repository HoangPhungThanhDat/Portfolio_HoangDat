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
          <!-- Logo -->
         <a 
            class="logo" 
            href="/" 
            style="display:flex; align-items:center; text-decoration:none; gap:10px;"
            >
            <img 
                class="logo__img" 
                src="/images/Artboard.png" 
                alt="HoangDat logo" 
                style="width:50px; height:auto; object-fit:contain;"
            >
            <span 
                class="logo__name" 
                style="font-size:20px; font-weight:bold; "
            >
                HOÀNG_ĐẠT
            </span>
            </a>

          <!-- Navigation -->
          <div class="header__links">
            ${paths
              .map((path) => {
                const route = routes[path];
                if (!route) return ""; // tránh lỗi nếu route không tồn tại
                return /*html*/ `
                  <a href="${path}"  ${
                  window.location.pathname === path ? "header__link_active" : ""
                }">
                    <i class="${route.icon}" style="margin-right:6px;"></i>
                    ${t[route.name]}
                  </a>
                `;
              })
              .join("")}
          </div>

          <!-- Language Switch -->
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
