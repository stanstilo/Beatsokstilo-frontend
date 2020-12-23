import React, { useEffect, useRef } from "react";
import Home from "./containers/Home/Home";
import { Route, Switch, withRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import LoginForm from "./components/Auth/Login";
import RegisterForm from "./components/Auth/Register";
import PrivateRoute from "./components/PrivateRoute";
import UploadBeat from "./components/Pages/UploadBeat/UploadBeat";
import BuyBeats from "./components/Pages/BuyBeats/BuyBeats";
import SellBeats from "./components/Pages/SellBeats/SellBeats";
import FreeBeat from "./components/Pages/FreeBeat/FreeBeat";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NewTest from "./components/AudioPlayer/NewTest";
import BuyBeatsDetails from "./components/Pages/BuyBeats/BuyBeatsDetails";
import { fetchBeatUpload, fetchSingleBeat } from "./store/actions/beat";
import { connect, useDispatch } from "react-redux";

const App = ({ musicId, playing }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBeatUpload());
  }, []);
  
 
  return (
    <>
    <div>
      <Layout>
        <Switch>
          {/* <PrivateRoute
              path="/dashboard"
              render={(props) => <UploadBeat {...props} />}
            /> */}
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/buy-beats" component={BuyBeats} />
          <Route path="/sell-beats" component={SellBeats} />
          <Route path="/upload-beat" exact component={UploadBeat} />
          <Route
            path="/free-beat"
            exact
            render={(props) => (
              <FreeBeat {...props}   playing={playing}/>
            )}
          />
          <Route path="/buy-beats-details" component={BuyBeatsDetails} />
          <Route path="/audioplayer/:id" component={NewTest} />
        </Switch>
      </Layout>
      <AudioPlayer
        musicId={musicId}
        playing={playing}
        // toggleAudio={toggleAudio}
        // audio={audio}
      />
    </div>
    <audio/>
    </>
  );
};

const mapStateToPops = (state) => ({
  showAudio: state.playerReducer.showAudio,
  musicId: state.playerReducer.musicId,
  playing: state.playerReducer.playing,
});
export default withRouter(connect(mapStateToPops, { fetchBeatUpload })(App));
// const audio = useRef("audio_tag");
// const [statevolum, setStateVolum] = useState(0.3);
// const [dur, setDur] = useState(0);
// const [currentTime, setCurrentTime] = useState(0);

// const { _id, imageFile, title, name, mp3File, description } = beat;

// const toggleAudio = () =>
//   audio.current.paused ? audio.current.play() : audio.current.pause();

// const togglePlayButton = () => {};
