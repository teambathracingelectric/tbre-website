type Event = {
  name: string;
  date: Date;
  type?: string;
};

// TODO: get list of upcoming events

const eventsData: Event[] = [
  {
    name: "FS UK",
    date: new Date("2024-07-12"),
    type: "Competition",
  },
];

export default eventsData;
