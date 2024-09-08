import { useState } from "react";
import "./practiceReact.css";
import logo from "./assets/logo.svg";
import search from "./assets/fa-search.svg";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
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

export default function Page() {
  const [nav, setNav] = useState(true);

  const openMenu = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="container" onClick={openMenu} style={"transition: 0.3s"}>
        {!nav ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
      </div>
    </>
  );
}
