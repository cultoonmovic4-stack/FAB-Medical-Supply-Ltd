/**
 * Product Catalogue Data Store for FAB Medical Supplies Ltd.
 * 
 * Strict Data Source Rules:
 * - Categories and Product names match the official company PDF exactly.
 * - Summaries are included ONLY where explicitly printed in the PDF.
 * - Specifications remain empty ([]) until verified by the owner.
 * - No invented models, prices, stock statuses, or manufacturer claims.
 */

// Product Equipment Photography Assets (Client-supplied & Verified High-Resolution Renders)
import ctScannerImg from '../assets/products/ct_scanner_siemens.webp';
import ultrasoundScannerImg from '../assets/products/ultrasound_scanner_trolley.webp';
import dopplerUltrasoundImg from '../assets/products/ultrasound_color_doppler.webp';
import bpMonitorImg from '../assets/products/blood_pressure_monitor.webp';
import patientMonitorIcuImg from '../assets/products/patient_monitor_icu_ge.webp';
import oxygenConcentratorImg from '../assets/products/oxygen_concentrator.webp';
import autoclaveBenchtopImg from '../assets/products/autoclave_benchtop.webp';
import autoclaveTongshuoImg from '../assets/products/autoclave_tongshuo.webp';
import pharmacyFridgeImg from '../assets/products/pharmacy_refrigerator.webp';
import wheelchairImg from '../assets/products/wheelchair_manual.webp';
import bedsideLockerImg from '../assets/products/bedside_locker.webp';
import diagnosticAnalyzerImg from '../assets/products/diagnostic_ecg_analyzer.webp';
import microscopeImg from '../assets/products/microscope_optical.webp';
import centrifugeImg from '../assets/products/centrifuge_benchtop.webp';
import biosafetyCabinetImg from '../assets/products/biosafety_cabinet_clean.webp';
import anesthesiaMachineImg from '../assets/products/anesthesia_machine.webp';
import operatingTableImg from '../assets/products/operating_table.webp';
import electrosurgicalUnitImg from '../assets/products/electrosurgical_unit.webp';
import vitalSignsMonitorImg from '../assets/products/vital_signs_monitor_philips.webp';
import surgicalInstrumentsImg from '../assets/products/surgical_instruments_theatre.webp';
import biosafetyLabImg from '../assets/products/biosafety_cabinet_lab.webp';
import centrifugeRotorImg from '../assets/products/centrifuge_rotor.webp';
import microscopeBinocularImg from '../assets/products/microscope_binocular.webp';
import wheelchairElectricImg from '../assets/products/wheelchair_electric.webp';
import surgicalKitImg from '../assets/products/surgical_instruments_kit.webp';
import surgicalTrayImg from '../assets/products/surgical_instruments_tray.webp';
import endoscopeImg from '../assets/products/endoscope.webp';


export const categories = [
  {
    id: 'radiology-imaging',
    name: 'Radiology and Imaging Equipment (Diagnostic)',
    shortName: 'Radiology & Imaging',
  },
  {
    id: 'opd-consultation',
    name: 'Outpatient Department (OPD) and Consultation Room',
    shortName: 'OPD & Consultation',
  },
  {
    id: 'emergency-icu',
    name: 'Emergency and ICU (Critical Care)',
    shortName: 'Emergency & ICU',
  },
  {
    id: 'maternity-pediatrics',
    name: 'Maternity and Pediatrics',
    shortName: 'Maternity & Pediatrics',
  },
  {
    id: 'specialized-departments',
    name: 'Specialized Departments',
    shortName: 'Specialized Departments',
  },
  {
    id: 'utility-services',
    name: 'Supporting/Utility Services',
    shortName: 'Supporting & Utility',
  },
  {
    id: 'hospital-furniture',
    name: 'General Hospital Furniture',
    shortName: 'Hospital Furniture',
  },
  {
    id: 'laboratory',
    name: 'Laboratory',
    shortName: 'Laboratory',
  },
  {
    id: 'theatre-room',
    name: 'Theatre Room',
    shortName: 'Theatre Room',
  },
];

