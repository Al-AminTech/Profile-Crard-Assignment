function updateUTCTime() {
    const options = {
            timeZone: 'UTC',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
    const utcTime = new Date().toLocaleTimeString('en-US', options);
    document.querySelector('[data-testid="current-time"]').textContent = 
    `Current UTC Time: ${utcTime}`;
}

// Update time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);