import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./stylesheets/alignments.css";
import "./stylesheets/sizes.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./Pages/Profile/index";
import Admin from "./Pages/Admin/index";
import TheatresForMovie from "./Pages/TheatresForMovie";
import BookShow  from "./Pages/BookShow";

// function App() {


//   return (
//     <div className="App">
//       App pAGE
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Home />
//              </ProtectedRoute>
//             }
//           />
//           <Route path="/register" element={<Register />} />

//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



function App() {
  // const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {/* {loading && (
        <div className="loader-parent">
          <div className="loader"></div>
        </div>
      )} */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <TheatresForMovie />
              </ProtectedRoute>
            }
          />

          
           <Route
            path="/book-show/:id"
            element={
              <ProtectedRoute>
                <BookShow />
               </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;