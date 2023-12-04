document.getElementById('form').addEventListener('submit', (e) => {
    let p = document.getElementById('p');
    if (!p) {
        p = document.createElement('p');
        p.setAttribute('id', 'p');
    }

    const index = document.getElementById('select').selectedIndex;
    if (index == 0) {
        p.setAttribute('style', 'color:blue');
        p.innerHTML = 'Please select an option before entering an input.';
    } else {
        const regexs = [
                /^([0-9a-zA-Z]([-\.\+\_\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/,
                /^[1-9][0-9]{3}$/,
                /^(\+)?(88)?01[0-9]{9}$/],
            options = ['Email', 'Postcode', 'Mobile Number'],
            text = document.getElementById('text').value;
        if (regexs[index - 1].test(text)) {
            p.setAttribute('style', 'color:green');
            p.innerHTML = `'${text}' is a <b>valid</b> ${options[index - 1]}.`;
        } else {
            p.setAttribute('style', 'color:red');
            p.innerHTML = `'${text}' is <b>not a valid</b> ${options[index - 1]}.`;
        }
    }

    document.body.appendChild(p);
    e.preventDefault();
})
