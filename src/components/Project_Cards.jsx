import { easeInOut, motion } from "motion/react"
import Project_Tag from "./Project_Tag"

function Project_Cards({image_name}){
    {/*Card Class*/}
    let card_cl
    {/*Image Path*/}
    let im_path
    {/*Project Description*/}
    let project_description
    
    {/*Project Description*/}
    let tag_array = []

    switch (image_name) {
        case "Logos":
            im_path = "src/assets/Logos.png"
            project_description = "Logos is a natural language processing system that allows the user to translate natural language intor formal logic, both with and without the use of Large Language Models. This project was my master thesis work."
            tag_array = ["SWI-Prolog", "Answer Set Programming", "NLTK", "CFG", "LLM", "Flask"]
            break;
        case "Salify":
            im_path = "src/assets/Salify.png"
            project_description = "A project where sentiment analysis is performed on song lyrics with BERT. The analysis is performed on public Spotify playlist where the React front-end receives the sentiment scores from the Python backend using Flask."
            tag_array = ["Python","React","Flask", "Scikit", "BERT", "Spotify API", "GENIUS API"]
            break;
        case "TBMI26":
            im_path = "src/assets/TBMI26.png"
            project_description = "Lab work from the course: Neural Networks and Learning Systems (Linköping University). The labs covered supervised, deep and reinforcement learning. Boosting and Ensemble methods were also covered."
            tag_array = ["Python", "Machine Learning", "Supervised Learning", "Deep Learning", "Neural Networks", "Boosting", "Reinforcement Learning", "Ensemble"]
            break;
        }
    return(
    <div key={image_name} class="flex flex-col mx-2 w-155 xl:h-200 rounded-3xl border-4 my-4 bg-red-950 border-red-600">

        <h1 class="text-3xl font-black text-white mx-auto text-center mt-5" >{image_name}</h1>
        
        <img src={im_path} class="object-cover rounded-3xl w-11/12 mx-auto mt-5 h-70"></img>
        
        <p class="w-11/12 text-xl text-white mx-auto text-center mt-5">{project_description}</p>

        <div class="flex w-11/12 ml-5 mt-5 flex-wrap">
            {tag_array.map(tag => (
                <Project_Tag key={tag} tag={tag}/>
            ))} 
        </div>

        <motion.a whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95}}
        transition={easeInOut} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="flex w-fit ml-5 my-auto mb-5 content-end">
            <img src="src/assets/youtube.png" class="w-14"></img>
            <p class="text-2xl ml-2 my-auto text-white">Demo</p>
        </motion.a>
    </div>
    )
}

export default Project_Cards;