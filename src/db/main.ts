import qaroraImg from "../../public/images/qarora.png";
import bookieImg from "../../public/images/bookie.png";
import myImage from "../../public/images/rachanaangara.jpg";
import mutahItImg from "../../public/images/mutah-it.png";
import randQuoteImg from "../../public/images/randquote.png";
import redditCloneImg from "../../public/images/reddit-clone.png";
import theDojoImg from "../../public/images/the-dojo.png";
import shawerrImg from "../../public/images/shawerr.png";
import arabicPoetryImg from "../../public/images/arabic-poetry.png";

export const heroData = {
  img: myImage,
  hi: "Hello! I am",
  name: "Rachana Angara",
  expertise: ["Full Stack Developer"],
  about:
    "I have a strong background in software development, encompassing static analysis, front-end design, user acceptance testing, and backend development.I improved code quality using SonarQube, developed responsive React interfaces, integrated RESTful APIs, and optimized performance. On the backend, I built robust solutions with Spring Boot, implemented secure APIs, and automated testing using Cucumber and Gherkin.Additionally, I integrated CI/CD pipelines with Jenkins, mentored teams on BDD principles, and collaborated within Agile teams to deliver scalable, high-quality software on time.",
  btnText: "Get my resume",
};

export const aboutData = {
  title: "About My",
  cards: [
      {
      title: "Past",
      text: ["- 3 years of experience in software development, including static analysis, front-end design, user acceptance testing, and backend development.",
            "- Improved code quality with SonarQube and designed efficient, responsive user interfaces" ,
            "- Developed secure and scalable backend solutions" ,
            "- Mentored teams on best practices, collaborated in Agile environments and organised events at director level"]
    },
    {
      title: "Present",
      text:[ "- Currently pursuing my Master’s in Software Engineering at Arizona State University",
          "- It’s a rigorous and exciting journey, with a strong blend of theory and practical application through coursework, projects, and collaborations with talented peers. ",
          "- I’m on track to graduate in 2026, and I’m eager to leverage this education to contribute to innovative and impactful projects in the tech industry."]
    },
    {
      title: "Future",
      text:["- I aim to deepen my expertise in front-end and back-end technologies. ",
          "- I am parallelly focusing on building my soft skills.",
          "- My ultimate goal is to become a lead developer, where I can guide and inspire a team to deliver innovative solutions, fostering a collaborative environment that drives success and innovation in every project we undertake."
      ]
    },
  ],
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Programming Language",
      skills: [
          "C++",
          "Java",
          "Python",
          "React",
          "Javascript",
          "Typescript",
          "HTML",
          "CSS"
      ],
    },
    {
      title: "Web frameworks",
      skills: [
        "Spring",
        "Spring Boot",
        "Spring MVC",
        "Flask",
        "Django"
      ],
    },
    {
      title: "Database Management and tools",
      skills: [
        "MySQL",
        "DB2",
        "Git",
        "JIRA",
        "Jenkins",
        "Openshift",
        "Gradle"
      ],
    },{
      title: "Unit Testing Frameworks",
      skills: [
        "Mockito",
        "Mockito-Inline",
          "Power-mockito",
          "Reflection Utils",
          "JUnit5",
          "unittest",
          "Jest",
          "React Testing Library",
          "Enzyme"
      ],
    },
  ],
};

