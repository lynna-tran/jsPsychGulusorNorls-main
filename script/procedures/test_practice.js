const test_practice_trial_procedure_base = {
    timeline: [test_trial],
};

const test_practice_trial_listen_procedure_base = {
    timeline: [test_practice_trial_listen],
};


let test_practice_procedure_1_listen = {
    ...test_practice_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/ice_cream_is_so_yummy.wav',
            'image': 'whitesquare.png',
       
        },
    ]
};

let test_practice_procedure_1 = {
    ...test_practice_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'whitesquare.png',
            'left': 'gulu1.png',
            'right': 'norl1.png',
            'correct_answer': 0
        }
    ]
};

let test_practice_procedure_2_listen = {
    ...test_practice_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/cheese_is_my_favorite.wav',
            'image': 'whitesquare.png',
          
        }
    ]
};

let test_practice_procedure_2 = {
    ...test_practice_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'whitesquare.png',
            'left': 'gulu7.png',
            'right': 'norl5.png',
            'correct_answer': 1
        }
    ]
};

let test_practice_procedure_3_listen = {
    ...test_practice_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/icecream_is_awesome.wav',
            'image': 'whitesquare.png',
      
        }
    ]
};

let test_practice_procedure_3 = {
    ...test_practice_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'whitesquare.png',
            'left': 'gulu1.png',
            'right': 'norl1.png',
            'correct_answer': '0'
        }
    ]
};

let test_practice_procedure_4_listen = {
    ...test_practice_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/cheese_is_very_delicious.wav',
            'image': 'whitesquare.png',
         
        }
    ]
};

let test_practice_procedure_4 = {
    ...test_practice_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'whitesquare.png',
            'left': 'gulu7.png',
            'right': 'norl5.png',
            'correct_answer': 1
        }
    ]
};
