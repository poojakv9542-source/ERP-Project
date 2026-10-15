const express = require("express");
const cors = require("cors");
const prisma = require("./prismaClient");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.get("/status", async (req, res) => {
    try {
        await prisma.test.findMany();

        res.json({
            backend: "Connected",
            database: "Connected"
        });
    } catch (error) {
        console.log("DATABASE ERROR:");
        console.log(error);

        res.status(500).json({
            backend: "Connected",
            database: "Not Connected"
        });
    }
});

app.get("/test", async (req, res) => {
    try {
        const data = await prisma.test.findMany();
        res.json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: "Database error"
        });
    }
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});