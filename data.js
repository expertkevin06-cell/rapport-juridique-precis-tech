/* =========================================================
   BASE LOCALE EXPERT AUTO — data.js v5
   Base technique + Base JURIDIQUE ULTRA-COMPLÈTE
   ========================================================= */

window.DATA_ISSUES = [
  { brand:'dacia', model:'Bigster', title:'Ressorts suspension AR : rupture', detail:'Rupture ressorts AR, diamètre fil insuffisant. Campagne rappel : remplacement 2 ressorts AR.', source:'Rappel Conso / Safety Gate', dtc:'', fuel:'any' },
  { brand:'peugeot', model:'208 II', title:'Courroie humide PureTech', detail:'Débris dans huile, pompe à huile colmatée, risque rupture courroie.', source:'Rappel Conso', dtc:'P0087,P0340', fuel:'essence' },
  { brand:'peugeot', model:'2008', title:'Courroie humide PureTech', detail:'Idem 208 II.', source:'Rappel Conso', dtc:'P0087,P0340', fuel:'essence' },
  { brand:'peugeot', model:'3008 II', title:'AdBlue BlueHDi', detail:'Countdown AdBlue, pompe/injecteur défaillants.', source:'Campagne constructeur', dtc:'P20EE,P204F', fuel:'diesel' },
  { brand:'peugeot', model:'3008 III', title:'AdBlue BlueHDi', detail:'Idem 3008 II.', source:'Campagne constructeur', dtc:'P20EE,P204F', fuel:'diesel' },
  { brand:'citroen', model:'C3 IV', title:'Courroie humide PureTech', detail:'Idem Peugeot.', source:'Rappel Conso', dtc:'P0087,P0340', fuel:'essence' },
  { brand:'citroen', model:'C4 III', title:'AdBlue BlueHDi', detail:'Idem Peugeot.', source:'Campagne constructeur', dtc:'P20EE,P204F', fuel:'diesel' },
  { brand:'renault', model:'Clio V', title:'EGR dCi', detail:'Encrassement vanne EGR, perte puissance, régénérations fréquentes.', source:'TSB', dtc:'P0401,P2002', fuel:'diesel' },
  { brand:'renault', model:'Clio VI', title:'EGR dCi', detail:'Idem Clio V.', source:'TSB', dtc:'P0401,P2002', fuel:'diesel' },
  { brand:'renault', model:'Captur II', title:'GPF TCe', detail:'Filtre à particules essence colmaté, perte puissance courts trajets.', source:'TSB', dtc:'P2463', fuel:'essence' },
  { brand:'renault', model:'Megane IV', title:'EGR dCi', detail:'Idem Clio V.', source:'TSB', dtc:'P0401,P2002', fuel:'diesel' },
  { brand:'volkswagen', model:'Golf 8', title:'Chaîne distribution TSI', detail:'Claquement à froid, tendeur défaillant.', source:'TSB', dtc:'P0016', fuel:'essence' },
  { brand:'volkswagen', model:'Tiguan', title:'AdBlue TDI', detail:'Capteurs NOx, injecteur AdBlue défaillants.', source:'Campagne constructeur', dtc:'P20EE,P2201', fuel:'diesel' },
  { brand:'volkswagen', model:'T-Roc', title:'Mécatronique DSG DQ200', detail:'Broutage, vitesses non engagées.', source:'TSB', dtc:'P0700', fuel:'any' },
  { brand:'audi', model:'A3', title:'Chaîne distribution TSI', detail:'Idem Golf 8.', source:'TSB', dtc:'P0016', fuel:'essence' },
  { brand:'bmw', model:'Serie 3 G20', title:'Chaîne B47', detail:'Claquement à froid, tendeur défaillant.', source:'NHTSA/TSB', dtc:'P0016,P0335', fuel:'diesel' },
  { brand:'bmw', model:'X1', title:'Pompe HP N20', detail:'Pression rail insuffisante.', source:'TSB', dtc:'P0087', fuel:'essence' },
  { brand:'mercedes', model:'Classe C W206', title:'AdBlue OM654', detail:'Capteurs NOx + injecteur AdBlue.', source:'Campagne constructeur', dtc:'P2201,P20EE', fuel:'diesel' },
  { brand:'mercedes', model:'GLC', title:'Chaîne OM651', detail:'Usure patins chaîne.', source:'TSB', dtc:'P0016', fuel:'diesel' },
  { brand:'toyota', model:'Yaris', title:'Pompe onduleur hybride', detail:'Non-démarrage, défaut système hybride.', source:'TSB', dtc:'P0A93', fuel:'hybride' },
  { brand:'toyota', model:'Corolla', title:'Pompe onduleur hybride', detail:'Idem Yaris.', source:'TSB', dtc:'P0A93', fuel:'hybride' },
  { brand:'hyundai', model:'Tucson', title:'Serrage moteur Theta II', detail:'Claquement, limailles, coussinets bielles.', source:'NHTSA', dtc:'', fuel:'essence' },
  { brand:'hyundai', model:'Kona EV', title:'Incendie batterie', detail:'Risque incendie modules HV.', source:'Safety Gate/NHTSA', dtc:'P0AA6', fuel:'electrique' },
  { brand:'hyundai', model:'Ioniq 5', title:'ICCU', detail:'Non-charge 12V, DC-DC défaillant.', source:'NHTSA', dtc:'U0111', fuel:'electrique' },
  { brand:'kia', model:'Sportage', title:'Serrage Theta II', detail:'Idem Hyundai Tucson.', source:'NHTSA', dtc:'', fuel:'essence' },
  { brand:'kia', model:'EV6', title:'ICCU', detail:'Idem Ioniq 5.', source:'Campagne constructeur', dtc:'U0111', fuel:'electrique' },
  { brand:'tesla', model:'Model 3', title:'eMMC MCU', detail:'Écran noir, reboots, lenteur.', source:'NHTSA', dtc:'U0101', fuel:'electrique' },
  { brand:'tesla', model:'Model Y', title:'Freinage fantôme ACC', detail:'Freinage brusque inopiné.', source:'NHTSA', dtc:'', fuel:'electrique' },
  { brand:'ford', model:'Focus', title:'Courroie humide EcoBoost', detail:'Bruit courroie, ratés après stationnement.', source:'TSB', dtc:'P0300,P0301', fuel:'essence' },
  { brand:'ford', model:'Puma', title:'PowerShift', detail:'Broutage embrayage sec.', source:'TSB/NHTSA', dtc:'P0700', fuel:'any' },
  { brand:'opel', model:'Corsa F', title:'Courroie humide PureTech', detail:'Idem Peugeot.', source:'Rappel Conso', dtc:'P0087', fuel:'essence' },
  { brand:'nissan', model:'Leaf', title:'SOH batterie', detail:'Perte autonomie, charge lente.', source:'Campagne constructeur', dtc:'', fuel:'electrique' },
  { brand:'volvo', model:'EX30', title:'Batterie HV', detail:'Limitation puissance, alerte surchauffe.', source:'Safety Gate', dtc:'P0AA6', fuel:'electrique' },
  { brand:'mg', model:'MG4', title:'12V / DC-DC', detail:'Non-démarrage, défaut 12V.', source:'Campagne constructeur', dtc:'U0111', fuel:'electrique' },
  { brand:'byd', model:'Atto 3', title:'BMS LFP', detail:'Déséquilibre cellules, perte autonomie.', source:'Campagne constructeur', dtc:'P0AA6', fuel:'electrique' }
];

