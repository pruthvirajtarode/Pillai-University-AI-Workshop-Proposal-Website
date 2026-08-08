import jsPDF from 'jspdf';

const PILLAI_RED = [158, 27, 35] as const;
const DARK_NAVY = [17, 24, 39] as const;
const LIGHT_GRAY = [249, 250, 251] as const;
const MID_GRAY = [107, 114, 128] as const;
const ACCENT_GOLD = [244, 197, 66] as const;
const WHITE: readonly [number, number, number] = [255, 255, 255];

function addHeader(doc: jsPDF, subtitle: string) {
  // Red header band
  doc.setFillColor(...PILLAI_RED);
  doc.rect(0, 0, 210, 38, 'F');

  // University name
  doc.setFontSize(16);
  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold');
  doc.text('PILLAI UNIVERSITY', 14, 14);

  // Subtitle
  doc.setFontSize(9);
  doc.setTextColor(255, 220, 130);
  doc.setFont('helvetica', 'normal');
  doc.text('Dr. K. M. Vasudevan Pillai Campus | New Panvel, Navi Mumbai – 410206', 14, 21);

  // Doc type badge
  doc.setFontSize(8);
  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold');
  doc.text(subtitle.toUpperCase(), 14, 33);

  // Gold accent line
  doc.setFillColor(...ACCENT_GOLD);
  doc.rect(0, 38, 210, 2, 'F');
}

function addFooter(doc: jsPDF, pageNum: number, totalPages: number) {
  const pageH = doc.internal.pageSize.height;
  doc.setFillColor(240, 240, 240);
  doc.rect(0, pageH - 14, 210, 14, 'F');

  doc.setFontSize(8);
  doc.setTextColor(...MID_GRAY);
  doc.setFont('helvetica', 'normal');
  doc.text('Pillai University — AI Foundation & Generative AI Workshop Proposal', 14, pageH - 5);
  doc.text(`Page ${pageNum} of ${totalPages}`, 196, pageH - 5, { align: 'right' });
}

function addSectionHeading(doc: jsPDF, text: string, y: number): number {
  doc.setFillColor(...PILLAI_RED);
  doc.rect(14, y, 4, 8, 'F');
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...DARK_NAVY);
  doc.text(text, 21, y + 6.5);
  return y + 16;
}

function addBodyText(doc: jsPDF, text: string, x: number, y: number, maxW = 182): number {
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(55, 65, 81);
  const lines = doc.splitTextToSize(text, maxW) as string[];
  doc.text(lines, x, y);
  return y + lines.length * 5.5;
}

function addBullet(doc: jsPDF, text: string, x: number, y: number, maxW = 170): number {
  doc.setFillColor(...PILLAI_RED);
  doc.circle(x + 1.5, y - 1.5, 1.2, 'F');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(55, 65, 81);
  const lines = doc.splitTextToSize(text, maxW) as string[];
  doc.text(lines, x + 5, y);
  return y + lines.length * 5.5 + 1;
}

function addInfoBox(doc: jsPDF, label: string, value: string, x: number, y: number, w: number, h: number) {
  doc.setFillColor(...LIGHT_GRAY);
  doc.roundedRect(x, y, w, h, 3, 3, 'F');
  doc.setFillColor(...PILLAI_RED);
  doc.roundedRect(x, y, w, 1.5, 0.5, 0.5, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...PILLAI_RED);
  doc.text(label.toUpperCase(), x + 4, y + 7);

  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...DARK_NAVY);
  doc.text(value, x + 4, y + 16);
}

