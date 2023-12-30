const Express = require('express');
const multer = require('multer');
const path = require('path');

require('dotenv').config();

const app = Express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(Express.static(path.join(__dirname, 'src')))

app.post('/posts', upload.single('image'), async (req, res) => {
    console.log('POST request');
    res.send({
        image: req.file.size,
        caption: req.body.caption
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});