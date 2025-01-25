type Event = {
  name: string;
  date: Date;
  endDate?: Date;
  type?: string;
  link?: string;
};

export const eventsData: Event[] = [
  {
    name: "Formula Student UK 2025",
    date: new Date("2025-07-16"),
    endDate: new Date("2025-07-16"),
    type: "Competition",
    link: "https://imeche.org/events/formula-student",
  },
];
