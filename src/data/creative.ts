export interface CreativeWork {
  id: string;
  title: string;
  category: "Photography" | "Cinematography" | "Visual Design" | "Video Editing";
  location: string;
  year: string;
  aspect: "portrait" | "landscape" | "square";
  imageUrl: string;
  note: string;
  exif: {
    camera: string;
    focal: string;
    aperture: string;
    shutter: string;
    iso: string;
  };
}

export const CREATIVE_WORKS: CreativeWork[] = [
  {
    id: "creative-01",
    title: "Brutalist Geometry & Shadow",
    category: "Photography",
    location: "Dehradun / Urban Architecture",
    year: "2025",
    aspect: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    note: "Exploring stark concrete planes, natural light angles, and negative space balance.",
    exif: {
      camera: "Sony α7 IV",
      focal: "35mm Prime",
      aperture: "f/2.8",
      shutter: "1/800s",
      iso: "100"
    }
  },
  {
    id: "creative-02",
    title: "Transit In Stillness",
    category: "Cinematography",
    location: "High-Speed Rail Corridor",
    year: "2025",
    aspect: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    note: "Color graded sequences examining motion blur against stationary human silhouettes.",
    exif: {
      camera: "Blackmagic Pocket 4K",
      focal: "50mm Cine",
      aperture: "T/2.0",
      shutter: "1/50s (180°)",
      iso: "400"
    }
  },
  {
    id: "creative-03",
    title: "Himalayan Ridge Elevation",
    category: "Photography",
    location: "Garhwal Himalayas",
    year: "2026",
    aspect: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    note: "Documenting atmospheric haze and high-altitude natural gradient transitions.",
    exif: {
      camera: "Fujifilm X-T5",
      focal: "23mm (35mm eq.)",
      aperture: "f/5.6",
      shutter: "1/400s",
      iso: "160"
    }
  },
  {
    id: "creative-04",
    title: "Chromatic Study & Form",
    category: "Visual Design",
    location: "Design Studio Experiments",
    year: "2025",
    aspect: "square",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
    note: "Minimal editorial composition experimenting with typography rules and layout tension.",
    exif: {
      camera: "Digital Render / Figma",
      focal: "Isometric Orthographic",
      aperture: "Ray-Traced",
      shutter: "Realtime 60fps",
      iso: "Linear Rec.709"
    }
  }
];
