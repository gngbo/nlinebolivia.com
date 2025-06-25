


function subirLeads({
    key_campana,
    nombres,
    telefonos,
    departamento,
    comentario
}) {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Allow-Control-Allow-Origin", "*");

        const raw = JSON.stringify({
            "nombres": nombres,
            "telefono": telefonos,
            "departamento": departamento,
            "comentario": comentario,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
            mode: "no-cors"
        };
        // fetch("http://192.168.2.1:30051/rest/campana/me_interesa/3ecfe8db-31cc-4d02-9176-414b6f43ce8c", requestOptions) //prueba servisofts
        fetch("https://crm.servisofts.com/http/rest/campana/me_interesa/"+key_campana, requestOptions) //producción
            .then(response => response.text())
            .then((result) => {
                console.log("Respuesta del servidor:", result);
                // alert('¡Gracias por registrarte! Un operador se pondrá en contacto contigo pronto para confirmar tu pedido con 50% de descuento.');
                // event.target.reset();
            })
            .catch((error) => {
                alert('Teléfono inválido. Revisa el número ingresado.');
                console.error(error)
            });

    } catch (error) {
        console.error("Error en el envío:", error);
    }

}