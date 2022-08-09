import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import ProfilePage from "./pages/ProfilePage";
import SingleTweetPage from "./pages/SingleTweetPage";
import TweetsPage from "./pages/TweetsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/profilepage"} element={<ProfilePage />}></Route>
        <Route path={"/singletweetpage"} element={<SingleTweetPage />}></Route>
        <Route path={"/tweetspage"} element={<TweetsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
