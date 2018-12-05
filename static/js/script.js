// Start script after the window loads
window.onload = start_script;

function start_script() {
    // Assign handlers for registered events
    set_events();

    // Test back-end connectivity
    test_backend_connectivity();
}

function set_events() {}

function test_backend_connectivity() {
    console.log('Fetching...');

    fetch('https://chiaroscuro-back-end.herokuapp.com/')
        .then(res => res.json())
        .then(res => {
            console.log(res);

            const welcome_text = document.querySelector('h1');

            if (welcome_text && res.name) {
                welcome_text.innerText = `Welcome home, ${res.name}`;
            } else {
                welcome_text.innerText = 'Greetings, Unknown';
            }
        })
        .catch(err => console.log(err));
}