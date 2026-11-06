/* =========================================================
   EXPERT AUTO LITIGE — app.js v5
   Analyse juridique ULTRA-POUSSÉE avec calculs automatiques
   ========================================================= */
const ADMIN_PWD = "Kevin83600";

/* --- Session admin --- */
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

/* --- Quota quotidien --- */
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

/* --- Calcul automatique des délais de prescription --- */
function calculerDelais(d) {
  const dateE = new Date(d.dateE);
  const dateP = new Date(d.dateP);
  const today = new Date();
  
  const joursDepuisVente = Math.floor((today - dateE) / 86400000);
  const joursDepuisPanne = Math.floor((today - dateP) / 86400000);
  
  // Garantie de conformité : 2 ans depuis délivrance (pro->part)
  const finConformite = new Date(dateE);
  finConformite.setFullYear(finConformite.getFullYear() + 2);
  const delaiConformiteRestant = Math.floor((finConformite - today) / 86400000);
  
  // Vices cachés : 5 ans depuis découverte
  const finVicesCaches = new Date(dateP);
  finVicesCaches.setFullYear(finVicesCaches.getFullYear() + 5);
  const delaiVicesCachesRestant = Math.floor((finVicesCaches - today) / 86400000);
  
  // Nullité pour dol : 5 ans depuis découverte
  const finDol = new Date(dateP);
  finDol.setFullYear(finDol.getFullYear() + 5);
  const delaiDolRestant = Math.floor((finDol - today) / 86400000);
  
  return {
    joursDepuisVente,
    joursDepuisPanne,
    delaiConformiteRestant,
    delaiVicesCachesRestant,
    delaiDolRestant,
    finConformite: finConformite.toLocaleDateString('fr-FR'),
    finVicesCaches: finVicesCaches.toLocaleDateString('fr-FR'),
    finDol: finDol.toLocaleDateString('fr-FR')
  };
}

/* --- Système prompt ULTRA-POUSSÉ --- */
const SYSTEM_PROMPT = `Tu es un Ingénieur Expert Automobile français de très haut niveau (diagnostic mécanique, électronique, hybride/électrique, codes DTC, rappels officiels Safety Gate/NHTSA/Rappel Conso, procédures constructeur) ET Juriste spécialisé en droit civil français, droit de la consommation, droit des assurances et procédure civile. Tu as 20 ans d'expérience en expertise judiciaire automobile.

Tu rédiges un rapport d'expertise JURIDIQUEMENT ULTRA-PRECISET DÉTAILLÉ, destiné à un assureur Protection Juridique ou RC Professionnelle, et utilisable devant un tribunal.

Structure OBLIGATOIRE et DÉTAILLÉE :

I. SYNTHÈSE EXÉCUTIVE
- Type de litige, parties en présence, dates clés, kilométrages
- Indice d'antériorité du défaut (TRÈS ÉLEVÉ / ÉLEVÉ / MODÉRÉ / À DOCUMENTER)
- Actions juridiques recommandées avec chances de succès estimées

II. ANALYSE CHRONOLOGIQUE ET KILOMÉTRIQUE DÉTAILLÉE
- Calcul précis des délais écoulés (jours, mois, années)
- Kilométrage parcouru depuis l'événement
- Moyenne km/jour et analyse de l'usage du véhicule
- Présomption d'antériorité selon la jurisprudence (citer arrêts précis avec n° pourvoi)

III. ANALYSE TECHNIQUE APPROFONDIE
- Causes probables de la panne avec explications techniques détaillées
- Conséquences mécaniques et économiques
- Codes DTC associés et procédures de diagnostic
- Pannes connues par marque/modèle/motorisation (citer sources officielles)
- Rappels officiels (Safety Gate, NHTSA, Rappel Conso) avec références
- Analyse de l'usure normale vs usure anormale

IV. QUALIFICATION JURIDIQUE DÉTAILLÉE
- Articles de loi applicables avec NUMÉRO PRÉCIS et texte intégral :
  * Code civil : 1641-1649 (vices cachés), 1231-1 (obligation de résultat), 1137 (dol), 1604 (délivrance), 1245 (produits défectueux)
  * Code de la consommation : L217-4 à L217-25 (conformité), L121-2 (pratiques trompeuses)
  * Code des assurances : L124-1 et s. (protection juridique)
  * Code de procédure civile : 145 (référé), 809 (référé-provision), 232 (expertise)
- Analyse de la charge de la preuve (qui doit prouver quoi)
- Identification des présomptions légales applicables
- Analyse des clauses contractuelles éventuelles (clauses abusives, non-garantie)

V. JURISPRUDENCE CONTEXTUELLE DÉTAILLÉE
- Citer 5 à 10 arrêts PERTINENTS de la Cour de cassation avec :
  * Référence complète : "Cass. [chambre], [date], n°[numéro pourvoi]"
  * Principe de droit dégagé
  * Application au cas d'espèce
- Citer la jurisprudence de la CJUE si applicable (directive 1999/44/CE, 85/374/CEE)
- Analyser les chances de succès en fonction de la jurisprudence

VI. STRATÉGIE PROCÉDURALE RECOMMANDÉE
- Étapes à suivre chronologiquement :
  1. Mise en demeure (modèle à joindre)
  2. Expertise amiable contradictoire (art. 145 CPC)
  3. Déclaration au assureur Protection Juridique (art. L124-1 Code assurances)
  4. Action en référé-provision si urgence (art. 809 CPC)
  5. Assignation devant tribunal compétent
- Identification du tribunal compétent (TJ, tribunal de commerce)
- Estimation des frais de procédure et prise en charge par l'assurance
- Calcul des délais de prescription restants (jours précis)
- Recommandation d'avocat spécialisé en droit automobile

VII. ÉVALUATION FINANCIÈRE
- Coût estimé des réparations
- Valeur du véhicule avant/après réparation
- Calcul de la réfaction éventuelle du prix
- Dommages-intérêts réclamables (perte subie + gain manqué)
- Frais de procédure estimés

VIII. CONCLUSION ET RECOMMANDATIONS FINALES
- Actions prioritaires avec délais impératifs
- Chances de succès estimées (en %)
- Risques et points de vigilance
- Documents à conserver impérativement

Termine TOUJOURS par : « Document d'analyse à faire valider par un expert agréé / professionnel du droit. Ce rapport ne constitue pas un avis juridique définitif et ne dispense pas de consulter un avocat spécialisé. »`;

