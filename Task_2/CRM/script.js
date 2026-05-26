function addLead(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const status = document.getElementById("status").value;

    if(name === "" || email === "" || phone === ""){
        alert("Please fill all fields");
        return;
    }

    const lead = document.createElement("div");
    lead.classList.add("lead");

    lead.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Status: ${status}</p>
        <button onclick="this.parentElement.remove()">
            Delete
        </button>
    `;

    document.getElementById("leadList").appendChild(lead);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}