type Event = {
  name: string;
  date: Date;
  endDate?: Date;
  type?: string;
};

export const eventsData: Event[] = [
  {
    name: "FS UK",
    date: new Date("2025-07-16"),
    endDate: new Date("2025-07-16"),
    type: "Competition",
  },
];
