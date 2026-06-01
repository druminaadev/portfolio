# Cinematic Anime-Realistic Portfolio

## Video Background Generation

To create the perfect cinematic anime-realistic video background for this portfolio, use the following AI video generation prompt:

### Recommended Tools:
- **Runway Gen-3** (Best for cinematic quality)
- **Pika Labs** (Great for anime-realistic style)
- **Stable Video Diffusion**
- **Leonardo.ai Motion**

### Video Generation Prompt:

```
Create a premium modern developer portfolio hero section in cinematic anime-realistic illustration style. 

Scene: A cozy dark workspace at night with warm orange ambient lighting. A stylish young full-stack developer with glasses and beard wearing a black hoodie sits at a desk in front of glowing monitors. One hand is adjusting glasses naturally. Background includes bookshelves, anime figurines, desk lamps, coding setup, dual monitors with UI dashboards and fantasy forest wallpaper. 

Composition:
- Character positioned center-right
- Large bold typography space on left side
- Clean spacing for website hero content
- Dark modern aesthetic
- Soft cinematic shadows
- Depth of field and bokeh lighting

Style:
- Hyper detailed digital illustration
- Semi realistic anime + Pixar + cinematic 3D style
- Modern startup portfolio aesthetic
- Warm orange and teal color grading
- Unreal Engine quality render
- Premium glassmorphism atmosphere
- High contrast lighting
- Sharp facial details
- Realistic hoodie fabric
- Professional UI/UX hero section design

Background details:
- Floating particles
- Soft monitor glow
- Cozy coding environment
- Modern workspace
- Tech creator vibe
- Subtle volumetric lighting

Camera:
- Medium shot
- Slight cinematic angle
- Focus on face and upper body
- Subtle camera movement (slow push-in or parallax)

Motion:
- Gentle breathing animation
- Subtle head movement
- Monitor glow flickering
- Floating particles
- Ambient lighting shifts

Quality:
- 4K ultra detailed
- Website landing page ready
- Behance/Dribbble quality
- Clean composition
- Ultra aesthetic

Aspect Ratio: 16:9
Duration: 10-15 seconds (loopable)

Negative Prompt:
low quality, blurry face, distorted hands, extra fingers, bad anatomy, messy composition, overexposed lighting, cartoon proportions, noisy image, watermark, text artifacts, jerky motion, fast movement
```

### Alternative: Image-to-Video Approach

1. **Generate Static Image First** using:
   - Midjourney
   - DALL-E 3
   - Leonardo.ai
   - Stable Diffusion XL

2. **Convert to Video** using:
   - Runway Gen-3 (Image-to-Video)
   - Pika Labs (Animate feature)
   - Stable Video Diffusion

### Video Specifications:
- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (minimum)
- **Aspect Ratio**: 16:9
- **Duration**: 10-15 seconds
- **FPS**: 30 or 60
- **Loop**: Seamless loop preferred

### After Generation:

1. Replace `/public/herovideo.mp4` with your generated video
2. Ensure the video is optimized for web (compressed but high quality)
3. Test the video plays smoothly in the browser

## Project Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Features

✅ Cinematic anime-realistic video background
✅ Dual video layers (main + blurred ambient)
✅ Three.js warm orange & teal particles
✅ Mouse parallax camera movement
✅ Glassmorphism controls
✅ GSAP smooth animations
✅ Left-aligned hero typography
✅ Premium modern aesthetic
✅ Fully responsive

## Customization

Edit `components/VideoIntro.tsx` to update:
- Name (line 72)
- Subtitle/role (line 73-75)

Edit `components/VideoIntro.module.css` to adjust:
- Typography positioning
- Color gradients
- Overlay darkness
- Responsive breakpoints

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Three.js (Particle system)
- GSAP (Animations)
- TypeScript
- CSS Modules
