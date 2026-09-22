import Social_Link from "./Social_Link";
import { easeInOut, motion } from "motion/react"
function Social_Bar(){
    return(
        <motion.div initial={{opacity: 0, y:-100}} animate={{ opacity: 1, y:0, transition: {duration: 0.8}, easeInOut}} class="flex mt-10 w-fit mx-auto rounded-full z-10 border-4 p-2 border-red-600 bg-red-900">
            <Social_Link name="GitHub"/>
            <Social_Link name="LinkedIn"/>
            <Social_Link name="Facebook"/>
        </motion.div>
    )
}
export default Social_Bar;