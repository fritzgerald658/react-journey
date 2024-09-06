import { useState } from "react";
import "./practiceReact.css";
import logo from "./assets/logo.svg";
import search from "./assets/fa-search.svg";
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
function NavButton({ signInLabel, signUpLabel }) {
  return (
    <>
      <div className="btn-container">
        <button className="sign-in">{signInLabel}</button>
        <button className="sign-up">{signUpLabel}</button>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="start-up 3 logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
        </nav>
        <div className="nav-btn-container">
          <NavButton signInLabel="Sign In" signUpLabel="Sign Up" />
        </div>
      </header>
    </>
  );
}

function MainContent() {
  return (
    <>
      <div className="main-container">
        <h1>Startup Framework</h1>
        <p>
          We made it so beutiful and simple. It combines <br />
          landings, pages, blogs and shop screens. It is definitely <br />
          the tool you need in your collection!
        </p>
        <div className="call-to-action">
          <button>Purchase Now for $248</button>
          <a href="#">Learn More</a>
        </div>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}