/* ═══════════════════════════════════════════════════════
   PROPOSAL PDF
═══════════════════════════════════════════════════════ */
export function generateProposalPDF() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  // PAGE 1 ─────────────────────────────────────────────
  addHeader(doc, 'Workshop Proposal Report');

  let y = 52;
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...DARK_NAVY);
  doc.text('AI Foundation &', 14, y);
  doc.setTextColor(...PILLAI_RED);
  doc.text('Generative AI Workshop', 14, y + 10);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...MID_GRAY);
  doc.text('"From Understanding AI to Using AI — A Practical One-Day Student Workshop"', 14, y + 22);

  y += 36;

  // Info boxes
  const boxes = [
    { label: 'Format', value: 'One Day' },
    { label: 'Duration', value: '7–8 Hours' },
    { label: 'Level', value: 'Beginner' },
    { label: 'Style', value: 'Hands-On' },
  ];
  boxes.forEach((b, i) => addInfoBox(doc, b.label, b.value, 14 + i * 48, y, 44, 24));
  y += 38;

  // Section: Overview
  y = addSectionHeading(doc, '1. Workshop Overview', y);
  y = addBodyText(doc, 'This proposal presents a structured one-day AI literacy and Generative AI workshop for Pillai University students across all academic disciplines — Engineering, Business, Architecture & Design, and Computer Applications.', 14, y);
  y += 4;
  y = addBodyText(doc, 'The workshop is designed from the ground up for students with no prior AI or technical background. It progresses from foundational AI concepts through to practical, hands-on Generative AI skills that students can apply immediately in their academic and professional lives.', 14, y);
  y += 8;

  // Section: Objective
  y = addSectionHeading(doc, '2. Objectives', y);
  const objectives = [
    'Build foundational AI literacy across all student disciplines.',
    'Introduce Generative AI concepts and tools in a practical, accessible way.',
    'Teach structured prompting techniques for real student tasks.',
    'Demonstrate AI applications specific to each academic school.',
    'Instil responsible, ethical, and critical AI usage habits.',
    'Provide every student with a reusable AI Starter Kit.',
  ];
  objectives.forEach(obj => { y = addBullet(doc, obj, 14, y); });
  y += 6;

  // Section: Target Audience
  y = addSectionHeading(doc, '3. Target Audience', y);
  y = addBodyText(doc, 'All Pillai University students, including B.Tech, BBA, BCA, BCA AI, B.Des, B.Arch and other undergraduate/postgraduate students from:', 14, y);
  y += 3;
  ['School of Engineering', 'School of Business', 'School of Architecture & Design', 'School of Computer Applications'].forEach(s => { y = addBullet(doc, s, 14, y); });

  // PAGE 2 ─────────────────────────────────────────────
  doc.addPage();
  addHeader(doc, 'Workshop Proposal Report');
  y = 52;

  y = addSectionHeading(doc, '4. Learning Philosophy', y);
  y = addBodyText(doc, '"AI for Every Student" — not just for Computer Science students. This workshop is intentionally interdisciplinary. Every example, exercise, and workflow is adapted to be relevant across Engineering, Business, Architecture, and Computer Applications.', 14, y);
  y += 6;

  // Core Learning Journey
  y = addSectionHeading(doc, '5. Core Learning Journey', y);
  const journey = [
    'AI Basics → How AI Works → Machine Learning Concept',
    'Generative AI → Prompting → AI Tools',
    'Student Use Cases → Academic Use → Career Use',
    'Responsible AI → Hands-On Mini Challenge',
  ];
  journey.forEach(j => { y = addBullet(doc, j, 14, y); });
  y += 6;

  // Student Outcomes
  y = addSectionHeading(doc, '6. Student Outcomes', y);
  y = addBodyText(doc, 'After completing the workshop, every student will be able to:', 14, y);
  y += 3;
  const outcomes = [
    'Understand what AI is and how it works at a conceptual level.',
    'Explain AI vs Machine Learning vs Generative AI.',
    'Write structured, effective prompts for real tasks.',
    'Use AI tools (ChatGPT, Gemini, Claude, etc.) confidently.',
    'Apply AI to studying, research, presentations, and career tasks.',
    'Identify AI limitations, hallucinations, and biases.',
    'Use AI responsibly within academic integrity guidelines.',
    'Build a personal AI-assisted workflow for their discipline.',
  ];
  outcomes.forEach(o => { y = addBullet(doc, o, 14, y); });
  y += 6;

  y = addSectionHeading(doc, '7. Why Pillai University', y);
  const uniStats = [
    '50+ years of academic legacy',
    '40+ programs across disciplines',
    '95% placement record',
    '300+ active recruiters',
    '50+ industry partnerships',
    '100+ startups incubated',
    '50+ patents filed',
    '10 Crore+ research & consultancy grants',
  ];
  uniStats.forEach(s => { y = addBullet(doc, s, 14, y); });
  y += 6;
  y = addBodyText(doc, 'Pillai University already has a strong academic and innovation ecosystem. This workshop gives students the AI literacy to use emerging AI tools intelligently, creatively and responsibly — regardless of their academic discipline.', 14, y);

  // Add pages 3
  doc.addPage();
  addHeader(doc, 'Workshop Proposal Report');
  y = 52;

  y = addSectionHeading(doc, '8. One-Day Agenda (Approx. 7–8 Hours)', y);

  const agenda = [
    ['09:30 – 10:00', 'Welcome & AI Icebreaker', '"What do you already know about AI?"'],
    ['10:00 – 10:45', 'Module 1: AI Fundamentals', 'What is AI? Where do we see it? What can it do?'],
    ['10:45 – 11:30', 'Module 2: How AI Works', 'AI vs ML vs Deep Learning vs Generative AI'],
    ['11:30 – 11:45', 'Break', ''],
    ['11:45 – 12:30', 'Module 3: Generative AI', 'LLMs, Text, Image, Code generation'],
    ['12:30 – 01:15', 'Module 4: Prompt Engineering', 'Context, Role, Constraints, Output Format'],
    ['01:15 – 02:00', 'Lunch Break', ''],
    ['02:00 – 03:00', 'Module 5: AI for Students', 'Study, Research, Presentations, Assignments'],
    ['03:00 – 04:00', 'Module 6: AI Across Disciplines', 'Engineering, Business, Design, CS'],
    ['04:00 – 04:15', 'Break', ''],
    ['04:15 – 05:00', 'Module 7: AI Tools Demo', 'ChatGPT, Gemini, Claude, Copilot, NotebookLM…'],
    ['05:00 – 05:45', 'Module 8: Hands-On Challenge', 'Students solve a practical domain problem'],
    ['05:45 – 06:15', 'Responsible AI', 'Ethics, Verification, Academic Integrity'],
    ['06:15 – 06:30', 'Q&A and Takeaways', 'Student Starter Kit distributed'],
  ];

  agenda.forEach(([time, title, desc]) => {
    const isBreak = title.includes('Break') || title.includes('Lunch');
    if (isBreak) {
      doc.setFillColor(245, 245, 245);
    } else {
      doc.setFillColor(...LIGHT_GRAY);
    }
    doc.roundedRect(14, y - 4, 182, 14, 2, 2, 'F');

    if (!isBreak) {
      doc.setFillColor(...PILLAI_RED);
      doc.roundedRect(14, y - 4, 3, 14, 1, 1, 'F');
    }

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...PILLAI_RED);
    doc.text(time, 19, y + 2.5);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...DARK_NAVY);
    doc.text(title, 72, y + 2.5);

    if (desc) {
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...MID_GRAY);
      const shortDesc = desc.length > 45 ? desc.substring(0, 42) + '...' : desc;
      doc.text(shortDesc, 72, y + 8);
    }

    y += 17;
  });

  y += 6;
  y = addSectionHeading(doc, '9. Student Takeaway Kit', y);
  const kit = [
    'AI Beginner Cheat Sheet',
    'Prompt Engineering Cheat Sheet',
    '50+ Student Prompts (Study, Research, Presentations, Career)',
    'Responsible AI Checklist',
    'AI Tools Reference Guide',
    'Mini Project / Challenge Guide',
    'Certificate of Participation',
  ];
  kit.forEach(k => { y = addBullet(doc, k, 14, y); });

  // Contact info on last page
  y += 10;
  doc.setFillColor(...PILLAI_RED);
  doc.roundedRect(14, y, 182, 32, 4, 4, 'F');
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...WHITE);
  doc.text('Contact Pillai University', 14 + 91, y + 8, { align: 'center' });
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('+91 881 882 8837  |  info@pillai.edu.in  |  pillai.edu.in', 14 + 91, y + 17, { align: 'center' });
  doc.text('Plot No. 10, Sector 16, New Panvel, Navi Mumbai – 410206', 14 + 91, y + 24, { align: 'center' });

  // Footers on all pages
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    addFooter(doc, p, totalPages);
  }

  doc.save('Pillai_University_AI_Workshop_Proposal.pdf');
}

