export const MIGYM_ASSETS = {
  logo: "https://migym.co.zw/wp-content/uploads/2023/05/MiGym_logo_FINAL-removebg-preview-1-1-2.png",
  heroVideo: "https://migym.co.zw/wp-content/uploads/2023/05/Migym-15sec-720p.mp4",
  aboutPhoto: "https://migym.co.zw/wp-content/uploads/2023/05/DSCF3192-2.jpeg",
  membershipsBg: "https://migym.co.zw/wp-content/uploads/2023/04/B2A0872-1024x682.jpg",
  teamPhoto: "https://migym.co.zw/wp-content/uploads/2026/04/539044498_1356244436510367_5321504384354501689_n-copy.jpg",
  facilities: [
    {
      src: "https://migym.co.zw/wp-content/uploads/2023/04/B2A8663-1-1024x683.jpg",
      alt: "MiGym Harare outdoor deck and building exterior",
      title: "Gym Floor & Outdoor Space",
      description: "Equipped with the latest Technogym fitness equipment, free weights, cardio machines, and spacious outdoor training areas.",
    },
    {
      src: "https://migym.co.zw/wp-content/uploads/2023/05/B2A8707-1024x678.jpg",
      alt: "MiGym Harare modern change rooms",
      title: "Change Rooms, Pool & Recovery",
      description: "Spacious, modern change rooms with lockers, plus a pristine swimming pool, sauna, and cold plunge for post-session recovery.",
    },
    {
      src: "https://migym.co.zw/wp-content/uploads/2023/04/B2A8670-1024x682.jpg",
      alt: "Raw Roots Co. healthy cafe at MiGym",
      title: "Raw Roots Co. Cafe",
      description: "Refuel right at MiGym with protein-packed smoothie bowls, hearty salads, wraps, and whole-food nutrition—including Gluten-Free, Paleo, and Vegan options.",
    },
  ],
  joinNowBg: "https://migym.co.zw/wp-content/uploads/2023/05/B2A1563-1024x690.jpg",
};

export const MIGYM_CONTACT = {
  phone: "+263 784 078 052",
  phoneHref: "tel:+263784078052",
  whatsappHref: "https://wa.me/263784078052?text=Hi%20MiGym%20Harare%2C%20I%27d%20like%20to%20find%20out%20more%20about%20memberships.",
  email: "info@migym.co.zw",
  address: "216 Rolf Ave, Harare",
  signupUrl: "https://migym.itensityonline.com/add_prospect.php",
  social: {
    facebook: "https://www.facebook.com/MiGymZW/",
    instagram: "https://www.instagram.com/migym_zw/",
    youtube: "https://www.youtube.com/@migymzimbabwe6374",
  },
  hours: [
    { days: "Monday – Friday", time: "5:00am – 7:00pm" },
    { days: "Saturday", time: "6:00am – 11:00am" },
    { days: "Sunday", time: "7:00am – 11:00am" },
  ],
};

export interface MembershipTier {
  name: string;
  description: string;
  price: string;
  period?: string;
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  { name: "Standard", description: "Full access to all gym facilities, classes, and amenities.", price: "120", period: "/mo" },
  { name: "Pensioner (65+)", description: "Full access to all gym facilities, classes, and amenities. *Available to members 65+", price: "80", period: "/mo" },
  { name: "Student (15-18)", description: "Full access to all gym facilities, classes, and amenities, excluding the cold plunge and sauna.", price: "80", period: "/mo" },
  { name: "Day Pass", description: "Daily access to all gym facilities, classes, and amenities.", price: "15" },
  { name: "Week Pass", description: "Enjoy full access to all gym facilities, classes, and amenities for a 7-day period.", price: "50" },
  { name: "FLEX 10", description: "Receive 10 gym visits with the same access as the Standard Membership. Passes are valid for use over a 3-month period.", price: "150" },
];

export interface ProgramSlide {
  id: string;
  name: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  schedule: string;
}

