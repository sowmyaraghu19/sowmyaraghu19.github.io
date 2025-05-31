/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sowmya Raghavendra",
  title: "Hi all, I'm Sowmya",
  subTitle: emoji(
    "I am Sowmya Raghavendra, a passionate software engineer specializing in data engineering, machine learning, and backend development. Experienced with Python, PySpark, SQL, Spring Boot, and cloud platforms like Azure and GCP. I love solving complex problems, automating workflows, and building scalable data-driven applications. Currently, I’m pursuing my Master’s in Data Science and Analytics at Georgia State University, while also exploring opportunities that let me bridge the gap between software engineering and data-driven decision-making."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SSgWzJCMOEUFzQDXzzubLKD4FRFHRrKB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sowmyaraghu19",
  linkedin: "https://www.linkedin.com/in/sowmya-raghavendra",
  gmail: "sowmyaraghu1901@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia State University",
      logo: require("./assets/images/GSULogo.png"),
      subHeader: "Master of Science in Data Science and Analytics",
      duration: "August 2024 - December 2025",
      desc: "Atlanta, Georgia, United States of America",
      descBullets: [
        "GPA: 4.00"
      ]
    },
    {
      schoolName: "Dayananda Sagar Academy of Technology and Management",
      logo: require("./assets/images/DSILogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - July 2022",
      desc: "Bangalore, Karnataka, India",
      descBullets: ["GPA: 3.87"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
	{
      Stack: "PySpark", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "100%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "100%"
    },
	{
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "Georgia State University",
      companylogo: require("./assets/images/GSULogo.png"),
      date: "January 2025 – May 2025",
      descBullets: [
        "Built a panel dataset combining Medicare claims with county-level health data",
	"Designed pipelines integrating HCPCS codes and health indicators",
	"Delivered insights on telehealth and AI usage in U.S. healthcare"
      ]
    },
    {
      role: "Graduate Research Assistant",
      company: "Better Business Bureau",
      companylogo: require("./assets/images/BBBLogo.png"),
      date: "August 2024 – December 2024",
      descBullets: [
        "Developed ML model to predict business accreditation, improving accuracy by 25%",
	"Performed sentiment analysis using NLP on external media sources",
	"Automated 40% of workflows and led a cross-functional team of 10+ members"
      ]
    },
    {
      role: "Software Consultant",
      company: "Mercedes Benz",
      companylogo: require("./assets/images/MBLogo.png"),
      date: "August 2022 – August 2024",
      descBullets: [
        "Built and optimized ETL pipelines (Python, SQL) for large-scale data processing",
	"Created Kafka-based event-driven architectures for real-time analytics",
	"Integrated REST APIs and deployed Kubernetes-based microservices",
	"Managed CI/CD pipelines using Azure DevOps, improving release efficiency by 35%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/NetflixLogo.png"),
      projectName: "Netflix Data Engineering Pipeline",
      projectDesc: "Built a cloud-based, end-to-end data pipeline to process and analyze Netflix data using Azure services. The solution automates data ingestion, transformation, and validation across raw, processed, and curated layers.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/sowmyaraghu19/Netflix-Data-Pipeline"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/USAacciLogo.png"),
      projectName: "USA Accident Severity Prediction",
      projectDesc: "Built a machine learning solution to predict traffic accident severity across the U.S. using environmental, temporal, and location-based data from over 2.8 million accident records. The goal was to improve emergency response efficiency and guide infrastructure planning.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/sowmyaraghu19/US-Accidents-Severity-Prediction"
        }
      ]
    },
    {
      image: require("./assets/images/legaldoc.png"),
      projectName: "LegalDoc AI Assistant",
      projectDesc: "LegalDoc AI Assistant is a Streamlit app that helps legal professionals generate documents and gain case insights using AI, NLP, and RAG. It turns unstructured legal input into structured outputs, suggests arguments, and answers legal queries to streamline case preparation.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/sowmyaraghu19/Legal-Doc-AI-Assistant"
        }
      ]
    },
    {
      image: require("./assets/images/Dashboard.png"),
      projectName: "Vehicle Recommendation Engine",
      projectDesc: "The Vehicle Recommendation Engine project involves an interactive Power BI dashboard to provide actionable insights for the automotive sales domain. This dashboard is designed to enhance user engagement and drive sales by leveraging data-driven analytics.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/sowmyaraghu19/Vehicle-Recommendation-Engine"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(470)-680-5113",
  email_address: "sowmyaraghu1901@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
