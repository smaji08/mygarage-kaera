const vehicleSeed = [
  {
    vinNumber: "19VDE2E51DE001358",
    make: "Acura",
    model: "ILX",
    makeandmodel: "Acura ILX",
    year: 2013,
    date: new Date(Date.now()),
  },
  {
    vinNumber: "2FMHK6DT7EBD0095",
    make: "Ford",
    model: "Flex",
    makeandmodel: "Ford Flex",
    year: 2014,
    date: new Date(Date.now()),
  },
  {
    vinNumber: "19VDG2E51DE001358",
    make: "Subaru",
    model: "Forester",
    makeandmodel: "Subaru Forester",
    year: 2015,
    date: new Date(Date.now()),
  },
];

const tabHeadings = [
  { key: "1", heading: "Select Vehicle" },
  { key: "2", heading: "Select Services" },
  { key: "3", heading: "Select Time" },
  { key: "4", heading: "Confirm" },
];

const services = [
  { key: "1", service: "General Service Request" },
  { key: "2", service: "Summer Tire Change Over" },
  { key: "3", service: "Front Brake Service" },
  { key: "4", service: "Rear Brake Service" },
  { key: "5", service: "Replace Cabin Air Filter" },
  { key: "6", service: "Lube Oil & Filter" },
  { key: "7", service: "Replace Wiper Blades" },
  { key: "8", service: "Winter Tire Change Over" },
  { key: "9", service: "Need a car pickup/drop for other services" },
];

export { vehicleSeed, tabHeadings, services };
