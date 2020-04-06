import React, {Component} from 'react';
import icons from '../../icons';
import './BottomControls.css';

class BottomControls extends Component {
    onMicButtonClick() {
        var img = document.querySelector('#micButton img');
        img.src = img.className==="micOff" ? icons.micOn : icons.micOff;
        img.className = img.className==="micOff" ?  "micOn":"micOff";
    }
    onSettingsButtonClick() {
      document.getElementById("settingsScreen").style.display = "flex";
    }
    onChatButtonClick() {
      document.getElementById("chatScreen").style.display = "flex";
    }
    render() {
        this.onMicButtonClick = this.onMicButtonClick.bind(this);
        this.onSettingsButtonClick = this.onSettingsButtonClick.bind(this);
        this.onChatButtonClick = this.onChatButtonClick.bind(this);
        return(
        <div id="bottomControls">
          <div id="chatButton" className="bottomControlIcon" onClick={this.onChatButtonClick}>
            <img alt="Chat" src={icons.commentDots}/>
          </div>
          <div id="micButton" className="bottomControlIcon" onClick={this.onMicButtonClick}>
            <img className="micOff" alt="Microphone is off" src={icons.micOff}/>
          </div>
          <div id="settingsButton" className="bottomControlIcon" onClick={this.onSettingsButtonClick}>
            <img alt="Settings" src={icons.cogs}/>
          </div>
        </div>
        )
    }
}

export default BottomControls;