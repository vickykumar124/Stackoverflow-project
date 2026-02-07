// // import { Routes, Route, Navigate } from "react-router-dom";

// // import Navbar from "./components/Navbar";
// // import BusinessNavbar from "./components/BusinessNavbar";
// // import Footer from "./components/Footer";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import Blog from "./pages/Blog";
// // import DataLicensing from "./pages/DataLicensing";
// // import Home from "./pages/Home";
// // import Tags from "./pages/Tags";
// // import Challenges from "./pages/Challenges";
// // import ChatExplore from "./pages/ChatExplore";
// // import ChatRoom from "./components/Chat/ChatRoom";
// // import AiAssist from "./pages/AiAssist";
// // import Questions from "./pages/Questions";
// // import StackInternal from "./pages/StackInternal";
// // import StackAds from "./pages/StackAds";
// // import Products from "./pages/Products";
// // import Teams from "./pages/Teams";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import BusinessHome from "./pages/BusinessHome";

// // export default function App() {
// //   return (
// //     <Routes>


// //       <Route
// //         path="/"
// //         element={
// //           <>
// //             <Navbar />
// //             <Questions />
// //           </>
// //         }
// //       />

// //       <Route
// //         path="/login"
// //         element={
// //           <>
// //             <Navbar />
// //             <Login />
// //           </>
// //         }
// //       />

// //       <Route
// //         path="/signup"
// //         element={
// //           <>
// //             <Navbar />
// //             <Signup />
// //           </>
// //         }
// //       />

     
// //       <Route
// //         path="/business"
// //         element={
// //           <>
// //             <BusinessNavbar />
// //             <BusinessHome />
// //             <Footer />
// //           </>
// //         }
// //       />

     
// //       <Route
// //         path="/about"
// //         element={<Navigate to="/business" replace />}
// //       />

// //       <Route
// //         path="/stack-internal"
// //         element={
// //           <>
// //             <BusinessNavbar />
// //             <StackInternal />
// //             <Footer />
// //           </>
// //         }
// //       />
// //       <Route
// //         path="/stack-ads"
// //         element={
// //           <>
// //             <BusinessNavbar />
// //             <StackAds />
// //             <Footer />
// //           </>
// //         }
// //       /> 

// //       <Route
// //         path="/products"
// //         element={
// //           <>
// //             <BusinessNavbar />
// //             <Products />
// //             <Footer />
// //           </>
// //         }
// //       />

// //       <Route
// //         path="/teams"
// //         element={
// //           <>
// //             <BusinessNavbar />
// //             <Teams />
// //             <Footer />
// //           </>
// //         }
// //       />
// // <Route
// //   path="/stack-internal"
// //   element={
// //     <ProtectedRoute>
// //       <BusinessNavbar />
// //       <StackInternal />
// //       <Footer />
// //     </ProtectedRoute>
// //   }
// // />

// // <Route
// //   path="/blog"
// //   element={
// //     <>
// //       <Navbar />
// //       <Blog />
// //       <Footer />
// //     </>
// //   }
// // />


// // <Route
// //   path="/data-licensing"
// //   element={
// //     <>
// //     <Navbar />
// //     <DataLicensing />
// //     <Footer />
// //     </>
// //   }
// //   />

// // <Route
// //   path="/"
// //   element={
// //     <>
// //       <Navbar />
// //       <Home />
// //     </>
// //   }
// // />


// //  <Route
// //         path="/questions"
// //         element={
// //           <>
// //             <Navbar />
// //             <Questions />
// //           </>
// //         }
// //       />
// //  <Route path="/" element={<Home />} />

// //   <Route path="/questions" element={<Questions />} />

// // {/* 
// // <Route
// //   path="/questions"
// //   element={
// //     <>
// //       <Navbar />
// //       <Questions />
// //     </>
// //   }
// // /> */}

// // <Route
// //   path="/ai-assist"
// //   element={
// //     <>
// //       <Navbar />
// //       <AiAssist />
// //     </>
// //   }
// // />


// // <Route
// //   path="/tags"
// //   element={
// //     <>
// //       <Navbar />
// //       <Tags />
// //     </>
// //   }
// // />


// // <Route
// //   path="/challenges"
// //   element={
// //     <>
// //       <Navbar />
// //       <Challenges />
// //     </>
// //   }
// // />



// //   {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/questions" element={<Questions />} />
// //       <Route path="/chat" element={<ChatExplore />} />
// // <Route path="/chat/:id" element={<ChatRoom />} />

// //     </Routes>
// //   );
// // }





import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import BusinessNavbar from "./components/BusinessNavbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchResults from "./pages/SearchResults";
// import About from "./pages/About";

import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Tags from "./pages/Tags";
import Challenges from "./pages/Challenges";
import ChatExplore from "./pages/ChatExplore";
import AiAssist from "./pages/AiAssist";
import Blog from "./pages/Blog";
import DataLicensing from "./pages/DataLicensing";

import StackInternal from "./pages/StackInternal";
import StackAds from "./pages/StackAds";
import Products from "./pages/Products";
import Teams from "./pages/Teams";
import BusinessHome from "./pages/BusinessHome";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ChatRoom from "./components/Chat/ChatRoom";

