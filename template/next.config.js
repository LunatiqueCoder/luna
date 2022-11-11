const {withExpo: withExpoConfig} = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['solito']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
};

module.exports = withPlugins(
  [withTM, withFonts, withImages, [withExpoConfig, {projectRoot: __dirname}]],
  nextConfig,
);
