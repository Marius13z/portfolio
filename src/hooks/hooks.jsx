export const useProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Alistair",
      firstImage: "./alistair-1.png",
      secondImage: "./alistair-3.jpg",
      thirdImage: "./alistair-2.jpg",
      skills: [
        "tailwindcss",
        "mongoDB",
        "redux-toolkit",
        "react",
        "expressJS",
        "react-router",
      ],
      description:
        "Alistair is a social media blogging platform where you can create posts with politic views, gaming news, sports news and movies. People can discuss about the subject by leaving a comment, they can also follow the creator and like his posts. Users can edit their profile description of themselves, they can change their photos, edit their posts and delete them. My inspiration came from reddit, which is a platform where everyone can discuss anything.",
      link: "https://taupe-mousse-6ba3b1.netlify.app",
    },
    {
      id: 2,
      name: "Pawstore",
      firstImage: "./pawstore-1.png",
      secondImage: "./pawstore-2.jpg",
      thirdImage: "./pawstore-3.jpg",
      skills: [
        "tailwindcss",
        "nextJS",
        "react-router",
        "react",
        "stripe",
        "firebase",
      ],
      description:
        "Pawstore is a pet store with toys, leash and treats for your pet. I thought it as a solution to making dogs and cats happy. You can create an account where you can update your address anytime on profile page, you can add products to cart and buy them via cash at delivery or card, payment method implemented with stripe.",
      link: "https://paw-tau.vercel.app/",
    },
    {
      id: 3,
      name: "Giphyfind",
      firstImage: "./giphyfind-1.png",
      secondImage: "./giphyfind-2.jpg",
      thirdImage: "./giphyfind-3.jpg",
      skills: ["tailwindcss", "mongoDB", "react-router", "react", "expressJS"],
      description:
        "Giphyfind is the site you go to find new gifs, gifs you want to share with your friends or even save them via likes. Sometimes life is difficult and hard, people need a break from time to time and there are people enjoying gifs, so a mix of laughs and relaxation is never something wrong. You are also shown suggestions based on what you type, most popular tags and most popular gifs on homepage. This project heavily relies on GIPHY API.",
      link: "https://gleeful-elf-0757dd.netlify.app",
    },
  ];

  return projects;
};

export const useSkills = () => {
  const skills = [
    "javascript",
    "react",
    "expressJS",
    "mongoDB",
    "firebase",
    "redux-toolkit",
    "typescript",
    "html5",
    "css3",
    "tailwindcss",
    "react-router",
    "stripe",
    "nextJS",
    "figma design",
  ];

  return skills;
};
