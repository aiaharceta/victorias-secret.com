let totalAmount = 0;
let itemCount = 0;
const TAX_RATE = 0.12;

// Function to format amount consistently
function formatAmount(amount) {
    return amount.toFixed(2);
}

// Function to update the total tax on the screen
function updateTotal() {
    const taxAmount = totalAmount * TAX_RATE;
    const total = totalAmount + taxAmount;

    // update the fields for total nad tax
    document.getElementById('total').value = formatAmount(totalAmount);  // Total + Tax
    document.getElementById('tax').value = formatAmount(taxAmount);  // Tax amount
}

function addItem(name, price) {
    const quantity = 1; // Default quantity to 1
    const amount = price * quantity;

    // Add to total amount
    totalAmount += amount;
    itemCount++;

    // Create a new row in the table
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${itemCount}</td>
        <td>${name}</td>
        <td>${formatAmount(price)}</td>
        <td>${quantity}</td>
        <td>${formatAmount(amount)}</td>
        <td><button class="remove-btn" onclick="removeRow(this, ${amount})">Remove</button></td>
    `;
    document.querySelector('#invoiceTable tbody').appendChild(row);
    
    // Update total amount display with tax
    updateTotal();
}

// Function to set the current date to the invoice date input field
function setInvoiceDate() {
    const today = new Date();  // Get the current date
    const year = today.getFullYear();  // Get the current year
    const month = String(today.getMonth() + 1).padStart(2, '0');  // Get the current month (pad with zero if needed)
    const day = String(today.getDate()).padStart(2, '0');  // Get the current day (pad with zero if needed)
    
    const currentDate = `${year}-${month}-${day}`;  // Format as yyyy-mm-dd
    
    // Set the value of the invoice date input field
    document.getElementById('invDate').value = currentDate;
}

// Call the function when the page is loaded
window.onload = setInvoiceDate;

// Function to generate a unique invoice number based on the current timestamp and last invoice number
function setInvoiceNumber() {
    // Get the current timestamp (in milliseconds)
    const timestamp = new Date().getTime();

    // Retrieve the last invoice number from localStorage
    let lastInvoiceNumber = localStorage.getItem('lastInvoiceNumber');
    
    // If there's no last invoice number, initialize it as 1000 (or any starting number)
    if (!lastInvoiceNumber) {
        lastInvoiceNumber = 1000;  // You can change this to any starting number
    } else {
        // Increment the invoice number by 1
        lastInvoiceNumber = parseInt(lastInvoiceNumber) + 1;
    }

    // Store the new invoice number in localStorage
    localStorage.setItem('lastInvoiceNumber', lastInvoiceNumber);

    // Set the invoice number in the input field (you can prefix with something like "INV-")
    document.getElementById('invNo').value = `INV-${lastInvoiceNumber}`;
}

// Call the function to set the invoice number when the page loads
window.onload = function() {
    setInvoiceNumber();
    setInvoiceDate();  // Assuming you already have setInvoiceDate() defined

    document.getElementById('invNo').value = `${new Date().getFullYear()}-${lastInvoiceNumber}`;
};


function removeRow(button, amount) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
    
    // Decrease total amount
    totalAmount -= amount; //Subtract the amount of the removed item

    // Update total Amount display
    updateTotal();

    // Adjust itemCount to correct serial number sequence
    itemCount = document.querySelectorAll('#invoiceTable tbody tr').length;
    Array.from(document.querySelectorAll('#invoiceTable tbody tr')).forEach((row, index) => {
        row.firstElementChild.textContent = index + 1;
    });
}
    // Function to calculate change
function calculateChange() {
    const totalBeforeTax = totalAmount; 
    const amountPaid = parseFloat(document.getElementById('amountPaid').value);

    if (isNaN(totalBeforeTax) || totalBeforeTax <= 0) {
        alert('Total amount is not valid.');
        return;
    }

    if (isNaN(amountPaid) || amountPaid < totalBeforeTax) {
        alert('Please enter a valid amount paid.');
        return;
    }
    // Calculate the change
    const change = amountPaid - totalBeforeTax;
    document.getElementById('change').value = formatAmount(change);
}
function printInvoice() {
    const customer = document.getElementById('customer').value;
    const invNo = document.getElementById('invNo').value;
    const invDate = document.getElementById('invDate').value;

    // Get the tax amount and the total amount excluding tax
    const taxAmount = totalAmount * TAX_RATE;
    const totalWithoutTax = totalAmount;


    // Build items table rows
    const rowsHtml = Array.from(document.querySelectorAll('#invoiceTable tbody tr')).map(row => {
        const cells = row.querySelectorAll('td');
        return `
            <tr>
                <td>${cells[1].innerText}</td>
                <td>${cells[2].innerText}</td>
                <td>${cells[3].innerText}</td>
                <td>${cells[4].innerText}</td>
            </tr>
        `;
    }).join('');

    // Build the receipt HTML structure
    const receipt = `
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid black; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
                .header, .footer {
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="header">
            <h2>Victoria's Secret & Co.</h2>
            <p>#15 ipil-ipil St. Lower Bicutan Taguig City Philippines</p>
            
            <p>Invoice Receipt</p>
            </div>
            <p><strong>Customer:</strong> ${customer}</p>
            <p><strong>Invoice No:</strong> ${invNo}</p>
            <p><strong>Invoice Date:</strong> ${invDate}</p>
            <h3>Items Purchased</h3>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                ${rowsHtml}
            </table>
            <hr>
            <p><strong>Total Amount:</strong> ₱${totalWithoutTax.toFixed(2)}</p>
            <p><strong>Tax (12%):</strong> ₱${taxAmount.toFixed(2)}</p>
            <p><strong>Total With Tax Amount:</strong> ₱${(totalWithoutTax - taxAmount).toFixed(2)}</p>
            <p><strong>Amount Paid:</strong> ${document.getElementById('amountPaid').value}</p>
            <p><strong>Change:</strong> ${document.getElementById('change').value}</p>
            <div class="footer">
                <p>Thank you for Shopping at Victoria's Secret!</p>
                <p>Contact number: 09077831293</p>
                <p>Staff: Armel Golpo</p>
            <div/>
        </body>
        </html>
    `;

    const printWindow = window.open('', 'height=600,width=800');
    printWindow.document.write(receipt);
    printWindow.document.close();
    printWindow.print();
}
