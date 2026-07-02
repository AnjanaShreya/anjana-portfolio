import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const PROJECTS = [
  {
    title: "BlogPage Website",
    image: "/assets/proj1.png",
    year: "2025",
    description: "A full-stack publishing and editorial workflow platform where users can submit articles, receive feedback, revise content, and publish through a structured admin moderation system. Features include JWT authentication, review workflows, email notifications, categorized content management, protected admin dashboards, and a fully responsive modern UI.",
    tags: ["React", "TypeScript", "SCSS", "NodeJs", "MongoDB"],
    demoUrl: "https://legal-writing-blogpage.vercel.app/",
    githubUrl: "#",
    paperUrl: "#",
    featured: true,
    badges: ["⭐ Featured Project", "🚀 Live App"],
  },
  {
    title: "Employee Management and Monitering Portal",
    image: "/assets/proj3.png",
    year: "2025",
    description: "Developed an employee monitoring website which aims to provide a centralized platform to small organizations which saves time and provides user friendly approach",
    tags: ["NodeJS", "MongoDB", "ReactJS", "TypeScript", "REST APIs"],
    demoUrl: "#",
    githubUrl: "#",
    paperUrl: "#",
    featured: false,
    badges: [],
    metrics: []
  },
  {
    title: "Chatbot",
    image: "/assets/proj2.png",
    year: "2025",
    description: "Designed and implemented a user friendly chatbot interface with a sleek, responsive layout, enhancing user interaction and engagement.",
    tags: ["React", "JavaScript", "REST APIs"],
    demoUrl: "https://trustworthy-ai-tawny.vercel.app/",
    githubUrl: "#",
    paperUrl: "#",
    featured: true,
    badges: [],
    metrics: []
  },
  {
    title: "Personalized Website",
    image: "/assets/proj4.png",
    year: "2024",
    description: "Developed a personal website for a professor which showcases the professor's research work and provides information about their academic background. It also includes the couses, course structure and the course materials taught by the professor.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://anjanashreya.github.io/Personal-Website/",
    githubUrl: "#",
    paperUrl: "#",
    featured: false,
    badges: [],
    metrics: []
  },
  {
    title: "Website for Organisation of Researched Information",
    image: "/assets/proj5.png",
    year: "2024",
    description: "Developed a centralized website to organize and present all the information collected for the IKS project. The platform ensures structured data management and provides easy accessibility for users to explore resources.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://anjanashreya.github.io/webpage-iks/",
    githubUrl: "#",
    paperUrl: "#",
    featured: false,
    badges: [],
    metrics: []
  }
];

const INTERNSHIPS = [
  {
    num: "01",
    company: "Hivel",
    role: "Frontend Developer",
    duration: "Jun 2025 - Mar 2026",
    details: [
      "Built real-time, data-driven dashboards handling dynamic and streaming data in production environments using Material Icons.",
      "Implemented efficient state management using Redux Toolkit (RTK Query) for scalable application flows.",
      "Integrated GraphQL APIs, REST APIs, and WebSockets for real-time data synchronization.",
      "Designed and optimized interactive data visualizations for performance and usability.",
      "Wrote and maintained test cases to ensure application reliability and stability.",
      "Debugged and resolved complex issues in production systems.",
      "Contributed to complex, real-time interactive features including chatbot workflows and configuration-driven systems impacting overall application behavior."
    ],
    tags: ["React", "TypeScript", "NodeJS", "SCSS", "Redux Toolkit", "RTK Query", "GraphQL", "WebSockets", "Material UI", "HighCharts", "Rsuite", "Jest and RTL"]
  },
  {
    num: "02",
    company: "Edgeforce Solutions",
    role: "Frontend Developer Intern",
    duration: "Jan 2025 - May 2025",
    details: [
      "Built responsive and high-performance frontend applications using React, focusing on usability and smooth user experience.",
      "Developed and visualized real-time sensor data systems, processing live data from AWS-based systems.",
      "Implemented data processing and event-detection logic for wearable-based tracking systems (timing, activity detection, user-device mapping).",
      "Integrated frontend with backend services using REST APIs, with exposure to Node.js, MongoDB, and AWS serverless (Lambda, DynamoDB, S3)."
    ],
    tags: ["React", "ViteJS", "NodeJS", "MongoDB", "AWS Serverless", "REST APIs", "AWS S3"]
  },
  {
    num: "03",
    company: "Edgeforce Solutions",
    role: "Frontend Developer Intern",
    duration: "Jun 2024 - Sept 2024",
    details: [
      "Engineered dynamic analytics dashboards and robust administrator interfaces to manage sensor telemetry data, facilitating real-time tracking, retrieval, and trend analysis.",
      "Developed a comprehensive military vehicle management and fleet status system featuring component-level lifespan, manufacturing date, and usage condition analysis.",
      "Designed and implemented intelligent, priority-based automated alert systems to trigger immediate notifications for critical repairs, maintenance schedules, and fuel replenishment.",
      "Built secure operational modules allowing administrators to seamlessly register new fleet units and log inspection details, maintenance logs, and parts replacement records."
    ],
    tags: ["React", "TypeScript", "ViteJS", "Recharts", "Tailwind CSS", "REST APIs", "Dynamic Dashboards"]
  }
];

