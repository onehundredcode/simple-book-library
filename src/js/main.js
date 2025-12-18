// Request (fetch) the books.json file from the server
fetch('data/books.json')

    // When the server responds, convert the response into JSON data
    .then(response => response.json())

    // Once the JSON data is available, run this function
    .then(books => {

        // Select the <div> element where the books will be displayed
        const bookListContainer = document.getElementById('book-list');

        // Loop through each book object in the books array
        books.forEach(book => {

            // Create an HTML block for a single book using template literals
            // The book object's properties (title, author, year) are injected into the HTML
            const bookHTML = `
                <div class="book">
                    <h2>${book.title}</h2>
                    <p>Author: ${book.author}</p>
                    <p>Year: ${book.year}</p>
                </div>
            `;

            // Add the book HTML to the page
            // Using += ensures we append instead of overwriting existing content
            bookListContainer.innerHTML += bookHTML;
        });
    })

    // If anything goes wrong (file not found, server issue, bad JSON),
    // log the error to the console for debugging
    .catch(err => console.error(err));
