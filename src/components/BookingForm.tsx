import React, { useState } from 'react';
import { Calendar, Clock, Phone, User, Scissors, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/services';
import { BUSINESS_CONFIG, buildWhatsAppLink } from '../config/business';
import { validateBookingForm, BookingFormData } from '../utils/bookingValidation';

interface BookingFormProps {
  preselectedService?: ServiceItem | null;
  onClearPreselectedService?: () => void;
  whatsappEnabled: boolean;
  onToggleWhatsApp: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preselectedService,
  whatsappEnabled,
  onToggleWhatsApp,
}) => {
  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: preselectedService ? preselectedService.id : '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string>('');

  // Update service if preselected changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedService.id }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});

    const selectedServiceObj = SERVICES_DATA.find((s) => s.id === formData.serviceId);
    const serviceName = selectedServiceObj ? selectedServiceObj.name : formData.serviceId;

    if (whatsappEnabled) {
      const waLink = buildWhatsAppLink({
        name: formData.fullName,
        service: serviceName,
        date: formData.preferredDate,
        time: formData.preferredTime,
        notes: formData.notes,
      });
      setGeneratedWhatsAppUrl(waLink);

      // Attempt to open WhatsApp window in real environment
      try {
        window.open(waLink, '_blank', 'noopener,noreferrer');
      } catch {
        // Fallback handled gracefully in UI
      }
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setGeneratedWhatsAppUrl('');
    setFormData({
      fullName: '',
      phone: '',
      serviceId: '',
      preferredDate: '',
      preferredTime: '',
      notes: '',
    });
  };

  // Get today's ISO date string YYYY-MM-DD for min date
  const todayIso = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
  ];

  return (
    <section
      id="booking"
      className="py-20 lg:py-28 bg-[#151515] border-t border-white/5 relative"
      aria-label="Appointment Enquiry Section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A46A] mb-3">
            <span>Enquiry & Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1EA] tracking-tight mb-4">
            Let's Plan Your Next Look.
          </h2>
          <p className="text-sm sm:text-base text-[#F5F1EA]/75 font-light leading-relaxed">
            Submit your appointment preferences below. Our salon will review available slots and coordinate with you to confirm your visit.
          </p>
        </div>

        {/* WhatsApp Channel Switch Bar (Owner Configurable) */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded bg-[#1C1C1C] border border-white/10 text-xs">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-2 h-2 rounded-full ${
                whatsappEnabled ? 'bg-emerald-400' : 'bg-amber-400'
              }`}
            />
            <span className="text-[#F5F1EA]/80 font-medium">
              Booking Dispatch Mode:{' '}
              {whatsappEnabled ? 'Instant WhatsApp Enquiry' : 'Direct Call-to-Book'}
            </span>
          </div>
          <button
            type="button"
            onClick={onToggleWhatsApp}
            className="text-[11px] underline text-[#C6A46A] hover:text-[#D8BB89] transition-colors"
          >
            Switch to {whatsappEnabled ? 'Call-to-Book Only' : 'WhatsApp Enquiry'}
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-[#181818] rounded-xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#C6A46A]/20 border border-[#C6A46A] flex items-center justify-center text-[#C6A46A] mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1EA] mb-3">
                Enquiry Details Prepared
              </h3>

              <div className="bg-[#111111] p-5 rounded-lg border border-white/10 text-left max-w-md mx-auto mb-6 text-xs text-[#F5F1EA]/80 space-y-2">
                <p>
                  <strong className="text-[#C6A46A]">Patron:</strong> {formData.fullName}
                </p>
                <p>
                  <strong className="text-[#C6A46A]">Phone:</strong> {formData.phone}
                </p>
                <p>
                  <strong className="text-[#C6A46A]">Service:</strong>{' '}
                  {SERVICES_DATA.find((s) => s.id === formData.serviceId)?.name || formData.serviceId}
                </p>
                <p>
                  <strong className="text-[#C6A46A]">Date & Time:</strong> {formData.preferredDate} at{' '}
                  {formData.preferredTime}
                </p>
                {formData.notes && (
                  <p>
                    <strong className="text-[#C6A46A]">Preferences:</strong> {formData.notes}
                  </p>
                )}
              </div>

              <div className="p-4 rounded bg-[#1C1C1C] border border-[#C6A46A]/30 text-xs text-[#F5F1EA]/80 max-w-md mx-auto mb-8 font-light">
                <p className="font-medium text-[#C6A46A] mb-1">Confirmation Policy Notice:</p>
                Appointments are confirmed only after the salon team reviews the schedule and confirms with you. No payment or instant lock is taken online.
              </div>

              {whatsappEnabled && generatedWhatsAppUrl ? (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3 text-xs uppercase tracking-widest font-semibold text-[#111111] bg-[#C6A46A] hover:bg-[#D8BB89] transition-all rounded shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message via WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-medium text-[#F5F1EA] border border-white/20 hover:border-white/40 transition-all rounded"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={BUSINESS_CONFIG.phones.primary.tel}
                    className="w-full sm:w-auto px-7 py-3 text-xs uppercase tracking-widest font-semibold text-[#111111] bg-[#C6A46A] hover:bg-[#D8BB89] transition-all rounded shadow-md flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91 99712 20786 to Confirm</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-medium text-[#F5F1EA] border border-white/20 hover:border-white/40 transition-all rounded"
                  >
                    Reset Form
                  </button>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-wider text-[#F5F1EA]/80 font-medium mb-2"
                  >
                    Full Name <span className="text-[#C6A46A]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#F5F1EA]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rohini Malhotra"
                      className={`w-full bg-[#111111] border ${
                        errors.fullName ? 'border-rose-500' : 'border-white/15 focus:border-[#C6A46A]'
                      } rounded px-4 py-3 pl-10 text-sm text-[#F5F1EA] placeholder-[#F5F1EA]/30 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider text-[#F5F1EA]/80 font-medium mb-2"
                  >
                    Mobile Number <span className="text-[#C6A46A]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#F5F1EA]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit Indian mobile (e.g. 9811223344)"
                      className={`w-full bg-[#111111] border ${
                        errors.phone ? 'border-rose-500' : 'border-white/15 focus:border-[#C6A46A]'
                      } rounded px-4 py-3 pl-10 text-sm text-[#F5F1EA] placeholder-[#F5F1EA]/30 focus:outline-none transition-colors font-mono`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label
                  htmlFor="serviceId"
                  className="block text-xs uppercase tracking-wider text-[#F5F1EA]/80 font-medium mb-2"
                >
                  Service Desired <span className="text-[#C6A46A]">*</span>
                </label>
                <div className="relative">
                  <Scissors className="w-4 h-4 text-[#F5F1EA]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id="serviceId"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    className={`w-full bg-[#111111] border ${
                      errors.serviceId ? 'border-rose-500' : 'border-white/15 focus:border-[#C6A46A]'
                    } rounded px-4 py-3 pl-10 text-sm text-[#F5F1EA] focus:outline-none transition-colors appearance-none cursor-pointer`}
                  >
                    <option value="" className="bg-[#111111] text-[#F5F1EA]/50">
                      Select a service...
                    </option>
                    <optgroup label="Hair Services" className="bg-[#181818] text-[#C6A46A]">
                      {SERVICES_DATA.filter((s) => s.category === 'hair').map((s) => (
                        <option key={s.id} value={s.id} className="text-[#F5F1EA]">
                          {s.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Skin & Beauty" className="bg-[#181818] text-[#C6A46A]">
                      {SERVICES_DATA.filter((s) => s.category === 'beauty').map((s) => (
                        <option key={s.id} value={s.id} className="text-[#F5F1EA]">
                          {s.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Grooming & Wellness" className="bg-[#181818] text-[#C6A46A]">
                      {SERVICES_DATA.filter((s) => s.category === 'grooming').map((s) => (
                        <option key={s.id} value={s.id} className="text-[#F5F1EA]">
                          {s.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
                {errors.serviceId && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.serviceId}
                  </p>
                )}
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs uppercase tracking-wider text-[#F5F1EA]/80 font-medium mb-2"
                  >
                    Preferred Date <span className="text-[#C6A46A]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#F5F1EA]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      min={todayIso}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full bg-[#111111] border ${
                        errors.preferredDate ? 'border-rose-500' : 'border-white/15 focus:border-[#C6A46A]'
                      } rounded px-4 py-3 pl-10 text-sm text-[#F5F1EA] focus:outline-none transition-colors font-mono`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-xs uppercase tracking-wider text-[#F5F1EA]/80 font-medium mb-2"
                  >
                    Preferred Time Slot <span className="text-[#C6A46A]">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#F5F1EA]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={`w-full bg-[#111111] border ${
                        errors.preferredTime ? 'border-rose-500' : 'border-white/15 focus:border-[#C6A46A]'
                      } rounded px-4 py-3 pl-10 text-sm text-[#F5F1EA] focus:outline-none transition-colors appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-[#111111] text-[#F5F1EA]/50">
                        Select a time...
                      </option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="text-[#F5F1EA]">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.preferredTime && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Preferences */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-xs uppercase tracking-wider text-[#F5F1EA]/80 font-medium mb-2"
                >
                  Styling Notes / Preferences (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Interested in low-maintenance cut, shoulder length, or specific hair texture consultation..."
                  className="w-full bg-[#111111] border border-white/15 focus:border-[#C6A46A] rounded px-4 py-3 text-sm text-[#F5F1EA] placeholder-[#F5F1EA]/30 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-xs uppercase tracking-widest font-semibold text-[#111111] bg-[#C6A46A] hover:bg-[#D8BB89] active:scale-[0.99] transition-all rounded shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>
                    {whatsappEnabled
                      ? 'Submit & Prepare WhatsApp Enquiry'
                      : 'Submit Appointment Enquiry'}
                  </span>
                </button>

                <p className="text-[11px] text-center text-[#F5F1EA]/50 mt-3 font-light">
                  Appointments are confirmed only upon mutual schedule verification by salon staff.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
