module.exports = {
  images: {
    domains: [
      "facebookbrand.com",
      "drive.google.com",
      "source.unsplash.com",
      "localhost",
      "backend-nmstudio-4ejoh.ondigitalocean.app",
      "142.93.126.12",
    ],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
