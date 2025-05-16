import { defineConfig, presetUno, presetWebFonts, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        serif: 'Space Grotesk:300,400,500,600,700',
        sans: 'Manrope:200,300,400,500,600,700,800',
      },
    }),
    presetIcons({
      scale: 1.2,
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
      },
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    fontFamily: {
      display: 'Space Grotesk, sans-serif',
      heading: 'Space Grotesk, sans-serif',
      body: 'Manrope, sans-serif',
    },
    colors: {
      primary: '#FF6B35', // Brighter, more saturated orange that fits with the palette
      text: '#1a1a1a',
      background: '#f5f5f5',
      // Enhanced color palette
      secondary: '#2A2A2A',
      accent: '#FFD166', // Bright yellow
      mint: '#5CECC6', // Vibrant mint green
      purple: '#9B5DE5', // Bright purple
      coral: '#F15BB5', // Vibrant pink/coral
      blue: '#00BBF9', // Bright blue
      lime: '#BAFF29', // Electric lime
      // New muted colors for secondary elements
      muted: '#666666', // Muted gray for secondary buttons
      lightgray: '#DDDDDD', // Light gray for subtle backgrounds
      // Gradients and overlays will use these
      highlight: '#FEE440', // Bright yellow for highlights
    },
    letterSpacing: {
      wider: '0.1em',
      widest: '0.2em',
      tight: '-0.5px',
      tighter: '-1px',
      'hero': '-0.07em', // Custom spacing for hero title
    },
    borderWidth: {
      '3': '3px',
    },
    lineHeight: {
      'heading': '1.1',
      'subheading': '1.2',
      'body': '1.5',
      'hero': '1.96', // Custom line height for hero title
    },
    boxShadow: {
      'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
      'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
      'neo-lg': '6px 6px 0px 0px rgba(0,0,0,1)',
      // Adding colored shadows for more playfulness
      'neo-primary': '4px 4px 0px 0px rgba(255,107,53,1)', // Updated to match primary color #FF6B35
      'neo-mint': '4px 4px 0px 0px rgba(92,236,198,1)',
      'neo-purple': '4px 4px 0px 0px rgba(155,93,229,1)',
      'neo-coral': '4px 4px 0px 0px rgba(241,91,181,1)',
      'neo-blue': '4px 4px 0px 0px rgba(0,187,249,1)',
      'neo-lime': '4px 4px 0px 0px rgba(186,255,41,1)',
      'neo-highlight': '4px 4px 0px 0px rgba(254,228,64,1)',
    },
    // Gradient opacity levels
    opacity: {
      'gradient-faint': '0.05',
      'gradient-light': '0.1',
      'gradient-medium': '0.2',
      'gradient-strong': '0.3',
    },
    // Adding standard max-width values
    maxWidth: {
      'content': '1400px',       // Updated standard content width
      'wide': '1440px',          // Updated wider layout for certain sections
      'narrow': '800px',         // Narrower width for text-heavy sections
      'prose': '65ch',           // Optimal reading width for text
    },
  },
  shortcuts: {
    // Layout shortcuts with improved standardization
    'container': 'mx-auto max-w-content px-4 md:px-8 lg:px-12',
    'container-wide': 'mx-auto max-w-wide px-4 md:px-8 lg:px-12',
    'container-narrow': 'mx-auto max-w-narrow px-4 md:px-8 lg:px-12',
    'container-px': 'px-4 md:px-8 lg:px-12',
    'section-spacing': 'py-12 md:py-16 lg:py-20',
    'content-wrapper': 'w-full overflow-x-hidden mx-auto',
    
    // Page structure
    'page-container': 'mx-auto max-w-content px-4 md:px-8 lg:px-12 w-full',
    
    // Typography shortcuts
    'neo-heading': 'font-serif font-bold tracking-tight leading-heading',
    'neo-subheading': 'font-serif font-medium tracking-tight leading-subheading',
    'neo-text': 'font-sans leading-body',
    'hero-title': 'font-serif font-medium text-7xl sm:text-8xl md:text-9xl tracking-hero leading-hero max-w-full',
    // New responsive hero title using clamp
    'hero-title-responsive': 'font-serif font-medium tracking-hero max-w-full text-[clamp(4.5rem,11vw,9rem)] mt-6 md:mt-0',
    
    // Updated hero section with better mobile spacing
    'hero-section': 'relative grid grid-cols-1 md:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] gap-8 md:gap-10 items-center min-h-screen py-16 md:py-20',
    
    // Callout section with accent colors
    'callout-section': 'relative neo-card-base my-24 mx-auto max-w-content',
    'callout-gradient': 'absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-accent/10',
    'callout-label': 'absolute -top-6 -left-6 p-2 bg-black text-white border-3 border-black font-serif font-bold text-xl uppercase',
    
    // Services section with new gradients
    'services-section': 'container my-28',
    'services-container': 'border-3 border-black p-8 md:p-12 bg-white relative',
    'services-gradient': 'absolute inset-0 -z-10 bg-gradient-to-tl from-white via-white to-mint/10',
    'services-title': 'neo-heading text-4xl md:text-5xl mb-8 text-text bg-white px-5 py-3 inline-block -mt-20 shadow-neo border-3 border-black',
    'services-subtitle': 'neo-subheading text-2xl mb-10 text-text border-b-3 border-black pb-3 inline-block',
    'services-grid': 'grid grid-cols-1 md:grid-cols-2 gap-8 my-12',
    'features-box': 'bg-white border-3 border-black p-8 md:p-10 shadow-neo md:ml-10 relative',
    'features-gradient': 'absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-blue/10',
    
    // Case Studies section with enhanced colors
    'case-studies-section': 'container my-28',
    'case-studies-container': 'border-3 border-black p-8 md:p-12 bg-white relative shadow-neo',
    'case-studies-gradient': 'absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-purple/10',
    'case-studies-title': 'neo-heading text-4xl md:text-5xl mb-6 text-text border-b-3 border-black pb-4 inline-block',
    'case-studies-subtitle': 'neo-subheading text-2xl mb-6 text-text',
    'case-studies-grid': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12',
    
    // Contact CTA section with new gradient
    'contact-cta': 'container my-28',
    'cta-container': 'flex flex-col md:flex-row items-center gap-10 md:gap-16 border-t-3 border-b-3 border-black py-16 relative',
    'cta-gradient': 'absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-coral/10',
    'cta-box': 'bg-black p-1',
    'cta-box-inner': 'bg-white p-8 border-3 border-black',
    'cta-box-title': 'font-serif font-bold text-2xl mb-4 uppercase tracking-tight',
    
    // Profile elements spacing
    'profile-badge-spacing': 'my-8 md:my-10',
    
    // Scroll arrow with color variants
    'neo-scroll-arrow': 'p-3 border-3 border-black bg-white rounded-full shadow-neo hover:shadow-neo-sm hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center',
    'neo-scroll-arrow-primary': 'p-3 border-3 border-primary bg-white rounded-full shadow-neo-primary hover:shadow-neo-sm hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center',
    'neo-scroll-arrow-mint': 'p-3 border-3 border-mint bg-white rounded-full shadow-neo-mint hover:shadow-neo-sm hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center',
    
    // Neo Brutalist link base style
    'neo-link-base': 'inline-block font-serif font-bold uppercase tracking-wider px-4 py-2 border-3 border-black shadow-neo hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200',
    
    // Enhanced color variants for links
    'neo-link-black': 'bg-black text-white hover:bg-white hover:text-black',
    'neo-link-primary': 'bg-primary text-white hover:bg-white hover:text-primary',
    // New secondary link style - more subtle but still Neo Brutalist
    'neo-link-secondary': 'bg-white text-secondary border-secondary shadow-neo-sm hover:bg-lightgray hover:text-secondary',
    'neo-link-secondary-primary': 'bg-white text-secondary border-secondary shadow-neo-sm hover:bg-primary hover:text-white',
    'neo-link-secondary-mint': 'bg-white text-secondary border-secondary shadow-neo-sm hover:bg-mint hover:text-black',
    'neo-link-secondary-coral': 'bg-white text-secondary border-secondary shadow-neo-sm hover:bg-coral hover:text-white',
    'neo-link-secondary-purple': 'bg-white text-secondary border-secondary shadow-neo-sm hover:bg-purple hover:text-white',
    'neo-link-secondary-blue': 'bg-white text-secondary border-secondary shadow-neo-sm hover:bg-blue hover:text-white',
    'neo-link-secondary-lime': 'bg-white text-secondary border-secondary shadow-neo-sm hover:bg-lime hover:text-black',
    'neo-link-secondary-highlight': 'bg-white text-secondary border-secondary shadow-neo-sm hover:bg-highlight hover:text-black',
    
    'neo-link-red': 'bg-red-600 text-white hover:bg-white hover:text-red-600',
    'neo-link-blue': 'bg-blue-600 text-white hover:bg-white hover:text-blue-600',
    'neo-link-yellow': 'bg-yellow-400 text-black hover:bg-white hover:text-yellow-500',
    // New color variants
    'neo-link-mint': 'bg-mint text-black hover:bg-white hover:text-mint',
    'neo-link-purple': 'bg-purple text-white hover:bg-white hover:text-purple',
    'neo-link-coral': 'bg-coral text-white hover:bg-white hover:text-coral',
    'neo-link-bright-blue': 'bg-blue text-white hover:bg-white hover:text-blue',
    'neo-link-lime': 'bg-lime text-black hover:bg-white hover:text-lime',
    'neo-link-highlight': 'bg-highlight text-black hover:bg-white hover:text-highlight',
    
    // Neo Brutalist card styles
    'neo-card-base': 'bg-white p-2 border-3 border-black shadow-neo transition-all duration-200 hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px]',
    'neo-service-card': 'neo-card-base transform-gpu transition-all duration-300',
    'neo-service-card-hover-primary': 'hover:shadow-[4px_4px_0px_0px_rgba(255,107,53,1)]',
    'neo-service-card-hover-mint': 'hover:shadow-neo-mint',
    'neo-service-card-hover-coral': 'hover:shadow-neo-coral',
    'neo-service-card-hover-purple': 'hover:shadow-neo-purple',
    'neo-service-card-hover-blue': 'hover:shadow-neo-blue',
    'neo-service-card-hover-lime': 'hover:shadow-neo-lime',
    'neo-service-card-hover-highlight': 'hover:shadow-neo-highlight',
    
    // Enhanced card variants with more color options
    'neo-card-black': 'border-black',
    'neo-card-primary': 'border-primary',
    'neo-card-red': 'border-red-600',
    'neo-card-blue': 'border-blue-600',
    'neo-card-yellow': 'border-yellow-400',
    // New color variants
    'neo-card-mint': 'border-mint',
    'neo-card-purple': 'border-purple',
    'neo-card-coral': 'border-coral',
    'neo-card-bright-blue': 'border-blue',
    'neo-card-lime': 'border-lime',
    'neo-card-highlight': 'border-highlight',
    
    // Cards with colored backgrounds
    'neo-card-bg-mint': 'bg-mint border-black text-black',
    'neo-card-bg-purple': 'bg-purple border-black text-white',
    'neo-card-bg-coral': 'bg-coral border-black text-white',
    'neo-card-bg-blue': 'bg-blue border-black text-white',
    'neo-card-bg-lime': 'bg-lime border-black text-black',
    'neo-card-bg-highlight': 'bg-highlight border-black text-black',
    
    // Neo Brutalist card title
    'neo-card-title': 'font-serif font-bold text-xl uppercase mb-2',
    'neo-card-title-accent': 'font-serif font-bold text-xl uppercase mb-2 text-primary',
    'neo-card-title-mint': 'font-serif font-bold text-xl uppercase mb-2 text-mint',
    'neo-card-title-purple': 'font-serif font-bold text-xl uppercase mb-2 text-purple',
    'neo-card-title-coral': 'font-serif font-bold text-xl uppercase mb-2 text-coral',
    
    // Neo Brutalist card icon with color options
    'neo-card-icon': 'text-2xl mr-2',
    'neo-card-icon-primary': 'text-2xl mr-2 text-primary',
    'neo-card-icon-mint': 'text-2xl mr-2 text-mint',
    'neo-card-icon-purple': 'text-2xl mr-2 text-purple',
    'neo-card-icon-coral': 'text-2xl mr-2 text-coral',
    'neo-card-icon-blue': 'text-2xl mr-2 text-blue',
    'neo-card-icon-lime': 'text-2xl mr-2 text-lime',
    
    // List items with icons
    'list-item-check': 'neo-text flex items-start mb-3',
    'list-item-check-icon': 'i-carbon-checkmark-outline text-2xl mr-2 text-primary',
    'list-item-check-bold': 'neo-text flex items-start mb-4',
    'list-item-check-bold-icon': 'i-carbon-checkmark text-2xl mr-3 text-primary',
    // New colored list items
    'list-item-check-mint': 'neo-text flex items-start mb-3',
    'list-item-check-mint-icon': 'i-carbon-checkmark-outline text-2xl mr-2 text-mint',
    'list-item-check-purple': 'neo-text flex items-start mb-3',
    'list-item-check-purple-icon': 'i-carbon-checkmark-outline text-2xl mr-2 text-purple',
    'list-item-check-coral': 'neo-text flex items-start mb-3',
    'list-item-check-coral-icon': 'i-carbon-checkmark-outline text-2xl mr-2 text-coral',
    
    // Accent borders and elements
    'border-accent-top': 'border-t-8 border-primary',
    'border-accent-left': 'border-l-8 border-mint',
    'border-accent-right': 'border-r-8 border-purple',
    'border-accent-bottom': 'border-b-8 border-coral',
    
    // Decorative elements
    'neo-dot': 'w-6 h-6 rounded-full bg-primary inline-block',
    'neo-dot-mint': 'w-6 h-6 rounded-full bg-mint inline-block',
    'neo-dot-purple': 'w-6 h-6 rounded-full bg-purple inline-block',
    'neo-dot-coral': 'w-6 h-6 rounded-full bg-coral inline-block',
    'neo-dot-blue': 'w-6 h-6 rounded-full bg-blue inline-block',
    'neo-dot-lime': 'w-6 h-6 rounded-full bg-lime inline-block',
    'neo-dot-highlight': 'w-6 h-6 rounded-full bg-highlight inline-block',
    
    // Full-width background gradients for each color
    'bg-gradient-primary': 'bg-gradient-to-br from-white via-white to-primary/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-mint': 'bg-gradient-to-br from-white via-white to-mint/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-coral': 'bg-gradient-to-br from-white via-white to-coral/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-purple': 'bg-gradient-to-br from-white via-white to-purple/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-blue': 'bg-gradient-to-br from-white via-white to-blue/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-lime': 'bg-gradient-to-br from-white via-white to-lime/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-highlight': 'bg-gradient-to-br from-white via-white to-highlight/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-accent': 'bg-gradient-to-br from-white via-white to-accent/10 w-full h-full absolute inset-0 -z-10',
    
    // Alternative gradient directions
    'bg-gradient-tl-primary': 'bg-gradient-to-tl from-white via-white to-primary/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-tl-mint': 'bg-gradient-to-tl from-white via-white to-mint/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-tl-coral': 'bg-gradient-to-tl from-white via-white to-coral/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-tl-purple': 'bg-gradient-to-tl from-white via-white to-purple/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-tl-blue': 'bg-gradient-to-tl from-white via-white to-blue/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-tl-lime': 'bg-gradient-to-tl from-white via-white to-lime/10 w-full h-full absolute inset-0 -z-10', 
    'bg-gradient-tl-highlight': 'bg-gradient-to-tl from-white via-white to-highlight/10 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-tl-accent': 'bg-gradient-to-tl from-white via-white to-accent/10 w-full h-full absolute inset-0 -z-10',
    
    // Radial gradients
    'bg-radial-primary': 'bg-radial-gradient from-white via-white to-primary/10 w-full h-full absolute inset-0 -z-10',
    'bg-radial-mint': 'bg-radial-gradient from-white via-white to-mint/10 w-full h-full absolute inset-0 -z-10',
    'bg-radial-coral': 'bg-radial-gradient from-white via-white to-coral/10 w-full h-full absolute inset-0 -z-10',
    'bg-radial-purple': 'bg-radial-gradient from-white via-white to-purple/10 w-full h-full absolute inset-0 -z-10',
    'bg-radial-blue': 'bg-radial-gradient from-white via-white to-blue/10 w-full h-full absolute inset-0 -z-10',
    'bg-radial-lime': 'bg-radial-gradient from-white via-white to-lime/10 w-full h-full absolute inset-0 -z-10',
    'bg-radial-highlight': 'bg-radial-gradient from-white via-white to-highlight/10 w-full h-full absolute inset-0 -z-10',
    'bg-radial-accent': 'bg-radial-gradient from-white via-white to-accent/10 w-full h-full absolute inset-0 -z-10',
    
    // Gradient with stronger color presence (20% opacity)
    'bg-gradient-primary-strong': 'bg-gradient-to-br from-white via-white to-primary/20 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-mint-strong': 'bg-gradient-to-br from-white via-white to-mint/20 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-coral-strong': 'bg-gradient-to-br from-white via-white to-coral/20 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-purple-strong': 'bg-gradient-to-br from-white via-white to-purple/20 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-blue-strong': 'bg-gradient-to-br from-white via-white to-blue/20 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-lime-strong': 'bg-gradient-to-br from-white via-white to-lime/20 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-highlight-strong': 'bg-gradient-to-br from-white via-white to-highlight/20 w-full h-full absolute inset-0 -z-10',
    'bg-gradient-accent-strong': 'bg-gradient-to-br from-white via-white to-accent/20 w-full h-full absolute inset-0 -z-10',
    
    // Diagonal stripe pattern backgrounds
    'bg-pattern-diagonal-primary': 'relative overflow-hidden',
    'bg-pattern-diagonal-mint': 'relative overflow-hidden',
    'bg-pattern-diagonal-coral': 'relative overflow-hidden',
    'bg-pattern-diagonal-purple': 'relative overflow-hidden',
    'bg-pattern-diagonal-blue': 'relative overflow-hidden',
    'bg-pattern-diagonal-lime': 'relative overflow-hidden',
    'bg-pattern-diagonal-highlight': 'relative overflow-hidden',
    'neo-decoration-square': 'absolute top-[-15px] left-[40%] w-[30px] h-[30px] border-3 border-black rotate-45 -z-1',
    // Corner decoration for ServiceCard
    'corner-spin': 'absolute -top-2 -right-2 w-6 h-6 transition-all duration-300',
    'group-hover:corner-spin-rotate': 'group-hover:rotate-45',
    
    // Icon container for ServiceCard
    'neo-icon-container': 'w-12 h-12 flex items-center justify-center border-3 border-black bg-white transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]',
    // Icon color transition
    'icon-color-change': 'transition-colors duration-300',
    // Icon color on hover for each color
    'group-hover:icon-mint': 'group-hover:text-mint',
    'group-hover:icon-coral': 'group-hover:text-coral',
    'group-hover:icon-primary': 'group-hover:text-primary',
    'group-hover:icon-blue': 'group-hover:text-blue',
    'group-hover:icon-purple': 'group-hover:text-purple',
    'group-hover:icon-lime': 'group-hover:text-lime',
    'group-hover:icon-highlight': 'group-hover:text-highlight',
  },
  rules: [
    // For radial gradients
    [/^bg-radial-gradient$/, () => ({
      'background-image': 'radial-gradient(circle, var(--un-gradient-stops))',
      'background-size': '100% 100%'
    })],
  ]
})