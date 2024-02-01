import { tPortofolios } from "@/types/portofolio";

const portfolio: tPortofolios = {
  total: 1,
  data: [
    {
      id: 1,
      title: "Golektruk",
      categories: [
        { id: 1, name: "website" },
        { id: 2, name: "mobile" },
      ],
      images: [{ img: "https://picsum.photos/200", isThumbnail: true }],
      thecnologies: [{ name: "nextjs", icon: "" }],
      descriptions: "description here",
    },
  ],
};
