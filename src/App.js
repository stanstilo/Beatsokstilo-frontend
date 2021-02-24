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
import BuyBeatsDetails from "./components/Pages/BuyBeats/BuyBeatsDetails";
import { fetchBeatUpload, fetchSingleBeat } from "./store/actions/beat";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "./components/Pages/Checkout/Checkout";
import Profile from "./components/Pages/Profile/Profile";
import UpdateProfile from './components/Pages/Profile/UpdateProfile/UpdateProfile'


const App = () => {
  const reduxState = useSelector(state => state)
  // const {musicId, showAudio, playing} = reduxState.playerReducer.musicId
  // const {mp3File}= reduxState.beatReducer.singleBeat

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBeatUpload());
  }, []);
  
  
  const audio = useRef("audio_tag");
  
  const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();
  return (
    <>
    <div>
      <Layout>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/buy-beats" component={BuyBeats} />
          <PrivateRoute path='/sell-beats' render={(props) => <SellBeats {...props}/>}/>
          {/* <Route path="/sell-beats" component={SellBeats} /> */}
          <PrivateRoute path='/upload-beat' render={(props) => <UploadBeat {...props}/>}/>
          <Route path="/free-beat" exact component = {FreeBeat} />
          {/* <PrivateRoute path="/buy-beats-details/:id" render={(props) => <BuyBeatsDetails {...props}/>}/> */}
          <Route path="/buy-beats-details/:id" component = {BuyBeatsDetails}/>
          <Route path="/initialize" component={Checkout}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/edit' component = {UpdateProfile}/>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
    </>
  );
};

export default withRouter(App);
