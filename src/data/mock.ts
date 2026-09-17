import type {
  AbilityId,
  AgeBand,
  CenterId,
  CpTypeId,
  EvidenceLevel,
  GoalId,
} from '../types'

export const HELPLINE = '0800 444 627'
export const HELPLINE_TEL = '0800444627'

export const centers: { id: CenterId; en: string; ur: string }[] = [
  { id: 'karachi', en: 'Karachi Center', ur: 'کراچی سینٹر' },
  { id: 'lahore', en: 'Lahore Center', ur: 'لاہور سینٹر' },
  { id: 'badin', en: 'Badin Center', ur: 'بدین سینٹر' },
  { id: 'gwadar', en: 'Gwadar Center', ur: 'گوادر سینٹر' },
  { id: 'muzaffargarh', en: 'Muzaffargarh Center', ur: 'مظفرگڑھ سینٹر' },
]

export const cpTypes: {
  id: CpTypeId
  en: string
  ur: string
  descEn: string
  descUr: string
}[] = [
  {
    id: 'spastic',
    en: 'Spastic',
    ur: 'اسپسٹک',
    descEn: 'Stiff muscles. Movement can feel tight or hard to start.',
    descUr: 'پٹھے اکڑ جاتے ہیں۔ حرکت سخت یا شروع کرنا مشکل ہو سکتا ہے۔',
  },
  {
    id: 'dyskinetic',
    en: 'Dyskinetic',
    ur: 'ڈسکائنیٹک',
    descEn: 'Unwanted or twisting movements. Tone can change through the day.',
    descUr: 'بے اختیار یا مڑتی حرکتیں۔ پٹھوں کی سختی دن بھر بدل سکتی ہے۔',
  },
  {
    id: 'ataxic',
    en: 'Ataxic',
    ur: 'اٹیکسک',
    descEn: 'Shaky or unsteady movement. Balance and aiming can be hard.',
    descUr: 'کانپتی یا غیر مستحکم حرکت۔ توازن اور نشانہ لگانا مشکل ہو سکتا ہے۔',
  },
  {
    id: 'mixed',
    en: 'Mixed',
    ur: 'مخلوط',
    descEn: 'More than one pattern together — common, and still treatable.',
    descUr: 'ایک سے زیادہ قسمیں ساتھ — عام ہے، اور علاج ممکن ہے۔',
  },
]

export const specialties = [
  { id: 'ortho', en: 'Orthopaedics', ur: 'ہڈی و جوڑ' },
  { id: 'neuro', en: 'Neuromuscular', ur: 'اعصاب و پٹھے' },
  { id: 'physio', en: 'Physiotherapy', ur: 'فزیو تھراپی' },
  { id: 'ot', en: 'Occupational therapy', ur: 'پیشہ ورانہ تھراپی' },
  { id: 'nutrition', en: 'Nutrition', ur: 'غذائیت' },
  { id: 'orthotics', en: 'Orthotics', ur: 'آرتھوٹکس' },
  { id: 'psych', en: 'Psychosocial support', ur: 'نفسیاتی سہارا' },
] as const

type SpecialtyId = (typeof specialties)[number]['id']

export const doctors: {
  id: string
  name: string
  specialty: SpecialtyId
  center: CenterId
}[] = [
  {
    id: 'd1',
    name: 'Dr. Ayesha Khan',
    specialty: 'ortho',
    center: 'karachi' as CenterId,
  },
  {
    id: 'd2',
    name: 'Dr. Imran Malik',
    specialty: 'neuro',
    center: 'lahore' as CenterId,
  },
  {
    id: 'd3',
    name: 'Dr. Sana Qureshi',
    specialty: 'physio',
    center: 'karachi' as CenterId,
  },
  {
    id: 'd4',
    name: 'Dr. Bilal Hussain',
    specialty: 'ot',
    center: 'badin' as CenterId,
  },
  {
    id: 'd5',
    name: 'Dr. Fatima Noor',
    specialty: 'nutrition',
    center: 'gwadar' as CenterId,
  },
  {
    id: 'd6',
    name: 'Dr. Omar Sheikh',
    specialty: 'orthotics',
    center: 'muzaffargarh' as CenterId,
  },
  {
    id: 'd7',
    name: 'Dr. Hina Raza',
    specialty: 'psych',
    center: 'lahore' as CenterId,
  },
  {
    id: 'd8',
    name: 'Dr. Yusuf Ali',
    specialty: 'physio',
    center: 'badin' as CenterId,
  },
]

