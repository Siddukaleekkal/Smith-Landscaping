import fs from 'fs';
import path from 'path';

const services = [
  { id: 'design', title: 'Landscape Design', desc: 'Forward-thinking, constructible design.' },
  { id: 'development', title: 'Landscape Development', desc: 'Seamless project delivery by technically savvy contractors.' },
  { id: 'maintenance', title: 'Landscape Maintenance', desc: 'Consistent service delivery and proactive solutions.' },
  { id: 'snow-ice', title: 'Snow & Ice', desc: 'Professional snow removal and ice management.' },
  { id: 'water-management', title: 'Water Management', desc: 'Smart irrigation and water conservation.' }
];

const markets = [
  { id: 'commercial', title: 'Commercial Real Estate', desc: 'Landscaping for commercial properties.' },
  { id: 'healthcare', title: 'Healthcare Facilities', desc: 'Healing gardens and pristine grounds.' },
  { id: 'hospitality', title: 'Hospitality', desc: 'Creating memorable guest experiences.' }
];

fs.mkdirSync('./src/content/services', { recursive: true });
fs.mkdirSync('./src/content/markets', { recursive: true });

services.forEach(s => {
  fs.writeFileSync(`./src/content/services/${s.id}.md`, `---\ntitle: ${s.title}\ndescription: ${s.desc}\nheroImage: https://images.unsplash.com/photo-1558904541-efa843a96f0f?w=1200&q=80\n---\n\n## Overview\n\n${s.desc}\n\nWe provide industry-leading ${s.title.toLowerCase()} services to ensure your property always looks its best. Our team of experts works closely with you to deliver results that exceed expectations.`);
});

markets.forEach(m => {
  fs.writeFileSync(`./src/content/markets/${m.id}.md`, `---\ntitle: ${m.title}\ndescription: ${m.desc}\nheroImage: https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&q=80\n---\n\n## Overview\n\n${m.desc}\n\nWe understand the unique challenges of the ${m.title.toLowerCase()} sector. Our specialized teams are equipped to handle any landscaping need.`);
});

console.log("Content generated successfully.");
