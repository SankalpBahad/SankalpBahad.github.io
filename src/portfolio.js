/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

// const splashScreen = {
//   enabled: true, // set false to disable splash screen
//   animation: splashAnimation,
//   duration: 2000 // Set animation duration as per your animation
// };

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sankalp Bahad",
  title: "Hi everyone! I am Sankalp",
  subTitle: emoji(
    "Passionate NLP researcher and backend developer, focused on building multilingual language technologies while designing scalable, reliable systems that deliver real-world impact by bridging cutting-edge research with practical engineering."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1y4hUc_1JW9Fn7TjJlqd-PLsIbebyDJBi/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SankalpBahad",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "sankalpsbahad@gmail.com",
  medium: "https://medium.com/@sankalpbahad",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Researcher & Developer dedicated to solving global challenges in NLP and AI.",
  skills: [
    emoji("🚀 Skilled in developing and fine-tuning models for language understanding and generation."),
    emoji("🚀 Experienced in building scalable, efficient, and reliable server-side applications."),
    emoji("🚀 Strong background in conducting applied research and translating findings into real-world solutions.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML"
    },
    {
      skillName: "CSS"
    },
    {
      skillName: "JavaScript"
    },
    {
      skillName: "React.js"
    },
    {
      skillName: "Node.js"
    },
    {
      skillName: "Python"
    },
    {
      skillName: "PyTorch"
    },
    {
      skillName: "Hugging Face"
    },
    {
      skillName: "NumPy"
    },
    {
      skillName: "Matplotlib"
    },
    {
      skillName: "C++"
    },
    {
      skillName: "C"
    },
    {
      skillName: "Java"
    },
    {
      skillName: "Rust"
    },
    {
      skillName: "MongoDB"
    },
    {
      skillName: "SQL"
    },
    {
      skillName: "Git"
    },
    {
      skillName: "Github"
    },
    {
      skillName: "Bash"
    },
    {
      skillName: "LaTeX"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "International Institute of Information Technology, Hyderabad",
      logo: require("./assets/images/iiithLogo.png"),
      subHeader: "B Tech in Computer Science and M.S. in Computational Linguistics",
      duration: "2021 - 2026",
      desc: "Grade: 7.63",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI and Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Intern",
      company: "LinkedIn",
      companylogo: require("./assets/images/linkedinLogo.png"),
      date: "May 2025 – July 2025",
      desc: "Worked as a Software Development Intern at Linkedin in the Systems Infrastructure team.",
      descBullets: [
        "I focused on improving schema flexibility for backward compatibility, which significantly reduced migration time and development efforts.",
        "Additionally, I implemented validations in query authoring, ensuring better error handling and user experience."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Stealth Startup",
      companylogo: require("./assets/images/stealthstartupLogo.png"),
      date: "January 2023 – April 2023",
      desc: "Developed a full-stack P2P Video Chat application.",
      descBullets: [
        "Implemented real-time video/audio calling with WebRTC and chat functionality using Socket.io.",
        "Integrated user authentication, MongoDB for data persistence, and ImageKit for image handling."
      ]
    },
    {
      role: "Undergraduate Researcher",
      company: "LTRC, IIITH",
      companylogo: require("./assets/images/iiithLogo.png"),
      date: "June 2023 – Present",
      desc: "Working as an undergraduate researcher with Dr Parameswari Krishnamurthy, on sequence labelling tasks including Named Entity Recognition and Coreference Resolution and their application in major NLP tasks.",
      descBullets: [
        "Explored available datasets and models and current work on Named Entity Recognition in Indian Languages.",
        "Filtered relevant NER tags and released a gold annotated corpus for four Indian languages based on a refined label list.",
        "Fine-tuned Bert-based models for experimentation boosting the evaluation metrics and achieving results close to 80%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const publicationSection = {
  title: emoji("Publications"),
  // subtitle:
  // "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Fine-tuning Pre-trained Named Entity Recognition Models For Indian Languages",
      subtitle:
        "Developed a Multilingual Named Entity Recognition system for Indian languages, using transfer learning. Created a human-annotated corpus of 40K sentences and fine-tuned a multilingual model achieving an F1 score of 0.80, demonstrating performance on unseen benchmarks.",
      footerLink: [
        {
          name: "Paper Link",
          url: "https://aclanthology.org/2024.naacl-srw.9.pdf"
        },
      ]
    },
    {
      title: "Fine-tuning Language Models for AI vs Human Generated Text detection",
      subtitle:
        "Developed a machine-generated text detection system using a fine-tuned RoBERTa Base model. This system effectively detects machine-generated text across diverse domains and languages, contributing to misinformation mitigation.",
      footerLink: [
        {
          name: "Paper Link",
          url: "https://aclanthology.org/2024.semeval-1.132.pdf"
        },
      ]
    },
    {
      title: "Numerical Reasoning and Headline Generation",
      subtitle:
        "Developed and assessed tasks to evaluate numeral awareness in NLP. Evaluated approaches and analyzed team strategies, highlighting performance of emerging models and identifying future research directions.",
      footerLink: [
        {
          name: "Paper Link",
          url: "https://aclanthology.org/2024.semeval-1.131.pdf"
        },
      ]
    },
    {
      title: "Hallucinations and Related Observable Overgeneration Mistakes Detection",
      subtitle:
        "Investigated semantic hallucination detection using the SHROOM dataset across various NLG tasks. Results showed effectiveness in identifying hallucinations, emphasizing the importance of robust detection mechanisms for accurate language generation.",
      footerLink: [
        {
          name: "Paper Link",
          url: "https://aclanthology.org/2024.semeval-1.139.pdf"
        },
      ]
    },
    {
      title: "Decoding Fake Narratives in Spreading Hateful Stories: A Dual-Head RoBERTa Model with Multi-Task Learning",
      subtitle:
        "Developed a system for the Faux-Hate shared task to detect fake-narrative-driven hate speech in Hindi-English text. Utilizing advanced NLP, domain-specific pre-training, and a multi-task learning framework, the system achieved competitive results in binary detection and predicting content target/severity.",
      footerLink: [
        {
          name: "Paper Link",
          url: "https://aclanthology.org/2024.icon-fauxhate.3.pdf"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const achievementSection = {
  title: emoji("Achievements"),

  achievementsCards: [
    {
      subtitle: "Research Awardee 2024 - Recognized for innovative work in Computational Linguistics and NLP field.",
      title: "",
      footerLink: []
    },
    {
      subtitle: "Recorded 250+ downloads on the NER fine-tuned Huggingface Models",
      title: "",
      footerLink: []
    },
    {
      subtitle: "Showcased Named Entity Recognition research at NAACL-SRW-2024, introducing new techniques in the computational linguistics field.",
      title: "",
      footerLink: []
    },
    {
      subtitle: "Presented work at the ICON-2023 conference, contributing to the task of disfluency identification.",
      title: "",
      footerLink: []
    },
    {
      subtitle: "Selected for prestigious Amazon ML Summer School 2024, enhancing expertise in advanced machine learning techniques from industry experts.",
      title: "",
      footerLink: []
    },
    {
      subtitle: "Project Mentor at IASNLP Summer School and Speaker at IASNLP Preschool, 2024. Co-Presenter for Intro to Programming Session.",
      title: "",
      footerLink: []
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Here are some of the blogs written by me on some cool stuff I love to explore!",
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
  display: true // Set false to hide this section, defaults to true
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
  subtitle:"",
  number: "+92-0000000000",
  email_address: "sankalpsbahad@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SankalpBahad", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  publicationSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
