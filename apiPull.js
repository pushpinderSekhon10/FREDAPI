document.getElementById('fetch-data-button-c').addEventListener('click', () => {

            
    var type = 'category'
    var subType = document.getElementById('categoryDD').value
    var id = document.getElementById('categoryID').value; // Example category ID
    var tag = document.getElementById("categoryTag").value;
    const apiKey = '648627c409b96041497804cd3b77cce1'; // Replace with your actual API key

    var apiUrl = correctURL(type, id, subType, tag, apiKey)
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
            
            const tableBody = document.getElementById('category-table-c').getElementsByTagName('tbody')[0];
            if (tableBody.innerHTML != "")
                {
                    tableBody.innerHTML = "";
                }
            const tablenames = document.getElementById('list_names-c')
            if (tablenames.innerHTML != ''){
                tablenames.innerHTML = ''
            }


            
            
                switch (subType) {
                    case "":
                        setTitles(data, "categories", tablenames)
                        const row = tableBody.insertRow();
                        const ids = row.insertCell(0)
                        const names = row.insertCell(1)
                        const parentIDs = row.insertCell(2)
                        ids.textContent = data.categories[0].id
                        names.textContent = data.categories[0].name
                        parentIDs.textContent = data.categories[0].parent_id
                        break;
                        
                    case "children":
                        setTitles(data, "categories", tablenames)
                        displayData(data, "categories", tableBody)
                        
                        break;
                    case "related":
                        setTitles(data, "categories", tablenames)
                        displayData(data, "categories", tableBody)
                        
                        break;
                    case "series":
                        setTitles(data, "seriess", tablenames)
                        displayData(data, "seriess", tableBody)
                        break;
                    case "tags":
                        setTitles(data, "tags", tablenames)
                        displayData(data, "tags", tableBody)
                        break;
                    case "related_tags":
                        setTitles(data, "tags", tablenames)
                        displayData(data, "tags", tableBody)
                        break;
                    // Add more cases as needed
                }

            

            
            
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
document.getElementById('fetch-data-button-s').addEventListener('click', () => {

            
    var type = 'series'
    var subType = document.getElementById('seriesDD').value
    var id = document.getElementById('seriesID').value; // Example category ID
    var tag = document.getElementById("seriesTag").value;
    const apiKey = '648627c409b96041497804cd3b77cce1'; // Replace with your actual API key

    var apiUrl = correctURL(type, id, subType, tag, apiKey)
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
            
            const tableBody = document.getElementById('category-table-s').getElementsByTagName('tbody')[0];
            if (tableBody.innerHTML != "")
            {
                tableBody.innerHTML = "";
            }

            const tablenames = document.getElementById('list_names-s')
            if (tablenames.innerHTML != ''){
                tablenames.innerHTML = ''
            }
            
            
                switch (subType) {
                    case "":
                        setTitles(data, "seriess", tablenames)
                        displayData(data, "seriess", tableBody)
                        break;
                    case "categories":
                        setTitles(data, "categories", tablenames)
                        displayData(data, "categories", tableBody)
                        break;
                    case "observations":
                        setTitles(data, "observations", tablenames)
                        displayData(data, "observations", tableBody)
                        break;
                    case "release":
                        setTitles(data, "releases", tablenames)
                        displayData(data, "releases", tableBody)
                        break;
                    case "tags":
                        setTitles(data, "tags", tablenames)
                        displayData(data, "tags", tableBody)
                        break;
                    case "updates":
                        setTitles(data, "seriess", tablenames)
                        displayData(data, "seriess", tableBody)
                        break;

                    
                    // Add more cases as needed
                }

            
            
            
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
function setTitles(data, name, parentElement)
{
    const fskeys =  Object.keys(data[name][0])
    fskeys.forEach((key)=>
            {
                let newDiv = document.createElement('th');
                newDiv.innerHTML = key;
                parentElement.appendChild(newDiv, parentElement.firstChild);
            })
}

function displayData(data, name, tableBody)
{
    data[name].forEach(x => {
                        
                            
        const keys = Object.keys(x);
        const row = tableBody.insertRow();
        
        
        keys.forEach((key, index) => {
            const cell = row.insertCell(index);
            cell.textContent = x[key];
        });
    });
}
function correctURL(type, id, subType, tag, apiKey)
{
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

    return apiUrl;

}





document.getElementById('test').addEventListener('click', async () => {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let categoriesList = {}
    for (let i = 1; i < 100; i++) {


        var apiUrl = `https://api.stlouisfed.org/fred/category?category_id=${i}&api_key=648627c409b96041497804cd3b77cce1&file_type=json`;
        const proxyUrl = `http://localhost:3000/proxy?url=${encodeURIComponent(apiUrl)}`;

        fetch(proxyUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then(data => {
                if (data!=null){
                    categoriesList[data.categories[0].id] = data.categories[0].name
                    console.log(data.categories[0].id)
                    console.log(data.categories[0].name)
                }
                

                
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
            await delay(200)
    }
    console.log(categoriesList)

});
