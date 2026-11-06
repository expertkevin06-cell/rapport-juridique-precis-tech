/* =========================================================
   EXPERT AUTO LITIGE — app.js v5
   Analyse juridique ULTRA-POUSSÉE avec calculs automatiques
   ========================================================= */
const ADMIN_PWD = "Kevin83600";

function login() {
  if (document.getElementById('passwordInput').value === ADMIN_PWD) {
    sessionStorage.setItem('adminAuth', 'true'); showMainScreen();
  } else alert("Mot de passe incorrect");
}
function logout() {
  sessionStorage.removeItem('adminAuth');
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('mainScreen').classList.add('hidden');
}
function showMainScreen() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('mainScreen').classList.remove('hidden');
  renderQuota(); loadSavedReports();
}
if (sessionStorage.getItem('adminAuth') === 'true') showMainScreen();

function todayKey() { return new Date().toISOString().slice(0, 10); }
function getQuota() {
  let q = JSON.parse(localStorage.getItem('iaQuota') || '{"date":"","count":0}');
  if (q.date !== todayKey()) q = { date: todayKey(), count: 0 };
  return q;
}
function bumpQuota(source) {
  const q = getQuota(); q.count++; localStorage.setItem('iaQuota', JSON.stringify(q)); renderQuota();
}
function renderQuota() {
  const b = document.getElementById('quotaBadge');
  if (b) b.textContent = `🧠 Analyses IA aujourd'hui : ${getQuota().count}`;
}

function calculerDelais(d) {
  const dateE = new Date(d.dateE);
  const dateP = new Date(d.dateP);
  const today = new Date();
  const joursDepuisVente = Math.floor((today - dateE) / 86400000);
  const joursDepuisPanne = Math.floor((today - dateP) / 86400000);
  const finConformite = new Date(dateE); finConformite.setFullYear(finConformite.getFullYear() + 2);
  const finVicesCaches = new Date(dateP); finVicesCaches.setFullYear(finVicesCaches.getFullYear() + 5);
  const finDol = new Date(dateP); finDol.setFullYear(finDol.getFullYear() + 5);
  return {
    joursDepuisVente, joursDepuisPanne,
    delaiConformiteRestant: Math.floor((finConformite - today) / 86400000),
    delaiVicesCachesRestant: Math.floor((finVicesCaches - today) / 86400000),
    delaiDolRestant: Math.floor((finDol - today) / 86400000),
    finConformite: finConformite.toLocaleDateString('fr-FR'),
    finVicesCaches: finVicesCaches.toLocaleDateString('fr-FR'),
    finDol: finDol.toLocaleDateString('fr-FR')
  };
}

