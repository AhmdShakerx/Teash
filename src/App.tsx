import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import TeacherProfile from "./components/sections/TeacherProfile";
import BookingForm from "./components/sections/BookingForm";
import Footer from "./components/sections/Footer";

export default function App() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset scrolling slightly to account for the sticky header (around 75px)
      const headerOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div dir="rtl" className="font-sans text-slate-100 bg-[#030712] antialiased min-h-screen selection:bg-primary-600 selection:text-white">
      {/* Sticky Header with callback */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onScrollToBooking={() => handleScrollTo("booking")} />

        {/* Teacher Card Spotlight */}
        <TeacherProfile />

        {/* Responsive Glassmorphic Booking Form */}
        <BookingForm />
      </main>

      {/* Footer Details */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