export const products = [
  // 1. Radiology and Imaging Equipment (Diagnostic)
  {
    id: 'x-ray-machines',
    name: 'X-Ray Machines',
    categoryId: 'radiology-imaging',
    categoryName: 'Radiology and Imaging Equipment (Diagnostic)',
    summary: 'Fixed and mobile digital X-ray systems.',
    specifications: [],
    image: null,
  },
  {
    id: 'ct-scanner',
    name: 'CT Scanner (Computed Tomography)',
    categoryId: 'radiology-imaging',
    categoryName: 'Radiology and Imaging Equipment (Diagnostic)',
    summary: 'Clinical computed tomography scanner for multi-slice diagnostic imaging.',
    specifications: [],
    image: ctScannerImg,
  },
  {
    id: 'mri-machine',
    name: 'MRI Machine (Magnetic Resonance Imaging)',
    categoryId: 'radiology-imaging',
    categoryName: 'Radiology and Imaging Equipment (Diagnostic)',
    summary: 'For soft tissue imaging.',
    specifications: [],
    image: null,
  },
  {
    id: 'ultrasound-scanner',
    name: 'Ultrasound Scanner',
    categoryId: 'radiology-imaging',
    categoryName: 'Radiology and Imaging Equipment (Diagnostic)',
    summary: 'Clinical diagnostic ultrasound scanner with multi-frequency probes for real-time imaging.',
    specifications: [],
    image: ultrasoundScannerImg,
  },
  {
    id: 'color-doppler-ultrasound',
    name: 'Color Doppler Ultrasound Scanner',
    categoryId: 'radiology-imaging',
    categoryName: 'Radiology and Imaging Equipment (Diagnostic)',
    summary: 'High-definition digital color Doppler ultrasound diagnostic console for vascular and cardiac imaging.',
    specifications: [],
    image: dopplerUltrasoundImg,
  },
  {
    id: 'mammography-machine',
    name: 'Mammography Machine',
    categoryId: 'radiology-imaging',
    categoryName: 'Radiology and Imaging Equipment (Diagnostic)',
    summary: 'For breast imaging.',
    specifications: [],
    image: null,
  },
  {
    id: 'c-arm',
    name: 'C-Arm',
    categoryId: 'radiology-imaging',
    categoryName: 'Radiology and Imaging Equipment (Diagnostic)',
    summary: 'Mobile fluoroscopy device for real-time imaging during procedures.',
    specifications: [],
    image: null,
  },

  // 2. Outpatient Department (OPD) and Consultation Room
  {
    id: 'examination-couch',
    name: 'Examination Couch',
    categoryId: 'opd-consultation',
    categoryName: 'Outpatient Department (OPD) and Consultation Room',
    summary: 'Adjustable clinical examination and treatment couch.',
    specifications: [],
    image: operatingTableImg,
  },
  {
    id: 'otoscopes',
    name: 'Otoscopes (ear)',
    categoryId: 'opd-consultation',
    categoryName: 'Outpatient Department (OPD) and Consultation Room',
    summary: null,
    specifications: [],
    image: null,
  },
  {
    id: 'ophthalmoscopes-tongue-depressors',
    name: 'Ophthalmoscopes (eye), and Tongue depressors',
    categoryId: 'opd-consultation',
    categoryName: 'Outpatient Department (OPD) and Consultation Room',
    summary: null,
    specifications: [],
    image: null,
  },
  {
    id: 'sphygmomanometer',
    name: 'Sphygmomanometer',
    categoryId: 'opd-consultation',
    categoryName: 'Outpatient Department (OPD) and Consultation Room',
    summary: 'Clinical blood pressure measurement instrument.',
    specifications: [],
    image: bpMonitorImg,
  },
  {
    id: 'blood-pressure-monitors',
    name: 'Blood pressure monitors (manual or digital)',
    categoryId: 'opd-consultation',
    categoryName: 'Outpatient Department (OPD) and Consultation Room',
    summary: null,
    specifications: [],
    image: bpMonitorImg,
  },
  {
    id: 'stethoscope',
    name: 'Stethoscope',
    categoryId: 'opd-consultation',
    categoryName: 'Outpatient Department (OPD) and Consultation Room',
    summary: 'For listening to heart/lung sounds.',
    specifications: [],
    image: null,
  },
  {
    id: 'weighing-scales',
    name: 'Weighing Scales',
    categoryId: 'opd-consultation',
    categoryName: 'Outpatient Department (OPD) and Consultation Room',
    summary: null,
    specifications: [],
    image: null,
  },

  // 3. Emergency and ICU (Critical Care)
  {
    id: 'ventilator',
    name: 'Ventilator',
    categoryId: 'emergency-icu',
    categoryName: 'Emergency and ICU (Critical Care)',
    summary: 'For supporting breathing in patients.',
    specifications: [],
    image: null,
  },
  {
    id: 'defibrillator-icu',
    name: 'Defibrillator',
    categoryId: 'emergency-icu',
    categoryName: 'Emergency and ICU (Critical Care)',
    summary: 'For restoring normal heart rhythm.',
    specifications: [],
    image: null,
  },
  {
    id: 'infusion-syringe-pumps',
    name: 'Infusion and Syringe Pumps',
    categoryId: 'emergency-icu',
    categoryName: 'Emergency and ICU (Critical Care)',
    summary: 'For precise administration of fluids and medication.',
    specifications: [],
    image: null,
  },
  {
    id: 'patient-monitor-icu',
    name: 'Patient Monitor',
    categoryId: 'emergency-icu',
    categoryName: 'Emergency and ICU (Critical Care)',
    summary: 'Tracks vitals (ECG, SpO2, Blood Pressure).',
    specifications: [],
    image: patientMonitorIcuImg,
  },
  {
    id: 'crash-cart-trolley',
    name: 'Crash Cart/Trolley',
    categoryId: 'emergency-icu',
    categoryName: 'Emergency and ICU (Critical Care)',
    summary: 'Mobile unit with emergency resuscitation equipment.',
    specifications: [],
    image: null,
  },
  {
    id: 'oxygen-concentrator-cylinder',
    name: 'Oxygen concentrator/Cylinder',
    categoryId: 'emergency-icu',
    categoryName: 'Emergency and ICU (Critical Care)',
    summary: 'For supplying oxygen.',
    specifications: [],
    image: oxygenConcentratorImg,
  },
  {
    id: 'nebulizer',
    name: 'Nebulizer',
    categoryId: 'emergency-icu',
    categoryName: 'Emergency and ICU (Critical Care)',
    summary: 'For respiratory treatments.',
    specifications: [],
    image: null,
  },

  // 4. Maternity and Pediatrics
  {
    id: 'infant-incubator',
    name: 'Infant Incubator',
    categoryId: 'maternity-pediatrics',
    categoryName: 'Maternity and Pediatrics',
    summary: 'For maintaining warm environments for newborns.',
    specifications: [],
    image: null,
  },
  {
    id: 'radiant-warmer',
    name: 'Radiant Warmer',
    categoryId: 'maternity-pediatrics',
    categoryName: 'Maternity and Pediatrics',
    summary: 'Provides open heat support for neonates.',
    specifications: [],
    image: null,
  },
  {
    id: 'fetal-monitor',
    name: 'Fetal Monitor',
    categoryId: 'maternity-pediatrics',
    categoryName: 'Maternity and Pediatrics',
    summary: 'To monitor heart rate and contractions.',
    specifications: [],
    image: null,
  },
  {
    id: 'delivery-bed',
    name: 'Delivery Bed',
    categoryId: 'maternity-pediatrics',
    categoryName: 'Maternity and Pediatrics',
    summary: 'Specialized bed for childbirth.',
    specifications: [],
    image: operatingTableImg,
  },

  // 5. Specialized Departments
  {
    id: 'dialysis-machine',
    name: 'Dialysis Machine',
    categoryId: 'specialized-departments',
    categoryName: 'Specialized Departments',
    summary: 'For kidney failure patients (Hemodialysis).',
    specifications: [],
    image: null,
  },
  {
    id: 'physiotherapy-equipment',
    name: 'Physiotherapy Equipment',
    categoryId: 'specialized-departments',
    categoryName: 'Specialized Departments',
    summary: 'Traction units, TENS units, ultrasound therapy devices.',
    specifications: [],
    image: null,
  },
  {
    id: 'dental-chair-unit',
    name: 'Dental Chair & Unit',
    categoryId: 'specialized-departments',
    categoryName: 'Specialized Departments',
    summary: 'For dental checkups and procedures.',
    specifications: [],
    image: null,
  },
  {
    id: 'ent-unit',
    name: 'ENT Examination Unit & Scope',
    categoryId: 'specialized-departments',
    categoryName: 'Specialized Departments',
    summary: 'Ear, Nose, and Throat exam equipment with high-definition endoscopic visualization.',
    specifications: [],
    image: endoscopeImg,
  },
  {
    id: 'clinical-endoscope-system',
    name: 'Clinical Video Endoscopy System',
    categoryId: 'specialized-departments',
    categoryName: 'Specialized Departments',
    summary: 'Medical endoscopic diagnostic imaging and visualization system.',
    specifications: [],
    image: endoscopeImg,
  },

  // 6. Supporting/Utility Services
  {
    id: 'autoclave-sterilizer',
    name: 'Autoclave/Sterilizer',
    categoryId: 'utility-services',
    categoryName: 'Supporting/Utility Services',
    summary: 'For sterilizing instruments.',
    specifications: [],
    image: autoclaveBenchtopImg,
  },
  {
    id: 'mortuary-cooler-freezer',
    name: 'Mortuary Cooler/Freezer',
    categoryId: 'utility-services',
    categoryName: 'Supporting/Utility Services',
    summary: 'For storing deceased bodies.',
    specifications: [],
    image: null,
  },
  {
    id: 'medical-waste-bins',
    name: 'Medical Waste Bins',
    categoryId: 'utility-services',
    categoryName: 'Supporting/Utility Services',
    summary: null,
    specifications: [],
    image: null,
  },
  {
    id: 'linen-trolleys-cleaning',
    name: 'Linen Trolleys & Cleaning Equipment',
    categoryId: 'utility-services',
    categoryName: 'Supporting/Utility Services',
    summary: null,
    specifications: [],
    image: null,
  },
  {
    id: 'pharmacy-refrigerators',
    name: 'Pharmacy Refrigerators',
    categoryId: 'utility-services',
    categoryName: 'Supporting/Utility Services',
    summary: 'For medication storage.',
    specifications: [],
    image: pharmacyFridgeImg,
  },

  // 7. General Hospital Furniture
  {
    id: 'wheelchairs',
    name: 'Wheelchairs',
    categoryId: 'hospital-furniture',
    categoryName: 'General Hospital Furniture',
    summary: 'Standard foldable manual mobility wheelchairs.',
    specifications: [],
    image: wheelchairImg,
  },
  {
    id: 'electric-wheelchair',
    name: 'Motorized Electric Wheelchair',
    categoryId: 'hospital-furniture',
    categoryName: 'General Hospital Furniture',
    summary: 'Powered patient mobility chair with ergonomic joystick navigation and dual motor drive.',
    specifications: [],
    image: wheelchairElectricImg,
  },
  {
    id: 'stretchers',
    name: 'Stretchers',
    categoryId: 'hospital-furniture',
    categoryName: 'General Hospital Furniture',
    summary: 'For transportation.',
    specifications: [],
    image: null,
  },
  {
    id: 'waiting-room-chairs',
    name: 'Waiting Room Chairs',
    categoryId: 'hospital-furniture',
    categoryName: 'General Hospital Furniture',
    summary: 'For outpatient areas.',
    specifications: [],
    image: null,
  },
  {
    id: 'bedside-lockers-overbed-tables',
    name: 'Bedside Lockers & Overbed Tables',
    categoryId: 'hospital-furniture',
    categoryName: 'General Hospital Furniture',
    summary: 'For patient convenience.',
    specifications: [],
    image: bedsideLockerImg,
  },
  {
    id: 'patient-screens-partitions',
    name: 'Patient Screens/Partitions',
    categoryId: 'hospital-furniture',
    categoryName: 'General Hospital Furniture',
    summary: 'For privacy.',
    specifications: [],
    image: null,
  },

  // 8. Laboratory
  {
    id: 'diagnostic-analyzers',
    name: 'Diagnostic Analyzers',
    categoryId: 'laboratory',
    categoryName: 'Laboratory',
    summary: 'Hematology, Chemistry, Immunoassay, Urine.',
    specifications: [],
    image: diagnosticAnalyzerImg,
  },
  {
    id: 'microscopes',
    name: 'Microscopes',
    categoryId: 'laboratory',
    categoryName: 'Laboratory',
    summary: 'Clinical optical laboratory microscope.',
    specifications: [],
    image: microscopeImg,
  },
  {
    id: 'binocular-microscope',
    name: 'Binocular Laboratory Research Microscope',
    categoryId: 'laboratory',
    categoryName: 'Laboratory',
    summary: 'High-precision optical magnification with coaxial coarse and fine focus controls.',
    specifications: [],
    image: microscopeBinocularImg,
  },
  {
    id: 'centrifuges',
    name: 'Centrifuges',
    categoryId: 'laboratory',
    categoryName: 'Laboratory',
    summary: 'Benchtop clinical sample centrifuge.',
    specifications: [],
    image: centrifugeImg,
  },
  {
    id: 'centrifuge-rotor-clinical',
    name: 'Clinical Centrifuge & High-Speed Rotors',
    categoryId: 'laboratory',
    categoryName: 'Laboratory',
    summary: 'Precision laboratory centrifugation system with multi-tube angle rotors.',
    specifications: [],
    image: centrifugeRotorImg,
  },
  {
    id: 'autoclaves-lab',
    name: 'Autoclaves',
    categoryId: 'laboratory',
    categoryName: 'Laboratory',
    summary: 'Vertical autoclave sterilizer for clinical laboratory sterilization.',
    specifications: [],
    image: autoclaveTongshuoImg,
  },
  {
    id: 'biosafety-cabinets',
    name: 'Biosafety Cabinets',
    categoryId: 'laboratory',
    categoryName: 'Laboratory',
    summary: 'Class II microbiological safety containment cabinet.',
    specifications: [],
    image: biosafetyCabinetImg,
  },
  {
    id: 'biosafety-cabinet-workstation',
    name: 'Biosafety Cabinet Workstation (Class II)',
    categoryId: 'laboratory',
    categoryName: 'Laboratory',
    summary: 'Laminar flow biological safety cabinet providing sterile personnel and sample protection.',
    specifications: [],
    image: biosafetyLabImg,
  },
  {
    id: 'lab-fridges',
    name: 'Lab Fridges',
    categoryId: 'laboratory',
    categoryName: 'Laboratory',
    summary: 'Temperature-controlled clinical laboratory cold storage.',
    specifications: [],
    image: pharmacyFridgeImg,
  },

  // 9. Theatre Room
  {
    id: 'anesthesia-machine',
    name: 'Anesthesia Machine',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: 'Operating theatre anesthesia workstation with integrated ventilator.',
    specifications: [],
    image: anesthesiaMachineImg,
  },
  {
    id: 'led-theatre-lights',
    name: 'LED Theatre Lights',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: null,
    specifications: [],
    image: null,
  },
  {
    id: 'operating-table',
    name: 'Operating Table',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: 'Multi-function hydraulic/electric surgical operating table.',
    specifications: [],
    image: operatingTableImg,
  },
  {
    id: 'electrosurgical-units',
    name: 'Electrosurgical Units',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: 'High-frequency monopolar and bipolar surgical cutting and coagulation unit.',
    specifications: [],
    image: electrosurgicalUnitImg,
  },
  {
    id: 'electric-knife',
    name: 'Electric Knife',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: 'Electrosurgical cutting pencil and generator system.',
    specifications: [],
    image: electrosurgicalUnitImg,
  },
  {
    id: 'suction-machine-theatre',
    name: 'Suction Machine',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: null,
    specifications: [],
    image: null,
  },
  {
    id: 'patient-monitors-theatre',
    name: 'Patient Monitors',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: 'Multi-parameter perioperative patient monitor.',
    specifications: [],
    image: patientMonitorIcuImg,
  },
  {
    id: 'vital-signs-monitor',
    name: 'Vital Signs Monitor',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: 'Portable multi-vital signs measurement monitor.',
    specifications: [],
    image: vitalSignsMonitorImg,
  },
  {
    id: 'surgical-instruments',
    name: 'Surgical Instruments',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: 'Operating theatre surgical grade instruments.',
    specifications: [],
    image: surgicalInstrumentsImg,
  },
  {
    id: 'surgical-procedure-kit',
    name: 'Operating Theatre Surgical Procedure Kit',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: 'High-grade stainless steel surgical instruments set for specialized clinical operations.',
    specifications: [],
    image: surgicalKitImg,
  },
  {
    id: 'surgical-instrument-sterilization-tray',
    name: 'Stainless Steel Surgical Instrument Tray',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: 'Heavy-duty autoclavable surgical instrument preparation and sterilization container.',
    specifications: [],
    image: surgicalTrayImg,
  },
  {
    id: 'defibrillator-theatre',
    name: 'Defibrillator',
    categoryId: 'theatre-room',
    categoryName: 'Theatre Room',
    summary: null,
    specifications: [],
    image: null,
  },
];