export default function App() {
  return (
    <Routes>

    
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Questions />
          </>
        }
      />

      <Route
        path="/questions"
        element={
          <>
            <Navbar />
            <Questions />
          </>
        }
      />

      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/tags"
        element={
          <>
            <Navbar />
            <Tags />
          </>
        }
      />

      <Route
        path="/challenges"
        element={
          <>
            <Navbar />
            <Challenges />
          </>
        }
      />

      <Route
        path="/ai-assist"
        element={
          <>
            <Navbar />
            <AiAssist />
          </>
        }
      />

      <Route
        path="/chat"
        element={
          <>
            <Navbar />
            <ChatExplore />
          </>
        }
      />

      <Route
        path="/chat/:id"
        element={
          <>
            <Navbar />
            <ChatRoom />
          </>
        }
      />

      
      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
          </>
        }
      />

      <Route
        path="/signup"
        element={
          <>
            <Navbar />
            <Signup />
          </>
        }
      />


 
      <Route
        path="/about"
        element={<Navigate to="/business" replace />}
      />

    
      <Route
        path="/business"
        element={
          <>
            <BusinessNavbar />
            <BusinessHome />
            <Footer />
          </>
        }
      />

      <Route
        path="/stack-internal"
        element={
          <ProtectedRoute>
            <BusinessNavbar />
            <StackInternal />
            <Footer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/stack-ads"
        element={
          <>
            <BusinessNavbar />
            <StackAds />
            <Footer />
          </>
        }
      />

      <Route
        path="/products"
        element={
          <>
            <BusinessNavbar />
            <Products />
            <Footer />
          </>
        }
      />

      <Route
        path="/teams"
        element={
          <>
            <BusinessNavbar />
            <Teams />
            <Footer />
          </>
        }
      />

   
      <Route
        path="/blog"
        element={
          <>
            <Navbar />
            <Blog />
            <Footer />
          </>
        }
      />

      <Route
        path="/data-licensing"
        element={
          <>
            <Navbar />
            <DataLicensing />
            <Footer />
          </>
        }
      />
{/* 
<Route
  path="/about"
  element={
    <>
      <Navbar />
      <About />
    </>
  }
/> */}


       <Route
  path="/search"
  element={
    <>
      <Navbar />
      <SearchResults />

    </>
  }
/>







      <Route path="*" element={<Navigate to="/" replace />} />
     <Route path="/chat/:id" element={<ChatRoom />} />

    </Routes>
  );
}





// import { Routes, Route, Navigate } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import BusinessNavbar from "./components/BusinessNavbar";
// import Footer from "./components/Footer";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Blog from "./pages/Blog";
// import DataLicensing from "./pages/DataLicensing";
// import Home from "./pages/Home";
// import Challenges from "./pages/Challenges";

// import Questions from "./pages/Questions";
// import StackInternal from "./pages/StackInternal";
// import StackAds from "./pages/StackAds";
// import Products from "./pages/Products";
// import Teams from "./pages/Teams";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import BusinessHome from "./pages/BusinessHome";

// export default function App() {
//   return (
//     <Routes>


//       <Route
//         path="/"
//         element={
//           <>
//             <Navbar />
//             <Questions />
//           </>
//         }
//       />

//       <Route
//         path="/login"
//         element={
//           <>
//             <Navbar />
//             <Login />
//           </>
//         }
//       />

//       <Route
//         path="/signup"
//         element={
//           <>
//             <Navbar />
//             <Signup />
//           </>
//         }
//       />

     
//       <Route
//         path="/business"
//         element={
//           <>
//             <BusinessNavbar />
//             <BusinessHome />
//             <Footer />
//           </>
//         }
//       />

     
//       <Route
//         path="/about"
//         element={<Navigate to="/business" replace />}
//       />

//       <Route
//         path="/stack-internal"
//         element={
//           <>
//             <BusinessNavbar />
//             <StackInternal />
//             <Footer />
//           </>
//         }
//       />
//       <Route
//         path="/stack-ads"
//         element={
//           <>
//             <BusinessNavbar />
//             <StackAds />
//             <Footer />
//           </>
//         }
//       /> 

//       <Route
//         path="/products"
//         element={
//           <>
//             <BusinessNavbar />
//             <Products />
//             <Footer />
//           </>
//         }
//       />

//       <Route
//         path="/teams"
//         element={
//           <>
//             <BusinessNavbar />
//             <Teams />
//             <Footer />
//           </>
//         }
//       />
// <Route
//   path="/stack-internal"
//   element={
//     <ProtectedRoute>
//       <BusinessNavbar />
//       <StackInternal />
//       <Footer />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/blog"
//   element={
//     <>
//       <Navbar />
//       <Blog />
//       <Footer />
//     </>
//   }
// />


// <Route
//   path="/data-licensing"
//   element={
//     <>
//     <Navbar />
//     <DataLicensing />
//     <Footer />
//     </>
//   }
//   />

// <Route
//   path="/Home"
//   element={
//     <>
//       <Navbar />
//       <Home />
//     </>
//   }
// />



// {/* 
// <Route
//   path="/questions"
//   element={
//     <>
//       <Navbar />
//       <Questions />
//     </>
//   }
// /> */}







// //       <Route path="*" element={<Navigate to="/" replace />} />
// //      <Route path="/chat/:id" element={<ChatRoom />} />

//     </Routes>
//   );
// }


  