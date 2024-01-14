function getValue() {
    event.preventDefault();
    const nameUser = document.getElementById("nameUser").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log(nameUser, email, message)
}
document.getElementById("btnsend").addEventListener("click", getValue)
