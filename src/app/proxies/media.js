import websites from "../consts/websites"


export default {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        if (name === "discord") return `https://www.linkedin.com/in/đạt-hoàng-69b60a327`
        if (name === "discordTag") return target.discord.tag

        return `${name === "email" ? "" : "https://"}${websites[name] ?? ""}${target[name]}`
    }
}