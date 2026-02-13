export const projectsData = [
  {
    id: "trail-tuned",
    title: "TrailTuned",
    gitLink: "https://github.com/NickLamp44/TrailTuned",
    liveLink: "https://trail-tuned.vercel.app/",
    about:
      "TrailTuned is a full-stack Progressive Web App that helps mountain bikers take a structured, data-driven approach to suspension tuning. Instead of relying on memory or scattered notes, riders can log precise fork and shock settings, track changes over time, and connect those adjustments to real-world ride data.",
    stack: ["Next.js", "SupaBase", "TypeScript", "Tailwind", "strava.api"],
    img: "/trailTuned.png",
    buildProcess:
      "Started as a passion project to solve my own mountain biking problems. I designed the database schema to handle complex suspension data, integrated with the Strava API for ride data correlation, and built the UI with Next.js and Tailwind for optimal performance on mobile devices during rides.",
    challenges:
      "The main challenge was creating an accurate dataset that contained hundreds of Suspension components all with varying specifications for their Manufacturer, Year, Model, Damper model, Spring Types, Spring Rates, Secondary Spring Rates, Volume Reducers, Compression/Rebound Adjustments and Secondary Compression Adjustments. I was able to leverage AI to help streamline this process by creating an inital data set. And then cross refernced this list with avaliable manufacturer data to ensure data accuracy. This was the most time consuming aspect as my inital data set had over 200+ entries with many, many more to come.",
    keyFeatures: [
      "Unlimted Bike Garage Spaces",
      "Setup Version History",
      "Strava API integration",
      "Progressive Web App capabilities",
      "Mobile-optimized interface",
      "Data visualization",
    ],
  },
  {
    id: "nicksflix",
    title: "NicksFlix",
    gitLink: "https://github.com/NickLamp44/nicks-flix",
    liveLink: "https://nicksflix.netlify.app/",
    about:
      "My first slayed dragon... introduced me to MongoDB, Heroku, React, Angular and so much more.",
    stack: [
      "React",
      "Angular",
      "Javascript",
      "MongoDB",
      "Heroku",
      "API Requests",
      "Render",
      "Netlify",
    ],
    img: "/nicks-flix.png",
    buildProcess:
      "NicksFlix was my first proper introduction to full-stack development. I built versions using both React and Angular to learn different the frameworks, integrated MongoDB for persistent data storage, and deployed to both Heroku and Netlify to understand various hosting solutions. This project was instrumental in building my foundation as a full-stack developer.",
    challenges:
      "Understanding how to structure a database, manage API requests properly, and deploying to different platforms taught me valuable lessons about scalability and best practices.",
    keyFeatures: [
      "Movie database with search",
      "User ratings and reviews",
      "Multiple framework implementations",
      "Cross-platform deployment",
      "API integration",
    ],
  },
  {
    id: "bike-bench",
    title: "The Bike Bench",
    gitLink: "https://github.com/NickLamp44/tool-box-warz",
    liveLink: "https://the-bike-bench.vercel.app/",
    about:
      " The Bike Bench is a space for people to learn and share knowledge about everything from indexing a derailleur to rebuilding a Fork Damper. People can also show off thier custom Tool Boxes in the ShowCASE section. People eventually vote for the yearly TBB awards cullmintating in the ToolBox of the Year award.",
    stack: ["React", "Material Design", "JavaScript", "WordPress", "Firebase"],
    img: "/TBWpreview.png",
    buildProcess:
      "Built as a community platform for bike enthusiasts. I used Firebase for real-time database capabilities and user authentication, Material Design for a polished UI, and integrated WordPress for content management. The voting system was built with React hooks for real-time updates.",
    challenges:
      "Creating a voting system that prevents fraud and handles concurrent updates was complex. I had to implement Firebase security rules and learn about transaction handling.",
    keyFeatures: [
      "Firebase Databse",
      "Showcase gallery",
      "WordPress Integration",
    ],
  },
  {
    id: "circle-up",
    title: "Circle Up Chat Room",
    gitLink: "https://github.com/NickLamp44/chatApp",
    liveLink: "https://circleup-chatroom--nfwvfdj0ho.expo.app/",
    about:
      "Circle Up introduced me to native app development & amazon web services",
    stack: ["React Native", "AWS", "JavaScript", "Expo", "Database Management"],
    img: "/CircleUp.png",
    buildProcess:
      "My first exposure to cloud infrastructure. Built a real-time chat application using React Native and Expo for cross-platform mobile support. Deployed the backend on AWS to learn about cloud services, databases, and scaling.",
    challenges:
      "Understanding AWS services was overwhelming at first. I had to learn about EC2 instances, databases, and how to properly architect a backend for a mobile application.",
    keyFeatures: [
      "Real-time messaging",
      "Cross-platform mobile app",
      "AWS backend",
      "User authentication",
      "Chat room creation",
    ],
  },
];
