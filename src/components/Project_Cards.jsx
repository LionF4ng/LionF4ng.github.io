import { easeInOut, motion } from "motion/react"
import Project_Tag from "./Project_Tag"

function demos(has_y_d, has_i_d, y_link, i_link){
    if (has_y_d || has_i_d){
        return(
            <>
                {has_y_d ? <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95}}
                transition={easeInOut} href= {y_link} target="_blank" class="flex w-fit ml-5 my-auto mb-5">
                    <img src="assets/youtube.png" class="w-14"></img>
                    <p class="text-2xl ml-2 my-auto text-white">Youtube Demo</p>
                </motion.a> : <></>}
                {has_i_d ? <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95}}
                transition={easeInOut} href= {i_link} target="_blank" class="flex w-fit ml-5 my-auto mb-5">
                    <img src="assets/demo.png" class="w-14"></img>
                    <p class="text-2xl ml-2 my-auto text-white">Demo</p>
                </motion.a> : <></>}
            </>
        )
    }
}

function Project_Cards({image_name}){
    {/*Image Path*/}
    let im_path
    {/*Project Description*/}
    let project_description
    
    {/*Project Description*/}
    let tag_array = []

    let has_youtube_demo

    let has_interactive_demo
 
    let youtube_link

    let interactive_demo_link

    let card_class

    switch (image_name) {
        case "Logos":
            im_path = "assets/Logos.png"
            project_description = "Logos is a natural language processing system that allows the user to translate natural language into formal logic, both with and without the use of Large Language Models. This project was my master thesis work."
            tag_array = ["SWI-Prolog", "Answer Set Programming", "NLTK", "CFG", "LLM", "Flask"]
            interactive_demo_link = "https://nl-to-logic.onrender.com/"
            card_class = "flex flex-col mx-2 w-155 xl:h-180 rounded-3xl border-4 my-4 bg-red-950 border-red-600"
            has_interactive_demo = true;
            has_youtube_demo = false;
            break;
        case "Salify":
            im_path = "assets/Salify.png"
            project_description = "A project where sentiment analysis is performed on song lyrics with BERT. The analysis is performed on public Spotify playlist where the React front-end receives the sentiment scores from the Python backend using Flask."
            tag_array = ["Python","React","Flask", "Scikit", "BERT", "Spotify API", "GENIUS API"]
            card_class = "flex flex-col mx-2 w-155 xl:h-180 rounded-3xl border-4 my-4 bg-red-950 border-red-600"
            has_interactive_demo = false;
            has_youtube_demo = false;
            break;
        case "TBMI26":
            im_path = "assets/TBMI26.png"
            project_description = "Lab work from the course: Neural Networks and Learning Systems (Linköping University). The labs covered supervised, deep and reinforcement learning. Boosting and Ensemble methods were also covered."
            tag_array = ["Python", "Machine Learning", "Supervised Learning", "Deep Learning", "Neural Networks", "Boosting", "Reinforcement Learning", "Ensemble"]
            card_class = "flex flex-col mx-2 w-155 xl:h-180 rounded-3xl border-4 my-4 bg-red-950 border-red-600"      
            has_interactive_demo = false;      
            has_youtube_demo = false;
            break;
        case "Learn-To-Sing":
            im_path = "assets/Learn-To-Sing.png"
            project_description = "Learn To Sing was a hobby project developed for fun. It is a system that allows users to complete exercises and AI generated lessons to learn to sing. Users can also create accounts, which are stored in Firebase."
            tag_array = ["TypeScript", "AI", "Gemini API", "React", "Tailwind", "Motion", "Tensorflow", "Firebase", "WebSockets"]
            youtube_link = "https://youtu.be/Az4szO6rnE0"
            card_class = "flex flex-col mx-2 w-155 xl:h-180 rounded-3xl border-4 my-4 bg-red-950 border-red-600"
            has_interactive_demo = false;
            has_youtube_demo = true;
            break;
        case "Alpha-Spike":
            im_path = "assets/Alpha-Spike.png"
            project_description = "Alpha-Spike was a summer job project for 2 students, built for Linköping University. The system is a front-end web app built to communicate with UTM-City, a drone simulation software built by the University. "
            tag_array = ["Python", "Flask", "SWI-Prolog", "Answer Set Programming", "A*", "Behaviour Trees", "Voice Interaction", "Docker", "ZMQ"]
            youtube_link = "https://www.youtube.com/watch?v=uOzF8TFDkdU"
            card_class = "flex flex-col mx-2 w-155 xl:h-180 rounded-3xl border-4 my-4 bg-red-950 border-red-600"
            has_interactive_demo = false;
            has_youtube_demo = true;
            break;
        case "Norrköping_Story":
            im_path = "assets/Norrköping_Story.png"
            project_description = "Course work from a UX course that earned itself a place in Visualiseringscenter C in Norrköping, where it was on display. The prototype was fully built in Figma, the 'art' was AI generated."
            tag_array = ["Figma"]
            interactive_demo_link = "https://www.figma.com/proto/beGAEvjEXkmVipQC2qAeN7/Prototyp-1?node-id=262-215&p=f&t=ZqRKLrRkktshJHew-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=262%3A215"
            card_class = "flex flex-col mx-2 w-155 xl:h-180 rounded-3xl border-4 my-4 bg-red-950 border-red-600"
            has_interactive_demo = true;
            has_youtube_demo = false;
            break;
        case "L-Sektion":
            im_path = "assets/WIP.jpg"
            project_description = "This is a work-in-progress website that I am building for a student faculty. The idea is to build a product where users can update everything necessary without changing any code."
            tag_array = ["TypeScript", "React", "Tailwind", "Motion"]
            card_class = "flex flex-col mx-2 w-155 xl:h-180 rounded-3xl border-4 my-4 bg-red-950 border-red-600"
            has_interactive_demo = false;
            has_youtube_demo = false;
            break;
        case "S-Sektion":
            im_path = "assets/WIP.jpg"
            project_description = "This is a work-in-progress website that I am building for a student faculty. The idea is to build a product where users can update everything necessary without changing any code."
            tag_array = ["TypeScript", "React", "Tailwind", "Motion", "Blender"]
            card_class = "flex flex-col mx-2 w-155 xl:h-180 rounded-3xl border-4 my-4 bg-red-950 border-red-600"
            has_interactive_demo = false;
            has_youtube_demo = false;
            break;
        }
    return(
    <div key={image_name} class={card_class}>

        <h1 class="text-3xl font-bold text-white mx-auto text-center mt-5" >{image_name}</h1>
        
        <img src={im_path} class="object-cover rounded-3xl w-11/12 mx-auto mt-5 h-70"></img>
        
        <p class="w-11/12 text-xl text-white mx-auto text-center mt-5">{project_description}</p>

        <div class="flex w-11/12 ml-5 mt-5 flex-wrap">
            {tag_array.map(tag => (
                <Project_Tag key={tag} tag={tag}/>
            ))} 
        </div>
        {demos(has_youtube_demo, has_interactive_demo, youtube_link, interactive_demo_link)}
        </div>
    )
}

export default Project_Cards;