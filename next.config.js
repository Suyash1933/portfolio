const os = require('os')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  webpack: (config) => {
    // OneDrive locks .pack.gz files during sync, causing ENOENT on rename.
    // Move webpack cache to OS temp dir which OneDrive doesn't sync.
    config.cache = {
      type: 'filesystem',
      cacheDirectory: path.join(os.tmpdir(), 'suyash-portfolio-next-cache'),
    }
    return config
  },
}

module.exports = nextConfig
