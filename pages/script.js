function verffrom() {
    let nom=document.getElementById("nom").value.trim();
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone_num").value.trim();
    let message=document.getElementById("message").value.trim();

    if (nom==="") {
        document.getElementById("nom").focus();
        return false;
    }

    if (nom.length<3) {
        document.getElementById("nom").focus();
        return false;
    }

    if (email===""||!email.includes("@")||!email.includes(".")) {
        document.getElementById("email").focus();
        return false;
    }

    if (phone!==""&&phone.length<8) {
        document.getElementById("phone_num").focus();
        return false;
    }

    if (message===""||message.length<10) {
        document.getElementById("message").focus();
        return false;
    }

    return true;
}