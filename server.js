const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use("/o" , require("./routes/Users"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {console.log(`We Connecting ... PORT -> ${PORT}`);});