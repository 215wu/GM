import {Component} from "react";
import { Icon  } from 'semantic-ui-react';
import "../assets/css/Swipper.css"

import Img1 from "../assets/images/sp1.png"
import Img2 from "../assets/images/sp2.png"
import Img3 from "../assets/images/sp3.png"
import Img4 from "../assets/images/sp4.png"

class Swipper extends Component{
    constructor(props){
        super(props);
        this.state ={
            images : [Img1,Img2,Img3,Img4],
            sloganList:[
                "215GM，遇见不一样的你！",
                "运动创造快乐，健康成就未来！",
                "生命无止境,运动无极限！",
                "自律给我自由！",
            ],
            index:0
        }
    }

    _nextImg () {
        var { index } = this.state;
        if (index === this.state.images.length - 1) {
          index = 0;
        } else {
          index++
        }
        this.setState({
          index: index
        })
      }
     
      // 点击播放上一张
      _prevImg () {
        var { index } = this.state;
        if (index === 0) {
          index = this.state.images.length - 1
        } else {
          index--
        }
        //console.log(this.state.imgList);
        this.setState({
          index: index
        })
      }
     
      // 当鼠标停留在图片上时
      mouseHoverImg () {
        clearInterval(this.timerId)
      }
      mouseLeaveImg () {
        this.play()
      }
     
      play () {
        this.timerId = setInterval(() => {
          this._nextImg()
        }, 2500)
      }
     
      componentDidMount () {
        this.play()
      }
      componentWillUnmount () {
        clearInterval(this.timerId)
      }
     
      render () {
        var { index } = this.state;
        return (
          <div className="Swipper">
            <div className="slogan"><p>{this.state.sloganList[index]}</p></div>
            <ul className="imgList">
              {
                this.state.images.map((item, i) => (
                  <li className={`imgItem ${i === index ? 'active' : ''}`} key={i}
                    onMouseOver={() => this.mouseHoverImg()}
                    onMouseLeave={() => this.mouseLeaveImg()}>
                    <img src={item} alt="" style={{width:"100%",height:"100%"}}/>
                  </li>
                ))
              }
            </ul>
            <button className="arrow left" onClick={() => this._prevImg()} onMouseOver={() => this.mouseHoverImg()}
              onMouseLeave={() => this.mouseLeaveImg()}>
                 <Icon name='angle left' size='huge' />
              </button>
            <button className="arrow right" onClick={() => this._nextImg()} onMouseOver={() => this.mouseHoverImg()}
              onMouseLeave={() => this.mouseLeaveImg()}>
                <Icon name='angle right' size='huge' />
              </button>
          </div>
        )
      }
    }
   
export default Swipper;