document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("seller-registration").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Seller Registered Successfully!");
    });
    const cropListings = document.getElementById("crop-listings");

    document.getElementById("add-crop-form").addEventListener("submit", (e) => {
        e.preventDefault();


        const cropName = document.getElementById("crop-name").value;
        const cropPrice = document.getElementById("crop-price").value;
        const cropQuantity = document.getElementById("crop-quantity").value;

        const listing = document.createElement("div");
        listing.classList.add("listing");
        listing.innerHTML = `
            <p><strong>Crop:</strong> ${cropName}</p>
            <p><strong>Price:</strong> $${cropPrice} per unit</p>
            <p><strong>Quantity:</strong> ${cropQuantity}</p>
            <button class="animated-btn edit-btn">Edit</button>
            <button class="animated-btn delete-btn">Delete</button>
        `;

        listing.querySelector(".edit-btn").addEventListener("click", () => {
            alert("Edit functionality not implemented yet.");
        });

        listing.querySelector(".delete-btn").addEventListener("click", () => {
            listing.remove();
        });


        cropListings.appendChild(listing);

  
        e.target.reset();
    });

    const buyerMessages = document.getElementById("buyer-messages");
    buyerMessages.innerHTML = `
        <div class="inquiry">
            <p><strong>Buyer:</strong> John Doe</p>
            <p><strong>Message:</strong> Interested in 50 units of Rice.</p>
        </div>
    `;
});

