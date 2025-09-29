/**
 * @type {import("../../types/Routes").Routes}
 */
export default {
    "/": {
      name: "home",
      element: "Home",
      icon: "fa-solid fa-house-chimney",
    },
    "/projects": {
      name: "projects",
      element: "Projects",
      icon: "fa-solid fa-rocket" ,
    },
    "/about-me": {
      name: "about",
      element: "About",
      icon: "fa-solid fa-laptop-code",
    },
    "/contacts": {
      name: "contacts",
      element: "Contacts",
      icon: "fa-solid fa-envelope-circle-check",
    },
    "/404": {
      name: "404",
      element: "PageNotFound",
      icon: "fa-solid fa-triangle-exclamation",
    },
  };
  