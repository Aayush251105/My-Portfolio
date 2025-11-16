export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I enjoy learning new technologies and constantly improving myself ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to roles and opportunities across India",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently exploring the world of AI/ML",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "VidTube - AI",
    des: "AI media platform with auto-compression, smart previews, and subject aware aspect-ratio correction using Cloudinary AI.",
    img: "/VidTube 1.png",
    iconLists: [
      "/cloud.svg",
      "/c.svg",
      "/vercel1.svg",
      "/neon-icon-logo.svg",
      "/tail.svg",
    ],
    link: "https://vid-tube-ai.vercel.app/",
  },
  {
    id: 2,
    title: "QuestFlow",
    des: "Q&A platform with posting, answering, voting, and activity dashboards along with a reputation and leaderboard system.",
    img: "/Questflow 1.png",
    iconLists: ["/next.svg", "/tail.svg", "/re.svg", "/shadcn.svg", "/app.svg"],
    link: "https://github.com/Aayush251105/Proj-QuestFlow",
  },
  {
    id: 3,
    title: "My Portfolio",
    des: "A modern portfolio website built with Next.js, featuring a clean UI, smooth animations, and optimized performance.",
    img: "/portfolio 1.png",
    iconLists: [
      "/next.svg",
      "/shadcn.svg",
      "/ts.svg",
      "/tail.svg",
      "/sentry-original-logo.svg",
    ],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "FiTrack",
    des: "Gym and sports facility management system with plan/court bookings and admin dashboards.",
    img: "/fiTrack 1.png",
    iconLists: [
      "/nodejs.svg",
      "/tail.svg",
      "/js.svg",
      "/bootstrap2.svg",
      "/mysql.svg",
    ],
    link: "https://github.com/Aayush251105/FiTrack",
  },
];

export const testimonials = [
  {
    quote: "Shiv Nadar University",
    name: "CGPA: 9.17",
    title: "Aug 2023 - May 2027",
  },
  {
    quote: "Dean's List",
    name: "Shiv Nadar University",
    title: "Monsoon 2023, Spring 2024",
  },
  {
    quote: "Google AI Essentials",
    name: "Coursera ",
    title: " Amanda Brophy ",
  },
  {
    quote: "The Complete Python Bootcamp From Zero to Hero",
    name: "Udemy",
    title: "Jose Portilla",
  },
  {
    quote: "Sigma 7.O (DSA + Development)",
    name: "Apna College",
    title: "Shraddha Khapra",
  },
  {
    quote: "Google Cybersecurity Professional",
    name: "Coursera",
    title: "Amanda Brophy",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "SENTRY",
    img: "/sentry-original-logo.svg",
    nameImg: "/sentryname.svg",
  },
  // {
  //   id: 4,
  //   name: "MongoDB",
  //   img: "/mongo-svgrepo-com.svg",
  //   nameImg: "/mongodb-logo-cropped.svg",
  // },
  {
    id: 4,
    name: "clerk",
    img: "/clerk.svg",
    nameImg: "/clerkName.svg",
  },
  {
    id: 5,
    name: "Vercel",
    img: "/vercel1.svg",
    nameImg: "/vercelname1.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "DX - EDGE Internship",
    desc: "Supported MSMEs in adopting digital solutions, improving their online operations and overall digital readiness.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: " PR Lead - ACM Chapter",
    desc: "Managed PR campaigns and outreach for technical workshops, increasing student participation by 20%.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Fundraising Intern - Pawzz Foundation",
    desc: "Raised ₹5,000+ for animal welfare through digital campaigns.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Sales & Marketing Intern - Skillarena.in",
    desc: "Onboarded users and promoted EdTech services.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Aayush251105",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/aayushh.x._/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aayush-gupta-b6066b290/",
  },
];
