import { useState } from "react";
import "./practiceReact.css";
import logo from "./assets/logo.svg";
import search from "./assets/fa-search.svg";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import pngcircle from "./assets/pngcircle.png";
import demoPic1 from "./assets/demo-pic1.jpg";
import demoPic2 from "./assets/demo-pic2.jpg";
import demoPic3 from "./assets/demo-pic3.jpg";
import demoPic4 from "./assets/demo-pic4.jpg";
// function ToggleDarkMode() {
//   const [darkMode, setToDarkMode] = useState(false);

//   const toggle = () => {
//     setToDarkMode(!darkMode);
//   };

//   return (
//     <>
//       <div className={darkMode ? "dark-mode" : ""}>
//         <button onClick={toggle}>
//           {darkMode ? "Light mode" : "Dark mode"}
//         </button>
//       </div>
//     </>
//   );
// }

// function NavBar() {
//   return (
//     <>
//       <div style={{ display: "flex" }}>
//         <nav className="navbar-container">
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//           <a href="#">Find more</a>
//         </nav>
//       </div>
//     </>
//   );
// }

// function Button() {
//   return (
//     <>
//       <button>Sign Up</button>
//       <button>Sign In</button>
//     </>
//   );
// }

// function Cars() {
//   const cars = {
//     brand: "Honda",
//     year: "2024",
//     owner: "Fritz",
//   };
//   const { brand, year, owner } = cars;

//   return (
//     <>
//       <h1>{brand}</h1>
//       <h2>{year}</h2>
//       <h3>
//         <i>{owner}</i>
//       </h3>
//     </>
//   );
// }

// export default function CenteredCarsComponents() {
//   return (
//     <>
//       <div>
//         <Cars />
//         <Cars />
//         <Cars />
//         <Cars />
//         <Cars />
//         <Cars />
//         <Cars />
//         <Cars />
//       </div>
//     </>
//   );
// }
// function NavButton({ signInLabel, signUpLabel }) {
//   return (
//     <>
//       <div className="btn-container">
//         <button className="sign-in">{signInLabel}</button>
//         <button className="sign-up">{signUpLabel}</button>
//       </div>
//     </>
//   );
// }

// function Header() {
//   return (
//     <>
//       <header>
//         <img src={logo} alt="start-up 3 logo" />
//         <nav>
//           <a href="#">Home</a>
//           <a href="#">Features</a>
//           <a href="#">Blog</a>
//           <a href="#">Shop</a>
//         </nav>
//         <div className="nav-btn-container">
//           <NavButton signInLabel="Sign In" signUpLabel="Sign Up" />
//         </div>
//       </header>
//     </>
//   );
// }

// function MainContent({ title, content, buttonText, linkText, linkUrl }) {
//   return (
//     <>
//       <div className="main-container">
//         <h1>{title}</h1>
//         <p>{content}</p>
//         <div className="call-to-action">
//           <button>{buttonText}</button>
//           <a href={linkUrl}>{linkText}</a>
//         </div>
//       </div>
//     </>
//   );
// }

// function BibleBooks() {
//   const bible = [
//     { id: 0, bookName: "Genesis", testament: "Old" },
//     { id: 1, bookName: "Matthew", testament: "New" },
//     { id: 2, bookName: "Jeremiah", testament: "Old" },
//   ];

//   const displayBooks = bible.map((book) => (
//     <ul>
//       <li key={book.id}>Book: {book.bookName}</li>
//       <li key={book.id}>Testament: {book.testament}</li>
//     </ul>
//   ));
//   return (
//     <>
//       <ul>{displayBooks}</ul>
//     </>
//   );
// }

function Page() {
  const [nav, setNav] = useState(true);

  const openMenu = () => {
    setNav(!nav);
  };
  return (
    <>
      <div id="mobile-nav">
        <div
          className="container-fluid p-3 d-flex justify-content-end text-white"
          id="mobile-nav"
          onClick={openMenu}
        >
          {!nav ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </div>

        <div className="container-fluid p-0">
          <nav
            className={
              !nav
                ? "d-flex text-center flex-column nav-open"
                : "d-flex text-center flex-column nav-closed"
            }
          >
            <a href="#" className="text-decoration-none p-3 text-white">
              Home
            </a>
            <a href="#" className="text-decoration-none p-3 text-white">
              About
            </a>
            <a href="#" className="text-decoration-none p-3 text-white">
              Projects
            </a>
            <a href="#" className="text-decoration-none p-3 text-white">
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

// function ImageModal() {
//   const images = [demoPic4, demoPic3, demoPic4, demoPic3];
//   const [imageClicked, setImageClicked] = useState(null);
//   const [bigImageValue, setBigImagevalue] = useState(null);
//   console.log(imageClicked);

//   const handleModalClicked = (index) => {
//     setImageClicked(index);
//     setBigImagevalue(images[index]);
//   };

//   return (
//     <>
//       <div className="container ">
//         <div className="row">
//           {images.map((src, index) => (
//             <div className="col-3">
//               <img
//                 id="gallery-pictures-option"
//                 key={index}
//                 src={src}
//                 alt={src}
//                 onClick={() => handleModalClicked(index)}
//                 className={imageClicked === index ? "image-clicked" : ""}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="container" id="gallery-pictures-selected-container">
//           <img src={bigImageValue} alt={bigImageValue} />
//         </div>
//       </div>
//     </>
//   );
// }

function Modal() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <img src={demoPic3} alt="" />
      </div>
    </>
  );
}
export default Modal;
