const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: 'customers'

})

app.post('/customers', (req, res) => {
    const sql = "INSERT INTO customers ('companyname','address1', 'address2', 'address3', 'city','district','hotline','smsno','email','facebook','twitter','linkedin','logo','businesstype') values(?)";
    const values = [
        req.body.companename,
        req.body.address1,
        req.body.address2,
        req.body.address3,
        req.body.city,
        req.body.district,
        req.body.hotline,
        req.body.smsno,
        req.body.email,
        req.body.facebok,
        req.body.twitter,
        req.body.linkedin,
        req.body.logo,
        req.body.businesstype,
    ]

    db.query(sql, [values], (errors, data) => {
        if (errors) return res.json(errors);
        return res.json(data);
    })
})

app.get('/', (re, res) => {
    return res.json("From Backend");
})

app.listen(8081, () => {
    console.log("Listening");
})