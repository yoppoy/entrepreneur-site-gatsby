const path = require('path')

const locales = {
    'fr' : {
        path: 'fr',
        default: true
    },
    'en': {
        path: 'en'
    }
};

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    return new Promise(resolve => {
        deletePage(page);

        Object.keys(locales).map(lang => {
            const isDefault = locales[lang].default || false;

            const localizedPath = isDefault
                ? page.path
                : locales[lang].path + page.path;
            console.log('generating -> ', localizedPath)
            return createPage({
                ...page,
                path: localizedPath,
                context: {
                    locale: lang,
                    isDefault,
                },
            });
        });

        resolve();
    });
};

exports.onCreateWebpackConfig = function({ actions }) {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@data": path.resolve(__dirname, 'data'),
                "@static": path.resolve(__dirname, 'static'),
                "@components": path.resolve(__dirname, 'src/components'),
                "@i18n": path.resolve(__dirname, 'src/i18n'),
                "@layout": path.resolve(__dirname, 'src/layout'),
                "@templates": path.resolve(__dirname, 'src/templates'),
                "@utils": path.resolve(__dirname, 'src/utils'),
            }
        }
    });
};
