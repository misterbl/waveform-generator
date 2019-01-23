import React from "react";
import Peaks from "peaks.js";
import audioFiles from "./assets/audio_files";
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
    const value = JSON.parse(event.target.value)
    await this.setState({
      selectedAudioFile: {
        mp3: value.mp3,
        dat: value.dat,
        json: value.json,
        ogg: value.ogg
      }
    });
    this.createPeaks();
    this.refs.audio.load();
  };


  render() {
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
              name="selectAudioFile"
              className="custom-select"
              id="selectAudioFile"
            >
              <option key="select" selected>Select an audio file></option>
              {audioFiles.map(file => (
                <option
                  key={file.name}
                  value={JSON.stringify(file)}
                >
                  {file.name}
                </option>
              )
              )}
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
