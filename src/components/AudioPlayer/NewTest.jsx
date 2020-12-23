import React,{useEffect} from 'react'
import {connect, useDispatch} from 'react-redux'
import { fetchSingleBeat } from '../../store/actions/beat';
import AudioPlayer from './AudioPlayer'

const  NewTest =({singleBeat, match})=> {
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchSingleBeat(match.params.id))
    },[])
    return (
        <div>
           <AudioPlayer mp3Beats={singleBeat.mp3File}/>
        </div>
    )
}
const Props = state =>({
    singleBeat: state.beatReducer.singleBeat
})
export default connect(Props)(NewTest)