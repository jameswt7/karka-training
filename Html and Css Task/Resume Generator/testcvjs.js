document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        const formData = new FormData(form);
        const resumeData = [];

        for (const [key, value] of formData.entries()) {
            if (key.startsWith('school') || key.startsWith('degree') || key.startsWith('gradYear')) {
                // Handle education details
                const index = key.match(/\d+/)[0];
                if (!resumeData.education) {
                    resumeData.education = [];
                }
                if (!resumeData.education[index]) {
                    resumeData.education[index] = {};
                }
                resumeData.education[index][key.replace(/\d+/, '')] = value;
            } else {
                // Handle other fields
                resumeData[key] = value;
            }
        }

        console.log(resumeData);
        // Here, you can use resumeData to generate the resume or send it to a server, etc.
    });
});
