// Web Audio API Synthesizer & Visualizer for LOTR MySpace Profile

class LOTRAudioSynthesizer {
    constructor() {
        this.ctx = null;
        this.analyser = null;
        this.masterGain = null;
        this.isPlaying = false;
        this.isMuted = false;
        this.currentTrackIndex = 0;
        this.volume = 0.5;
        this.currentStep = 0;
        this.timerId = null;
        this.visualizerAnimationId = null;

        // Frequencies for musical notes (Hz)
        this.notes = {
            'C2': 65.41, 'D2': 73.42, 'E2': 82.41, 'F2': 87.31, 'G2': 98.00, 'A2': 110.00, 'B2': 123.47,
            'C3': 130.81, 'D3': 146.83, 'Eb3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'Bb3': 233.08, 'B3': 246.94,
            'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'Eb4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'Bb4': 466.16, 'B4': 493.88,
            'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'G5': 783.99, 'A5': 880.00, 'B5': 987.77,
            '-': 0 // Rest
        };

        // Track sequences with notes, durations (1 = 16th note, 2 = 8th note, 4 = quarter note, etc.), and synth type
        this.tracks = [
            {
                title: "Concerning Hobbits (Shire Theme)",
                bpm: 108,
                wave: "triangle",
                bassWave: "sine",
                notes: [
                    { note: 'D4', dur: 2 }, { note: 'E4', dur: 2 }, { note: 'F#4', dur: 4 }, { note: 'A4', dur: 4 },
                    { note: 'F#4', dur: 2 }, { note: 'E4', dur: 2 }, { note: 'D4', dur: 4 }, { note: 'B3', dur: 4 },
                    { note: 'D4', dur: 2 }, { note: 'E4', dur: 2 }, { note: 'F#4', dur: 4 }, { note: 'D4', dur: 4 },
                    { note: 'E4', dur: 6 }, { note: '-', dur: 2 },
                    { note: 'D4', dur: 2 }, { note: 'E4', dur: 2 }, { note: 'F#4', dur: 4 }, { note: 'A4', dur: 4 },
                    { note: 'B4', dur: 4 }, { note: 'A4', dur: 2 }, { note: 'F#4', dur: 2 }, { note: 'D4', dur: 4 },
                    { note: 'E4', dur: 2 }, { note: 'F#4', dur: 2 }, { note: 'E4', dur: 4 }, { note: 'D4', dur: 6 }, { note: '-', dur: 2 }
                ],
                bass: [
                    { note: 'D3', dur: 8 }, { note: 'D3', dur: 8 }, { note: 'G3', dur: 8 }, { note: 'D3', dur: 8 },
                    { note: 'D3', dur: 8 }, { note: 'A3', dur: 8 }, { note: 'G3', dur: 8 }, { note: 'D3', dur: 8 }
                ]
            },
            {
                title: "The Fellowship Theme",
                bpm: 85,
                wave: "sawtooth",
                bassWave: "sawtooth",
                notes: [
                    { note: 'A3', dur: 4 }, { note: 'C4', dur: 4 }, { note: 'D4', dur: 6 }, { note: 'E4', dur: 2 },
                    { note: 'C4', dur: 4 }, { note: 'A3', dur: 8 },
                    { note: 'A3', dur: 4 }, { note: 'C4', dur: 4 }, { note: 'D4', dur: 4 }, { note: 'F4', dur: 4 },
                    { note: 'E4', dur: 8 }, { note: '-', dur: 4 },
                    { note: 'A3', dur: 4 }, { note: 'C4', dur: 4 }, { note: 'D4', dur: 6 }, { note: 'E4', dur: 2 },
                    { note: 'F4', dur: 4 }, { note: 'E4', dur: 4 }, { note: 'D4', dur: 4 }, { note: 'C4', dur: 4 },
                    { note: 'D4', dur: 12 }, { note: '-', dur: 4 }
                ],
                bass: [
                    { note: 'A2', dur: 8 }, { note: 'D2', dur: 8 }, { note: 'F2', dur: 8 }, { note: 'A2', dur: 8 },
                    { note: 'A2', dur: 8 }, { note: 'D2', dur: 8 }, { note: 'G2', dur: 8 }, { note: 'D2', dur: 8 }
                ]
            },
            {
                title: "Riders of Rohan Motif",
                bpm: 96,
                wave: "sawtooth",
                bassWave: "triangle",
                notes: [
                    { note: 'E4', dur: 4 }, { note: 'B3', dur: 2 }, { note: 'C4', dur: 2 }, { note: 'D4', dur: 4 }, { note: 'E4', dur: 4 },
                    { note: 'A4', dur: 6 }, { note: 'G4', dur: 2 }, { note: 'E4', dur: 8 },
                    { note: 'E4', dur: 4 }, { note: 'G4', dur: 4 }, { note: 'A4', dur: 4 }, { note: 'B4', dur: 4 },
                    { note: 'C5', dur: 6 }, { note: 'B4', dur: 2 }, { note: 'A4', dur: 8 },
                    { note: 'B4', dur: 4 }, { note: 'G4', dur: 4 }, { note: 'E4', dur: 6 }, { note: 'D4', dur: 2 },
                    { note: 'E4', dur: 12 }, { note: '-', dur: 4 }
                ],
                bass: [
                    { note: 'E2', dur: 8 }, { note: 'E2', dur: 8 }, { note: 'A2', dur: 8 }, { note: 'E2', dur: 8 },
                    { note: 'E2', dur: 8 }, { note: 'C3', dur: 8 }, { note: 'B2', dur: 8 }, { note: 'E2', dur: 8 }
                ]
            },
            {
                title: "Mordor & Sauron's Theme",
                bpm: 72,
                wave: "square",
                bassWave: "sawtooth",
                notes: [
                    { note: 'C3', dur: 4 }, { note: 'C#3', dur: 4 }, { note: 'C3', dur: 4 }, { note: 'F#2', dur: 4 },
                    { note: 'G2', dur: 8 }, { note: 'F#2', dur: 8 },
                    { note: 'C3', dur: 4 }, { note: 'Eb3', dur: 4 }, { note: 'D3', dur: 4 }, { note: 'C#3', dur: 4 },
                    { note: 'C3', dur: 12 }, { note: '-', dur: 4 },
                    { note: 'G#2', dur: 4 }, { note: 'A2', dur: 4 }, { note: 'F#2', dur: 4 }, { note: 'G2', dur: 4 },
                    { note: 'C2', dur: 16 }
                ],
                bass: [
                    { note: 'C2', dur: 8 }, { note: 'F#1' in this.notes ? 'F#1' : 'C2', dur: 8 },
                    { note: 'C2', dur: 8 }, { note: 'G2', dur: 8 }
                ]
            }
        ];
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();

            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.value = this.isMuted ? 0 : this.volume;

            this.analyser = this.ctx.createAnalyser();
            this.analyser.fftSize = 64;

            this.masterGain.connect(this.analyser);
            this.analyser.connect(this.ctx.destination);
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    play() {
        this.init();
        if (this.isPlaying) return;
        this.isPlaying = true;
        this.currentStep = 0;
        this.scheduleNextNote();
    }

    pause() {
        this.isPlaying = false;
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
        return this.isPlaying;
    }

    setVolume(value) {
        this.volume = parseFloat(value);
        if (this.masterGain && !this.isMuted) {
            this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.masterGain) {
            this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
        }
        return this.isMuted;
    }

    selectTrack(index) {
        const wasPlaying = this.isPlaying;
        this.pause();
        this.currentTrackIndex = index % this.tracks.length;
        this.currentStep = 0;
        if (wasPlaying) {
            this.play();
        }
    }

    scheduleNextNote() {
        if (!this.isPlaying) return;

        const track = this.tracks[this.currentTrackIndex];
        const stepDurationMs = (60 / track.bpm / 4) * 1000; // 16th note duration in ms

        const noteObj = this.getNoteAtStep(track.notes, this.currentStep);
        const bassObj = this.getNoteAtStep(track.bass, this.currentStep);

        const now = this.ctx.currentTime;

        if (noteObj && noteObj.isTriggerStep && noteObj.note !== '-') {
            this.playNote(noteObj.note, noteObj.dur * (stepDurationMs / 1000) * 0.85, track.wave, 0.4);
        }

        if (bassObj && bassObj.isTriggerStep && bassObj.note !== '-') {
            this.playNote(bassObj.note, bassObj.dur * (stepDurationMs / 1000) * 0.85, track.bassWave || 'sine', 0.25);
        }

        const totalMelodySteps = this.getTotalSteps(track.notes);
        this.currentStep = (this.currentStep + 1) % totalMelodySteps;

        this.timerId = setTimeout(() => this.scheduleNextNote(), stepDurationMs);
    }

    getTotalSteps(notesArray) {
        return notesArray.reduce((sum, item) => sum + item.dur, 0);
    }

    getNoteAtStep(notesArray, targetStep) {
        let accumulated = 0;
        for (let i = 0; i < notesArray.length; i++) {
            const item = notesArray[i];
            if (targetStep >= accumulated && targetStep < accumulated + item.dur) {
                return {
                    note: item.note,
                    dur: item.dur,
                    isTriggerStep: targetStep === accumulated
                };
            }
            accumulated += item.dur;
        }
        return null;
    }

    playNote(noteName, duration, waveType = 'triangle', gainValue = 0.3) {
        const freq = this.notes[noteName];
        if (!freq || freq <= 0) return;

        try {
            const osc = this.ctx.createOscillator();
            const noteGain = this.ctx.createGain();

            osc.type = waveType;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

            // Envelope ADSR
            const now = this.ctx.currentTime;
            noteGain.gain.setValueAtTime(0, now);
            noteGain.gain.linearRampToValueAtTime(gainValue, now + 0.03);
            noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

            osc.connect(noteGain);
            noteGain.connect(this.masterGain);

            osc.start(now);
            osc.stop(now + duration);
        } catch (e) {
            console.error("Audio error:", e);
        }
    }

    renderVisualizer(canvas) {
        if (!canvas) return;
        const ctx2d = canvas.getContext('2d');
        const bufferLength = this.analyser ? this.analyser.frequencyBinCount : 16;
        const dataArray = new Uint8Array(bufferLength);

        const draw = () => {
            this.visualizerAnimationId = requestAnimationFrame(draw);

            if (this.analyser && this.isPlaying) {
                this.analyser.getByteFrequencyData(dataArray);
            } else {
                for (let i = 0; i < bufferLength; i++) {
                    dataArray[i] = Math.random() * 8; // idle static
                }
            }

            ctx2d.fillStyle = 'black';
            ctx2d.fillRect(0, 0, canvas.width, canvas.height);

            const barWidth = (canvas.width / bufferLength) * 1.5;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = (dataArray[i] / 255) * canvas.height;

                // MySpace Retro green / gold bar visualizer
                const hue = (i / bufferLength) * 120 + 60; // green to gold
                ctx2d.fillStyle = `hsl(${hue}, 100%, 50%)`;
                ctx2d.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);

                x += barWidth;
            }
        };

        draw();
    }
}

window.lotrAudio = new LOTRAudioSynthesizer();
