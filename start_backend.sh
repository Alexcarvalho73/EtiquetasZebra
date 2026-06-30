#!/bin/bash
# Script para iniciar o servidor Python (Backend EtiquetasZebra) em background

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "Iniciando backend EtiquetasZebra na porta 5051..."

# Mata processos anteriores na porta 5051 (opcional)
fuser -k 5051/tcp 2>/dev/null

# Inicia o servidor com gunicorn ou flask puro no background
nohup python3 server.py > backend.log 2>&1 &

echo "Servidor iniciado! Logs em backend.log"
