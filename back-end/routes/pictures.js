const Router = require('express-promise-router');
const router = new Router();
const axios = require('axios');
const authMiddleware = require('../utils/authMiddleware');


router.route('/onePicture').get(authMiddleware, async (req, res) => {
    const city = encodeURI(req.session.user.placeName).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
    console.log(req.session.user);
    console.log(city);
    
    const pictures = await axios.get(`
        https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${city}&image_type=photo&orientation=horizontal&safesearch=true&per_page=200`
    );

    const oneRandomPicture = pictures.data.hits[Math.floor(Math.random() * pictures.data.hits.length)];

    const allOnePictureInfo = {
        // to pick a random picture from API call response
        smallSize: oneRandomPicture.webformatURL,
        mediumSize: oneRandomPicture.largeImageURL,
        largeSize: oneRandomPicture.fullHDURL,
        // no alt is provided by Pixabay API -_- thus, using the tags key in API response
        alt: oneRandomPicture.tags,
        // to credit Pixabay on each picture
        author: oneRandomPicture.user,
        pixabayURL: oneRandomPicture.pageURL
    };
    
    res.json(allOnePictureInfo);
});

module.exports = router;