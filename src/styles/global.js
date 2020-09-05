import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');

    body {
        * {
            font-family: 'Montserrat', sans-serif;
        }
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;

        @media screen and (max-width: 767px) {
            padding-top: 4.75rem;
            padding-bottom: 4rem;
        }
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .layout--title {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .t-semi-bold {
        font-weight: 600;
    }

    .sidebarDark, .sidebarLight {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition-property: opacity, background-color;
        transition-duration: .5s;
        z-index: -1;
    }

    body.light {
        .sidebarLight {
            opacity: 1;
        }

        .sidebarDark {
            opacity: 0;
        }
    }

    body.dark {
        .sidebarLight {
            opacity: 0;
        }

        .sidebarDark {
            opacity: 1;
        }
    }

`;

export default GlobalStyles;