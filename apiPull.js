document.getElementById('fetch-data-button').addEventListener('click', () => {
            
    var type = document.getElementById('textboxType').value
    var subType = document.getElementById('textboxSubType').value
    var id = document.getElementById('textboxID').value; // Example category ID

    const apiKey = '648627c409b96041497804cd3b77cce1'; // Replace with your actual API key
    
    
    const apiUrl = `https://api.stlouisfed.org/fred/${type}/${subType}?${type}_id=${id}&api_key=${apiKey}&file_type=json`;
    const proxyUrl = `http://localhost:3000/proxy?url=${encodeURIComponent(apiUrl)}`;

    fetch(proxyUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            document.getElementById('category-data').innerText = JSON.stringify(data, null, 2);
            
            const tableBody = document.getElementById('category-table').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = "";

            data.categories.forEach(category => {
                const row = tableBody.insertRow();
                const cellId = row.insertCell(0);
                const cellName = row.insertCell(1);
                
                cellId.textContent = category.id;
                cellName.textContent = category.name;
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});