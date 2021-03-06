import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { setConfig } from 'react-hot-loader';
setConfig({ pureSFC: true });
const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteUrl
            title
            description
          }
        }
      }
    `}
        render={data => {
            const { siteUrl, title, description } = data.site.siteMetadata;
            return (
                <>
                    <Helmet
                        title={title}
                        meta={[
                            { charSet: 'utf-8' },
                            { httpEquiv: 'Content-Language', content: 'en-us' },
                            { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
                            { httpEquiv: 'cleartype', content: 'on' },
                            {
                                name: 'viewport',
                                content: 'width=device-width,initial-scale=1'
                            },
                            { name: 'description', content: description },
                            { name: 'google', value: 'notranslate' },
                            { name: 'HandheldFriendly', content: 'true' },
                            { name: 'apple-mobile-web-app-title', content: title },
                            { name: 'apple-mobile-web-app-capable', content: 'yes' },
                            {
                                name: 'apple-mobile-web-app-status-bar-style',
                                content: 'white'
                            },
                            { name: 'msapplication-TileColor', content: '#da532c' },
                            { name: 'theme-color', content: '#ffffff' },

                            { name: 'twitter:card', content: 'summary_large_image' },
                            { name: 'twitter:site', content: '@ronaldlangeveld' },
                            { name: 'twitter:creator', content: '@ronaldlangeveldl' },
                            { name: 'twitter:title', content: title },
                            { name: 'twitter:description', content: description },
                            { name: 'twitter:url', content: siteUrl },
                            { property: 'og:title', content: title },
                            { property: 'og:url', content: siteUrl },
                            { property: 'og:description', content: description },
                            { property: 'og:image:width', content: 1200 },
                            { property: 'og:image:height', content: 628 },
                            { property: 'og:image:alt', content: title },
                            { property: 'og:site_name', content: title },
                            { property: 'og:type', content: 'website' }
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>

                    <main className="layout">{children}</main>

                </>
            );
        }}
    />
);

export default Layout;