module.exports = {
    port: process.env.PORT || 3000,
    server: {
        baseDir: "dist",
        routes: {
            "/node_modules": "node_modules"
        }
    }
}