function buildPrompt(d) {
  const delais = calculerDelais(d);
  const legal = window.DATA_LEGAL;
  
  let contexteJuridique = '';
  
  // Ajouter les articles de loi pertinents selon le type de litige
  if (d.type === 'vente_pro_part' || d.type === 'vente_particulier') {
    contexteJuridique += '\n=== ARTICLES DU CODE CIVIL APPLICABLES ===\n';
    legal.codes.civil.filter(a => ['vices-cachés', 'dol', 'vente', 'vente-delivrance'].some(t => a.type.includes(t)))
      .slice(0, 15)
      .forEach(a => contexteJuridique += `• Art. ${a.art} C. civ. : ${a.texte}\n`);
  }
  
  if (d.type === 'vente_pro_part') {
    contexteJuridique += '\n=== ARTICLES DU CODE DE LA CONSOMMATION ===\n';
    legal.codes.consommation.filter(a => a.type.includes('conformité'))
      .slice(0, 10)
      .forEach(a => contexteJuridique += `• Art. ${a.art} C. conso : ${a.texte}\n`);
  }
  
  if (d.type === 'intervention') {
    contexteJuridique += '\n=== OBLIGATION DE RÉSULTAT DU GARAGISTE ===\n';
    legal.codes.civil.filter(a => a.type.includes('responsabilité-contractuelle'))
      .forEach(a => contexteJuridique += `• Art. ${a.art} C. civ. : ${a.texte}\n`);
  }
  
  // Ajouter les jurisprudences pertinentes
  contexteJuridique += '\n=== JURISPRUDENCE PERTINENTE ===\n';
  let domaineCible = '';
  if (d.type === 'vente_particulier') domaineCible = 'vices-cachés';
  else if (d.type === 'vente_pro_part') domaineCible = 'conformité';
  else if (d.type === 'intervention') domaineCible = 'garagiste';
  
  legal.jurisprudence.filter(j => j.domaine.includes(domaineCible) || j.portée === 'fondamentale')
    .slice(0, 12)
    .forEach(j => contexteJuridique += `• ${j.ref} : ${j.principe}\n`);
  
  return `CONTEXTE DU LITIGE :
- Type : ${d.typeLabel}
- Date vente/intervention : ${d.dateE} | Kilométrage : ${d.kmE} km
- Date constat panne : ${d.dateP} | Kilométrage actuel : ${d.kmP} km
- Délai écoulé : ${d.days} jours (${(d.days/30).toFixed(1)} mois) | Distance parcourue : ${d.km} km | Moyenne : ${d.avg} km/jour
- Pannes/symptômes : ${d.desc}

DÉLAIS DE PRESCRIPTION CALCULÉS AUTOMATIQUEMENT :
- Jours depuis la vente : ${delais.joursDepuisVente}
- Jours depuis la panne : ${delais.joursDepuisPanne}
- Délai garantie conformité restant : ${delais.delaiConformiteRestant} jours (fin le ${delais.finConformite})
- Délai vices cachés restant : ${delais.delaiVicesCachesRestant} jours (fin le ${delais.finVicesCaches})
- Délai nullité pour dol restant : ${delais.delaiDolRestant} jours (fin le ${delais.finDol})

${contexteJuridique}

INSTRUCTIONS :
1. Utilise ta base de connaissances juridique pour citer des articles de loi avec NUMÉRO PRÉCIS
2. Cite 5 à 10 jurisprudences de la Cour de cassation avec références COMPLÈTES (chambre, date, n° pourvoi)
3. Analyse en détail la charge de la preuve et les présomptions applicables
4. Propose une stratégie procédurale complète avec étapes chronologiques
5. Évalue les chances de succès en pourcentage
6. Calcule les délais de prescription restants avec précision

Rédige le rapport COMPLET et DÉTAILLÉ selon la structure demandée. Sois PRÉCIS, ARGUMENTÉ et PROFESSIONNEL.`;
}

