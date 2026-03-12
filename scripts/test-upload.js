import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.HYGRAPH_TOKEN;
const contentApi = process.env.HYGRAPH_CONTENT_API;

const apiUploadUrl = `${contentApi}/upload`;
console.log('Upload URL:', apiUploadUrl);

async function uploadFromUrl(imageUrl) {
  const form = new URLSearchParams();
  form.append('url', imageUrl);

  const res = await fetch(apiUploadUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: form
  });

  if (res.ok) {
    const data = await res.json();
    console.log('Upload Success:', data.id);
  } else {
    const error = await res.text();
    console.error('Upload Failed:', res.status, error);
  }
}

uploadFromUrl('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80').catch(console.error);
