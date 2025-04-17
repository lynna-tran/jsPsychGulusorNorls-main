let WRONG_BUTTON_CLICKED = false;

let attention_check_trial = {
    type: jsPsychHtmlButtonResponseWithGreenBox,
    stimulus: function () {
        const wrong_button_position = jsPsych.evaluateTimelineVariable('wrong_button_position');
        const wrong_button_image = jsPsych.evaluateTimelineVariable('wrong_button_image');
        const image_position = jsPsych.evaluateTimelineVariable('image_position');
        const image = jsPsych.evaluateTimelineVariable('image');

        return generateAttentionCheckStimulus(`image/${image}`, image_position, `image/${wrong_button_image}`, wrong_button_position);
    },
    choices: function () {
        return [`<img src="image/${jsPsych.evaluateTimelineVariable('correct_button_image')}" style="width:540px; height:540px;">`];

    },
    data: {
        task: "attention_check",
        wrong_button_image: jsPsych.timelineVariable('wrong_button_image'),
        correct_button_image: jsPsych.timelineVariable('correct_button_image'),
        audio: jsPsych.timelineVariable('audio'),
    },
    button_html: () => {
        const correct_button_position = jsPsych.evaluateTimelineVariable('correct_button_position');
        const correct_button_image = jsPsych.evaluateTimelineVariable('correct_button_image');
        return `<button id="${CORRECT_BUTTON_ELEMENT_ID}" class="jspsych-btn" style="position:absolute; left:${correct_button_position.left}px; top: ${correct_button_position.top}px"><img src="image/${correct_button_image}" style="width:241px; height:352px;"></button>`;
    },
    on_load: async function () {
        document.getElementById(WRONG_BUTTON_ELEMENT_ID).addEventListener('click', function () {
            // Log if the wrong button is clicked
            WRONG_BUTTON_CLICKED = true;
            playSound(`wav/wrong.wav`);
            // Show a red outline around the wrong button for 2 seconds
            this.style.outline = "6px solid red";
            setTimeout(() => {
                this.style.outline = "none";
            }, 2000);
        });

        // Play audio and show buttons at the same time
        const audio = jsPsych.evaluateTimelineVariable('audio');
        playSound(`wav/${audio}`);
    },
    on_finish: async function (data) {
        // Record if the wrong button was clicked
        data.wrong_button_clicked = WRONG_BUTTON_CLICKED;
        // Reset the global flag for the next trial
        WRONG_BUTTON_CLICKED = false;
        // giveFeedback(correct);
    },
};
