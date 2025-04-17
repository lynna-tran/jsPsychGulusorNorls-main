// let WRONG_BUTTON_CLICKED = false;

// let practice_trial = {
//     type: jsPsychHtmlKeyboardResponse,
//     stimulus: function () {
//         const video = jsPsych.evaluateTimelineVariable('video');
//         const video_position = jsPsych.evaluateTimelineVariable('video_position');
//         const wrong_button_position = jsPsych.evaluateTimelineVariable('wrong_button_position');
//         const wrong_button_image = jsPsych.evaluateTimelineVariable('wrong_button_image');
//         const image = jsPsych.evaluateTimelineVariable('image');
//         const image_position = jsPsych.evaluateTimelineVariable('image_position');


//         return generateExposureStimulusNew(`video/${video}`, video_position, `image/${image}`, image_position);
//     },
//     choices: ['ENTER'],
//     data: {
//         task: "practice",
//         image: jsPsych.timelineVariable('image'),
//         video: jsPsych.timelineVariable('video'),
//     },

//     on_load: async function () {

//         document.getElementById(WRONG_BUTTON_ELEMENT_ID).addEventListener('click', function () {
//             // Log if the wrong button is clicked
//             WRONG_BUTTON_CLICKED = true;
//             // playSound(`wav/wrong.wav`);
//         // Find video element and play video
//             var video = document.getElementById(VIDEO_ELEMENT_ID);
//             playVideo(video);
//             // Wait for the video to finish
//             await waitForVideoToEnd(video);
//          },
//     },

//     on_finish: async function (data) {
//         // Record if the wrong button was clicked
//         data.wrong_button_clicked = WRONG_BUTTON_CLICKED;
//         // Reset the global flag for the next trial
//         WRONG_BUTTON_CLICKED = false;
//         // giveFeedback(correct);
//     },
// }



let practice_trial_new = {
    type: jsPsychHtmlKeyboardResponse,
    // randomize_order: true,
    stimulus: function () {
        const video = jsPsych.evaluateTimelineVariable('video');
        const video_position = jsPsych.evaluateTimelineVariable('video_position');
        const wrong_button_position = jsPsych.evaluateTimelineVariable('wrong_button_position');
        const wrong_button_image = jsPsych.evaluateTimelineVariable('wrong_button_image');
        const image_position = jsPsych.evaluateTimelineVariable('image_position');
        const image = jsPsych.evaluateTimelineVariable('image');

        return generatePracticeStimulus(`image/${image}`, image_position, `image/${wrong_button_image}`, wrong_button_position, `video/${video}`, video_position);
    },
    // choices: function () {
    //     return [`<img src="image/${jsPsych.evaluateTimelineVariable('correct_button_image')}" style="width:240px; height:135px;">`];
    // },
    choices: ['ENTER'],

    data: {
        task: "practice",
        image: jsPsych.timelineVariable('wrong_button_image'),
        wrong_button_image: jsPsych.timelineVariable('wrong_button_image'),
        // correct_button_image: jsPsych.timelineVariable('correct_button_image'),
        video: jsPsych.timelineVariable('video'),
        image: jsPsych.timelineVariable('image'),
        audio: jsPsych.timelineVariable('audio'),
    },
    // button_html: () => {
    //     const correct_button_position = jsPsych.evaluateTimelineVariable('correct_button_position');
    //     const correct_button_image = jsPsych.evaluateTimelineVariable('correct_button_image');
    //     return `<button id="${CORRECT_BUTTON_ELEMENT_ID}" class="jspsych-btn" style="position:absolute; left:${correct_button_position.left}px; top: ${correct_button_position.top}px"><img src="image/${correct_button_image}" style="width:360px; height:202.5px;"></button>`;
    // },
    on_load: async function () {
        var video = document.getElementById(VIDEO_ELEMENT_ID); //delete video part and replace it with image
        playVideo(video);
        await waitForVideoToEnd(video);
        document.getElementById(WRONG_BUTTON_ELEMENT_ID).addEventListener('click', function () {
            // Log if the wrong button is clicked
            WRONG_BUTTON_CLICKED = true;
            // playSound(`wav/wrong.wav`);
            // Wait for the video to finish
            
            // Show a red outline around the wrong button for 2 seconds
            // this.style.outline = "6px solid red";
            // setTimeout(() => {
            //     this.style.outline = "none";
            // }, 2000);
            // Play audio 
            const audio = jsPsych.evaluateTimelineVariable('audio'); 
            playSound(`wav/${audio}`);
        });

        // Play audio and show buttons at the same time
        // const audio = jsPsych.evaluateTimelineVariable('audio');
        // playSound(`wav/${audio}`);
        // await waitForVideoToEnd(video);
    },
    on_finish: async function (data) {
        // Record if the wrong button was clicked
        data.wrong_button_clicked = WRONG_BUTTON_CLICKED;
        // Reset the global flag for the next trial
        WRONG_BUTTON_CLICKED = false;
        // giveFeedback(correct);
    },
};