export const contactData = {
  title: "Wall Of Fame",
  cards: [
    {
      title: "Kishore Haridas (Director)",
      position: "Director - Barclays",
      text: "I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
    },
    {
      title: "Anirudha Saraf",
      position: "Assistant Vice President - Barclays",
      text: "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
    },
    {
      title: "Nikhilesh Khatra",
      position: "Assistant Vice President - Barclays",
      text: "Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!",
    },
    {
      title: "Vivek Jain",
      position: "Assistant Vice President - Barclays",
      text: "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
    },
  ],
  links: [
    {
      label: "Email",
      url: "mailto:rachana.angara.work@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/its-rachana",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rachana-angara-490b89192/",
    },
    {
      label: "Resume",
      url: "/Docs/resume.pdf",
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
    {
      name: "Expense Tracker WebApp",
      image: arabicPoetryImg,
      technologies: [
        "Java", "Spring boot", "Spring MVC", "Spring Security", "Spring Data (JPA)", "MySQL", "Thymeleaf", "Bootstrap"
      ],
      description:
        "The Expenses Tracker App is a robust financial management solution developed using cutting-edge technologies such as Spring Boot, Spring Security, and MySQL. With user authentication and authorization features, users can securely sign up, sign in, and perform CRUD operations on their expenses. The app's intuitive interface, powered by Thymeleaf and Bootstrap, ensures a seamless user experience. The filtering functionality allows users to efficiently organize and analyze their financial data. Explore the power of streamlined expense tracking and financial control with this feature-rich application.",
      demoUrl: "https://arabic-poetry.net",
      codeUrl: "",
    },
    {
      name: "Health Fitness Mobile Application",
      image: shawerrImg,
      technologies: [
        "Java", "Hibernate","React", "CSS3", "REST-API", "auth0", "swal", "aos-animation","Maven"
      ],
      description:
        "This is a health & fitness website which specialize in tracking your fitness activities. The website provides fitness programs,fitness tracking dashboard and fitness related memberships .\n" +
          "\n" +
          "In this project i have tried to manipulate dom elements, styling using css and tried to make website more dynamic and responsive. With my efforts and the technology stack that i have learned till Unit-4 in the Masai School, i am able to design the whole website with some functionalities & features.",
      demoUrl: "https://shawerr.com",
      codeUrl: "",
    },
    {
      name: "Facial Recognisation For Crime Detection",
      image: qaroraImg,
      technologies: [
        "TypeScript",
        "Next",
        "React",
        "TailwindCss",
        "Firebase",
        "React Hook Form",
        "Zod",
      ],
      description:
      "The Facial Recognition for Crime Detection system is a Python-based application designed to detect and recognize faces using machine learning techniques to assist in identifying criminal suspects. It employs OpenCV's Haar cascades for face detection and uses preprocessed facial encodings to match individuals against stored criminal profiles managed in CSV files. Key components include dataset handling scripts, real-time or image-based face recognition processes, and database management for storing and retrieving records. The project includes compressed datasets, pretrained models, and sample videos for testing, with dependencies specified in a requirements.txt file. The system effectively integrates facial recognition workflows with real-world data to enhance crime detection capabilities.",
      demoUrl: "https://qwater-jo.com",
      codeUrl: "",
    },
    {
      name: "Scrum Simulator",
      image: bookieImg,
      technologies: [
        "Java",
        "Swing",
        "Gradle"
      ],
      description:
      "The Agile Sprint Simulator is a software tool designed to provide an interactive environment for simulating Agile development sprints. Developed in Java and structured using Gradle, the project aims to support teams or individuals in learning and practicing Agile workflows. It features an intuitive interface (as suggested by the inclusion of classes like Homepage), enabling users to simulate core Agile practices such as backlog management, task prioritization, and sprint planning. Participants can experience how user stories are developed and managed across a sprint, monitor progress, and handle common Agile challenges like capacity planning and velocity tracking. With version control managed via Git and compatibility with IntelliJ IDEA, the tool is optimized for developers working in Agile environments. This simulator is ideal for educational purposes, helping teams understand Agile dynamics in a practical, controlled setup.",
      demoUrl: "https://bookie-store.vercel.app/",
      codeUrl: "https://github.com/its-rachana/bookie",
    },
    {
      name: "ArtTrack",
      image: redditCloneImg,
      technologies: [
        " React.js", "Flask", "GraphDB","SPARQL"
      ],
      description:
        "A fully functional Reddit clone built with the latest technology in the web development field, allowing users to create communities, as well as create, post, and upvote content, comment on and vote on other users' content.",
      demoUrl: "https://m7-reddit-clone.vercel.app/",
      codeUrl: "https://github.com/its-rachana/reddit-clone",
    },
  ],
};
