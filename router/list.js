const db = require('../db');


exports.music = async (ctx) =>{
    ctx.body = "列表-音乐"
}

exports.mylist = async (ctx) =>{
    let data = await new Promise((resolve, reject)=>{
        let sqlLang = `select * from adminw`;
        db.query(sqlLang, (err, data)=>{
            if(err) reject(err);
            data.map(val => {
                val.time = '北京时间'+val.time;
            })
            resolve(data);	// 返回拿到的数据
        })
    })
    ctx.body = data;
}

exports.wtf = async (ctx) =>{
    console.log(ctx.request.body)
    let id = ctx.request.body.id;
    let name = ctx.request.body.name;
    let time = ctx.request.body.time
    let json = [id,name,time]
    let data = await new Promise((resolve, reject)=>{
        let sqlLang = 'select * from adminw where 1=1 ' ;
        if(id!='' || name!='' || time!=''){
            sqlLang = sqlLang + ' and id = ? or name = ? or time = ?'
        }
        db.query(sqlLang,json,(err, data)=>{
            if(err) reject(err);
            // data.map(val => {
            //     val.time = '北京时间'+val.time;
            // })
            resolve(data);	// 返回拿到的数据
        }) 
        console.log(sqlLang)
    })
    ctx.body = data;
}