# Agent Skills

Ce dossier contient les skills, agents, commandes, hooks et références
d'**[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** —
un ensemble de workflows d'ingénierie (spec → plan → build → test → review → ship)
pour les agents IA codeurs.

## Contenu

- `skills/` — 21 skills couvrant le cycle de vie du développement
- `agents/` — 3 personas spécialistes (code-reviewer, test-engineer, security-auditor)
- `commands/` — 7 slash commands : `/spec`, `/plan`, `/build`, `/test`, `/review`,
  `/code-simplify`, `/ship`
- `hooks/` — hooks de session (ex. SessionStart)
- `references/` — checklists (tests, sécurité, performance, accessibilité)

Les commandes et les agents sont chargés automatiquement par Claude Code au niveau
du projet (emplacements `.claude/commands/` et `.claude/agents/`).

## Licence et attribution

Skills sous licence MIT — © 2025 Addy Osmani. Voir `LICENSE` pour le texte complet.
Source : <https://github.com/addyosmani/agent-skills>
