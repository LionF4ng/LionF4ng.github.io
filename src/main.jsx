import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import T_S_R from './components/T_S_R.jsx'
import Project_Cards from './components/Project_Cards.jsx'
import Social_Bar from './components/Socials_Bar.jsx'
import {motion,easeInOut} from 'motion/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Social_Bar/>

    {/*Render the name card*/}
    <App />
    {/*Render the tech stacks*/}
    <motion.h1 initial={{opacity: 0, y:-100}} animate={{ opacity: 1, y:0, transition: {duration: 0.8}, easeInOut}} class="text-5xl font-bold text-white mx-auto text-center mt-20 mb-10">Tech Stacks</motion.h1>
    <motion.div initial={{opacity: 0, y:-100}} animate={{ opacity: 1, y:0, transition: {duration: 0.8}, easeInOut}} class="flex flex-wrap justify-center mx-auto mt-10">
      <T_S_R/>
    </motion.div>
    <motion.h1 initial={{opacity: 0, y:-100}} animate={{ opacity: 1, y:0, transition: {duration: 0.8}, easeInOut}} class="text-5xl font-bold text-white mx-auto text-center mt-16">Work Experience</motion.h1>
    <motion.div initial={{opacity: 0, y:-100}} animate={{ opacity: 1, y:0, transition: {duration: 0.8}, easeInOut}} class="flex flex-wrap justify-center mx-auto mt-10 w-10/12">
      <Project_Cards image_name ="Alpha-Spike"/>
    </motion.div>
    {/*Render the project cards*/}
    <motion.h1 initial={{opacity: 0, y:-100}} animate={{ opacity: 1, y:0, transition: {duration: 0.8}, easeInOut}} class="text-5xl font-bold text-white mx-auto text-center mt-16">Projects</motion.h1>
    <motion.div initial={{opacity: 0, y:-100}} animate={{ opacity: 1, y:0, transition: {duration: 0.8}, easeInOut}} class="flex flex-wrap justify-center mx-auto mt-10 w-10/12">
      <Project_Cards image_name ="Logos"/>
      <Project_Cards image_name ="TBMI26"/>
      <Project_Cards image_name ="Salify"/>
      <Project_Cards image_name ="Learn-To-Sing"/>
    </motion.div>
    <motion.div class="w-full h-10"></motion.div>
  </StrictMode>
)
