$ErrorActionPreference = 'Stop'
$project = Join-Path (Get-Location) 'src\app\projects\projects.module.css'
if (-not (Test-Path $project)) { throw 'Run dit script vanuit de root van devrobb-portfolio (waar package.json staat).' }
$content = Get-Content -LiteralPath $project -Raw
$start = '/* BEGIN compact-project-cards-direct-fix */'
$end = '/* END compact-project-cards-direct-fix */'
$pattern = '(?s)/\* BEGIN compact-project-cards-direct-fix \*/.*?/\* END compact-project-cards-direct-fix \*/'
$content = [regex]::Replace($content, $pattern, '')
$css = @'
/* BEGIN compact-project-cards-direct-fix */
/* Direct CSS-module selectors; !important beats previously imported global overrides. */
.headingRow { margin-bottom: 18px !important; }
.deck { gap: 12px !important; margin-bottom: 18px !important; }
.card {
  height: 160px !important;
  min-height: 0 !important;
  aspect-ratio: auto !important;
  padding: 13px 15px !important;
  border-radius: 12px !important;
  background: #191920 !important;
  box-shadow: none !important;
  transform: none;
}
.card:hover { transform: translateY(-2px) !important; box-shadow: none !important; }
.selected { background: #23232c !important; }
.cardTop, .cardBottom { font-size: 10px !important; letter-spacing: .05em !important; }
.cardTop span:last-child { font-size: 16px !important; }
.cardCenter { flex-direction: row !important; justify-content: flex-start !important; align-items: center !important; text-align: left !important; gap: 10px !important; flex-wrap: wrap !important; }
.cardMonogram { width: 36px !important; height: 36px !important; max-width: none !important; flex: 0 0 36px !important; border-radius: 8px !important; font-size: 21px !important; }
.cardTitle { font-size: clamp(16px, 1.4vw, 19px) !important; }
.cardCategory { flex-basis: 100%; font-size: 9px !important; letter-spacing: .06em !important; }
@media (max-width: 620px) {
  .deck { gap: 10px !important; margin-bottom: 16px !important; }
  .card { height: 154px !important; flex: 0 0 min(68vw, 230px) !important; padding: 12px !important; }
  .cardMonogram { width: 32px !important; height: 32px !important; flex-basis: 32px !important; font-size: 19px !important; }
}
/* END compact-project-cards-direct-fix */
'@
Set-Content -LiteralPath $project -Value ($content.TrimEnd() + "`r`n`r`n" + $css + "`r`n") -Encoding utf8
Write-Host 'Projectkaarten direct aangepast in projects.module.css' -ForegroundColor Green
