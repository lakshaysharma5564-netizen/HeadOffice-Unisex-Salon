/**
 * Pure validation and business logic utilities for HeadOffice Unisex Salon booking flows.
 * Decoupled from UI components for high-reliability unit testing.
 */

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  cleanedPhone?: string;
}

/**
 * Validates an Indian mobile number.
 * Accepts formats:
 * - 10 digits starting with 6, 7, 8, 9 (e.g. 9971220786)
 * - +91 followed by 10 digits (e.g. +91 99712 20786)
 * - 0 followed by 10 digits (e.g. 09971220786)
 */
export function validateIndianMobile(rawInput: string): { isValid: boolean; normalized: string; error?: string } {
  if (!rawInput || typeof rawInput !== 'string') {
    return { isValid: false, normalized: '', error: 'Mobile number is required' };
  }

  // Remove spaces, hyphens, plus, parenthesis
  const cleaned = rawInput.replace(/[\s\-\(\)\+]/g, '');

  let tenDigits = cleaned;
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    tenDigits = cleaned.slice(2);
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    tenDigits = cleaned.slice(1);
  }

  if (!/^\d+$/.test(tenDigits)) {
    return { isValid: false, normalized: '', error: 'Mobile number must contain digits only' };
  }

  if (tenDigits.length !== 10) {
    return {
      isValid: false,
      normalized: '',
      error: `Please enter a valid 10-digit mobile number (entered ${tenDigits.length} digits)`
    };
  }

  // Indian mobile numbers start with 6, 7, 8, or 9
  if (!/^[6-9]/.test(tenDigits)) {
    return {
      isValid: false,
      normalized: '',
      error: 'Indian mobile numbers must start with 6, 7, 8, or 9'
    };
  }

  return { isValid: true, normalized: tenDigits };
}

/**
 * Validates appointment booking form fields
 */
export function validateBookingForm(data: BookingFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Full Name
  const trimmedName = (data.fullName || '').trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter your full name';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  } else if (!/^[a-zA-Z\s\.\'\-]+$/.test(trimmedName)) {
    errors.fullName = 'Name contains invalid characters';
  }

  // Mobile
  const phoneValidation = validateIndianMobile(data.phone || '');
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error || 'Please enter a valid Indian mobile number';
  }

  // Service
  if (!data.serviceId || !data.serviceId.trim()) {
    errors.serviceId = 'Please select a service';
  }

  // Date
  if (!data.preferredDate || !data.preferredDate.trim()) {
    errors.preferredDate = 'Please select your preferred date';
  } else {
    const selectedDate = new Date(data.preferredDate + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime())) {
      errors.preferredDate = 'Invalid date format';
    } else if (selectedDate < today) {
      errors.preferredDate = 'Preferred date cannot be in the past';
    }
  }

  // Time
  if (!data.preferredTime || !data.preferredTime.trim()) {
    errors.preferredTime = 'Please select a preferred appointment time';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    cleanedPhone: phoneValidation.isValid ? phoneValidation.normalized : undefined,
  };
}

/**
 * Formats pricing display based on owner confirmation setting
 */
export function resolveServicePrice(
  referencePriceText: string | undefined,
  pricingConfirmed: boolean
): { text: string; isConfirmed: boolean } {
  if (pricingConfirmed && referencePriceText) {
    return {
      text: referencePriceText,
      isConfirmed: true,
    };
  }

  return {
    text: 'Contact for Pricing',
    isConfirmed: false,
  };
}