export const ageBands: { id: AgeBand; en: string; ur: string }[] = [
  { id: '0-2', en: '0–2 years', ur: '0–2 سال' },
  { id: '3-5', en: '3–5 years', ur: '3–5 سال' },
  { id: '6-12', en: '6–12 years', ur: '6–12 سال' },
  { id: '13-17', en: '13–17 years', ur: '13–17 سال' },
]

export const goals: { id: GoalId; en: string; ur: string }[] = [
  { id: 'mobility', en: 'Walking & movement', ur: 'چلنا اور حرکت' },
  { id: 'communication', en: 'Talking & communication', ur: 'بات چیت' },
  { id: 'self-care', en: 'Daily self-care', ur: 'روزمرہ دیکھ بھال' },
  { id: 'comfort', en: 'Comfort & less pain', ur: 'آرام اور درد میں کمی' },
  { id: 'school', en: 'School & play', ur: 'سکول اور کھیل' },
]

export const abilities: { id: AbilityId; en: string; ur: string }[] = [
  { id: 'sitting', en: 'Sits with help', ur: 'مدد سے بیٹھنا' },
  { id: 'standing', en: 'Stands with support', ur: 'سہارے سے کھڑا ہونا' },
  { id: 'walking-aid', en: 'Walks with an aid', ur: 'آلہ کے ساتھ چلنا' },
  { id: 'walking', en: 'Walks on their own', ur: 'خود چلنا' },
]

export type Treatment = {
  id: string
  en: string
  ur: string
  summaryEn: string
  summaryUr: string
  detailEn: string
  detailUr: string
  evidence: EvidenceLevel
  evidenceNoteEn: string
  evidenceNoteUr: string
  ages: AgeBand[]
  goals: GoalId[]
  abilities: AbilityId[]
  cpTypes: CpTypeId[] | 'all'
  team: string
  videoLabel: string
}

