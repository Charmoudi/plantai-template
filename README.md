# PlantAI - Système de Filtrage (Type de Modèle + Classe Prédite)

 1. 📌 Objectif
Cette version ajoute un système de filtres pour permettre à l’administrateur de filtrer les images selon :
- Le type de modèle IA (classification, segmentation…)
- La ou les classes prédites (ex : lisse, dentée…)

2 . 🚀 Installation

 2.1 Backend (Spring Boot)
```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```

 2.2 Frontend (Angular)
```bash
cd frontend
npm install
ng serve
```

L’application sera disponible sur : http://localhost:4200

3.  Fonctionnalité de filtrage
Une interface permet de :
- Sélectionner un type de modèle
- Choisir une ou plusieurs classes
- Afficher les images correspondantes
4.  Structure
- backend/ : API REST Spring Boot
- frontend/ : Application Angular
- documentation/ : Rapport technique PDF

  frontend/
└── src/
    └── app/
        └── components/
            └── image-filter/
                ├── image-filter.component.ts
                ├── image-filter.component.html
                └── image-filter.component.css

  
4 Planning des commits GitHub (8 commits sur 4 jours)
Jour	Objectif	Commit 1	Commit 2
J1	Setup & compréhension	
                          Clone et lecture du projet	
                                                      Ajout des composants de base Angular
J2	Backend filtrage	
                          Création de l’API de filtre côté Spring	
                                                                Test de l’API avec Postman
J3	Frontend 
                              filtrage	Connexion Angular ↔ 
                                                               API	Affichage dynamique des images
J4	Finitions             & doc	Ajout du README
                                                + rapport PDF	Refacto + derniers tests
