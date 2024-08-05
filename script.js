//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    const age = parseInt(ageInput.value, 10);
    const name = nameInput.value.trim();

    if (age === '' || name === '') {
        alert('Both fields are required.');
        return;
    }

    // Function that returns a promise based on age
    function processForm(age, name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000); // 4 seconds delay
        });
    }

    processForm(age, name)
        .then(message => alert(message))
        .catch(error => alert(error));
});
