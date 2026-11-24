export const FITNESSPLANET_ASSETS = {
  logo: "/914444258_1769702841827524_4787157234768054672_n.jpg",
  facilities: [
    {
      title: "Training Floor & Equipment",
      description:
        "Technogym machines, free weights and strength equipment, with space for the gym floor and outdoor training areas.",
    },
    {
      title: "Cardio & Studio Spaces",
      description:
        "Cardio machines and studio space used for aerobics, boxing, karate and group cycle sessions.",
    },
    {
      title: "Change Rooms, Pool & Recovery",
      description:
        "Change rooms with lockers, plus a swimming pool, sauna and cold plunge for post-session recovery.",
    },
    {
      title: "Raw Roots Co. Cafe",
      description:
        "Protein-packed smoothie bowls, salads, wraps and whole-food meals on site, including Gluten-Free, Paleo and Vegan options.",
    },
  ],
};

export const FITNESSPLANET_CONTACT = {
  phone: "+263 784 078 052",
  phoneHref: "tel:+263784078052",
  address: "Harare Show Grounds, Stand 126, Harare, Zimbabwe",
  hours: [
    { days: "Monday – Friday", time: "5:00am – 7:00pm" },
    { days: "Saturday", time: "6:00am – 11:00am" },
    { days: "Sunday", time: "7:00am – 11:00am" },
  ],
};

export const FITNESSPLANET_IMAGES = {
  insideWide: "/images/training-01.jpg",
  insideTop: "/images/training-02.jpg",
  insideSmall: "/images/training-03.jpg",
  floor: "/images/training-04.jpg",
  classes: "/images/training-05.jpg",
  coaching: "/images/training-06.jpg",
  recovery: "/images/training-07.jpg",
  community: "/images/training-08.jpg",
  contactWide: "/images/training-09.jpg",
  contactSmall: "/images/training-10.jpg",
};

export interface MembershipTier {
  name: string;
  description: string;
  price: string;
  period?: string;
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    name: "Standard",
    description: "Full access to all gym facilities, classes, and amenities.",
    price: "120",
    period: "/mo",
  },
  {
    name: "Pensioner (65+)",
    description:
      "Full access to all gym facilities, classes, and amenities. *Available to members 65+",
    price: "80",
    period: "/mo",
  },
  {
    name: "Student (15-18)",
    description:
      "Full access to all gym facilities, classes, and amenities, excluding the cold plunge and sauna.",
    price: "80",
    period: "/mo",
  },
  {
    name: "Day Pass",
    description: "Daily access to all gym facilities, classes, and amenities.",
    price: "15",
  },
  {
    name: "Week Pass",
    description:
      "Enjoy full access to all gym facilities, classes, and amenities for a 7-day period.",
    price: "50",
  },
  {
    name: "FLEX 10",
    description:
      "Receive 10 gym visits with the same access as the Standard Membership. Passes are valid for use over a 3-month period.",
    price: "150",
  },
];

export interface ClassCategory {
  id: string;
  label: string;
  summary: string;
}

export const CLASS_CATEGORIES: ClassCategory[] = [
  {
    id: "floor-strength",
    label: "Floor & Strength",
    summary: "Train independently or add structure to the main lifts.",
  },
  {
    id: "conditioning",
    label: "Conditioning",
    summary: "Intervals, cycle and functional work with published times.",
  },
  {
    id: "group-skills",
    label: "Group & Skills",
    summary: "Coached movement, technique and studio sessions.",
  },
  {
    id: "goals",
    label: "Goals",
    summary: "Goal-led support planned with reception.",
  },
];

export interface TrainingPath {
  title: string;
  sentence: string;
  linkLabel: string;
  to: "/classes" | "/trainers" | "/facilities";
  hash?: string;
}

export const TRAINING_PATHS: TrainingPath[] = [
  {
    title: "Floor & Strength",
    sentence:
      "Technogym machines, free weights and strength equipment for training on your own schedule.",
    linkLabel: "Explore the floor",
    to: "/classes",
    hash: "floor-strength",
  },
  {
    title: "Classes & Conditioning",
    sentence: "Coached intervals, cycle, strength and studio sessions across the week.",
    linkLabel: "See class times",
    to: "/classes",
    hash: "conditioning",
  },
  {
    title: "Coaching — Charlene & Clive",
    sentence: "Work with the two coaches on our directory and get help choosing a starting point.",
    linkLabel: "Meet the coaches",
    to: "/trainers",
    hash: "instructors",
  },
  {
    title: "Recovery & Fuel",
    sentence: "Pool, sauna, cold plunge and Raw Roots Co. on the same site.",
    linkLabel: "See what's on site",
    to: "/facilities",
  },
];

