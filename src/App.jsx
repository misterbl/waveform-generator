import React from "react";
import Peaks from "peaks.js";
import * as audioFiles from "./assets/audio_files";
import papercupLogo from "./assets/papercup-logo.png";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAudioFile: null
    };
  }
  createPeaks = () => {
    const {
      selectedAudioFile: { dat, json }
    } = this.state;
    Peaks.init({
      mediaElement: document.querySelector("audio"),
      container: document.querySelector("#peaks-container"),
      dataUri: {
        arraybuffer: dat,
        json: json
      }
    });
  };

  onAudioFileSelect = async event => {
    await this.setState({
      selectedAudioFile: JSON.parse(event.target.value)
    });
    this.createPeaks();
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
      <main>
        <header className="bg-white border-bottom d-flex">
          <img
            className="papercupLogo"
            src={papercupLogo}
            alt="papercup logo"
          />
          <span className="ml-5 pl-5 pt-3 font-20 text-secondary font-weight-bold">
            Waveform display platform
          </span>
        </header>
        <div className="text-center ">
          <h1 className="mt-5 papercupOrange">Select a sample to play</h1>
          <div className="mt-5 w-75 ml-5">
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
                Sample1
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
                Sample2
              </option>
            </select>
          </div>

          {this.state.selectedAudioFile && (
            <audio key="audioElement" ref="audio" className="my-5" controls>
              <source
                src={this.state.selectedAudioFile.mp3}
                type="audio/mpeg"
              />
              <source src={this.state.selectedAudioFile.ogg} type="audio/ogg" />
            </audio>
          )}
          <div id="peaks-container" className="mb-5" />
        </div>
      </main>
    );
  }
}

export default App;