const EDUCATION = [
  {
    shortTitle: "B.Tech",
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Koneru Lakshmaiah Educational Foundation",
    duration: "2022 - 2026",
    degreeStream: "Computer Science & Engineering",
    description: "Pursuing a Bachelor's degree in Computer Science & Engineering with a strong focus on software development, system design, and modern web technologies. Built multiple full-stack applications, blockchain projects, and AI-powered solutions while continuously strengthening problem-solving and engineering skills.",
    learnings: [
      "Full-Stack Development",
      "Software Architecture",
      "Database Design",
      "Problem Solving",
      "System Design",
      "AI Integration"
    ],
    highlights: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "React",
      "Node.js",
      "TypeScript",
      "AI & Automation"
    ],
    snapshot: [
      "Built 5+ projects",
      "Explored MERN stack development",
      "Worked on Blockchain applications",
      "Developed AI-powered tools",
      "Strengthened problem-solving skills"
    ],
    metrics: [
      "CGPA|8.75",
      "Duration|4 Years",
      "Projects|5+",
      "Focus|CSE"
    ]
  },
  {
    shortTitle: "Intermediate",
    degree: "Intermediate Class XII (MPC)",
    institution: "Shri Shiridi Sai Junior College",
    duration: "2020 - 2022",
    degreeStream: "MPC (Mathematics, Physics, Chemistry)",
    board: "BIEAP",
    description: "Developed a strong foundation in mathematics and science through the MPC curriculum. This phase strengthened analytical thinking, logical reasoning, and problem-solving abilities which later supported software engineering studies.",
    learnings: [
      "Mathematics Foundation",
      "Analytical Thinking",
      "Scientific Reasoning",
      "Physics Fundamentals",
      "Problem Solving"
    ],
    highlights: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Analytical Thinking",
      "Logical Reasoning"
    ],
    snapshot: [
      "Developed analytical thinking",
      "Built strong mathematics foundation",
      "Improved logical reasoning",
      "Strengthened scientific understanding"
    ],
    metrics: [
      "Percentage|65%",
      "Duration|2 Years",
      "Stream|MPC",
      "Board|BIEAP"
    ]
  },
  {
    shortTitle: "School",
    degree: "SSC Class X",
    institution: "Tripura English Medium School",
    duration: "Completed 2020",
    degreeStream: "Secondary Education",
    board: "CBSE",
    description: "Completed secondary education with a balanced academic foundation across mathematics, science, communication, and general studies. Developed discipline, learning habits, and curiosity that laid the groundwork for future technical education.",
    learnings: [
      "Academic Foundation",
      "Communication Skills",
      "Mathematics",
      "Science Fundamentals",
      "Learning Discipline"
    ],
    highlights: [
      "Mathematics",
      "Science",
      "English",
      "Social Science"
    ],
    snapshot: [
      "Built academic discipline",
      "Developed communication skills",
      "Established science foundation",
      "Strengthened learning habits"
    ],
    metrics: [
      "Percentage|77%",
      "Board|CBSE",
      "Completed|2020",
      "Level|Secondary"
    ]
  }
];

