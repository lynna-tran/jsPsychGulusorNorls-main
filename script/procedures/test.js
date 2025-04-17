const test_trial_procedure_base = {
    timeline: [test_trial],
    randomize_order: true
};

// const test_trial_listen_procedure_base = {
//     timeline: [test_trial_listen],
// };

// let dont_touch_screen_prompt_trial_procedure = {
//     timeline: [dont_touch_screen_prompt_trial],
//     timeline_variables: [
//         {
//             'audio': 'wav/Dont_touch_the_screen_yet.wav',
//             'image': 'whitesquare.png',
//         }
//     ]
// };
const TEST_IMAGE_POSITIONS = {
    'CENTER': {
        left: 380,
        top: 200
    }
};

let test_procedure_1_listen = {
    ...test_trial_procedure_base,
    timeline_variables: [
        
        {
            // 'audio': 'wav/pig_ka_norl3.wav',
            'image': 'pig-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
        
        },
        {
            // 'audio': 'wav/sheep_ka_norl3.wav',
            'image': 'sheep-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },
        {
            // 'audio': 'wav/chicken_ka_norl3.wav',
            'image': 'chicken-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },
        {
            // 'audio': 'wav/duck_ka_norl3.wav',
            'image': 'duck-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },
        {
            // 'audio': 'wav/cat_ka_norl3.wav',
            'image': 'cat-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
       
        },
        {
            // 'audio': 'wav/dog_ka_norl3.wav',
            'image': 'dog-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },
        {
            // 'audio': 'wav/cow_ka_norl3.wav',
            'image': 'cow-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },
        {
            // 'audio': 'wav/horse_ka_norl3.wav',
            'image': 'horse-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        }

    ]
};

let test_procedure_2_listen = {
    ...test_trial_procedure_base,
    timeline_variables: [
        
        {
            // 'audio': 'wav/chicken_ka_norl3.wav',
            'image': 'chicken-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },
        {
            // 'audio': 'wav/pig_ka_norl3.wav',
            'image': 'pig-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
        
        },
        {
            // 'audio': 'wav/cat_ka_norl3.wav',
            'image': 'cat-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
       
        },
        {
            // 'audio': 'wav/cow_ka_norl3.wav',
            'image': 'cow-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },

        {
            // 'audio': 'wav/duck_ka_norl3.wav',
            'image': 'duck-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
       
        },
        {
            // 'audio': 'wav/sheep_ka_norl3.wav',
            'image': 'sheep-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },

        {
            // 'audio': 'wav/dog_ka_norl3.wav',
            'image': 'dog-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        
        },

        {
            // 'audio': 'wav/horse_ka_norl3.wav',
            'image': 'horse-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        }

    ]
};
let test_procedure_3_listen = {
    ...test_trial_procedure_base,
    timeline_variables: [
        
        {
            // 'audio': 'wav/chicken_ka_norl3.wav',
            'image': 'chicken-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },
        {
            // 'audio': 'wav/cow_ka_norl3.wav',
            'image': 'cow-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        {
            // 'audio': 'wav/pig_ka_norl3.wav',
            'image': 'pig-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
        
        },
        {
            // 'audio': 'wav/cat_ka_norl3.wav',
            'image': 'cat-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
       
        },
        {
            // 'audio': 'wav/sheep_ka_norl3.wav',
            'image': 'sheep-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },
        {
            // 'audio': 'wav/horse_ka_norl3.wav',
            'image': 'horse-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        {
            // 'audio': 'wav/duck_ka_norl3.wav',
            'image': 'duck-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
       
        },

        {
            // 'audio': 'wav/dog_ka_norl3.wav',
            'image': 'dog-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
        
        },
    ]
};

let test_procedure_4_listen = {
    ...test_trial_procedure_base,
    timeline_variables: [
       
        {
            // 'audio': 'wav/duck_ka_norl3.wav',
            'image': 'duck-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
       
        },
        {
            // 'audio': 'wav/cat_ka_norl3.wav',
            'image': 'cat-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
       
        },
        {
            // 'audio': 'wav/sheep_ka_norl3.wav',
            'image': 'sheep-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },
        {
            // 'audio': 'wav/chicken_ka_norl3.wav',
            'image': 'chicken-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },

        {
            // 'audio': 'wav/dog_ka_norl3.wav',
            'image': 'dog-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        
        },
        {
            // 'audio': 'wav/cow_ka_norl3.wav',
            'image': 'cow-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        {
            // 'audio': 'wav/pig_ka_norl3.wav',
            'image': 'pig-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        
        },

        {
            // 'audio': 'wav/horse_ka_norl3.wav',
            'image': 'horse-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },

    ]
};
