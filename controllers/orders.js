
const axios = require("axios");

exports.get = async (req, res) => {
    try {
        const token =  await this.connect1();
        const url = "https://my.jasminsoftware.com/api/290738/290738-0001/sales/orders";

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        };

        const orders = await axios.get(url, config);
        return res.send(orders.data);
    }
    catch (error) {
        res.send(error);
        return;
    }
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const token =  await this.connect1();
        const url = `https://my.jasminsoftware.com/api/290738/290738-0001/sales/orders/${id}`;

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        };

        const orders = await axios.get(url, config);
        return res.send(orders.data);
    }
    catch (error) {
        res.send(error);
        return;
    }
}

exports.create = async (req, res) => {
    try {
        const token =  await this.connect1();
        const url = "https://my.jasminsoftware.com/api/290738/290738-0001/sales/orders"
        const payload = {
            "company": "Default",
            "buyerCustomerParty": "0002",
            "deliveryTerm":"Transp",
            "documentLines": [
                {
                    "salesItem": "ARECA"
                }
            ]
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
                password: '40fbaffc-d0e2-440e-b34e-b2e8752a41a0',
            },
        }
    );
    return result.data.access_token; //only send token
}