/* ═══════════════════════════════════════════════════════
   PITCH PDF (PERSONALIZED FOR MR. GOPALKRISHNAN)
═══════════════════════════════════════════════════════ */
export function generatePitchPDF() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  addHeader(doc, 'Executive Pitch Report');

  let y = 52;
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...DARK_NAVY);
  doc.text('AI Workshop Pitch', 14, y);
  
  doc.setFontSize(13);
  doc.setTextColor(...PILLAI_RED);
  doc.text('Prepared Exclusively For: Mr. Gopalkrishnan & Leadership', 14, y + 10);
  
  doc.setFontSize(11);
  doc.setTextColor(...MID_GRAY);
  doc.setFont('helvetica', 'italic');
  doc.text('A Vision for Pillai University, Navi Mumbai', 14, y + 16);
  y += 32;

  // Personalized Letter/Intro
  doc.setFillColor(...LIGHT_GRAY);
  doc.roundedRect(14, y, 182, 38, 4, 4, 'F');
  doc.setFillColor(...PILLAI_RED);
  doc.roundedRect(14, y, 3, 38, 4, 4, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...DARK_NAVY);
  doc.text('Dear Mr. Gopalkrishnan,', 22, y + 8);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(55, 65, 81);
  const letterText = "With 12,000 to 15,000 students across Pillai University's Navi Mumbai campus, the scale of opportunity is massive. If we can equip your students with foundational AI literacy today, we aren't just teaching them a new software tool—we are fundamentally upgrading the employability, productivity, and innovative capacity of the entire student body.";
  const letterLines = doc.splitTextToSize(letterText, 168) as string[];
  doc.text(letterLines, 22, y + 14);
  y += 48;

  y = addSectionHeading(doc, 'The Opportunity at Scale', y);
  y = addBodyText(doc, 'Imagine the impact across 15,000 students:', 14, y);
  y += 4;
  [
    'Engineering: Faster debugging, automated documentation, IoT data synthesis.',
    'Business: Instant financial modeling, competitor analysis, and pitch generation.',
    'Architecture: AI-assisted moodboarding, structural concept visualization.',
    'Campus-wide: Students saving 5+ hours weekly on research and drafting.',
  ].forEach(item => {
    y = addBullet(doc, item, 14, y);
  });
  y += 6;

  y = addSectionHeading(doc, 'The Proposed Solution', y);
  y = addBodyText(doc, 'A highly focused, one-day "AI Foundation & Generative AI Workshop" designed for Pillai University. It is beginner-friendly, interdisciplinary, and 100% hands-on. Students leave with real, actionable skills.', 14, y);
  y += 6;

  y = addSectionHeading(doc, 'Workshop Format', y);
  [
    ['Duration', '7–8 Hours (One Full Day)'],
    ['Audience', 'All 15,000+ Students (Scalable Batch-wise)'],
    ['Approach', 'Lecture + Live Campus-Specific Demo + Hands-On Activities'],
    ['Deliverable', 'Pillai AI Starter Kit for every student'],
  ].forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...DARK_NAVY);
    doc.text(`${label}:`, 17, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(55, 65, 81);
    doc.text(value, 52, y);
    y += 7;
  });
  y += 4;

  y = addSectionHeading(doc, 'What Makes This Different?', y);
  [
    'Tailored to Navi Mumbai: Relevant local and academic examples.',
    'Interdisciplinary: Not just for CS students; designed for every school.',
    'Ethical Framework: Embedding academic integrity and data privacy.',
    'Immediate ROI: Students can use these skills the very next day.',
  ].forEach(item => {
    y = addBullet(doc, item, 14, y);
  });
  y += 12;

  doc.setFillColor(...PILLAI_RED);
  doc.roundedRect(14, y, 182, 30, 4, 4, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...WHITE);
  doc.text('"Empowering Pillai University\'s 15,000 minds with AI."', 14 + 91, y + 12, { align: 'center' });
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Let\'s build the future together.', 14 + 91, y + 20, { align: 'center' });

  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    addFooter(doc, p, totalPages);
  }

  doc.save('Pillai_University_AI_Pitch_For_Mr_Gopalkrishnan.pdf');
}

