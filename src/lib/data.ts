export const CLINIC = {
  name: "Swastik Dental Care",
  tagline: "Your Smile, Our Passion",
  since: "2017",
  experience: "8+",
  phone: "+918006158666",
  phoneDisplay: "+91 80061 58666",
  whatsapp: "8006158666",
  email: "swastikdentalcare.ddn@gmail.com",
  address: {
    line1: "Near Sainik Colony",
    line2: "Harrawala, Dehradun",
    state: "Uttarakhand",
    pincode: "248005",
    full: "Near Sainik Colony, Harrawala, Dehradun, Uttarakhand 248005",
  },
  coordinates: {
    lat: 30.3300608,
    lng: 78.0828672,
  },
  googleMapsUrl: "https://maps.app.goo.gl/7WbTJ1XB3hMAk31h7?g_st=aw",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d78.0828672!3d30.3300608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092f51faaaaaab%3A0x2989358cea5925cc!2sLatika+Dental+Care%2FSwastik+dental+care!5e0!3m2!1sen!2sin!4v1",
  hours: {
    morning: "10:00 AM – 1:30 PM",
    evening: "5:00 PM – 8:00 PM",
    sunday: "Closed",
  },
  rating: 4.7,
  totalReviews: 40,
};

export const SERVICES = [
  {
    id: "teeth-cleaning",
    title: "TEETH CLEANING (SCALING)",
    description: "Professional removal of plaque and tartar to prevent gum disease and maintain a bright, healthy smile.",
    detailedDescription: "Our professional scaling and polishing treatment uses advanced ultrasonic tools to remove stubborn calculus and plaque that regular brushing misses. This procedure is essential for preventing gingivitis, periodontitis, and bad breath, ensuring your gums stay healthy and your teeth remain strong.",
    icon: "tooth",
    image: "/Swastik-Dental-Care/images/service-cleaning.png",
    features: ["Painless ultrasonic scaling", "Stain removal", "Gum health assessment", "Polishing for smooth finish"]
  },
  {
    id: "extraction",
    title: "EXTRACTION",
    description: "Safe and painless removal of damaged, decayed, or crowded teeth using modern anesthetic techniques.",
    detailedDescription: "Whether it's a severely decayed tooth or a problematic wisdom tooth, our surgeons perform extractions with the utmost care. We utilize minimally invasive techniques to ensure rapid healing and provide comprehensive post-operative care instructions to keep you comfortable.",
    icon: "shield",
    image: "/Swastik-Dental-Care/images/service-extraction.png",
    features: ["Local anesthesia for comfort", "Minimally invasive approach", "Wisdom tooth management", "Socket preservation"]
  },
  {
    id: "fpd",
    title: "FPD (FIXED PARTIAL DENTURE)",
    description: "A permanent solution for missing teeth that restores function and aesthetics using bridges.",
    detailedDescription: "Fixed Partial Dentures (Bridges) are used to replace one or more missing teeth by joining an artificial tooth permanently to adjacent teeth or dental implants. We use high-quality ceramic and zirconia materials that provide exceptional durability and a natural appearance.",
    icon: "implant",
    image: "/Swastik-Dental-Care/images/service-fpd-rpd.png",
    features: ["Natural-looking bridges", "Zirconia & Ceramic options", "Permanent tooth replacement", "Restores bite function"]
  },
  {
    id: "rpd",
    title: "RPD (REMOVABLE PARTIAL DENTURE)",
    description: "Custom-made removable appliances to replace missing teeth and restore your beautiful smile.",
    detailedDescription: "Removable Partial Dentures are an excellent, cost-effective option for replacing multiple missing teeth. Our custom-designed RPDs are crafted for maximum comfort and a precise fit, helping you eat, speak, and smile with confidence once again.",
    icon: "implant",
    image: "/Swastik-Dental-Care/images/service-fpd-rpd.png",
    features: ["Custom-fit design", "Lightweight materials", "Easily removable for cleaning", "Improved chewing ability"]
  },
  {
    id: "cavity-filling",
    title: "CAVITY FILLING",
    description: "Restoring decayed teeth with tooth-colored composite resin for a natural and durable result.",
    detailedDescription: "We use state-of-the-art composite resin materials that bond directly to your tooth structure. These tooth-colored fillings are not only aesthetically invisible but also provide superior strength and longevity compared to traditional silver amalgams.",
    icon: "sparkle",
    image: "/Swastik-Dental-Care/images/service-filling.png",
    features: ["Tooth-colored composite", "Mercury-free materials", "Aesthetic restoration", "Prevents further decay"]
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Painless root canal procedures to save infected teeth and eliminate deep dental pain.",
    detailedDescription: "Our root canal specialist uses rotary endodontics and apex locators to perform efficient, painless treatments. By removing the infected pulp and sealing the tooth, we can save your natural tooth and prevent the need for extraction.",
    icon: "shield",
    image: "/Swastik-Dental-Care/images/service-root-canal.png",
    features: ["Rotary endodontics", "Single-visit options", "Infection control", "Pain management experts"]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "The gold standard for tooth replacement, offering permanent stability and natural function.",
    detailedDescription: "Dental implants are titanium posts that act as artificial tooth roots. Once integrated with the bone, they provide a rock-solid foundation for crowns, bridges, or dentures. It is the most advanced and durable way to replace missing teeth today.",
    icon: "implant",
    image: "/Swastik-Dental-Care/images/service-implants.png",
    features: ["Titanium implants", "Bone grafting if needed", "Computer-guided surgery", "Lifetime solution"]
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Braces",
    description: "Correcting misaligned teeth and bite issues with modern braces and clear aligners.",
    detailedDescription: "From traditional metallic braces to modern clear aligners like Invisalign, we offer a range of solutions to straighten your teeth. A properly aligned bite not only looks better but is also easier to clean and maintain throughout your life.",
    icon: "align",
    image: "/Swastik-Dental-Care/images/service-ortho.png",
    features: ["Invisalign & Clear aligners", "Ceramic (invisible) braces", "Metal braces", "Retainers & Follow-up"]
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description: "Gentle and fun dental care focused on the unique needs of infants, children, and teens.",
    detailedDescription: "We strive to create a positive dental experience for our youngest patients. Our pediatric treatments include preventive sealants, fluoride applications, and habit counseling, all delivered in a friendly environment to build a lifetime of healthy smiles.",
    icon: "child",
    image: "/Swastik-Dental-Care/images/service-pediatric.png",
    features: ["Kid-friendly environment", "Sealants & Fluoride", "Pulpotomy & Fillings", "Growth monitoring"]
  },
];

