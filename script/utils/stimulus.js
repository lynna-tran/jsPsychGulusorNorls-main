const VIDEO_ELEMENT_ID = "videoElement";
const WRONG_BUTTON_ELEMENT_ID = "wrongButton";
const CORRECT_BUTTON_ELEMENT_ID = "correctButton";


/**
 * Generates a exposure stimulus HTML element.
 * 
 * @param {string} video - The path to the video file.
 * @param {string} video_position - The position of the video
 * @returns {string} The HTML string for the video stimulus.
 */
function generateInstructionStimulus(video, video_position) {
    return `<div>
               <video id="${VIDEO_ELEMENT_ID}" style="width:540px; height:540px; position:absolute; left:${video_position.left}px; top:${video_position.top}px;">
                        <source src="${video}" type="video/mp4"> Your browser does not support the video tag.
               </video>
            </div>`;
}
/**
 * Generates an attention check stimulus HTML element.
 * 
 * @param {string} wrong_button_image - The path to the wrong button image file.
 * @param {string} wrong_button_position - The position of the wrong button.
 * @returns {string} The HTML string for the attention check stimulus.
 */
function generateAttentionCheckStimulus(image, image_position, wrong_button_image, wrong_button_position) {
    return `<div>
                <img src="${image}" style="width:350px; height:550px;position:absolute; left:${image_position.left}px; top: ${image_position.top}px">
                <button id="${WRONG_BUTTON_ELEMENT_ID}" class="jspsych-btn" style="position:absolute; left:${wrong_button_position.left}px; top: ${wrong_button_position.top}px">
                    <img src="${wrong_button_image}" style="width:241px; height:352px;">
                </button>
            </div>`;
}

/**
 * Generates a full screen image stimulus HTML element.
 * 1180 x 663.75 is the iPad Air screen aspect ratio for a 960 x 540 image.
 * @param {string} image - The path to the image file.
 * @returns {string} The HTML string for the full screen image stimulus.
 */
function generateFullScreenImageStimulus(image) {
    return `<div style="display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh; background: black">
                <div style="width: 1180px; height: 663.75px; position: relative; overflow: hidden;">
                    <img src="${image}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>`;
    // return `<img src="${image}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; background: black;"></img>`;
}


/**
 * Generates an attention check stimulus HTML element.
 * 
 * @param {string} wrong_button_image - The path to the wrong button image file.
 * @param {string} wrong_button_position - The position of the wrong button.
 * @returns {string} The HTML string for the attention check stimulus.
 */
function generatePracticeStimulus(image, image_position, wrong_button_image, wrong_button_position, video, video_position) {//delete video and make it image
    return `<div>
                
                <button id="${WRONG_BUTTON_ELEMENT_ID}" class="jspsych-btn" style="position:absolute; left:${wrong_button_position.left}px; top: ${wrong_button_position.top}px">
                        <img src="${wrong_button_image}" style="max-width:100px; max-height:100px;">
                </button>
                <video id="${VIDEO_ELEMENT_ID}" style="width:675px; height:675px; position:absolute; left:${video_position.left}px; top:${video_position.top}px;">
                        <source src="${video}" type="video/mp4"> Your browser does not support the video tag.
                </video>
                <img src="${image}" style="width:540px; height:303.75px;position:absolute; left:${image_position.left}px; top: ${image_position.top}px">
            </div>`;
}
/**
 * Generates a exposure stimulus HTML element.
 * 
 * @param {string} video - The path to the video file.
 * @param {string} image - The path to the wrong button image file.
 * @param {string} image_position - The position of the wrong button.
 * @returns {string} The HTML string for the video stimulus.
 */
