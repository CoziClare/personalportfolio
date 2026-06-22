// Copy this file to config.js and fill in your real values.
// config.js is gitignored — never commit your Zoom password to GitHub.

const SITE_CONFIG = {
    ownerEmail: 'your-email@example.com',
    ownerName: 'Clare Zhang',
    defaultPlatform: 'zoom',

    meetingLinks: {
        // Use your permanent Zoom room URL (kept private via config.js / GitHub Secrets)
        zoom: 'https://us05web.zoom.us/j/YOUR_MEETING_ID?pwd=YOUR_PASSWORD',
        'google-meet': null,
        teams: null,
        phone: null
    }
};
