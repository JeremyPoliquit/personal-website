import {
  Montserrat,
  Anton,
  Rubik_Mono_One,
  Fugaz_One,
  Teko,
  Lilita_One,
  Sanchez,
} from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"], // Specify subsets
});

export const anton = Anton({
  weight: ["400"],
  subsets: ["latin"], // Required subset
});

export const rubik_mono_one = Rubik_Mono_One({
  weight: ["400"],
  subsets: ["latin", "latin-ext"], // Specify subsets
});

export const fugaz_one = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"], // Required subset
});

export const teko = Teko({
  weight: ["400"],
  subsets: ["latin"], // Required subset
});

export const lilita_one = Lilita_One({
  weight: ["400"],
  subsets: ["latin", "latin-ext"], // Specify subsets
});

export const sanchez = Sanchez({
  weight: ["400"],
  subsets: ["latin"], // Required subset
});