export const treatments: Treatment[] = [
  {
    id: 'task-training',
    en: 'Practice of real-life movements',
    ur: 'حقیقی حرکت کی مشق',
    summaryEn: 'Repeat useful actions like sitting, reaching, or stepping — a little every day.',
    summaryUr: 'بیٹھنا، ہاتھ بڑھانا یا قدم اٹھانا روزانہ تھوڑی مشق سے سیکھیں۔',
    detailEn:
      'A physiotherapist or occupational therapist helps your child practise the exact skill they need (for example standing up from a chair). Short, frequent practice at home matters more than long rare sessions.',
    detailUr:
      'فزیو یا پیشہ ورانہ معالج بچے کو وہی مہارت سکھاتے ہیں جو روزمرہ چاہیے ہو۔ گھر پر چھوٹی روزانہ مشق لمبی نایاب نشست سے زیادہ کام آتی ہے۔',
    evidence: 'green',
    evidenceNoteEn: 'Strong research support',
    evidenceNoteUr: 'مضبوط تحقیق کی تائید',
    ages: ['0-2', '3-5', '6-12', '13-17'],
    goals: ['mobility', 'self-care', 'school'],
    abilities: ['sitting', 'standing', 'walking-aid', 'walking'],
    cpTypes: 'all',
    team: 'physio',
    videoLabel: 'Home practice example (placeholder video)',
  },
  {
    id: 'cimt',
    en: 'Using the weaker arm more (CIMT)',
    ur: 'کمزور بازو زیادہ استعمال (CIMT)',
    summaryEn: 'Gently encourages the child to use the less-used hand during play.',
    summaryUr: 'کھیل کے دوران کم استعمال ہونے والا ہاتھ آہستہ استعمال کروائیں۔',
    detailEn:
      'Constraint-induced movement therapy is used when one side is weaker. Play is set up so the child wants to use that hand. Only under therapist guidance. This is educational information, not a prescription.',
    detailUr:
      'جب ایک پہلو کمزور ہو تو کھیل اس طرح ترتیب دیا جاتا ہے کہ بچہ وہی ہاتھ استعمال کرے۔ صرف معالج کی رہنمائی میں۔',
    evidence: 'green',
    evidenceNoteEn: 'Strong research support',
    evidenceNoteUr: 'مضبوط تحقیق کی تائید',
    ages: ['3-5', '6-12'],
    goals: ['self-care', 'school'],
    abilities: ['sitting', 'standing', 'walking-aid', 'walking'],
    cpTypes: ['spastic', 'mixed'],
    team: 'ot',
    videoLabel: 'Play-based arm practice (placeholder video)',
  },
  {
    id: 'botox',
    en: 'Injections for tight muscles',
    ur: 'اکڑے پٹھوں کے انجیکشن',
    summaryEn: 'A doctor may use medicine to ease tightness so stretching and braces work better.',
    summaryUr: 'ڈاکٹر پٹھوں کی اکڑ کم کرنے کی دوا دے سکتے ہیں تاکہ ورزش اور بریس بہتر چلیں۔',
    detailEn:
      'Botulinum toxin is sometimes used for spasticity in selected muscles. It is not a cure. It is paired with physiotherapy and orthotics. Discuss risks and goals with the IHHN neuromuscular / orthopaedic team.',
    detailUr:
      'کچھ پٹھوں کی اکڑ کے لیے یہ دوا استعمال ہو سکتی ہے۔ یہ علاج مکمل علاج نہیں۔ فزیو اور بریس کے ساتھ جوڑا جاتا ہے۔',
    evidence: 'green',
    evidenceNoteEn: 'Strong research support for selected goals',
    evidenceNoteUr: 'منتخب اہداف کے لیے مضبوط تائید',
    ages: ['3-5', '6-12', '13-17'],
    goals: ['mobility', 'comfort', 'self-care'],
    abilities: ['sitting', 'standing', 'walking-aid', 'walking'],
    cpTypes: ['spastic', 'mixed'],
    team: 'neuro',
    videoLabel: 'What clinic day looks like (placeholder video)',
  },
  {
    id: 'afo',
    en: 'Ankle-foot braces (AFOs)',
    ur: 'ٹخنے کے بریس (AFO)',
    summaryEn: 'Plastic braces that help the foot land more safely and make standing easier.',
    summaryUr: 'پلاسٹک بریس پاؤں کو محفوظ رکھتے ہیں اور کھڑے ہونے میں مدد دیتے ہیں۔',
    detailEn:
      'AFOs are made by the orthotics team. Wear time is built up slowly. Check skin every day.',
    detailUr:
      'AFO آرتھوٹکس ٹیم بناتی ہے۔ پہننے کا وقت آہستہ بڑھائیں۔ جلد روز چیک کریں۔',
    evidence: 'green',
    evidenceNoteEn: 'Strong research support',
    evidenceNoteUr: 'مضبوط تحقیق کی تائید',
    ages: ['0-2', '3-5', '6-12', '13-17'],
    goals: ['mobility', 'school'],
    abilities: ['standing', 'walking-aid', 'walking'],
    cpTypes: ['spastic', 'ataxic', 'mixed'],
    team: 'orthotics',
    videoLabel: 'Putting on an AFO (placeholder video)',
  },
  {
    id: 'speech',
    en: 'Speech & communication support',
    ur: 'گفتگو اور بات چیت کی مدد',
    summaryEn: 'Helps children share needs with words, signs, pictures, or a device.',
    summaryUr: 'الفاظ، اشارے، تصاویر یا آلے سے ضرورت بتانا سکھاتا ہے۔',
    detailEn:
      'Communication therapy is useful even if a child does not speak yet. Picture boards and simple signs can reduce frustration.',
    detailUr:
      'اگر بچہ ابھی بولتا نہیں تب بھی بات چیت کی تھراپی مفید ہے۔ تصویر بورڈ اور آسان اشارے ناراضی کم کرتے ہیں۔',
    evidence: 'amber',
    evidenceNoteEn: 'Promising — depends on the child',
    evidenceNoteUr: 'امید افزا — بچے پر منحصر',
    ages: ['0-2', '3-5', '6-12', '13-17'],
    goals: ['communication', 'school', 'self-care'],
    abilities: ['sitting', 'standing', 'walking-aid', 'walking'],
    cpTypes: 'all',
    team: 'ot',
    videoLabel: 'Picture board at home (placeholder video)',
  },
  {
    id: 'nutrition',
    en: 'Feeding & nutrition care',
    ur: 'خوراک اور غذائیت',
    summaryEn: 'Support for chewing, drinking, growth, and safe swallowing.',
    summaryUr: 'چبانے، پینے، نشوونما اور محفوظ نگلنے کی مدد۔',
    detailEn:
      'Many children with CP need extra time, seating support, or high-energy foods. The nutrition team watches weight and choking risk. This is education, not personal medical advice.',
    detailUr:
      'بہت سے بچوں کو زیادہ وقت، بیٹھنے کا سہارا یا توانائی والی خوراک چاہیے۔ وزن اور دم گھٹنے کا خطرہ ٹیم دیکھتی ہے۔',
    evidence: 'green',
    evidenceNoteEn: 'Strong research support',
    evidenceNoteUr: 'مضبوط تحقیق کی تائید',
    ages: ['0-2', '3-5', '6-12', '13-17'],
    goals: ['comfort', 'self-care'],
    abilities: ['sitting', 'standing', 'walking-aid', 'walking'],
    cpTypes: 'all',
    team: 'nutrition',
    videoLabel: 'Safe sitting for meals (placeholder video)',
  },
  {
    id: 'hippotherapy',
    en: 'Horse-assisted therapy',
    ur: 'گھوڑے کی مدد سے تھراپی',
    summaryEn: 'Some families try riding sessions for posture and fun. Access is limited in Pakistan.',
    summaryUr: 'کچھ خاندان توازن کے لیے سواری آزماتے ہیں۔ پاکستان میں رسائی محدود ہے۔',
    detailEn:
      'Evidence is mixed and this is not a first-line IHHN treatment. Included so parents can see how we colour-code weaker evidence.',
    detailUr:
      'شواهد ملے جلے ہیں۔ یہ IHHN کا پہلا علاج نہیں۔ کمزور ثبوت دکھانے کے لیے شامل ہے۔',
    evidence: 'amber',
    evidenceNoteEn: 'Limited / mixed evidence',
    evidenceNoteUr: 'محدود / ملے جلے ثبوت',
    ages: ['6-12', '13-17'],
    goals: ['mobility', 'school'],
    abilities: ['sitting', 'standing'],
    cpTypes: 'all',
    team: 'physio',
    videoLabel: 'What a session looks like (placeholder video)',
  },
  {
    id: 'hbot',
    en: 'Hyperbaric oxygen',
    ur: 'ہائپربارک آکسیجن',
    summaryEn: 'Not recommended as a CP treatment. Listed so families can spot low-evidence offers.',
    summaryUr: 'سی پی کے علاج کے طور پر تجویز نہیں۔ کم ثبوت والی پیشکش پہچاننے کے لیے۔',
    detailEn:
      'This is shown in red on purpose, following the idea of colour-coding effectiveness. Families in Pakistan may be offered costly unproven therapies. Always ask the IHHN team first.',
    detailUr:
      'یہ سرخ اس لیے ہے کہ خاندان مہنگے بغیر ثبوت علاج سے بچ سکیں۔ پہلے IHHN ٹیم سے پوچھیں۔',
    evidence: 'red',
    evidenceNoteEn: 'Not recommended',
    evidenceNoteUr: 'تجویز نہیں',
    ages: ['0-2', '3-5', '6-12', '13-17'],
    goals: ['mobility', 'communication', 'comfort'],
    abilities: ['sitting', 'standing', 'walking-aid', 'walking'],
    cpTypes: 'all',
    team: 'neuro',
    videoLabel: 'Why we do not use this (placeholder video)',
  },
]

