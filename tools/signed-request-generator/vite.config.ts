import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext', // Ensure modern output
		minify: true, // Minify the JS and CSS
		assetsInlineLimit: 100000000, // Large limit to inline all assets
		chunkSizeWarningLimit: 100000000,
	}
});
