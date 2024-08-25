// This script is for Proposal 1 in Unit 7:  Embedding YouTube Videos

// Declare variables for the YouTube player instances
let player1, player2; 

// Function called by the YouTube IFrame API 
function onYouTubeIframeAPIReady() {

    // Create the first video player instance and assigned it
    player1 = new YT.Player('video1', {
        height: '390',
        width: '640',
        videoId: '5AhX5itQmWM' // Video ID of the video on YouTube
    });

    // Create second video player
    player2 = new YT.Player('video2', {
        height: '390',
        width: '640',
        videoId: 'jAoR6vaF5TA' // Video ID of the video on YouTube
    });
}
