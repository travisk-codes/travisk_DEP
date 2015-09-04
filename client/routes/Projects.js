var React = require('react');

var Box = React.createClass({
  render: function() {
    return (
      <div id='iphone'>
        <object data='http://www.cnn.com' width='320' height='480'>
          <embed src='http://www.cnn.com' width='320' height='480' />
        </object>
        <div id='iphone_button' />
      </div>
    );
  }
});

var AccidentalsInput = React.createClass({
  render: function() {
    return (
      <div id='accidentals-input-div'>
        <label htmlFor='accidentals-input'>Accidentals:</label>
        <input
          type='checkbox'
          id='accidentals-input'
          checked={ this.props.checked }
          onChange={ this.props.callback }
        />
      </div>
    );
  },
});

var BpmInput = React.createClass({
  render: function() {
    return (
      <div id='bpm-input-div'>
        <label htmlFor='bpm-input'>BPM:</label>
        <input
          type='number'
          id='bpm-input'
          value={ this.props.bpm }
          min='1'
          max='999'
          onChange={ this.props.callback }
        />
      </div>
    );
  }
});

var SoundInput = React.createClass({
  render: function() {
    return (
      <div id='sound-input-div'>
        <label htmlFor='sound-input'>Sound:</label>
        <input
          type='checkbox'
          id='sound-input'
          checked={ this.props.checked }
          onChange={ this.props.callback }
        />
      </div>
    );
  },
});

var RandomNotes = React.createClass({

  ////// LIFECYCLE METHODS
  getInitialState: function() {
    return {
      accidentals: false,
      accidental: '',
      beat: 0,
      bpm: 120,
      note: '',
      sound: false,
    };
  },
  // TODO: the component will be changing, but that doesn't necessarily
  // mean that its state needs to change (e.g. 'accidental', 'note', and 'beat')
  // try removing one from state, and just place it in an object property or
  // something.

  componentWillMount: function() {
    this.setState({
      beat: this.getNextBeat(),
      note: this.getRandomNote(),
    });
  },

  componentDidMount: function() {
    this.audio = React.findDOMNode(this.refs.tickSound);
    var interval = this.bpmToMs();
    //this.audioInterval = setInterval(this.audio.play(), interval);
    this.interval = setInterval(this.tick, interval);
  },

  componentDidUpdate: function() {
    clearInterval(this.interval);
    clearInterval(this.audioInterval);
    var interval = this.bpmToMs();
    if (this.state.sound) {
      this.audioInterval = setInterval(this.audio.play(), interval);
    }
    this.interval = setInterval(this.tick, interval);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  ////// SNOWFLAKE METHODS
  tick: function() {
    if (this.state.sound) {
      this.audio.play();
    }
    this.setState( {beat: this.getNextBeat()} );
    if (this.state.beat === 1) {
      this.setState( {note: this.getRandomNote()} );
    }
  },

  bpmToMs: function() {
    var milliseconds = 1 / ( this.state.bpm * (1/60000) );
        // ms / beat = 1 / (  beats / min  *  min / ms  )

    if (milliseconds <= 60000) { // if at least 1 bpm
      return milliseconds;
    } else {
      return 10000000; // a long time (pause the ticks)
    }
  },

  getRandomNote: function() { // called by componentWillMount, tick
    var notes = ['A','B','C','D','E','F','G'];
    var randomIndex = Math.floor( 7*Math.random() ); // int [0,6]
    var note = notes[randomIndex];

    if (this.state.accidentals) {
      var accidentals = ['','♯','♭'];
      var randomIndex = Math.floor( 3*Math.random() ); // int [0,2]
      this.setState( {accidental: accidentals[randomIndex]} );
    } else {
      this.setState( {accidental: ''} );
    }

    // same note? let's try again!
    if (note === this.state.note) { note = this.getRandomNote(); }

    return note;
  },

  getNextBeat: function() {
    var nextBeat = this.state.beat + 1;
    if (nextBeat === 5) {
      return 1;
    }
    return nextBeat; // 1, 2, 3, 4, 1, ...
  },

  beatToDivs: function(beat) { // called by tick
    var beatBoolArray = [0,0,0,0];
    beatBoolArray[beat-1] = true;
    console.log(beatBoolArray);
    beatDivs = beatBoolArray.map(function(currBeat) {
      return (
        <div
          className={ currBeat ? 'current beat' : 'beat' }
          //key={ 'index'+Date.now() }
        />
      );
    });

    return beatDivs; // array size 4;
  },

  changeBpm: function(e) {
    this.setState( {bpm: e.target.value} );
  },

  changeAccidentals: function(e) {
    this.setState( {accidentals: e.target.checked} );
  },

  changeSound: function(e) {
    this.setState( {sound: e.target.checked} );
  },

  ////// RENDER METHOD
  render: function() {
    beats = this.beatToDivs(this.state.beat);
    return (
      <div id='random-notes-container'>
        <div id='note-display'>
            {this.state.note}<sup>{ this.state.accidental }</sup>
        </div>
        <div id='beat-display'>{beats}</div>
        <div id='control-display'>
          <BpmInput
            bpm={ this.state.bpm }
            callback={ this.changeBpm }
          />
          <AccidentalsInput
            checked={ this.state.accidentals }
            callback={ this.changeAccidentals }
          />
          <SoundInput
            checked={ this.state.sound }
            callback={ this.changeSound }
          />
          <audio
            src='tick.ogg'
            volume='0.1'
            ref='tickSound'
          ></audio>
        </div>
      </div>
    );
  },
});

var Projects = React.createClass({
	render: function() {
		return (
			<div id='projects'>
				{/*<Box />*/}
        <RandomNotes />
			</div>
		);
	}
});

module.exports = Projects;
