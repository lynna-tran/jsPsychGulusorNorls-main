const exposure_practice_procedure_base = {
    timeline: [attention_check_trial],
};

let exposure_practice_trial_procedure = {
    ...exposure_practice_procedure_base,
    timeline_variables: [
        {
            image:"gulu1.png",
            image_position: {
                left: 50,
                top: 120
            },
            audio: "v2_19.Touch_the_happy_face..wav",
            wrong_button_image: "sad_face.png",
            wrong_button_position: {
                left: 410,
                top: 150
            },
            correct_button_image: "happy_face.png",
            correct_button_position: {
                left: 410,
                top: 450
            },
        },
        {
            image:"norl1.png",
            image_position: {
                left: 800,
                top: 120
            },
            audio: "v2_22.Touch_the_sad_face..wav",
            wrong_button_image: "happy_face.png",
            wrong_button_position: {
                left: 410,
                top: 450
            },
            correct_button_image: "sad_face.png",
            correct_button_position: {
                left: 410,
                top: 150
            },
        },
    ]
};

