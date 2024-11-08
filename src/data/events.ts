type Event = {
  name: string;
  date: Date;
  endDate?: Date;
  type?: string;
};

export const eventsData: Event[] = [
  {
    name: "FS UK",
    date: new Date("2024-07-17"),
    endDate: new Date("2024-07-24"),
    type: "Competition",
  },
  {
    name: "FS Germany",
    date: new Date("2024-08-12"),
    endDate: new Date("2024-08-18"),
    type: "Competition",
  },
  {
    name: "FS Portugal",
    date: new Date("2024-09-03"),
    endDate: new Date("2024-09-07"),
    type: "Competition",
  },
  // {
  //   name: "Test Event",
  //   date: new Date("2024-12-12"),
  //   endDate: new Date("2024-12-12"),
  // },
];