const CERTIFICATIONS = [
  {
    title: "Internshala Web Developer",
    image: "/assets/cert 1.png",
    issuer: "Internshala Trainings",
    year: "2024",
    type: "Professional Training",
    status: "Verified",
    duration: "6 Weeks",
    description: "Built production-ready frontend and web development skills using HTML, CSS, JavaScript, Bootstrap, React, REST APIs, and modern UI development practices.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    badges: ["✓ Verified", "Industry Credential", "Professional Training", "Completed"]
  },
  {
    title: "Aviatrix Multicloud Network",
    image: "/assets/cert-3.png",
    issuer: "Aviatrix",
    year: "2025",
    type: "Technical Certification",
    status: "Credential Active",
    duration: "Self-Paced",
    description: "Developed practical expertise in multicloud networking, cloud transit architectures, AWS connectivity, Azure integration, network security, and scalable cloud infrastructure design.",
    skills: ["Cloud Networking", "Multi-Cloud Security", "AWS/Azure Transit"],
    badges: ["✓ Verified", "Industry Credential", "Technical Certification", "Active"]
  },
  {
    title: "Mathworks Onramp",
    image: "/assets/cert-2.png",
    issuer: "MathWorks",
    year: "2024",
    type: "Academic Certification",
    status: "Completed",
    duration: "3 Weeks",
    description: "Strengthened MATLAB programming fundamentals, data visualization techniques, numerical computation workflows, and analytical problem-solving skills used in engineering applications.",
    skills: ["MATLAB Scripting", "Data Analysis", "Numerical Visualization"],
    badges: ["✓ Verified", "Academic Credential", "Academic Certification", "Completed"]
  }
];