const SYSTEM_PROMPT = `Tu es un Ingénieur Expert Automobile français de très haut niveau ET Juriste spécialisé en droit civil, droit de la consommation, droit des assurances et procédure civile. Tu as 20 ans d'expérience en expertise judiciaire automobile.

Tu rédiges un rapport d'expertise JURIDIQUEMENT ULTRA-PRÉCIS et DÉTAILLÉ, destiné à un assureur Protection Juridique ou RC Professionnelle, et utilisable devant un tribunal.

Structure OBLIGATOIRE et DÉTAILLÉE :

I. SYNTHÈSE EXÉCUTIVE
- Type de litige, parties, dates clés, kilométrages
- Indice d'antériorité du défaut (TRÈS ÉLEVÉ / ÉLEVÉ / MODÉRÉ / À DOCUMENTER)
- Actions recommandées avec chances de succès estimées

II. ANALYSE CHRONOLOGIQUE ET KILOMÉTRIQUE DÉTAILLÉE
- Calculs précis des délais (jours, mois, années)
- Kilométrage parcouru depuis l'événement
- Moyenne km/jour et analyse de l'usage
- Présomption d'antériorité selon la jurisprudence (citer arrêts précis)

III. ANALYSE TECHNIQUE APPROFONDIE
- Causes probables avec explications techniques détaillées
- Conséquences mécaniques et économiques
- Codes DTC associés et procédures de diagnostic
- Pannes connues par marque/modèle/motorisation
- Rappels officiels (Safety Gate, NHTSA, Rappel Conso)

IV. QUALIFICATION JURIDIQUE DÉTAILLÉE
- Articles de loi applicables avec NUMÉRO PRÉCIS et texte intégral :
  * Code civil : 1641-1649, 1231-1, 1137, 1604, 1245
  * Code conso : L217-4 à L217-25, L121-2
  * Code assurances : L124-1 et s.
  * Code procédure civile : 145, 809, 232
- Analyse de la charge de la preuve
- Identification des présomptions légales
- Analyse des clauses contractuelles

V. JURISPRUDENCE CONTEXTUELLE DÉTAILLÉE
- Citer 5 à 10 arrêts PERTINENTS de la Cour de cassation avec référence complète
- Citer la jurisprudence de la CJUE si applicable
- Analyser les chances de succès en fonction de la jurisprudence

VI. STRATÉGIE PROCÉDURALE RECOMMANDÉE
- Étapes chronologiques (mise en demeure, expertise amiable, déclaration PJ, référé, assignation)
- Tribunal compétent
- Estimation des frais et prise en charge par l'assurance
- Calcul des délais de prescription restants (jours précis)

VII. ÉVALUATION FINANCIÈRE
- Coût estimé des réparations
- Valeur du véhicule avant/après
- Calcul de la réfaction éventuelle du prix
- Dommages-intérêts réclamables

VIII. CONCLUSION ET RECOMMANDATIONS FINALES
- Actions prioritaires avec délais impératifs
- Chances de succès estimées (en %)
- Risques et points de vigilance
- Documents à conserver

Termine TOUJOURS par : « Document d'analyse à faire valider par un expert agréé / professionnel du droit. Ce rapport ne constitue pas un avis juridique définitif. »`;

function buildPrompt(d) {
  const delais = calculerDelais(d);
  const legal = window.DATA_LEGAL;
  let contexteJuridique = '';
  
  if (d.type === 'vente_pro_part' || d.type === 'vente_particulier') {
    contexteJuridique += '\n=== ARTICLES DU CODE CIVIL ===\n';
    legal.codes.civil.filter(a => ['vices-cachés', 'dol', 'vente'].some(t => a.type.includes(t)))
      .slice(0, 12).forEach(a => contexteJuridique += `• Art. ${a.art} C. civ. : ${a.texte}\n`);
  }
  if (d.type === 'vente_pro_part') {
    contexteJuridique += '\n=== CODE DE LA CONSOMMATION ===\n';
    legal.codes.consommation.filter(a => a.type.includes('conformité'))
      .slice(0, 8).forEach(a => contexteJuridique += `• Art. ${a.art} C. conso : ${a.texte}\n`);
  }
  if (d.type === 'intervention') {
    contexteJuridique += '\n=== OBLIGATION DE RÉSULTAT ===\n';
    legal.codes.civil.filter(a => a.type.includes('responsabilité-contractuelle'))
      .forEach(a => contexteJuridique += `• Art. ${a.art} C. civ. : ${a.texte}\n`);
  }
  
  contexteJuridique += '\n=== JURISPRUDENCE PERTINENTE ===\n';
  let domaineCible = '';
  if (d.type === 'vente_particulier') domaineCible = 'vices-cachés';
  else if (d.type === 'vente_pro_part') domaineCible = 'conformité';
  else if (d.type === 'intervention') domaineCible = 'garagiste';
  
  legal.jurisprudence.filter(j => j.domaine.includes(domaineCible) || j.portée === 'fondamentale')
    .slice(0, 10).forEach(j => contexteJuridique += `• ${j.ref} : ${j.principe}\n`);
  
  return `CONTEXTE DU LITIGE :
- Type : ${d.typeLabel}
- Date vente/intervention : ${d.dateE} | Kilométrage : ${d.kmE} km
- Date constat panne : ${d.dateP} | Kilométrage actuel : ${d.kmP} km
- Délai écoulé : ${d.days} jours (${(d.days/30).toFixed(1)} mois) | Distance : ${d.km} km | Moyenne : ${d.avg} km/jour
- Pannes/symptômes : ${d.desc}

DÉLAIS DE PRESCRIPTION CALCULÉS AUTOMATIQUEMENT :
- Jours depuis la vente : ${delais.joursDepuisVente}
- Jours depuis la panne : ${delais.joursDepuisPanne}
- Délai garantie conformité restant : ${delais.delaiConformiteRestant} jours (fin ${delais.finConformite})
- Délai vices cachés restant : ${delais.delaiVicesCachesRestant} jours (fin ${delais.finVicesCaches})
- Délai nullité pour dol restant : ${delais.delaiDolRestant} jours (fin ${delais.finDol})

${contexteJuridique}

INSTRUCTIONS :
1. Cite des articles de loi avec NUMÉRO PRÉCIS
2. Cite 5 à 10 jurisprudences de la Cour de cassation avec références COMPLÈTES
3. Analyse la charge de la preuve et les présomptions
4. Propose une stratégie procédurale complète
5. Évalue les chances de succès en pourcentage
6. Calcule les délais de prescription restants

Rédige le rapport COMPLET et DÉTAILLÉ selon la structure demandée.`;
}

