// CHAPTER # 43 TO  48
// Q1. Show an alert box on click on a link.
//ANS 01:
document.addEventListener('DOMContentLoaded', function () {
    var myLink = document.getElementById('myLink');

    myLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Link clicked!');
    });
});

  
// Q2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
//ANS 02:
function showAlert(message) {
    alert(message);
}

// Q3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
//ANS 03:
document.addEventListener('DOMContentLoaded', function () {
    const students = [
        { id: 1, name: 'Muhammad Saqib Tahir', grade: 'A+' },
        { id: 2, name: 'Asbah', grade: 'A+' },
        { id: 3, name: 'Hamza', grade: 'A+' },
        { id: 4, name: 'Saad ', grade: 'A' },
        { id: 5, name: 'Abdullah', grade: 'B' },
        { id: 6, name: 'Huzaifa', grade: 'B' },
        { id: 7, name: 'Bilal', grade: 'C' },
        { id: 8, name: 'Suad', grade: 'C' },
        { id: 9, name: 'Iftikhar', grade: 'D' },
        { id: 10, name: 'Shaheen', grade: 'D' },
   
    ];

        function renderTable() {
        const tbody = document.querySelector('#studentTable tbody');
        tbody.innerHTML = '';

        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td><button class="delete-button" onclick="deleteRecord(${student.id})">Delete</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Function to delete a student record
    window.deleteRecord = function (studentId) {
        const index = students.findIndex(student => student.id === studentId);
        if (index !== -1) {
            students.splice(index, 1);
            renderTable();
        }
    };

    // Initial rendering of the table
    renderTable();
});


// Q4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
//ANS 04:


// Q5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
//ANS 05:
var counterValue = 0;
function increaseCounter() {
    counterValue++;
    updateCounter();
}
function decreaseCounter() {
    counterValue--;
    updateCounter();
}
function updateCounter() {
    document.getElementById('counter').innerText = counterValue;
}
