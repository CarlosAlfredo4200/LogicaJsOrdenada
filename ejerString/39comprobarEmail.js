// Dado un texto comprobar si es un email valido

const validarEmail = (email = "") => {

    if (!email) return console.warn("no ingresaste ninguna CADENA");
    if (typeof email !== "string") return console.error("El valor ingresado no es un email");

   // let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    let texteoEmail =/^\w+@\w+\.\w+$/gi.test(email);
    return (texteoEmail)
        ? console.log(`El texto "${email}" es un email Válido`)
        : console.log(`El texto "${email}" No es un email Válido`);
}

validarEmail('carlosc.com')

 