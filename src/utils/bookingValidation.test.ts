import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateIndianMobile,
  validateBookingForm,
  resolveServicePrice,
} from './bookingValidation';

test('validateIndianMobile accepts standard 10-digit Indian numbers starting with 6-9', () => {
  const result = validateIndianMobile('9971220786');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '9971220786');
});

test('validateIndianMobile handles +91 prefix and spaces', () => {
  const result = validateIndianMobile('+91 99712 20786');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '9971220786');
});

test('validateIndianMobile handles leading zero', () => {
  const result = validateIndianMobile('09811223344');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '9811223344');
});

test('validateIndianMobile rejects numbers starting with invalid digits (e.g. 1-5)', () => {
  const result = validateIndianMobile('4971220786');
  assert.equal(result.isValid, false);
  assert.match(result.error || '', /start with 6, 7, 8, or 9/);
});

test('validateIndianMobile rejects short and long numbers', () => {
  const shortResult = validateIndianMobile('99712');
  assert.equal(shortResult.isValid, false);

  const longResult = validateIndianMobile('9971220786123');
  assert.equal(longResult.isValid, false);
});

test('validateBookingForm validates complete valid appointment data', () => {
  const validData = {
    fullName: 'Lakshay Sharma',
    phone: '+91 99712 20786',
    serviceId: 'haircut',
    preferredDate: '2026-11-20',
    preferredTime: '11:00 AM',
    notes: 'Consultation for restyle',
  };

  const result = validateBookingForm(validData);
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
  assert.equal(result.cleanedPhone, '9971220786');
});

test('validateBookingForm catches empty required fields', () => {
  const emptyData = {
    fullName: '',
    phone: '',
    serviceId: '',
    preferredDate: '',
    preferredTime: '',
  };

  const result = validateBookingForm(emptyData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.serviceId);
  assert.ok(result.errors.preferredDate);
  assert.ok(result.errors.preferredTime);
});

test('resolveServicePrice returns Contact for Pricing when pricingConfirmed is false', () => {
  const result = resolveServicePrice('Men: ₹400–₹600', false);
  assert.equal(result.text, 'Contact for Pricing');
  assert.equal(result.isConfirmed, false);
});

test('resolveServicePrice returns reference price when pricingConfirmed is true', () => {
  const result = resolveServicePrice('Men: ₹400–₹600', true);
  assert.equal(result.text, 'Men: ₹400–₹600');
  assert.equal(result.isConfirmed, true);
});
