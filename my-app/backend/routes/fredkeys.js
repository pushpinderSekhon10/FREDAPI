const express = require('express')
const {getClient} = require('../client');
const router = express.Router();

router.get("/:id", async (req, res) => {

    try{

        const client = await getClient();
        console.log('Client connected');
        const result = await client.query('SELECT series_id FROM keys WHERE topic_id = $1', [req.params.id]);
        
        if (result.rows.length === 0) {
            console.log(result)
            res.status(404).send("Not found");
        }
        else{
            jsonResult = JSON.stringify({series_id: result.rows[0].series_id});
            res.send(jsonResult);
        }
    
    }catch (error){        
        console.error('Error during request handling:', error);
        res.status(500).send("Server error");}
    
})

module.exports = router;