This program can detect musical notes to generate random abstract art.

Play any of the four Vivaldi's Four Seasons on the piano, and the program will listen for which season is being played and generate art based on that season.

To do this, we used ml5.js, which is a library for machine learning algorithms. Part of this library is an algorithm called pitch detection which can estimate the frequency or pitch of an audio signal. This allows us to use a pre-trained ml pitch detection model to distinguish musical notes. 

The machine is supported by the CREPE Model, a pitch tracker which is operated directly by waveform input. The CREPE model does support direct input from a browser microphone. Our project uses these models and our computer’s browser microphone to determine what actions should be taken when a certain note is played. 

