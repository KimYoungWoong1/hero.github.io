import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import CONFIG from './gitprofile.config';
import { createHtmlPlugin } from 'vite-plugin-html';

// ✅ Vite 7에서는 mode로 분기해야 함 (command 아님!!)
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    // ✅ 로컬(dev)일 때는 '/', 배포(build)일 때는 '/hero.github.io/'
    base: isDev ? '/' : '/hero.github.io/',

    // ✅ docs 폴더 무시하고 public만 static 파일 경로로 인식
    publicDir: 'public',

    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            metaTitle: CONFIG.seo.title,
            metaDescription: CONFIG.seo.description,
            metaImageURL: CONFIG.seo.imageURL,
            googleAnalyticsScript: CONFIG.googleAnalytics.id
              ? `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.id}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${CONFIG.googleAnalytics.id}');
</script>`
              : '',
          },
        },
      }),

      ...(CONFIG.enablePWA
        ? [
            VitePWA({
              registerType: 'autoUpdate',
              workbox: { navigateFallback: undefined },
              includeAssets: ['logo.png'],
              manifest: {
                name: 'Portfolio',
                short_name: 'Portfolio',
                description: 'Personal Portfolio',
                icons: [
                  {
                    src: 'logo.png',
                    sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
                    type: 'image/png',
                  },
                ],
              },
            }),
          ]
        : []),
    ],

    define: { CONFIG },
  };
});
