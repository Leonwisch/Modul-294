let signUparray = [];

document.forms.SignUp.addEventListener('submit', (event) =>{
    event.preventDefault();

    const form = document.forms.SignUp;
    const formData = new FormData(form);
    signUparray.push(formData);

    const firstnameValue = formData.get("firstname");
    const lastnameValue = formData.get("lastname");
    const streetValue = formData.get("street");
    const plzValue = formData.get("plz");
    const cityValue = formData.get("city");
    const emailValue = formData.get("email");
    const anredeValue = formData.get("anrede");
    const beziehungValue = formData.get("beziehung");

    let div = document.getElementsByClassName("anzeige")[0]

    div.innerHTML = "Person: " + firstnameValue + " " + lastnameValue +
        "Strasse: " +streetValue +
        "PLZ: "+plzValue +
        "Ort: "+ cityValue +
        "Email: "+ emailValue +
        "Anrede: "+ anredeValue +
        "Von wo die Personen sich kennen: "+ beziehungValue;
});