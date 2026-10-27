const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdeaaeka';

export async function submitLeadForm(
  formType: string,
  fields: Record<string, string>
): Promise<void> {
  const payload = new FormData();
  payload.set('form_type', formType);
  payload.set('_subject', `KG Realty Group: ${formType}`);

  Object.entries(fields).forEach(([field, value]) => {
    payload.set(field, value);
  });

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: payload,
  });

  if (!response.ok) {
    throw new Error('We could not send your message. Please try again.');
  }
}