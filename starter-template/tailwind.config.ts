import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	container: {
    		center: true,
    		padding: {
    			DEFAULT: '1rem',
    			md: '2rem',
    			lg: '4rem'
    		}
    	},
    	fontFamily: {
    		sans: [
    			'var(--font-inter)',
    			'sans-serif'
    		]
    	},
    	screens: {
    		sm: '375px',
    		md: '768px',
    		lg: '1200px'
    	},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			'brand-blue': '#0f172a',
    			'brand-orange': '#f97316',
    			'brand-orangeDark': '#ea580c'
    		},
    		animation: {
    			'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
    			'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
    			'scale-in': 'scale-in 0.6s ease-out forwards',
    			'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
    		},
    		keyframes: {
    			'fade-in-up': {
    				'0%': {
    					opacity: '0',
    					transform: 'translate3d(0, 30px, 0)',
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translate3d(0, 0, 0)',
    				},
    			},
    			'fade-in-down': {
    				'0%': {
    					opacity: '0',
    					transform: 'translate3d(0, -30px, 0)',
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translate3d(0, 0, 0)',
    				},
    			},
    			'scale-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(0.9)',
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)',
    				},
    			},
    			'slide-in-right': {
    				'0%': {
    					opacity: '0',
    					transform: 'translate3d(50px, 0, 0)',
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translate3d(0, 0, 0)',
    				},
    			},
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
