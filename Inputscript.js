const firebaseConfig = {
    apiKey: "AIzaSyCG7fRw21apfTA36HKl5LbVWiHI_8zk12A",
    authDomain: "signup-bfcf8.firebaseapp.com",
    databaseURL: "https://signup-bfcf8-default-rtdb.firebaseio.com",
    projectId: "signup-bfcf8",
    storageBucket: "signup-bfcf8.appspot.com",
    messagingSenderId: "862509936181",
    appId: "1:862509936181:web:6a16490f27a97bac7bcb7c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const storage = firebase.storage();
const paths = ["TopPicks/products", "Popular/products"];
const productContainer = document.getElementById("product-container");
const progressBarFill = document.getElementById("progress-bar-fill");
const progressPercentage = document.getElementById("progress-percentage");

// Function to upload product data and images
function upload() {
    event.preventDefault(); // Prevent form submission
    // Get files from input elements
    const files = [
        document.getElementById("productImageMain").files[0],
        document.getElementById("productImage1").files[0],
        document.getElementById("productImage2").files[0],
        document.getElementById("productImage3").files[0],
        document.getElementById("productImage4").files[0]
    ].filter(file => file !== undefined);

    // Get product information from input elements
    const identification = document.getElementById("productId").value.trim();
    const name = document.getElementById("productName").value.trim();
    const description = document
        .getElementById("productDescription")
        .value.trim();
    const costprice = document.getElementById("costPrice").value.trim();
    const seller = document.getElementById("seller").value.trim();
    const sellingprice = document.getElementById("productPrice").value.trim();
    const color = document.getElementById("productColor").value.trim();
    const productSize = document.getElementById("productSize").value.trim();
    const additionalInfo = document
        .getElementById("additionalInfo")
        .value.trim();
    const quantity = 1;

    // Validate required fields
    if (
        !identification ||
        !name ||
        !description ||
        !costprice ||
        !sellingprice ||
        !color ||
        !productSize
    ) {
        noteBox.style.display = "block";
        notification.innerText = "All input fields must be filled out!";
        return;
    }

    // Ensure at least one image is selected
    if (files.length === 0) {
        noteBox.style.display = "block";
        notification.innerText = "Main Image Empty!";
        return;
    }
    progressBarFill.style.width = "0%";
    progressPercentage.innerText = "0%";
    // Upload images and get download URLs
    const uploadPromises = files.map((file, index) => {
        const storageRef = storage
            .ref()
            .child(`Empviv/${identification}/${file.name}`);
        return storageRef.put(file).then(snapshot => {
            const totalBytesTransferred = snapshot.bytesTransferred;
            const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
            const percentage = Math.round(
                (totalBytesTransferred / totalBytes) * 100
            );
            progressBarFill.style.width = `${percentage}%`;
            progressPercentage.innerText = `${percentage}%`;
            return snapshot.ref.getDownloadURL();
        });
    });

    // Handle upload promises
    Promise.all(uploadPromises)
        .then(downloadURLs => {
            // Prepare product data with image URLs
            const updates = {
                identification,
                name,
                description,
                costprice,
                seller,
                sellingprice,
                color,
                productSize,
                additionalInfo,
                quantity
            };

            downloadURLs.forEach((url, index) => {
                updates[`image${index + 1}`] = url;
            });

            // Push product data to database
            const sendRef = document.getElementById("refValue").innerText;
            return database.ref(`${sendRef}/${identification}`).set(updates);
        })
        .then(() => {
            noteBox.style.display = "block";
            notification.innerText =
                "Product and images uploaded successfully!!";
        })
        .catch(error => {
            noteBox.style.display = "block";
            notification.innerText = `Error uploading images: ${error.message}`;
        });
}
// products management page
