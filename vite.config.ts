import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'dist',
        },
        optimizeDeps: {
            include: [
                '@emotion/react',
                '@emotion/styled',
            ],
        },
        plugins: [
            react({
                jsxImportSource: '@emotion/react',
                babel: {
                    plugins: [
                        '@emotion/babel-plugin',
                    ],
                },
            }),
            // svgr(),
        ],
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    };
});