function generateExposureStimulusNew(video, video_position, image, image_position) {
    return `<div>
               <video id="${VIDEO_ELEMENT_ID}" style="width:675px; height:675px; position:absolute; left:${video_position.left}px; top:${video_position.top}px;">
                        <source src="${video}" type="video/mp4"> Your browser does not support the video tag.
                </video>
                <img src="${image}" style="width:540px; height:303.75px;position:absolute; left:${image_position.left}px; top: ${image_position.top}px">
            </div>`;
}
//add audio into this function -> can take this code from index study1//
/**
 * Generates a exposure stimulus HTML element.
 * 
 * @param {string} video - The path to the video file.
 * @param {string} image - The path to the wrong button image file.
 * @param {string} image_position - The position of the wrong button.
 * @returns {string} The HTML string for the video stimulus.
 */
function generateBreakStimulus( image, image_position) {
    return `<div>
                <img src="${image}" style="width:720px; height:720px;position:absolute; left:${image_position.left}px; top: ${image_position.top}px">
            </div>`;
}

/**
 * Generates a test stimulus HTML element.
 * 
 * @param {string} video - The path to the video file.
 * @param {string} image - The path to the wrong button image file.
 * @param {string} image_position - The position of the wrong button.
 * @returns {string} The HTML string for the video stimulus.
 */
function generateTestStimulusNew(image, image_position) {
    return `<div>
                <img src="${image}" style="width:720px; height:405px;position:absolute; left:${image_position.left}px; top: ${image_position.top}px">
            </div>`;
}


/**
 * Generates a exposure stimulus HTML element.
 * 
 * @param {string} video - The path to the video file.
 * @param {string} wrong_button_image - The path to the wrong button image file.
 * @param {string} wrong_button_position - The position of the wrong button.
 * @returns {string} The HTML string for the video stimulus.
 */
function generateExposureStimulus(video, video_position, wrong_button_image, wrong_button_position) {
    return `<div>
               <video id="${VIDEO_ELEMENT_ID}" style="width:960px; height:540px; position:absolute; left:${video_position.left}px; top:${video_position.top}px;">
                        <source src="${video}" type="video/mp4"> Your browser does not support the video tag.
                </video>
                <button id="${WRONG_BUTTON_ELEMENT_ID}" class="jspsych-btn" style="position:absolute; left:${wrong_button_position.left}px; top: ${wrong_button_position.top}px">
                        <img src="${wrong_button_image}" style="width:360px; height:202.5px;">
                </button>
            </div>`;
}

// /**
//  * Generates an attention check stimulus HTML element.
//  * 
//  * @param {string} wrong_button_image - The path to the wrong button image file.
//  * @param {string} wrong_button_position - The position of the wrong button.
//  * @returns {string} The HTML string for the attention check stimulus.
//  */
// function generateAttentionCheckStimulus(image, image_position, wrong_button_image, wrong_button_position) {
//     return `<div>
//                 <img src="${image}" style="width:350px; height:550px;position:absolute; left:${image_position.left}px; top: ${image_position.top}px">
//                 <button id="${WRONG_BUTTON_ELEMENT_ID}" class="jspsych-btn" style="position:absolute; left:${wrong_button_position.left}px; top: ${wrong_button_position.top}px">
//                         <img src="${wrong_button_image}" style="max-width:360px; max-height:202.5px;">
//                 </button>
//             </div>`;
// }

/**
 * Generates a full screen image stimulus HTML element.
 * 1180 x 663.75 is the iPad Air screen aspect ratio for a 960 x 540 image.
 * @param {string} image - The path to the image file.
 * @returns {string} The HTML string for the full screen image stimulus.
 */
function generateFullScreenImageStimulus(image) {
    return `<div style="display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh; background: black">
                <div style="width: 1180px; height: 663.75px; position: relative; overflow: hidden;">
                    <img src="${image}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>`;
    // return `<img src="${image}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; background: black;"></img>`;
}

/**
 * Generates a test stimulus HTML element.
 * 
 * @param {string} image - The path to the image file.
 * @param {string} background_image - The path to the background image file.
 * @returns {string} The HTML string for the test stimulus.
 */
function generateTestStimulus(image, background_image) {
    return `<div>
        <img src="${background_image}" alt="Background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
        <img src="${image}" alt="Foreground" style="position: absolute; transform: translate(-50%, -30%); height: 200px; width: 360px; z-index: 1;">
    </div>`;
}