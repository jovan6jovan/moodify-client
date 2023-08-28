import LoadingSpinner from "../../components/LoadingSpinner";
import LoginPage from "../../components/Login";
import Title from "../../components/Title";
import { useAuthentication } from "../../hooks/useAuthentication";
import MoodSelector from "../MoodSelector";
import Playlist from "../Playlist";

const App = () => {
  const { loggedIn, authenticationInitiated } = useAuthentication();

  if (!authenticationInitiated) {
    return <LoginPage />;
  }

  return loggedIn ? (
    <div className="min-h-screen">
      <Title text="How are you feeling today?" />
      <MoodSelector />
      <Playlist />
    </div>
  ) : (
    <div className="min-h-screen container flex justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default App;
