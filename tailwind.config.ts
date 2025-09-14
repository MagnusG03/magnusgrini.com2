import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"triceratops-idle": {
					"0%, 7.692%": { backgroundPosition: "0 0" },       // F1
					"7.693%, 15.385%": { backgroundPosition: "-52px 0" },   // F2

					"15.386%, 23.077%": { backgroundPosition: "0 0" },       // F1
					"23.078%, 30.769%": { backgroundPosition: "-52px 0" },   // F2

					"30.770%, 38.462%": { backgroundPosition: "0 0" },       // F1
					"38.463%, 46.154%": { backgroundPosition: "-52px 0" },   // F2

					"46.155%, 53.846%": { backgroundPosition: "0 0" },       // F1
					"53.847%, 61.538%": { backgroundPosition: "-52px 0" },   // F2

					"61.539%, 69.231%": { backgroundPosition: "0 0" },       // F1
					"69.232%, 76.923%": { backgroundPosition: "-52px 0" },   // F2

					"76.924%, 84.615%": { backgroundPosition: "0 0" },       // F1
					"84.616%, 92.308%": { backgroundPosition: "-52px 0" },   // F2

					"92.309%, 93.846%": { backgroundPosition: "-104px 0" },  // F3
					"93.847%, 95.385%": { backgroundPosition: "-156px 0" },  // F4
					"95.386%, 100%": { backgroundPosition: "-52px 0" },   // F2 (final hold)
				},
				"triceratops-run": {
					"0%, 24.999%": { backgroundPosition: "0 0" },        // F1 (150ms)
					"25%, 49.999%": { backgroundPosition: "-52px 0" },    // F2 (150ms)
					"50%, 74.999%": { backgroundPosition: "-104px 0" },   // F3 (150ms)
					"75%, 100%": { backgroundPosition: "-52px 0" },    // F2 (150ms)
				},
				'bg-scroll-x': {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: 'calc(var(--tile-w, 512px) * -1) 0' },
				},
			},
			animation: {
				"triceratops-idle": "triceratops-idle 6500ms steps(1,end) infinite",
				'bg-scroll-x': 'bg-scroll-x var(--scroll-dur, 10s) linear infinite',
				"triceratops-run": "triceratops-run 600ms steps(1,end) infinite",
			},
		}
	},
	safelist: [
		'animate-triceratops-idle',
		'animate-triceratops-run',
	],
	plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
} satisfies Config;