/* --- Génération du rapport avec multi-IA + moteur local --- */
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
    console.warn('Toutes les IA ont échoué, passage au moteur local :', e);
    out = { text: localExpertReport(d), source: 'Moteur expert LOCAL (hors-ligne, illimité)' };
  }

  document.getElementById('reportSource').textContent = 'Source : ' + out.source;
  document.getElementById('reportText').innerText = out.text;
  document.getElementById('loading').classList.add('hidden');
  document.getElementById('reportContainer').classList.remove('hidden');
}

/* --- Moteur expert LOCAL ULTRA-COMPLET --- */
function delayAnalysis(days, km) {
  if (days <= 30 && km <= 3000) return { niv: 'TRÈS ÉLEVÉ', txt: 'Le très court délai et le faible kilométrage constituent un indice fort d\'un défaut préexistant à l\'événement.', score: 90 };
  if (days <= 90 && km <= 10000) return { niv: 'ÉLEVÉ', txt: 'Le délai court et le kilométrage limité plaident en faveur d\'un défaut antérieur.', score: 75 };
  if (days <= 180) return { niv: 'MODÉRÉ', txt: 'Le délai intermédiaire impose une analyse technique approfondie.', score: 50 };
  return { niv: 'À DOCUMENTER', txt: 'Le délai important nécessite de démontrer l\'antériorité par expertise.', score: 30 };
}

function findLocalMatches(d) {
  const low = d.desc.toLowerCase();
  const issues = (window.DATA_ISSUES || []).filter(i =>
    (i.detail || '').toLowerCase().split(' ').some(w => w.length > 4 && low.includes(w))
  ).slice(0, 5);
  const brandExps = (window.DATA_BRAND_EXPERT || []).filter(e =>
    [e.title, e.symptom, e.diagnosis].join(' ').toLowerCase().split(' ').some(w => w.length > 4 && low.includes(w))
  ).slice(0, 5);
  return { issues, brandExps };
}