async function main() {
  console.log("Seeding database...");

  // Seed Admin
  const adminCount = await prisma.adminUser.count();
  if (adminCount === 0) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash("admin123", salt);
    await prisma.adminUser.create({
      data: {
        username: "admin",
        passwordHash
      }
    });
    console.log("Created default admin user (admin / admin123)");
  }

  // Seed Projects
  await prisma.project.deleteMany();
  for (const [index, p] of PROJECTS.entries()) {
    await prisma.project.create({
      data: {
        ...p,
        order: index
      }
    });
  }
  console.log(`Created ${PROJECTS.length} projects`);

  // Seed Education
  const educationCount = await prisma.educationItem.count();
  if (educationCount === 0) {
    for (const [index, edu] of EDUCATION.entries()) {
      await prisma.educationItem.create({
        data: {
          ...edu,
          order: index
        }
      });
    }
    console.log(`Created ${EDUCATION.length} education items`);
  }

  // Seed Certifications (Insights)
  const insightsCount = await prisma.insight.count();
  if (insightsCount === 0) {
    for (const [index, cert] of CERTIFICATIONS.entries()) {
      await prisma.insight.create({
        data: {
          ...cert,
          order: index
        }
      });
    }
    console.log(`Created ${CERTIFICATIONS.length} certification items`);
  }

  // Seed Internships
  const internshipCount = await prisma.internship.count();
  if (internshipCount === 0) {
    for (const [index, intern] of INTERNSHIPS.entries()) {
      await prisma.internship.create({
        data: {
          ...intern,
          order: index
        }
      });
    }
    console.log(`Created ${INTERNSHIPS.length} internships`);
  }

  // Seed default section toggles and hero content
  const defaultSiteContent = [
    { key: 'toggle_experience', value: 'true' },
    { key: 'toggle_projects', value: 'true' },
    { key: 'toggle_certifications', value: 'true' },
    { key: 'toggle_education', value: 'true' },
    { key: 'toggle_skills', value: 'true' },
    { key: 'toggle_achievements', value: 'true' },
    { key: 'section_order', value: 'about,experience,skills,projects,education,certifications,achievements,game,contact' },
    { key: 'hero_subtitle', value: 'Frontend Developer' },
    { key: 'hero_title_part1', value: 'Building software for' },
    { key: 'hero_title_part2', value: 'real-world problems.' },
    { key: 'hero_description', value: 'Computer Science Engineering graduate with hands-on experience building full-stack applications, AI-powered tools, and business-focused web solutions. Passionate about creating impactful products and continuously expanding my technical expertise.' },
    { key: 'hero_ticker_words', value: 'SOFTWARE ENGINEER, TYPESCRIPT, FULL STACK, PROBLEM SOLVER, LEARNER, BUILDER' },
    { key: 'hero_bg_words', value: 'ANJANA, SHREYA, ' },
    { key: 'hero_projects_text', value: 'View Projects' },
    { key: 'hero_projects_url', value: '#works' },
    { key: 'hero_resume_text', value: 'Download Resume' },
    { key: 'hero_resume_url', value: '' },
    { key: 'hero_linkedin_text', value: 'Connect on LinkedIn' },
    { key: 'hero_linkedin_url', value: 'https://www.linkedin.com/in/ch-s-anjana-shreya-68a74628a' },
    { key: 'hero_github_url', value: 'https://github.com/AnjanaShreya' },
    { key: 'hero_email_url', value: 'chitturianjana@gmail.com' },
    { key: 'about_title', value: 'Translating curiosity and engineering concepts into practical tools.' },
    { key: 'about_description', value: 'As a Computer Science Engineering graduate, I focus on learning through direct implementation. I have hands-on experience building full-stack web applications and experimenting with AI and automation projects to create practical software. By focusing on clean code, modern tech stacks like MERN and TypeScript, and hands-on development, I aim to develop tools that address real-world business and user needs.' },
    { key: 'about_profile_pic_url', value: '' },
    { key: 'about_highlight_projects', value: '5+ Projects Built' },
    { key: 'about_highlight_tech', value: 'MERN • TypeScript' },
    { key: 'about_highlight_status', value: 'Open to Opportunities' },
    { key: 'skills_data', value: '[{"id":"frontend","title":"Frontend Development","iconName":"code","skills":[{"name":"React","iconName":"react","color":"#61DAFB"},{"name":"TypeScript","iconName":"typescript","color":"#3178C6"},{"name":"JavaScript","iconName":"javascript","color":"#F7DF1E"},{"name":"Tailwind CSS","iconName":"tailwind","color":"#06B6D4"}]},{"id":"backend","title":"Backend Development","iconName":"server","skills":[{"name":"Node.js","iconName":"nodejs","color":"#339933"},{"name":"Express.js","iconName":"express","color":"#E0E0E0"}]},{"id":"database","title":"Database Management","iconName":"database","skills":[{"name":"MongoDB","iconName":"mongodb","color":"#47A248"},{"name":"MySQL","iconName":"mysql","color":"#4479A1"}]},{"id":"blockchain","title":"Blockchain & Web3","iconName":"shield","skills":[{"name":"Solidity","iconName":"solidity","color":"#AAAEB0"},{"name":"Ethereum","iconName":"ethereum","color":"#627EEA"},{"name":"Hardhat","iconName":"hardhat","color":"#FFF100"},{"name":"MetaMask","iconName":"metamask","color":"#F6851B"}]},{"id":"ai","title":"AI & Automation","iconName":"cpu","skills":[{"name":"OpenAI","iconName":"openai","color":"#10A37F"}]},{"id":"tools","title":"Developer Tools","iconName":"wrench","skills":[{"name":"Git","iconName":"git","color":"#F05032"},{"name":"GitHub","iconName":"github","color":"#FFFFFF"},{"name":"VS Code","iconName":"vscode","color":"#007ACC"},{"name":"Postman","iconName":"postman","color":"#FF6C37"}]}]' },
    { key: 'contact_availability_status', value: 'Available for Opportunities' },
    { key: 'contact_availability_color', value: 'green' },
    { key: 'contact_response_time', value: '< 24 Hours' },
    { key: 'contact_location', value: 'Hyderabad, India' },
    { key: 'contact_focus_tags', value: 'Full Stack Development, AI-Powered Applications' },
    { key: 'contact_preferred_roles', value: 'Software Engineer, Frontend Engineer, Full Stack Developer' },
    { key: 'contact_email', value: 'chitturianjana@gmail.com' },
    { key: 'contact_phone', value: '+91 7013612696' },
    { key: 'contact_address', value: 'Hyderabad, Telangana, India' },
    { key: 'contact_footer_title', value: "Let's Build Something Exceptional Together" },
    { key: 'contact_footer_subtitle', value: 'Available for Opportunities in Software Engineering & Full Stack Development' },
    { key: 'contact_consultations_label', value: '// CONSULTATIONS' },
    { key: 'contact_consultations_title', value: "Let's talk\nabout your\nproject." },
    { key: 'contact_consultations_description', value: 'Have an idea, brief, or active technical requirement? Drop me a message or write directly to my inbox. I usually reply within 24 hours.' },
    { key: 'education_list', value: '[{"degree":"Bachelor of Technology (B.Tech)","college":"Koneru Lakshmaiah Educational Foundation","institution":"Computer Science & Engineering","period":"2021 - 2025","grade":"7.0 CGPA","details":["Specialized in Software Engineering and Modern Web Architectures.","Hands-on coursework in Data Structures, Algorithms and DBMS."],"academicFocus":[{"title":"Software Engineering & Architecture","desc":"Object-oriented design patterns, software testing, systems analysis, and modular application development."},{"title":"Advanced Web Technologies","desc":"Full-stack development ecosystems, single-page application architectures, and client-side performance engineering."},{"title":"Algorithmic Problem Solving","desc":"Analyzing algorithm complexities, optimizing runtime efficiency, and structured data structure design."}],"courseworkTags":["Data Structures","Algorithms","DBMS","OOPs","Software Eng.","Web Technologies","Computer Networks","Operating Systems"]},{"degree":"Intermediate Class XII (MPC)","college":"Shri Shiridi Sai Junior College","institution":"MPC (Mathematics, Physics, Chemistry)","period":"2019 - 2021","grade":"65%","details":["Developed a strong foundation in mathematics and analytical reasoning.","Focused on calculus, algebra, classical mechanics, and chemistry lab practicals."],"academicFocus":[{"title":"Mathematics & Calculus","desc":"Differential and integral calculus, complex numbers, matrices, and coordinate geometry."},{"title":"Physical Sciences","desc":"Classical mechanics, electromagnetism, thermodynamics, and organic/inorganic chemistry reactions."}],"courseworkTags":["Mathematics","Physics","Chemistry","Calculus","Algebra"]},{"degree":"Secondary School Certificate (Class X)","college":"Tripura English Medium School","institution":"Secondary Education","period":"Completed 2019","grade":"77%","details":["Completed secondary education with CBSE board syllabus.","Participated in school athletics, science exhibitions, and speech competitions."],"academicFocus":[{"title":"Science & Social Studies","desc":"Foundational sciences (physics, chemistry, biology) and social history/geography metrics."},{"title":"Communication & Language","desc":"English grammar, literature, public writing, and general presentation skills."}],"courseworkTags":["Mathematics","Science","English","Social Science","CBSE Curriculum"]}]' }
  ];

  await prisma.siteContent.deleteMany({
    where: {
      key: {
        in: ['education_list', 'academic_focus', 'coursework_tags']
      }
    }
  });

  for (const t of defaultSiteContent) {
    const exists = await prisma.siteContent.findUnique({ where: { key: t.key } });
    if (!exists) {
      await prisma.siteContent.create({ data: t });
    }
  }
  console.log("Seeded default section toggles");

  // Seed Achievements
  const achievementsCount = await prisma.achievement.count();
  if (achievementsCount === 0) {
    const ACHIEVEMENTS = [
      {
        tag: "🏅 STATE GOLD MEDAL",
        headline: "1.5 KM CHAMPION",
        subHeadline: "ATHLETICS • 2018",
        description: "Won a state-level gold medal in the 1.5km running event, demonstrating endurance, discipline, and competitive excellence.",
        category: "Athletics",
        skills: ["Discipline", "Competitive Mindset", "Endurance", "Goal Setting", "Resilience"],
        impact: "Maintained a rigorous daily training regime for 8 months. Pushed mental and physical boundaries to secure the 1st position among 45 elite state runners, establishing a foundation of relentless consistency.",
        iconName: "Trophy",
        bgPattern: "track",
        stats: ["State Level", "1.5 KM", "Gold Medal", "2018"],
        accentColor: "#FFD54F",
        shadowColor: "rgba(255, 213, 79, 0.12)"
      },
      {
        tag: "🥈 STATE SILVER MEDAL",
        headline: "100M SPRINT",
        subHeadline: "ATHLETICS • 2018",
        description: "Secured a state-level silver medal in the 100m sprint event through dedicated training and athletic performance.",
        category: "Athletics",
        skills: ["Focus", "Performance under pressure", "Explosive Power", "Precision", "Discipline"],
        impact: "Fine-tuned acceleration mechanics and block starts. Missed gold by a fraction of a second, teaching the valuable lesson of micro-optimizations and handling high-stakes execution margins.",
        iconName: "Medal",
        bgPattern: "track",
        stats: ["State Level", "100M Sprint", "Silver Medal", "2018"],
        accentColor: "#E2E8F0",
        shadowColor: "rgba(226, 232, 240, 0.08)"
      },
      {
        tag: "⚽ UNIVERSITY FOOTBALL",
        headline: "SOUTH ZONE REPRESENTATIVE",
        subHeadline: "SPORTS • KL UNIVERSITY",
        description: "Represented KL University in multiple football tournaments and participated in South Zone level competitions. Developed teamwork, leadership, strategic thinking, and resilience through competitive sports.",
        category: "Sports",
        skills: ["Teamwork", "Strategic Thinking", "Adaptability", "Communication", "Leadership"],
        impact: "Collaborated in defensive and offensive formations during high-pressure South Zone inter-university matches. Cultivated trust and rapid tactical decision-making with a 15-player squad.",
        iconName: "Users",
        bgPattern: "pitch",
        stats: ["South Zone", "University Team", "Multiple Tournaments"],
        accentColor: "#60A5FA",
        shadowColor: "rgba(96, 165, 250, 0.08)"
      },
      {
        tag: "👥 FOCUS CLUB LEAD",
        headline: "TECH & SOCIETY LEADERSHIP",
        subHeadline: "LEADERSHIP • FOCUS CLUB",
        description: "Led initiatives within the Focus Club's Tech & Society division, organizing activities, coordinating teams, and promoting discussions on technology and its societal impact.",
        category: "Leadership",
        skills: ["Leadership", "Team Coordination", "Public Speaking", "Event Management", "Societal Awareness"],
        impact: "Managed a sub-committee of 12 members to host panel discussions, workshops, and social awareness campaigns. Connected technical innovations with ethical responsibilities for 200+ student attendees.",
        iconName: "UserCheck",
        bgPattern: "network",
        stats: ["Focus Club", "Tech & Society Lead", "Student Leadership"],
        accentColor: "#34D399",
        shadowColor: "rgba(52, 211, 153, 0.08)"
      }
    ];

    for (const [index, ach] of ACHIEVEMENTS.entries()) {
      await prisma.achievement.create({
        data: {
          ...ach,
          order: index
        }
      });
    }
    console.log(`Created ${ACHIEVEMENTS.length} achievements`);
  }

  console.log("Database seeding completed.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
