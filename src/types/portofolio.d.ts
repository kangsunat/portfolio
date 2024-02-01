type tCategory = {
  id: number;
  name: "website" | "mobile" | "desktop";
};

type tTechnology = {
  name: string;
  icon: string;
};

export type tPortfolio = {
  id: number;
  title: string;
  categories: tCategory[];
  images: { img: string; isThumbnail?: boolean }[];
  descriptions: string;
  demo?: string;
  isResponsive?: boolean;
  thecnologies: tTechnology[];
};

export type tPortofolios = {
  total: number;
  data: tPortfolio[];
};
