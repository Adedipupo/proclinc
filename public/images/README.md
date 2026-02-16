# Images Folder

Place your clinic images here.

## Recommended Images:

1. **clinic-exterior.jpg** - Outside view of the clinic
2. **reception.jpg** - Reception area
3. **consultation-room.jpg** - Doctor's consultation room
4. **laboratory.jpg** - Lab facilities
5. **staff-team.jpg** - Team photo
6. **emergency-entrance.jpg** - Emergency entrance

## Image Guidelines:

- Format: JPG or PNG
- Size: Optimize for web (under 500KB per image)
- Dimensions: Minimum 1200px wide for hero images
- Aspect Ratio: 16:9 for banner images, 4:3 or 1:1 for general use

## Usage Example:

```tsx
import Image from 'next/image'

<Image 
  src="/images/clinic-exterior.jpg"
  alt="Providence Clinic Building"
  width={1200}
  height={675}
  className="rounded-lg shadow-lg"
/>
```
