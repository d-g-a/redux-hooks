import React,{ useEffect } from "react" 
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {fetchTaco} from "./redux/actions/index"
import ReactMarkdown from "react-markdown"

function App() {
    const {taco,loadingTaco} = useSelector(state => state)
    const dispatch = useDispatch() 
    useEffect(()=>{
        dispatch(fetchTaco())
    }, [])
    
  return (
    <div>
        {loadingTaco ? <p>Loading Taco...</p> : <ReactMarkdown source={ taco.recipe }/>}
    </div>
  );
}

export default App;
