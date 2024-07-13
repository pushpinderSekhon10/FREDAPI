document.getElementById('fetch-data-button').addEventListener('click', () => {
            
    var type = document.getElementById('textboxType').value
    var subType = document.getElementById('textboxSubType').value
    var id = document.getElementById('textboxID').value; // Example category ID
    var tag = document.getElementById("textboxTag").value;
    const apiKey = '648627c409b96041497804cd3b77cce1'; // Replace with your actual API key

    var apiUrl = `https://api.stlouisfed.org/fred/${type}?api_key=${apiKey}&file_type=json`;

    if (id!= 0)
    {
        apiUrl = `https://api.stlouisfed.org/fred/${type}?${type}_id=${id}&api_key=${apiKey}&file_type=json`;
    }

    if (subType!=0)
    {
        apiUrl = `https://api.stlouisfed.org/fred/${type}/${subType}?${type}_id=${id}&api_key=${apiKey}&file_type=json`;
    }
    
    if(tag!=0)
    {
        apiUrl = `https://api.stlouisfed.org/fred/${type}/${subType}?${type}_id=${id}&api_key=${apiKey}&tag_names=${tag};quarterly&file_type=json`;
        
    }
    const proxyUrl = `http://localhost:3000/proxy?url=${encodeURIComponent(apiUrl)}`;
    
    


    fetch(proxyUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            //document.getElementById('category-data').innerText = JSON.stringify(data, null, 2);
            
            const tableBody = document.getElementById('category-table').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = "";

            
            if (type == "category") {
                switch (subType) {
                    case "":
                        const row = tableBody.insertRow();
                        const ids = row.insertCell(0)
                        const names = row.insertCell(1)
                        const parentIDs = row.insertCell(2)
                        ids.textContent = data.categories[0].id
                        names.textContent = data.categories[0].name
                        parentIDs.textContent = data.categories[0].parent_id
                        break;
                        
                    case "children":
                        const fskeys =  Object.keys(data.categories[0])
                        fskeys.forEach((key)=>
                            {
                                let newDiv = document.createElement('th');
                                newDiv.innerHTML = key;
                                let parentElement = document.getElementById('list_names');
                                parentElement.appendChild(newDiv, parentElement.firstChild);
                            })
                        data.categories.forEach(x => {
                        
                            
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "related":
                        data.categories.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "series":
                        data.seriess.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "tags":
                        data.tags.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "related_tags":
                        data.tags.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    // Add more cases as needed
                }

            }
            if (type == "release") {
                switch (subType) {
                    case "":
                        data.releases.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    
                    case "dates":
                        data.release_dates.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "series":
                        data.seriess.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "sources":
                        data.sources.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "tags":
                        data.tags.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "related_tags":
                        data.tags.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "tables":
                        data.elements.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;

                    
                    // Add more cases as needed
                }

            }
            if (type == "releases") {
                switch (subType) {
                    case "":
                        data.releases.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    
                    case "dates":
                        data.release_dates.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "series":
                        data.seriess.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "sources":
                        data.sources.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "tags":
                        data.tags.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "related_tags":
                        data.tags.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "tables":
                        data.elements.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;

                    
                    // Add more cases as needed
                }

            }
            if (type == "series") {
                switch (subType) {
                    case "":
                        data.seriess.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "categories":
                        data.categories.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "observations":
                        data.observations.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "release":
                        data.releases.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "tags":
                        data.tags.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;
                    case "updates":
                        data.seriess.forEach(x => {
                            const keys = Object.keys(x);
                            const row = tableBody.insertRow();
                            
                            keys.forEach((key, index) => {
                                const cell = row.insertCell(index);
                                cell.textContent = x[key];
                            });
                        });
                        break;

                    
                    // Add more cases as needed
                }

            }
            
            
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});