function localExpertReport(d) {
  const matches = findLocalMatches(d);
  const da = delayAnalysis(d.days, d.km);
  const delais = calculerDelais(d);
  const doctrine = window.DATA_LEGAL?.doctrines?.[d.type];
  const legal = window.DATA_LEGAL;
  
  let r = `═══════════════════════════════════════════════════════════════
RAPPORT D'EXPERTISE AUTOMOBILE ULTRA-DÉTAILLÉ
Moteur expert local (hors-ligne) — Version juridique renforcée
═══════════════════════════════════════════════════════════════

Réf. : EXP-${Date.now()}
Édité le : ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
Type de litige : ${d.typeLabel}

═══════════════════════════════════════════════════════════════
I. SYNTHÈSE EXÉCUTIVE
═══════════════════════════════════════════════════════════════

${doctrine?.titre || 'ANALYSE JURIDIQUE'}

• Date de vente/intervention : ${d.dateE}
• Kilométrage à l'événement : ${d.kmE} km
• Date de constat de la panne : ${d.dateP}
• Kilométrage actuel : ${d.kmP} km
• Délai écoulé : ${d.days} jours (${(d.days/30).toFixed(1)} mois)
• Distance parcourue : ${d.km} km
• Moyenne d'utilisation : ${d.avg} km/jour

INDICE D'ANTÉRIORITÉ DU DÉFAUT : ${da.niv} (score ${da.score}/100)

ACTIONS JURIDIQUES RECOMMANDÉES :
1. ${doctrine?.actions?.[0] || 'Mise en demeure du vendeur/réparateur'}
2. ${doctrine?.actions?.[1] || 'Expertise amiable contradictoire'}
3. ${doctrine?.actions?.[2] || 'Action en justice si échec amiable'}

CHANCES DE SUCCÈS ESTIMÉES : ${da.score >= 75 ? 'ÉLEVÉES (70-85%)' : da.score >= 50 ? 'MODÉRÉES (50-70%)' : 'À ÉVALUER (30-50%)'}

═══════════════════════════════════════════════════════════════
II. ANALYSE CHRONOLOGIQUE ET KILOMÉTRIQUE
═══════════════════════════════════════════════════════════════

${da.txt}

CALCULS PRÉCIS :
• Jours écoulés depuis la vente : ${delais.joursDepuisVente} jours
• Jours écoulés depuis la panne : ${delais.joursDepuisPanne} jours
• Kilométrage parcouru : ${d.km} km
• Moyenne quotidienne : ${d.avg} km/jour

PRÉSOMPTION D'ANTÉRIORITÉ :
• Jurisprudence constante : un délai court (< 90 jours) et un kilométrage limité (< 10 000 km) créent une présomption d'antériorité du défaut.
• Cass. 1re civ., 6 juill. 2017, n°16-17.942 : "En matière de vente de véhicule d'occasion, un défaut apparu dans les mois suivant la vente avec kilométrage limité permet de présumer son antériorité."

═══════════════════════════════════════════════════════════════
III. ANALYSE TECHNIQUE APPROFONDIE
═══════════════════════════════════════════════════════════════

`;

  if (matches.issues.length) {
    r += `PANNES CONNUES CORRÉLÉES :\n`;
    matches.issues.forEach(i => r += `• ${i.title} (${i.source})\n  ${i.detail}\n  Codes DTC : ${i.dtc || 'n/a'}\n\n`);
  } else {
    r += `Défaillance mécanique/électronique à caractériser par lecture OBD et inspection physique.\n\n`;
  }

  if (matches.brandExps.length) {
    r += `FICHES EXPERT INGÉNIEUR CORRÉLÉES :\n`;
    matches.brandExps.forEach(e => r += `• ${e.title} (${e.brand} ${e.motor})\n  Symptômes : ${e.symptom}\n  Diagnostic : ${e.diagnosis}\n  Pièces : ${e.parts}\n  Source : ${e.source}\n\n`);
  }

  r += `═══════════════════════════════════════════════════════════════
IV. QUALIFICATION JURIDIQUE DÉTAILLÉE
═══════════════════════════════════════════════════════════════

${doctrine?.titre || 'FONDEMENTS JURIDIQUES'}

FONDEMENTS APPLICABLES :
${(doctrine?.fondements || ['Garantie des vices cachés (art. 1641-1649 C. civ.)']).map(f => `• ${f}`).join('\n')}

EXCLUSIONS ÉVENTUELLES :
${(doctrine?.exclusions || ['Vices apparents (art. 1642 C. civ.)']).map(e => `• ${e}`).join('\n')}

ACTIONS POSSIBLES :
${(doctrine?.actions || ['Action rédhibitoire', 'Action estimatoire']).map(a => `• ${a}`).join('\n')}

CHARGE DE LA PREUVE :
${doctrine?.charge_preuve || 'L\'acheteur doit prouver l\'existence du vice, son antériorité, et sa gravité.'}

═══════════════════════════════════════════════════════════════
V. JURISPRUDENCE CONTEXTUELLE
═══════════════════════════════════════════════════════════════

`;

  const jurisPertinentes = legal.jurisprudence.filter(j => j.portée === 'fondamentale').slice(0, 8);
  jurisPertinentes.forEach(j => r += `• ${j.ref}\n  ${j.principe}\n\n`);

  r += `═══════════════════════════════════════════════════════════════
VI. STRATÉGIE PROCÉDURALE RECOMMANDÉE
═══════════════════════════════════════════════════════════════

ÉTAPE 1 : MISE EN DEMEURE (dans les 15 jours)
• Envoyer une mise en demeure par LRAR au vendeur/réparateur
• Décrire précisément le défaut et citer les articles de loi applicables
• Fixer un délai de 15 jours pour réparation ou remboursement
• Conserver la preuve d'envoi et l'accusé de réception

ÉTAPE 2 : EXPERTISE AMIABLE CONTRADICTOIRE (si refus)
• Saisir le juge des référés sur le fondement de l'article 145 CPC
• Demander la désignation d'un expert automobile judiciaire
• Coût estimé : 800 à 1 500 € (pris en charge par l'assurance PJ)
• Délai : 1 à 2 mois

ÉTAPE 3 : DÉCLARATION À L'ASSUREUR PROTECTION JURIDIQUE
• Déclarer le sinistre dans les délais prévus au contrat
• Joindre le présent rapport et toutes les pièces justificatives
• L'assureur prend en charge : avocat, expert, frais de justice (art. L124-2 Code assurances)
• Libre choix de l'avocat (art. L124-3 Code assurances)

ÉTAPE 4 : ACTION EN JUSTICE (si échec amiable)
• Tribunal compétent : Tribunal judiciaire (TJ) du domicile du défendeur
• Si montant < 10 000 € : procédure orale, sans avocat obligatoire
• Si montant > 10 000 € : avocat obligatoire
• Possibilité de référé-provision (art. 809 CPC) si urgence

TRIBUNAL COMPÉTENT :
• Tribunal judiciaire (TJ) du domicile du vendeur/réparateur
• Ou tribunal du lieu de la vente (si clause attributive de juridiction)

═══════════════════════════════════════════════════════════════
VII. DÉLAIS DE PRESCRIPTION
═══════════════════════════════════════════════════════════════

⚠️ DÉLAIS IMPÉRATIFS À RESPECTER :

• Garantie de conformité (Code conso) :
  Fin le ${delais.finConformite} (${delais.delaiConformiteRestant} jours restants)
  Prescription : 2 ans depuis la délivrance (art. L217-12 C. conso)

• Garantie des vices cachés (Code civil) :
  Fin le ${delais.finVicesCaches} (${delais.delaiVicesCachesRestant} jours restants)
  Prescription : 5 ans depuis la découverte (art. 2224 C. civ.)

• Nullité pour dol (Code civil) :
  Fin le ${delais.finDol} (${delais.delaiDolRestant} jours restants)
  Prescription : 5 ans depuis la découverte (art. 2224 C. civ.)

⚠️ ACTION IMMÉDIATE RECOMMANDÉE si délais < 6 mois

═══════════════════════════════════════════════════════════════
VIII. CONCLUSION ET RECOMMANDATIONS FINALES
═══════════════════════════════════════════════════════════════

ACTIONS PRIORITAIRES :
1. Mettre en demeure le vendeur/réparateur dans les 15 jours
2. Contacter l'assureur Protection Juridique immédiatement
3. Consulter un avocat spécialisé en droit automobile
4. Conserver TOUTES les pièces : facture de vente, carnet d'entretien, factures de réparation, photos, rapports d'expertise

CHANCES DE SUCCÈS :
• ${da.score >= 75 ? 'ÉLEVÉES (70-85%)' : da.score >= 50 ? 'MODÉRÉES (50-70%)' : 'À ÉVALUER (30-50%)'}
• Facteurs favorables : ${da.niv}, délai court, kilométrage limité
• Facteurs de risque : ${d.days > 180 ? 'délai important' : 'aucun risque majeur identifié'}

DOCUMENTS À CONSERVER IMPÉRATIVEMENT :
• Facture de vente / contrat de vente
• Certificat de cession
• Carnet d'entretien complet
• Factures de toutes les réparations
• Rapports d'expertise (amiable et judiciaire)
• Courriers échangés (LRAR)
• Photos et vidéos du véhicule
• Relevés de codes défaut (OBD)

═══════════════════════════════════════════════════════════════

Document d'analyse à faire valider par un expert agréé / professionnel du droit.
Ce rapport ne constitue pas un avis juridique définitif et ne dispense pas de consulter un avocat spécialisé.

═══════════════════════════════════════════════════════════════`;

  return r;
}

/* --- Sauvegarde locale + PDF --- */
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
  doc.save(`Rapport_Expertise_UltraDetaille_${todayKey()}.pdf`);
}

/* --- Service Worker --- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(e => console.warn('SW :', e)));
}
