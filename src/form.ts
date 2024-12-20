// Definir um tipo para os temas

type Theme = {
  background: string;
  text: string;
  primary: string;
};

type Slideshow = {
  url: string;
  name: string;
  id: number;
};

type SlideshowMobile = {
  url: string;
  name: string;
  id: number;
};

// Definir o ojeto dos temas

export const themes: Record<"light" | "dark", Theme> = {
  light: {
    background: "#fffff",
    text: "#00000",
    primary: "#1e90ff",
  },
  dark: {
    background: "#4B006E",
    text: "#FFFFF",
    primary: "#83006A",
  },
};

export const slideshowImages: Record< string,
  Slideshow
> = {
  image1: {
    url: "/images/apresentacao1.png",
    name: "Apresentação",
    id: 1,
  },
  image2: {
    url: "/images/meio1.png",
    name: "Meio",
    id: 2,
  },
  image3: {
    url: "/images/meiofim.png",
    name: "No Meio",
    id: 3,
  },
  image4: {
    url: "/images/fim.png",
    name: "Fim",
    id: 4,
  },
};

export const slideshowMobile: Record< string,
  Slideshow
> = {
  image1: {
    url: "/images/apresentacao-mobile.png",
    name: "Apresentação",
    id: 1,
  },
  image2: {
    url: "/images/apresentacao-mobile2.png",
    name: "Meio",
    id: 2,
  },
  image3: {
    url: "/images/apresentacao-mobile3.png",
    name: "No Meio",
    id: 3,
  },
  image4: {
    url: "/images/apresentacao-mobile4.png",
    name: "Fim",
    id: 4,
  },
};