async function generateReport() {
  const type = document.getElementById('typeLitige').value;
  const typeLabel = document.getElementById('typeLitige').selectedOptions[0].text;
  const dateE = document.getElementById('dateEvent').value;
  const kmE = parseInt(document.getElementById('kmEvent').value, 10) || 0;
  const dateP = document.getElementById('datePanne').value;
  const kmP = parseInt(document.getElementById('kmPanne').value, 10) || 0;
  const desc = document.getElementById('descPanne').value.trim();
  if (!dateE || !dateP || !desc) { alert('Complétez le formulaire'); return; }

  const days = Math.max(0, Math.floor((new Date(dateP) - new Date(dateE)) / 86400000));
  const km = Math.max(0, kmP - kmE);
  const avg = days > 0 ? (km / days).toFixed(1) : km;
  const d = { type, typeLabel, dateE, kmE, dateP, kmP, desc, days, km, avg };

  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('reportContainer').classList.add('hidden');
  document.getElementById('loading').innerHTML = '⚖️ Analyse juridique ultra-poussée en cours...<br><small>Multi-IA (15 providers) + base juridique massive</small>';

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    { role: 'user', content: buildPrompt(d) }
  ];

  let out = null;
  try {
    out = await window.AI_CHAIN(messages);
    bumpQuota(out.source);
  } catch (e) {
    console.warn('IA KO, moteur local :', e);
    out = { text: localExpertReport(d), source: 'Moteur expert LOCAL (hors-ligne, illimité)' };
  }

  document.getElementById('reportSource').textContent = 'Source : ' + out.source;
  document.getElementById('providerStatus').textContent = `Provider utilisé : ${out.source} | Analyse effectuée le ${new Date().toLocaleString('fr-FR')}`;
  document.getElementById('reportText').innerText = out.text;
  document.getElementById('loading').classList.add('hidden');
  document.getElementById('reportContainer').classList.remove('hidden');
}

function delayAnalysis(days, km) {
  if (days <= 30 && km <= 3000) return { niv: 'TRÈS ÉLEVÉ', txt: 'Le très court délai et le faible kilométrage constituent un indice fort d\'un défaut préexistant.', score: 90 };
  if (days <= 90 && km <= 10000) return { niv: 'ÉLEVÉ', txt: 'Le délai court et le kilométrage limité plaident en faveur d\'un défaut antérieur.', score: 75 };
  if (days <= 180) return { niv: 'MODÉRÉ', txt: 'Le délai intermédiaire impose une analyse technique approfondie.', score: 50 };
  return { niv: 'À DOCUMENTER', txt: 'Le délai important nécessite de démontrer l\'antériorité par expertise.', score: 30 };
}

function findLocalMatches(d) {
  const low = d.desc.toLowerCase();
  const issues = (window.DATA_ISSUES || []).filter(i => (i.detail || '').toLowerCase().split(' ').some(w => w.length > 4 && low.includes(w))).slice(0, 5);
  const brandExps = (window.DATA_BRAND_EXPERT || []).filter(e => [e.title, e.symptom, e.diagnosis].join(' ').toLowerCase().split(' ').some(w => w.length > 4 && low.includes(w))).slice(0, 5);
  return { issues, brandExps };
}

