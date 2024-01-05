/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //디버그 도구인데 이거 켜놓으면 유스이펙트 2번씩 실행됨
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig;
