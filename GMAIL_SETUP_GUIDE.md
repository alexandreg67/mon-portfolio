# Guide de Configuration Gmail API

## Retour à Gmail avec Sécurité Renforcée

Cette implémentation restaure l'utilisation de l'API Gmail personnelle (qui fonctionnait parfaitement) avec des protections de sécurité modernes avancées.

## Configuration Gmail

### Étape 1: Activer l'authentification à 2 facteurs

1. Allez sur https://myaccount.google.com/security
2. Activez l'**authentification à 2 facteurs** si ce n'est pas déjà fait
3. Ceci est **obligatoire** pour générer des mots de passe d'application

### Étape 2: Générer un mot de passe d'application

1. Dans **Paramètres de sécurité Google**
2. Cliquez sur **Mots de passe des applications**
3. Sélectionnez **Mail** comme application
4. Copiez le mot de passe généré (16 caractères, format: `xxxx xxxx xxxx xxxx`)

### Étape 3: Configuration des variables d'environnement

Mettez à jour votre fichier `.env.local` :

```bash
# Configuration Gmail (obligatoire)
GMAIL_USER=votre-email@gmail.com
GMAIL_PASS=votre-mot-de-passe-application-16-caracteres

# Configuration optionnelle
GMAIL_FROM_NAME=Alexandre Graff
GMAIL_ADMIN_EMAIL=admin@example.com

# Pour le rate limiting avancé (optionnel)
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token

# Configuration du site
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

## Fonctionnalités de Sécurité Implémentées

### ✅ Rate Limiting Multi-niveau
- **Par IP** : 10 requêtes par 10 minutes
- **Par Email** : 3 emails par heure par adresse
- **Fallback mémoire** : Fonctionne sans Redis

### ✅ Protection Anti-Spam Avancée
- **Scoring de spam** : Analyse du contenu avec score /100
- **Patterns de détection** : Mots-clés suspects, liens multiples, etc.
- **Domaines suspects** : Blocage des emails temporaires
- **Validation robuste** : Noms, emails, messages

### ✅ Honeypot Invisible
- **Champ piège** : Invisible pour les humains
- **Détection silencieuse** : Les bots remplissent le champ
- **Réponse neutre** : Pas de révélation de la détection

### ✅ Sécurité Réseau
- **CORS restrictif** : Origines autorisées uniquement
- **Headers de sécurité** : Protection contre XSS, CSRF
- **Gestion d'erreurs** : Messages sécurisés en production

## Avantages par rapport à Resend

| Aspect | Gmail API | Resend |
|--------|-----------|---------|
| **Limitations** | ✅ Aucune limitation d'adresse | ❌ Limitation en mode test |
| **Fiabilité** | ✅ Fonctionne parfaitement | ❌ Problèmes de délivrabilité |
| **Coût** | ✅ Gratuit | ❌ Payant pour domaines personnalisés |
| **Configuration** | ✅ Simple (2 variables) | ❌ Complexe (domaine + DNS) |
| **Sécurité** | ✅ Protections avancées ajoutées | ⚠️ Protections basiques |

## Test et Validation

### Test Local
```bash
pnpm dev
# Tester le formulaire sur http://localhost:3000
# Vérifier les logs dans le terminal
```

### Vérifications
1. **Email de confirmation** : Envoyé à l'utilisateur
2. **Email de notification** : Reçu par l'administrateur
3. **Rate limiting** : Tester plusieurs envois consécutifs
4. **Anti-spam** : Tester avec contenu suspect
5. **Honeypot** : Tester avec des bots

## Monitoring et Logs

### Logs Disponibles
- Détection de spam avec score
- Rate limiting par IP et email
- Erreurs d'authentification Gmail
- Tentatives de contournement

### Métriques de Sécurité
- Score anti-spam : Affiché dans l'email admin
- IP source : Tracking des origines
- Timestamps : Analyse des patterns d'attaque

## Maintenance

### Rotation des Mots de Passe
- Régénérez le mot de passe d'application tous les 6 mois
- Mettez à jour la variable `GMAIL_PASS`

### Surveillance
- Monitorer les logs de spam
- Ajuster les seuils de rate limiting si nécessaire
- Mettre à jour les patterns de spam

## Dépannage

### Erreurs Courantes

**EAUTH** : Mot de passe d'application incorrect
- Régénérez un nouveau mot de passe d'application

**Rate Limit** : Trop de tentatives
- Attendez la fin de la période de limitation
- Vérifiez les logs pour détecter des attaques

**Spam Score Élevé** : Message bloqué
- Ajustez les seuils dans `lib/validation.ts`
- Analysez les logs pour comprendre le scoring

## Support Redis (Optionnel)

Pour une meilleure performance en production, configurez Redis :

1. Créez un compte sur https://upstash.com
2. Créez une base Redis
3. Ajoutez les variables d'environnement
4. Le système basculera automatiquement sur Redis

Sans Redis, le système utilise un cache mémoire local (fonctionnel mais moins performant).

---

Cette implémentation combine la fiabilité prouvée de Gmail avec des protections de sécurité modernes, offrant une solution robuste et sans limitation pour votre formulaire de contact.