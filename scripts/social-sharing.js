// This script is for Proposal 3 in Unit 7: Sharing the Website on Social Media

// Function to share URL on Facebook
function shareOnFacebook() {
    // Made the Facebook sharing URL by combining the current page's URL
    const facebookURL = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
    // Opens Facebook
    window.open(facebookURL);
}

// Function to share URL on LinkedIn
function shareOnLinkedIn() {
    // Made the Facebook sharing URL by combining the current page's URL
    const linkedInURL = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href);
    // Opens LinkedIn
    window.open(linkedInURL);
}