function localExpertReport(d) {
  const matches = findLocalMatches(d);
  const da = delayAnalysis(d.days, d.km);
  const delais = calculerDelais(d);
  const doctrine = window.DATA_LEGAL?.doctrines?.[d.type];
  const legal = window.DATA_LEGAL;
  
  let r = `═══════════════════════════════════════════════════
RAPPORT D'EXPERTISE AUTOMOBILE ULTRA-DÉTAILLÉ
Moteur expert local (hors-ligne)
═══════════════════════════════════════════════════

Réf. : EXP-${Date.now()}
Édité le : ${new Date().toLocaleDateString('fr-FR')}
Type de litige : ${d.typeLabel}

═══════════════════════════════════════════════════
I. SYNTHÈSE EXÉCUTIVE
═══════════════════════════════════════════════════

${doctrine?.titre || 'ANALYSE JURIDIQUE'}

• Date de vente/intervention : ${d.dateE}
• Kilométrage à l'événement : ${d.kmE} km
• Date de constat de la panne : ${d.dateP}
• Kilométrage actuel : ${d.kmP} km
• Délai écoulé : ${d.days} jours (${(d.days/30).toFixed(1)} mois)
• Distance parcourue : ${d.km} km
• Moyenne d'utilisation : ${d.avg} km/jour

INDICE D'ANTÉRIORITÉ DU DÉFAUT : ${da.niv} (score ${da.score}/100)

CHANCES DE SUCCÈS ESTIMÉES : ${da.score >= 75 ? 'ÉLEVÉES (70-85%)' : da.score >= 50 ? 'MODÉRÉES (50-70%)' : 'À ÉVALUER (30-50%)'}

═══════════════════════════════════════════════════
II. ANALYSE CHRONOLOGIQUE
═══════════════════════════════════════════════════

${da.txt}

• Jours écoulés depuis la vente : ${delais.joursDepuisVente}
• Jours écoulés depuis la panne : ${delais.joursDepuisPanne}

Cass. 1re civ., 6 juill. 2017, n°16-17.942 : "Un défaut apparu dans les mois suivant la vente avec kilométrage limité permet de présumer son antériorité."

═══════════════════════════════════════════════════
III. ANALYSE TECHNIQUE
═══════════════════════════════════════════════════

`;
  if (matches.issues.length) {
    r += `PANNES CONNUES CORRÉLÉES :\n`;
    matches.issues.forEach(i => r += `• ${i.title} (${i.source})\n  ${i.detail}\n  DTC : ${i.dtc || 'n/a'}\n\n`);
  }
  if (matches.brandExps.length) {
    r += `FICHES EXPERT INGÉNIEUR :\n`;
    matches.brandExps.forEach(e => r += `• ${e.title} (${e.brand} ${e.motor})\n  Symptômes : ${e.symptom}\n  Diagnostic : ${e.diagnosis}\n  Pièces : ${e.parts}\n\n`);
  }
  if (!matches.issues.length && !matches.brandExps.length) r += `Défaillance à caractériser par lecture OBD et inspection.\n`;

  r += `\n═══════════════════════════════════════════════════
IV. QUALIFICATION JURIDIQUE
═══════════════════════════════════════════════════

${doctrine?.titre || 'FONDEMENTS JURIDIQUES'}

FONDEMENTS APPLICABLES :
${(doctrine?.fondements || ['Garantie des vices cachés (art. 1641-1649 C. civ.)']).map(f => `• ${f}`).join('\n')}

EXCLUSIONS ÉVENTUELLES :
${(doctrine?.exclusions || ['Vices apparents (art. 1642 C. civ.)']).map(e => `• ${e}`).join('\n')}

CHARGE DE LA PREUVE :
${doctrine?.charge_preuve || 'L\'acheteur doit prouver l\'existence du vice, son antériorité, et sa gravité.'}

═══════════════════════════════════════════════════
V. JURISPRUDENCE
═══════════════════════════════════════════════════

`;
  legal.jurisprudence.filter(j => j.portée === 'fondamentale').slice(0, 8).forEach(j => r += `• ${j.ref}\n  ${j.principe}\n\n`);

  r += `═══════════════════════════════════════════════════
VI. STRATÉGIE PROCÉDURALE
═══════════════════════════════════════════════════

ÉTAPE 1 : MISE EN DEMEURE (15 jours)
• LRAR au vendeur/réparateur
• Décrire le défaut et citer les articles applicables
• Fixer délai de 15 jours pour réparation/remboursement

ÉTAPE 2 : EXPERTISE AMIABLE CONTRADICTOIRE (si refus)
• Saisir le juge des référés (art. 145 CPC)
• Coût estimé : 800-1 500 € (pris en charge par PJ)

ÉTAPE 3 : DÉCLARATION PROTECTION JURIDIQUE
• Déclarer le sinistre dans les délais du contrat
• Libre choix de l'avocat (art. L124-3 Code assurances)

ÉTAPE 4 : ACTION EN JUSTICE
• Tribunal judiciaire du domicile du défendeur
• Possibilité de référé-provision (art. 809 CPC)

═══════════════════════════════════════════════════
VII. DÉLAIS DE PRESCRIPTION
═══════════════════════════════════════════════════

⚠️ DÉLAIS IMPÉRATIFS :

• Garantie conformité : fin ${delais.finConformite} (${delais.delaiConformiteRestant} jours)
• Vices cachés : fin ${delais.finVicesCaches} (${delais.delaiVicesCachesRestant} jours)
• Nullité dol : fin ${delais.finDol} (${delais.delaiDolRestant} jours)

⚠️ ACTION IMMÉDIATE si délais < 6 mois

═══════════════════════════════════════════════════
VIII. CONCLUSION
═══════════════════════════════════════════════════

ACTIONS PRIORITAIRES :
1. Mettre en demeure dans les 15 jours
2. Contacter l'assureur PJ immédiatement
3. Consulter un avocat spécialisé
4. Conserver toutes les pièces

DOCUMENTS À CONSERVER :
• Facture de vente / certificat de cession
• Carnet d'entretien complet
• Factures de toutes réparations
• Rapports d'expertise
• Courriers échangés (LRAR)
• Photos/vidéos du véhicule
• Relevés de codes défaut

═══════════════════════════════════════════════════

Document d'analyse à faire valider par un expert agréé / professionnel du droit.
Ce rapport ne constitue pas un avis juridique définitif.`;

  return r;
}

