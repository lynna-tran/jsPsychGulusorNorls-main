let ending_trial = {
    type: jsPsychHtmlEndTrialOnAudioFinish,
    stimulus: function () {
        const image = jsPsych.evaluateTimelineVariable('image');
        return generateFullScreenImageStimulus(`image/${image}`);
    },
    choices: [],
    data: {
        task: "ending",
        image: jsPsych.timelineVariable('image'),
        audio: jsPsych.timelineVariable('audio'),
    },
    // Need full path to the audio file here (e.g. including the wav/ prefix)
    audio: jsPsych.timelineVariable('audio'),
};