export interface ProgramSlide {
  id: string;
  name: string;
  category: ClassCategory["label"];
  title: string;
  description: string;
  schedule: string;
}

export const PROGRAM_SLIDES: ProgramSlide[] = [
  {
    id: "gym-floor",
    name: "Gym Floor",
    category: "Floor & Strength",
    title: "Train on your own schedule",
    description:
      "Technogym equipment, free weights and strength machines are available during opening hours. If you are new to the floor, ask reception about induction.",
    schedule: "Daily during opening hours",
  },
  {
    id: "strength",
    name: "Fitnessplanet Strength",
    category: "Floor & Strength",
    title: "Build on the basics",
    description:
      "Structured strength work using the main lifts, machines and free weights. Coaching is available when you want help with technique or progression.",
    schedule: "Mon–Fri: 6:00am, 12:30pm, 5:30pm",
  },
  {
    id: "cardio",
    name: "Fitnessplanet Cardio",
    category: "Conditioning",
    title: "Heart-rate work, your way",
    description:
      "Use the cardio machines on the floor or join a scheduled cardio session. Sessions are built around steady effort, stamina and recovery.",
    schedule: "Open Floor Daily + Tue / Thu: 6:30am & 4:45pm",
  },
  {
    id: "hiit",
    name: "Fitnessplanet HIIT",
    category: "Conditioning",
    title: "Intervals on the clock",
    description:
      "Short efforts with recovery built in. HIIT is a time-efficient way to work on cardiovascular fitness and conditioning.",
    schedule: "Mon / Wed / Fri: 6:00am & 5:00pm · Sat: 8:00am",
  },
  {
    id: "crossfit",
    name: "CrossFit",
    category: "Conditioning",
    title: "Short, varied sessions",
    description:
      "Varied, coached workouts that mix strength and conditioning. Sessions are scalable and suit members who like structure with plenty of variety.",
    schedule: "Mon–Fri: 5:30am, 6:30am, 4:30pm, 5:30pm · Sat: 7:00am",
  },
  {
    id: "hyrox",
    name: "HYROX",
    category: "Conditioning",
    title: "Run and functional conditioning",
    description:
      "A mix of running and functional strength work, coached in a supportive environment. Scalable for members training at different levels.",
    schedule: "Tue / Thu: 5:30am & 5:00pm · Sat: 7:30am Simulation",
  },
  {
    id: "spin",
    name: "Fitnessplanet Spin",
    category: "Conditioning",
    title: "Technogym group cycle",
    description:
      "Low-impact group cycling on Technogym group cycle bikes. Sessions are suitable for new riders and regular cyclists alike.",
    schedule: "Mon–Fri: 5:45am & 5:15pm · Sat: 7:00am",
  },
  {
    id: "aerobics",
    name: "Aerobics",
    category: "Group & Skills",
    title: "Group movement sessions",
    description:
      "Coordinated aerobic sessions that keep the heart rate up through continuous movement. Ask reception which sessions are currently running.",
    schedule: "Ask reception for the current timetable",
  },
  {
    id: "boxing",
    name: "Boxing",
    category: "Group & Skills",
    title: "Technique and conditioning",
    description:
      "Boxing work combining technique, footwork and conditioning. Ask reception for the current session times and what to bring.",
    schedule: "Ask reception for the current timetable",
  },
  {
    id: "karate",
    name: "Karate",
    category: "Group & Skills",
    title: "Skill, discipline and movement",
    description:
      "Karate sessions focused on technique, discipline and controlled movement. Ask reception for the current timetable.",
    schedule: "Ask reception for the current timetable",
  },
  {
    id: "studio",
    name: "Fitnessplanet Studio",
    category: "Group & Skills",
    title: "Group workouts with music",
    description:
      "Studio classes built around music and group movement. A good option if you prefer training with other people rather than on the floor.",
    schedule: "Mon–Fri: 8:00am, 9:00am, 5:15pm · Sat: 8:30am",
  },
  {
    id: "weight",
    name: "Weight Loss / Gain",
    category: "Goals",
    title: "Training for a direction",
    description:
      "Support for members working on weight loss or weight gain. Pair floor work, classes and coaching around the goal you want to reach.",
    schedule: "By arrangement at reception",
  },
];

export const TRAINERS = [
  { name: "Charlene", role: "Coach" },
  { name: "Clive", role: "Coach" },
];
