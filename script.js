// --- Firebase Setup ---
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// --- EmailJS Setup ---
emailjs.init("YOUR_EMAILJS_USER_ID");

document.getElementById("subscription-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  // Save to Firebase (if needed)
  // Optional: Add code to store the email in Firestore or Realtime DB

  // Send Email via EmailJS
  emailjs.send("YOUR_EMAILJS_SERVICE_ID", "YOUR_EMAILJS_TEMPLATE_ID", {
    to_email: email
  })
  .then(() => {
    alert("🎉 Thank you for subscribing!");
    document.getElementById("subscription-form").reset();
  })
  .catch((err) => {
    console.error("EmailJS Error:", err);
    alert("Something went wrong. Please try again.");
  });
});

// --- Search Handler ---
function handleSearch() {
  const query = document.getElementById("searchBar").value.toLowerCase();

  if (query.includes("faceswap")) {
    // Show relevant tools
    document.getElementById("aiToolsSection").innerHTML = "<p>Showing FaceSwap AI tools...</p>";
  } else {
    document.getElementById("aiToolsSection").innerHTML = "<p>🔍 No results found. Try a different keyword.</p>";
  }
}