export type Aid = {
  id: string
  en: string
  ur: string
  summaryEn: string
  summaryUr: string
  centers: CenterId[]
}

export const aids: Aid[] = [
  {
    id: 'afo-aid',
    en: 'Ankle-foot orthosis (AFO)',
    ur: 'ٹخنے کا بریس',
    summaryEn: 'Custom plastic brace. Fitting at orthotics workshop.',
    summaryUr: 'حسب ضرورت پلاسٹک بریس۔ آرتھوٹکس ورکشاپ میں فٹنگ۔',
    centers: ['karachi', 'lahore', 'muzaffargarh'],
  },
  {
    id: 'walker',
    en: 'Posterior walker',
    ur: 'پیچھے سے والا واکر',
    summaryEn: 'Helps children walk with support from behind.',
    summaryUr: 'پیچھے سے سہارا دے کر چلنے میں مدد۔',
    centers: ['karachi', 'lahore', 'badin'],
  },
  {
    id: 'wheelchair',
    en: 'Child wheelchair',
    ur: 'بچوں کی وہیل چیئر',
    summaryEn: 'For longer distances and school. Seat support can be added.',
    summaryUr: 'لمبے فاصلے اور سکول کے لیے۔ سیٹ کا سہارا لگ سکتا ہے۔',
    centers: ['karachi', 'lahore', 'gwadar', 'muzaffargarh'],
  },
  {
    id: 'stander',
    en: 'Standing frame',
    ur: 'کھڑے ہونے کا فریم',
    summaryEn: 'Supports standing time for bones, hips, and digestion.',
    summaryUr: 'ہڈیوں، کولہوں اور ہاضمے کے لیے کھڑے ہونے کا وقت۔',
    centers: ['karachi', 'lahore'],
  },
  {
    id: 'comm-board',
    en: 'Picture communication board',
    ur: 'تصویری بات چیت بورڈ',
    summaryEn: 'Low-cost board for yes/no, pain, food, and toilet.',
    summaryUr: 'ہاں/نہیں، درد، کھانا اور بیت الخلا کے لیے سستا بورڈ۔',
    centers: ['karachi', 'lahore', 'badin', 'gwadar', 'muzaffargarh'],
  },
]