export const PROGRAM_SLIDES: ProgramSlide[] = [
  {
    id: "crossfit",
    name: "CrossFit",
    title: "Transform Your Fitness Journey",
    description: "Power-packed micro workouts that deliver maximum results! Designed to boost your fitness and blast calories. Perfect for busy schedules, CrossFit delivers big gains in small packages.",
    badge: "https://migym.co.zw/wp-content/uploads/2025/11/crossfit.png",
    image: "https://migym.co.zw/wp-content/uploads/2023/04/MiCrossfit-1-1024x682.jpg",
    schedule: "Mon–Fri: 5:30am, 6:30am, 4:30pm, 5:30pm · Sat: 7:00am",
  },
  {
    id: "mihiit",
    name: "MiHIIT",
    title: "Experience the Intensity of HIIT",
    description: "Discover the benefits of HIIT (High-Intensity Interval Training), a time-efficient and effective workout that alternates short bursts of intense exercise with periods of rest, to improve cardiovascular health and burn fat.",
    badge: "https://migym.co.zw/wp-content/uploads/2023/04/5.png",
    image: "https://migym.co.zw/wp-content/uploads/2023/04/IMG_8420-1024x682.jpg",
    schedule: "Mon / Wed / Fri: 6:00am & 5:00pm · Sat: 8:00am",
  },
  {
    id: "hyrox",
    name: "HYROX",
    title: "Dynamic workouts that build real fitness",
    description: "A motivating mix of functional strength and steady running, coached in a supportive environment. Scalable for all levels, it boosts fitness, confidence, and makes training genuinely fun.",
    badge: "https://migym.co.zw/wp-content/uploads/2025/11/hyrox-light.png",
    image: "https://migym.co.zw/wp-content/uploads/2023/04/DSCF3264-37.jpg",
    schedule: "Tue / Thu: 5:30am & 5:00pm · Sat: 7:30am Simulation",
  },
  {
    id: "mistudio",
    name: "MiStudio",
    title: "Engaging Group Workouts",
    description: "Group workouts can also be a lot of fun. Many of our MiStudio exercise classes are designed to be enjoyable and engaging, incorporating music and dance into the workouts to keep things interesting.",
    badge: "https://migym.co.zw/wp-content/uploads/2023/04/3.png",
    image: "https://migym.co.zw/wp-content/uploads/2023/04/IMG_8274-1024x682.jpg",
    schedule: "Mon–Fri: 8:00am, 9:00am, 5:15pm · Sat: 8:30am",
  },
  {
    id: "mistrength",
    name: "MiStrength",
    title: "Unlock Your Inner Power",
    description: "Discover your true potential and transform your body with our comprehensive strength training programs, designed to help you achieve your fitness goals and become stronger than ever before.",
    badge: "https://migym.co.zw/wp-content/uploads/2023/04/4.png",
    image: "https://migym.co.zw/wp-content/uploads/2023/04/IMG_8398-1024x682.jpg",
    schedule: "Mon–Fri: 6:00am, 12:30pm, 5:30pm",
  },
  {
    id: "mispin",
    name: "MiSpin",
    title: "Let's Get Spinning",
    description: "Spinning is an excellent form of exercise. Since it's so low impact, it's an easy activity for many to pick up and to integrate into their fitness regimens. Beyond its ease, it also boasts plenty of great health benefits! MiSpin is equipped with the latest Technogym group cycle.",
    badge: "https://migym.co.zw/wp-content/uploads/2023/04/MiSpin.png",
    image: "https://migym.co.zw/wp-content/uploads/2023/04/DSCF3198-3.jpeg",
    schedule: "Mon–Fri: 5:45am & 5:15pm · Sat: 7:00am",
  },
  {
    id: "micardio",
    name: "MiCardio",
    title: "Get Your Heart Pumping",
    description: "Elevate your heart rate and burn calories with high-intensity workouts. Boost your stamina, improve endurance, and achieve your fitness goals with our range of cardio equipment and classes.",
    badge: "https://migym.co.zw/wp-content/uploads/2023/04/6.png",
    image: "https://migym.co.zw/wp-content/uploads/2023/04/DSCF3306-56-1024x683-1-1024x683.jpeg",
    schedule: "Open Floor Daily + Tue / Thu: 6:30am & 4:45pm",
  },
];

export const TRAINERS = [
  { name: "Darian", role: "Personal Trainer", specialty: "Strength & Conditioning" },
  { name: "Emmanuel", role: "Personal Trainer", specialty: "Hypertrophy & Functional Fitness" },
  { name: "Skippy", role: "Personal Trainer", specialty: "Athletic Performance & Mobility" },
  { name: "Fabian", role: "Personal Trainer", specialty: "Weight Loss & Body Recomposition" },
  { name: "Michele", role: "Personal Trainer", specialty: "Core Stability & Injury Rehab" },
  { name: "Walter", role: "Personal Trainer", specialty: "Endurance & HIIT Coaching" },
  { name: "Pearson", role: "Personal Trainer", specialty: "Strength Training & Olympic Lifts" },
  { name: "Sav", role: "Personal Trainer", specialty: "HYROX & Functional Conditioning" },
];