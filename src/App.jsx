import './App.css'
import {motion, easeInOut} from "motion/react"
function App() {
  let cl_ex_info = "font-mono text-xl sm:text-3xl text-white"
  return (
  <div className="App">
    
    {/*Picture, Name and Degree*/}
    <motion.div initial={{ opacity: 0, y:-100}} animate={{ opacity: 1, y:0, transition: {duration: 0.8}, easeInOut}} class="w-fit lg:flex mx-auto mt-20">
      <img src='assets/Jag.png' class="lg:w-3/12 w-8/12 mx-auto object-cover aspect-square rounded-full"></img>
      <div class="flex-col ml-5">
        <h1 class="font-mono text-5xl sm:text-7xl text-center lg:text-left text-white pt-13"> Nikita Sidarovich </h1>  
        <ul class="mx-auto w-fit lg:ml-5 my-3 flex-col flex-wrap">
          <li class={cl_ex_info}>● Education: MSC ENGINEERING</li>
          <li class={cl_ex_info}>● Focus: ML & AI</li>
          <li class={cl_ex_info}>● Location: Norrköping</li>        
        </ul>
      </div>

    </motion.div>
  </div>
  
  )
}

export default App
