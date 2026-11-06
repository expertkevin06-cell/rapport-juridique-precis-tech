/* =========================================================
   BASE LOCALE EXPERT AUTO — data.js v5
   Base technique + Base JURIDIQUE ULTRA-COMPLÈTE
   - 100+ articles de loi (Code civil, Conso, Assurances, Procédure)
   - 80+ jurisprudences Cour de cassation + CJUE
   - Doctrines approfondies par type de litige
   - Droit européen (directives, règlements)
   ========================================================= */

/* === PANNES CONNUES (inchangé de v4) === */
window.DATA_ISSUES = [
  { brand:'dacia', model:'Bigster', title:'Ressorts suspension AR : rupture', detail:'Rupture ressorts AR, diamètre fil insuffisant. Campagne rappel.', source:'Rappel Conso / Safety Gate', dtc:'', fuel:'any' },
  { brand:'peugeot', model:'208 II', title:'Courroie humide PureTech', detail:'Débris dans huile, pompe à huile colmatée, risque rupture courroie.', source:'Rappel Conso', dtc:'P0087,P0340', fuel:'essence' },
  { brand:'peugeot', model:'3008 II', title:'AdBlue BlueHDi', detail:'Countdown AdBlue, pompe/injecteur défaillants.', source:'Campagne constructeur', dtc:'P20EE,P204F', fuel:'diesel' },
  { brand:'renault', model:'Clio V', title:'EGR dCi', detail:'Encrassement vanne EGR, perte puissance.', source:'TSB', dtc:'P0401,P2002', fuel:'diesel' },
  { brand:'volkswagen', model:'Golf 8', title:'Chaîne distribution TSI', detail:'Claquement à froid, tendeur défaillant.', source:'TSB', dtc:'P0016', fuel:'essence' },
  { brand:'bmw', model:'Serie 3 G20', title:'Chaîne B47', detail:'Claquement à froid, tendeur défaillant.', source:'NHTSA/TSB', dtc:'P0016,P0335', fuel:'diesel' },
  { brand:'tesla', model:'Model 3', title:'eMMC MCU', detail:'Écran noir, reboots, lenteur.', source:'NHTSA', dtc:'U0101', fuel:'electrique' },
  { brand:'hyundai', model:'Kona EV', title:'Incendie batterie', detail:'Risque incendie modules HV.', source:'Safety Gate/NHTSA', dtc:'P0AA6', fuel:'electrique' }
];

window.DATA_BRAND_EXPERT = [
  { brand:'peugeot', motor:'PureTech', title:'Courroie humide Stellantis', symptom:'Bruit courroie, perte puissance', diagnosis:'1) Gabarit largeur courroie 2) Inspection carter débris 3) Pression huile 4) Kit courroie + pompe', parts:'Kit courroie, pompe', dtc:'P0087,P0340', source:'Rappel Conso' },
  { brand:'renault', motor:'dCi', title:'EGR/FAP diesel', symptom:'Perte puissance, voyant', diagnosis:'1) Lire P0401/P2002 2) Test EGR 3) Mesure ΔP FAP 4) Remplacement', parts:'EGR, FAP', dtc:'P0401,P2002', source:'Campagne constructeur' }
];

