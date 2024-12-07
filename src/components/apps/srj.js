import React, { Component } from "react";
// import ReactGA from "react-ga";

export class AboutBhushan extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    // ReactGA.pageview(`/${screen}`);

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="about bhushan"
            src= {`${process.env.PUBLIC_URL}/themes/Yaru/status/about.svg`}
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="bhushan' education"
            src={`${process.env.PUBLIC_URL}/themes/Yaru/status/education.svg`}
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="bhushan' skills"
            src={`${process.env.PUBLIC_URL}/themes/Yaru/status/skills.svg`}
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="bhushan' projects"
            src={`${process.env.PUBLIC_URL}/themes/Yaru/status/projects.svg`}
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="bhushan's resume"
            src={`${process.env.PUBLIC_URL}/themes/Yaru/status/download.svg`}
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen ubuntu-font">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutBhushan;

export const displayAboutBhushan = () => {
  return <AboutBhushan />;
};

function About() {
  return (
    <>
      <div className="w-80 md:w-80 my-4 bg-white rounded-full">
        <img
          className="w-full rounded"
          src={`${process.env.PUBLIC_URL}/images/logos/bitmoji.png`}
          alt="Bhushan Kale Logo"
        />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          My name is <span className="font-bold">Bhushan Kale</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">Machine Learning Engineer !</span>
        </div>
      </div>
      <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc">
          I've Completed my Master's of Aritificial Intelligence from{" "}
          <a href="https://www.universityofgalway.ie/" rel="noreferrer" target="_blank">
            University of Galway, Ireland with 1:1 grade
          </a>
          .
        </li>
        <li className=" mt-3 list-building">
          {" "}
          From my early days as the go-to person for technical glitches among my peers to my current accomplishments as an AI Engineer, my journey has been one of constant growth and innovation. With a robust foundation in artificial intelligence, machine learning, and software development, I am passionate about solving complex challenges and creating impactful solutions.
        </li>
        <li className=" mt-3 list-time">
          {" "}
          My career spans leading technical initiatives like developing advanced AI platforms and streamlining complex integrations. At Amdocs, I contributed to building the amAIz platform, customizing AI models for industry-specific use cases, and leveraging cutting-edge LLMs to transform enterprise systems. By automating network KPI degradation detection with time series forecasting models, I reduced human intervention by 70%, directly enhancing operational efficiency. My work on microservices significantly improved system response times and reduced errors, showcasing my commitment to precision and excellence.
        </li>
        <li className=" mt-3 list-star">
          {" "}
          Beyond technical expertise, I take pride in fostering collaboration and mentoring teams to deliver scalable and secure solutions. My expertise lies in building and deploying AI solutions, leveraging state-of-the-art machine learning techniques, including deep learning, natural language processing, and generative AI. Proficient in frameworks such as TensorFlow, PyTorch, Huggingface, and LangChain, I excel at creating end-to-end machine learning pipelines and deploying models in production environments using AWS and GCP. I have hands-on experience with LLMs, transformers, RAG systems, and model optimization for low-latency applications. Additionally, my technical repertoire includes Python, Java, microservices, CI/CD pipelines, Docker, Kubernetes, MySQL, and MongoDB. With a strong focus on problem-solving, adaptability, and continuous learning, I strive to deliver innovative solutions that address real-world challenges effectively.
        </li>
      </ul>
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
      <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            University of Galway, Ireland
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2023 - 2024</div>
          <div className=" text-sm md:text-base">
            Master of Science in Artificial Intelligence
          </div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            Grade &nbsp; 1:1
          </div>
        </li>
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Center for Development of Advanced Computing (CDAC), India
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2020 - 2021</div>
          <div className=" text-sm md:text-base">
            Postgraduate diploma in Advanced Computing (PG-DAC)
          </div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            Grade &nbsp; A
          </div>
        </li>
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Prof. Ram Meghe Institue of Technology and Research, India
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2016 - 2020</div>
          <div className=" text-sm md:text-base">
            Computer Science & Engineering
          </div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            Grade &nbsp; 1:1
          </div>
        </li>
      </ul>
    </>
  );
}
// function Skills() {
//   return (
//     <>
//       <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
//         Technical Skills
//         <div className="absolute pt-px bg-white mt-px top-full w-full">
//           <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
//           <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
//         </div>
//       </div>
//       <ul className=" tracking-tight text-md md:text-base w-10/12 emoji-list">
//         <li className=" list-arrow text-md md:text-base mt-4 leading-tight tracking-tight">
//           I've worked with a variety of programming languages & frameworks.
//         </li>
//         <li className=" list-arrow text-md md:text-base mt-4 leading-tight tracking-tight">
//           <div>
//             {" "}
//             My areas of expertise are{" "}
//             <strong className="text-ubt-gedit-orange">
//                Python, Machine Learning, Generative AI, RAG, NLP, AWS, GCP, Java !!
//             </strong>
//           </div>
//         </li>
//         <li className=" list-arrow text-md md:text-base mt-4 leading-tight tracking-tight">
//           <div>Here are some of my frequently used</div>
//         </li>
//       </ul>
//       <div className="w-full md:w-10/12 flex mt-4">
//         <div className=" text-md text-center md:text-base w-1/2 font-bold">
//           Languages & Tools
//         </div>
//         <div className=" text-md text-center md:text-base w-1/2 font-bold">
//           Frameworks & Libraries
//         </div>
//       </div>
//       <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
//         <div className="px-2 w-1/2">
//           <div className="flex flex-wrap justify-center items-start w-full mt-2">
//           <img
//               className="m-1"
//               src="https://img.shields.io/badge/-TypeScript-blue?style=flat&logo=typeScript&logoColor=000000"
//               alt="bhushan typescript"
//             />
//                       <img
//               className="m-1"
//               src="https://img.shields.io/badge/-Docker-green?style=flat&logo=docker&logoColor=000000"
//               alt="bhushan docker"
//             />
//             <img
//               className="m-1"
//               src="https://img.shields.io/badge/JWT-grey?style=flat&logo=JSON%20web%20tokens&logoColor=000000"
//               alt="bhushan jwt"
//             />            
//             <img
//               className="m-1"
//               src="https://img.shields.io/badge/Socket.IO-red?style=flat&logo=socket.io&logoColor=000000"
//               alt="bhushan socketio"
//             />
//             <img
//               className="m-1"
//               src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
//               alt="bhushan javascript"
//             />
//             <img
//               className="m-1"
//               src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
//               alt="bhushan python"
//             />
//             <img
//               className="m-1"
//               src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"
//               alt="bhushan dart"
//             />
//             <a
//               href="https://www.google.com/search?q=is+html+a+language%3F"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <img
//                 title="yes it's a language!"
//                 className="m-1"
//                 src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff"
//                 alt="bhushan HTML"
//               />
//             </a>
//             <img
//               className="m-1"
//               src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
//               alt="bhushan c++"
//             />
//             <img
//               src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
//               alt="bhushan git"
//               className="m-1"
//             />
//             <img
//               src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff"
//               alt="bhushan firebase"
//               className="m-1"
//             />
//           </div>
//         </div>
//         <div className="px-2 flex flex-wrap items-start w-1/2">
//           <div className="flex flex-wrap justify-center items-start w-full mt-2">
//             <img
//               className=" m-1"
//               src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
//               alt="bhushan react"
//             />
//             <img
//               className=" m-1"
//               src="https://img.shields.io/badge/-React--Native-orange?style=flat&logo=react&logoColor=ffffff"
//               alt="bhushan react-native"
//             />
//             <img
//               className="m-1"
//               src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"
//               alt="bhushan flutter"
//             />
//             <img
//               src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff"
//               alt="bhushan node.js"
//               className="m-1"
//             />
//             <img
//               src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
//               alt="bhushan jquery"
//               className="m-1"
//             />
//             <img
//               className="m-1"
//               src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
//               alt="bhushan redux"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function Skills() {
  return (
    <>
      <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className="tracking-tight text-md md:text-base w-10/12 emoji-list">
        <li className="list-arrow text-md md:text-base mt-4 leading-tight tracking-tight">
          I've worked with a diverse range of programming languages, frameworks, and tools across Machine Learning and Software Development.
        </li>
        <li className="list-arrow text-md md:text-base mt-4 leading-tight tracking-tight">
          <div>
            My core expertise includes{" "}
            <strong className="text-ubt-gedit-orange">
              Python, Java, Machine Learning, Generative AI, RAG, NLP, AWS, GCP, Agile Methodology, and more!
            </strong>
          </div>
        </li>
        <li className="list-arrow text-md md:text-base mt-4 leading-tight tracking-tight">
          <div>Here's a comprehensive overview of my skills:</div>
        </li>
      </ul>
      {/* First Row */}
      <div className="w-full md:w-10/12 flex mt-4">
        <div className="text-md text-center md:text-base w-1/2 font-bold">
          Programming & Tools
        </div>
        <div className="text-md text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              alt="Python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Java-blue?style=flat&logo=java&logoColor=ffffff"
              alt="Java"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/SQL-4479A1?style=flat&logo=MySQL&logoColor=white"
              alt="SQL"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff"
              alt="HTML"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-CSS3-blue?style=flat&logo=css3&logoColor=white"
              alt="CSS"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Streamlit-FF4B4B?style=flat&logo=streamlit&logoColor=white"
              alt="Streamlit"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-React.js-61DAFB?style=flat&logo=react&logoColor=white"
              alt="React.js"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white"
              alt="TensorFlow"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white"
              alt="PyTorch"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Huggingface-FCC624?style=flat&logo=huggingface&logoColor=white"
              alt="Huggingface"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/LangChain-56347C?style=flat&logo=langchain&logoColor=white"
              alt="LangChain"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=flat&logo=scikit-learn&logoColor=white"
              alt="Scikit-learn"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Spacy-09A3D5?style=flat&logo=spacy&logoColor=white"
              alt="Spacy"
            />
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="w-full md:w-10/12 flex mt-4">
        <div className="text-md text-center md:text-base w-1/2 font-bold">
          AI/ML Techniques
        </div>
        <div className="text-md text-center md:text-base w-1/2 font-bold">
          Cloud & Databases
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/Generative%20AI-black?style=flat&logo=ai&logoColor=white"
              alt="Generative AI"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/NLP-green?style=flat&logo=nlp&logoColor=white"
              alt="NLP"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Deep%20Learning-orange?style=flat&logo=deeplearning&logoColor=white"
              alt="Deep Learning"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/RAG-blueviolet?style=flat&logo=graphql&logoColor=white"
              alt="RAG"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Text%20Summarization-blue?style=flat&logo=text&logoColor=white"
              alt="Text Summarization"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Neural%20Networks-red?style=flat&logo=neural&logoColor=white"
              alt="Neural Networks"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-AWS-orange?style=flat&logo=amazon-aws&logoColor=white"
              alt="AWS"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-GCP-blue?style=flat&logo=google-cloud&logoColor=white"
              alt="GCP"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/MySQL-blue?style=flat&logo=mysql&logoColor=white"
              alt="MySQL"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/MongoDB-green?style=flat&logo=mongodb&logoColor=white"
              alt="MongoDB"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/VectorDB-purple?style=flat&logo=databricks&logoColor=white"
              alt="VectorDB"
            />
          </div>
        </div>
      </div>
      {/* Third Row */}
      <div className="w-full md:w-10/12 flex mt-4">
        <div className="text-md text-center md:text-base w-1/2 font-bold">
          Agile & Tools
        </div>
        <div className="text-md text-center md:text-base w-1/2 font-bold">
          Soft Skills
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/Agile%20Methodology-orange?style=flat&logo=agile&logoColor=white"
              alt="Agile Methodology"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/JIRA-blue?style=flat&logo=jira&logoColor=white"
              alt="JIRA"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/Problem%20Solving-darkblue?style=flat&logo=problem-solving&logoColor=white"
              alt="Problem Solving"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Teamwork-yellow?style=flat&logo=teamwork&logoColor=white"
              alt="Teamwork"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Adaptability-purple?style=flat&logo=adaptability&logoColor=white"
              alt="Adaptability"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Communication-green?style=flat&logo=communication&logoColor=white"
              alt="Communication"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Resilience-orange?style=flat&logo=resilience&logoColor=white"
              alt="Resilience"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Collaboration-blue?style=flat&logo=collaboration&logoColor=white"
              alt="Collaboration"
            />
          </div>
        </div>
      </div>
    </>
  );
}






