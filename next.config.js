module.exports = {
  images: {
    domains: [
      "facebookbrand.com",
      "drive.google.com",
      "source.unsplash.com",
      "localhost",
      "142.93.126.12",
      "dashboard.nmstudio.design",
    ],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
