<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Victoria's Secret Perfume</title>
    <script src="golpo.js"></script>
    <link rel="stylesheet" href="golpo.css">
</head> 
<body>

    <header>
        <div class="logo">
            <img src="0417261707559c0ec7c43876f1537c55.jpg" alt="Victoria's Secret Logo">
        </div>
    </header>

    <section class="sec">
        <div class="product">
            <!-- Card template  -->
            <div class="card">
                <div class="img">
                    <img src="att.aBVFzwR97HwTrDRnp1wDiLFJ--fvXDXrfglEsMLthWw.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Bombshell</div>
                <div class="title">(New York)</div>
                <div class="box">
                    <div class="price">1,100 php</div>
                    <button class="btn" onclick="addItem('Bombshell (New York)', 1100)">Buy now</button>
                </div>
            </div>

            <!-- Repeat cards as needed -->
            <div class="card">
                <div class="img">
                    <img src="att.eD2JgfgoTYxq_HOCBCEf2tRERJJiwAsTgeYSJ8M17NU.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Bombshell</div>
                <div class="title">(Spring Poppies)</div>
                <div class="box">
                    <div class="price">1,100 php</div>
                    <button class="btn" onclick="addItem('Bombshell (Spring Poppies)', 1100)">Buy now</button>
                </div>
            </div>
            <div class="card">
                <div class="img">
                    <img src="att.WhzOiMFmykMP4eCVgs_4PBrTNwNDHVQ7Yd0SEvc5vh8.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Bombshell</div>
                <div class="title">(Gold)</div>
                <div class="box">
                    <div class="price">1,200 php</div>
                    <button class="btn" onclick="addItem('Bombshell (Gold)', 1200)">Buy now</button>
                </div>
            </div>

            <div class="card">
                <div class="img">
                    <img src="att.xNworPVgIycPiT2gCrUjFKU6vGZtEA6Q1zg8QSltdxA.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Bombshell</div>
                <div class="title">(Seduction)</div>
                <div class="box">
                    <div class="price">1,100 php</div>
                    <button class="btn" onclick="addItem('Bombshell (Seduction)', 1100)">Buy now</button>
                </div>
            </div>

            <div class="card">
                <div class="img">
                    <img src="att.HKHDhQEYyRTOfuIj3Bch3S6BtbFHE1gVyYxZPyMQhXE.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Bombshell</div>
                <div class="title">(Decadent)</div>
                <div class="box">
                    <div class="price">1,100 php</div>
                    <button class="btn" onclick="addItem('Bombshell (Decadent)', 1100)">Buy now</button>
                </div>
            </div>

            <div class="card">
                <div class="img">
                    <img src="att.KTFUUeokOkt2efhYGwovYBews3p9Mf9R0a6kdwe5Gm4.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Velvet Petals</div>
                <div class="title">(Noir)</div>
                <div class="box">
                    <div class="price">800 php</div>
                    <button class="btn" onclick="addItem('Velvet Petals (Noir)', 800)">Buy now</button>
                </div>
            </div>

            <div class="card">
                <div class="img">
                    <img src="att.q8swTGpEztq50HruoNgHOuzBnfDd9XtXXkohGDobsYs.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Victoria's Secret</div>
                <div class="title">Love Spell</div>
                <div class="box">
                    <div class="price">800 php</div>
                    <button class="btn" onclick="addItem('VS (Love Spell)', 800)">Buy now</button>
                </div>
            </div>

            <div class="card">
                <div class="img">
                    <img src="att.SwXKMM3RXso4e3m5Vy0gxtkQm0onNIw8hmUr8075qmM.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Velvet Petals</div>
                <div class="title">(Untamed)</div>
                <div class="box">
                    <div class="price">800 php</div>
                    <button class="btn" onclick="addItem('Velvet Petals (Untamed)', 800)">Buy now</button>
                </div>
            </div>

            <div class="card">
                <div class="img">
                    <img src="att.Wf6tRu8AN5P2GktImkHCyx1kVEIGV8YDSKp92GYYfWM.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Victoria's Secret</div>
                <div class="title">(Rush)</div>
                <div class="box">
                    <div class="price">800 php</div>
                    <button class="btn" onclick="addItem('VS (Rush)', 800)">Buy now</button>
                </div>
            </div>

            <div class="card">
                <div class="img">
                    <img src="att.WSmeIy8oMew0ENV5my16PMCgPOyRH0dVkS4Bq7ZdvOc.jpg" alt="Victoria's Secret">
                </div>
                <div class="desc">Floral Affair</div>
                <div class="title">(Blush Berries)</div>
                <div class="box">
                    <div class="price">800 php</div>
                    <button class="btn" onclick="addItem('Floral Affair (Blush Berries)', 800)">Buy now</button>
                </div>
            </div>
        </div>
    </section>
    
    <div class="container">
        <h2>Customer Details</h2>
        <table>
            <tr>
                <td><label for="customer">Customer:</label></td>
                <td><input type="text" id="customer" placeholder="Enter your name"></td>
            </tr>
            <tr>
                <td><label for="invNo">Invoice No:</label></td>
                <td><input type="text" id="invNo"></td>
            </tr>
            <tr>
                <td><label for="invDate">Invoice Date:</label></td>
                <td><input type="date" id="invDate"></td>
            </tr>

        </table>
    </div>

    <div class="section">
        <h2>Items</h2>
        <table id="invoiceTable">
            <thead>
                <tr>
                    <th>Serial No.</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>


</body>
</html>