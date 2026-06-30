# Script de Deploy - EtiquetasZebra
Write-Host "Iniciando deploy para o servidor remoto..."
scp -r .\index.html .\index.css .\app.js rdt@10.200.16.96:/var/www/EtiquetasZebra/
Write-Host "Deploy finalizado!"
