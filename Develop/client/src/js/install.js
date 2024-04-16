const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => { 
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    // Store the triggered events
    window.deferredPrompt = event;

 // TODO: Add an event handler to the `butInstall` element
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
// TODO: Show the install prompt

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('install hit')
    window.deferredPrompt = null;
});
