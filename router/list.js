const db = require('../db');

exports.wtf = async (ctx) =>{
    console.log(ctx.request.body)
    let id = ctx.request.body.id;
    let name = ctx.request.body.name;
    let time = ctx.request.body.time
    let json = [id,name,time[0],time[1]]
    console.log(json)
    let data = await new Promise((resolve, reject)=>{
        let sqlLang = 'select * from adminw where 1=1 ' ;
        if(id!='' || name!='' || time!=''){
            sqlLang = sqlLang + ' and id = ? or name = ? or (time between ? and ?)'
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

exports.delete = async(ctx)=>{
    let id = ctx.request.body.id
    let data = await new Promise((resolve,reject)=>{
        let sql =  'delete from adminw where id = ? '
        db.query(sql,id,(err,data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
    ctx.body = data;
}