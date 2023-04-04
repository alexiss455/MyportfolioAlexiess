import p1 from "../img/PROJECT1.png";
import p2 from "../img/coffeewebsite.png";
import p3 from "../img/shushiwebsite.png";
import p4 from "../img/myportfolio.png";
import p5 from "../img/spaceweb.png";
import p6 from "../img/ecomere_landing_page.png";
const projects = [
  {
    link: "https://graphiscore.cyclic.app",
    gitlink: "https://github.com/alexiss455/Graphi-score",
    title: "Graphiscore",
    description: `Discover the Best Graphics Performance for Your Needs with Our
        Comprehensive GPU Rating Website. Explore the Latest GPUs,
        Compare Specifications, Performance Metrics, User Ratings, and
        Real-World Reviews. Make an Informed Decision with Ease - Your
        One-Stop Shop for GPU Selection.`,
    techonology: ["EJS", "CSS", "NODEJS", "MONGODB", "EPRESS"],
    img: p1,
    className: "order-first",
    className2: "-mr-20  max-md:mr-0",
  },
  {
    link: "https://alexiss455.github.io/Coffee/",
    gitlink: "https://github.com/alexiss455/Coffee",
    title: "Coffee Website",
    description: `  Responsive layout that adapts to different screen sizes.
        Navigation menu with links to different pages .Home page with a
        hero section and a list of featured products .Products page with
        a list of all products .About page with information about the
        coffee shop .Contact page with a form to send a message to the
        coffee shop`,
    techonology: ["HTML", "CSS", "JAVASCRIPT"],
    img: p2,
    className: "-order-first md:items-end",
    className2: "-ml-20  max-md:ml-0",
  },
  {
    link: "https://alexiss455.github.io/shushi-front-end-display",
    gitlink: "https://github.com/alexiss455/shushi-front-end-display",
    title: "Shushi Website",
    description: `   The page is designed in a simple and elegant way, with a white
        background and minimalist layout. The top of the page features a
        header section with the restaurant's logo, navigation menu, and
        social media links. `,
    techonology: ["HTML", "CSS", "JAVASCRIPT"],
    img: p3,
    className: "order-first",
    className2: "-mr-20  max-md:mr-0",
  },
  {
    link: "https://alexiess.vercel.app/",
    gitlink: "https://github.com/alexiss455/MyportfolioAlexiess",
    title: "My Portfolio",
    description: `The portfolio you made in React and Tailwind is an example of a
        "responsive web design" which allows the layout and content of a
        website to adjust and adapt to various screen sizes and devices,
        providing optimal viewing and user experience across different
        platforms.`,
    techonology: ["REACTJS", "CSS", "TAILWIND", "EMAILJS"],
    img: p4,
    className: "-order-first md:items-end",
    className2: "-ml-20  max-md:ml-0",
  },
  {
    link: "https://space-frontend-challenge.vercel.app/",
    gitlink: "https://github.com/alexiss455/space_frontend_challenge",
    title: " Space tourism",
    description: `  This website is a well-designed and functional web application
    that incorporates popular web development technologies and a
    visually appealing theme. By using React Router and Tailwind
    CSS.`,
    techonology: ["REACTJS", "CSS", "TAILWIND"],
    img: p5,
    className: "order-first",
    className2: "-mr-20  max-md:mr-0",
  },
  {
    link: "https://e-commerce-practice-project.vercel.app/",
    gitlink: "https://github.com/alexiss455/e_commerce_practice_project",
    title: "Ecommerce Landing Page",
    description: `This e-commerce landing page allows you to 
    add products to your cart using the 'Add' button, and view your current cart items.
     Additionally, you can remove items from your cart if desired. And this landing page already responsive for different sizes.`,
    techonology: ["REACTJS", "CSS", "TAILWIND"],
    img: p6,
    className: "-order-first md:items-end",
    className2: "-ml-20  max-md:ml-0",
  },


];

export default projects;
