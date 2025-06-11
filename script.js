/* function calc(operator) {
    const firstName = (document.getElementById('Firstname').value);
    const lastName = (document.getElementById('Lastname').value);
    const phoneNo = parseFloat(document.getElementById('Contact').value);
    const mailId = (document.getElementById('Email').value);
    const dob = parseFloat(document.getElementById('DOB').value);
    const age = parseFloat(document.getElementById('age').value);
    let result;

    
    document.getElementById('result').innerText = "Result:" + result;
} */

 const contactData = [];

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    if (!name || !email || !phone) {
        alert("Please fill in all fields");
        return;
    }
    
    // Add the new contact to the array
    contactData.push({name, email, phone});
    
    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    
    // Display the updated contact list
    displayInfo();
}

function displayInfo() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    
    if (contactData.length === 0) {
        outputDiv.innerHTML = "<p>No contacts added yet.</p>";
        return;
    }
    
    // Create a table to display the contacts
    let tableHTML = `
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
    `;
    
    contactData.forEach((entry, index) => {
        tableHTML += `
            <tr>
                <td>${entry.name}</td>
                <td>${entry.email}</td>
                <td>${entry.phone}</td>
            </tr>
        `;
    });
    
    tableHTML += "</table>";
    outputDiv.innerHTML = tableHTML;
}