function saveLocal() {
  const report = document.getElementById('reportText').innerText;
  const saves = JSON.parse(localStorage.getItem('expertSaves') || '[]');
  saves.push({ date: document.getElementById('datePanne').value || todayKey(), report, timestamp: new Date().toISOString() });
  localStorage.setItem('expertSaves', JSON.stringify(saves));
  loadSavedReports();
  alert('Rapport sauvegardé hors-ligne !');
}

function loadSavedReports() {
  const saves = JSON.parse(localStorage.getItem('expertSaves') || '[]');
  const list = document.getElementById('savedList');
  list.innerHTML = '';
  if (!saves.length) { list.innerHTML = '<p style="color:#4a5065">Aucune sauvegarde locale.</p>'; return; }
  saves.slice().reverse().forEach(save => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>Dossier du ${save.date}</strong><br><small>${new Date(save.timestamp).toLocaleString('fr-FR')}</small>`;
    div.onclick = () => {
      document.getElementById('reportText').innerText = save.report;
      document.getElementById('reportSource').textContent = 'Source : sauvegarde locale';
      document.getElementById('reportContainer').classList.remove('hidden');
      window.scrollTo(0, document.body.scrollHeight);
    };
    list.appendChild(div);
  });
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(11); doc.setFont('helvetica', 'bold');
  doc.text("RAPPORT D'EXPERTISE AUTOMOBILE ULTRA-DÉTAILLÉ", 10, 12);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
  doc.text(doc.splitTextToSize(document.getElementById('reportText').innerText, 180), 10, 20);
  doc.save(`Rapport_Expertise_${todayKey()}.pdf`);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(e => console.warn('SW :', e)));
}
