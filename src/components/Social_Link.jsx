import { easeInOut, motion } from "motion/react"
function Social_Link({name}){
    let file_path = "assets/"
    let url_link
    switch (name) {
        case "GitHub":
            file_path = file_path + "GitHub.svg"
            url_link = "https://github.com/LionF4ng"
            break;
        case "LinkedIn":
            file_path = file_path + "LinkedIn.svg"
            url_link = "https://www.linkedin.com/in/nikita-sidarovich-682478238/"
            break;
        case "Facebook":
            file_path = file_path + "Facebook.svg"
            url_link = "https://www.facebook.com/nikita.sidarovich"
            break;
    }

    return(
        <a href={url_link} target="_blank">
        <motion.img whileHover={{ scale: 1.2}}
        whileTap={{ scale: 0.95}} title={name}
        transition={easeInOut} src={file_path} class="w-20 px-3 py-2"></motion.img>
        </a>
    )
}

export default Social_Link;