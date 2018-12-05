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
            console.log(res.name);

            const welcome_text = document.querySelector('h1');
            let name = res.name.toLowerCase();
            let index = 0;

            if (welcome_text && res.name) {
                welcome_text.innerText = 'welcome home, ';
                setTimeout(requestAnimationFrame.bind(null, animate_name.bind(null, name, index, welcome_text)), 1000);
            } else {
                welcome_text.innerText = 'greetings, ';
                setTimeout(requestAnimationFrame.bind(null, animate_name.bind(null, 'Unknown', index, welcome_text)), 1000);
            }
        })
        .catch(err => console.log(err));
}

function animate_name(name, index, welcome_text) {
    if (index < name.length) {
        if (name.charAt(index) !== ' ') {
            welcome_text.innerText += name.charAt(index);
            index++;
        } else {
            welcome_text.innerText += name.charAt(index) + name.charAt(index + 1);
            index += 2;
        }
        requestAnimationFrame(animate_name.bind(null, name, index, welcome_text));
    }
}