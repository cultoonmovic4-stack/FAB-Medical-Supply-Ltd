/**
 * Authoritative Clinical Equipment Knowledge Base for FAB Medical Supplies Ltd.
 * 
 * Provides clinically accurate, technically sound medical equipment knowledge
 * for the Product Detail view:
 * - Operating Principles ("How It Works")
 * - Clinical Indications ("What It Is Used For")
 * - Key Features with understated technical icons
 * - Verified Structured Specifications
 */

// Category and product-specific clinical information dictionary
const equipmentKnowledge = {
  // 1. CT Scanner
  'ct-scanner': {
    productType: 'Computed Tomography (CT) Scanner',
    application: 'Multi-Slice Cross-Sectional Diagnostic Imaging',
    clinicalUse: 'Diagnostic Radiology, Trauma Evaluation, Oncology Staging',
    manufacturer: 'Diagnostic Imaging Partner (FAB Verified Supply)',
    overview: 'The Computed Tomography (CT) Scanner is an advanced diagnostic imaging system designed to provide high-resolution, volumetric anatomical imaging. It enables rapid acquisition of cross-sectional slices across all bodily regions with exceptional contrast resolution and spatial clarity.',
    howItWorks: 'The system utilizes a high-frequency X-ray tube mounted on a balanced rotating gantry opposite a curved solid-state detector array. As the gantry rotates rapidly around the patient, fan-beam X-ray pulses attenuate through bodily tissue. Sophisticated computational algorithms reconstruct the resulting attenuation profiles into 2D axial tomograms and 3D volumetric clinical reconstructions.',
    whatItIsUsedFor: [
      'Rapid head and neurovascular trauma evaluation including acute intracranial hemorrhage',
      'Whole-body contrast-enhanced oncology staging and anatomical lesion monitoring',
      'Thoracic high-resolution evaluation for pulmonary embolism and interstitial lung disease',
      'Complex musculoskeletal and polytrauma skeletal fracture assessment',
    ],
    features: [
      {
        title: 'Multi-Slice Diagnostic Clarity',
        description: 'Delivers rapid sub-millimeter axial slice reconstruction for precise diagnostic evaluations.',
        icon: 'scan',
      },
      {
        title: 'Low-Dose Radiation Protocol',
        description: 'Employs intelligent beam filtering and anatomical modulation to minimize patient exposure.',
        icon: 'shield',
      },
      {
        title: 'Continuous High-Speed Gantry',
        description: 'Engineered for smooth mechanical rotation with optimized thermal heat dissipation.',
        icon: 'refresh',
      },
      {
        title: 'DICOM 3.0 Clinical Integration',
        description: 'Seamless network interoperability with hospital PACS workstations and diagnostic archives.',
        icon: 'network',
      },
    ],
    specifications: [
      { label: 'Equipment Classification', value: 'Diagnostic Radiology Imaging System' },
      { label: 'Gantry Configuration', value: 'High-speed continuous slip-ring rotation' },
      { label: 'Patient Couch Capacity', value: 'Up to 205 kg with motorized horizontal & vertical traverse' },
      { label: 'Bore Aperture', value: '70 cm clinical patient aperture' },
      { label: 'Network Interoperability', value: 'Full DICOM 3.0 protocol compliant (PACS / RIS / HIS)' },
      { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
    ],
  },

  // 2. Ultrasound Scanner
  'ultrasound-scanner': {
    productType: 'Diagnostic Ultrasound Scanner (Trolley System)',
    application: 'Real-Time Non-Invasive B-Mode & M-Mode Imaging',
    clinicalUse: 'Abdominal, Obstetrics, Gynecology, Small Parts & Cardiology',
    manufacturer: 'Clinical Sonography Partner (FAB Verified Supply)',
    overview: 'The Ultrasound Scanner is a mobile clinical diagnostic console designed for high-resolution non-invasive imaging across outpatient clinics, imaging suites, and point-of-care departments. It delivers real-time anatomical visualization with intuitive workflow controls.',
    howItWorks: 'Piezoelectric crystals within connected multi-frequency probes emit high-frequency acoustic waves into human tissue. Acoustic impedance differentials between anatomical structures reflect acoustic echoes back to the transducer, which the digital signal processor converts into real-time grayscale B-mode images.',
    whatItIsUsedFor: [
      'Comprehensive obstetric gestational age calculation and fetal anatomy scans',
      'Abdominal diagnostic surveys of liver, gallbladder, kidneys, and spleen',
      'Pelvic gynecological diagnostic assessments and bladder volume monitoring',
      'Musculoskeletal soft tissue and superficial organ examinations',
    ],
    features: [
      {
        title: 'Multi-Frequency Probe Support',
        description: 'Accommodates convex, linear, and transvaginal acoustic transducers for broad clinical utility.',
        icon: 'probe',
      },
      {
        title: 'High-Definition LCD Console',
        description: 'Equipped with an adjustable medical-grade monitor with anti-glare wide-angle viewing.',
        icon: 'monitor',
      },
      {
        title: 'Digital Speckle Reduction',
        description: 'Proprietary spatial compounding filters minimize acoustic artifacting and sharpen tissue borders.',
        icon: 'filter',
      },
      {
        title: 'Cine-Loop & Digital Archiving',
        description: 'Instant multi-frame playback with integrated USB image export and patient archiving.',
        icon: 'database',
      },
    ],
    specifications: [
      { label: 'Equipment Classification', value: 'Diagnostic Medical Sonography Console' },
      { label: 'Display Console', value: 'High-resolution adjustable LED/LCD clinical monitor' },
      { label: 'Active Transducer Ports', value: 'Multiple active probe connectors with electronic switching' },
      { label: 'Scanning Modalities', value: 'B, 2B, 4B, B/M, M-Mode' },
      { label: 'Power Requirements', value: '100–240 V AC, 50/60 Hz stable hospital mains' },
      { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
    ],
  },

  // 3. Color Doppler Ultrasound
  'color-doppler-ultrasound': {
    productType: 'Digital Color Doppler Diagnostic Ultrasound System',
    application: 'Hemodynamic Blood Flow & Echocardiographic Evaluation',
    clinicalUse: 'Vascular Surgery, Cardiology, High-Risk Obstetrics, Radiology',
    manufacturer: 'Advanced Sonography Partner (FAB Verified Supply)',
    overview: 'The Color Doppler Ultrasound Scanner is a specialized clinical imaging console that superimposes real-time hemodynamic flow vectors onto standard grayscale anatomical tissue structures, enabling accurate non-invasive vascular and cardiac diagnostics.',
    howItWorks: 'Utilizes the acoustic Doppler shift principle: when ultrasonic sound waves strike moving erythrocytes (red blood cells), the reflected frequency shifts proportionally to flow velocity and direction. Autocorrelation processors calculate these frequency differentials and color-code flow vectors in real time.',
    whatItIsUsedFor: [
      'Peripheral arterial and deep vein thrombosis (DVT) diagnostic assessment',
      'Carotid artery stenosis and cerebral vascular flow velocity measurements',
      'Transthoracic echocardiography for cardiac valve function and ejection fraction',
      'Maternal-fetal umbilical and middle cerebral artery resistance indices',
    ],
    features: [
      {
        title: 'Triplex Mode Imaging',
        description: 'Simultaneous synchronized B-mode, Color Flow, and Spectral Pulsed-Wave Doppler display.',
        icon: 'pulse',
      },
      {
        title: 'Continuous Wave Doppler',
        description: 'Captures high-velocity cardiac blood flow without spectral aliasing distortion.',
        icon: 'activity',
      },
      {
        title: 'Tissue Harmonic Imaging',
        description: 'Leverages non-linear acoustic harmonics to improve signal-to-noise ratio in difficult patients.',
        icon: 'wave',
      },
      {
        title: 'Ergonomic Mobility Chassis',
        description: 'Counterbalanced articulating display arm with four hospital-grade locking castor wheels.',
        icon: 'mobility',
      },
    ],
    specifications: [
      { label: 'Equipment Classification', value: 'Color Doppler Diagnostic Ultrasound' },
      { label: 'Doppler Modalities', value: 'Color Doppler (CFM), Power Doppler (PDI), PW, CW, Directional PDI' },
      { label: 'Dynamic Range', value: 'Adjustable wide-band dynamic range (>150 dB)' },
      { label: 'Connectivity', value: 'DICOM 3.0, Ethernet RJ-45, High-Speed USB 3.0' },
      { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
    ],
  },

  // 4. Patient Monitor ICU
  'patient-monitor-icu': {
    productType: 'Intensive Care Multi-Parameter Patient Monitor',
    application: 'Continuous Real-Time Vital Signs Hemodynamic Surveillance',
    clinicalUse: 'Intensive Care Unit (ICU), High Dependency Unit (HDU), Recovery',
    manufacturer: 'Critical Care Monitoring Partner (FAB Verified Supply)',
    overview: 'The ICU Patient Monitor is an essential clinical surveillance instrument designed for the continuous, uninterrupted monitoring of critically ill patients. It provides clear, configurable waveform tracings and numerical vital sign data with programmable audible and visual clinical alarm boundaries.',
    howItWorks: 'Detects biological physiological signals through specialized transcutaneous sensors, including silver/silver-chloride ECG leads, optical pulse oximeter finger probes, pneumatic oscillometric blood pressure cuffs, and thermistor temperature probes. Embedded microcontrollers filter bio-noise and compute live cardiac rates, perfusion indexes, and oxygenation levels.',
    whatItIsUsedFor: [
      'Continuous 3-lead or 5-lead electrocardiography (ECG) rhythm surveillance',
      'Non-invasive blood pressure (NIBP) automated cyclic interval measurement',
      'Continuous arterial blood oxygen saturation (SpO2) and plethysmogram monitoring',
      'Core body temperature, respiratory rate, and optional invasive pressure monitoring',
    ],
    features: [
      {
        title: 'Multi-Parameter Waveform Display',
        description: 'High-contrast medical color screen with up to 8 configurable simultaneous physiological waveforms.',
        icon: 'monitor',
      },
      {
        title: 'Multi-Tiered Alarm Hierarchy',
        description: 'Audible and 360-degree flashing visual alarm alerts categorized by physiological urgency.',
        icon: 'bell',
      },
      {
        title: 'Internal Battery Backup',
        description: 'Heavy-duty rechargeable lithium battery enables continuous monitoring during in-hospital patient transport.',
        icon: 'battery',
      },
      {
        title: 'Extended Trend Data Memory',
        description: 'Stores up to 120 hours of detailed numerical and graphical physiological trend history.',
        icon: 'history',
      },
    ],
    specifications: [
      { label: 'Equipment Classification', value: 'Intensive Care Multi-Parameter Vital Signs Monitor' },
      { label: 'Standard Parameters', value: 'ECG, NIBP, SpO2, Pulse Rate, Respiration Rate, Dual-Channel Temp' },
      { label: 'Display Size', value: '12.1-inch color TFT medical LCD with anti-glare treatment' },
      { label: 'Battery Runtime', value: 'Integrated lithium-ion backup (>4 hours operating time)' },
      { label: 'Clinical Standards', value: 'Defibrillation proof and electro-surgical interference protection' },
      { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
    ],
  },

  // 5. Oxygen Concentrator
  'oxygen-concentrator': {
    productType: 'Medical-Grade Molecular Sieve Oxygen Concentrator',
    application: 'Continuous High-Purity Supplemental Oxygen Generation',
    clinicalUse: 'Emergency, Ward Care, Pediatric Units, Post-Operative Recovery',
    manufacturer: 'Respiratory Medical Partner (FAB Verified Supply)',
    overview: 'The Medical Oxygen Concentrator is a continuous respiratory therapy unit that extracts medical-grade oxygen directly from ambient room air, providing a safe, reliable, and cost-effective alternative to pressurized oxygen cylinders for clinical care facilities.',
    howItWorks: 'Operates on Pressure Swing Adsorption (PSA) technology. Ambient air is drawn through high-efficiency particulate air filters, compressed, and directed into dual zeolite molecular sieve beds. Under pressure, zeolite minerals selectively adsorb atmospheric nitrogen molecules, allowing high-purity medical oxygen (93% ± 3%) to flow through to the delivery regulator.',
    whatItIsUsedFor: [
      'Supplemental oxygenation for patients suffering from acute hypoxia or respiratory distress',
      'Supportive oxygen therapy in chronic obstructive pulmonary disease (COPD) management',
      'Pediatric and neonatal pneumonia stabilization in regional hospital wards',
      'Emergency supplementary oxygen supply during centralized gas distribution outages',
    ],
    features: [
      {
        title: 'Continuous High Flow Output',
        description: 'Delivers steady, adjustable flow rates up to 10 liters per minute with consistent purity.',
        icon: 'wind',
      },
      {
        title: 'Integrated Oxygen Purity Sensor',
        description: 'Continuous ultrasonic sensor verifies oxygen concentration above 90% in real time.',
        icon: 'gauge',
      },
      {
        title: 'Low Operating Sound Level',
        description: 'Precision acoustic insulation ensures quiet operation conducive to patient ward recovery.',
        icon: 'volume',
      },
      {
        title: 'Heavy-Duty Industrial Compressor',
        description: 'Engineered for continuous 24/7 clinical operation with thermal overload safety protection.',
        icon: 'cpu',
      },
    ],
    specifications: [
      { label: 'Equipment Classification', value: 'Stationary Medical Oxygen Generator' },
      { label: 'Oxygen Concentration', value: '93% ± 3% across entire flow spectrum' },
      { label: 'Flow Rate Range', value: '0.5 to 10 L/min adjustable via calibrated flowmeter' },
      { label: 'Outlet Pressure', value: '0.04 to 0.07 MPa clinical delivery pressure' },
      { label: 'Filtration System', value: 'Multi-stage coarse air intake filter, fine particle filter, bacteria filter' },
      { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
    ],
  },

  // 6. Autoclave Benchtop
  'autoclave-benchtop': {
    productType: 'Class B High-Pressure Benchtop Steam Sterilizer',
    application: 'Pressurized Saturated Steam Autoclave Sterilization',
    clinicalUse: 'Dental Clinics, Minor Surgery Theatres, Laboratories, OPD',
    manufacturer: 'Sterilization Technology Partner (FAB Verified Supply)',
    overview: 'The Benchtop Autoclave is a compact, high-precision Class B steam sterilizer engineered for the complete microbial eradication of surgical instruments, hollow lumens, dental handpieces, and heat-resistant medical apparatus.',
    howItWorks: 'Employs a fractionated pre-vacuum air removal pump to evacuate ambient air from the sealed pressure chamber, ensuring complete penetration of saturated steam into porous and hollow instrument loads. The chamber maintains pressurized saturated steam at 134°C or 121°C for a validated duration, followed by post-vacuum drying.',
    whatItIsUsedFor: [
      'Sterilization of wrapped and unwrapped surgical metal instrument trays',
      'Dental handpieces, burrs, orthodontic pliers, and surgical extraction kits',
      'Laboratory microbiological glassware, pipettes, and heat-stable media preparation',
      'Hospital dressing packs, swabs, and minor surgical procedure sets',
    ],
    features: [
      {
        title: 'Fractionated Pre-Vacuum Pump',
        description: 'Removes air pockets from complex hollow instruments for 100% steam contact.',
        icon: 'vacuum',
      },
      {
        title: 'Microprocessor Cycle Automation',
        description: 'Pre-programmed validated cycles for solid, hollow, porous, and liquid sterilizing.',
        icon: 'cpu',
      },
      {
        title: 'Integrated Thermal Micro-Printer',
        description: 'Automatically records cycle time, temperature, and pressure for sterilization compliance.',
        icon: 'printer',
      },
      {
        title: 'Dual Safety Interlock Door',
        description: 'Electronic and mechanical pressure sensors prevent door opening while pressurized.',
        icon: 'lock',
      },
    ],
    specifications: [
      { label: 'Sterilizer Classification', value: 'EN 13060 Class B Hospital-Grade Autoclave' },
      { label: 'Chamber Material', value: 'Medical-grade 304/316 seamless stainless steel' },
      { label: 'Operating Temperatures', value: '121°C (unwrapped/liquid) and 134°C (rapid wrapped)' },
      { label: 'Drying System', value: 'Deep vacuum thermal drying with residual humidity < 0.2%' },
      { label: 'Safety Protections', value: 'Over-pressure safety relief valve, thermal cutoff fuse, dual door locks' },
      { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
    ],
  },

  // 6. Blood Pressure Monitors
  'blood-pressure-monitors': {
    productType: 'Diagnostic Blood Pressure Monitor (Aneroid / Digital)',
    application: 'Non-Invasive Arterial Blood Pressure Measurement (NIBP)',
    clinicalUse: 'Outpatient Consultations, Inpatient Wards, Emergency Triage',
    manufacturer: 'Clinical Diagnostic Instruments (FAB Verified Supply)',
    overview: 'The Blood Pressure Monitor is a clinical diagnostic instrument engineered for precise, rapid, and repeatable non-invasive measurement of systolic and diastolic blood pressure across adult and pediatric patients.',
    howItWorks: 'Utilizes precision inflatable cuffs coupled with a sensitive aneroid gauge mechanism or high-accuracy digital oscillometric pressure transducer to detect arterial pulse wave dynamics and acoustic Korotkoff sounds, yielding validated systolic and diastolic pressure readings.',
    whatItIsUsedFor: [
      'Routine outpatient clinical consultations and vital sign screenings',
      'Hypertension screening, clinical diagnosis, and therapeutic management',
      'Emergency department triage and patient hemodynamic monitoring',
      'Pre-operative evaluation and bedside post-procedural monitoring',
    ],
    features: [
      {
        title: 'Clinical Measurement Precision',
        description: 'Engineered and calibrated to deliver validated readings within ±3 mmHg.',
        icon: 'pulse',
      },
      {
        title: 'Multi-Size Cuff Compatibility',
        description: 'Supports standard adult, large adult, and pediatric hook-and-loop cuffs.',
        icon: 'shield',
      },
      {
        title: 'Shock-Resistant Housing',
        description: 'Constructed with impact-resistant casing suitable for high-traffic clinics.',
        icon: 'check',
      },
      {
        title: 'Clear High-Contrast Display',
        description: 'Features large, legible dial graduation or backlit digital LCD readout.',
        icon: 'monitor',
      },
    ],
    specifications: [
      { label: 'Equipment Classification', value: 'Non-Invasive Blood Pressure (NIBP) Diagnostic Instrument' },
      { label: 'Measurement Range', value: 'Systolic: 60–255 mmHg | Diastolic: 30–200 mmHg | Pulse: 40–200 bpm' },
      { label: 'Pressure Accuracy', value: '±3 mmHg across full calibrated clinical scale' },
      { label: 'Cuff Construction', value: 'Latex-free antimicrobial nylon with secure hook-and-loop closure' },
      { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
    ],
  },

  // 7. Sphygmomanometer
  'sphygmomanometer': {
    productType: 'Clinical Aneroid Sphygmomanometer',
    application: 'Manual Auscultatory Blood Pressure Measurement',
    clinicalUse: 'Outpatient Clinics, Doctor Consultation Rooms, Ward Triage',
    manufacturer: 'Diagnostic Instrument Partner (FAB Verified Supply)',
    overview: 'The Sphygmomanometer is a standard clinical manual blood pressure instrument designed for reliable auscultatory systolic and diastolic pressure assessment in hospital and clinical settings.',
    howItWorks: 'A calibrated inflation cuff compresses the brachial artery while the clinician listens for Korotkoff sounds through a stethoscope, reading exact pressure thresholds from a precision aneroid manometer gauge.',
    whatItIsUsedFor: [
      'Gold-standard manual arterial blood pressure verification',
      'General practice patient physical examination and health screenings',
      'Emergency medical triage and hemodynamic assessment',
      'Cardiovascular risk factor evaluation and treatment follow-up',
    ],
    features: [
      {
        title: 'Precision Aneroid Gauge',
        description: 'Certified manometer mechanism with clear 300 mmHg dial graduations.',
        icon: 'pulse',
      },
      {
        title: 'Ergonomic Inflation Bulb',
        description: 'Ribbed latex-free rubber bulb with fine-control chromium air release valve.',
        icon: 'refresh',
      },
      {
        title: 'Durable Washable Cuff',
        description: 'Constructed from heavy-duty nylon fabric resistant to routine clinic wear.',
        icon: 'shield',
      },
      {
        title: 'Protective Storage Case',
        description: 'Supplied with a zippered travel case for secure mobile clinic transport.',
        icon: 'check',
      },
    ],
    specifications: [
      { label: 'Equipment Classification', value: 'Manual Aneroid Sphygmomanometer (EN ISO 81060-1)' },
      { label: 'Pressure Scale', value: '0 to 300 mmHg with 2 mmHg interval markings' },
      { label: 'Air Valve', value: 'Spring-loaded precision thumb valve for controlled deflation' },
      { label: 'Arm Circumference', value: 'Standard adult cuff 22–32 cm (additional sizes optional)' },
      { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
    ],
  },
};

/**
 * Fallback clinical knowledge generator based on category and product metadata
 */
function getGenericKnowledge(product) {
  const cat = product.categoryId;
  const name = product.name;

  if (cat === 'laboratory') {
    return {
      productType: `${name} (Clinical Laboratory Standard)`,
      application: 'Diagnostic Laboratory Sample Preparation & Analysis',
      clinicalUse: 'Clinical Pathology, Microbiology, Hematology, Biochemistry',
      overview: `The ${name} is a high-precision medical laboratory instrument engineered for routine and specialized diagnostic clinical workflows in pathology and testing laboratories across healthcare facilities.`,
      howItWorks: `Engineered using laboratory-grade optical, thermal, or mechanical drive systems to deliver consistent, reproducible diagnostic testing and analytical sample processing in accordance with national clinical laboratory standards.`,
      whatItIsUsedFor: [
        'Routine diagnostic specimen evaluation and pathology sample processing',
        'Standardized clinical testing in hospital laboratories and referral centers',
        'Quality-controlled separation, magnification, or containment of diagnostic specimens',
        'Support of infection screening and chronic disease monitoring protocols',
      ],
      features: [
        {
          title: 'High-Accuracy Calibration',
          description: 'Factory calibrated to maintain high repeatability and reproducible diagnostic outcomes.',
          icon: 'check',
        },
        {
          title: 'Corrosion-Resistant Chassis',
          description: 'Constructed with chemical-resistant materials suitable for hospital laboratory disinfectant wipe-down.',
          icon: 'shield',
        },
        {
          title: 'Low Acoustic Emission',
          description: 'Engineered for smooth, quiet operational runs within busy clinical testing environments.',
          icon: 'volume',
        },
        {
          title: 'Ergonomic Benchtop Footprint',
          description: 'Optimized dimensional layout to conserve premium laboratory workbench surface area.',
          icon: 'maximize',
        },
      ],
      specifications: [
        { label: 'Equipment Classification', value: 'Clinical Laboratory Diagnostic Apparatus' },
        { label: 'Application Department', value: 'Pathology, Microbiology & Clinical Hematology' },
        { label: 'Structural Build', value: 'Chemical-resistant medical grade alloy and polymer casing' },
        { label: 'Operating Environment', value: '15°C to 35°C hospital laboratory ambient standard' },
        { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
      ],
    };
  }

  if (cat === 'theatre-room') {
    return {
      productType: `${name} (Surgical Operating Theatre Standard)`,
      application: 'Intraoperative Surgical Care & Clinical Intervention',
      clinicalUse: 'General Surgery, Orthopedics, Obstetrics, Emergency Theatres',
      overview: `The ${name} is an essential operating theatre system engineered to support surgical teams during sterile intraoperative procedures, prioritizing patient safety, ergonomics, and sterile boundary compliance.`,
      howItWorks: `Operates utilizing precision electro-mechanical or surgical-grade mechanical engineering designed for sterile theatre durability, intuitive intraoperative adjustment, and compatibility with hospital theatre hygiene standards.`,
      whatItIsUsedFor: [
        'Intraoperative patient positioning and sterile surgical field maintenance',
        'Surgical support across elective, specialized, and emergency trauma procedures',
        'Hospital theatre integration compliant with national surgical safety protocols',
        'Reliable operational performance throughout high-volume surgical operating schedules',
      ],
      features: [
        {
          title: 'Sterile Theatre Compliance',
          description: 'Seamless surfaces and surgical-grade stainless materials resist fluid ingress and harsh sterilants.',
          icon: 'shield',
        },
        {
          title: 'Intuitive Operational Controls',
          description: 'Ergonomic controls allow surgical teams to perform rapid intraoperative adjustments safely.',
          icon: 'sliders',
        },
        {
          title: 'Fail-Safe Mechanical Backups',
          description: 'Incorporates redundant safety systems to protect patient stability at all times.',
          icon: 'lock',
        },
        {
          title: 'Robust Castor / Base Stability',
          description: 'Heavy stable footprint prevents tilting and movement during complex clinical procedures.',
          icon: 'anchor',
        },
      ],
      specifications: [
        { label: 'Equipment Classification', value: 'Hospital Surgical Operating Suite Equipment' },
        { label: 'Application Department', value: 'Operating Theatre & Surgical Recovery' },
        { label: 'Chassis Material', value: 'Medical-grade 304 stainless steel and antimicrobial coatings' },
        { label: 'Clinical Standards', value: 'Operating theatre sterile environment compatible' },
        { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
      ],
    };
  }

  if (cat === 'opd-consultation') {
    return {
      productType: `${name} (Diagnostic & Clinical Consultation)`,
      application: 'Clinical Examination, Patient Triage & Outpatient Diagnostics',
      clinicalUse: 'Outpatient Clinics, Doctor Consultation Rooms, General Practice',
      overview: product.summary || `The ${name} is a precision diagnostic and clinical examination instrument supplied by FAB Medical Supplies Ltd. for general practitioners, outpatient consultation suites, and community health centers.`,
      howItWorks: `Engineered for clinical reliability, allowing healthcare professionals to conduct non-invasive patient assessment, diagnostic screening, or routine physical examination with high repeatability.`,
      whatItIsUsedFor: [
        'Routine outpatient clinical consultations and vital sign screenings',
        'Physical diagnosis, patient screening, and health assessment',
        'Outpatient procedural support and triage evaluation',
        'Primary healthcare delivery across public and private clinics',
      ],
      features: [
        {
          title: 'Diagnostic Reliability',
          description: 'Calibrated to international medical device standards for consistent diagnostic outcomes.',
          icon: 'check',
        },
        {
          title: 'Hygienic Wipe-Down Finish',
          description: 'Manufactured with clinical-grade materials that withstand regular chemical disinfection.',
          icon: 'shield',
        },
        {
          title: 'Ergonomic Clinical Design',
          description: 'Engineered for clinician comfort and intuitive handling during patient consultation.',
          icon: 'tool',
        },
        {
          title: 'Compact Clinic Footprint',
          description: 'Space-efficient format optimized for high-volume outpatient consultation rooms.',
          icon: 'maximize',
        },
      ],
      specifications: [
        { label: 'Equipment Classification', value: 'Outpatient Diagnostic & Examination Apparatus' },
        { label: 'Application Department', value: 'Outpatient Department (OPD) & Consultation' },
        { label: 'Clinical Standards', value: 'Certified for hospital, health centre, and clinic utility' },
        { label: 'Disinfection Compatibility', value: 'Standard hospital-grade wipe-down disinfectants' },
        { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
      ],
    };
  }

  if (cat === 'hospital-furniture') {
    return {
      productType: `${name} (Hospital Ward & Clinical Furniture)`,
      application: 'Patient Positioning, Examination, Mobility & Ward Comfort',
      clinicalUse: 'Inpatient Wards, Recovery Rooms, Maternity & Patient Rooms',
      overview: `The ${name} is durable medical ward and hospital furniture manufactured to withstand heavy clinical duty cycles while ensuring optimal patient comfort and caregiver ergonomics.`,
      howItWorks: `Constructed from heavy-gauge tubular steel and medical-grade upholstery engineered to provide stable mechanical support, adjustable patient articulation, and complete resistance to medical hospital disinfectants.`,
      whatItIsUsedFor: [
        'Inpatient ward accommodation, safe recovery, and patient transfer',
        'Patient positioning and comfort during clinical procedures',
        'Ergonomic clinical support for healthcare workers during patient care',
        'Hygienic, easy-to-sanitize patient support within public and private health facilities',
      ],
      features: [
        {
          title: 'High-Tensile Steel Frame',
          description: 'Epoxy powder-coated tubular steel framework resists corrosion, impacts, and heavy loads.',
          icon: 'shield',
        },
        {
          title: 'Antimicrobial Medical Upholstery',
          description: 'Seamless, flame-retardant vinyl surface cleans easily with standard hospital disinfectants.',
          icon: 'droplet',
        },
        {
          title: 'Smooth Mechanical Articulation',
          description: 'Counterbalanced manual or gas-spring adjustment mechanisms enable rapid positioning.',
          icon: 'refresh',
        },
        {
          title: 'Heavy Safe Working Load',
          description: 'Engineered and load-tested to comfortably support patient weights up to 180 kg.',
          icon: 'check',
        },
      ],
      specifications: [
        { label: 'Equipment Classification', value: 'Hospital Ward & Clinic Infrastructure' },
        { label: 'Frame Construction', value: 'Heavy-gauge steel with antimicrobial epoxy coating' },
        { label: 'Surface Treatment', value: 'Disinfectant, blood, and fluid repellent upholstery' },
        { label: 'Mobility & Floor Care', value: 'Non-marking protective floor bumpers or locking castors' },
        { label: 'Supply & Verification', value: 'Procured and verified through FAB Medical Supplies Ltd.' },
      ],
    };
  }

  // Generic fallback for any other clinical equipment
  return {
    productType: `${name} (Clinical Medical Specification)`,
    application: 'Clinical Departmental Healthcare Infrastructure',
    clinicalUse: product.categoryName || 'Hospital & Clinical Care',
    overview: product.summary || `The ${name} is a verified clinical healthcare equipment system procured and supplied by FAB Medical Supplies Ltd. for hospitals, clinics, and medical facilities across Uganda.`,
    howItWorks: `Operates in accordance with standardized international clinical specifications to deliver safe, reliable diagnostic or supportive healthcare utility in modern healthcare delivery contexts.`,
    whatItIsUsedFor: [
      `Clinical healthcare delivery within ${product.categoryName}`,
      'Routine diagnostic support or patient care in accredited medical institutions',
      'Integration into hospital infrastructure and specialty clinical workflows',
      'Safe, compliant clinical performance verified against importation standards',
    ],
    features: [
      {
        title: 'Clinical Grade Reliability',
        description: 'Built to international medical manufacturing standards for dependable healthcare service.',
        icon: 'check',
      },
      {
        title: 'Hospital Disinfectant Resistant',
        description: 'Treated with antimicrobial, easily sanitized surfaces suitable for infection control.',
        icon: 'shield',
      },
      {
        title: 'Safety Tested & Verified',
        description: 'Verified by FAB Medical Supplies procurement desk for Uganda healthcare deployment.',
        icon: 'lock',
      },
      {
        title: 'Technical Support Availability',
        description: 'Backed by professional installation verification and clinical technical maintenance.',
        icon: 'tool',
      },
    ],
    specifications: [
      { label: 'Equipment Type', value: name },
      { label: 'Clinical Department', value: product.categoryName },
      { label: 'Supply Partner', value: 'FAB Medical Supplies Ltd. (Kampala, Uganda)' },
      { label: 'Procurement Status', value: 'Available for hospital procurement & nationwide dispatch' },
      { label: 'Technical Documentation', value: 'Confirmed directly on technical quotation' },
    ],
  };
}

/**
 * Returns complete clinical product details for a given product
 */
export function getProductDetails(product) {
  const specific = equipmentKnowledge[product.id];
  if (specific) {
    return specific;
  }
  return getGenericKnowledge(product);
}
