import {injectGlobal} from '@emotion/css';

export const resetStyle = () => {
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
        html,
        body {
            padding: 0;
            margin: 0;
        }
        
        body {
            font-feature-settings: "tnum","tnum";
            background-color: #fff;
            color: rgba(0,0,0,.85);
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5715;
            // additional
            overflow-x: hidden;
        }
    `;
};
