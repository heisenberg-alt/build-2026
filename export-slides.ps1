# Export every slide of a PPTX to PNG using PowerPoint COM automation.
param(
    [Parameter(Mandatory = $true)] [string] $Pptx,
    [Parameter(Mandatory = $true)] [string] $OutDir
)

$Pptx = (Resolve-Path $Pptx).Path
if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir | Out-Null }
$OutDir = (Resolve-Path $OutDir).Path

Write-Host "Opening PowerPoint..."
$ppt = New-Object -ComObject PowerPoint.Application
# Cannot set Visible=False on PowerPoint; just suppress alerts
$ppt.DisplayAlerts = 1  # ppAlertsNone
try {
    $pres = $ppt.Presentations.Open($Pptx, $true, $false, $false)  # ReadOnly
    $count = $pres.Slides.Count
    Write-Host "Exporting $count slides to $OutDir ..."
    for ($i = 1; $i -le $count; $i++) {
        $name = "slide-{0:D2}.png" -f $i
        $path = Join-Path $OutDir $name
        $pres.Slides.Item($i).Export($path, "PNG", 1600, 900)
        Write-Host "  $name"
    }
    $pres.Close()
} finally {
    $ppt.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($ppt) | Out-Null
}
Write-Host "Done."
