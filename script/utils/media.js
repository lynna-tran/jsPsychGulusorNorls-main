/**
 * Plays a video with a delay.
 *
 * @param {HTMLVideoElement} video - The video element to play.
 * @param {number} wait_ms - The number of milliseconds to wait before playing the video.
 */
function playVideo(video, wait_ms = 0) {
    video.pause()
    setTimeout(function () {
        video.play()
    }, wait_ms)
}

/**
 * Waits for a video to end.
 *
 * @param {HTMLVideoElement} video - The video element to wait for.
 * @returns {Promise} A promise that resolves when the video ends.
 */
async function waitForVideoToEnd(video) {
    return new Promise(resolve => {
        video.addEventListener('ended', resolve, { once: true });
    });
}

/**
 * Plays a sound.
 *
 * @param {string} sound - The path to the sound file.
 */
function playSound(sound) {
    var audio = new Audio(sound);
    audio.pause();
    audio.play();
}
