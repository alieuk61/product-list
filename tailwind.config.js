/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {
			colors: {
				red: 'hsl(14, 86%, 42%)',
				green: 'hsl(159, 69%, 38%)',

				rose: {
					50: 'hsl(20, 50%, 98%)',
					100: 'hsl(13, 31%, 94%)',
					300: 'hsl(14, 25%, 72%)',
					400: 'hsl(7, 20%, 60%)',
					500: 'hsl(12, 20%, 44%)',
					900: 'hsl(14, 65%, 9%)'
				}
			},

			fontFamily: {
				'primary': ['Red Hat Text', 'sans-serif']
			},
			fontSize: {
				'heading-l': [
					'56px',
					{
						lineHeight: '120%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				],
				'heading-m': [
					'24px',
					{
						lineHeight: '125%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				],
				'body-l': [
					'16px',
					{
						lineHeight: '150%',
						letterSpacing: '0px',
						fontWeight: '600'
					}
				],
				'body-m': [
					'14px',
					{
						lineHeight: '150%',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				],
        'body-s': [
					'14px',
					{
						lineHeight: '150%',
						letterSpacing: '0px',
						fontWeight: '700'
					}
				],
			}
		}
	},
	plugins: []
}