export const forumThreads = [
  {
    id: 't1',
    author: 'Amina · Karachi',
    titleEn: 'How do you do stretching at home without tears?',
    titleUr: 'گھر پر ورزش بغیر رونے کے کیسے؟',
    bodyEn:
      'My 4-year-old fights ankle stretches after school. What has worked for other parents?',
    bodyUr: 'میرا 4 سالہ بچہ سکول کے بعد ٹخنے کی ورزش سے کتراتا ہے۔',
    replies: 8,
    tag: 'Physiotherapy',
  },
  {
    id: 't2',
    author: 'Hassan · Lahore',
    titleEn: 'School asked for a letter about extra time',
    titleUr: 'سکول نے اضافی وقت کا خط مانگا',
    bodyEn:
      'Did anyone get a simple school support letter from IHHN?',
    bodyUr: 'کیا کسی کو IHHN سے سکول کے لیے سادہ خط ملا؟',
    replies: 5,
    tag: 'School',
  },
  {
    id: 't3',
    author: 'Maryam · Badin',
    titleEn: 'Traveling to Karachi for a brace fitting',
    titleUr: 'بریس فٹنگ کے لیے کراچی جانا',
    bodyEn:
      'We are coming from Badin next month. Any tips for same-day orthotics?',
    bodyUr: 'اگلے مہینے بدین سے آ رہے ہیں۔ ایک دن میں آرتھوٹکس کے مشورے؟',
    replies: 3,
    tag: 'Orthotics',
  },
]

