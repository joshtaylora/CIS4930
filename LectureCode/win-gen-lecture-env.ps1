$Date = Get-Date -Format "MMMMM-dd"
[string]$CurrentPath = (Get-Location).ToString()
[string]$EnvPath = "$CurrentPath\$Date"
$ValidatePath = Test-Path $EnvPath
if ($ValidatePath -eq $False)
{
    New-Item -Path . -Name "$Date" -ItemType "directory"
    New-Item -Path "$EnvPath\src" -ItemType "directory"
    New-Item -Path "$EnvPath\src\script.ts" -ItemType "file"
    Set-Location -Path "$EnvPath"
    tsc --init
    $Success = "Env successfully created"
    Write-Output $Success
}
else
{
    $Failure = "Env not created"
    Write-Output $Failure
}