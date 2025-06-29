import proxy from "../proxies/media"

const media = {
    discord: {
        tag: "Linkedin Hoàng Đạt",
    },
    stackOverflow: {
        id: "",
        name: "",
    },
    github: "HoangPhungThanhDat",
    figma: "elias_dev",
    replit: "EliasDev",
    codewars: "EliasDevis",
    devTo: "eliasdevis",
    cssBattle: "elias_dev",
    codepen: "elias_dev",
    dribble: "Elias_dev",
    email: "dat147714@gmail.com"

}

export default new Proxy(media, proxy);

