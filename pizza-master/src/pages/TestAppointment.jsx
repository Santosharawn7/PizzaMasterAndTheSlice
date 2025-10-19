import AppointmentFooter from '../components/AppointmentFooter';

const TestAppointment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-woodbrown-600 via-woodbrown-700 to-woodbrown-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-beigelight-100 mb-6 font-serif italic">
            Book Your Event
          </h1>
          <p className="text-xl md:text-2xl text-beigelight-200 max-w-3xl mx-auto">
            Ready to bring authentic wood-fired pizza to your special event? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Appointment Footer */}
      <AppointmentFooter />
    </div>
  );
};

export default TestAppointment;
