// Definir um tipo para os temas

type Theme = {
  background: string;
  text: string;
  primary: string;
};

type Slideshow = {
  url: string;
  image: string;
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
    url: "/images/apresentacao.png",
    image: "Apresentação",
    id: 1,
  },
  image2: {
    url: "/images/meio.png",
    image: "Meio",
    id: 2,
  },
  image3: {
    url: "/images/meiofim.png",
    image: "No Meio",
    id: 3,
  },
  image4: {
    url: "/images/fim.png",
    image: "Fim",
    id: 4,
  },
};

