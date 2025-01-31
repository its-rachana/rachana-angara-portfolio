import qaroraImg from "../../public/images/VeriFaceSecurityHomepage.png";
import myImage from "../../public/images/rachanaangara.jpg";
import redditCloneImg from "../../public/images/ArtTrackTeamProject.png";
import shawerrImg from "../../public/images/health&Fitness.png";
import arabicPoetryImg from "../../public/images/FinTrackHomepage.png";
import agileImg from "../../public/images/AgileSprintSimulatorHomepage.png"
import downloadImg from "../../public/images/downloadResume.png";

export const heroData = {
  img: myImage,
  hi: "Hello! I am",
  name: "Rachana Angara",
  expertise: ["Full Stack Developer"],
  about:
    "I am a passionate and results-driven software developer with a strong foundation in front-end and back-end development. Proficient in technologies like React, Java, Spring Boot, and RESTful APIs, I specialize in building responsive and scalable applications.With a dedication to continuous learning and innovation, I strive to develop high-quality solutions that enhance user experiences and drive business success.",
  btnText: "Resume",
  btnImg: downloadImg
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
      text: "Rachana Angara’s exceptional technical expertise has consistently distinguished her as an invaluable team member. At Barclays, she demonstrated strong leadership by mentoring both her team and cross-functional teams on best practices, ensuring alignment and knowledge sharing. Additionally, she took the initiative to organize monthly director-level events, promoting collaboration and strengthening team spirit.",
    },
    {
      title: "Anirudha Saraf",
      position: "Assistant Vice President - Barclays",
      text: "Rachana Angara has proven to be an outstanding team member, consistently blending technical skill with a focus on achieving results.Rachana's proactive communication and mentorship have fostered a culture of collaboration and continuous learning. Her accomplishments, such as multiple high-performance ratings and the \"Code Ninja of the Month\" award, highlight her dedication, adaptability, and strong commitment to excellence.",
    },
    {
      title: "Nikhilesh Khatra",
      position: "Assistant Vice President - Barclays",
      text: "Joining the team as a graduate, Rachana quickly proved herself as an exceptional developer and an indispensable team member. From the outset, her eagerness to learn and adapt stood out, as she mastered advanced tools with remarkable speed. Her ability to seamlessly transition between frontend development and backend showcased her versatility as a full-stack developer.",
    },
    {
      title: "Vivek Jain",
      position: "Assistant Vice President - Barclays",
      text:"Although I worked with Rachana indirectly, her professionalism and technical skills were consistently evident. She approached every task with enthusiasm and delivered reliable, high-quality results that aligned seamlessly "+
      "with project goals. Rachana displayed excellent communication skills and a proactive attitude, making collaboration across teams"+
      " smooth and efficient.",
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
      name: "FinTrack WebApp",
      image: arabicPoetryImg,
      technologies: [
        "Java", "Spring boot", "Spring MVC", "Spring Security", "Spring Data (JPA)", "MySQL", "Thymeleaf", "Bootstrap"
      ],
      description:
        "The Expenses Tracker App is a robust financial management solution developed using cutting-edge technologies such as Spring Boot, Spring Security, and MySQL. With user authentication and authorization features, users can securely sign up, sign in, and perform CRUD operations on their expenses. The app's intuitive interface, powered by Thymeleaf and Bootstrap, ensures a seamless user experience. The filtering functionality allows users to efficiently organize and analyze their financial data. Explore the power of streamlined expense tracking and financial control with this feature-rich application.",
      demoUrl: "",
      codeUrl: "https://github.com/its-rachana/fintrack",
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
      demoUrl: "",
      codeUrl: "https://github.com/its-rachana/FitSphere",
    },
    {
      name: "VeriFace Security",
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
      demoUrl: "",
      codeUrl: "https://github.com/its-rachana/VeriFace-Security",
    },
    {
      name: "Scrum Simulator",
      image: agileImg,
      technologies: [
        "Java",
        "Swing",
        "Gradle"
      ],
      description:
      "The Agile Sprint Simulator is a software tool designed to provide an interactive environment for simulating Agile development sprints. Developed in Java and structured using Gradle, the project aims to support teams or individuals in learning and practicing Agile workflows. It features an intuitive interface (as suggested by the inclusion of classes like Homepage), enabling users to simulate core Agile practices such as backlog management, task prioritization, and sprint planning. Participants can experience how user stories are developed and managed across a sprint, monitor progress, and handle common Agile challenges like capacity planning and velocity tracking. With version control managed via Git and compatibility with IntelliJ IDEA, the tool is optimized for developers working in Agile environments. This simulator is ideal for educational purposes, helping teams understand Agile dynamics in a practical, controlled setup.",
      demoUrl: "",
      codeUrl: "https://github.com/its-rachana/Agile-Sprint-Simulator.git",
    },
    {
      name: "ArtTrack",
      image: redditCloneImg,
      technologies: [
        " React.js", "Flask", "GraphDB","SPARQL"
      ],
      description:"ArtTrack is a web-based application that enhances artwork organization, retrieval, and analysis using semantic web technologies. It employs OWL, RDF, and SPARQL to link artworks with artists, cultural themes, and mediums. Built on CIDOC CRM ontology, it allows users to explore artworks by historical periods, styles, and metadata attributes. The system features a React.js frontend, a Flask backend, and a GraphDB-powered knowledge graph. Designed for museums, collectors, and researchers, ArtTrack improves access to cultural heritage data. Future plans include AI-driven insights, expanded datasets, and interactive visualizations for a richer experience.",
      demoUrl: "",
      codeUrl: "https://github.com/its-rachana/reddit-clone",
    },
  ],
};
