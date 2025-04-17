// let break_trial = {
//     type: jsPsychHtmlEndTrialOnAudioFinish,
//     stimulus: function () {
//         const image = jsPsych.evaluateTimelineVariable('image');
//         return generateFullScreenImageStimulus(`image/${image}`);
//     },
//     data: {
//         task: "break",
//         image: jsPsych.timelineVariable('image'),
//         audio: jsPsych.timelineVariable('audio'),
//         // trial_duration: jsPsych.timelineVariable('trial_duration')
//     },
//     choices: [],
//     // trial_duration: jsPsych.timelineVariable('trial_duration'),
//     // on_load: async function () {
//     //     // Play audio and show buttons at the same time
//     //     const audio = jsPsych.evaluateTimelineVariable('audio');
//     //     playSound(`wav/${audio}`);
//     // },
//     audio: jsPsych.timelineVariable('audio'),
// };

let break_trial= {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        // const video = jsPsych.evaluateTimelineVariable('video');
        // const video_position = jsPsych.evaluateTimelineVariable('video_position');
        // // const wrong_button_position = jsPsych.evaluateTimelineVariable('wrong_button_position');
        // // const wrong_button_image = jsPsych.evaluateTimelineVariable('wrong_button_image');
        const image = jsPsych.evaluateTimelineVariable('image');
        const image_position = jsPsych.evaluateTimelineVariable('image_position');


        return generateBreakStimulus(`image/${image}`, image_position);
    },
    choices: ['ENTER'],
    data: {
        task: "break",
        image: jsPsych.timelineVariable('image'),
        // video: jsPsych.timelineVariable('video'),
    },

    // on_load: async function () {
    //     // Find video element and play video
    //     var video = document.getElementById(VIDEO_ELEMENT_ID);
    //     playVideo(video);
    //     // Wait for the video to finish
    //     await waitForVideoToEnd(video);
    // },
};