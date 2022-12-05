
const axios = require("axios");
var request = require('request');


exports.create = async (req, res) => {
    try {
        const token = await this.connect();
        const url = "https://my.jasminsoftware.com/api/290738/290738-0001/salescore/customerParties"
        const payload = {
            "name": "Luís Filipe Malheiro",
            "isExternallyManaged": false,
            "currency": "EUR",
            "isPerson": false,
            "country": "PT"
        }
        axios.defaults.headers.common = { 'Authorization': 'Bearer ' + token }
        const result = await  axios.post(url, payload);
        res.send("OK!")
    } catch (err) {
        res.send(err);
        return;
    }
    res.send("OK!");
}

exports.getAll = async (req, res) => {

}




exports.delete = async (req, res) => {

    res.send("OK!");
}




axios
    .get("https://finalspaceapi.com/api/v0/character/?limit=2")
    .then(function (response) {
        console.log(response);
    });


exports.connect = async () => {
    const result = await axios.post(
        "https://identity.primaverabss.com/connect/token",
        {
            grant_type: "client_credentials",
            scope: "application",
        },
        {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            auth: {
                username: "IPVCPRODBIO",
                password: "db37c742-71ea-4b1b-b15c-9cd0a1eff864",
            },
        }
    );
    console.log(result.data.access_token)
    return result.data.access_token; //only send token

}

