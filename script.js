document.getElementById('form').addEventListener('submit', (e) => {
    const input = document.getElementById('text'),
        index = document.getElementById('select').selectedIndex;
    let p = document.getElementById('p');

    if (!p) {
        p = document.createElement('p');
        p.setAttribute('id', 'p');
    }

    if (index == 0) {
        p.setAttribute('style', 'color:blue');
        p.innerHTML = 'Please select an option before entering an input.';
    } else {
        const regex = [
                /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/,
                /^[1-9][0-9]{3}$/,
                /^(\+)?(88)?01[0-9]{9}$/],
            option = ['Email', 'Postcode', 'Mobile Number'],
            text = input.value;

        if (regex[index - 1].test(text)) {
            p.setAttribute('style', 'color:green');
            p.innerHTML = `'${text}' is a <b>valid</b> ${option[index - 1]}.`;
        } else {
            p.setAttribute('style', 'color:red');
            p.innerHTML = `'${text}' is <b>not a valid</b> ${option[index - 1]}.`;
        }
    }

    document.body.appendChild(p);
    e.preventDefault();
})
