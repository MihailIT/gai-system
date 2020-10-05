const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DTP_Scheme = new Schema({
    locale: String,
    type: String,
    temp: Number
});
const DTP = mongoose.model("DTP", DTP_Scheme);


class REQ_Handler{
    constructor(login, pass, db_name){
        mongoose.connect(`mongodb+srv://${login}:${pass}@cluster0.cnc9o.gcp.mongodb.net/${db_name}?retryWrites=true&w=majority`, {useUnifiedTopology: true});
    }
    new_dtp(locale, type, temp){
        const dtp = new DTP({
            locale: locale,
            type: type,
            temp: temp
        })
        dtp.save(function(err){
            if(err) return console.log(err);
            console.log("New dtp is registered: ", dtp);
        });
    }
}

module.exports = REQ_Handler;