import { car2016 } from "@/data/cars/2016";
import { car2017 } from "@/data/cars/2017";
import { car2018 } from "@/data/cars/2018";
import { car2019 } from "@/data/cars/2019";
import { car2020 } from "@/data/cars/2020";
import { car2021 } from "@/data/cars/2021";
import { car2022 } from "@/data/cars/2022";
import { car2023 } from "@/data/cars/2023";
import { car2024 } from "@/data/cars/2024";

export type Results = {
  title: string;
  description: string;
  image: string;
}[];

export type Team = {
  category: string;
  members: {
    name: string;
    role?: string;
    image?: string;
    link?: string;
    important?: boolean;
  }[];
}[];

export type Car = {
  year: number;
  name: string;
  image: string;
  text?: string;
  team?: Team;
  results?: Results;
  model?: string;
};

export const carsData: Car[] = [
  car2024,
  car2023,
  car2022,
  car2021,
  car2020,
  car2019,
  car2018,
  car2017,
  car2016,
];