window.DATA_BRAND_EXPERT = [
  { brand:'renault', motor:'dCi', title:'EGR/FAP diesel Renault', symptom:'Perte puissance, voyant, régénérations fréquentes', diagnosis:'1) Lire P0401/P2002 au diag 2) Test ouverture EGR consigne/réel 3) Mesure ΔP FAP 4) Nettoyage/remplacement + adaptation', parts:'EGR, FAP', dtc:'P0401, P2002', source:'Campagne constructeur' },
  { brand:'renault', motor:'TCe', title:'GPF essence', symptom:'Perte puissance courts trajets, voyant', diagnosis:'1) Lire P2463 2) Régénération forcée 3) Contrôle GPF 4) Remplacement si colmaté', parts:'GPF', dtc:'P2463', source:'TSB' },
  { brand:'peugeot', motor:'PureTech', title:'Courroie humide Stellantis', symptom:'Bruit courroie, perte puissance, pompe à huile colmatée', diagnosis:'1) Gabarit largeur courroie (seuil ~9,4 mm) 2) Inspection carter débris 3) Pression huile ralenti chaud 4) Kit courroie + pompe à huile + vidange', parts:'Kit courroie, pompe à huile', dtc:'P0087, P0340', source:'Rappel Conso' },
  { brand:'peugeot', motor:'BlueHDi', title:'AdBlue Stellantis', symptom:'Message défaut AdBlue, countdown non-démarrage', diagnosis:'1) Lire P20EE/P204F 2) Test débit pompe au diag 3) Inspection cristallisation injecteur 4) Remplacement + réinitialisation', parts:'Pompe/injecteur AdBlue', dtc:'P20EE, P204F', source:'Campagne constructeur' },
  { brand:'citroen', motor:'PureTech', title:'Courroie/AdBlue Stellantis', symptom:'Selon motorisation', diagnosis:'Procédures Stellantis', parts:'Kit courroie/pompe', dtc:'P0087, P20EE', source:'Rappel Conso' },
  { brand:'volkswagen', motor:'TSI', title:'Chaîne distribution TSI', symptom:'Claquement à froid', diagnosis:'1) Scope synchro vilo/AAC 2) Contrôle tendeur 3) Kit chaîne + guides', parts:'Kit chaîne, tendeur', dtc:'P0016', source:'TSB' },
  { brand:'volkswagen', motor:'TDI', title:'AdBlue/NOx TDI', symptom:'Voyant NOx, limitation puissance', diagnosis:'1) Capteurs NOx amont/aval 2) Injecteur AdBlue 3) MAJ logiciel NOx', parts:'Capteur NOx, injecteur', dtc:'P20EE, P2201', source:'Campagne constructeur' },
  { brand:'volkswagen', motor:'DSG', title:'Mécatronique DQ200/DQ250', symptom:'Broutage démarrage, vitesses non engagées', diagnosis:'1) Lire adaptations 2) Niveau huile mécatronique 3) TSB update 4) Remplacer mécatronique', parts:'Mécatronique', dtc:'P0700', source:'TSB' },
  { brand:'bmw', motor:'B47', title:'Chaîne distribution BMW', symptom:'Claquement métallique à froid, P0016', diagnosis:'1) Scope synchro vilo/AAC 2) Tendeur 3) Kit chaîne + guides', parts:'Kit chaîne', dtc:'P0016, P0335', source:'NHTSA/TSB' },
  { brand:'bmw', motor:'N20', title:'Pompe HP essence (GDI)', symptom:'Pression rail basse, P0087', diagnosis:'1) Pression rail mesurée vs consigne 2) Pompe HP 3) Remplacement', parts:'Pompe HP', dtc:'P0087', source:'TSB' },
  { brand:'mercedes', motor:'OM654', title:'Injecteurs AdBlue + capteurs NOx', symptom:'Défaut NOx, countdown AdBlue', diagnosis:'1) Valeurs capteurs NOx 2) Cristallisation injecteur 3) Remplacement + réinit compteurs', parts:'Capteur NOx, injecteur', dtc:'P2201, P20EE', source:'Campagne constructeur' },
  { brand:'mercedes', motor:'OM651', title:'Chaîne OM651', symptom:'Claquement, usure patins', diagnosis:'Kit chaîne complet', parts:'Kit chaîne', dtc:'P0016', source:'TSB' },
  { brand:'toyota', motor:'Hybrid', title:'Pompe onduleur HSD', symptom:'Non-démarrage, défaut système hybride', diagnosis:'1) Codes onduleur 2) Test débit pompe 12V 3) Niveau LDR onduleur 4) Remplacement pompe', parts:'Pompe onduleur', dtc:'P0A93', source:'TSB' },
  { brand:'hyundai', motor:'Theta II', title:'Serrage moteur Theta II', symptom:'Claquement, limailles dans huile', diagnosis:'1) Analyse KSDS 2) Contrôle limailles 3) Coussinets/moteur sous campagne', parts:'Coussinets bielles', dtc:'', source:'NHTSA' },
  { brand:'hyundai', motor:'ICCU', title:'ICCU Ioniq/Kona EV', symptom:'Non-charge, défaut 12V', diagnosis:'1) Codes ICCU 2) Test DC-DC 3) Remplacement ICCU + 12V', parts:'ICCU, 12V', dtc:'U0111, P0AA6', source:'NHTSA' },
  { brand:'ford', motor:'EcoBoost', title:'Courroie humide + LDR cylindres', symptom:'Bruit courroie, ratés après stationnement', diagnosis:'1) État courroie 2) Endoscopie/compression 3) Joints culasse/injecteurs 4) Kit courroie + joints', parts:'Kit courroie, joints', dtc:'P0300, P0301', source:'TSB' },
  { brand:'ford', motor:'PowerShift', title:'Broutage embrayage sec', symptom:'Vibrations démarrage, à-coups basse vitesse', diagnosis:'1) Adaptations embrayage 2) Apprentissage TSB 3) Kit embrayage si confirmé', parts:'Kit embrayage', dtc:'P0700', source:'TSB/NHTSA' },
  { brand:'tesla', motor:'', title:'eMMC MCU', symptom:'Écran noir, reboots, lenteur', diagnosis:'1) Santé eMMC mode service 2) Logs reboot 3) MCU sous garantie étendue', parts:'MCU, eMMC', dtc:'U0101', source:'NHTSA' },
  { brand:'tesla', motor:'', title:'Freinage fantôme ACC', symptom:'Freinage brusque inopiné', diagnosis:'1) Version caméras 2) Recalibration 3) MAJ logicielle', parts:'Caméras', dtc:'', source:'NHTSA' },
  { brand:'nissan', motor:'', title:'SOH batterie Leaf', symptom:'Perte autonomie, charge lente', diagnosis:'1) SOH au diag 2) Delta cellules 3) Garantie si SOH <70% 4) Équilibrage', parts:'Modules batterie', dtc:'', source:'Campagne constructeur' }
];