export const forumReplies = [
  {
    id: 'r1',
    threadId: 't1',
    author: 'Saba · Lahore',
    bodyEn: 'We sing one song per stretch. Short and the same every night.',
    bodyUr: 'ہر ورزش پر ایک گانا۔ رات کو چھوٹی اور وہی عادت۔',
  },
  {
    id: 'r2',
    threadId: 't1',
    author: 'IHHN helper',
    bodyEn: 'Ask your physiotherapist to mark 2 stretches only for home — not the whole list.',
    bodyUr: 'فزیو سے گھر کے لیے صرف 2 ورزشیں نشان لگوائیں۔',
  },
]

export const questionnaire = {
  discipline: { en: 'Physiotherapy', ur: 'فزیو تھراپی' },
  cadenceEn: 'Every 3 months · 10 questions',
  cadenceUr: 'ہر 3 ماہ · 10 سوالات',
  questions: [
    {
      id: 'q1',
      en: 'I know how often my child should practise at home.',
      ur: 'مجھے معلوم ہے گھر پر کتنی بار مشق کرنی چاہیے۔',
    },
    {
      id: 'q2',
      en: 'I feel confident helping with stretches.',
      ur: 'میں ورزش میں مدد کرنے میں پراعتماد ہوں۔',
    },
    {
      id: 'q3',
      en: 'Getting physiotherapy at IHHN is manageable for our family.',
      ur: 'IHHN پر فزیو تھراپی ہمارے لیے ممکن ہے۔',
    },
    {
      id: 'q4',
      en: 'I understand my child’s current movement goals.',
      ur: 'مجھے بچے کے موجودہ حرکت کے اہداف سمجھ آتے ہیں۔',
    },
    {
      id: 'q5',
      en: 'I know who to call if movement suddenly gets worse.',
      ur: 'اگر حرکت اچانک خراب ہو تو کسے فون کرنا ہے مجھے معلوم ہے۔',
    },
    {
      id: 'q6',
      en: 'Home exercises fit into our daily routine.',
      ur: 'گھریلو مشق ہماری روزمرہ روٹین میں فٹ ہے۔',
    },
    {
      id: 'q7',
      en: 'I received clear instructions after the last visit.',
      ur: 'آخری وزٹ کے بعد ہدایات صاف ملیں۔',
    },
    {
      id: 'q8',
      en: 'I can see small progress over the last 3 months.',
      ur: 'پچھلے 3 ماہ میں تھوڑی بہتری نظر آتی ہے۔',
    },
    {
      id: 'q9',
      en: 'Travel / waiting time for physio is acceptable.',
      ur: 'فزیو کے لیے سفر/انتظار قابل قبول ہے۔',
    },
    {
      id: 'q10',
      en: 'I feel supported by the care team.',
      ur: 'مجھے دیکھ بھال کی ٹیم کا سہارا محسوس ہوتا ہے۔',
    },
  ],
  scale: [
    { id: '1', en: 'No', ur: 'نہیں' },
    { id: '2', en: 'A little', ur: 'تھوڑا' },
    { id: '3', en: 'Sometimes', ur: 'کبھی کبھی' },
    { id: '4', en: 'Mostly', ur: 'زیادہ تر' },
    { id: '5', en: 'Yes', ur: 'ہاں' },
  ],
}

export const milestones = [
  { id: 'm1', en: 'Sat with support', ur: 'سہارے سے بیٹھا', done: true },
  { id: 'm2', en: 'Reached with both hands', ur: 'دونوں ہاتھوں سے پہنچا', done: true },
  { id: 'm3', en: 'Stood in a frame', ur: 'فریم میں کھڑا ہوا', done: true },
  { id: 'm4', en: 'Steps with a walker', ur: 'واکر سے قدم', done: false },
  { id: 'm5', en: 'Used picture board at meals', ur: 'کھانے پر تصویر بورڈ', done: false },
]

export const careTeam = [
  { roleEn: 'Physiotherapy', roleUr: 'فزیو تھراپی', name: 'Dr. Sana Qureshi' },
  { roleEn: 'Orthopaedics', roleUr: 'آرتھوپیڈکس', name: 'Dr. Ayesha Khan' },
  { roleEn: 'Nutrition', roleUr: 'غذائیت', name: 'Dr. Fatima Noor' },
]
