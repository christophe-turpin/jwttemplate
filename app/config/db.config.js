module.exports = {
    HOST: "localhost",
    USER: "admin",
    PASSWORD: "Isaac0504!",
    DB: "jwttemplate",
    dialect: "mysql",
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}