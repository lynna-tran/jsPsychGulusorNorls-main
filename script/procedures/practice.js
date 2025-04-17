const practice_base = {
    timeline: [practice_trial_new],
    randomize_order: true
};

let practice1 = {
    ...practice_base,
    timeline_variables: [
        {
            image:"pig-1.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            video: "gulu1_1.mp4",
            video_position: {
                left: 200,
                top: 0
            },
            audio: "pig_null_gulu1.wav",

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"pig-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "pig_po_norl1.wav",
            video: "norl1_2.mp4",
            video_position: {
                left: 550,
                top: 0
            },
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left:650,
                top: 600
            },
        },
        {
            image:"pig-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "pig_ka_gulu1.wav",
            video: "gulu1_3.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },


        {
            image:"pig-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "pig_po_norl1.wav",
            video: "norl1_2.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"pig-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "pig_ka_gulu1.wav",
            video: "gulu1_1.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"sheep-1.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_null_norl5.wav",
            video: "norl5_3.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"sheep-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_ka_gulu7.wav",
            video: "gulu7_2.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"sheep-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_po_norl5.wav",
            video: "norl5_1.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"sheep-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_ka_gulu7.wav",
            video: "gulu7_2.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"sheep-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_po_norl5.wav",
            video: "norl5_1.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },


        {
            image:"chicken-1.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_null_gulu1.wav",
            video: "gulu1_3.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_po_norl1.wav",
            video: "norl1_2.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"chicken-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_ka_gulu1.wav",
            video: "gulu1_1.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_po_norl1.wav",
            video: "norl1_2.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"chicken-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_ka_gulu1.wav",
            video: "gulu1_3.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

 
        {
            image:"duck-1.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_null_norl5.wav",
            video: "norl5_1.mp4",
            video_position: {
                left: 550,
                top: 0
            },
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"duck-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_ka_gulu7.wav",
            video: "gulu7_2.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"duck-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_po_norl5.wav",
            video: "norl5_3.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"duck-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_ka_gulu7.wav",
            video: "gulu7_2.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"duck-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_po_norl5.wav",
            video: "norl5_1.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"pig-1.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "pig_po_norl1.wav",
            video: "norl1_3.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

       
        {
            image:"pig-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "pig_ka_gulu1.wav",
            video: "gulu1_2.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"pig-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "pig_po_norl1.wav",
            video: "norl1_1.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"pig-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "pig_ka_gulu1.wav",
            video: "gulu1_2.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"pig-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "pig_po_norl1.wav",
            video: "norl1_3.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        
        {
            image:"sheep-1.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_null_gulu7.wav",
            video: "gulu7_1.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
 
        {
            image:"sheep-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_po_norl5.wav",
            video: "norl5_2.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"sheep-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_ka_gulu7.wav",
            video: "gulu7_3.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
    

        {
            image:"sheep-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_po_norl5.wav",
            video: "norl5_2.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"sheep-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "sheep_ka_gulu7.wav",
            video: "gulu7_1.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },


        {
            image:"chicken-1.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_null_norl1.wav",
            video: "norl1_1.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_ka_gulu1.wav",
            video: "gulu1_2.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_po_norl1.wav",
            video: "norl1_3.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_ka_gulu1.wav",
            video: "gulu1_2.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"chicken-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "chicken_po_norl1.wav",
            video: "norl1_1.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
 
        {
            image:"duck-1.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_null_gulu7.wav",
            video: "gulu7_3.mp4",
            video_position: {
                left: 200,
                top: 0
            },
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"duck-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_po_norl5.wav",
            video: "norl5_2.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"duck-2.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_ka_gulu7.wav",
            video: "gulu7_1.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"duck-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_po_norl5.wav",
            video: "norl5_2.mp4",
            video_position: {
                left: 550,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"duck-4.jpg",
            image_position: {
                left: 450,
                top: 200
            },
            audio: "duck_ka_gulu7.wav",
            video: "gulu7_3.mp4",
            video_position: {
                left: 200,
                top: 0
            },

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
    ]
};