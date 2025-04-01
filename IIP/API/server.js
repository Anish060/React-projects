const express=require('express');
const mysql=require('mysql')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'test'
    }
)
app.get("/mes",(req,res)=>{
    const sql='SELECT * FROM a1_m';
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})

app.post("/sen", (req, res) => {
    const { contextt, issu,catt } = req.body;  // ✅ Extract values correctly


    const sql = 'INSERT INTO a1_m (Context, Issue,Category) VALUES (?, ?,?)';  // ✅ Use (?, ?)
    db.query(sql, [contextt, issu,catt], (err, result) => {   // ✅ Use correct format
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({ message: "Inserted successfully", result });
    });
});

app.listen(8081,()=>{
    console.log("listening");
})