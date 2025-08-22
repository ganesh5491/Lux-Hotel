
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { RoomShowcase } from '@/components/RoomShowcase';
import { Amenities } from '@/components/Amenities';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { BookingWidget } from '@/components/BookingWidget';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <BookingWidget />
      <RoomShowcase />
      <Amenities />
      <Testimonials />
      <Footer />
    </main>
  );
}