export const DOCTORS = [
  {
    id: "dr-ashish",
    name: "Dr. Ashish Pal",
    qualification: "BDS",
    specialization: "General Dentist",
    experience: "13+ Years Experience",
    bio: "Dr. Ashish Pal is the visionary behind Swastik Dental Care. With 13 years of clinical excellence, he specializes in general dentistry with a focus on comprehensive patient care and preventive treatments. His gentle approach and commitment to pain-free dentistry have earned him the trust of thousands of patients in Dehradun.",
    image: "/Swastik-Dental-Care/images/doctor-ashish.png",
  },
  {
    id: "dr-shanu",
    name: "Dr. Shanu",
    qualification: "BDS, MDS",
    specialization: "Orthodontist & Specialist",
    experience: "7+ Years Experience",
    bio: "Dr. Shanu is a highly skilled specialist with a Master's degree in Dental Surgery. With 7 years of specialized experience, she excels in orthodontic treatments and complex dental procedures. Her expertise in the latest dental advancements ensures that patients receive the most effective and modern care possible.",
    image: "/Swastik-Dental-Care/images/doctor-shanu.png",
  },
];

export const REVIEWS = [
  {
    name: "Aarav Mehta",
    rating: 5,
    text: "An absolutely wonderful experience! Dr. Ashish and his team made me feel so comfortable during my root canal. The clinic is spotless and very modern. I walked out pain-free and smiling. Highly recommend!",
    date: "March 2026",
    treatment: "Root Canal",
    image: "/Swastik-Dental-Care/images/patient-aarav.png",
  },
  {
    name: "Sneha Rawat",
    rating: 5,
    text: "I brought my 6-year-old son here for his first dental check-up. The staff was incredibly patient and kind. My son actually enjoyed the visit! The pediatric care here is truly exceptional.",
    date: "February 2026",
    treatment: "Pediatric Check-up",
    image: "/Swastik-Dental-Care/images/patient-sneha.png",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    text: "Got my dental implants done here and the results are phenomenal. Dr. Ashish explained every step of the procedure. The implants look completely natural. Worth every penny!",
    date: "January 2026",
    treatment: "Dental Implants",
    image: "/Swastik-Dental-Care/images/patient-vikram.png",
  },
  {
    name: "Deepika Joshi",
    rating: 4,
    text: "Very professional and hygienic clinic. Got my teeth whitening done and the results are amazing. The only minor issue was the wait time, but the quality of treatment more than made up for it.",
    date: "December 2025",
    treatment: "Teeth Whitening",
    image: "/Swastik-Dental-Care/images/patient-deepika.png",
  },
  {
    name: "Rahul Panwar",
    rating: 5,
    text: "I've been coming to Swastik Dental Care for over two years now. From regular check-ups to getting braces, every visit has been smooth and professional. Best dental clinic in Dehradun hands down!",
    date: "November 2025",
    treatment: "Orthodontics",
    image: "/Swastik-Dental-Care/images/patient-rahul.png",
  },
  {
    name: "Meera Chauhan",
    rating: 5,
    text: "Dr. Ashish did an incredible job with my root canal treatment. I was terrified before the procedure but he was so calming and professional. No pain at all! The clinic atmosphere is very soothing.",
    date: "October 2025",
    treatment: "Root Canal",
    image: "/Swastik-Dental-Care/images/patient-meera.png",
  },
  {
    name: "Ankit Bisht",
    rating: 5,
    text: "The doctor is very polite and soft-spoken. He explains the dental problem very clearly and doesn't recommend unnecessary treatments. The clinic is very clean and hygienic with fully sterilized equipment.",
    date: "September 2025",
    treatment: "General Check-up",
    image: "/Swastik-Dental-Care/images/patient-ankit.png",
  },
  {
    name: "Priti Negi",
    rating: 5,
    text: "Best dental clinic near Sainik Colony! I had severe tooth pain and Dr. Ashish saw me on short notice. The RCT was completely painless. Very grateful for the quick and professional service.",
    date: "August 2025",
    treatment: "Root Canal",
    image: "/Swastik-Dental-Care/images/patient-priti.png",
  },
  {
    name: "Suresh Thapa",
    rating: 5,
    text: "I was looking for a reliable dentist for my dentures and was recommended Swastik Dental Care. Dr. Ashish took great care in getting the fit perfect. Very comfortable and natural-looking. Highly satisfied!",
    date: "July 2025",
    treatment: "Dentures",
    image: "/Swastik-Dental-Care/images/patient-suresh.png",
  },
  {
    name: "Kavita Sharma",
    rating: 4,
    text: "Very modern clinic with all the latest equipment. Got a professional cleaning done and the experience was great. Dr. Ashish gave me excellent advice on maintaining oral hygiene. Will definitely return.",
    date: "June 2025",
    treatment: "Teeth Cleaning",
    image: "/Swastik-Dental-Care/images/patient-kavita.png",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];
