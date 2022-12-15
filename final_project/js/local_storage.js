function myfunc(event) {
    event.preventDefault();

    var full_name = document.getElementById("full_name").value;
    var email_id = document.getElementById("email_id").value;
    var phone = document.getElementById("phone").value;
    var special_instructions = document.getElementById("description").value;

    localStorage.setItem('ls_full_name', full_name);
    localStorage.setItem('ls_email_id', email_id);
    localStorage.setItem('ls_phone', phone);
    localStorage.setItem('ls_special_instructions', special_instructions);
}
