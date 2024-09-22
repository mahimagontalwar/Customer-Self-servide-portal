document.getElementById('claimForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Form validation
    const policyNumber = document.getElementById('policyNumber').value;
    const incidentDate = document.getElementById('incidentDate').value;
    const incidentDescription = document.getElementById('incidentDescription').value;

    if (!policyNumber || !incidentDate || !incidentDescription) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate storing the claim data and displaying it
    const claimsTable = document.getElementById('claimsTable').getElementsByTagName('tbody')[0];
    const newRow = claimsTable.insertRow();
    const claimNumberCell = newRow.insertCell(0);
    const statusCell = newRow.insertCell(1);
    const dateSubmittedCell = newRow.insertCell(2);
    
    claimNumberCell.innerText = `CLM${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    statusCell.innerText = 'In Review';
    dateSubmittedCell.innerText = new Date().toLocaleDateString();

    document.getElementById('formMessage').innerText = 'Claim submitted successfully!';
    this.reset();
});

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}


// Knowledge Base Search
const articles = [
    { title: 'How to File a Claim', content: 'To file a claim, click on the "Submit a Claim" button and fill out the form.' },
    { title: 'Claim Status', content: 'Track your claim status from the "Track Claims" section.' },
    { title: 'Supporting Documents', content: 'Attach all necessary documents when filing your claim.' }
];

function searchKnowledgeBase() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = articles.filter(article => article.title.toLowerCase().includes(query));
    
    const resultsList = document.getElementById('searchResults');
    resultsList.innerHTML = '';
    results.forEach(article => {
        const li = document.createElement('li');
        li.innerText = `${article.title}: ${article.content}`;
        resultsList.appendChild(li);
    });
}
