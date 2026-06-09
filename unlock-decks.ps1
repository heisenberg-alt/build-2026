# Close PowerPoint, then run this script to clear stale lock files
# so the .pptx decks open in normal (editable) mode.

$ErrorActionPreference = "Stop"

$locks = Get-ChildItem -Path $PSScriptRoot -Filter "~`$*.pptx" -Force -ErrorAction SilentlyContinue
if (-not $locks) {
    Write-Host "No PowerPoint lock files found. You're good to go." -ForegroundColor Green
    return
}

if (Get-Process -Name POWERPNT -ErrorAction SilentlyContinue) {
    Write-Host "PowerPoint is still running. Close all PowerPoint windows first, then re-run this script." -ForegroundColor Yellow
    return
}

foreach ($lock in $locks) {
    try {
        Remove-Item -Force -LiteralPath $lock.FullName
        Write-Host "Removed: $($lock.Name)" -ForegroundColor Green
    } catch {
        Write-Host "Could not remove $($lock.Name): $_" -ForegroundColor Red
    }
}

Write-Host "Done. Re-open the .pptx in PowerPoint and it should be editable." -ForegroundColor Cyan
