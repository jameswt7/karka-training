// alert('hi')

document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const skill = [...document.querySelectorAll('input[name="skill"]:checked')].map(el => el.value).join(', ');
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const place = document.getElementById('place').value;

    // Add data to table
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = date;
    newRow.insertCell(2).innerText = skill;
    newRow.insertCell(3).innerText = gender;
    newRow.insertCell(4).innerText = place;
    const actionCell = newRow.insertCell(5);
    actionCell.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    [...document.querySelectorAll('input[name="skill"]:checked')].forEach(el => el.checked = false);
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('place').value = 'A-Place';
});

function editRow(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');
    document.getElementById('name').value = cells[0].innerText;
    document.getElementById('date').value = cells[1].innerText;

    const skill = cells[2].innerText.split(', ');
    skill.forEach(skill => {
        document.getElementById(skill.toLowerCase()).checked = true;
    });
    const gender = cells[3].innerText;
    document.getElementById(gender.toLowerCase()).checked = true;

    document.getElementById('place').value = cells[4].innerText;
    row.remove();
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

function clearForm() {
    document.getElementById("dataForm").reset();
}