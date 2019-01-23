import React from "react";
import { withRouter } from "react-router-dom";
import Peaks from "peaks.js";
import * as audioFiles from "../assets/audio_files";
import sample1Json from "../assets/test_data/sample1.json";
import sample1Mp3 from "../assets/test_data/sample1.mp3";
import sample1Ogg from "../assets/test_data/sample1.ogg";
import sample2Dat from "../assets/test_data/sample2.dat";
import sample2Json from "../assets/test_data/sample2.json";
import sample2Mp3 from "../assets/test_data/sample2.mp3";
import sample2Ogg from "../assets/test_data/sample2.ogg";
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAudioFile: null
    };
  }

  onAudioFileSelect = async event => {
    await this.setState({
      selectedAudioFile: JSON.parse(event.target.value)
    });
    this.refs.audio.load();
  };
  componentDidMount() {
    // var myAudioContext = new AudioContext();

    if (this.state.selectedAudioFile) {
      const {
        selectedAudioFile: { dat, json }
      } = this.state;
      var p = Peaks.init({
        mediaElement: document.querySelector("audio"),
        container: document.querySelector("#peaks-container"),
        // audioContext: myAudioContext,
        dataUri: {
          arraybuffer: dat,
          json: json
        }
      });
      p.on("peaks.ready", () => {
        console.log("peak is ready");
      });
    }
  }
  render() {
    return (
      <main className="bg-white form-container p-5">
        <div className="text-center ">
          <div id="peaks-container" />
          <div className="mt-5">
            <select
              onChange={this.onAudioFileSelect}
              name="selectAddress"
              className="custom-select"
              id="selectAddress"
            >
              <option selected>Select an audio file></option>
              <option
                selected
                key="sample1"
                value={JSON.stringify({
                  mp3: sample1Mp3,
                  dat: sample1Dat,
                  json: sample1Json,
                  ogg: sample1Ogg
                })}
              >
                sample1
              </option>
              <option
                key="sample2"
                value={JSON.stringify({
                  mp3: sample2Mp3,
                  dat: sample2Dat,
                  json: sample2Json,
                  ogg: sample2Ogg
                })}
              >
                sample2
              </option>
            </select>
          </div>
          {this.state.selectedAudioFile.mp3}
          <audio key="audioElement" ref="audio" controls>
            <source src={this.state.selectedAudioFile.mp3} type="audio/mpeg" />
            <source src={this.state.selectedAudioFile.ogg} type="audio/ogg" />
          </audio>
        </div>
      </main>
    );
  }
}

export default withRouter(Home);
