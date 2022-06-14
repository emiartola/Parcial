import Contacto from "./Contacto";

let urlServer = 'http://168.194.207.98:8081/api_contacto/'

export async function getContactosJSON() {
    let datos = await fetch(urlServer + "get_contactos.php", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        mode: "cors"
    });
    console.log(datos);
    return await datos.json();
}

export async function getContactoXId(id:Number) {

	let datos = await fetch(urlServer + "get_contactos.php", {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: 'cors'
	});

	let contactos:Contacto[] = await datos.json();
    let contacto = contactos.find(contacto => contacto.id==Number(id));
	console.log(datos);
	return await contacto;
}


export async function getContactosXIndice(indice: string) {
	let datos = await fetch(urlServer + 'get_contactos.php?indice=' + indice,  {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: 'cors'
	});
	console.log(datos);
	return await datos.json();
}


export async function saveContacto(contacto?: Contacto) {
    
    console.log(contacto);
	let method:string = "";

	if(contacto  && contacto.id != undefined && contacto.id > 0 ){
        urlServer = 'http://168.194.207.98:8081/api_contacto/put_contacto.php';
		method = "PUT";
        console.log("put");
	} else {
        method= "POST";
        urlServer = urlServer +'post_contacto.php';
    }
	await fetch(urlServer, {
		"method": method,
		"body": JSON.stringify(contacto),
		"headers": {
		  "Content-Type": 'application/json'
		}
});
}

    export async function deleteContactoXId(id: number) {
        let datos = await fetch(urlServer + '/delete_contacto.php?id=' + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: "cors"
        });
        console.log(datos);
        return await datos.json();
    }

