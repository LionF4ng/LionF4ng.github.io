import { easeInOut, motion } from "motion/react"
function T_S({name}){
    //Class
    let cl = "w-26 h-26 mx-1 mt-2 rounded-3xl border-4 p-2 border-red-600 bg-red-900"
    //File Path
    let file_path = "src/assets/"
    //Link for the tech tags
    let url_link
    //Check what type of tech stack
    switch (name) {
        case "React":
            file_path = file_path + "React.svg"
            url_link = "https://react.dev/"
            break;
        case "Vite.js":
            file_path = file_path + "Vite.js.svg"
            url_link = "https://v3.vitejs.dev/"
            break;
        case "Tailwind CSS":
            file_path = file_path + "Tailwind CSS.svg"
            url_link = "https://tailwindcss.com/"
            break;
        case "C++":
            file_path = file_path + "C++.svg"
            url_link = "https://isocpp.org/"
            break;
        case "C#":
            file_path = file_path + "C_hashtag.svg"
            url_link = "https://learn.microsoft.com/en-us/dotnet/csharp/"
            break;
        case "Python":
            file_path = file_path + "Python.svg"
            url_link = "https://www.python.org/"
            break;
        case "Flask":
            file_path = file_path + "Flask.svg"
            url_link = "https://flask.palletsprojects.com/en/stable/"
            break;
        case "Pandas":
            file_path = file_path + "Pandas.svg"
            url_link = "https://pandas.pydata.org/"
            break;
        case "NumPy":
            file_path = file_path + "NumPy.svg"
            url_link = "https://numpy.org/"
            break;
        case "TensorFlow":
            file_path = file_path + "TensorFlow.svg"
            url_link = "https://www.tensorflow.org/"
            break;
        case "Firebase":
            file_path = file_path + "Firebase.svg"
            url_link = "https://firebase.google.com/"
            break;
        case "Git":
            file_path = file_path + "Git.svg"
            url_link = "https://git-scm.com/"
            break;
        case "NPM":
            file_path = file_path + "NPM.svg"
            url_link = "https://www.npmjs.com/"
            break;
        case "JSON":
            file_path = file_path + "JSON.svg"
            url_link = "https://www.json.org/json-en.html"
            break;
        case "JavaScript":
            file_path = file_path + "JavaScript.svg"
            url_link = "https://en.wikipedia.org/wiki/JavaScript"
            break;
        case "Java":
            file_path = file_path + "Java.svg"
            url_link = "https://www.java.com/en/"
            break;
        case "MATLAB":
            file_path = file_path + "MATLAB.svg"
            url_link = "https://www.mathworks.com/products/matlab.html"
            break;
        case "D3.js":
            file_path = file_path + "D3.js.svg"
            url_link = "https://d3js.org/"
            break;
        case "Vercel":
            file_path = file_path + "Vercel.svg"
            url_link = "https://vercel.com/"
            break;
        case "Pocket_Base":
            file_path = file_path + "Pocket_Base.webp"
            url_link = "https://pocketbase.io/"
            break;
        case "Render":
            file_path = file_path + "render.jpeg"
            url_link = "https://render.com/"
            break;
        case "SciKit":
            file_path = file_path + "scikit-learn.svg"
            url_link = "https://scikit-learn.org/stable/"
            break;
        case "Wireshark":
            file_path = file_path + "Wireshark.png"
            url_link = "https://www.wireshark.org/"
            break;
        case "ZAP":
            file_path = file_path + "ZAP.png"
            url_link = "https://www.zaproxy.org/"
            break;
        case "TypeScript":
            file_path = file_path + "TypeScript.svg"
            url_link = "https://www.typescriptlang.org/"
            break;
        case "PHP":
            file_path = file_path + "PHP.svg"
            url_link = "https://www.php.net/"
            break;
        case "CMake":
            file_path = file_path + "CMake.svg"
            url_link = "https://cmake.org/"
            break;
        case "Bash":
            file_path = file_path + "Bash.svg"
            url_link = "https://www.gnu.org/software/bash/"
            break;
        case "XML":
            file_path = file_path + "XML.svg"
            url_link = "https://en.wikipedia.org/wiki/XML"
            break;
        case "OpenGL":
            file_path = file_path + "OpenGL.svg"
            url_link = "https://www.opengl.org/"
            break;
        case "SQL":
            file_path = file_path + "SQL.png"
            url_link = "https://en.wikipedia.org/wiki/SQL"
            break;
        case "Docker":
            file_path = file_path + "Docker.svg"
            url_link = "https://www.docker.com/"
            break;
        case "Linux":
            file_path = file_path + "Linux.svg"
            url_link = "https://en.wikipedia.org/wiki/Linux"
            break;
    }
    return(
        //Return the image. Animated on hover and on tap
        <a href={url_link} target="_blank">
        <motion.img title={name} whileHover={{ scale: 1.2, y: -10}}
        whileTap={{ scale: 0.95, y: 5}}
        transition={easeInOut}
        
        src= {file_path} class={cl}
        ></motion.img>
        </a>
    )         
}

export default T_S;