window.DATA_LEGAL = {
  codes: {
    civil: [
      { art:'1104', texte:"Les contrats doivent être négociés, formés et exécutés de bonne foi. Cette disposition est d'ordre public.", type:'ordre-public' },
      { art:'1112-1', texte:"Celle des parties qui connaît une information dont elle sait le caractère déterminant pour l'autre doit l'en informer dès lors que, légitimement, cette dernière ignore cette information ou fait confiance à son cocontractant.", type:'obligation-information' },
      { art:'1130', texte:"L'erreur, le dol et la violence vicient le consentement lorsqu'ils sont de telle nature que, sans eux, l'une des parties n'aurait pas contractée ou aurait contracté à des conditions substantiellement différentes.", type:'vices-consentement' },
      { art:'1137', texte:"Le dol est le fait pour un contractant d'obtenir le consentement de l'autre par des manœuvres ou des mensonges. Constitue également un dol la dissimulation intentionnelle par l'un des contractants d'une information dont il sait le caractère déterminant pour l'autre partie (réticence dolosive).", type:'dol' },
      { art:'1183', texte:"La nullité est absolue lorsque la règle violée a pour objet la sauvegarde de l'intérêt général.", type:'nullité-absolue' },
      { art:'1184', texte:"La nullité est relative lorsque la règle violée a pour objet la sauvegarde d'un intérêt privé.", type:'nullité-relative' },
      { art:'1217', texte:"L'inexécution est suffisamment grave lorsqu'elle justifie la résolution du contrat.", type:'inexécution' },
      { art:'1218', texte:"Il y a force majeure en matière contractuelle lorsqu'un événement échappant au contrôle du débiteur, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, empêche l'exécution de son obligation.", type:'force-majeure' },
      { art:'1221', texte:"Le créancier d'une obligation peut, après mise en demeure, en poursuivre l'exécution en nature sauf si cette exécution est impossible ou s'il existe une disproportion manifeste entre son coût au profit du créancier et son intérêt pour lui.", type:'exécution-nature' },
      { art:'1223', texte:"Le créancier peut accepter une exécution imparfaite du contrat et solliciter une réduction proportionnelle du prix.", type:'réfaction-prix' },
      { art:'1224', texte:"La résolution résulte soit de l'application d'une clause résolutoire soit, en cas d'inexécution suffisamment grave, d'une notification du créancier au débiteur ou d'une décision de justice.", type:'résolution' },
      { art:'1226', texte:"La résolution est soumise à une mise en demeure préalable restée infructueuse, sauf clause résolutoire.", type:'résolution' },
      { art:'1231-1', texte:"Le débiteur est condamné, s'il y a lieu, au paiement de dommages et intérêts soit à raison de l'inexécution de l'obligation, soit à raison du retard dans l'exécution, toutes les fois qu'il ne justifie pas que l'exécution a été empêchée par la force majeure.", type:'responsabilité-contractuelle' },
      { art:'1231-2', texte:"Les dommages et intérêts dus au créancier sont, en général, de la perte qu'il a faite et du gain dont il a été privé (perte subie + gain manqué).", type:'dommages-intérêts' },
      { art:'1240', texte:"Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", type:'responsabilité-délictuelle' },
      { art:'1245', texte:"Le producteur est responsable du dommage causé par un défaut de son produit, qu'il soit ou non lié par un contrat avec la victime.", type:'responsabilité-produit' },
      { art:'1603', texte:"Le vendeur est tenu d'expliquer ce qu'il s'oblige à livrer, et de garantir la chose qu'il vend.", type:'vente' },
      { art:'1604', texte:"La délivrance est le transport de la chose vendue en la puissance et possession de l'acheteur.", type:'vente-delivrance' },
      { art:'1610', texte:"Si le vendeur manque à faire la délivrance dans le temps convenu entre les parties, l'acquéreur pourra demander la résolution de la vente.", type:'vente-delivrance' },
      { art:'1625', texte:"La garantie a pour objet d'assurer à l'acquéreur la possession paisible de la chose vendue et de le garantir des défauts cachés.", type:'garantie' },
      { art:'1641', texte:"Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la rendent impropre à l'usage auquel on la destine, ou qui diminuent tellement cet usage, que l'acheteur ne l'aurait pas acquise, ou n'en aurait donné qu'un moindre prix, s'il les avait connus.", type:'vices-cachés' },
      { art:'1642', texte:"Le vendeur n'est pas tenu des vices apparents et dont l'acheteur a pu se convaincre lui-même.", type:'vices-cachés' },
      { art:'1643', texte:"Le vendeur est tenu des vices cachés, quand même il ne les aurait pas connus, à moins que, dans ce cas, il n'ait stipulé qu'il ne s'oblige à aucune garantie.", type:'vices-cachés' },
      { art:'1644', texte:"Dans le cas des articles 1641 et 1643, l'acheteur a le choix de rendre la chose et de se faire restituer le prix, ou de garder la chose et de se faire rendre une partie du prix, telle qu'elle sera arbitrée par des experts.", type:'vices-cachés-actions' },
      { art:'1645', texte:"Si le vendeur connaissait les vices de la chose, il est tenu, non seulement à la restitution du prix qu'il en a reçu, mais encore de tous les dommages-intérêts envers l'acheteur.", type:'vices-cachés-mauvaise-foi' },
      { art:'1646', texte:"Si le vendeur ignorait les vices de la chose, il ne sera tenu qu'à la restitution du prix et à rembourser à l'acquéreur les frais occasionnés par la vente.", type:'vices-cachés-bonne-foi' },
      { art:'1648', texte:"L'action résultant des vices rédhibitoires doit être intentée par l'acquéreur, dans un bref délai, suivant la nature des vices rédhibitoires.", type:'vices-cachés-prescription' },
      { art:'2224', texte:"Les actions personnelles ou mobilières se prescrivent par cinq ans à compter du jour où le titulaire d'un droit a connu ou aurait dû connaître les faits lui permettant de l'exercer.", type:'prescription' }
    ],
    consommation: [
      { art:'L111-1', texte:"Tout professionnel doit informer le consommateur, avant la conclusion du contrat, de manière lisible et compréhensible, des caractéristiques essentielles du bien ou du service, du prix et des délais.", type:'information' },
      { art:'L121-2', texte:"Constitue une pratique commerciale trompeuse : 1° une pratique qui crée une confusion ; 2° des allégations fausses ou de nature à induire en erreur.", type:'pratiques-trompeuses' },
      { art:'L121-3', texte:"Une pratique commerciale est également trompeuse si elle omet, dissimule ou fournit de façon inintelligible, ambiguë ou à contre-temps une information substantielle.", type:'pratiques-trompeuses' },
      { art:'L132-1', texte:"Dans les contrats conclus entre professionnels et non-professionnels ou consommateurs, sont abusives les clauses qui ont pour objet ou pour effet de créer, au détriment du non-professionnel ou du consommateur, un déséquilibre significatif entre les droits et obligations des parties.", type:'clauses-abusives' },
      { art:'L217-4', texte:"Le vendeur est tenu de livrer un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance. Il répond également des défauts de conformité résultant de l'emballage, des instructions de montage ou de l'installation.", type:'garantie-conformité' },
      { art:'L217-5', texte:"Pour être conforme au contrat, le bien doit : 1° Être propre à l'usage habituellement attendu d'un bien semblable ; 2° Correspondre à la description donnée par le vendeur ; 3° Présenter les qualités présentées par le vendeur.", type:'garantie-conformité' },
      { art:'L217-7', texte:"Les défauts de conformité qui apparaissent dans un délai de vingt-quatre mois à partir de la délivrance du bien sont, sauf preuve contraire, présumés exister au moment de la délivrance. Pour un véhicule d'occasion, le délai est de douze mois.", type:'garantie-conformité-présomption' },
      { art:'L217-9', texte:"En cas de défaut de conformité, l'acheteur choisit entre la réparation et le remplacement du bien. Le vendeur ne peut procéder selon la modalité choisie si elle entraîne un coût manifestement disproportionné.", type:'garantie-conformité-actions' },
      { art:'L217-10', texte:"Si la réparation ou le remplacement sont impossibles ou n'ont pas été mis en œuvre dans le délai d'un mois, l'acheteur peut rendre le bien et se faire restituer le prix ou garder le bien et se faire rendre une partie du prix.", type:'garantie-conformité-actions' },
      { art:'L217-12', texte:"L'action résultant du défaut de conformité se prescrit par deux ans à compter de la délivrance du bien.", type:'garantie-conformité-prescription' }
    ],
    assurances: [
      { art:'L113-8', texte:"Indépendamment de l'application de l'article L. 121-8, le contrat est annulé en cas de réticence ou de fausse déclaration intentionnelle de la part de l'assuré.", type:'déclaration-risque' },
      { art:'L114-1', texte:"Toutes actions dérivant d'un contrat d'assurance sont prescrites par deux ans à compter de l'événement qui y donne naissance.", type:'prescription-assurance' },
      { art:'L124-1', texte:"La garantie de protection juridique a pour objet de prendre en charge les frais exposés dans une procédure judiciaire ou extrajudiciaire.", type:'protection-juridique' },
      { art:'L124-2', texte:"L'assureur de protection juridique prend en charge les honoraires d'avocat, d'expert, d'huissier et les frais de justice.", type:'protection-juridique' },
      { art:'L124-3', texte:"L'assuré a le libre choix de son avocat et de l'expert auquel il recourt.", type:'protection-juridique' }
    ],
    procedure: [
      { art:'9', texte:"Il incombe à chaque partie de prouver conformément à la loi les faits nécessaires au succès de sa prétention.", type:'charge-preuve' },
      { art:'145', texte:"Si, avant tout procès, il existe un motif légitime de conserver ou d'établir la preuve de faits dont pourrait dépendre la solution d'un litige, les mesures d'instruction peuvent être ordonnées à la demande de tout intéressé.", type:'référé-145' },
      { art:'146', texte:"L'expertise est une mesure d'instruction qui ne peut être ordonnée qu'en vue d'éclairer le juge sur une question de fait qui requiert les lumières d'un technicien.", type:'expertise' },
      { art:'808', texte:"Dans tous les cas d'urgence, le président du tribunal peut ordonner en référé toutes les mesures qui ne se heurtent à aucune contestation sérieuse.", type:'référé' },
      { art:'809', texte:"Le président peut toujours, même en présence d'une contestation sérieuse, prescrire en référé les mesures conservatoires qui s'imposent. Il peut accorder une provision au créancier lorsque l'existence de l'obligation n'est pas sérieusement contestable.", type:'référé-provision' },
      { art:'954', texte:"Les conclusions doivent formuler expressément les prétentions des parties et les moyens de fait et de droit sur lesquels chacune de ces prétentions est fondée.", type:'conclusions' }
    ]
  },
  jurisprudence: [
    { ref:'Cass. 3e civ., 14 déc. 2005, n°04-16.164', principe:"Le vice caché doit être antérieur à la vente et suffisamment grave pour rendre le bien impropre à son usage. La preuve de l'antériorité incombe à l'acheteur.", domaine:'vices-cachés', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 4 nov. 2010, n°09-68.779', principe:"Le vendeur professionnel est présumé connaître les vices de la chose qu'il vend (art. 1643 C. civ.).", domaine:'vices-cachés-pro', portée:'fondamentale' },
    { ref:'Cass. com., 24 mai 2017, n°15-23.092', principe:"Le bref délai de l'article 1648 C. civ. court à compter de la découverte du vice, non de la vente.", domaine:'vices-cachés-prescription', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 20 fév. 2019, n°18-10.891', principe:"L'action en garantie des vices cachés est recevable contre le vendeur professionnel automobile quand un défaut mécanique rend le véhicule impropre à un usage normal.", domaine:'vices-cachés-auto', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 6 juill. 2017, n°16-17.942', principe:"En matière de vente de véhicule d'occasion, un défaut apparu dans les mois suivant la vente avec kilométrage limité permet de présumer son antériorité.", domaine:'vices-cachés-auto', portée:'fondamentale' },
    { ref:'Cass. com., 17 mars 2021, n°19-17.273', principe:"Le vendeur qui a connaissance de vices cachés et les dissimule engage sa responsabilité pour dol (réticence dolosive).", domaine:'dol', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 28 mai 2014, n°13-18.567', principe:"En présence d'un vendeur professionnel, la présomption de connaissance des vices permet d'obtenir des dommages-intérêts au-delà de la simple restitution du prix.", domaine:'vices-cachés-pro', portée:'importante' },
    { ref:'Cass. 1re civ., 8 fév. 2018, n°16-25.551', principe:"L'obligation de délivrance conforme implique que le véhicule vendu corresponde aux stipulations contractuelles et soit exempt de défauts.", domaine:'conformité', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 4 juill. 2018, n°17-20.274', principe:"La garantie légale de conformité (Code conso) impose au vendeur professionnel la preuve de l'absence de défaut au jour de la vente pendant 24 mois.", domaine:'conformité-présomption', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 3 oct. 2018, n°17-21.683', principe:"La présomption d'antériorité de la garantie de conformité est d'ordre public et ne peut être écartée par convention.", domaine:'conformité-présomption', portée:'fondamentale' },
    { ref:'Cass. com., 12 fév. 2020, n°18-22.939', principe:"L'acheteur non professionnel bénéficie cumulativement de la garantie légale de conformité et de la garantie des vices cachés.", domaine:'cumul-garanties', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 6 juin 2019, n°18-13.686', principe:"La réticence dolosive du vendeur professionnel automobile, qui omet de révéler un accident antérieur, justifie la nullité du contrat.", domaine:'dol-nullité', portée:'fondamentale' },
    { ref:'Cass. 3e civ., 25 mars 2021, n°20-11.969', principe:"Le compteur kilométrique trafiqué constitue un vice caché ou un dol justifiant la résolution de la vente.", domaine:'dol-km', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 14 sept. 2016, n°15-19.593', principe:"En matière de réparation automobile, le garagiste est tenu d'une obligation de résultat sur les travaux qu'il exécute.", domaine:'garagiste-résultat', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 21 mai 2019, n°18-10.525', principe:"La responsabilité contractuelle du réparateur automobile est engagée en cas de malfaçon ou de non-exécution des travaux confiés.", domaine:'garagiste-malfaçon', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 11 avril 2018, n°17-11.144', principe:"Le garagiste qui ne restitue pas le véhicule exempt du défaut traité manque à son obligation de résultat.", domaine:'garagiste-résultat', portée:'fondamentale' },
    { ref:'Cass. com., 5 déc. 2018, n°17-18.605', principe:"Le réparateur est tenu d'une obligation d'information préalable (devis, pièces à remplacer) sur les travaux nécessaires.", domaine:'garagiste-conseil', portée:'importante' },
    { ref:'Cass. 1re civ., 8 juin 2022, n°21-11.453', principe:"L'obligation de résultat du réparateur automobile s'étend aux pièces fournies et à la main-d'œuvre.", domaine:'garagiste-résultat', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 26 mai 2021, n°20-11.189', principe:"La mise en demeure préalable est une condition de recevabilité de l'action en résolution pour inexécution contractuelle.", domaine:'résolution-mise-demeure', portée:'fondamentale' },
    { ref:'Cass. com., 17 avril 2024, n°23-12.679', principe:"La réfaction du prix peut être prononcée même lorsque l'acheteur choisit de garder le véhicule défectueux.", domaine:'réfaction', portée:'importante' },
    { ref:'Cass. 1re civ., 12 juin 2024, n°23-13.943', principe:"Le vendeur automobile professionnel est tenu d'une obligation de loyauté renforcée envers l'acheteur non professionnel.", domaine:'loyauté-pro', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 7 nov. 2000, n°98-17.453', principe:"La responsabilité du fait des produits défectueux (art. 1245 s.) est autonome et peut être invoquée même en l'absence de lien contractuel.", domaine:'produit-défectueux', portée:'fondamentale' },
    { ref:'CJUE, 20 nov. 2008, aff. C-285/08', principe:"La directive 85/374/CE sur la responsabilité du fait des produits défectueux s'applique aux produits automobiles.", domaine:'produit-défectueux-UE', portée:'fondamentale' },
    { ref:'Cass. 3e civ., 9 mars 2022, n°21-10.325', principe:"L'expertise amiable contradictoire a valeur de preuve devant les tribunaux.", domaine:'expertise-amiable', portée:'importante' },
    { ref:'Cass. 2e civ., 16 sept. 2021, n°20-14.202', principe:"Le référé-provision (art. 809 al. 2 CPC) peut être accordé lorsque l'existence de l'obligation n'est pas sérieusement contestable.", domaine:'référé-provision', portée:'fondamentale' },
    { ref:'Cass. 2e civ., 12 juill. 2018, n°17-19.354', principe:"L'assureur de protection juridique doit prendre en charge les frais d'expertise amiable nécessaires à la défense des intérêts de l'assuré.", domaine:'protection-juridique', portée:'fondamentale' },
    { ref:'Cass. 2e civ., 7 nov. 2019, n°18-20.156', principe:"L'assuré a le libre choix de son avocat dans le cadre de la protection juridique.", domaine:'protection-juridique', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 14 mai 2020, n°19-13.269', principe:"Les clauses limitatives de responsabilité dans les contrats de vente automobile entre professionnels et consommateurs sont réputées non écrites.", domaine:'clauses-abusives', portée:'fondamentale' },
    { ref:'Cass. com., 6 sept. 2023, n°22-14.552', principe:"La clause de non-garantie est inopposable à l'acheteur non professionnel en matière de vente automobile.", domaine:'clauses-abusives', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 5 oct. 2022, n°21-14.119', principe:"L'action en garantie des vices cachés se prescrit par 5 ans à compter de la découverte du vice (art. 2224 C. civ.).", domaine:'prescription', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 14 oct. 2021, n°20-14.615', principe:"Le bref délai de l'art. 1648 C. civ. ne court pas tant que l'acheteur n'a pas eu connaissance effective du vice.", domaine:'prescription-vices-cachés', portée:'fondamentale' }
  ],
  doctrines: {
    vente_particulier: {
      titre: "VENTE ENTRE PARTICULIERS",
      fondements: [
        "Garantie des vices cachés (art. 1641-1649 C. civ.) : 4 conditions cumulatives — vice caché, antérieur, grave, découvert dans bref délai.",
        "Dol / réticence dolosive (art. 1137 C. civ.) : dissimulation intentionnelle d'un défaut connu.",
        "Obligation de délivrance conforme (art. 1604 C. civ.) : livraison d'un bien conforme aux stipulations."
      ],
      exclusions: [
        "La garantie légale de conformité (Code conso) ne s'applique PAS aux ventes entre particuliers.",
        "Les vices apparents que l'acheteur a pu constater lors de la vente (art. 1642 C. civ.)."
      ],
      actions: [
        "Action rédhibitoire : résolution de la vente + restitution du prix (art. 1644 C. civ.).",
        "Action estimatoire : conservation du véhicule + réduction du prix (art. 1644 C. civ.).",
        "Action en nullité pour dol : si dissimulation intentionnelle (art. 1137 C. civ.).",
        "Dommages-intérêts : si le vendeur connaissait le vice (art. 1645 C. civ.)."
      ],
      prescription: "5 ans à compter de la découverte du vice (art. 2224 C. civ.).",
      charge_preuve: "L'acheteur doit prouver l'existence du vice caché, son antériorité à la vente, et sa gravité."
    },
    vente_pro_part: {
      titre: "VENDEUR PROFESSIONNEL → ACHETEUR PARTICULIER",
      fondements: [
        "Garantie légale de conformité (art. L217-4 et s. C. conso) : présomption d'antériorité pendant 24 mois (neuf) ou 12 mois (occasion).",
        "Garantie des vices cachés (art. 1641 s. C. civ.) : présomption de mauvaise foi du vendeur professionnel (art. 1643).",
        "Obligation de délivrance et de conseil (art. 1604, 1112-1 C. civ.).",
        "Pratique commerciale trompeuse (art. L121-2 C. conso).",
        "Responsabilité du fait des produits (art. 1245 s. C. civ.)."
      ],
      exclusions: [
        "Le vendeur professionnel ne peut invoquer les clauses de non-garantie (réputées non écrites).",
        "La présomption de connaissance des vices (art. 1643) rend très difficile l'exonération du vendeur pro."
      ],
      actions: [
        "Action en garantie de conformité : réparation, remplacement, résolution ou réduction du prix (art. L217-9, L217-10 C. conso).",
        "Action en garantie des vices cachés : résolution ou réduction du prix + dommages-intérêts (art. 1644, 1645 C. civ.).",
        "Action en nullité pour dol : si dissimulation intentionnelle.",
        "Action en dommages-intérêts : perte subie + gain manqué (art. 1231-2 C. civ.)."
      ],
      prescription: "2 ans pour la conformité (art. L217-12 C. conso) ; 5 ans pour les vices cachés (art. 2224 C. civ.).",
      charge_preuve: "Pendant 24 mois, la charge de la preuve de l'absence de défaut pèse sur le vendeur professionnel (art. L217-7 C. conso)."
    },
    vente_pro_pro: {
      titre: "VENTE ENTRE PROFESSIONNELS",
      fondements: [
        "Garantie des vices cachés (art. 1641 s. C. civ.) : seule garantie applicable.",
        "Obligation de délivrance conforme (art. 1604 C. civ.).",
        "Bonne foi contractuelle (art. 1104 C. civ.)."
      ],
      exclusions: [
        "La garantie légale de conformité (Code conso) est ÉCARTÉE entre professionnels.",
        "Les clauses d'exclusion de garantie sont valables entre professionnels (sauf dol ou faute lourde).",
        "L'acheteur professionnel est présumé compétent pour détecter les vices apparents."
      ],
      actions: [
        "Action en garantie des vices cachés : résolution ou réduction du prix (art. 1644 C. civ.).",
        "Action en nullité pour dol : si dissimulation intentionnelle."
      ],
      prescription: "Bref délai de l'art. 1648 (interprété 2 ans) ou 5 ans (art. 2224).",
      charge_preuve: "L'acheteur professionnel doit prouver l'existence du vice, son antériorité, et que le vendeur en avait connaissance."
    },
    intervention: {
      titre: "LITIGE APRÈS INTERVENTION D'UN PROFESSIONNEL DE L'AUTOMOBILE",
      fondements: [
        "Obligation de résultat du réparateur (art. 1231-1 C. civ.) : jurisprudence constante.",
        "Responsabilité contractuelle : malfaçon ou non-façon des travaux confiés.",
        "Obligation d'information et de conseil (art. 1112-1 C. civ.) : devis, pièces à remplacer.",
        "Garantie des pièces et de la main-d'œuvre."
      ],
      exclusions: [
        "La force majeure (art. 1218 C. civ.).",
        "La faute de l'acheteur (usage anormal, défaut d'entretien)."
      ],
      actions: [
        "Action en responsabilité contractuelle : réparation gratuite, remboursement, ou dommages-intérêts.",
        "Action en résolution du contrat de réparation : si inexécution suffisamment grave (art. 1224 C. civ.).",
        "Action en réduction du prix : si exécution imparfaite (art. 1223 C. civ.).",
        "Action en référé-provision : si urgence (art. 809 CPC)."
      ],
      prescription: "5 ans à compter de la découverte du défaut (art. 2224 C. civ.).",
      charge_preuve: "La présomption de faute du garagiste (obligation de résultat) facilite l'indemnisation."
    }
  },
  droit_europeen: [
    { ref:'Directive 1999/44/CE', texte:"Directive sur certains aspects de la vente et des garanties des biens de consommation.", portée:'fondamentale' },
    { ref:'Directive 2019/771', texte:"Directive relative à certains aspects concernant les contrats de vente de biens. Renforce la protection du consommateur.", portée:'fondamentale' },
    { ref:'Directive 85/374/CEE', texte:"Directive sur la responsabilité du fait des produits défectueux. Transposée aux articles 1245 s. C. civ.", portée:'fondamentale' }
  ]
};
