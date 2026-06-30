from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json

app = Flask(__name__)
# Permitir requisições de diferentes origens (caso necessário)
CORS(app)

# Diretório base para armazenar os arquivos ZPL
BASE_DIR = os.path.dirname(os.path.abspath(__name__))
ZPL_DIR = os.path.join(BASE_DIR, "arquivos_zpl")
LAYOUTS_FILE = os.path.join(BASE_DIR, "layouts.json")

# Cria a pasta se não existir
if not os.path.exists(ZPL_DIR):
    os.makedirs(ZPL_DIR)
    
# Cria o arquivo de layouts vazio se não existir
if not os.path.exists(LAYOUTS_FILE):
    with open(LAYOUTS_FILE, 'w', encoding='utf-8') as f:
        json.dump([], f)

@app.route('/api/files', methods=['GET'])
def list_files():
    """Lista todos os arquivos ZPL salvos."""
    try:
        files = [f for f in os.listdir(ZPL_DIR) if f.endswith('.zpl') or f.endswith('.txt')]
        # Ordena alfabeticamente
        files.sort()
        return jsonify({"success": True, "files": files})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/files/<filename>', methods=['GET'])
def get_file(filename):
    """Lê o conteúdo de um arquivo ZPL."""
    try:
        file_path = os.path.join(ZPL_DIR, filename)
        # Segurança: evita que leiam arquivos fora da pasta
        if not os.path.abspath(file_path).startswith(ZPL_DIR):
            return jsonify({"success": False, "error": "Acesso negado."}), 403
            
        if not os.path.exists(file_path):
            return jsonify({"success": False, "error": "Arquivo não encontrado."}), 404
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        return jsonify({"success": True, "content": content})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/files/<filename>', methods=['POST'])
def save_file(filename):
    """Salva/Sobrescreve o conteúdo de um arquivo ZPL."""
    try:
        file_path = os.path.join(ZPL_DIR, filename)
        # Segurança: evita salvar fora da pasta
        if not os.path.abspath(file_path).startswith(ZPL_DIR):
            return jsonify({"success": False, "error": "Acesso negado."}), 403
            
        data = request.json
        if not data or 'content' not in data:
            return jsonify({"success": False, "error": "Conteúdo não fornecido."}), 400
            
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(data['content'])
            
        return jsonify({"success": True, "message": "Arquivo salvo com sucesso!"})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/layouts', methods=['GET'])
def get_layouts():
    """Retorna todos os layouts pré-impressos salvos."""
    try:
        if not os.path.exists(LAYOUTS_FILE):
            return jsonify({"success": True, "layouts": []})
        with open(LAYOUTS_FILE, 'r', encoding='utf-8') as f:
            layouts = json.load(f)
        return jsonify({"success": True, "layouts": layouts})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/layouts', methods=['POST'])
def save_layouts():
    """Salva a lista completa de layouts pré-impressos."""
    try:
        data = request.json
        if data is None or 'layouts' not in data:
            return jsonify({"success": False, "error": "Layouts não fornecidos."}), 400
            
        with open(LAYOUTS_FILE, 'w', encoding='utf-8') as f:
            json.dump(data['layouts'], f, ensure_ascii=False)
            
        return jsonify({"success": True, "message": "Layouts salvos com sucesso!"})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    # Opcional: Host 0.0.0.0 para aceitar conexões locais se não estiver usando proxy reverso
    app.run(host='0.0.0.0', port=5051, debug=False)
