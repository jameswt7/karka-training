function loadAndExtract() {
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');
    const contactNumbersDropdown = document.getElementById('contactNumbers');

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
            performOCR(e.target.result);
        };

        reader.readAsDataURL(file);
    }
}
function performOCR(imageDataUrl) {
    const apiKey = 'K81993811888957'; // Replace with your OCR.space API key
    const apiUrl = `https://api.ocr.space/parse/imageurl?apikey=${apiKey}&url=${encodeURIComponent(imageDataUrl)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const text = data.ParsedResults[0]?.ParsedText || '';
            console.log("Extracted text:", text);
            displayContactNumbers(text);
        })
        .catch(error => {
            console.error("Error performing OCR:", error);
        });
}

function displayContactNumbers(text) {
    const contactNumbersDropdown = document.getElementById('contactNumbers');
    contactNumbersDropdown.innerHTML = ''; // Clear previous entries

    const phoneNumberRegex = /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g;
    const phoneNumberMatches = text.match(phoneNumberRegex);

    if (phoneNumberMatches) {
        phoneNumberMatches.forEach(phoneNumber => {
            const option = document.createElement('option');
            option.value = phoneNumber;
            option.text = phoneNumber;
            contactNumbersDropdown.add(option);
        });

        console.log("Extracted contact numbers:", phoneNumberMatches);
    } else {
        console.log("No contact numbers found in the text.");
    }
}

function displaySelectedNumber() {
    const contactNumbersDropdown = document.getElementById('contactNumbers');
    const selectedNumberParagraph = document.getElementById('selectedNumberParagraph');
    const selectedNumbers = [...contactNumbersDropdown.selectedOptions].map(option => option.value);

    selectedNumberParagraph.textContent = `Selected Numbers: ${selectedNumbers.join(', ')}`;
}

