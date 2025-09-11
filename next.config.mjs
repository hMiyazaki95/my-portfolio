///** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

// const repo = 'my-portfolio';
// const usingCustomDomain = true; // set to true if you have CNAME

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'export',
//   images: { unoptimized: true },
//   trailingSlash: true,
//   ...(usingCustomDomain ? {} : { basePath: `/${repo}`, assetPrefix: `/${repo}/` }),
// };

// export default nextConfig;



// next.config.mjs (ESM)
// const repo = 'my-portfolio';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'export',
//   images: { unoptimized: true },
//   trailingSlash: true,
//   basePath: `/${repo}`,
//   assetPrefix: `/${repo}/`,
// };

// export default nextConfig;


const repo = 'my-portfolio';
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGhPages ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
};
