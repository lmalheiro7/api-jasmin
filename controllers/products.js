
const axios = require("axios");

exports.get = async (req, res) => {
    try {
        const token =  await this.connect1();
        const url = "https://my.jasminsoftware.com/api/292559/292559-0001/salesCore/salesItems";

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        };

        const customers = await axios.get(url, config);
        return res.send(customers.data);
    }
    catch (e) {
        res.send(e);
    }
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const token =  await this.connect1();
        const url = `https://my.jasminsoftware.com/api/292559/292559-0001/salesCore/salesItems/${id}`;

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        };

        const product = await axios.get(url, config);
        return res.send(product.data);
    }
    catch (err) {
        res.send(err);
        return;
    }
}

exports.create = async (req, res) => {
    try {
        const token =  await this.connect1();
        const url = "https://my.jasminsoftware.com/api/292559/292559-0001/salesCore/salesItems"
        const payload = {
            "itemkey": "batatas",
            "description" : "batatas 01",
            "baseUnit": "KG",
            "itemType": "Service",
            "itemTaxSchema": "IVA-TN",
            "incomeAccount": "71111"
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

exports.connect1 = async () => {
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
                username: 'IPVCPRODBIO',
                password: '2e51fab2-546f-4001-9a1b-e65290d3eaef',
            },
        }
    );
    return result.data.access_token; //only send token
}