/* ═══════════════════════════════════════════════════════
   CURRICULUM PDF
═══════════════════════════════════════════════════════ */
export function generateCurriculumPDF() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  addHeader(doc, 'Workshop Agenda & Curriculum');

  let y = 52;
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...DARK_NAVY);
  doc.text('Workshop Curriculum', 14, y);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...MID_GRAY);
  doc.text('Detailed module breakdown — Approx. 7–8 hours, one day', 14, y + 9);
  y += 24;

  const modules = [
    { id: '01', title: 'AI Fundamentals', dur: '45 min', topics: ['What is AI?', 'History of AI', 'Everyday AI examples', 'AI capabilities and limitations'] },
    { id: '02', title: 'How AI Works', dur: '45 min', topics: ['Data & patterns', 'AI vs ML vs Deep Learning vs Generative AI', 'Simple visual diagrams'] },
    { id: '03', title: 'Generative AI', dur: '45 min', topics: ['LLMs and chatbots', 'Text, image, code generation', 'Multimodal AI'] },
    { id: '04', title: 'Prompt Engineering', dur: '45 min', topics: ['Prompt anatomy', 'Weak vs strong prompts', 'Role, context, constraints, format'] },
    { id: '05', title: 'AI for Students', dur: '60 min', topics: ['Summarise chapters', 'Create flashcards & quizzes', 'Study plans', 'Research & presentations'] },
    { id: '06', title: 'AI Across Disciplines', dur: '60 min', topics: ['Engineering workflows', 'Business workflows', 'Architecture & Design workflows', 'Computer Applications workflows'] },
    { id: '07', title: 'AI Tools Demonstration', dur: '45 min', topics: ['ChatGPT, Gemini, Claude, Copilot', 'NotebookLM, Perplexity, Gamma, Canva AI', 'How to evaluate AI tools'] },
    { id: '08', title: 'Hands-On AI Challenge', dur: '45 min', topics: ['Domain-specific problem solving', 'AI Detective, Prompt Makeover, Fact Check AI', 'Career Copilot, Study Smarter'] },
    { id: '09', title: 'Responsible AI', dur: '30 min', topics: ['Hallucinations & verification', 'Privacy & copyright', 'Academic integrity', 'Human judgment in the loop'] },
  ];

  modules.forEach(mod => {
    if (y > 245) {
      doc.addPage();
      addHeader(doc, 'Workshop Curriculum');
      y = 52;
    }

    doc.setFillColor(...LIGHT_GRAY);
    doc.roundedRect(14, y, 182, 30, 3, 3, 'F');
    doc.setFillColor(...PILLAI_RED);
    doc.roundedRect(14, y, 18, 30, 3, 3, 'F');

    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...WHITE);
    doc.text(mod.id, 23, y + 13, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...DARK_NAVY);
    doc.text(`Module ${mod.id}: ${mod.title}`, 38, y + 7);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...PILLAI_RED);
    doc.text(`Duration: ${mod.dur}`, 38, y + 14);

    doc.setTextColor(75, 85, 99);
    doc.text(mod.topics.join('  ·  '), 38, y + 21, { maxWidth: 155 });

    y += 36;
  });

  y += 6;
  if (y > 220) { doc.addPage(); addHeader(doc, 'Workshop Curriculum'); y = 52; }

  y = addSectionHeading(doc, 'Student Takeaway Kit', y);
  ['AI Beginner Cheat Sheet', 'Prompt Engineering Cheat Sheet', '50+ Student Prompts (Study, Research, Presentations, Career, Interview)', 'Discipline-Specific Prompt Guide', 'Responsible AI Checklist', 'AI Tools Reference Guide', 'Mini Project / Challenge Guide', 'Certificate of Participation'].forEach(item => {
    y = addBullet(doc, item, 14, y);
  });

  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    addFooter(doc, p, totalPages);
  }

  doc.save('Pillai_University_AI_Workshop_Curriculum.pdf');
}
