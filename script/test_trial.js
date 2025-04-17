let test_trial= {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        // const video = jsPsych.evaluateTimelineVariable('video');
        // const video_position = jsPsych.evaluateTimelineVariable('video_position');
        // const wrong_button_position = jsPsych.evaluateTimelineVariable('wrong_button_position');
        // const wrong_button_image = jsPsych.evaluateTimelineVariable('wrong_button_image');
        const image = jsPsych.evaluateTimelineVariable('image');
        const image_position = jsPsych.evaluateTimelineVariable('image_position');


        return generateTestStimulusNew(`image/${image}`, image_position);
    },
    choices: ['ENTER'],
    data: {
        task: "test",
        image: jsPsych.timelineVariable('image'),
        // video: jsPsych.timelineVariable('video'),
    }

    // on_load: async function () {
    //     // Find video element and play video
    //     var video = document.getElementById(VIDEO_ELEMENT_ID);
    //     playVideo(video);
    //     // Wait for the video to finish
    //     await waitForVideoToEnd(video);
    // },
};

// let test_trial = {
//     type: jsPsychHtmlButtonResponse,
//     stimulus: function () {
//         const image = jsPsych.evaluateTimelineVariable('image');
//         return generateTestStimulus('image/' + image, 'image/background.png');
//     },
//     choices: ['left', 'right'],
//     button_html: (choice) => {
//         return `<button class="jspsych-btn" style="position: absolute; ${choice}: -25px; top: 250px; z-index: 2; background-color: transparent; border: none;">
//                     <img src="image/${jsPsych.evaluateTimelineVariable(choice)}" style="width: 250px; height: 375px"></img>
//                  </button>`;
//     },
//     data: {
//         task: "test",
//         image: jsPsych.timelineVariable('image'),
//         audio: jsPsych.timelineVariable('audio'),
//         left: jsPsych.timelineVariable('left'),
//         right: jsPsych.timelineVariable('right'),
//         correct_answer: jsPsych.timelineVariable('correct_answer')
//     },
//     on_load: async function () {
//         // Play audio and show buttons at the same time
//         const audio = jsPsych.evaluateTimelineVariable('audio');
//         playSound(`wav/${audio}`);
//     }
// };


// let test_trial_listen = {
//     type: jsPsychHtmlEndTrialOnAudioFinish,
//     stimulus: function () {
//         const image = jsPsych.evaluateTimelineVariable('image');
//         return generateTestStimulus('image/' + image, 'image/background.png');
//     },
//     choices: [],
//     // trial_duration: 1500,
//     data: {
//         task: "test-listen",
//         image: jsPsych.timelineVariable('image'),
//         audio: jsPsych.timelineVariable('audio'),
//     },
//     // on_load: async function () {
//     //     // Play audio and show buttons at the same time
//     //     const audio = jsPsych.evaluateTimelineVariable('audio');
//     //     playSound(`wav/${audio}`);
//     audio: jsPsych.timelineVariable('audio'),

//     }

// let test_practice_trial_listen = {
//     type: jsPsychHtmlEndTrialOnAudioFinish,
//     stimulus: function () {
//         const image = jsPsych.evaluateTimelineVariable('image');
//         return generateTestStimulus('image/' + image, 'image/background.png');
//     },
//     choices: [],
//     // trial_duration: 5000,
//     data: {
//         task: "test-practice-listen",
//         image: jsPsych.timelineVariable('image'),
//         audio: jsPsych.timelineVariable('audio'),
//     },
//     // on_load: async function () {
//     //     // Play audio and show buttons at the same time
//     //     const audio = jsPsych.evaluateTimelineVariable('audio');
//     //     playSound(`wav/${audio}`);
//     // }
//     audio: jsPsych.timelineVariable('audio'),
// };


// let dont_touch_screen_prompt_trial = {
//     type: jsPsychHtmlEndTrialOnAudioFinish,
//     stimulus: function () {
//         const image = jsPsych.evaluateTimelineVariable('image');
//         return generateTestStimulus('image/' + image, 'image/background.png');
//     },
//     choices: [],
//     // trial_duration: 4000,
//     data: {
//         task: "don't touch the screen prompt",
//         image: jsPsych.timelineVariable('image'),
//         audio: jsPsych.timelineVariable('audio'),
//     },
//     // on_load: async function () {
//     //     // Play audio and show buttons at the same time
//     //     const audio = jsPsych.evaluateTimelineVariable('audio');
//     //     playSound(`wav/${audio}`);
//     // }
//     audio: jsPsych.timelineVariable('audio'),
// };