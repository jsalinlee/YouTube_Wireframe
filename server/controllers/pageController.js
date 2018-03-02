import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../public/app';
// import clientRoutes from '../../public/routes'
// import HomePage from '../../public/pages/homePage';
// import SearchPage from '../../public/pages/searchPage';

export default {
    handleRender: function(req, res, context) {
        const appString = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );
        res.expose(context, 'MyApp.initialState');

        res.render('home', {
            title: 'YouTube',
            appString: appString,
            initialState: context,
        });
    },

    mainPage: function(req, res) {
        console.log(req.url);
        const context = {
            isSSR: true,
        }

        this.handleRender(req,res, context);
    },

    searchResults: function(req, res) {
        const context = {
            didSearch: true,
            input: req.body.input,
        };

        console.log(req.body.input);

        this.handleRender(req, res, context);
    },
    //
    // handleRedirect: function(res, redirect) {
    //     res.redirect(302, redirect.pathname + redirect.search);
    // },
    //
    // handleNotFound: function(res) {
    //     res.status(404).send('Not Found');
    // },
    //
    // handleError: function(res, err) {
    //     res.status(500).send(err.message);
    // },
    //
    // isoMiddleware: function(req, res) {
    //     match({ clientRoutes, location: req.url },
    //         (err, redirect, props) => {
    //             if (err) handleError(res, err);
    //             else if (redirect) handleRedirect(res, redirect);
    //             else if (props) handleRouter(res, props);
    //             else handleNotFound(res);
    //         }
    //     );
    // }
}
