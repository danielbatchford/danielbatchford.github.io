import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 500
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Daniel Batchford",
  title: "Hi, I'm Daniel",
  subTitle:
    "I'm a Software Engineer with a solid foundation in computer science & hands-on experience in high-pressure environments. I'm passionate about software development & eager to embrace new challenges that foster professional growth.",
  resumeLink:
    "https://drive.google.com/file/d/1PH1vACIyVsGPjEEtUAQVmFMCz2DqutbU/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/danielbatchford",
  linkedin: "https://www.linkedin.com/in/daniel-batchford/",
  gmail: "danielbatchford@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    ".NET Core & .Net Framework",
    "WPF (Windows Presentation Foundation)",
    "Microsoft SQL Server",
    "Docker & Kubernetes",
    "CI / CD with Azure DevOps"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: ".NET",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "ASP .NET Core",
      fontAwesomeClassname: "fa solid fa-globe"
    },
    {
      skillName: "WPF",
      fontAwesomeClassname: "fab fa-wpforms"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fa solid fa-dharmachakra"
    },
    {
      skillName: "SQL Server",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fa solid fa-cloud"
    },
    {
      skillName: "gRPC",
      fontAwesomeClassname: "fa solid fa-arrow-right"
    },
    {
      skillName: "Azure DevOps",
      fontAwesomeClassname: "fa solid fa-code"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fa solid fa-code-branch"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fa solid fa-infinity"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Birmingham",
      logo: require("./assets/images/uobLogo.png"),
      subHeader: "BsC Computer Science with an Industrial Year",
      duration: "September 2019 - July 2023",
      desc: "Graduated with a First Class Honours.",
      descBullets: [
        "Neural Computation",
        "Natural Language Processing",
        "Mobile & Ubiquitous Computing",
        "Human Computer Interaction"
      ]
    },
    {
      schoolName: "Kings College London Mathematics School",
      logo: require("./assets/images/kclmsLogo.jpg"),
      subHeader: "Sixth Form",
      duration: "September 2017 - July 2019",
      descBullets: [
        "A*: A Level Mathematics",
        "A*: A Level Further Mathematics",
        "A*: A Level Physics",
        "A: AS Level Computer Science"
      ]
    },
    {
      schoolName: "Farringtons School",
      logo: require("./assets/images/farringtonsLogo.jpg"),
      subHeader: "Secondary School",
      duration: "September 2005 - July 2017",
      descBullets: [
        "7A*'s & 4 A's",
        "A* in Mathematics & English Language",
        "Academic Scholarship - 2012 - 2017",
        "Mathematics Excellence Award x5"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: ".NET Core / Framework",
      progressPercentage: "90%"
    },
    {
      Stack: "ASP.NET Core",
      progressPercentage: "80%"
    },
    {
      Stack: "WPF (Windows Presentation Foundation)",
      progressPercentage: "75%"
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    },
    {
      Stack: "Azure DevOps",
      progressPercentage: "60%"
    },
    {
      Stack: "SQL Server",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false,
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Red Bull Racing",
      companylogo: require("./assets/images/RBRLogo.png"),
      date: "May 2023 – March 2025",
      desc: "Software Engineer, providing internal tooling to aid car performance for the wider team.",
      descBullets: [
        "Developed internal ASP.Net Core API's for the vehicle performance group.",
        "Created, maintained and deployed WPF applications used for internal tooling.",
        "Improved real-time software used by the race strategy group and external clients.",
        "Implemented client requests for a legacy .NET framework application.",
        "Created and upgraded ASP.NET Core CI/CD Azure pipelines, deployed as Docker images to a Kubernetes cluster.",
        "Actively engaged in code reviews and testing processes, ensuring high coding standards and reliability of the group's software."
      ]
    },
    {
      role: "Aero Performance Engineer Intern",
      company: "Scuderia Alpha Tauri",
      companylogo: require("./assets/images/SATLogo.png"),
      date: "July 2021 – July 2022",
      desc: "13 month industrial placement in the Aerodynamics Performance Group developing analysis software.",
      descBullets: [
        "Developed a WPF desktop application which processed data from the track, wind tunnel and computational fluid dynamics in a real time context.",
        "Created bespoke plotting tools for the aerodynamics performance group to visualise data from a number of sources.",
        "Integrated and transformed large datasets from internal API's into a visual format used in the wider performance group.",
        "Managed the software life-cycle of applications, from the initial planning phase to deployment.",
        "Created CI/CD pipelines to automate software deployment."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects

const bigProjects = {
  title: "Projects",
  subtitle: "Projects",
  projects: [],
  display: false
};

// Achievement Section

const achievementSection = {
  title: "Dissertation",
  subtitle: "Formula One Historic Race Strategy Viewer & Model",

  achievementsCards: [
    {
      title: "WhatIfF1",
      subtitle:
        "WhatIfF1 is a Formula 1 post race strategy tool which allows alternate tyre strategies and scenarios to be modelled and analysed.",
      image: require("./assets/images/WhatIfF1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Report",
          url: "https://drive.google.com/file/d/1lp4KjNkhlgvyfC1Px_MAAZHDlQKkypxD/view?usp=sharing"
        },
        {
          name: "Source Code",
          url: "https://github.com/danielbatchford/WhatIF1"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Blogs.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: "Talks",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: "Podcast",
  subtitle: "Podcast",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "CV",
  subtitle: "My CV can be found here.",
  display: true
};

const contactInfo = {
  title: "Contact Information",
  subtitle: "I can be reached on GitHub, LinkedIn or via email.",
  email_address: "danielbathford@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

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
