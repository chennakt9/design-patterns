interface State {
  play(): void;
  pause(): void;
  stop(): void;
}

class MediaPlayer {
  private state: State;

  constructor() {
    this.state = new StoppedState(this);
  }

  setState(state: State) {
    this.state = state;
  }

  play() {
    this.state.play();
  }

  pause() {
    this.state.pause();
  }

  stop() {
    this.state.stop();
  }
}

class PlayingState implements State {
  constructor(private mediaPlayer: MediaPlayer) {}

  play(): void {
    console.log('Already playing');
  }
  pause(): void {
    console.log("Pausing the music ⏸️");
    this.mediaPlayer.setState(new PausedState(this.mediaPlayer));
  }
  stop(): void {
    console.log("Stopping the music ⏹️");
    this.mediaPlayer.setState(new StoppedState(this.mediaPlayer));
  }
}

class PausedState implements State {
  constructor(private mediaPlayer: MediaPlayer) {}

  play(): void {
    console.log("Resuming the music ▶️");
    this.mediaPlayer.setState(new PlayingState(this.mediaPlayer));
  }
  pause(): void {
    console.log('Already paused');
  }
  stop(): void {
    console.log("Stopping from pause state ⏹️");
    this.mediaPlayer.setState(new StoppedState(this.mediaPlayer));
  }
}

class StoppedState implements State {
  constructor(private mediaPlayer: MediaPlayer) {}

  play(): void {
    console.log("Starting the music 🎵");
    this.mediaPlayer.setState(new PlayingState(this.mediaPlayer));
  }
  pause(): void {
    console.log("Can’t pause, nothing’s playing 🤷‍♀️");
  }
  stop(): void {
    console.log('Already stopped');
  }
}

const player = new MediaPlayer();

player.play();  // Starting the music 🎵
player.pause(); // Pausing the music ⏸️
player.stop();  // Stopping from pause state ⏹️
player.pause(); // Can’t pause, nothing’s playing 🤷‍♀️
