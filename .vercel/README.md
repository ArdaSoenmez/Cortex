# Vercel — Cortex (vektocrm.com)

**Project:** Cortex  
**URL:** https://vektocrm.com  
**Vercel Project ID:** prj_AR4u0qBlEA41YFyPjnIoVgk05YW5  
**Team ID:** team_LVoacfi01z6RgOKXzPWkUwiY  

## Deploy-Strategie

**DEPLOY: GitHub Integration aktiv — auto-deploy auf push.**

Jeder Push auf `main` löst automatisch ein Deployment auf vektocrm.com aus.
Manuelles Deployen ist nicht nötig und sollte vermieden werden.

## ⚠️ WARNUNG

Dieses Repo (Cortex) ist die **Marketing-Website** (vektocrm.com).
Es ist NICHT das CRM-Backend (app.vektocrm.com).

Das CRM-Projekt liegt unter: `../crm-bau/`  
CRM Deploy: `cd ../crm-bau && npx vercel --prod`

**NIEMALS** dieses Repo mit dem Vercel-Projekt `crm-bau` verknüpfen.
