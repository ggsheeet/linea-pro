/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
	connect-src ${process.env.NEXT_PUBLIC_WP_GQL_URL} https://www.chocolatepro.mx https://analytics.google.com http://localhost:8000 ws://localhost:8000;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: ${process.env.NEXT_PUBLIC_S3_BUCKET_URL} ${process.env.NEXT_PUBLIC_WP_GQL_URL};
	media-src ${process.env.NEXT_PUBLIC_S3_BUCKET_URL};
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`
const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: cspHeader.replace(/\n/g, '')
					},
					{
						key: 'Cache-Control',
						value: 'public, max-age=604800'
					}
				]
			}
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'linea-pro.s3.us-east-2.amazonaws.com'
			},
			{
				protocol: 'https',
				hostname: 'wp.chocolatepro.mx'
			}
		]
	}
}

module.exports = nextConfig