import { easeInOut, motion } from "motion/react"
function Social_Link({name}){
    let file_path = "assets/"
    let url_link
    let im_class
    switch (name) {
        case "GitHub":
            file_path = file_path + "GitHub.svg"
            url_link = "https://github.com/LionF4ng"
            im_class = "w-20 h-20 px-3 py-1"
            break;
        case "LinkedIn":
            file_path = file_path + "LinkedIn.svg"
            url_link = "https://www.linkedin.com/in/nikita-sidarovich-682478238/"
            im_class = "w-20 h-20 px-3 py-1"
            break;
        case "Mail":
            file_path = file_path + "Mail.svg"
            url_link = "mailto:nikita.sidarovich.work@gmail.com"
            im_class = "h-20 px-3 py-1"
            break;
    }

    return(
        <a href={url_link} target="_blank">
        <motion.img whileHover={{ scale: 1.2}}
        whileTap={{ scale: 0.95}} title={name}
        transition={easeInOut} src={file_path} class={im_class}></motion.img>
        </a>
    )
}

export default Social_Link;