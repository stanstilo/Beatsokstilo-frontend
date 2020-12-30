import React, { useEffect, useRef } from "react";
import Home from "./components/Pages/Home/Home";
import { Route, Switch, withRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import LoginForm from "./components/Auth/Login";
import RegisterForm from "./components/Auth/Register";
import PrivateRoute from "./components/PrivateRoute";
import UploadBeat from "./components/Pages/UploadBeat/UploadBeat";
import BuyBeats from "./components/Pages/BuyBeats/BuyBeats";
import SellBeats from "./components/Pages/SellBeats/SellBeats";
import FreeBeat from "./components/Pages/FreeBeat/FreeBeat";
import PlayerId from "./components/AudioPlayer/PlayerId";
import BuyBeatsDetails from "./components/Pages/BuyBeats/BuyBeatsDetails";
import { fetchBeatUpload, fetchSingleBeat } from "./store/actions/beat";
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

const App = () => {
  const reduxState = useSelector(state => state)
  const {musicId, showAudio, playing} = reduxState.playerReducer.musicId
  const {mp3File}= reduxState.beatReducer.singleBeat

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBeatUpload());
  }, []);
  
  
  const audio = useRef("audio_tag");

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
          <Route path="/free-beat" exact component={FreeBeat} />
          <Route path="/buy-beats-details" component={BuyBeatsDetails} />
          <Route path="/audioplayer/:id" component={PlayerId} />
        </Switch>
      </Layout>
       <div className ='audioplayer'>
         <AudioPlayer/>
       </div>
    </div>
    </>
  );
};

export default withRouter(App);
