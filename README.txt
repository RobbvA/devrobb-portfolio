Pak de ZIP uit in de root van je portfolio.
Open PowerShell in C:\Users\vanas\Projects\devrobb-portfolio
Voer uit:
  powershell -ExecutionPolicy Bypass -File .\apply.ps1
  npm run build
  git diff -- src/app/projects/projects.module.css

Het script past de bestaande CSS-module aan. Geen extra import in layout.js.
Het script is herhaalbaar zonder dubbele CSS-regels.