function Projects() {
  const project_list = [
    {
      "name": "Advanced RAG System for Real-Time Product Recommendations",
      "description": [ 
        "Boosted recommendation relevance by 30% by creating an AI-driven product recommendation system using RAG and real-time web-scraping from e-commerce platforms with BeautifulSoup, Playwright, and asyncio.",
        "Accelerated search accuracy by integrating the Mistral 7B model with help of LangChain and Huggingface for local LLM processing and implementing hybrid search methods (BM25, FAISS) with reranking via the Cohere rerank API and utilizing a Vector Database (FAISS) for efficient storage and retrieval of embeddings.",
        "Delivered real-time AI-driven product suggestions, providing a user-friendly experience, by designing an interactive Streamlit interface incorporating live market data."
      ],
      "domains": ["Python", "RAG", "LangChain", "Huggingface", "Streamlit", "Web Scraping", "Vector Database", "LLMs"],
      "link": "https://github.com/bhushank19/Masters-Project"
    },
    {
      "name": "Real-Time Video Filter Application",
      "description": [
        "Achieved over 90% accuracy in real-time video processing by integrating custom ONNX models for human segmentation (PP-HumanSeg) and facial detection (YuNet).",
        "Elevated user experience by creating over 5 interactive filters, including background replacement and gesture-based controls with MediaPipe.",
        "Ensured smooth operation at up to 30 FPS by installing over 5 key commands for user control over settings."
      ],
      "domains": ["Python", "ONNX", "MediaPipe", "OpenCV", "TensorFlow", "PyTorch", "FFmpeg"],
      "link": "https://github.com/bhushank19/Real-Time-Vision-Filter-Application"
    },
    {
      "name": "E-Banking System",
      "description": [
        "Amplified security, reliability, and scalability of banking functions by 50% by delivering a scalable E-Banking System through building a full-stack application with React.js, Spring Boot, Java, Hibernate, Maven, embedding MySQL, applying JWT authorization, efficient processing with Java 8 streams, global exception handling, and deploying on AWS for high availability and seamless performance.",
      ],
      "domains": ["React", "Spring Boot", "Java", "Hibernate", "Maven", "MySQL",],
      "link": "https://github.com/bhushank19/E-Banking-System"
    },
    // {
    //   name: "Websites",
    //   description: [
    //     "More than 50 static websites most of them for Knowledge Publishing Group(Canada), M16labs, DigitalClinic",
    //     " Almamatters(Student Internship Portal)",
    //     " Clinic- Management-System,Keeper(Daily Task Noter)",
    //     " Secure Auth System",
    //   ],
    //   domains: [
    //     "HTML5",
    //     "CSS",
    //     "Bootstrap",
    //     "Javascript",
    //     "React",
    //     "Node(Express)",
    //     "MongoDB",
    //   ],
    // },
    // {
    //   name: "Apps",
    //   description: [
    //     "Shazam(The Chat-App)",
    //     "CryptoBuddy(Real-time Crypto Tracker App)",
    //     " Clima-Cool(Real-time Weather Forecasting App)",
    //     "Leela-Ethinic Wear Online Shopping App (Wordpress WebView App)",
    //     " ICamps(App to collect and assess cancer patients)",
    //     " Call 4 Swasth (Online-Offline Camp-Screening app which extends the web MetahOS platform)",
    //   ],
    //   domains: ["React-Native","Flutter", "Nodejs","firestore", "dart", "firebase auth"],
    // },
  ];

  const tag_colors = {
    // javascript: "yellow-300",
    // HTML5: "pink-600",
    // CSS: "pink-400",
    // Bootstrap: "yellow-600",
    // Javascript: "green-600",
    // MongoDB: "green-200",
    // React: "blue-500",
    // firebase: "red-600",
    // firestore: "red-500",
    // "chrome-extension": "yellow-400",
    // flutter: "blue-400",
    // dart: "blue-500",
    // "react-native": "purple-500",
    // html5: "pink-600",
    // sass: "pink-400",
    // tensorflow: "yellow-600",
    // django: "green-600",
    // python: "green-200",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      {project_list.map((project, index) => {
        return (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex w-full flex-col px-4"
          >
            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
              <div className="flex flex-wrap justify-between items-center">
                <div className=" text-base md:text-lg">
                  {project.name} {project.link?.length!==0?project.link:null}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                {project.description.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc mt-1 text-gray-100">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-2">
                {project.domains
                  ? project.domains.map((domain, index) => {
                      let tag_color = tag_colors[domain];
                      return (
                        <span
                          key={index}
                          style={{ borderWidth: "1pt" }}
                          className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}
                        >
                          {domain}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src={`${process.env.PUBLIC_URL}/files/Bhushan Kale CV.pdf`}
      title="Bhushan Kale CV"
      frameBorder="0"
    ></iframe>
  );
}
