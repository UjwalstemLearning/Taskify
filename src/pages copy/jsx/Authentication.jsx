import MainAccount from "./MainAccount";
import MainNavbar from "./MainNav"
import MainProfile from "./MainProfile";

import MainSignup from "./Mainsign";
export default function Auth({ onSignupClick }){
    return(
       <>
        <MainNavbar />
      <MainSignup onSignup={onSignupClick} />
       </>
    )
}
// App.jsx
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import MainProfile from './pages/jsx/MainProfile'
// import Auth from './pages/jsx/Authentication'
// import MainAccount from './pages/jsx/MainAccount' 


// function App() {
//  const [currentPage, setCurrentPage] = useState("auth");

//   const goToRegister = () => setCurrentPage("register");
//   const goToAuth = () => setCurrentPage("auth");

//   return (
//     <>
//       {currentPage === "auth" && <Auth onSignupClick={goToRegister} />}
//       {currentPage === "register" && <MainAccount onRegisterClick={goToAuth} />}
//     </>
//   );
// }

// export default App