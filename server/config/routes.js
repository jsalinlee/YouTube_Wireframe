import pageController from '../controllers/pageController.js';

export default function(app) {
    app.get('/', function(req, res) {
        pageController.mainPage(req, res)});
    app.post('/search', function(req, res) {
        pageController.searchResults(req, res)});
    app.get('/search', function(req, res) {
        pageController.searchResults(req,res)});
}
