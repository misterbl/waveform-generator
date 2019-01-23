import React from "react";
import Peaks from "peaks.js";
import * as audioFiles from "./assets/audio_files";

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
    const {
      selectedAudioFile: { dat, json }
    } = this.state;
    const p = Peaks.init({
      mediaElement: document.querySelector("audio"),
      container: document.querySelector("#peaks-container"),
      dataUri: {
        arraybuffer: dat,
        json: json
      }
    });
    p.on("peaks.ready", () => {
      console.log("peak is ready");
    });
    this.refs.audio.load();
  };

  render() {
    const {
      sample1Dat,
      sample1Json,
      sample1Mp3,
      sample1Ogg,
      sample2Dat,
      sample2Json,
      sample2Mp3,
      sample2Ogg
    } = audioFiles;
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
          {this.state.selectedAudioFile && (
            <audio key="audioElement" ref="audio" controls>
              <source
                src={this.state.selectedAudioFile.mp3}
                type="audio/mpeg"
              />
              <source src={this.state.selectedAudioFile.ogg} type="audio/ogg" />
            </audio>
          )}
        </div>
      </main>
    );
  }
}

export default Home;
