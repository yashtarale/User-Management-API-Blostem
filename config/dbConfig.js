module.exports = {    //export because we want to use it in another file(in node we use it)
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'blostem_api_db2',
    dialect: 'mysql',


    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}