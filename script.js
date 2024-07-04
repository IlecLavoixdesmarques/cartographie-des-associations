const combinedData = [
    {
        "Nom": "Restos du coeur",
        "Adherents": "Materne France, Solinest, PepsiCo, Lactalis, Nestlé France, Thai Union, Pernod Ricard, Coca-Cola Europacific Partners, d'Aucy, L'Oréal, Labeyrie Fine Foods, Cofigeo, Bel France, Mars INC, Galliance Elabores, GB Foods, Panzani, Bonduelle, Yoplait, Ferrero France, Danone, Carambar&Co, McCain, Fleury Michon, McCormick France, Herta France",
        "Cible": "Personnes en situation de précarité, sans-abri, familles en difficulté",
        "Perimetre": "National (France)",
        "Actions": "Distribution de repas, aide à l'hébergement, insertion professionnelle, soutien scolaire",
        "Lien": "https://www.restosducoeur.org"
    },
    {
        "Nom": "Dons Solidaires",
        "Adherents": "Haleon, Essity, Henkel France, Colgate-Palmolive, BIC, Unilever, L'Oréal, Pilot Pen France, Kenvue, Kimberly Clark, Beiersdorf, Expanscience, Kao France, Mapa, Mattel, Playmobil, Reckitt, VIleda",
        "Cible": "Personnes en situation de précarité, enfants, familles",
        "Perimetre": "National (France)",
        "Actions": "Redistribution de produits neufs invendus, aide matérielle",
        "Lien": "https://www.donsolidaires.fr"
    },
    {
        "Nom": "Banques alimentaires",
        "Adherents": "Kellanova, General Mills, Carte Noire, Saint Louis Sucre, Carambar&Co, Bonduelle, Unilever, Cofigeo, McCain, Sofidel, PepsiCo, Fleury Michon, Solinest, Dr Oetker France, McCormick France, Herta France, Ferrero France, Tereos",
        "Cible": "Personnes en situation de précarité, familles",
        "Perimetre": "National (France), réseau international",
        "Actions": "Collecte et distribution de denrées alimentaires, lutte contre le gaspillage alimentaire",
        "Lien": "https://www.banquealimentaire.org"
    },
    {
        "Nom": "Association Nationale des Épiceries Solidaires",
        "Adherents": "Kellanova, PepsiCo, Ferrero France",
        "Cible": "Personnes en situation de précarité",
        "Perimetre": "National (France)",
        "Actions": "Épiceries solidaires, accès à une alimentation de qualité à moindre coût",
        "Lien": "https://andes-france.com"
    },
    {
        "Nom": "Secours Populaire",
        "Adherents": "Mutti, Suntory Beverage & Food France, Colgate-Palmolive, Unilever, Cofigeo, Sofidel, Kimberly Clark, PepsiCo, McCormick France, Herta France, Ferrero France",
        "Cible": "Personnes en situation de précarité, enfants, familles, personnes âgées",
        "Perimetre": "National (France), International",
        "Actions": "Aide alimentaire, aide vestimentaire, soutien scolaire, accès aux vacances, aide d'urgence",
        "Lien": "https://www.secourspopulaire.fr"
    },
    {
        "Nom": "Croix Rouge",
        "Adherents": "Essity, Unilever",
        "Cible": "Personnes en situation de précarité, enfants, familles, personnes âgées, sans-abri",
        "Perimetre": "National (France), International",
        "Actions": "Secours d'urgence, aide alimentaire, formation aux premiers secours, aide à l'hébergement, soutien psychologique",
        "Lien": "https://www.croix-rouge.fr"
    },
    {
        "Nom": "Agence du Don en Nature",
        "Adherents": "Playmobil, S.C. Johnson, Colgate-Palmolive, L'Oréal, Essity, Pilot Pen France",
        "Cible": "Personnes en situation de précarité",
        "Perimetre": "National (France)",
        "Actions": "Redistribution de produits de première nécessité, lutte contre le gaspillage, aide matérielle",
        "Lien": "https://www.adnfrance.org"
    },
    {
        "Nom": "Agir pour la Santé des Femmes (ADSF)",
        "Adherents": "Essity",
        "Cible": "Femmes en situation de précarité",
        "Perimetre": "National",
        "Actions": "Consultations médicales, distribution de kits d'hygiène, actions de prévention et d'éducation à la santé",
        "Lien": "https://adsfasso.org/"
    },
    {
        "Nom": "Association ICI Pass",
        "Adherents": "Bel France, McCormick France",
        "Cible": "Enfants et adolescents",
        "Perimetre": "Local (principalement en région Île-de-France)",
        "Actions": "Soutien scolaire, activités culturelles et sportives, accompagnement social",
        "Lien": ""
    },
    {
        "Nom": "Association Sœur Emmanuelle",
        "Adherents": "S.C. Johnson",
        "Cible": "Populations défavorisées, notamment en Afrique",
        "Perimetre": "International",
        "Actions": "Éducation, accès à l'eau potable, santé, développement économique",
        "Lien": "https://www.asmae.fr/"
    },
    {
        "Nom": "Banlieue Santé",
        "Adherents": "L'Oréal",
        "Cible": "Personnes en situation de précarité dans les banlieues",
        "Perimetre": "National",
        "Actions": "Accès aux soins, prévention sanitaire, accompagnement social",
        "Lien": "https://banlieues-sante.org/"
    },
    {
        "Nom": "Carritas",
        "Adherents": "General Mills",
        "Cible": "Familles en difficulté, sans-abri, réfugiés",
        "Perimetre": "International",
        "Actions": "Aide alimentaire, hébergement d'urgence, soutien psychologique",
        "Lien": "https://www.caritas.org/"
    },
    {
        "Nom": "COP1",
        "Adherents": "Innocent Drinks, GB Foods, Cofigeo",
        "Cible": "Étudiants en difficulté",
        "Perimetre": "National",
        "Actions": "Distribution de colis alimentaires, aide financière, accompagnement psychologique",
        "Lien": "https://cop1.fr/"
    },
    {
        "Nom": "Les apprentis d'Autueil",
        "Adherents": "Coca-Cola Europacific Partners, L'Oréal",
        "Cible": "Jeunes en difficulté",
        "Perimetre": "National",
        "Actions": "Éducation, formation professionnelle, accompagnement social",
        "Lien": "https://www.apprentis-auteuil.org/"
    },
    {
        "Nom": "Oasis d'amour",
        "Adherents": "Bel France",
        "Cible": "Personnes sans-abri",
        "Perimetre": "Local",
        "Actions": "Distribution de repas, hébergement d'urgence, aide à la réinsertion",
        "Lien": "https://www.oasis-damour.com/"
    },
    {
        "Nom": "Pharma Solidaires",
        "Adherents": "L'Oréal",
        "Cible": "Personnes en grande précarité",
        "Perimetre": "Local",
        "Actions": "Collecte et distribution de médicaments, campagnes de sensibilisation à l'accès aux soins",
        "Lien": "https://www.pharmasolidaires.com/"
    },
    {
        "Nom": "Pacte 62",
        "Adherents": "Bel France",
        "Cible": "Personnes en situation de précarité",
        "Perimetre": "Régional (Pas-de-Calais)",
        "Actions": "Aide alimentaire, accompagnement social, activités culturelles",
        "Lien": "https://dora.inclusion.beta.gouv.fr/structures/pacte-62"
    },
    {
        "Nom": "Revivre",
        "Adherents": "PepsiCo, GB Foods, Colgate-Palmolive",
        "Cible": "Réfugiés et demandeurs d'asile",
        "Perimetre": "National",
        "Actions": "Aide à l'hébergement, soutien psychologique, intégration sociale",
        "Lien": "https://www.revivre-asso.com/"
    },
    {
        "Nom": "Rudy Gobert Academy",
        "Adherents": "Kellanova",
        "Cible": "Jeunes sportifs",
        "Perimetre": "National",
        "Actions": "Formation sportive, mentorat, soutien éducatif",
        "Lien": "https://www.rudygobertcamp.com/"
    },
    {
        "Nom": "Samu Social",
        "Adherents": "L'Oréal",
        "Cible": "Personnes sans-abri",
        "Perimetre": "National",
        "Actions": "Maraudes, hébergement d'urgence, soins médicaux",
        "Lien": "https://www.samusocial.paris/"
    },
    {
        "Nom": "SPA",
        "Adherents": "Materne France",
        "Cible": "Animaux abandonnés",
        "Perimetre": "National",
        "Actions": "Refuge, adoption, soins vétérinaires",
        "Lien": "https://www.la-spa.fr/"
    },
    {
        "Nom": "Tout le monde chante contre le cancer",
        "Adherents": "Playmobil",
        "Cible": "Enfants atteints de cancer",
        "Perimetre": "National",
        "Actions": "Événements musicaux, soutien aux familles, financement de la recherche",
        "Lien": "https://www.toutlemondechante.net/"
    },
    {
        "Nom": "Programme Malin",
        "Adherents": "Danone",
        "Cible": "Familles à faibles revenus avec jeunes enfants",
        "Perimetre": "National",
        "Actions": "Conseils nutritionnels, aide alimentaire, ateliers éducatifs",
        "Lien": "https://programme-malin.com/"
    },
    {
        "Nom": "La Protection Civile",
        "Adherents": "Coca-Cola Europacific Partners",
        "Cible": "Soutien aux personnes en difficulté, y compris victimes de catastrophes et populations vulnérables",
        "Perimetre": "National",
        "Actions": "Distribution de colis alimentaires, soutien psychologique, et formation aux gestes de premiers secours",
        "Lien": "https://www.protection-civile.org/"
    },
    {
        "Nom": "Laurette Fugain",
        "Adherents": "S.C. Johnson",
        "Cible": "Aide aux patients atteints de leucémie et à leurs familles",
        "Perimetre": "National",
        "Actions": "Soutien aux patients atteints de leucémie et à leurs familles, et sensibilisation au don de moelle osseuse",
        "Lien": "https://www.laurettefugain.org/"
    },
    {
        "Nom": "Le Rire médecin",
        "Adherents": "Playmobil, Ferrero France",
        "Cible": "Soutien moral aux enfants hospitalisés et leurs familles",
        "Perimetre": "National",
        "Actions": "Soutien moral aux enfants hospitalisés à travers des spectacles de clowns",
        "Lien": "https://www.leriremedecin.org/"
    },
    {
        "Nom": "Donnons leur une chance",
        "Adherents": "PepsiCo",
        "Cible": "Soutien aux jeunes en difficulté scolaire et issus de milieux défavorisés",
        "Perimetre": "Local (Île-de-France)",
        "Actions": "Bourses et soutien aux jeunes en difficulté scolaire, avec ateliers éducatifs et artistiques",
        "Lien": "http://www.donnons-leur-une-chance.org/"
    },
    {
        "Nom": "La Cravate solidaire",
        "Adherents": "General Mills",
        "Cible": "Aide à l’insertion professionnelle des personnes en situation de précarité",
        "Perimetre": "National",
        "Actions": "Aide à l’insertion professionnelle par le don de vêtements et ateliers de préparation aux entretiens d'embauche",
        "Lien": "https://lacravatesolidaire.org/"
    },
    {
        "Nom": "Humanity Diaspo",
        "Adherents": "Innocent Drinks",
        "Cible": "Aide aux sans-abri et aux personnes en situation d’exclusion",
        "Perimetre": "Local (Grandes villes)",
        "Actions": "Distribution de repas aux sans-abri et aide administrative et orientation",
        "Lien": "https://www.humanitydiaspo.org/"
    },
    {
        "Nom": "Emmaüs Solidarité",
        "Adherents": "L'Oréal, Carambar&Co",
        "Cible": "Soutien aux personnes sans-abri et en grande précarité",
        "Perimetre": "National",
        "Actions": "Hébergement et réinsertion sociale des personnes sans-abri",
        "Lien": "https://www.emmaus-solidarite.org/"
    },
    {
        "Nom": "L'Armée du salut",
        "Adherents": "Ferrero France",
        "Cible": "Aide aux personnes sans-abri, en situation de pauvreté, et marginalisées",
        "Perimetre": "National",
        "Actions": "Distribution de repas, hébergement d'urgence, et programmes de réinsertion sociale",
        "Lien": "https://www.armeedusalut.fr/"
    },
    {
        "Nom": "La Maison des femmes",
        "Adherents": "S.C. Johnson, Unilever",
        "Cible": "Soutien aux femmes victimes de violences et en situation de vulnérabilité",
        "Perimetre": "Local (Île-de-France)",
        "Actions": "Soutien aux femmes victimes de violences, avec soins médicaux et accompagnement psychologique",
        "Lien": "https://www.lamaisondesfemmes.fr/"
    },
    {
        "Nom": "SOS Bébé",
        "Adherents": "Danone",
        "Cible": "Soutien aux femmes enceintes en difficulté et aux jeunes mères",
        "Perimetre": "Régional",
        "Actions": "Accueil et soutien aux femmes enceintes en difficulté, avec suivi médical et aide matérielle",
        "Lien": "https://www.sosbebe.org/"
    },
    {
        "Nom": "Magie à l'hôpital",
        "Adherents": "Unilever",
        "Cible": "Soutien psychologique pour des enfants hospitalisés",
        "Perimetre": "National",
        "Actions": "Spectacles de magie pour les enfants hospitalisés et leurs familles",
        "Lien": "https://www.magie-hopital.com/"
    },
    {
        "Nom": "Fondation Ronald McDonald",
        "Adherents": "Essity",
        "Cible": "Accompagnement des enfants et de leurs parents",
        "Perimetre": "National",
        "Actions": "Maisons regroupants les parents et leurs enfants hospitalisés afin d'apporter un soutien affectif dans le parcours de guérison",
        "Lien": "https://fondation-ronald-mcdonald.fr/"
    },
    {
        "Nom": "The SeaCleaners",
        "Adherents": "Pilot Pen France",
        "Cible": "Protection de l'environnement",
        "Perimetre": "National",
        "Actions": "Actions de dépollution des océans, production d'études sur la pollution, actions de sensibilisation grand public",
        "Lien": "https://www.theseacleaners.org/fr/accueil/"
    },
    {
        "Nom": "Semaine de l'écriture",
        "Adherents": "Pilot Pen France",
        "Cible": "Enfants, adolescents et adultes",
        "Perimetre": "National",
        "Actions": "Évènement national visant à promouvoir la pratique de l'écriture manuscrite et de ses bienfaits",
        "Lien": "https://www.semainedelecriture.fr/"
    },
    {
        "Nom": "Bonheur des Mômes",
        "Adherents": "Pilot Pen France",
        "Cible": "Festival destiné aux enfants",
        "Perimetre": "Haute-Savoie",
        "Actions": "Festival destiné aux enfants, regroupant des spectacles, ateliers et animations à destination du jeune public",
        "Lien": "https://www.aubonheurdesmomes.com/"
    },
    {
        "Nom": "Les Bricos du Coeur",
        "Adherents": "McCain",
        "Cible": "Associations, Fondations, EPHAD...",
        "Perimetre": "National et international (10 pays)",
        "Actions": "L'association a pour vocation d’ « aider les gens qui aident les gens » en améliorant l’environnement de travail ou de vie des structures sociales",
        "Lien": "https://bricosducoeur.org/about"
    },
    {
        "Nom": "Lazare",
        "Adherents": "McCain",
        "Cible": "Personnes Sans Abris et jeunes actifs",
        "Perimetre": "National",
        "Actions": "Proposent des colocations pour aider des personnes sans abris et des jeunes actifs",
        "Lien": "https://www.lazare.eu/"
    },
    {
        "Nom": "Récolte&Nous",
        "Adherents": "McCain",
        "Cible": "Acteurs locaux de l'économie circulaire et agriculteurs",
        "Perimetre": "Nord (59)",
        "Actions": "Développement d'un réseau de professionnels et d'agriculteurs dans le but de développer l'économie circulaire",
        "Lien": "https://recoltesetnous.fr/"
    },
    {
        "Nom": "Les petites soeurs des pauvres",
        "Adherents": "Sofidel",
        "Cible": "Personnes âgées",
        "Perimetre": "National",
        "Actions": "Renforcement du lien social pour les personnes âgées en situation de pauvreté",
        "Lien": "https://petitessoeursdespauvres.org/"
    },
    {
        "Nom": "Association ELA",
        "Adherents": "Solinest",
        "Cible": "Personnes touchées par la leucodystrophie",
        "Perimetre": "National",
        "Actions": "Aide et écoute pour les personnes touchées par la leucodystrophie.",
        "Lien": "https://ela-asso.com/"
    },
    {
        "Nom": "SOS Villages d'Enfants",
        "Adherents": "Dr Oetker France",
        "Cible": "Enfants en situation de détresse",
        "Perimetre": "National et International",
        "Actions": "Prise en charge de fratries pour protéger les enfants en situation de détresse et préserver les liens familiaux.",
        "Lien": "https://www.sosve.org/"
    },
    {
        "Nom": "Institut Saint-Joseph",
        "Adherents": "Dr Oetker France",
        "Cible": "Enfants et adolescents en difficultés",
        "Perimetre": "Strasbourg",
        "Actions": "Accueil de jeunes dans des Maisons d'enfants à caractère social (MECS) pour leur permettre de s'épanouir sans difficultés sociales et familiales",
        "Lien": "https://www.glaubitz.fr/etablissements-sociaux-medico-sociaux/institution-saint-joseph-strasbourg/"
    },
    {
        "Nom": "Article 1",
        "Adherents": "HEINEKEN",
        "Cible": "Jeunes issus de milieux populaires",
        "Perimetre": "National",
        "Actions": "Aide à l'orientation et à l'insertion professionnelle pour des jeunes issus de milieux populaires",
        "Lien": "https://article-1.eu/"
    },
    {
        "Nom": "Association prévention routière",
        "Adherents": "HEINEKEN",
        "Cible": "",
        "Perimetre": "National",
        "Actions": "Actions de sensibilisation sur les risques liés à la conduite",
        "Lien": "https://www.preventionroutiere.asso.fr/"
    },
    {
        "Nom": "Special Olympics",
        "Adherents": "HEINEKEN",
        "Cible": "Enfants, jeunes et adultes en situation de handicap",
        "Perimetre": "National",
        "Actions": "Permettre aux personnes atteintes d'un handicap mental de connaitre les joies du sport",
        "Lien": "https://www.specialolympics.asso.fr/"
    },
    {
        "Nom": "Nos Quartiers ont du Talent",
        "Adherents": "Ferrero France",
        "Cible": "",
        "Perimetre": "",
        "Actions": "",
        "Lien": "https://www.specialolympics.asso.fr/"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const adherents = getAdherents(combinedData);
    const select = document.getElementById('associationSelect');
    combinedData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.Nom;
        option.textContent = item.Nom;
        select.appendChild(option);
    });

    document.getElementById('searchInput').addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        const filteredData = combinedData.filter(item => 
            item.Nom.toLowerCase().includes(query) ||
            (item.Adherents && item.Adherents.toLowerCase().includes(query)) ||
            item.Cible.toLowerCase().includes(query) ||
            item.Perimetre.toLowerCase().includes(query) ||
            item.Actions.toLowerCase().includes(query)
        );
        displayData(filteredData, query);
    });

    document.getElementById('associationSelect').addEventListener('change', filterByAssociation);
    document.getElementById('resetButton').addEventListener('click', resetFilter);
    document.getElementById('logosButton').addEventListener('click', displayLogoCloud);
    document.getElementById('adherentsLogosButton').addEventListener('click', displayAdherentsLogoCloud);

    function filterByAssociation() {
        const select = document.getElementById('associationSelect');
        const selectedAssociation = select.value;
        if (selectedAssociation) {
            const filteredData = combinedData.filter(item => item.Nom === selectedAssociation);
            displayData(filteredData);
        } else {
            resetFilter();
        }
    }

    function resetFilter() {
        displayData(combinedData);
    }

    function displayLogoCloud() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';
        contentDiv.classList.add('logo-cloud');
        combinedData.forEach(item => {
            const logoPath = `${item.Nom}.jpg`;
            const div = document.createElement('div');
            div.classList.add('logo-item');
            
            div.innerHTML = `
                <img src="${logoPath}" alt="Logo de ${item.Nom}" onerror="this.onerror=null;this.src='default-logo.jpg';">
            `;

            div.addEventListener('click', () => {
                displayAssociationDetails(item);
            });

            contentDiv.appendChild(div);
        });
    }

    function displayAdherentsLogoCloud() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';
        contentDiv.classList.add('logo-cloud');
        adherents.forEach(adherent => {
            const logoPath = `${adherent.replace(/ /g, '_')}.jpg`;
            const div = document.createElement('div');
            div.classList.add('logo-item');
            
            div.innerHTML = `
                <img src="${logoPath}" alt="Logo de ${adherent}" onerror="this.onerror=null;this.src='default-logo.jpg';">
            `;

            div.addEventListener('click', () => {
                displayAdherentAssociations(adherent);
            });

            contentDiv.appendChild(div);
        });
    }

    function displayAdherentAssociations(adherent) {
        const contentDiv = document.getElementById('content');
        contentDiv.classList.remove('logo-cloud');
        contentDiv.innerHTML = '';
        
        const adherentAssociations = combinedData.filter(item => 
            item.Adherents?.includes(adherent)
        );

        adherentAssociations.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
            
            div.innerHTML = `
                <img src="${item.Nom}.jpg" alt="Logo de ${item.Nom}" onerror="this.onerror=null;this.src='default-logo.jpg';">
                <strong>${item.Nom}</strong> - ${item.Adherents}
                <p>${item.Cible}</p>
                <p>${item.Perimetre}</p>
                <p>${item.Actions}</p>
                <a href="${item.Lien}" target="_blank">Visiter le site</a>
            `;
            contentDiv.appendChild(div);
        });
    }

    function displayAssociationDetails(item) {
        const contentDiv = document.getElementById('content');
        contentDiv.classList.remove('logo-cloud');
        contentDiv.innerHTML = '';
        
        const div = document.createElement('div');
        div.classList.add('item');
        
        div.innerHTML = `
            <img src="${item.Nom}.jpg" alt="Logo de ${item.Nom}" onerror="this.onerror=null;this.src='default-logo.jpg';">
            <strong>${item.Nom}</strong> - ${item.Adherents}
            <p>${item.Cible}</p>
            <p>${item.Perimetre}</p>
            <p>${item.Actions}</p>
            <a href="${item.Lien}" target="_blank">Visiter le site</a>
        `;
        contentDiv.appendChild(div);
    }

    function displayData(data, query = '') {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';
        data.forEach(item => {
            const logoPath = `${item.Nom}.jpg`;
            const div = document.createElement('div');
            div.classList.add('item');
            
            // Mettre en gras le nom de l'entreprise si elle correspond à la recherche
            const nameClass = (item.Adherents && item.Adherents.toLowerCase().includes(query)) ? 'highlight' : '';
            
            div.innerHTML = `
                <img src="${logoPath}" alt="Logo de ${item.Nom}" onerror="this.onerror=null;this.src='default-logo.jpg';">
                <strong class="${nameClass}">${item.Nom}</strong> - ${item.Adherents}
                <p>${item.Cible}</p>
                <p>${item.Perimetre}</p>
                <p>${item.Actions}</p>
                <a href="${item.Lien}" target="_blank">Visiter le site</a>
            `;
            contentDiv.appendChild(div);
        });
    }

    function getAdherents(data) {
        const adherentsSet = new Set();
        data.forEach(item => {
            if (item.Adherents) {
                item.Adherents.split(',').forEach(adherent => adherentsSet.add(adherent.trim()));
            }
        });
        return Array.from(adherentsSet);
    }

    resetFilter();
});
