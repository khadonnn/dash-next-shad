import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: {
        position: 'bottom-right', // ẩn icon build ở góc trái dưới
    },
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com', 'images.pexels.com'],
    },
};

export default nextConfig;
