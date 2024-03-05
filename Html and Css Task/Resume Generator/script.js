// JQUERY CODE ::

    // $(document).ready(function () {
    //     $('input[type="checkbox"]').change(function () {
    //         var checkedValue = $('input:checkbox:checked').map(function () {
    //             return this.value;
    //         }).get();
    //         // alert(checkedValue);   //display selected checkbox value 
    //         console.log(checkedValue)
    //     })
    // });

    // document.addEventListener('DOMContentLoaded', function () {
    //     var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
    //     checkboxes.forEach(function (checkbox) {
    //         checkbox.addEventListener('change', function () {
    //             var checkedValues = [];
    //             checkboxes.forEach(function (checkbox) {
    //                 if (checkbox.checked) {
    //                     checkedValues.push(checkbox.value);
    //                 }
    //             });
    //             console.log(checkedValues);
    //         });
    //     });
    // });
    




    // function formdata(e)
    // {
    //     e.preventDefault();

    //     let textname =document.getElementById("txtname").value;    //txt id for username must be use .value to get text value
    //     console.log(textname);
    // }
    // formdata()

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        const formData = new FormData(form);
        const resumeData = [];

        for (const [key, value] of formData.entries()) {
            if (key.startsWith('fathername1') || key.startsWith('mothername1') || key.startsWith('sibilingname1') || key.startsWith('martialstatus1'))  
            {
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


