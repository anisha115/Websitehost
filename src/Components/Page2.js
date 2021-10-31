import { Component } from 'react'
import VideoPlayer from 'react-video-js-player'
import Birthday from './Birthday.mp4'
import MyHeader from './MyHeader';
import "./PageT.css"
import "./Video.css"

class Page2 extends Component{
    
    render(){
        return (<div className="vid-page">
          <MyHeader/>
          <h5></h5>
          <p className="wContent">Happy 21st Birthday to the most handsome 
            and sweetest man ( MERA YEDAA/ MERI AURRATT).
            I am so blessed to have you in my life. Thanks for loving me. 
            I love and cherish you today and always. 
            Have a wonderful birthday Love ..
            ... siddharth tere life mai ane se na ek alag hii satisfation bol ya happiness 
            bol word nhi milra h mujhe but sab accha hua hh..... Hu tane prem karuchii partner ❤️😘</p>
          <h5></h5>
          <VideoPlayer
            src={Birthday}
            width="720"
            height="420"
            playbackRates={[0.5,1,3.85,16]}
          />
          <p/>
          <h1></h1>
          <h1></h1>
        </div>)
    }
}

export default Page2;