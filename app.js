// app.js
const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/js/resp.js', (req, res) => {
    res.sendFile(__dirname + '/js/resp.js');
});

// HTMLs

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/base.html');
});
app.get('/home.html', (req, res) => {
    res.sendFile(__dirname + '/html/home.html');
});
app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/html/about.html');
});
app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/html/contact.html');
});
app.get('/doraemon.html', (req, res) => {
    res.sendFile(__dirname + '/html/doraemon.html');
});
app.get('/oggy.html', (req, res) => {
    res.sendFile(__dirname + '/html/oggy.html');
});
app.get('/shinchan.html', (req, res) => {
    res.sendFile(__dirname + '/html/shinchan.html');
});






// IMAGEs

app.get('/img/logo.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/logo.jpg');
});
app.get('/img/building.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/building.jpg');
});


// DORAEMON IMAGES

app.get('/img/doraemon.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon.jpg');
});
app.get('/doraemons1.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons1.jpg');
});
app.get('/doraemons2.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons2.jpg');
});
app.get('/doraemons3.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons3.jpg');
});
app.get('/doraemons4.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons4.jpg');
});
app.get('/doraemons5.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons5.jpg');
});
app.get('/doraemons6.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons6.jpg');
});
app.get('/doraemons7.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons7.jpg');
});
app.get('/doraemons8.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons8.jpg');
});
app.get('/doraemons9.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons9.jpg');
});
app.get('/doraemons10.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons10.jpg');
});
app.get('/doraemons11.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons11.jpg');
});
app.get('/doraemons12.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons12.jpg');
});
app.get('/doraemons13.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons13.jpg');
});
app.get('/doraemons14.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons14.jpg');
});
app.get('/doraemons15.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons15.jpg');
});
app.get('/doraemons16.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons16.jpg');
});
app.get('/doraemons17.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons17.jpg');
});
app.get('/doraemons18.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons18.jpg');
});
app.get('/doraemons19.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons19.jpg');
});
app.get('/doraemons20.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/doraemon img/doraemons20.jpg');
});


// OGGY IMAGES
app.get('/img/oggy.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/oggy.jpg');
});
app.get('/oggys1.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/oggy img/oggys1.jpg');
});
app.get('/oggys2.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/oggy img/oggys2.jpg');
});
app.get('/oggys3.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/oggy img/oggys3.jpg');
});
app.get('/oggys4.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/oggy img/oggys4.jpg');
});
app.get('/oggys5.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/oggy img/oggys5.jpg');
});
app.get('/oggys6.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/oggy img/oggys6.jpg');
});
app.get('/oggys7.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/oggy img/oggys7.jpg');
});
app.get('/oggys8.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/oggy img/oggys8.jpg');
});


// SHINCHAN IMAGES
app.get('/img/shinchan.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan.jpg');
});
app.get('/shinchans1.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans1.jpg');
});
app.get('/shinchans2.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans2.jpg');
});
app.get('/shinchans3.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans3.jpg');
});
app.get('/shinchans4.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans4.jpg');
});
app.get('/shinchans5.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans5.jpg');
});
app.get('/shinchans6.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans6.jpg');
});
app.get('/shinchans7.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans7.jpg');
});
app.get('/shinchans8.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans8.jpg');
});
app.get('/shinchans9.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans9.jpg');
});
app.get('/shinchans10.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans10.jpg');
});
app.get('/shinchans11.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans11.jpg');
});
app.get('/shinchans12.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans12.jpg');
});
app.get('/shinchans13.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans13.jpg');
});
app.get('/shinchans14.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans14.jpg');
});
app.get('/shinchans15.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/shinchan img/shinchans15.jpg');
});

// CONTACT IMAGEs

app.get('/fb-logo.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/contact img/fb-logo.jpg');
});
app.get('/gmail.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/contact img/gmail.jpg');
});
app.get('/instagram.jpg', (req, res) => {
    res.sendFile(__dirname + '/img/contact img/instagram.jpg');
});


// CSSs

app.get('/css/contact.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/contact.css');
});

app.get('/css/style.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/style.css');
});
app.get('/css/res-style.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/res-style.css');
});
app.get('/css/home.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/home.css');
});
app.get('/css/res-home.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/res-home.css');
});
app.get('/css/about.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/about.css');
});

app.get('/css/doraemon.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/doraemon.css');
});
app.get('/css/oggy.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/oggy.css');
});
app.get('/css/res-dorae.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/res-dorae.css');
});
app.get('/css/res-oggy.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/res-oggy.css');
});
app.get('/css/res-shin.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/res-shin.css');
});
app.get('/css/shinchan.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/shinchan.css');
});





// FORMs

app.post('/submit_form', (req, res) => {
    const { name, email, message } = req.body;
    // Process the form data here (you can save it to a database, send an email, etc.)
    console.log(`Received form submission: \nName - ${name}, \nEmail - ${email}, \nMessage - ${message}`);
    res.send('Thanks for Contacting Us ');
});

// SEARCH


// app.js

if (typeof window !== 'undefined' && window.document)
    document.addEventListener('DOMContentLoaded', function () {
        const searchForm = document.getElementById('search-form');
        const searchResultsContainer = document.getElementById('search-results');

        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const query = document.getElementById('search-input').value;

            // Use Fetch API to send the search query to the server
            fetch(`/search?query=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {
                    // Display search results in the searchResultsContainer
                    displaySearchResults(data);
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                });
        });

        function displaySearchResults(results) {
            // Clear previous results
            searchResultsContainer.innerHTML = '';

            // Display results in the searchResultsContainer
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `
                <h2>${result.title}</h2>
                <p>${result.description}</p>
            `;
                searchResultsContainer.appendChild(resultItem);
            });
        }
    });

const searchData = [
    { title: 'Shinchan Season', link: '/html/shinchan.html' },
    { title: 'Doraemon Season', description: 'Doraemon All Seasons in Hindi Download, ...' },
    { title: 'Oggy and the Cockroaches Season', description: 'Oggy And The Coackroaches All Season hindi Online, ...' },
];

// Serve HTML file
app.get('/search', (req, res) => {
    const query = req.query.query || '';

    // Filter data based on the search query (you might use a database for this)
    const results = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
    );

    // Send the results as JSON
    res.json(results);
});



function displaySearchResults(results) {
    // Clear previous results
    searchResultsContainer.innerHTML = '';

    // Display results in the searchResultsContainer
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `
            <h2><a href="${result.link}">${result.title}</a></h2>
            <p>${result.description || ''}</p>
        `;
        searchResultsContainer.appendChild(resultItem);
    });
}

// PORT

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