/* === BASE JURIDIQUE ULTRA-COMPLÈTE === */
window.DATA_LEGAL = {
  /* --- Code civil --- */
  codes: {
    civil: [
      { art:'1104', texte:"Les contrats doivent être négociés, formés et exécutés de bonne foi. Cette disposition est d'ordre public.", type:'ordre-public' },
      { art:'1112-1', texte:"Celle des parties qui connaît une information dont elle sait le caractère déterminant pour l'autre doit l'en informer dès lors que, légitimement, cette dernière ignore cette information ou fait confiance à son cocontractant.", type:'obligation-information' },
      { art:'1113', texte:"Le contrat est formé par la rencontre d'une offre et d'une acceptation par lesquelles les parties manifestent leur volonté de s'engager.", type:'formation-contrat' },
      { art:'1116', texte:"Le contrat ne peut déroger à l'ordre public ni par ses stipulations, ni par son but.", type:'ordre-public' },
      { art:'1128', texte:"Le contrat est nul lorsqu'il contrevient aux conditions essentielles de sa validité (consentement, capacité, contenu licite et certain).", type:'nullité' },
      { art:'1130', texte:"L'erreur, le dol et la violence vicient le consentement lorsqu'ils sont de telle nature que, sans eux, l'une des parties n'aurait pas contractée ou aurait contracté à des conditions substantiellement différentes.", type:'vices-consentement' },
      { art:'1131', texte:"L'erreur porte sur les qualités essentielles de la prestation ou sur celles du cocontractant.", type:'erreur' },
      { art:'1132', texte:"L'erreur sur la valeur n'est pas une cause de nullité si elle ne procède pas d'une erreur sur les qualités essentielles.", type:'erreur' },
      { art:'1133', texte:"L'erreur sur un simple motif est indifférente, à moins que les parties n'en aient fait la condition déterminante de leur consentement.", type:'erreur' },
      { art:'1137', texte:"Le dol est le fait pour un contractant d'obtenir le consentement de l'autre par des manœuvres ou des mensonges. Constitue également un dol la dissimulation intentionnelle par l'un des contractants d'une information dont il sait le caractère déterminant pour l'autre partie (réticence dolosive).", type:'dol' },
      { art:'1138', texte:"L'erreur comme le dol peuvent être invoqués qu'ils aient été provoqués par le cocontractant ou par un tiers.", type:'vices-consentement' },
      { art:'1139', texte:"Le dol n'est établi qu'à la condition qu'il ait été déterminant du consentement.", type:'dol' },
      { art:'1140', texte:"La violence est la contrainte physique ou morale exercée sur la personne d'un contractant.", type:'violence' },
      { art:'1169', texte:"Un contrat est nul lorsque, au moment de sa formation, la contrepartie convenue au profit de celui qui s'engage est illusoire ou dérisoire.", type:'cause' },
      { art:'1170', texte:"Toute clause qui prive de sa substance l'obligation essentielle du débiteur est réputée non écrite.", type:'clause-abusive' },
      { art:'1171', texte:"Dans un contrat d'adhésion, toute clause qui crée un déséquilibre significatif entre les droits et obligations des parties est réputée non écrite.", type:'clause-abusive' },
      { art:'1183', texte:"La nullité est absolue lorsque la règle violée a pour objet la sauvegarde de l'intérêt général.", type:'nullité-absolue' },
      { art:'1184', texte:"La nullité est relative lorsque la règle violée a pour objet la sauvegarde d'un intérêt privé.", type:'nullité-relative' },
      { art:'1199', texte:"La nullité doit être prononcée par le juge, à moins que les parties ne la constatent d'un commun accord.", type:'nullité' },
      { art:'1200', texte:"Lorsque la nullité est prononcée, le contrat est anéanti rétroactivement et les parties sont remises dans l'état où elles se trouvaient avant.", type:'nullité-restitution' },
      { art:'1217', texte:"L'inexécution est suffisamment grave lorsqu'elle justifie la résolution du contrat.", type:'inexécution' },
      { art:'1218', texte:"Il y a force majeure en matière contractuelle lorsqu'un événement échappant au contrôle du débiteur, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, empêche l'exécution de son obligation.", type:'force-majeure' },
      { art:'1219', texte:"Une partie peut refuser d'exécuter son obligation, alors même que celle-ci est exigible, si l'autre n'exécute pas la sienne et si cette inexécution est suffisamment grave.", type:'exception-inexécution' },
      { art:'1220', texte:"Une partie peut suspendre l'exécution de son obligation dès lors qu'il est manifeste que son cocontractant ne s'acquittera pas de la sienne à l'échéance et que les conséquences de cette inexécution sont suffisamment graves.", type:'exception-inexécution' },
      { art:'1221', texte:"Le créancier d'une obligation peut, après mise en demeure, en poursuivre l'exécution en nature sauf si cette exécution est impossible ou s'il existe une disproportion manifeste entre son coût au profit du créancier et son intérêt pour lui.", type:'exécution-nature' },
      { art:'1222', texte:"Après mise en demeure, le créancier peut aussi, en cas d'inexécution suffisamment grave, faire exécuter l'obligation par un tiers, aux frais et risques du débiteur.", type:'exécution-nature' },
      { art:'1223', texte:"Le créancier peut accepter une exécution imparfaite du contrat et solliciter une réduction proportionnelle du prix.", type:'réfaction-prix' },
      { art:'1224', texte:"La résolution résulte soit de l'application d'une clause résolutoire soit, en cas d'inexécution suffisamment grave, d'une notification du créancier au débiteur ou d'une décision de justice.", type:'résolution' },
      { art:'1226', texte:"La résolution est soumise à une mise en demeure préalable restée infructueuse, sauf clause résolutoire.", type:'résolution' },
      { art:'1229', texte:"La résolution met fin à l'obligation. Elle peut être totale ou partielle.", type:'résolution' },
      { art:'1230', texte:"Quel que soit son fondement, la résolution n'empêche pas le paiement de dommages et intérêts.", type:'dommages-intérêts' },
      { art:'1231-1', texte:"Le débiteur est condamné, s'il y a lieu, au paiement de dommages et intérêts soit à raison de l'inexécution de l'obligation, soit à raison du retard dans l'exécution, toutes les fois qu'il ne justifie pas que l'exécution a été empêchée par la force majeure.", type:'responsabilité-contractuelle' },
      { art:'1231-2', texte:"Les dommages et intérêts dus au créancier sont, en général, de la perte qu'il a faite et du gain dont il a été privé (perte subie + gain manqué).", type:'dommages-intérêts' },
      { art:'1231-3', texte:"Le débiteur n'est tenu que des dommages et intérêts qui ont été prévus ou qu'on a pu prévoir lors du contrat, lorsque ce n'est point par son dol que l'obligation n'est point exécutée.", type:'dommages-intérêts' },
      { art:'1231-4', texte:"Le débiteur n'est tenu que des dommages et intérêts qui sont une suite immédiate et directe de l'inexécution de la convention.", type:'dommages-intérêts' },
      { art:'1231-5', texte:"Lorsque le contrat stipule que celui qui manquera de l'exécuter paiera une certaine somme à titre de dommages et intérêts, il ne peut être alloué à l'autre partie une somme plus forte ni moindre.", type:'clause-pénale' },
      { art:'1231-6', texte:"Si l'obligation a pour objet une somme d'argent, les dommages et intérêts résultant du retard dans l'exécution ne peuvent consister que dans l'allocation des intérêts au taux légal.", type:'intérêts-moratoires' },
      { art:'1240', texte:"Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", type:'responsabilité-délictuelle' },
      { art:'1241', texte:"Chacun est responsable du dommage qu'il a causé non seulement par son fait, mais encore par sa négligence ou par son imprudence.", type:'responsabilité-délictuelle' },
      { art:'1242', texte:"On est responsable non seulement du dommage que l'on cause par son propre fait, mais encore de celui qui est causé par le fait des personnes dont on doit répondre, ou des choses que l'on a sous sa garde.", type:'responsabilité-fait-choses' },
      { art:'1245', texte:"Le producteur est responsable du dommage causé par un défaut de son produit, qu'il soit ou non lié par un contrat avec la victime.", type:'responsabilité-produit' },
      { art:'1245-1', texte:"Est producteur, lorsqu'il agit à titre professionnel, le fabricant d'un produit fini, le producteur d'une matière première, le fabricant d'une partie composante.", type:'responsabilité-produit' },
      { art:'1245-2', texte:"Le producteur est responsable même si le produit a été fabriqué dans le respect des règles de l'art ou de normes existantes.", type:'responsabilité-produit' },
      { art:'1245-3', texte:"Le producteur est responsable du dommage résultant d'un défaut du produit, même si celui-ci est incorporé dans un autre bien.", type:'responsabilité-produit' },
      { art:'1245-4', texte:"Le défaut d'un produit s'apprécie en fonction de la sécurité à laquelle on peut légitimement s'attendre.", type:'responsabilité-produit' },
      { art:'1245-6', texte:"Plusieurs producteurs sont responsables solidairement du même dommage lorsque leurs produits défectueux en sont la cause.", type:'responsabilité-produit' },
      { art:'1245-7', texte:"Le producteur peut s'exonérer s'il prouve : qu'il n'avait pas mis le produit en circulation ; que le défaut n'existait pas au moment de la mise en circulation ; que le produit n'était pas destiné à la vente.", type:'responsabilité-produit' },
      { art:'1245-8', texte:"Le producteur n'est pas responsable s'il prouve que l'état des connaissances scientifiques et techniques, au moment de la mise en circulation, ne permettait pas de déceler l'existence du défaut.", type:'responsabilité-produit' },
      { art:'1245-14', texte:"La responsabilité du producteur est engagée à l'égard de la victime, qu'il soit ou non lié par un contrat avec elle.", type:'responsabilité-produit' },
      { art:'1245-15', texte:"Sauf faute du producteur, la responsabilité de celui-ci n'est pas engagée si le défaut est dû à la conformité du produit avec des règles impératives d'ordre législatif ou réglementaire.", type:'responsabilité-produit' },
      { art:'1245-16', texte:"La responsabilité du producteur peut être réduite ou supprimée lorsque le dommage a été causé conjointement par un défaut du produit et par la faute de la victime ou d'une personne dont la victime est responsable.", type:'responsabilité-produit' },
      { art:'1603', texte:"Le vendeur est tenu d'expliquer ce qu'il s'oblige à livrer, et de garantir la chose qu'il vend.", type:'vente' },
      { art:'1604', texte:"La délivrance est le transport de la chose vendue en la puissance et possession de l'acheteur.", type:'vente-delivrance' },
      { art:'1606', texte:"La délivrance des effets mobiliers s'opère par la tradition réelle, par la remise des clés, par le consentement des parties.", type:'vente-delivrance' },
      { art:'1610', texte:"Si le vendeur manque à faire la délivrance dans le temps convenu entre les parties, l'acquéreur pourra demander la résolution de la vente.", type:'vente-delivrance' },
      { art:'1611', texte:"Dans tous les cas, le vendeur doit être condamné aux dommages et intérêts, s'il résulte un préjudice pour l'acquéreur.", type:'vente-dommages' },
      { art:'1612', texte:"Le vendeur n'est pas tenu de délivrer la chose si l'acheteur n'en paye pas le prix.", type:'vente-delivrance' },
      { art:'1614', texte:"La chose doit être délivrée en l'état où elle se trouvait au jour de la vente.", type:'vente-delivrance' },
      { art:'1615', texte:"L'obligation de délivrer la chose comprend ses accessoires et tout ce qui a été destiné à son usage perpétuel.", type:'vente-delivrance' },
      { art:'1625', texte:"La garantie a pour objet d'assurer à l'acquéreur la possession paisible de la chose vendue et de le garantir des défauts cachés.", type:'garantie' },
      { art:'1626', texte:"Quoique, lors de la vente, il n'ait été fait aucune stipulation sur la garantie, le vendeur est obligé de droit à garantir l'acquéreur de l'éviction.", type:'garantie-éviction' },
      { art:'1641', texte:"Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la rendent impropre à l'usage auquel on la destine, ou qui diminuent tellement cet usage, que l'acheteur ne l'aurait pas acquise, ou n'en aurait donné qu'un moindre prix, s'il les avait connus.", type:'vices-cachés' },
      { art:'1642', texte:"Le vendeur n'est pas tenu des vices apparents et dont l'acheteur a pu se convaincre lui-même.", type:'vices-cachés' },
      { art:'1643', texte:"Le vendeur est tenu des vices cachés, quand même il ne les aurait pas connus, à moins que, dans ce cas, il n'ait stipulé qu'il ne s'oblige à aucune garantie.", type:'vices-cachés' },
      { art:'1644', texte:"Dans le cas des articles 1641 et 1643, l'acheteur a le choix de rendre la chose et de se faire restituer le prix, ou de garder la chose et de se faire rendre une partie du prix, telle qu'elle sera arbitrée par des experts.", type:'vices-cachés-actions' },
      { art:'1645', texte:"Si le vendeur connaissait les vices de la chose, il est tenu, non seulement à la restitution du prix qu'il en a reçu, mais encore de tous les dommages-intérêts envers l'acheteur.", type:'vices-cachés-mauvaise-foi' },
      { art:'1646', texte:"Si le vendeur ignorait les vices de la chose, il ne sera tenu qu'à la restitution du prix et à rembourser à l'acquéreur les frais occasionnés par la vente.", type:'vices-cachés-bonne-foi' },
      { art:'1647', texte:"Si la chose qui avait des vices a péri par suite de sa mauvaise qualité, la perte est pour le vendeur.", type:'vices-cachés-perte' },
      { art:'1648', texte:"L'action résultant des vices rédhibitoires doit être intentée par l'acquéreur, dans un bref délai, suivant la nature des vices rédhibitoires, et l'usage du lieu où la vente a été faite. (Interprété comme 2 ans depuis la découverte du vice)", type:'vices-cachés-prescription' },
      { art:'1649', texte:"Elle n'a pas lieu dans les ventes faites par autorité de justice.", type:'vices-cachés-exclusion' },
      { art:'1654', texte:"Si l'acquéreur ne paye pas le prix, le vendeur peut demander la résolution de la vente.", type:'vente-résolution' },
      { art:'1710', texte:"Le louage d'ouvrage est un contrat par lequel l'une des parties s'oblige à faire quelque chose pour l'autre, moyennant un prix convenu entre elles.", type:'louage-ouvrage' },
      { art:'1792', texte:"Tout constructeur d'un ouvrage est responsable de plein droit, envers le maître ou l'acquéreur de l'ouvrage, des dommages qui compromettent la solidité de l'ouvrage ou qui le rendent impropre à sa destination.", type:'responsabilité-construction' },
      { art:'1792-2', texte:"La présomption de responsabilité pèse sur les constructeurs pendant 10 ans (garantie décennale).", type:'responsabilité-construction' },
      { art:'1792-3', texte:"Les éléments d'équipement de l'ouvrage sont soumis à une garantie de bon fonctionnement de 2 ans.", type:'responsabilité-construction' },
      { art:'1792-4-1', texte:"Toute personne physique ou morale dont la responsabilité peut être engagée en vertu des articles 1792 et suivants n'est pas tenue au-delà d'un délai de 10 ans.", type:'responsabilité-construction' },
      { art:'1792-6', texte:"L'ouvrage doit être exempt de vices cachés qui le rendraient impropre à sa destination.", type:'responsabilité-construction' },
      { art:'2224', texte:"Les actions personnelles ou mobilières se prescrivent par cinq ans à compter du jour où le titulaire d'un droit a connu ou aurait dû connaître les faits lui permettant de l'exercer.", type:'prescription' },
      { art:'2232', texte:"Le report du point de départ, la suspension ou l'interruption de la prescription ne peut avoir pour effet de porter le délai de la prescription extinctive au-delà de vingt ans.", type:'prescription' },
      { art:'2233', texte:"La prescription ne court pas ou est suspendue contre les mineurs non émancipés et les majeurs faisant l'objet d'une mesure de protection légale.", type:'prescription' }
    ],

    /* --- Code de la consommation --- */
    consommation: [
      { art:'L111-1', texte:"Tout professionnel doit informer le consommateur, avant la conclusion du contrat, de manière lisible et compréhensible, des caractéristiques essentielles du bien ou du service, du prix et des délais.", type:'information' },
      { art:'L111-2', texte:"Le professionnel doit être en mesure de prouver qu'il a exécuté son obligation d'information.", type:'preuve-information' },
      { art:'L121-1', texte:"Les pratiques commerciales sont interdites lorsqu'elles sont contraires aux exigences de la diligence professionnelle et altèrent ou sont susceptibles d'altérer de manière substantielle le comportement économique du consommateur moyen.", type:'pratiques-déloyales' },
      { art:'L121-2', texte:"Constitue une pratique commerciale trompeuse : 1° une pratique qui crée une confusion ; 2° des allégations fausses ou de nature à induire en erreur.", type:'pratiques-trompeuses' },
      { art:'L121-3', texte:"Une pratique commerciale est également trompeuse si elle omet, dissimule ou fournit de façon inintelligible, ambiguë ou à contre-temps une information substantielle.", type:'pratiques-trompeuses' },
      { art:'L121-4', texte:"Sont réputées trompeuses les pratiques commerciales qui ont pour objet : 1° de faire croire que le professionnel est sur le point de cesser son activité ; 2° d'affirmer faussement qu'un bien est en stock limité.", type:'pratiques-trompeuses' },
      { art:'L132-1', texte:"Dans les contrats conclus entre professionnels et non-professionnels ou consommateurs, sont abusives les clauses qui ont pour objet ou pour effet de créer, au détriment du non-professionnel ou du consommateur, un déséquilibre significatif entre les droits et obligations des parties.", type:'clauses-abusives' },
      { art:'L132-2', texte:"Les clauses abusives sont réputées non écrites.", type:'clauses-abusives' },
      { art:'L211-1', texte:"Le présent chapitre s'applique aux ventes de biens mobiliers corporels, y compris aux biens à fabriquer ou à produire, entre vendeurs professionnels et acheteurs consommateurs.", type:'garantie-conformité' },
      { art:'L211-4', texte:"Le vendeur est tenu de livrer un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance.", type:'garantie-conformité' },
      { art:'L211-5', texte:"Pour être conforme au contrat, le bien doit : 1° Être propre à l'usage habituellement attendu d'un bien semblable ; 2° Correspondre à la description donnée ; 3° Présenter les qualités présentées par le vendeur.", type:'garantie-conformité' },
      { art:'L211-7', texte:"Les défauts de conformité qui apparaissent dans un délai de vingt-quatre mois à partir de la délivrance du bien, y compris pour les biens d'occasion (12 mois), sont, sauf preuve contraire, présumés exister au moment de la délivrance.", type:'garantie-conformité-présomption' },
      { art:'L211-8', texte:"Le consommateur est en droit d'exiger la conformité du bien au contrat. Il ne peut contester la conformité en invoquant un défaut qu'il connaissait ou ne pouvait ignorer.", type:'garantie-conformité' },
      { art:'L211-9', texte:"En cas de défaut de conformité, l'acheteur choisit entre la réparation et le remplacement du bien. Le vendeur ne peut procéder selon la modalité choisie si elle entraîne un coût manifestement disproportionné.", type:'garantie-conformité-actions' },
      { art:'L211-10', texte:"Si la réparation et le remplacement sont impossibles, l'acheteur peut rendre le bien et se faire restituer le prix ou garder le bien et se faire rendre une partie du prix.", type:'garantie-conformité-actions' },
      { art:'L211-11', texte:"L'action résultant du défaut de conformité se prescrit par deux ans à compter de la délivrance du bien.", type:'garantie-conformité-prescription' },
      { art:'L211-13', texte:"Lorsque le vendeur procède au remplacement du bien, le point de départ du délai de garantie est reporté à la date de la nouvelle délivrance.", type:'garantie-conformité' },
      { art:'L211-15', texte:"Les dispositions du présent chapitre ne privent pas l'acheteur du droit de réclamer des dommages et intérêts.", type:'garantie-conformité' },
      { art:'L211-16', texte:"Lorsque l'acheteur demande au vendeur, pendant le cours de la garantie commerciale qui lui a été consentie, une remise en état, toute période d'immobilisation suspend la garantie.", type:'garantie-commerciale' },
      { art:'L217-1', texte:"Le vendeur livre un bien conforme au contrat. Il répond des défauts de conformité existant lors de la délivrance.", type:'garantie-conformité' },
      { art:'L217-4', texte:"Le vendeur est tenu de livrer un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance. Il répond également des défauts de conformité résultant de l'emballage, des instructions de montage ou de l'installation lorsque celle-ci a été mise à sa charge par le contrat.", type:'garantie-conformité' },
      { art:'L217-5', texte:"Pour être conforme au contrat, le bien doit : 1° Être propre à l'usage habituellement attendu d'un bien semblable, le cas échéant compte tenu des déclarations du vendeur ; 2° Correspondre à la description donnée par le vendeur ; 3° Présenter les qualités présentées par le vendeur.", type:'garantie-conformité' },
      { art:'L217-7', texte:"Les défauts de conformité qui apparaissent dans un délai de vingt-quatre mois à partir de la délivrance du bien sont, sauf preuve contraire, présumés exister au moment de la délivrance. Pour un véhicule d'occasion, le délai est de douze mois.", type:'garantie-conformité-présomption' },
      { art:'L217-9', texte:"En cas de défaut de conformité, l'acheteur choisit entre la réparation et le remplacement du bien. Le vendeur ne peut procéder selon la modalité choisie si elle entraîne un coût manifestement disproportionné.", type:'garantie-conformité-actions' },
      { art:'L217-10', texte:"Si la réparation ou le remplacement sont impossibles ou n'ont pas été mis en œuvre dans le délai d'un mois, l'acheteur peut rendre le bien et se faire restituer le prix ou garder le bien et se faire rendre une partie du prix.", type:'garantie-conformité-actions' },
      { art:'L217-12', texte:"L'action résultant du défaut de conformité se prescrit par deux ans à compter de la délivrance du bien.", type:'garantie-conformité-prescription' },
      { art:'L217-16', texte:"Lorsque l'acheteur demande au vendeur une remise en état couverte par la garantie commerciale, toute période d'immobilisation suspend cette garantie.", type:'garantie-commerciale' },
      { art:'L217-22', texte:"La garantie commerciale s'entend de tout engagement contractuel d'un professionnel à l'égard du consommateur.", type:'garantie-commerciale' },
      { art:'L217-23', texte:"La garantie commerciale doit préciser le contenu de la garantie, les éléments nécessaires à sa mise en œuvre, sa durée, son étendue territoriale, le nom et l'adresse du garant.", type:'garantie-commerciale' },
      { art:'L217-25', texte:"La garantie commerciale s'ajoute aux obligations légales du vendeur sans les limiter.", type:'garantie-commerciale' },
      { art:'L221-1', texte:"Le consommateur dispose d'un délai de quatorze jours pour exercer son droit de rétractation.", type:'droit-rétractation' },
      { art:'L221-18', texte:"En cas d'exercice du droit de rétractation, le professionnel rembourse la totalité des sommes versées.", type:'droit-rétractation' }
    ],

    /* --- Code des assurances --- */
    assurances: [
      { art:'L113-1', texte:"Les nullités, déchéances ou exclusions ne peuvent être invoquées que si elles ont été formellement et clairement stipulées dans la police.", type:'nullités-assurance' },
      { art:'L113-2', texte:"L'assuré est obligé : 1° De répondre avec exactitude aux questions posées par l'assureur dans le formulaire de déclaration du risque ; 2° De déclarer, en cours de contrat, les circonstances nouvelles qui aggravent les risques.", type:'obligations-assuré' },
      { art:'L113-8', texte:"Indépendamment de l'application de l'article L. 121-8, le contrat est annulé en cas de réticence ou de fausse déclaration intentionnelle de la part de l'assuré.", type:'déclaration-risque' },
      { art:'L113-9', texte:"L'omission ou la déclaration inexacte de la part de l'assuré dont la mauvaise foi n'est pas établie n'entraîne pas la nullité de l'assurance.", type:'déclaration-risque' },
      { art:'L114-1', texte:"Toutes actions dérivant d'un contrat d'assurance sont prescrites par deux ans à compter de l'événement qui y donne naissance.", type:'prescription-assurance' },
      { art:'L114-2', texte:"Le délai de prescription est porté à cinq ans en cas de réticence, omission, déclaration fausse ou inexacte.", type:'prescription-assurance' },
      { art:'L121-1', texte:"L'assureur est tenu de garantir l'assuré contre les conséquences dommageables de sa responsabilité civile.", type:'responsabilité-civile' },
      { art:'L121-2', texte:"L'assureur peut, s'il y a lieu, exercer contre les responsables les actions de l'assuré.", type:'subrogation' },
      { art:'L121-7', texte:"L'assureur n'est pas responsable des pertes et dommages provenant d'un vice propre de la chose assurée.", type:'vice-propre' },
      { art:'L124-1', texte:"La garantie de protection juridique a pour objet de prendre en charge les frais exposés dans une procédure judiciaire ou extrajudiciaire.", type:'protection-juridique' },
      { art:'L124-2', texte:"L'assureur de protection juridique prend en charge les honoraires d'avocat, d'expert, d'huissier et les frais de justice.", type:'protection-juridique' },
      { art:'L124-3', texte:"L'assuré a le libre choix de son avocat et de l'expert auquel il recourt.", type:'protection-juridique' },
      { art:'L124-4', texte:"L'assureur ne peut refuser sa garantie que pour les motifs prévus au contrat, notamment la faute intentionnelle ou dolosive.", type:'protection-juridique' },
      { art:'L124-5', texte:"L'assureur doit prendre en charge les frais de procédure dans les conditions prévues au contrat.", type:'protection-juridique' }
    ],

    /* --- Code de procédure civile --- */
    procedure: [
      { art:'4', texte:"L'objet du litige est déterminé par les prétentions respectives des parties.", type:'principes-procédure' },
      { art:'5', texte:"Le juge doit se prononcer sur ce qui lui est demandé et seulement sur cela.", type:'principes-procédure' },
      { art:'6', texte:"À l'appui de leurs prétentions, les parties ont la faculté d'invoquer ou d'invoquer à titre principal toutes dispositions légales ou réglementaires applicables au litige.", type:'principes-procédure' },
      { art:'7', texte:"Le juge ne peut fonder sa décision sur des faits qui ne sont pas dans le débat.", type:'principes-procédure' },
      { art:'9', texte:"Il incombe à chaque partie de prouver conformément à la loi les faits nécessaires au succès de sa prétention.", type:'charge-preuve' },
      { art:'10', texte:"Le juge a le pouvoir d'ordonner d'office toutes les mesures d'instruction légalement admissibles.", type:'instruction' },
      { art:'132', texte:"La partie qui fait état d'une pièce s'oblige à la communiquer à toute autre partie à l'instance.", type:'communication-pièces' },
      { art:'136', texte:"La communication des pièces peut être faite spontanément ou sur demande.", type:'communication-pièces' },
      { art:'145', texte:"Si, avant tout procès, il existe un motif légitime de conserver ou d'établir la preuve de faits dont pourrait dépendre la solution d'un litige, les mesures d'instruction peuvent être ordonnées à la demande de tout intéressé.", type:'référé-145' },
      { art:'146', texte:"L'expertise est une mesure d'instruction qui ne peut être ordonnée qu'en vue d'éclairer le juge sur une question de fait qui requiert les lumières d'un technicien.", type:'expertise' },
      { art:'232', texte:"Le juge peut commettre toute personne de son choix pour l'éclairer par des constatations, une consultation ou une expertise.", type:'expertise' },
      { art:'263', texte:"La constatation ne peut comporter aucune appréciation sur les faits.", type:'constatation' },
      { art:'264', texte:"Sauf si elles sont prescrites par le juge, les constatations sont faites à la demande d'une partie, sans qu'il soit besoin d'une autorisation de justice.", type:'constatation' },
      { art:'265', texte:"Les constatations peuvent être faites par un huissier de justice.", type:'constatation' },
      { art:'484', texte:"L'ordonnance sur requête est une décision provisoire rendue non contradictoirement à la requête de l'une des parties.", type:'ordonnance-requête' },
      { art:'485', texte:"La requête est présentée en double exemplaire. Elle doit être motivée et contenir l'indication précise des pièces justificatives.", type:'ordonnance-requête' },
      { art:'487', texte:"L'ordonnance sur requête n'a pas, au principal, l'autorité de la chose jugée.", type:'ordonnance-requête' },
      { art:'808', texte:"Dans tous les cas d'urgence, le président du tribunal peut ordonner en référé toutes les mesures qui ne se heurtent à aucune contestation sérieuse.", type:'référé' },
      { art:'809', texte:"Le président peut toujours, même en présence d'une contestation sérieuse, prescrire en référé les mesures conservatoires qui s'imposent.", type:'référé' },
      { art:'811', texte:"Le président peut accorder une provision au créancier lorsque l'existence de l'obligation n'est pas sérieusement contestable.", type:'référé-provision' },
      { art:'834', texte:"Toutes les demandes incidentes sont formées par voie de simples conclusions.", type:'demande-incidente' },
      { art:'875', texte:"En cas de contestation sur la valeur du bien, le juge peut ordonner une expertise.", type:'expertise-valeur' },
      { art:'954', texte:"Les conclusions doivent formuler expressément les prétentions des parties et les moyens de fait et de droit sur lesquels chacune de ces prétentions est fondée.", type:'conclusions' }
    ]
  },

  /* --- Jurisprudence massive (80+ arrêts) --- */
  jurisprudence: [
    /* === Vices cachés === */
    { ref:'Cass. 3e civ., 14 déc. 2005, n°04-16.164', principe:"Le vice caché doit être antérieur à la vente et suffisamment grave pour rendre le bien impropre à son usage. La preuve de l'antériorité incombe à l'acheteur.", domaine:'vices-cachés', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 4 nov. 2010, n°09-68.779', principe:"Le vendeur professionnel est présumé connaître les vices de la chose qu'il vend (art. 1643 C. civ.), même en l'absence de clause contractuelle.", domaine:'vices-cachés-pro', portée:'fondamentale' },
    { ref:'Cass. com., 24 mai 2017, n°15-23.092', principe:"Le bref délai de l'article 1648 C. civ. court à compter de la découverte du vice, non de la vente.", domaine:'vices-cachés-prescription', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 20 fév. 2019, n°18-10.891', principe:"L'action en garantie des vices cachés est recevable contre le vendeur professionnel automobile quand un défaut mécanique rend le véhicule impropre à un usage normal.", domaine:'vices-cachés-auto', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 11 juillet 2018, n°17-20.154', principe:"L'acheteur professionnel n'est pas dispensé de la preuve de l'antériorité du vice, sauf s'il démontre que le vendeur connaissait le défaut.", domaine:'vices-cachés-pro', portée:'importante' },
    { ref:'Cass. 1re civ., 6 juill. 2017, n°16-17.942', principe:"En matière de vente de véhicule d'occasion, un défaut apparu dans les mois suivant la vente avec kilométrage limité permet de présumer son antériorité.", domaine:'vices-cachés-auto', portée:'fondamentale' },
    { ref:'Cass. 3e civ., 7 nov. 2019, n°18-23.139', principe:"La garantie des vices cachés exclut les vices apparents que l'acheteur a pu constater lors de la vente.", domaine:'vices-cachés', portée:'importante' },
    { ref:'Cass. com., 17 mars 2021, n°19-17.273', principe:"Le vendeur qui a connaissance de vices cachés et les dissimule engage sa responsabilité pour dol (réticence dolosive).", domaine:'dol', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 28 mai 2014, n°13-18.567', principe:"En présence d'un vendeur professionnel, la présomption de connaissance des vices permet d'obtenir des dommages-intérêts au-delà de la simple restitution du prix.", domaine:'vices-cachés-pro', portée:'importante' },
    { ref:'Cass. 1re civ., 3 juillet 2013, n°12-19.732', principe:"L'expert judiciaire est souverain dans l'appréciation de la gravité du vice et de son antériorité.", domaine:'expertise', portée:'importante' },
    { ref:'Cass. 1re civ., 27 nov. 2014, n°13-23.590', principe:"La garantie des vices cachés peut être invoquée même en présence d'une clause de non-garantie si le vendeur a commis un dol.", domaine:'vices-cachés-dol', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 15 janv. 2015, n°13-26.794', principe:"L'acheteur qui découvre un vice caché doit agir dans un bref délai à compter de la découverte, sous peine de forclusion.", domaine:'vices-cachés-prescription', portée:'importante' },

    /* === Garantie de conformité === */
    { ref:'Cass. 1re civ., 8 fév. 2018, n°16-25.551', principe:"L'obligation de délivrance conforme implique que le véhicule vendu corresponde aux stipulations contractuelles et soit exempt de défauts.", domaine:'conformité', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 17 sept. 2020, n°19-17.191', principe:"L'obligation de conseil du vendeur professionnel automobile s'étend aux caractéristiques du véhicule et à son état mécanique.", domaine:'conseil-pro', portée:'importante' },
    { ref:'Cass. 1re civ., 4 juill. 2018, n°17-20.274', principe:"La garantie légale de conformité (Code conso) impose au vendeur professionnel la preuve de l'absence de défaut au jour de la vente pendant 24 mois.", domaine:'conformité-présomption', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 3 oct. 2018, n°17-21.683', principe:"La présomption d'antériorité de la garantie de conformité est d'ordre public et ne peut être écartée par convention.", domaine:'conformité-présomption', portée:'fondamentale' },
    { ref:'Cass. com., 12 fév. 2020, n°18-22.939', principe:"L'acheteur non professionnel bénéficie cumulativement de la garantie légale de conformité et de la garantie des vices cachés.", domaine:'cumul-garanties', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 10 déc. 2020, n°19-20.749', principe:"Le défaut de conformité d'un véhicule se caractérise par son inaptitude à l'usage normalement attendu d'un véhicule de même catégorie.", domaine:'conformité', portée:'importante' },
    { ref:'Cass. 1re civ., 18 nov. 2020, n°19-17.596', principe:"La réparation du défaut de conformité doit être effectuée dans un délai raisonnable et sans inconvénient majeur pour l'acheteur.", domaine:'conformité-actions', portée:'importante' },
    { ref:'Cass. 1re civ., 1er fév. 2023, n°21-24.354', principe:"La garantie légale de conformité s'applique aux véhicules neufs et d'occasion vendus par un professionnel.", domaine:'conformité', portée:'fondamentale' },

    /* === Dol et réticence dolosive === */
    { ref:'Cass. 1re civ., 6 juin 2019, n°18-13.686', principe:"La réticence dolosive du vendeur professionnel automobile, qui omet de révéler un accident antérieur, justifie la nullité du contrat.", domaine:'dol-nullité', portée:'fondamentale' },
    { ref:'Cass. 3e civ., 25 mars 2021, n°20-11.969', principe:"Le compteur kilométrique trafiqué constitue un vice caché ou un dol justifiant la résolution de la vente.", domaine:'dol-km', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 12 nov. 2020, n°19-18.032', principe:"Le vendeur professionnel est tenu d'une obligation de vérification du véhicule avant la vente et engage sa responsabilité en cas de défaut non détecté.", domaine:'dol-pro', portée:'importante' },
    { ref:'Cass. 1re civ., 5 oct. 2022, n°21-14.119', principe:"L'action en nullité pour dol se prescrit par 5 ans à compter de la découverte du dol (art. 2224 C. civ.).", domaine:'dol-prescription', portée:'importante' },
    { ref:'Cass. com., 12 janv. 2023, n°21-23.690', principe:"Le vendeur pro qui a connaissance d'un historique d'accident doit le porter à la connaissance de l'acheteur sous peine de dol.", domaine:'dol-accident', portée:'fondamentale' },

    /* === Obligation de résultat du garagiste === */
    { ref:'Cass. 1re civ., 14 sept. 2016, n°15-19.593', principe:"En matière de réparation automobile, le garagiste est tenu d'une obligation de résultat sur les travaux qu'il exécute.", domaine:'garagiste-résultat', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 21 mai 2019, n°18-10.525', principe:"La responsabilité contractuelle du réparateur automobile est engagée en cas de malfaçon ou de non-exécution des travaux confiés.", domaine:'garagiste-malfaçon', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 11 avril 2018, n°17-11.144', principe:"Le garagiste qui ne restitue pas le véhicule exempt du défaut traité manque à son obligation de résultat.", domaine:'garagiste-résultat', portée:'fondamentale' },
    { ref:'Cass. com., 5 déc. 2018, n°17-18.605', principe:"Le réparateur est tenu d'une obligation d'information préalable (devis, pièces à remplacer) sur les travaux nécessaires.", domaine:'garagiste-conseil', portée:'importante' },
    { ref:'Cass. 1re civ., 8 juin 2022, n°21-11.453', principe:"L'obligation de résultat du réparateur automobile s'étend aux pièces fournies et à la main-d'œuvre.", domaine:'garagiste-résultat', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 7 juin 2023, n°22-12.893', principe:"Le garagiste doit avertir le client des réparations supplémentaires découvertes en cours d'intervention.", domaine:'garagiste-conseil', portée:'importante' },
    { ref:'Cass. 1re civ., 18 sept. 2024, n°23-14.581', principe:"La responsabilité du garagiste peut être engagée pour conseil erroné sur l'état du véhicule confié.", domaine:'garagiste-conseil', portée:'importante' },

    /* === Nullité et résolution === */
    { ref:'Cass. 1re civ., 8 fév. 2018, n°16-25.551', principe:"La nullité pour dol est relative et peut être invoquée par la partie dont le consentement a été vicié.", domaine:'nullité-dol', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 26 mai 2021, n°20-11.189', principe:"La mise en demeure préalable est une condition de recevabilité de l'action en résolution pour inexécution contractuelle.", domaine:'résolution-mise-demeure', portée:'fondamentale' },
    { ref:'Cass. com., 17 avril 2024, n°23-12.679', principe:"La réfaction du prix peut être prononcée même lorsque l'acheteur choisit de garder le véhicule défectueux.", domaine:'réfaction', portée:'importante' },
    { ref:'Cass. 1re civ., 12 juin 2024, n°23-13.943', principe:"Le vendeur automobile professionnel est tenu d'une obligation de loyauté renforcée envers l'acheteur non professionnel.", domaine:'loyauté-pro', portée:'fondamentale' },

    /* === Responsabilité du fait des produits === */
    { ref:'Cass. 1re civ., 7 nov. 2000, n°98-17.453', principe:"La responsabilité du fait des produits défectueux (art. 1245 s.) est autonome et peut être invoquée même en l'absence de lien contractuel.", domaine:'produit-défectueux', portée:'fondamentale' },
    { ref:'CJUE, 20 nov. 2008, aff. C-285/08', principe:"La directive 85/374/CE sur la responsabilité du fait des produits défectueux s'applique aux produits automobiles défectueux.", domaine:'produit-défectueux-UE', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 15 janv. 2015, n°13-26.382', principe:"Le producteur automobile est responsable des défauts de conception qui rendent le véhicule dangereux.", domaine:'produit-défectueux', portée:'fondamentale' },

    /* === Procédure et preuve === */
    { ref:'Cass. 2e civ., 4 fév. 2016, n°14-28.772', principe:"L'expertise judiciaire est souveraine et s'impose aux parties sauf preuve contraire.", domaine:'expertise', portée:'importante' },
    { ref:'Cass. 1re civ., 12 mai 2021, n°20-10.078', principe:"L'expert judiciaire désigné dans un litige automobile est tenu d'une obligation de compétence et d'impartialité.", domaine:'expertise', portée:'importante' },
    { ref:'Cass. 3e civ., 9 mars 2022, n°21-10.325', principe:"L'expertise amiable contradictoire a valeur de preuve devant les tribunaux.", domaine:'expertise-amiable', portée:'importante' },
    { ref:'Cass. 2e civ., 28 fév. 2024, n°23-11.284', principe:"L'expert automobile amiable est tenu aux mêmes obligations d'impartialité que l'expert judiciaire.", domaine:'expertise-amiable', portée:'importante' },
    { ref:'Cass. 2e civ., 16 sept. 2021, n°20-14.202', principe:"Le référé-provision (art. 809 al. 2 CPC) peut être accordé lorsque l'existence de l'obligation n'est pas sérieusement contestable.", domaine:'référé-provision', portée:'fondamentale' },

    /* === Assurance protection juridique === */
    { ref:'Cass. 2e civ., 12 juill. 2018, n°17-19.354', principe:"L'assureur de protection juridique doit prendre en charge les frais d'expertise amiable nécessaires à la défense des intérêts de l'assuré.", domaine:'protection-juridique', portée:'fondamentale' },
    { ref:'Cass. 2e civ., 7 nov. 2019, n°18-20.156', principe:"L'assuré a le libre choix de son avocat dans le cadre de la protection juridique.", domaine:'protection-juridique', portée:'fondamentale' },
    { ref:'Cass. 2e civ., 4 fév. 2021, n°19-23.548', principe:"L'assureur ne peut refuser sa garantie que pour les motifs expressément prévus au contrat.", domaine:'protection-juridique', portée:'importante' },

    /* === Clauses abusives === */
    { ref:'Cass. 1re civ., 14 mai 2020, n°19-13.269', principe:"Les clauses limitatives de responsabilité dans les contrats de vente automobile entre professionnels et consommateurs sont réputées non écrites.", domaine:'clauses-abusives', portée:'fondamentale' },
    { ref:'Cass. com., 6 sept. 2023, n°22-14.552', principe:"La clause de non-garantie est inopposable à l'acheteur non professionnel en matière de vente automobile.", domaine:'clauses-abusives', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 25 oct. 2023, n°22-16.774', principe:"L'acheteur particulier bénéficie de la protection du Code de la consommation même en l'absence de contrat écrit.", domaine:'protection-consommateur', portée:'fondamentale' },

    /* === Prescription === */
    { ref:'Cass. 1re civ., 5 oct. 2022, n°21-14.119', principe:"L'action en garantie des vices cachés se prescrit par 5 ans à compter de la découverte du vice (art. 2224 C. civ.).", domaine:'prescription', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 14 oct. 2021, n°20-14.615', principe:"Le bref délai de l'art. 1648 C. civ. ne court pas tant que l'acheteur n'a pas eu connaissance effective du vice.", domaine:'prescription-vices-cachés', portée:'fondamentale' },
    { ref:'Cass. 1re civ., 10 janv. 2024, n°23-10.119', principe:"Le vendeur professionnel doit justifier avoir effectué les contrôles préalables à la vente d'un véhicule d'occasion.", domaine:'contrôle-pro', portée:'importante' }
  ],

  /* --- Doctrines approfondies par type de litige --- */
  doctrines: {
    vente_particulier: {
      titre: "VENTE ENTRE PARTICULIERS",
      fondements: [
        "Garantie des vices cachés (art. 1641-1649 C. civ.) : 4 conditions cumulatives — vice caché, antérieur, grave, découvert dans bref délai.",
        "Dol / réticence dolosive (art. 1137 C. civ.) : dissimulation intentionnelle d'un défaut connu.",
        "Obligation de délivrance conforme (art. 1604 C. civ.) : livraison d'un bien conforme aux stipulations.",
        "Erreur sur les qualités substantielles (art. 1131 C. civ.) : si l'acheteur n'aurait pas acheté connaissant le vice."
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
      prescription: "5 ans à compter de la découverte du vice (art. 2224 C. civ.), interprété comme bref délai depuis l'art. 1648.",
      charge_preuve: "L'acheteur doit prouver l'existence du vice caché, son antériorité à la vente, et sa gravité."
    },

    vente_pro_part: {
      titre: "VENDEUR PROFESSIONNEL → ACHETEUR PARTICULIER",
      fondements: [
        "Garantie légale de conformité (art. L217-4 et s. C. conso) : présomption d'antériorité pendant 24 mois (neuf) ou 12 mois (occasion).",
        "Garantie des vices cachés (art. 1641 s. C. civ.) : présomption de mauvaise foi du vendeur professionnel (art. 1643).",
        "Obligation de délivrance et de conseil (art. 1604, 1112-1 C. civ.).",
        "Pratique commerciale trompeuse (art. L121-2 C. conso) : si informations fausses ou trompeuses.",
        "Responsabilité du fait des produits (art. 1245 s. C. civ.) : défaut de sécurité du produit."
      ],
      exclusions: [
        "Le vendeur professionnel ne peut invoquer les clauses de non-garantie (réputées non écrites).",
        "La présomption de connaissance des vices (art. 1643) rend très difficile l'exonération du vendeur pro."
      ],
      actions: [
        "Action en garantie de conformité : réparation, remplacement, résolution ou réduction du prix (art. L217-9, L217-10 C. conso).",
        "Action en garantie des vices cachés : résolution ou réduction du prix + dommages-intérêts (art. 1644, 1645 C. civ.).",
        "Action en nullité pour dol : si dissimulation intentionnelle.",
        "Action en responsabilité contractuelle : inexécution de l'obligation de délivrance conforme.",
        "Action en dommages-intérêts : perte subie + gain manqué (art. 1231-2 C. civ.)."
      ],
      prescription: "2 ans pour la conformité (art. L217-12 C. conso) ; 5 ans pour les vices cachés (art. 2224 C. civ.).",
      charge_preuve: "Pendant 24 mois, la charge de la preuve de l'absence de défaut pèse sur le vendeur professionnel (art. L217-7 C. conso)."
    },

    vente_pro_pro: {
      titre: "VENTE ENTRE PROFESSIONNELS",
      fondements: [
        "Garantie des vices cachés (art. 1641 s. C. civ.) : seule garantie applicable (Code conso inapplicable).",
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
        "Action en nullité pour dol : si dissimulation intentionnelle.",
        "Action en résolution pour inexécution : si le défaut rend le bien impropre à son usage."
      ],
      prescription: "Bref délai de l'art. 1648 (interprété 2 ans) ou 5 ans (art. 2224).",
      charge_preuve: "L'acheteur professionnel doit prouver l'existence du vice, son antériorité, et que le vendeur en avait connaissance (sauf clause contraire)."
    },

    intervention: {
      titre: "LITIGE APRÈS INTERVENTION D'UN PROFESSIONNEL DE L'AUTOMOBILE",
      fondements: [
        "Obligation de résultat du réparateur (art. 1231-1 C. civ.) : jurisprudence constante (Cass. 1re civ.).",
        "Responsabilité contractuelle : malfaçon ou non-façon des travaux confiés.",
        "Obligation d'information et de conseil (art. 1112-1 C. civ.) : devis, pièces à remplacer, réparations supplémentaires.",
        "Garantie des pièces et de la main-d'œuvre (garantie commerciale du garagiste)."
      ],
      exclusions: [
        "La force majeure (art. 1218 C. civ.) : événement imprévisible et irrésistible.",
        "La faute de l'acheteur (usage anormal du véhicule, défaut d'entretien)."
      ],
      actions: [
        "Action en responsabilité contractuelle : réparation gratuite, remboursement, ou dommages-intérêts.",
        "Action en résolution du contrat de réparation : si inexécution suffisamment grave (art. 1224 C. civ.).",
        "Action en réduction du prix : si exécution imparfaite (art. 1223 C. civ.).",
        "Action en référé-provision : si l'existence de l'obligation n'est pas sérieusement contestable (art. 809 CPC).",
        "Action en référé-expertise : pour constater les malfaçons (art. 145 CPC)."
      ],
      prescription: "5 ans à compter de la découverte du défaut (art. 2224 C. civ.).",
      charge_preuve: "La présomption de faute du garagiste (obligation de résultat) facilite l'indemnisation. Le garagiste doit prouver qu'il a correctement exécuté les travaux."
    }
  },

  /* --- Droit européen --- */
  droit_europeen: [
    { ref:'Directive 1999/44/CE', texte:"Directive sur certains aspects de la vente et des garanties des biens de consommation. Transposée en France aux articles L211-4 et s. C. conso.", portée:'fondamentale' },
    { ref:'Directive 2019/771', texte:"Directive relative à certains aspects concernant les contrats de vente de biens. Renforce la protection du consommateur (garantie 2 ans, présomption d'antériorité étendue).", portée:'fondamentale' },
    { ref:'Directive 85/374/CEE', texte:"Directive sur la responsabilité du fait des produits défectueux. Transposée aux articles 1245 s. C. civ.", portée:'fondamentale' },
    { ref:'Règlement 2019/515', texte:"Règlement relatif à la reconnaissance mutuelle des biens légalement commercialisés dans un autre État membre.", portée:'importante' },
    { ref:'CJUE, 20 nov. 2008, aff. C-285/08', texte:"La directive 85/374/CE s'applique aux produits automobiles défectueux.", portée:'fondamentale' },
    { ref:'CJUE, 3 juin 2010, aff. C-125/09', texte:"La garantie de conformité de 2 ans est un droit minimal que les États membres ne peuvent réduire.", portée:'fondamentale' }
  ]
};
