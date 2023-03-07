import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,

    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bryan,
    mody,
    emma,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Administrative experiences",
      company_name: "Espacios & Entornos e.a.t",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2019 - December 2020",
      points: [
        "Organization and administrative supervision of personnel", 
        "Customer service including incidents and claims", 
        "Support in the resolution of incidents related to the products and services offered by the company",
        "Friendly and professional customer service"
        
      ],
    },
    {
      title: "Freelance frontend developer",
      company_name: "entrepreneurship",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Design of user interfaces and web design with HTML and CSS",
        "Definition of technical proposals",
        "Selection of technologies and elaboration of functional requirements",
        "Construction and configuration of cloud environments AWS"

        
      ],
    },
    {
      title: "MERN Stack website ",
      company_name: "entrepreneurship",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jun 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js ",
        "Implementing express and mongoose for the development of an Ecommerce",
        "Implementing Bootstrap.",
        "Using Git for version control.",
      ],
    },
    {
      title: "Financial Crisis",
      company_name: "unemployed",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Practice and learn tools within the React ecosystem such as Fiber",
        "Improve productivity and implement Notion",
        "Develop a v2 portfolio with better UI/UX and look for a first job that allows me to grow in the tech industry",
        "Improve my english (actually B2) ",
        "Create content on YouTube (coming soon)"

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I really needed to put my business on the internet, Kevin designed and developed the website, the corporate emails, and organized everything for us, man... you're the best.",
      name: "Bryan S. Morris",
      designation: "CEO",
      company: "Ingeniar diseños y construcciones",
      image: bryan,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kevin does.",
      name: "Jonathan 'Mody' Araque",
      designation: "Graphic designer",
      company: "CUN",
      image: mody,
    },
    {
      testimonial:
        "I loved the design of my site, since I'm online my sales increased",
      name: "Angie L. Vargas",
      designation: "Entrepreneur",
      company: "Emma diseños",
      image: emma,
    },
  ];
  
  const projects = [
    {
      name: "Xué Store",
      description:
        "Ecommerce M.E.R.N - A simple buying and selling system, with user registration, shopping cart, and ready to connect to payment gateways.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/KsMorris-33/XueStore",
    },
    {
      name: "Portfolio v1.0",
      description:
        "A very attractive web designer portfolio, fully responsive, modern UI/UX,  made with react",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "UI/UX",
          color: "green-text-gradient",
        },
        {
          name: "Components",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/KsMorris-33/kevinmorris",
    },
    {
      name: "Palazzo pants store (in construction)" ,
      description:
        "Beautiful landing page of a business dedicated to the manufacture and sale of 'Palazzo' type pants",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Go",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/KsMorris-33/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  