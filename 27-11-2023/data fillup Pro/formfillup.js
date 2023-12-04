$("form").submit(function (e) {
    e.preventDefault();
    var name = $("input[name='name']").val();
    var dob = $("input[name='dob']").val();
    var gender = $("input[name='gender']").val();
    var skill = $("input[type='checkbox']").val();
    var degree = $("input[name='degree']").val();
    var email = $("input[name='email']").val();

// Append or Add function ::

    $(".data-table tbody").append("<tr nameHere='" + name + "' dobHere='" + dob + "'genderHere='" + gender + "'skillHere'" + skill +  "'degreeHere'" + degree + "' emailHere='" + email + "'><td>" + name + "</td><td>" + dob + "</td><td>" + gender + "</td><td>" + skill + "</td><td>" + degree + "</td><td>" + email + "</td><td><button class='btn btn-info btn-edit ms-2 mt-2'>Edit</button><button class='btn btn-danger btn-delete ms-2 mt-2'>Delete</button></td></tr>");

    $("input[name='name']").val('');
    $("input[name='dob']").val('');
    $("input[name='gender']").prop("checked", true).val('');
    // $("#CheckAll").click(function(){
    //     $('input:checkbox').not(this).prop('checked', this.checked);
    // });
    $("input[type='checkbox']").prop( "checked", true).val('');
    $("select[name='degree']").prop("selected", true).val('');
    $("input[name='email']").val('');
});

// Delete function ::

$("body").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});

// Edit function ::

$("body").on("click", ".btn-edit", function () {
    var name = $(this).parents("tr").attr('nameHere');
    var email = $(this).parents("tr").attr('emailHere');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" class="form-control" value="' + name + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_email" class="form-control" value="' + email + '">');

    $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-update ms-2 mt-2'>Update</button><button class='btn btn-warning btn-cancel ms-2 mt-2'>Cancel</button>")
    $(this).hide();
});

// Cancel function ::

$("body").on("click", ".btn-cancel", function () {
    var name = $(this).parents("tr").attr('nameHere');
    var email = $(this).parents("tr").attr('emailHere');

    $(this).parents("tr").find("td:eq(0)").text(name);
    $(this).parents("tr").find("td:eq(1)").text(email);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

// Update function ::

$("body").on("click", ".btn-update", function () {
    var name = $(this).parents("tr").find("input[name='edit_name']").val();
    var email = $(this).parents("tr").find("input[name='edit_email']").val();

    $(this).parents("tr").find("td:eq(0)").text(name);
    $(this).parents("tr").find("td:eq(1)").text(email);

    $(this).parents("tr").attr('nameHere', name);
    $(this).parents("tr").attr('emailHere', email);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});




//----------------------------------------------------------------------------------------