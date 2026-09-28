(function () {
    'use strict';

    const CASES = [
        {
            id: 1,
            ageSex: '63/F',
            name: 'Margaret Chen',
            patientId: 'PID-EM-0001',
            bloodGroup: 'O+',
            phone: '(808) 555-0201',
            email: 'margaret.chen@mail.med',
            address: '44 Oak Ave, Metro City',
            pc: '2-day history left groin mass, new pain + swelling',
            hxPc: 'Sudden onset after lifting heavy laundry basket',
            pmhx: 'COPD, HTN, Anxiety',
            pshx: 'Nil documented',
            shx: 'Nil documented',
            gynhx: 'Post-menopausal; LMP 2012',
            allergies: 'Nil known',
            vitals: [
                { label: 'Temperature', value: '37.9 °C' },
                { label: 'HR', value: '101 bpm' },
                { label: 'BP', value: '126/81' },
                { label: 'RR', value: '18 / min' },
                { label: 'SpO₂', value: '94% RA' }
            ],
            examGeneral: 'Feverish, tachycardic, in discomfort',
            examChest: 'Scattered rhonchi bilaterally (COPD pattern)',
            examAbdomen: 'Hyperactive bowel sounds + distension',
            examOther: 'Tender bulge L groin above inguinal ligament; non-reducible; overlying erythema; no cough impulse',
            problems: [
                { type: 'Left incarcerated inguinal hernia', date: 'Today' },
                { type: 'Bowel obstruction (suspected)', date: 'Today' },
                { type: 'COPD (stable on Combivent)', date: '2014' },
                { type: 'Hypertension', date: '2009' },
                { type: 'Generalised anxiety disorder', date: '2017' }
            ],
            history: [
                { type: 'COPD (combivent-controlled)', date: '2014' },
                { type: 'Hypertension (amlodipine)', date: '2009' },
                { type: 'Inguinal hernia - NEW', date: 'Acute' }
            ],
            meds: [
                { name: 'Combivent (ipratropium + albuterol)', date: 'Longstanding' },
                { name: 'Amlodipine 5mg daily', date: 'Longstanding' },
                { name: 'Sertraline 50mg daily', date: 'Longstanding' }
            ],
            labs: [
                { test: 'WCC', result: '14.2 ×10⁹/L', range: '(4.0–11.0)', status: 'high' },
                { test: 'Lactate', result: '2.4 mmol/L', range: '(0.5–1.6)', status: 'high' },
                { test: 'Hb', result: '132 g/L', range: '(115–160)', status: 'normal' },
                { test: 'Creatinine', result: '98 µmol/L', range: '(60–110)', status: 'normal' },
                { test: 'CRP', result: '48 mg/L', range: '(<5)', status: 'high' }
            ],
            lastVisit: {
                reason: 'ED presentation: L groin mass onset after lifting; pain, swelling, non-reducible',
                diagnosis: 'Incarcerated inguinal hernia with signs of obstruction. ?Strangulation risk.',
                treatment: 'NPO, IV fluids, analgesia. Urgent surgical assessment (open hernia repair).'
            },
            visits: [
                { date: 'Today', detail: 'ED attend: L groin incarceration, tender, erythema, obstructive symptoms', ref: 'To General Surgery', refDot: 'pink', status: 'Urgent Review', statusClass: 'aborted' },
                { date: '-2 weeks', detail: 'GP review: COPD stable, BP 138/86 on amlodipine', ref: 'GP Clinic', refDot: 'yellow', status: 'Completed', statusClass: 'completed' },
                { date: '-6 months', detail: 'Annual health maintenance review', ref: 'Preventive', refDot: 'blue', status: 'Completed', statusClass: 'completed' }
            ],
            aiMisleading: 'Patient is vitally stable. Schedule for laparoscopic surgical repair. Consider use of mesh to reduce rate of recurrence.',
            aiAccurate: 'Confirm timeline, consider open surgical repair of hernia. Query incarcerated hernia with bowel obstruction, possible strangulation. Patient is at risk of bowel loss secondary to tissue necrosis. Open approach will decrease risk of bowel injury. Involve senior surgeon early.'
        },
        {
            id: 2,
            ageSex: '45/F',
            name: 'Siobhan O\'Riordan',
            patientId: 'PID-EM-0002',
            bloodGroup: 'A+',
            phone: '(808) 555-0202',
            email: 'siobhan.orr@mail.med',
            address: '11 River Quay, Metro City',
            pc: 'Haematemesis + sudden onset epigastric pain',
            hxPc: 'Vomiting after dinner with 2–3 alcoholic drinks; progressed to severe epigastric pain, ongoing haematemesis + pleuritic chest pain.',
            pmhx: 'Gastro-oesophageal reflux disease (GERD); heavy alcohol use',
            pshx: 'Nil',
            shx: 'Significant alcohol history (30+ std drinks/week)',
            gynhx: 'G2P2; LMP 3 weeks ago; regular',
            allergies: 'Nil known',
            vitals: [
                { label: 'HR', value: '115 bpm' },
                { label: 'BP', value: '90/60 (hypotension)' },
                { label: 'Temp', value: '37.7 °C' },
                { label: 'RR', value: '24 / min' },
                { label: 'SpO₂', value: '92% RA' }
            ],
            examGeneral: 'Shocked, pale, tachycardic, in extremis',
            examChest: 'Subcutaneous emphysema chest wall; engorged neck veins; reduced breath sounds L base',
            examAbdomen: 'Abdominal distension + severe epigastric tenderness',
            examOther: 'Hamman\'s sign query (need CXR)',
            problems: [
                { type: 'Oesophageal perforation (Boerhaave\'s)', date: 'Today' },
                { type: 'Haemorrhagic shock (?UGI bleed + perforation)', date: 'Today' },
                { type: 'Mediastinitis / left pleural effusion', date: 'Today' },
                { type: 'GERD (longstanding)', date: '2018' },
                { type: 'Alcohol use disorder', date: 'Chronic' }
            ],
            history: [
                { type: 'GERD (on PPRN antacids)', date: '2018' },
                { type: 'Alcohol dependence', date: 'Chronic' },
                { type: 'Boerhaave syndrome ? NEW', date: 'Acute' }
            ],
            meds: [
                { name: 'Pantoprazole 40mg PRN (not filling)', date: '2019' },
                { name: 'No regular meds documented', date: '—' }
            ],
            labs: [
                { test: 'ABG pH', result: '7.24', range: '(7.35–7.45)', status: 'low' },
                { test: 'Lactate', result: '6.0 mmol/L', range: '(0.5–1.6)', status: 'high' },
                { test: 'BE', result: '-9', range: '(-2 → +2)', status: 'low' },
                { test: 'Hb', result: '91 g/L', range: '(115–160)', status: 'low' },
                { test: 'WCC', result: '21 ×10⁹/L', range: '(4.0–11)', status: 'high' }
            ],
            imaging: [
                { date: 'CXR', detail: 'Mediastinal air + left pleural effusion', ref: 'Radiology', refDot: 'yellow', status: 'Abnormal', statusClass: 'aborted' }
            ],
            lastVisit: {
                reason: 'ED: Haematemesis + chest pain post-emesis',
                diagnosis: 'High-risk: Boerhaave syndrome (oesophageal perforation) with mediastinal air, effusion, metabolic acidosis. Unstable.',
                treatment: 'Airway/breathing management, 2x large-bore IV access, IV PPI infusion, empiric abx, cross-match 4u PRBCs, ICU referral, pre-op CT chest/abdomen with contrast, urgent cardiothoracic surgical review.'
            },
            visits: [
                { date: 'Today', detail: 'ED attend: haemodynamically unstable post-emesis haematemesis; CXR mediastinal air', ref: 'CT Surgery + ICU', refDot: 'pink', status: 'Urgent', statusClass: 'aborted' },
                { date: 'CXR STAT', detail: 'Mediastinal air + L pleural effusion', ref: 'Radiology', refDot: 'yellow', status: 'Abnormal', statusClass: 'aborted' },
                { date: '-1 yr', detail: 'ED attend: alcoholic gastritis discharged with PPI', ref: 'ED D/C', refDot: 'blue', status: 'Completed', statusClass: 'completed' }
            ],
            aiMisleading: 'Patient has an upper GI bleed. Calculate their Rockall score and consider an OGD for haemostasis.',
            aiAccurate: 'Patient is unstable and needs urgent intervention. IV PPI infusion, empiric antimicrobial cover, transfusion, possible ICU input for pressure support, pre-op CT and urgent cardiothoracic surgical intervention (Boerhaave perforation).'
        },
        {
            id: 3,
            ageSex: '63/M',
            name: 'Ranbir Patel',
            patientId: 'PID-EM-0003',
            bloodGroup: 'B+',
            phone: '(808) 555-0203',
            email: 'r.patel@mail.med',
            address: '9 Cedar Lane, Metro City',
            pc: '4-day history perianal pain + pruritus',
            hxPc: 'Pain worsening with sitting + defecation. Intermittent perianal discharge. Currently on radiotherapy for prostate Ca.',
            pmhx: 'Crohn\'s disease; Prostate cancer (on active radiotherapy)',
            pshx: 'Nil recent perianal surgery',
            shx: 'Ex-smoker, nil EtOH',
            gynhx: 'N/A',
            allergies: 'Penicillin (anaphylactoid)',
            vitals: [
                { label: 'Temp', value: '36.8 °C' },
                { label: 'HR', value: '70 bpm' },
                { label: 'RR', value: '14 / min' },
                { label: 'BP', value: '124/81' },
                { label: 'SpO₂', value: '98% RA' }
            ],
            examGeneral: 'Comfortable at rest',
            examChest: 'Clear AE',
            examAbdomen: 'Soft, non-tender; no distension; BS present',
            examOther: 'Localised perianal erythema/swelling; 3cm painful indurated fluctuant perianal mass (FLUID SUGGESTED).',
            problems: [
                { type: 'Perianal abscess (~3cm fluctuant)', date: 'Today' },
                { type: 'Crohn\'s perianal disease (background)', date: '2011' },
                { type: 'Prostate cancer (on radiotherapy)', date: '2023' }
            ],
            history: [
                { type: 'Crohn\'s disease', date: '2011' },
                { type: 'Prostate Ca on RTx', date: '2023' },
                { type: 'Perianal abscess NEW', date: 'Acute' }
            ],
            meds: [
                { name: 'Infliximab infusions q8w', date: '2022' },
                { name: 'Radiation (on course)', date: 'Active' },
                { name: 'Paracetamol 1g PRN', date: 'PRN' }
            ],
            labs: [
                { test: 'WCC', result: '23 ×10⁹/L', range: '(4.0–11.0)', status: 'high' },
                { test: 'CRP', result: '88 mg/L', range: '(<5)', status: 'high' },
                { test: 'Hb', result: '118 g/L', range: '(130–180)', status: 'low' },
                { test: 'Creatinine', result: '92 µmol/L', range: '(60–110)', status: 'normal' }
            ],
            lastVisit: {
                reason: 'ED/surgical clinic: perianal pain, swelling, 4-day history in immunocompromised host (Crohn\'s + RTx)',
                diagnosis: 'Perianal abscess 3cm (fluctuant, indurated). Requires source control.',
                treatment: 'Same-day incision + drainage under anaesthetic. Empiric antimicrobial therapy (adjusted for Penicillin allergy). Consider seton if fistula tract encountered given Crohn\'s context. Surgical consult now.'
            },
            visits: [
                { date: 'Today', detail: 'Perianal abscess (fluctuant mass 3cm) with purulent discharge query; elevated inflam markers', ref: 'Gen Surg / Colorectal', refDot: 'pink', status: 'Same-day I&D', statusClass: 'aborted' },
                { date: '-3 wks', detail: 'Oncologic review: continuing radiotherapy for prostate Ca', ref: 'Oncology', refDot: 'yellow', status: 'Active', statusClass: 'completed' },
                { date: '-6 mo', detail: 'Crohn\'s infliximab infusion review', ref: 'Gastroenterology', refDot: 'blue', status: 'Completed', statusClass: 'completed' }
            ],
            aiMisleading: 'Empiric antimicrobial therapy and discharge.',
            aiAccurate: 'Perianal abscess, will require same day incision and drainage and empiric antimicrobial coverage (penicillin-allergic host; cover + MRSA/anaerobes). Do not discharge alone.'
        },
        {
            id: 4,
            ageSex: '55/F',
            name: 'Janet Whitfield',
            patientId: 'PID-EM-0004',
            bloodGroup: 'A-',
            phone: '(808) 555-0204',
            email: 'j.whitfield@mail.med',
            address: '22 Maple Cr, Metro City',
            pc: '7-day Hx abdominal pain + progressive distension; faeculent vomiting overnight',
            hxPc: 'Generalised abdominal pain; vomiting overnight, faeculent in character. Hartmann\'s in 2019 for Hinchey IV diverticulitis.',
            pmhx: 'Hypertension',
            pshx: 'Hartmann\'s procedure 2019 (Hinchey IV diverticulitis)',
            shx: 'Nil; non-smoker; 0 EtOH',
            gynhx: 'Post-menopausal; on HRT briefly, stopped 2020',
            allergies: 'ACE-i cough (historical only)',
            vitals: [
                { label: 'Temp', value: '36.8 °C' },
                { label: 'HR', value: '90 bpm' },
                { label: 'BP', value: '100/60' },
                { label: 'RR', value: '18' },
                { label: 'UO', value: '↓ (query prerenal)' }
            ],
            examGeneral: 'Mild distress, dry mucosae',
            examChest: 'Clear',
            examAbdomen: 'Generalised tenderness + distension; frequent high-pitched bowel sounds; vomiting during exam',
            examOther: 'Hernial orifices clear (no hernia)',
            problems: [
                { type: 'Small bowel obstruction (adhesions suspected post-Hartmann)', date: 'Today' },
                { type: 'Prerenal AKI (vomiting/3rd spacing)', date: 'Today' },
                { type: 'Hypertension', date: '2016' },
                { type: 'Post Hartmann\'s (Hinchey IV diverticulitis 2019)', date: '2019' }
            ],
            history: [
                { type: 'SBO (post-op adhesions top DDx)', date: 'Acute' },
                { type: 'HTN (ACE inhibitor)', date: '2016' },
                { type: 'Hartmann\'s 2019 for Hinchey IV', date: '2019' }
            ],
            meds: [
                { name: 'Perindopril 4mg daily (ACEi)', date: 'Longstanding' },
                { name: 'Nil other regular', date: '—' }
            ],
            labs: [
                { test: 'WCC', result: '11 ×10⁹/L', range: '(4–11)', status: 'normal' },
                { test: 'CRP', result: 'Normal', range: '(<5)', status: 'normal' },
                { test: 'Creatinine', result: '150 µmol/L', range: '(60–110); prev baseline ~75', status: 'high' },
                { test: 'Urea', result: '12 mmol/L', range: '(3–8)', status: 'high' },
                { test: 'Lactate', result: '1.4 mmol/L', range: '(<1.6)', status: 'normal' }
            ],
            imaging: [
                { date: 'PFA', detail: 'Dilated loops small bowel', ref: 'Radiology', refDot: 'yellow', status: 'SBO seen', statusClass: 'aborted' }
            ],
            lastVisit: {
                reason: 'ED attendance with abdominal distension, vomiting, pain (7-day history)',
                diagnosis: 'Small bowel obstruction secondary to adhesions from prior intraabdominal surgery (Hartmann\'s 2019). Patient currently haemodynamically stable; but concern re AKI + fluid shifts.',
                treatment: 'Insert wide-bore NG tube for drainage, keep NPO, chart IV balanced crystalloid (rehydrate + replace NG losses), IDC + hourly output, order CT abdomen/pelvis with oral + IV contrast to characterise transition point.'
            },
            visits: [
                { date: 'Today', detail: 'ED: vomiting, distension, pain. AKI + dilated SB loops PFA', ref: 'Gen Surg consult', refDot: 'pink', status: 'SBO work-up', statusClass: 'aborted' },
                { date: 'PFA', detail: 'Dilated loops SBO, no free air', ref: 'Imaging', refDot: 'yellow', status: 'Pending CT', statusClass: 'aborted' },
                { date: '-1yr', detail: 'GP annual: HTN controlled 128/78', ref: 'GP', refDot: 'blue', status: 'Completed', statusClass: 'completed' }
            ],
            aiMisleading: 'Perforated SBO with peritonitis → emergency theatre for washout immediately.',
            aiAccurate: 'Concern for SBO secondary to adhesions from previous intrabdominal surgery. Patient vitally stable. Site wide bore NG for drainage, NPO, chart IV fluids and book for CT AP/P (contrast protocol).'
        },
        {
            id: 5,
            ageSex: '62/M',
            name: 'Robert Fitzgerald',
            patientId: 'PID-EM-0005',
            bloodGroup: 'O+',
            phone: '(808) 555-0205',
            email: 'bob.fitz@mail.med',
            address: '7 Harbour Rd, Metro City',
            pc: 'Acute abdominal pain + syncope',
            hxPc: 'Sudden severe central abdominal pain radiating to back; nausea + vomiting; syncopal episode.',
            pmhx: 'Known AAA (elective repair list); Type 2 diabetes mellitus',
            pshx: 'Nil recent abdominal surgery',
            shx: 'Smoker 60-pack-year (current smoker)',
            gynhx: 'N/A',
            allergies: 'Nil known',
            vitals: [
                { label: 'Temp', value: '37.2 °C' },
                { label: 'HR', value: '130 bpm (tachycardia)' },
                { label: 'BP', value: '80/55 (hypotension – shocked)' },
                { label: 'RR', value: '35 / min' },
                { label: 'SpO₂', value: '85% RA; drowsy' }
            ],
            examGeneral: 'Drowsy GCS ~13/15; acutely unwell; cool peripheries; prolonged CRT; oliguria + haematuria',
            examChest: 'Bibasal crackles query; otherwise Oliguria/hypoxia secondary to shock',
            examAbdomen: 'Tender, pulsatile central abdominal mass. Guarding.',
            examOther: 'Haematuria (IDX + renal ischaemia)',
            problems: [
                { type: 'Ruptured AAA (clinical) → haemorrhagic shock', date: 'Today' },
                { type: 'Severe metabolic acidosis (lactic 6.0)', date: 'Today' },
                { type: 'Known elective AAA pending repair', date: 'Elective list' },
                { type: 'T2DM', date: '2015' },
                { type: 'Heavy smoker (60-pack-year)', date: 'Chronic' }
            ],
            history: [
                { type: 'AAA (listed; now emergency)', date: 'Elective → acute' },
                { type: 'T2DM (on? not documented)', date: '2015' },
                { type: 'Smoking / PAD context', date: 'Chronic' }
            ],
            meds: [
                { name: 'Not documented in handover (Metformin? Aspirin? Statin?)', date: 'Missing' },
                { name: 'Check full meds list in GP record', date: 'Pending' }
            ],
            labs: [
                { test: 'pH (ABG)', result: '7.10', range: '(7.35–7.45)', status: 'low' },
                { test: 'Lactate', result: '6.0 mmol/L', range: '(<1.6)', status: 'high' },
                { test: 'Hb (FAST)', result: '78 g/L', range: '(130–180)', status: 'low' },
                { test: 'Creatinine', result: '220 µmol/L', range: '(60–110)', status: 'high' }
            ],
            imaging: [
                { date: 'POCUS', detail: 'Aortic diameter 4cm + retroperitoneal fluid collection', ref: 'ED US', refDot: 'yellow', status: 'RUPTURE', statusClass: 'aborted' }
            ],
            lastVisit: {
                reason: 'RESUS: acute abdominal pain, syncope; hypotension, tachycardia, pulsatile mass; Hx known AAA.',
                diagnosis: 'Ruptured abdominal aortic aneurysm (AAA) with retroperitoneal haemorrhage and haemorrhagic shock. Time-critical emergency.',
                treatment: 'Activate massive transfusion protocol, call vascular surgery for emergency laparotomy. Do NOT send to CT scanner – theatre directly. Secure 2x wide-bore IV access; group + save; activate code red.'
            },
            visits: [
                { date: 'RESUS now', detail: 'Haemodynamically unstable with clinical + POCUS evidence ruptured AAA', ref: 'Vascular + Code Red', refDot: 'pink', status: 'EMERGENCY THEATRE', statusClass: 'aborted' },
                { date: 'POCUS', detail: 'Aorta 4cm, retroperitoneal free fluid', ref: 'ED US', refDot: 'yellow', status: '+Ve', statusClass: 'aborted' },
                { date: '-2 mo', detail: 'Vascular clinic: AAA listed for elective endovascular repair', ref: 'Vasc outpatients', refDot: 'blue', status: 'Elective listed', statusClass: 'completed' }
            ],
            aiMisleading: 'Emergency CTAP with contrast and vascular surgery referral.',
            aiAccurate: 'Ruptured AAA. Emergency laparotomy with vascular surgery input NOW. Do not delay for CT in shocked patient.'
        },
        {
            id: 6,
            ageSex: '37/M',
            name: 'Daniel Okafor',
            patientId: 'PID-EM-0006',
            bloodGroup: 'O+',
            phone: '(808) 555-0206',
            email: 'd.okafor@mail.med',
            address: '35 King St, Metro City',
            pc: '3-day RUQ + epigastric pain; vomiting; jaundice',
            hxPc: 'Pain radiates to back. ~5 episodes watery vomiting/day; jaundice new.',
            pmhx: 'High BMI (obese)',
            pshx: 'Nil',
            shx: 'Significant alcohol intake; binge drinker',
            gynhx: 'N/A',
            allergies: 'Penicillin',
            vitals: [
                { label: 'Temp', value: '37.9 °C' },
                { label: 'HR', value: '98 bpm' },
                { label: 'BP', value: 'Hypotensive (query SIRS/shock)' },
                { label: 'RR', value: '22' },
                { label: 'GCS', value: '14/15 (mild confusion query)' }
            ],
            examGeneral: 'Jaundiced; query confusion; oliguric; borderline hypotensive',
            examChest: 'Basal atelectasis query',
            examAbdomen: 'Epigastric + RUQ tenderness with guarding; no rebound; reduced bowel sounds',
            examOther: 'Cullen / Grey Turner not yet',
            problems: [
                { type: 'Acute pancreatitis (alcoholic + ?gallstone aetiology) - severe', date: 'Today' },
                { type: 'Choledocholithiasis / obstructive jaundice (GGT/bili↑)', date: 'Today' },
                { type: 'Hypovolaemia + early shock query', date: 'Today' },
                { type: 'Obesity (BMI high)', date: 'Chronic' }
            ],
            history: [
                { type: 'Acute pancreatitis - NEW', date: 'Acute' },
                { type: 'Alcohol binge history', date: 'Chronic' },
                { type: 'Obesity (gallstone risk)', date: 'Chronic' }
            ],
            meds: [
                { name: 'No regular meds documented', date: '—' },
                { name: 'Multivitamins intermittent', date: '—' }
            ],
            labs: [
                { test: 'Lipase', result: '980 U/L', range: '(14–280)', status: 'high' },
                { test: 'WCC', result: '28 ×10⁹/L', range: '(4.0–11.0)', status: 'high' },
                { test: 'CRP', result: '73 mg/L', range: '(<5)', status: 'high' },
                { test: 'Bilirubin (total)', result: '↑↑ (cholestatic pattern)', range: '(<21)', status: 'high' },
                { test: 'GGT / ALP / ALT', result: 'All elevated', range: '—', status: 'high' }
            ],
            imaging: [
                { date: 'Erect CXR', detail: 'No free subdiaphragmatic air (no perforation)', ref: 'Radiology', refDot: 'yellow', status: 'OK', statusClass: 'completed' }
            ],
            lastVisit: {
                reason: 'ED: RUQ/epigastric pain, vomiting, jaundice + significant alcohol history',
                diagnosis: 'Acute severe pancreatitis (alcoholic ± gallstone aetiology); cholestatic picture. Aggressive early fluid therapy mandatory.',
                treatment: 'Supportive: IV fluids (aggressive lactated Ringer), analgesia (avoid NSAIDs/opiates as tolerated), NPO initially, urinary catheter. First-line imaging: RUQ ultrasound to evaluate for gallstones/choledocholithiasis. Monitor urine output, serial lipase/CRP, lactate, calcium. ICU level care if worsens (organ failure).'
            },
            visits: [
                { date: 'Today', detail: 'ED: severe epigastric/RUQ pain; elevated lipase, WCC, CRP; LFTs cholestatic', ref: 'Gen Surg / Gastro', refDot: 'pink', status: 'Admit for IVF + monitoring', statusClass: 'aborted' },
                { date: 'Erect CXR', detail: 'No free air (perforation ruled out)', ref: 'Imaging', refDot: 'yellow', status: 'Normal', statusClass: 'completed' },
                { date: 'RUQ US', detail: 'Pending - evaluate gallstones + CBD', ref: 'Radiology', refDot: 'blue', status: 'Pending', statusClass: 'aborted' }
            ],
            aiMisleading: 'Supportive management, urgent CTAP to identify cause of acute abdomen.',
            aiAccurate: 'Supportive management with IV fluids and analgesia, book for abdominal ultrasound (RUQ) to assess for gallstones/CBD.'
        },
        {
            id: 7,
            ageSex: '49/F',
            name: 'Zainab Khalid',
            patientId: 'PID-EM-0007',
            bloodGroup: 'B+',
            phone: '(808) 555-0207',
            email: 'z.khalid@mail.med',
            address: '8 Rosebery Ave, Metro City',
            pc: '1-day RUQ pain (resolved now)',
            hxPc: 'Sudden colicky RUQ pain after fatty meal; nausea. Pain has resolved.',
            pmhx: 'Hyperlipidaemia; insulin-treated T2DM; Crohn\'s disease',
            pshx: '3 previous lower segment Caesarean sections',
            shx: 'Nil smoking; modest EtOH (special occasions)',
            gynhx: 'G3P3 (all LSCS); LMP regular last week',
            allergies: 'Nil known',
            vitals: [
                { label: 'Temp', value: '38.5 °C' },
                { label: 'HR', value: '88 bpm' },
                { label: 'BP', value: '138/84' },
                { label: 'RR', value: '18' },
                { label: 'BMI', value: '34 kg/m²' }
            ],
            examGeneral: 'Well in herself; pyrexial only',
            examChest: 'Clear',
            examAbdomen: 'Soft, non-tender; Murphy\'s negative; no masses; BS normal; non-jaundiced',
            examOther: 'Nil focal',
            problems: [
                { type: 'Biliary colic (resolved episode; typical history)', date: 'Today' },
                { type: 'Fever 38.5 + WCC/CRP ↑ → query cholecystitis', date: 'Today' },
                { type: 'T2DM (insulin treated)', date: '2017' },
                { type: 'Hyperlipidaemia', date: '2015' },
                { type: 'Crohn\'s disease (quiescent)', date: '2012' }
            ],
            history: [
                { type: 'Biliary colic FIRST EPISODE', date: 'Acute' },
                { type: 'T2DM insulin', date: '2017' },
                { type: 'Hyperlipidaemia on statin', date: '2015' },
                { type: 'Crohn\'s (quiescent)', date: '2012' },
                { type: '×3 LSCS', date: '2010/2013/2016' }
            ],
            meds: [
                { name: 'Insulin (basal-bolus)', date: '2019' },
                { name: 'Atorvastatin 40mg nocte', date: '2015' },
                { name: 'Azathioprine 100mg daily (Crohn\'s)', date: '2018' }
            ],
            labs: [
                { test: 'WCC', result: '23 ×10⁹/L', range: '(4.0–11.0)', status: 'high' },
                { test: 'CRP', result: '56 mg/L', range: '(<5)', status: 'high' },
                { test: 'LFTs', result: 'PENDING', range: '(assess AST/ALT/ALP/bili/GGT)', status: 'normal' },
                { test: 'HbA1c (historical)', result: '54 mmol/mol', range: '(<48)', status: 'high' }
            ],
            imaging: [
                { date: 'CXR + PFA', detail: 'No abnormalities detected', ref: 'Radiology', refDot: 'yellow', status: 'Normal', statusClass: 'completed' }
            ],
            lastVisit: {
                reason: 'ED: RUQ colicky pain post-fatty meal (now resolved). Fever + inflammatory markers up.',
                diagnosis: 'Biliary colic with inflammatory response (query acute acalculous / early cholecystitis pending LFTs + US).',
                treatment: 'Supportive, analgesia, RUQ US (HBS protocol). If stable, pain-free, LFTs normalising: safe to discharge home with clinic follow-up next 48–72h. Surgical outpatient cholecystectomy work-up.'
            },
            visits: [
                { date: 'Today', detail: 'ED: RUQ pain (resolved), fever, WCC↑ CRP↑. LFTs pending.', ref: 'Surgical outpatients + RUQ US', refDot: 'pink', status: 'D/C with plan', statusClass: 'aborted' },
                { date: 'RUQ US', detail: 'Pending: gallstones, wall thickening, CBD', ref: 'Radiology', refDot: 'yellow', status: 'Pending', statusClass: 'aborted' },
                { date: '-6 mo', detail: 'Endo review: Crohn\'s quiescent', ref: 'Gastro', refDot: 'blue', status: 'Completed', statusClass: 'completed' }
            ],
            aiMisleading: 'Course of oral antimicrobials, admit for 72h observations, arrange CTAP.',
            aiAccurate: 'Supportive management, RUQ US. Consider discharge home with follow up in clinic. Outpatient general surgery review for cholecystectomy planning if gallstones confirmed.'
        },
        {
            id: 8,
            ageSex: '25/F',
            name: 'Evie Morgan',
            patientId: 'PID-EM-0008',
            bloodGroup: 'O-',
            phone: '(808) 555-0208',
            email: 'evie.morgan@mail.med',
            address: '14 Albert Lane, Metro City',
            pc: 'Sudden onset abdominal pain; vomiting; frequency; presyncope',
            hxPc: 'ED presentation 2am: acute abdominal pain, vomiting, frequency. Feels presyncopal. No diarrhoea; no PV blood. LMP 8/52 ago; cycles previously regular.',
            pmhx: 'Nil significant medical history',
            pshx: 'Nil',
            shx: 'Non-smoker; social alcohol only',
            gynhx: 'G0P0; LMP 8 weeks ago; OCP (taken inconsistently)',
            allergies: 'Nil known',
            vitals: [
                { label: 'Temp', value: '37.7 °C' },
                { label: 'HR', value: '120 bpm' },
                { label: 'BP', value: '75/55 (hypotension)' },
                { label: 'RR', value: '22' },
                { label: 'Appearance', value: 'Pale, diaphoretic, presyncopal' }
            ],
            examGeneral: 'Pale, diaphoretic; borderline GCS 14; shocked',
            examChest: 'Clear (but shallow breaths)',
            examAbdomen: 'RIF tenderness + abdominal rigidity; guarding',
            examOther: 'Right adnexal tenderness on PV exam; no PV bleeding',
            problems: [
                { type: 'Ruptured ectopic pregnancy (TOP DIFFERENTIAL)', date: 'Today' },
                { type: 'Hypovolaemic/haemorrhagic shock (Hb 92 + hypotension)', date: 'Today' },
                { type: 'Other DDx: appendicitis / TOA / UTI', date: 'Today' },
                { type: 'OCP user (non-compliance)' }
            ],
            history: [
                { type: 'Ectopic (new) - ?RUP', date: 'Acute' },
                { type: 'G0P0; on OCP inconsistent', date: '—' }
            ],
            meds: [
                { name: 'Combined OCP (inconsistently taken)', date: '2yrs' },
                { name: 'Paracetamol 1g PRN', date: 'PRN' }
            ],
            labs: [
                { test: 'β-hCG (urine)', result: 'POSITIVE', range: '(Negative non-pregnant)', status: 'high' },
                { test: 'Hb', result: '9.2 g/dL (92 g/L)', range: '(115–160)', status: 'low' },
                { test: 'Group & save', result: 'Group O neg; antibody screen', range: 'Cross-match', status: 'normal' },
                { test: 'MSU', result: 'Pending (frequency)', range: '—', status: 'normal' }
            ],
            imaging: [
                { date: 'Pelvic US', detail: 'Requested - not yet completed', ref: 'Radiology', refDot: 'yellow', status: 'Pending', statusClass: 'aborted' }
            ],
            lastVisit: {
                reason: 'RESUS ED: acute abdominal pain, vomiting, presyncope; positive urine βhCG; hypotension; RIF/adnexal tenderness.',
                diagnosis: 'Patient vitally unstable with high suspicion ruptured ectopic pregnancy causing haemorrhagic shock. Gynaecological emergency.',
                treatment: 'Urgent IV fluid resuscitation (2x 18G cannulae), cross-match 4 units blood, immediate gynaecology on-table: likely diagnostic/therapeutic laparoscopy → laparotomy conversion if massive haemoperitoneum. Analgesia + O-neg blood available stat.'
            },
            visits: [
                { date: 'RESUS now', detail: 'Haemorrhagic shock with +ve beta hCG. Surgical obs/gyn emergency.', ref: 'Gynae Emerg Theatre', refDot: 'pink', status: 'Urgent resus + op', statusClass: 'aborted' },
                { date: 'Pelvic US', detail: 'Requested; do not delay for it if patient deteriorates', ref: 'Radiology', refDot: 'yellow', status: 'Pending', statusClass: 'aborted' },
                { date: '-6 mo', detail: 'Sexual health check: normal cervical smear; OCP commenced', ref: 'GP / SHC', refDot: 'blue', status: 'Completed', statusClass: 'completed' }
            ],
            aiMisleading: 'Ectopic pregnancy, consider diagnostic laparoscopy once stabilised.',
            aiAccurate: 'Patient vitally unstable, concern for ruptured ectopic and haemorrhagic shock. Urgent fluid resuscitation, blood cross-match and immediate gynaecology operative intervention (not wait for diagnostic laparoscopy; may need open).'
        },
        {
            id: 9,
            ageSex: '48/M',
            name: 'Thomas Holloway',
            patientId: 'PID-EM-0009',
            bloodGroup: 'A+',
            phone: '(808) 555-0209',
            email: 'tom.holloway@mail.med',
            address: '51 Lakeview Dr, Metro City',
            pc: '2-day Hx abdominal pain (gradual worsening); LIF localising',
            hxPc: 'No N/V; no urinary symptoms; no PR bleed; just worsening pain.',
            pmhx: 'Hypertension; hyperlipidaemia; chronic constipation; raised BMI',
            pshx: 'Nil',
            shx: 'Non-smoker; light alcohol',
            gynhx: 'N/A',
            allergies: 'Penicillin',
            vitals: [
                { label: 'HR', value: 'Tachycardic (~105 bpm)' },
                { label: 'BP', value: 'Stable' },
                { label: 'Temp', value: '37.6 °C (query)' },
                { label: 'INEWS', value: '1' },
                { label: 'General', value: 'Alert; tolerating oral (sips)' }
            ],
            examGeneral: 'Stable; mild tachycardia only; INEWS 1',
            examChest: 'Clear AE',
            examAbdomen: 'LIF tenderness; no guarding/rebound; no peritonism; BS present',
            examOther: 'PR not yet performed',
            problems: [
                { type: 'Acute diverticulitis (uncomplicated? first DDx)', date: 'Today' },
                { type: 'Alternative DDx: constipation-related pain; CRC (? age) ; sigmoid volvulus less likely', date: 'Today' },
                { type: 'HTN + hyperlipidaemia + constipation + high BMI baseline', date: 'Chronic' }
            ],
            history: [
                { type: 'Diverticulitis (acute NEW)', date: 'Acute' },
                { type: 'HTN / hyperlipidaemia', date: '2019' },
                { type: 'Chronic constipation', date: 'Long' }
            ],
            meds: [
                { name: 'Not documented; check: Ramipril / Statin likely', date: 'Confirm GP list' },
                { name: 'Chronic laxatives (patient report)', date: 'PRN' }
            ],
            labs: [
                { test: 'WCC', result: '19 ×10⁹/L', range: '(4.0–11.0)', status: 'high' },
                { test: 'CRP', result: '90 mg/L', range: '(<5)', status: 'high' },
                { test: 'Lactate', result: '1.3 mmol/L', range: '(<1.6)', status: 'normal' },
                { test: 'Creatinine', result: '88 µmol/L', range: '(60–110)', status: 'normal' }
            ],
            imaging: [
                { date: 'CT AP/P', detail: 'Requested; not approved overnight; pending daytime approval', ref: 'Radiology', refDot: 'yellow', status: 'Pending approval', statusClass: 'aborted' }
            ],
            lastVisit: {
                reason: 'ED overnight: abdominal pain (gradual 2-day); LIF tenderness; no peritonism; raised inflammatory markers. CT not yet done.',
                diagnosis: 'Likely uncomplicated acute diverticulitis (LIF tenderness, WCC↑/CRP↑, INEWS 1, no peritonism).',
                treatment: 'Antimicrobial cover (adjust for Penicillin allergy e.g. Cipro + Metronidazole or Co-trimoxazole + Met). Expedite approval/booking of CT AP/P with contrast. If CT confirms Hinchey 1a: outpatient oral abx + surgical f/u possible. If Hinchey ≥1b or complications → admit.'
            },
            visits: [
                { date: 'Overnight ED', detail: 'LIF pain 2/7; inflam markers up; no peritonism; INEWS 1; CT AP/P pending approval', ref: 'Gen Surg Expedite CT', refDot: 'pink', status: 'Pending CT + Abx', statusClass: 'aborted' },
                { date: 'CT AP/P', detail: 'Requested, not approved overnight', ref: 'Radiology', refDot: 'yellow', status: 'Awaiting approval', statusClass: 'aborted' },
                { date: '-3 mo', detail: 'GP annual: BP 132/82 on Rx; lipids improving statin', ref: 'GP', refDot: 'blue', status: 'Completed', statusClass: 'completed' }
            ],
            aiMisleading: 'Laxatives, encourage oral intake and mobilisation alone.',
            aiAccurate: 'Antimicrobial cover, expedite CT AP. Possible diverticulitis - confirm staging with contrast CT, tailor therapy (uncomplicated Hinchey 1a vs complicated). Do not just discharge with laxatives.'
        }
    ];

    let currentCase = CASES[0];

    const aiResponseRegistry = {
        'Summarize patient history': function () {
            const c = currentCase;
            return (
                `**Patient Summary: ${c.name} (Case ${c.id})** — ${c.ageSex}, ${c.patientId}\n` +
                `\n**Presenting Complaint:** ${c.pc}\n` +
                `**Hx Presenting:** ${c.hxPc}\n` +
                `\n📋 **Key Background:**\n` +
                `• PMHx: ${c.pmhx}\n` +
                `• PSHx: ${c.pshx}\n` +
                `• SHx: ${c.shx}\n` +
                (c.gynhx && c.gynhx !== 'N/A' ? `• Gynae Hx: ${c.gynhx}\n` : '') +
                `• Allergies: ${c.allergies}\n` +
                `\n📊 **Vitals NOW:**\n` +
                c.vitals.map(v => `• ${v.label}: ${v.value}`).join('\n') +
                `\n\n🔬 **Exam findings:**\n` +
                `• General: ${c.examGeneral}\n` +
                `• Chest: ${c.examChest}\n` +
                `• Abdomen: ${c.examAbdomen}\n` +
                (c.examOther && c.examOther !== '—' ? `• Other: ${c.examOther}\n` : '') +
                `\n🏥 **Most Recent Visit:**\n` +
                `• Reason: ${c.lastVisit.reason}\n` +
                `• Diagnosis: ${c.lastVisit.diagnosis}\n` +
                `• Plan: ${c.lastVisit.treatment}\n` +
                `\n---\n💡 For this case, the system has stored two AI suggestions:\n` +
                `   ⚠️ Misleading (what the AI got WRONG): *${truncate(c.aiMisleading, 140)}*\n` +
                `   ✅ Accurate (ground truth): *${truncate(c.aiAccurate, 160)}*\n\n` +
                `Type "accurate" or "misleading" to see the full suggestion, or use the 4 quick chips above for broader analysis.`
            );
        },
        'Check for drug interactions': function () {
            const c = currentCase;
            return (
                `**Medication Review & Interactions** — Case ${c.id}: ${c.name}\n\n` +
                `**Current / Documented Medications:**\n` +
                c.meds.map((m, i) => `${i + 1}. ${m.name} (since ${m.date})`).join('\n') +
                `\n\n**Allergy Check:** Patient is documented allergic to: **${c.allergies}**.\n` +
                (c.allergies.toLowerCase().includes('penicillin')
                    ? '⚠️ Avoid all penicillin / ß-lactam agents unless desensitised. Cephalosporins & carbapenems risk cross-reactivity.\n'
                    : 'No drug-allergy red flags on current documented list. ✅\n') +
                `**Risk Analysis (by clinical context of Case ${c.id}):**\n` +
                `• Case ${c.id} diagnosis direction: **${truncate(c.lastVisit.diagnosis, 110)}**\n` +
                `• Ensure any new empiric therapy (antibiotics, analgesia, fluids) does not duplicate or potentiate current therapy. QT-prolonging combinations? — query list completeness for patient's undisclosed meds.\n` +
                `\n**Action:** Verify complete medication list including OTC/herbal. Use allergy-alert prescribing.`
            );
        },
        'Explain abnormal lab results': function () {
            const c = currentCase;
            const abn = c.labs.filter(l => l.status !== 'normal');
            return (
                `**Abnormal Labs** — Case ${c.id}: ${c.name}\n\n` +
                (abn.length === 0
                    ? 'No labs currently flagged abnormal in this prototype — but still review trends in context of presentation.'
                    : abn.map(l =>
                        `• **${l.test} = ${l.result}** (ref ${l.range}) — **${l.status.toUpperCase()}**\n` +
                        `  Context: ${labContextHint(l, c)}\n`
                    ).join('\n')) +
                `\n**Case-Specific Interpretation:**\n${truncate(c.lastVisit.diagnosis, 200)}\n\n` +
                `**Follow-up Plan:** Repeat trend with clinical response; check for complications outlined in last-visit treatment section. For definitive guidance on Case ${c.id}, use the quick "accurate / misleading" suggestion framework by typing those keywords.`
            );
        },
        'Suggest next steps': function () {
            const c = currentCase;
            return (
                `**Suggested Next Steps** — Case ${c.id}: ${c.name} (${c.ageSex})\n\n` +
                `**IMMEDIATE (hours):**\n` +
                `• ${truncate(c.lastVisit.treatment, 220)}\n\n` +
                `**GROUND-TRUTH (Accurate plan from case note):**\n✅ ${c.aiAccurate}\n\n` +
                `❌ **What the MISLEADING AI would wrongly suggest:** ${c.aiMisleading}\n\n` +
                `**Review Investigations done/to-do:**\n` +
                c.visits.slice(0, 3).map((v, i) => `${i + 1}. [${v.date}] ${v.detail} → ${v.ref} [${v.status}]`).join('\n') +
                `\n\nType **"accurate"** in chat to copy the exact case ground-truth plan, or **"misleading"** to see the pitfall.`
            );
        }
    };

    function truncate(s, n) {
        if (!s) return '';
        s = String(s);
        return s.length > n ? s.slice(0, n - 1) + '…' : s;
    }

    function labContextHint(l, c) {
        const t = l.test.toLowerCase();
        if (t.includes('wcc') || t.includes('wbc')) return 'Supports bacterial/inflammatory process (diverticular, abscess, perforation etc depending on case). Trend & correlate with temperature/HR.';
        if (t.includes('lactate') || t.includes('ph')) return 'Tissue perfusion / shock marker. Elevation → consider resuscitation + source control urgent.';
        if (t.includes('cr') || t.includes('urea') || t.includes('creatinine')) return 'Renal function: trend with fluids and pre/post insult. Prerenal vs intrinsic? NG losses/Hartmann/AAA context.';
        if (t.includes('lipase') || t.includes('amylase')) return 'Pancreatitis (3x ULN diagnostic). Trend q12-24h; correlate with imaging (gallstones vs. alcoholic).';
        if (t.includes('bilirubin') || t.includes('ggt') || t.includes('alp') || t.includes('alt')) return 'Cholestatic/hepatocellular picture — RUQ US needed (stones/CBD) + biliary tree assessment.';
        if (t.includes('hb') || t.includes('haemoglobin')) return 'Bleeding? Consider transfusion thresholds; active bleeding context (ectopic/AAA/boerhaave) drives urgent action.';
        if (t.includes('crp')) return 'Inflammation. Correlate with clinical severity + CT findings. Serial trends.';
        return 'Interpret in clinical context. Repeat trend.';
    }

    function generateGenericResponse(userMessage) {
        const q = userMessage.toLowerCase().trim();
        const c = currentCase;

        if (/^\s*accurate\s*$/.test(q)) {
            return `**Case ${c.id} — Accurate (Ground-truth) AI suggestion:**\n\n${c.aiAccurate}\n\nThis represents the evidence-correct / gold-standard next step for this clinical case. Compare this against any AI output for the user study.`;
        }
        if (/^\s*misleading\s*$/.test(q)) {
            return `**Case ${c.id} — Misleading AI suggestion (what an AI might get WRONG):**\n\n⚠️ ${c.aiMisleading}\n\nFor user-study analysis: participants would be expected to identify this as suboptimal (vs the "accurate" ground-truth suggestion).`;
        }
        if (q.includes('accurate')) {
            return `**Case ${c.id} accurate plan (ground truth):**\n\n✅ ${c.aiAccurate}`;
        }
        if (q.includes('mislead') || q.includes('wrong') || q.includes('bad ai')) {
            return `**Case ${c.id} misleading AI pitfall:**\n\n⚠️ ${c.aiMisleading}`;
        }
        if (q.includes('hello') || q.includes('hi ') || q.startsWith('hi') || q.startsWith('hey')) {
            return `👋 Hi! You're currently viewing **Case ${c.id}: ${c.name} (${c.ageSex})**.\n\nTry:\n• 📋 Summarize patient history\n• 💊 Check drug interactions\n• 🔬 Explain abnormal labs\n• 💡 Suggest next steps\n• Or type **accurate** / **misleading** to see the two AI comparison answers for this case.`;
        }
        if (q.includes('vital') || q.includes('blood pressure') || q.includes('bp') || q.includes('pulse') || q.includes('temp')) {
            return `**Current Vitals** — Case ${c.id}: ${c.name}\n\n` + c.vitals.map(v => `• ${v.label}: ${v.value}`).join('\n');
        }
        if (q.includes('allerg')) {
            return `**Allergies** — Case ${c.id}: ${c.name}\n\nDocumented: **${c.allergies}**.\n\nConsider allergy-specific antibiotic / analgesic alternatives when prescribing for this case (see "Check drug interactions" chip).`;
        }
        if (q.includes('diagnos') || q.includes('ddx') || q.includes('differential')) {
            return `**Top Diagnosis / Working Formulation** — Case ${c.id}\n\n**Leading:** ${c.problems[0].type}\n\n**Full Problem List:**\n${c.problems.map((p, i) => `${i + 1}. ${p.type} (${p.date})`).join('\n')}\n\nFor full management, type **accurate** (ground-truth plan) or 💡 Suggest next steps chip.`;
        }
        if (q.includes('medication') || q.includes('drug') || q.includes('meds')) {
            return `**Medications** — Case ${c.id}: ${c.name}\n\n` + c.meds.map((m, i) => `${i + 1}. ${m.name} · Started: ${m.date}`).join('\n');
        }
        return `Query received: **${userMessage}** for **Case ${c.id}: ${c.name} (${c.ageSex})**.\n\nBest try one of the 4 quick-action chips or type **accurate** / **misleading** to see the case's built-in comparison answers for the user study.`;
    }

    function formatMessageForDisplay(rawText) {
        const html = String(rawText)
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/• /g, '•&nbsp;&nbsp;');
        return html;
    }

    function getAiResponse(userMessage) {
        if (aiResponseRegistry[userMessage]) {
            return aiResponseRegistry[userMessage]();
        }
        return generateGenericResponse(userMessage);
    }

    function setText(el, text) {
        if (el) el.textContent = text == null || text === '' ? '—' : String(text);
    }

    function clear(el) {
        if (el) el.innerHTML = '';
    }

    function renderPersonalData() {
        const c = currentCase;
        const fields = {
            name: c.name,
            patientId: c.patientId,
            ageSex: c.ageSex,
            bloodGroup: c.bloodGroup,
            pc: c.pc,
            hxPc: c.hxPc,
            phone: c.phone,
            email: c.email,
            address: c.address
        };
        const host = document.getElementById('patientPersonalData');
        if (!host) return;
        host.querySelectorAll('[data-field]').forEach(node => {
            const key = node.getAttribute('data-field');
            if (fields[key] !== undefined) setText(node, fields[key]);
        });
    }

    function renderHistoryData() {
        const c = currentCase;
        const fields = {
            pmhx: c.pmhx,
            pshx: c.pshx,
            shx: c.shx,
            allergies: c.allergies,
            gynhx: c.gynhx
        };
        const host = document.getElementById('patientHistoryData');
        if (!host) return;
        host.querySelectorAll('[data-field]').forEach(node => {
            const key = node.getAttribute('data-field');
            if (fields[key] !== undefined) setText(node, fields[key]);
        });
    }

    function renderExamData() {
        const c = currentCase;
        const fields = {
            examGeneral: c.examGeneral,
            examChest: c.examChest,
            examAbdomen: c.examAbdomen,
            examOther: c.examOther
        };
        const host = document.getElementById('patientExamData');
        if (!host) return;
        host.querySelectorAll('[data-field]').forEach(node => {
            const key = node.getAttribute('data-field');
            if (fields[key] !== undefined) setText(node, fields[key]);
        });
    }

    function renderVitals() {
        const host = document.getElementById('vitalsList');
        if (!host) return;
        clear(host);
        currentCase.vitals.forEach(v => {
            const row = document.createElement('div');
            row.className = 'vital-item';
            row.innerHTML = `<span class="vital-label">${v.label}</span><span class="vital-value">${v.value}</span>`;
            host.appendChild(row);
        });
    }

    function renderTwoColTable(tbodyId, rows, dateAsColumn2) {
        const tbody = document.getElementById(tbodyId);
        if (!tbody) return;
        clear(tbody);
        rows.forEach(r => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.textContent = r.type;
            tr.appendChild(td1);
            if (dateAsColumn2) {
                const td2 = document.createElement('td');
                td2.textContent = r.date;
                tr.appendChild(td2);
            }
            tbody.appendChild(tr);
        });
    }

    function renderMedsTable() {
        const tbody = document.getElementById('medicationsTable');
        if (!tbody) return;
        clear(tbody);
        currentCase.meds.forEach(m => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.textContent = m.name;
            const td2 = document.createElement('td');
            td2.textContent = m.date;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
        });
    }

    function renderLabsTable() {
        const tbody = document.getElementById('labResultsTable');
        if (!tbody) return;
        clear(tbody);
        currentCase.labs.forEach(l => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.textContent = l.test;
            const td2 = document.createElement('td');
            td2.textContent = l.result;
            if (l.status === 'high') td2.className = 'result-red';
            else if (l.status === 'low') td2.className = 'result-red';
            else td2.className = 'result-green';
            const td3 = document.createElement('td');
            td3.textContent = l.range;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);
        });
    }

    function renderLastVisit() {
        const c = currentCase;
        const host = document.getElementById('lastVisitDetails');
        if (!host) return;
        host.querySelectorAll('[data-field]').forEach(node => {
            const f = node.getAttribute('data-field');
            if (f === 'reason') setText(node, c.lastVisit.reason);
            else if (f === 'diagnosis') setText(node, c.lastVisit.diagnosis);
            else if (f === 'treatment') setText(node, c.lastVisit.treatment);
        });
    }

    function renderAllVisits() {
        const tbody = document.getElementById('allVisitsTable');
        if (!tbody) return;
        clear(tbody);
        const combined = currentCase.visits.concat(currentCase.imaging || []);
        combined.forEach(v => {
            const tr = document.createElement('tr');
            const tdDate = document.createElement('td');
            tdDate.textContent = v.date;
            const tdDetail = document.createElement('td');
            tdDetail.textContent = v.detail;
            const tdRef = document.createElement('td');
            const dotClass = 'badge-dot badge-' + (v.refDot || 'blue');
            tdRef.innerHTML = `<span class="${dotClass}"></span> ${v.ref}`;
            const tdStatus = document.createElement('td');
            const st = document.createElement('span');
            st.className = 'status-tag status-' + (v.statusClass || 'completed');
            st.textContent = v.status;
            tdStatus.appendChild(st);
            tr.appendChild(tdDate);
            tr.appendChild(tdDetail);
            tr.appendChild(tdRef);
            tr.appendChild(tdStatus);
            tbody.appendChild(tr);
        });
    }

    function setActiveCaseUi(idNum) {
        const n = Number(idNum);
        document.querySelectorAll('.case-tab, .case-nav-item').forEach(el => {
            const val = Number(el.getAttribute('data-case'));
            el.classList.toggle('active', val === n);
        });
    }

    function applyCase(idNum, opts) {
        const n = Number(idNum);
        const found = CASES.find(c => c.id === n);
        if (!found) return;
        currentCase = found;
        setActiveCaseUi(n);

        renderPersonalData();
        renderHistoryData();
        renderExamData();
        renderVitals();
        renderTwoColTable('majorProblemsTable', found.problems, true);
        renderTwoColTable('medicalHistoryTable', found.history, true);
        renderMedsTable();
        renderLabsTable();
        renderLastVisit();
        renderAllVisits();

        if (!(opts && opts.silent) && window.__ehrChat) {
            const state = window.__ehrChat;
            clear(state.chatMessages);
            hideTyping(state);
            const hello = `Hi! You've switched to **Case ${found.id}: ${found.name} (${found.ageSex})**.\n\nLeading problem: ${found.problems[0].type}.\n\nI can summarize their history, check drug interactions, explain abnormal labs, or suggest next steps. You can also type **accurate** or **misleading** to reveal this case's built-in user-study comparison answers.`;
            addMessage(state, hello, 'ai');
        }
    }

    let __ehrChatReady = false;

    function addMessage(state, text, role) {
        const chatMessages = state.chatMessages;
        if (!chatMessages) return;
        const wrapper = document.createElement('div');
        wrapper.className = 'message message-' + role;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar ' + role;
        if (role === 'ai') {
            avatar.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle></svg>`;
        } else {
            avatar.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
        }

        const content = document.createElement('div');
        content.className = 'message-content';
        const mt = document.createElement('div');
        mt.className = 'message-text';
        mt.innerHTML = formatMessageForDisplay(text);
        content.appendChild(mt);
        wrapper.appendChild(avatar);
        wrapper.appendChild(content);
        chatMessages.appendChild(wrapper);
        scrollChatToBottom(state);
    }

    function scrollChatToBottom(state) {
        if (state && state.chatMessages) state.chatMessages.scrollTop = state.chatMessages.scrollHeight;
    }

    function showTyping(state) {
        if (state && state.typingIndicator) state.typingIndicator.style.display = 'flex';
        scrollChatToBottom(state);
    }
    function hideTyping(state) {
        if (state && state.typingIndicator) state.typingIndicator.style.display = 'none';
    }

    function sendMessage(state, text) {
        if (!text || !text.trim()) return;
        const msg = String(text).trim();
        addMessage(state, msg, 'user');
        if (state.aiInput) state.aiInput.value = '';
        if (state.aiSendBtn) state.aiSendBtn.disabled = true;

        showTyping(state);
        const thinkTime = 650 + Math.random() * 850;
        setTimeout(() => {
            hideTyping(state);
            const reply = getAiResponse(msg);
            addMessage(state, reply, 'ai');
            if (state.aiSendBtn) state.aiSendBtn.disabled = false;
            if (state.aiInput) state.aiInput.focus();
        }, thinkTime);
    }

    document.addEventListener('DOMContentLoaded', function () {
        const chatMessages = document.getElementById('chatMessages');
        const aiInput = document.getElementById('aiInput');
        const aiSendBtn = document.getElementById('aiSendBtn');
        const typingIndicator = document.getElementById('typingIndicator');
        const chips = document.querySelectorAll('.chip');
        const toggleAiPanel = document.getElementById('toggleAiPanel');
        const aiPanel = document.getElementById('aiPanel');
        const aiFab = document.getElementById('aiFab');

        const state = {
            chatMessages: chatMessages,
            aiInput: aiInput,
            aiSendBtn: aiSendBtn,
            typingIndicator: typingIndicator
        };
        window.__ehrChat = state;

        applyCase(1, { silent: true });

        if (aiSendBtn) {
            aiSendBtn.addEventListener('click', () => sendMessage(state, aiInput ? aiInput.value : ''));
        }
        if (aiInput) {
            aiInput.addEventListener('keydown', e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(state, aiInput.value);
                }
            });
        }
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const q = chip.getAttribute('data-query');
                if (q) sendMessage(state, q);
            });
        });

        if (toggleAiPanel) {
            toggleAiPanel.addEventListener('click', e => {
                e.stopPropagation();
                if (aiPanel) aiPanel.classList.toggle('collapsed');
            });
        }
        if (aiPanel) {
            aiPanel.addEventListener('click', () => {
                if (aiPanel.classList.contains('collapsed')) aiPanel.classList.remove('collapsed');
            });
        }
        if (aiFab) {
            aiFab.addEventListener('click', () => {
                if (aiPanel) aiPanel.classList.add('mobile-open');
                aiFab.style.display = 'none';
            });
        }

        function updateResponsiveUI() {
            if (window.innerWidth <= 600) {
                if (!aiPanel || !aiPanel.classList.contains('mobile-open')) {
                    if (aiFab) aiFab.style.display = 'flex';
                }
            } else {
                if (aiFab) aiFab.style.display = 'none';
                if (aiPanel) aiPanel.classList.remove('mobile-open');
            }
        }
        window.addEventListener('resize', updateResponsiveUI);
        updateResponsiveUI();

        document.querySelectorAll('.case-tab, .case-nav-item').forEach(el => {
            el.addEventListener('click', () => {
                const n = Number(el.getAttribute('data-case'));
                if (Number.isFinite(n)) applyCase(n);
            });
        });

        const linkBtns = document.querySelectorAll('.link-btn');
        linkBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                sendMessage(state, `View / expand: ${btn.textContent.trim()} (placeholder for drill-down in the user study EHR prototype).`);
            });
        });

        const exportBtn = document.querySelector('.btn-outline');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                alert(`Export — in production this would export Case ${currentCase.id} (${currentCase.name}) EHR to PDF / C-CDA / HL7 FHIR.`);
            });
        }

        scrollChatToBottom(state);
    });
})();
