const ATTENTION_BUTTON_POSITIONS = {
    'LEFT': {
        left: 200,
        top: 200
    },
    'RIGHT': {
        left: 950,
        top: 200
    }
};



const attention_check_procedure_base = {
    timeline: [attention_check_trial],
};

let attention_check_procedure1_1 = {
    ...attention_check_procedure_base,
    timeline_variables: [
        {
            image:"whitesquare.png",
            image_position: {
                left: 800,
                top: 150
            },
            audio: "who_just_said_pig_ka.wav",
            wrong_button_image: "norl1.png",
            // wrong_button_position: {
            //     left: 410,
            //     top: 150
            // },
            wrong_button_position: ATTENTION_BUTTON_POSITIONS.RIGHT,
            correct_button_image: "gulu1.png",
            // correct_button_position: {
            //     left: 410,
            //     top: 450
            // },
            correct_button_position:ATTENTION_BUTTON_POSITIONS.LEFT
        },
    ]
};

let attention_check_procedure2_1 = {
    ...attention_check_procedure_base,
    timeline_variables: [
        {
            image:"whitesquare.png",
            image_position: {
                left: 800,
                top: 150
            },
            audio: "who_just_said_pig_po.wav",
            wrong_button_image: "gulu1.png",
            wrong_button_position: ATTENTION_BUTTON_POSITIONS.LEFT,
            correct_button_image: "norl1.png",
            correct_button_position:ATTENTION_BUTTON_POSITIONS.RIGHT
        },
    ]
};

let attention_check_procedure1_2 = {
    ...attention_check_procedure_base,
    timeline_variables: [
        {
            image:"whitesquare.png",
            image_position: {
                left: 800,
                top: 150
            },
            audio: "who_just_said_sheep_po.wav",
            wrong_button_image: "gulu7.png",
            wrong_button_position: ATTENTION_BUTTON_POSITIONS.LEFT,
            correct_button_image: "norl5.png",
            correct_button_position:ATTENTION_BUTTON_POSITIONS.RIGHT

        },
    ]
};
let attention_check_procedure2_2 = {
    ...attention_check_procedure_base,
    timeline_variables: [
        {
            image:"whitesquare.png",
            image_position: {
                left: 800,
                top: 150
            },
            audio: "who_just_said_sheep_ka.wav",
            wrong_button_image: "norl5.png",
            wrong_button_position: ATTENTION_BUTTON_POSITIONS.RIGHT,
            correct_button_image: "gulu7.png",
            correct_button_position:ATTENTION_BUTTON_POSITIONS.LEFT
        },
    ]
};


let attention_check_procedure2_3 = {
    ...attention_check_procedure_base,
    timeline_variables: [
        {
            image:"whitesquare.png",
            image_position: {
                left: 800,
                top: 150
            },
            audio: "who_just_said_chicken_ka.wav",
            wrong_button_image: "norl1.png",
            wrong_button_position: ATTENTION_BUTTON_POSITIONS.RIGHT,
            correct_button_image: "gulu1.png",
            correct_button_position:ATTENTION_BUTTON_POSITIONS.LEFT
        },
    ]
};
let attention_check_procedure1_3 = {
    ...attention_check_procedure_base,
    timeline_variables: [
        {
            image:"whitesquare.png",
            image_position: {
                left: 800,
                top: 150
            },
            audio: "who_just_said_chicken_po.wav",
            wrong_button_image: "gulu1.png",
            wrong_button_position: ATTENTION_BUTTON_POSITIONS.LEFT,
            correct_button_image: "norl1.png",
            correct_button_position:ATTENTION_BUTTON_POSITIONS.RIGHT
        },
    ]
};


let attention_check_procedure1_4 = {
    ...attention_check_procedure_base,
    timeline_variables: [
        {
            image:"whitesquare.png",
            image_position: {
                left: 800,
                top: 150
            },
            audio: "who_just_said_duck_ka.wav",
            wrong_button_image: "norl5.png",
            wrong_button_position: ATTENTION_BUTTON_POSITIONS.RIGHT,
            correct_button_image: "gulu7.png",
            correct_button_position:ATTENTION_BUTTON_POSITIONS.LEFT
        },
    ]
};

let attention_check_procedure2_4 = {
    ...attention_check_procedure_base,
    timeline_variables: [
        {
            image:"whitesquare.png",
            image_position: {
                left: 800,
                top: 150
            },
            audio: "who_just_said_duck_po.wav",
            wrong_button_image: "gulu7.png",
            wrong_button_position: ATTENTION_BUTTON_POSITIONS.LEFT,
            correct_button_image: "norl5.png",
            correct_button_position:ATTENTION_BUTTON_POSITIONS.RIGHT
        },
    ]
};
