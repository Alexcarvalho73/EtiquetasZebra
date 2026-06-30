// Código ZPL Original do Usuário
const DEFAULT_ZPL = `^XA
^MTT
^PW832
^DFDESOSSAEXPORT^FS

//LINHAS LATERAIS E HORIZONTAIS

## HORIZONTAIS ##

^FO616,85^GB4,849,4^FS
^FO587,83^GB4,849,4^FS
^FO471,85^GB4,849,4^FS
^FO395,475^GB4,460,4^FS
^FO325,475^GB4,460,4^FS
^FO256,83^GB4,849,4^FS
^FO224,83^GB4,394,4^FS
^FO128,83^GB4,849,4^FS
^FO014,85^GB4,849,4^FS


## verticais ##
^FO014,81^GB606,4,4^FS
^FO128,474^GB463,4,4^FS
^FO128,691^GB130,4,4^FS
^FO471,691^GB120,4,4^FS
^FO014,932^GB606,4,4^FS
## FO14,1286 GB606,4,4 FS
## FUNDO NEGRO P/ COD. PRODUTO ##
^FO65,90^GB58,244,58^FS

//CHAMA IMAGEM
^FO16,936^XGPIC1    ,1,1^FS

//NAO CONTEM GLUTEN - Retirado a pedido de bento dia: 14/11/2016 via Alisson Souza
FO426,940^FB400,1,0,C,0^A0B,26,26 FDNÆo Cont‚m Gl£ten FS

//DADOS DO FRIGORIFICO
^FO447,935^FB400,1,0,L,0^A0B,18,20^FDProduzido por:^FS
^FO465,935^FB400,1,0,L,0^A0B,18,20^FDFRIGORÖFICO REDENTOR S/A^FS
^FO484,935^FB400,1,0,L,0^A0B,18,20^FDABATEDOURO FRIGORÖFICO^FS
^FO500,935^FB400,1,0,L,0^A0B,18,20^FDRod BR 163 S/N Lote 15^FS
^FO516,935^FB400,1,0,L,0^A0B,18,20^FDGL Bra‡o S/E - Setor 1A^FS
^FO532,935^FB400,1,0,L,0^A0B,18,20^FDGuarantÆ do Norte/MT - CEP 78520-000^FS
^FO553,935^FB400,1,0,L,0^A0B,18,20^FDCNPJ: 02.165.984/0001-96^FS
^FO569,935^FB400,1,0,L,0^A0B,18,20^FDInsc. Est. 13.177.788-2^FS
^FO591,940^FB400,1,0,C,0^A0B,18,20^FDINDéSTRIA BRASILEIRA^FS

//NUMERO DO SIF DENTRO DO LOGO
^FO280,1093^CI0^A0B,55,83^FN109^FS

//CÓDIGO DO PRODUTO
^FO70,95^FB320,1,0,R,0^A0B,60,80^FR^FN3^FS

//CÓDIGOS DE BARRAS
^FO140,727^BY2,2.0,85^BCB,85,N,N,N^FN9^FS
^FO233,757^CI0^A0B,16,26^FN10^FS

^FO481,123^BY2,2.0,83^BCB,83,N,N,N^FN69^FS
^FO571,142^CI0^A0B,17,26^FN70^FS

#################################################
//DESCRIÇÃO TIPO DE PRODUTO PRIMEIRO IDIOMA
^FO030,353^FB570,1,0,L,0^CI0^A0B,25,25^FN1^FS
//DESCRIÇÃO ADICIONAL
^FO030,90^FB260,2,0,C,0^CI0^A0B,20,20^FN8^FS
//DESCRIÇÃO TIPO DE PRODUTO SEGUNDO IDIOMA
^FO060,353^FB570,1,0,L,0^CI0^A0B,25,20^FN2^FS
//DESCRIÇÃO TIPO DE PRODUTO TERCEIRO IDIOMA
^FO090,353^FB570,1,0,L,0^CI0^A0B,25,25^FN87^FS
#################################################

//QUANTIDADE
^FO134,468^FB220,2,0,L,0^A0B,20,25^FR^FN47^FS
^FO156,468^FB220,1,0,L,0^A0B,20,25^FR^FN48^FS
^FO145,480^FB220,1,0,R,0^A0B,39,47^FR^FN51^FS

//RASTREABILIDADE
^FO180,475^GB4,215,4^FS
^FO185,468^FB220,2,0,L,0^A0B,20,20^FR^FN26^FS
^FO205,468^FB220,1,0,L,0^A0B,20,20^FR^FN27^FS
^FO230,468^FB220,2,0,C,0^A0B,25,25^FR^FN30^FS

//TEMPERATURA
^FO134,228^FB240,2,0,L,0^A0B,20,25^FR^FN52^FS
^FO180,187^FB280,1,0,L,0^A0B,20,25^FR^FN53^FS
^FO156,102^CI0^A0B,63,32^FR^FN56^FS
^FO147,90^GB64,110,64^FS

//PESO BRUTO
^FO263,190^FB280,2,0,L,0^A0B,20,25^FR^FN21^FS
^FO285,190^FB280,2,0,L,0^A0B,20,25^FR^FN22^FS
^FO326,165^CI0^A0B,39,47^FN25^FS

//PESO LIQUIDO
^FO375,190^FB280,2,0,L,0^A0B,20,25^FR^FN57^FS
^FO396,190^FB280,2,0,L,0^A0B,20,25^FR^FN58^FS
^FO415,165^CI0^A0B,50,47^FN61^FS


//DATA DE EMBALAGEM/PRODUÇÃO
^FO263,490^FB435,1,0,L,0^A0B,20,25^FR^FN127^FS
^FO281,490^FB435,1,0,L,0^A0B,20,25^FR^FN128^FS
^FO276,490^FB435,1,0,R,0^A0B,40,40^FR^FN487^FS

//DATA DE ABATE
^FO332,490^FB435,1,0,L,0^A0B,20,25^FR^FN199^FS
^FO350,490^FB435,1,0,L,0^A0B,20,25^FR^FN200^FS
^FO345,490^FB435,1,0,R,0^A0B,40,40^FR^FN188^FS

//DATA DE VALIDADE
^FO402,490^FB435,1,0,L,0^A0B,20,25^FR^FN32^FS
^FO420,490^FB435,1,0,L,0^A0B,20,25^FR^FN33^FS
^FO415,490^FB435,1,0,R,0^A0B,55,40^FR^FN36^FS

//CODIGO DO OPERADOR
^FO234,183^FB280,2,0,L,0^A0B,26,26^FR^FN71^FS
//HORA DA IMPRESSAO
^FO234,14^FB280,2,0,L,0^A0B,26,26^FR^FN72^FS

//TARA DE EMBALAGEM
^FO479,669^FB260,2,0,L,0^A0B,18,25^FR^FN11^FS
^FO500,669^FB260,1,0,L,0^A0B,20,25^FR^FN12^FS
^FO546,739^CI0^A0B,39,47^FN15^FS

//TARA DA CAIXA
^FO479,468^FB220,2,0,L,0^A0B,20,25^FR^FN16^FS
^FO500,468^FB220,1,0,L,0^A0B,20,25^FR^FN17^FS
^FO546,502^CI0^A0B,39,47^FN20^FS

    \t//linha 1\n\t^FO376,205^CI0^A0B,18,20^FR^FD^FS\n\t//linha 2\n\t^FO400,323^CI0^A0B,18,20^FR^FD^FS\n\t//linha 3\n\t^FO425,323^CI0^A0B,18,20^FR^FD^FS

//DIZERES DO MAPA
^FO595,245^CI0^A0B,24,22^FR^FDUSO AUTORIZADO PELO MINISTRIO DA AGRICULTURA SIF/DIPOA SOB N§ ^FS
^FO595,150^CI0^A0B,24,28^FN113^FS

^XZ`;

// Mapeamento de variáveis para dar nomes legíveis nos inputs
const VARIABLE_METADATA = {
    "1": { label: "Código do produto", default: "FN1" },
    "2": { label: "Descrição (Inglês)", default: "FN2" },
    "3": { label: "Código do Produto", default: "FN3" },
    "4": { label: "Data de produção", default: "FN4" },
    "5": { label: "Data de validade", default: "FN5" },
    "6": { label: "SIF", default: "FN6" },
    "7": { label: "Rastreabilidade", default: "FN7" },
    "8": { label: "EAN13", default: "FN8" },
    "9": { label: "EAN14", default: "FN9" },
    "10": { label: "Quantidade", default: "FN10" },
    "11": { label: "Código do produto", default: "FN11" },
    "12": { label: "Descrição (idioma 1)", default: "FN12" },
    "13": { label: "Descrição do tipo (idioma 1)", default: "FN13" },
    "14": { label: "Data de produção", default: "FN14" },
    "15": { label: "Data de validade", default: "FN15" },
    "16": { label: "SIF", default: "FN16" },
    "17": { label: "Rastreabilidade", default: "FN17" },
    "18": { label: "EAN13 1357913579135", default: "FN18" },
    "19": { label: "EAN14 14703692581470", default: "FN19" },
    "20": { label: "Quantidade", default: "FN20" },
    "21": { label: "EAN13", default: "FN21" },
    "22": { label: "Descrição para exportação (idioma 1)", default: "FN22" },
    "23": { label: "Peso Líquido", default: "FN23" },
    "25": { label: "Data de abate", default: "FN25" },
    "26": { label: "Data de validade para situação congelado", default: "FN26" },
    "27": { label: "Data de validade para situação resfriado", default: "FN27" },
    "28": { label: "Data de validade para situação geladeira", default: "FN28" },
    "29": { label: "Lote de Produção", default: "FN29" },
    "30": { label: "Código do produto do cliente", default: "FN30" },
    "31": { label: "Tara da Embalagem", default: "FN31" },
    "32": { label: "Data Validade (Label)", default: "FN32" },
    "33": { label: "Data Validade (Formato)", default: "FN33" },
    "34": { label: "CNPJ", default: "FN34" },
    "35": { label: "Endereço", default: "FN35" },
    "36": { label: "Cidade e UF", default: "FN36" },
    "37": { label: "País", default: "FN37" },
    "38": { label: "CEP", default: "FN38" },
    "39": { label: "Telefone", default: "FN39" },
    "40": { label: "Descrição (idioma 2)", default: "FN40" },
    "41": { label: "Descrição do tipo (idioma 2)", default: "FN41" },
    "42": { label: "Descrição para exportação (idioma 2)", default: "FN42" },
    "43": { label: "Descrição (idioma 3)", default: "FN43" },
    "44": { label: "Descrição do tipo (idioma 3)", default: "FN44" },
    "45": { label: "Descrição para exportação (idioma 3)", default: "FN45" },
    "46": { label: "Descrição (idioma 4)", default: "FN46" },
    "47": { label: "Descrição do tipo (idioma 4)", default: "FN47" },
    "48": { label: "Descrição para exportação (idioma 4)", default: "FN48" },
    "49": { label: "Descrição (idioma 5)", default: "FN49" },
    "50": { label: "Descrição do tipo (idioma 5)", default: "FN50" },
    "51": { label: "Descrição para exportação (idioma 5)", default: "FN51" },
    "52": { label: "Descrição adicional (idioma 1)", default: "FN52" },
    "53": { label: "Descrição adicional (idioma 2)", default: "FN53" },
    "54": { label: "Descrição adicional (idioma 3)", default: "FN54" },
    "55": { label: "Descrição adicional (idioma 4)", default: "FN55" },
    "56": { label: "Descrição adicional (idioma 5)", default: "FN56" },
    "57": { label: "DIPOA", default: "FN57" },
    "58": { label: "Temperatura de conservação", default: "FN58" },
    "59": { label: "Texto â€œMantenha Resfriadoâ€ ou â€œMantenha Congeladoâ€", default: "FN59" },
    "60": { label: "Sexo", default: "FN60" },
    "61": { label: "Característica 1 (item)", default: "FN61" },
    "62": { label: "Característica 1 (especificação)", default: "FN62" },
    "63": { label: "Característica 2 (item)", default: "FN63" },
    "64": { label: "Característica 2 (especificação)", default: "FN64" },
    "65": { label: "Característica 3 (item)", default: "FN65" },
    "66": { label: "Característica 3 (especificação)", default: "FN66" },
    "67": { label: "Característica 4 (item)", default: "FN67" },
    "68": { label: "Característica 4 (especificação)", default: "FN68" },
    "69": { label: "Característica 5 (item)", default: "FN69" },
    "70": { label: "Característica 5 (especificação)", default: "FN70" },
    "71": { label: "Característica 6 (item)", default: "FN71" },
    "72": { label: "Característica 6 (especificação)", default: "FN72" },
    "73": { label: "Característica 7 (item)", default: "FN73" },
    "74": { label: "Característica 7 (especificação)", default: "FN74" },
    "75": { label: "Característica 8 (item)", default: "FN75" },
    "76": { label: "Característica 8 (especificação)", default: "FN76" },
    "77": { label: "Característica 9 (item)", default: "FN77" },
    "78": { label: "Característica 9 (especificação)", default: "FN78" },
    "79": { label: "Característica 10 (item)", default: "FN79" },
    "80": { label: "Característica 10 (especificação)", default: "FN80" },
    "81": { label: "Característica 11 (item)", default: "FN81" },
    "82": { label: "Característica 11 (especificação)", default: "FN82" },
    "83": { label: "Característica 12 (item)", default: "FN83" },
    "84": { label: "Característica 12 (especificação)", default: "FN84" },
    "85": { label: "DIPOA/SIF e código reduzido numérico", default: "FN85" },
    "86": { label: "Temperatura de conservação (só o valor)", default: "FN86" },
    "87": { label: "Tara da Embalagem em grama", default: "FN87" },
    "91": { label: "Característica 1 (percentual)", default: "FN91" },
    "92": { label: "Característica 2 (percentual)", default: "FN92" },
    "93": { label: "Característica 3 (percentual)", default: "FN93" },
    "94": { label: "Característica 4 (percentual)", default: "FN94" },
    "95": { label: "Característica 5 (percentual)", default: "FN95" },
    "96": { label: "Característica 6 (percentual)", default: "FN96" },
    "97": { label: "Característica 7 (percentual)", default: "FN97" },
    "98": { label: "Característica 8 (percentual)", default: "FN98" },
    "99": { label: "Característica 9 (percentual)", default: "FN99" },
    "100": { label: "Característica 10 (percentual)", default: "FN100" },
    "101": { label: "Característica 11 (percentual)", default: "FN101" },
    "102": { label: "Característica 12 (percentual)", default: "FN102" },
    "109": { label: "Número do SIF (Logo)", default: "FN109" },
    "110": { label: "Característica 1 (item)", default: "FN110" },
    "111": { label: "Característica 1 (especificação)", default: "FN111" },
    "112": { label: "Característica 1 (percentual)", default: "FN112" },
    "113": { label: "Característica 2 (item)", default: "FN113" },
    "114": { label: "Característica 2 (especificação)", default: "FN114" },
    "115": { label: "Característica 2 (percentual)", default: "FN115" },
    "116": { label: "Característica 3 (item)", default: "FN116" },
    "117": { label: "Característica 3 (especificação)", default: "FN117" },
    "118": { label: "Característica 3 (percentual)", default: "FN118" },
    "119": { label: "Característica 4 (item)", default: "FN119" },
    "120": { label: "Característica 4 (especificação)", default: "FN120" },
    "121": { label: "Característica 4 (percentual)", default: "FN121" },
    "122": { label: "Característica 5 (item)", default: "FN122" },
    "123": { label: "Característica 5 (especificação)", default: "FN123" },
    "124": { label: "Característica 5 (percentual)", default: "FN124" },
    "125": { label: "Característica 6 (item)", default: "FN125" },
    "126": { label: "Característica 6 (especificação)", default: "FN126" },
    "127": { label: "Característica 6 (percentual)", default: "FN127" },
    "128": { label: "Característica 7 (item)", default: "FN128" },
    "129": { label: "Característica 7 (especificação)", default: "FN129" },
    "130": { label: "Característica 7 (percentual)", default: "FN130" },
    "131": { label: "Característica 8 (item)", default: "FN131" },
    "132": { label: "Característica 8 (especificação)", default: "FN132" },
    "133": { label: "Característica 8 (percentual)", default: "FN133" },
    "134": { label: "Característica 9 (item)", default: "FN134" },
    "135": { label: "Característica 9 (especificação)", default: "FN135" },
    "136": { label: "Característica 9 (percentual)", default: "FN136" },
    "137": { label: "Característica 10 (item)", default: "FN137" },
    "138": { label: "Característica 10 (especificação)", default: "FN138" },
    "139": { label: "Característica 10 (percentual)", default: "FN139" },
    "140": { label: "Característica 11 (item)", default: "FN140" },
    "141": { label: "Característica 11 (especificação)", default: "FN141" },
    "142": { label: "Característica 11 (percentual)", default: "FN142" },
    "143": { label: "Característica 12 (item)", default: "FN143" },
    "144": { label: "Característica 12 (especificação)", default: "FN144" },
    "145": { label: "Característica 12 (percentual)", default: "FN145" },
    "146": { label: "Característica 13 (item)", default: "FN146" },
    "147": { label: "Característica 13 (especificação)", default: "FN147" },
    "148": { label: "Característica 13 (percentual)", default: "FN148" },
    "149": { label: "Característica 14 (item)", default: "FN149" },
    "150": { label: "Característica 14 (especificação)", default: "FN150" },
    "151": { label: "Característica 14 (percentual)", default: "FN151" },
    "152": { label: "Característica 15 (item)", default: "FN152" },
    "153": { label: "Característica 15 (especificação)", default: "FN153" },
    "154": { label: "Característica 15 (percentual)", default: "FN154" },
    "155": { label: "Característica 16 (item)", default: "FN155" },
    "156": { label: "Característica 16 (especificação)", default: "FN156" },
    "157": { label: "Característica 16 (percentual)", default: "FN157" },
    "158": { label: "Ingredientes", default: "FN158" },
    "159": { label: "Temperatura de conservação congelador - somente a palavra Congelador", default: "FN159" },
    "160": { label: "Temperatura de conservação congelador (só o valor)", default: "FN160" },
    "161": { label: "Temperatura de conservação congelador", default: "FN161" },
    "162": { label: "Temperatura de conservação geladeira - somente a palavra Geladeira", default: "FN162" },
    "163": { label: "Temperatura de conservação geladeira (só o valor)", default: "FN163" },
    "164": { label: "Temperatura de conservação geladeira", default: "FN164" },
    "165": { label: "Temperatura de conservação freezer - somente a palavra Freezer", default: "FN165" },
    "166": { label: "Temperatura de conservação freezer (só o valor)", default: "FN166" },
    "167": { label: "Temperatura de conservação freezer", default: "FN167" },
    "168": { label: "Data de validade para situação freezer", default: "FN168" },
    "169": { label: "Prazo de validade para situação congelado", default: "FN169" },
    "170": { label: "Prazo de validade para situação resfriado", default: "FN170" },
    "171": { label: "Prazo de validade para situação freezer", default: "FN171" },
    "172": { label: "Peso padrão do produto", default: "FN172" },
    "173": { label: "Contra Marca", default: "FN173" },
    "174": { label: "Peso Bruto da caixa", default: "FN174" },
    "175": { label: "Tara total da caixa", default: "FN175" },
    "176": { label: "Tara da caixa", default: "FN176" },
    "177": { label: "Quantidade de peças por caixa", default: "FN177" },
    "180": { label: "Primeira Linha da Contra Marca", default: "FN180" },
    "181": { label: "Segunda Linha da Contra Marca", default: "FN181" },
    "182": { label: "Terceira Linha da Contra Marca", default: "FN182" },
    "183": { label: "Quarta Linha da Contra Marca", default: "FN183" },
    "186": { label: "Descrição (idioma 6)", default: "FN186" },
    "187": { label: "Descrição do tipo (idioma 6)", default: "FN187" },
    "188": { label: "Descrição para exportação (idioma 6)", default: "FN188" },
    "189": { label: "Descrição adicional (idioma 6)", default: "FN189" },
    "190": { label: "Descrição (idioma 7)", default: "FN190" },
    "191": { label: "Descrição do tipo (idioma 7)", default: "FN191" },
    "192": { label: "Descrição para exportação (idioma 7)", default: "FN192" },
    "193": { label: "Descrição adicional (idioma 7)", default: "FN193" },
    "199": { label: "Data Abate (Label)", default: "FN199" },
    "200": { label: "Componente 1 (item)", default: "FN200" },
    "201": { label: "Componente 1 (percentual)", default: "FN201" },
    "202": { label: "Componente 2 (item)", default: "FN202" },
    "203": { label: "Componente 2 (percentual)", default: "FN203" },
    "204": { label: "Componente 3 (item)", default: "FN204" },
    "205": { label: "Componente 3 (percentual)", default: "FN205" },
    "206": { label: "Componente 4 (item)", default: "FN206" },
    "207": { label: "Componente 4 (percentual)", default: "FN207" },
    "208": { label: "Componente 5 (item)", default: "FN208" },
    "209": { label: "Componente 5 (percentual)", default: "FN209" },
    "210": { label: "Componente 6 (item)", default: "FN210" },
    "211": { label: "Componente 6 (percentual)", default: "FN211" },
    "212": { label: "Componente 7 (item)", default: "FN212" },
    "213": { label: "Componente 7 (percentual)", default: "FN213" },
    "214": { label: "Componente 8 (item)", default: "FN214" },
    "215": { label: "Componente 8 (percentual)", default: "FN215" },
    "216": { label: "Componente 9 (item)", default: "FN216" },
    "217": { label: "Componente 9 (percentual)", default: "FN217" },
    "218": { label: "Componente 10 (item)", default: "FN218" },
    "219": { label: "Componente 10 (percentual)", default: "FN219" },
    "220": { label: "Componente 11 (item)", default: "FN220" },
    "221": { label: "Componente 11 (percentual)", default: "FN221" },
    "222": { label: "Componente 12 (item)", default: "FN222" },
    "223": { label: "Componente 12 (percentual)", default: "FN223" },
    "224": { label: "Componente 13 (item)", default: "FN224" },
    "225": { label: "Componente 13 (percentual)", default: "FN225" },
    "226": { label: "Componente 14 (item)", default: "FN226" },
    "227": { label: "Componente 14 (percentual)", default: "FN227" },
    "228": { label: "Componente 15 (item)", default: "FN228" },
    "229": { label: "Componente 15 (percentual)", default: "FN229" },
    "230": { label: "Componente 16 (item)", default: "FN230" },
    "231": { label: "Componente 16 (percentual)", default: "FN231" },
    "314": { label: "Data de produção (aaaa/mm/dd)", default: "FN314" },
    "315": { label: "Data de validade (aaaa/mm/dd)", default: "FN315" },
    "316": { label: "Data de abate (aaaa/mm/dd)", default: "FN316" },
    "354": { label: "SIF/DIPOA e código reduzido numérico", default: "FN354" },
    "355": { label: "Número de Cópias", default: "FN355" },
    "356": { label: "Nome Unidade", default: "FN356" },
    "357": { label: "Bairro", default: "FN357" },
    "358": { label: "Estabelecimento", default: "FN358" },
    "359": { label: "Descrição de Faturamento", default: "FN359" },
    "360": { label: "Descrição Adicional 2", default: "FN360" },
    "361": { label: "Ano Data Produção", default: "FN361" },
    "362": { label: "Ano Data Validade", default: "FN362" },
    "363": { label: "Ano Data Abate", default: "FN363" },
    "364": { label: "!+Código do Produto+Quant Peças", default: "FN364" },
    "365": { label: "FN 59 sem a letra A", default: "FN365" },
    "366": { label: "Peso Prev", default: "FN366" },
    "367": { label: "!+Código do Produto+Código OP", default: "FN367" },
    "368": { label: "Lote no formato DDMMAALL", default: "FN368" },
    "370": { label: "Após aberto", default: "FN370" },
    "371": { label: "Degelo", default: "FN371" },
    "372": { label: "Temperatura 1", default: "FN372" },
    "373": { label: "Temperatura 2", default: "FN373" },
    "374": { label: "Transporte", default: "FN374" },
    "375": { label: "Informações complementares 1", default: "FN375" },
    "376": { label: "Informações complementares 2", default: "FN376" },
    "377": { label: "Informações complementares 3", default: "FN377" },
    "378": { label: "Observações", default: "FN378" },
    "379": { label: "Informações complementares 1", default: "FN379" },
    "380": { label: "Informações complementares 2", default: "FN380" },
    "381": { label: "Item 1", default: "FN381" },
    "382": { label: "Especificações 1", default: "FN382" },
    "383": { label: "Critério de avaliação 1", default: "FN383" },
    "384": { label: "Item 2", default: "FN384" },
    "385": { label: "Especificações 2", default: "FN385" },
    "386": { label: "Critério de avaliação 2", default: "FN386" },
    "387": { label: "Item 3", default: "FN387" },
    "388": { label: "Especificações 3", default: "FN388" },
    "389": { label: "Critério de avaliação 3", default: "FN389" },
    "390": { label: "Item 4", default: "FN390" },
    "391": { label: "Especificações 4", default: "FN391" },
    "392": { label: "Critério de avaliação 4", default: "FN392" },
    "393": { label: "Item 5", default: "FN393" },
    "394": { label: "Especificações 5", default: "FN394" },
    "395": { label: "Critério de avaliação 5", default: "FN395" },
    "396": { label: "Item 6", default: "FN396" },
    "397": { label: "Especificações 6", default: "FN397" },
    "398": { label: "Critério de avaliação 6", default: "FN398" },
    "399": { label: "Item 7", default: "FN399" },
    "400": { label: "Especificações 7", default: "FN400" },
    "401": { label: "Critério de avaliação 7", default: "FN401" },
    "402": { label: "Item 8", default: "FN402" },
    "403": { label: "Especificações 8", default: "FN403" },
    "404": { label: "Critério de avaliação 8", default: "FN404" },
    "405": { label: "Item 9", default: "FN405" },
    "406": { label: "Especificações 9", default: "FN406" },
    "407": { label: "Critério de avaliação 9", default: "FN407" },
    "408": { label: "Item 10", default: "FN408" },
    "409": { label: "Especificações 10", default: "FN409" },
    "410": { label: "Critério de avaliação 10", default: "FN410" },
    "411": { label: "Valor do produto", default: "FN411" },
    "412": { label: "Valor do produto (FN411) multiplicado pelo peso líquido", default: "FN412" },
    "413": { label: "Código de barras formado pelo código do produto e pelo peso líquido", default: "FN413" },
    "414": { label: "Código do Fateiro relacionado ao contrato", default: "FN414" },
    "415": { label: "Nome do Fateiro relacionado ao contrato", default: "FN415" },
    "416": { label: "Código do Cliente relacionado ao contrato", default: "FN416" },
    "417": { label: "Nome do Cliente relacionado ao contrato", default: "FN417" },
    "418": { label: "Data de Congelamento do Produto", default: "FN418" },
    "419": { label: "IMA/GIP", default: "FN419" },
    "420": { label: "Código do usuÃ¡rio logado", default: "FN420" },
    "421": { label: "Data e Hora da impressão da etiqueta", default: "FN421" },
    "422": { label: "!+Código do Produto", default: "FN422" },
    "423": { label: "Características Nutricionais do Produto", default: "FN423" },
    "424": { label: "Código de Barras com Identificador da Peça", default: "FN424" },
    "425": { label: "URL de Consulta do QR Code", default: "FN425" },
    "426": { label: "Peso Prev", default: "FN426" },
    "427": { label: "Data de produção (dd", default: "FN427" },
    "428": { label: "Data de validade (dd", default: "FN428" },
    "429": { label: "Código Produto + Data Produção + Código Rastreabilidade", default: "FN429" },
    "430": { label: "Quantidade de porções Chile", default: "FN430" },
    "432": { label: "Peso Líquido (Libras)", default: "FN432" },
    "433": { label: "Tara da Embalagem (Libras)", default: "FN433" },
    "434": { label: "Peso Bruto da caixa (Libras)", default: "FN434" },
    "435": { label: "Tara total da caixa (Libras)", default: "FN435" },
    "436": { label: "Tara da caixa (Libras)", default: "FN436" },
    "440": { label: "Padrão de Lote definido no Contrato", default: "FN440" },
    "441": { label: "Literal no Idioma 1", default: "FN441" },
    "442": { label: "Literal no Idioma 2", default: "FN442" },
    "443": { label: "Literal no Idioma 3", default: "FN443" },
    "444": { label: "Literal no Idioma 4", default: "FN444" },
    "445": { label: "Literal no Idioma 5", default: "FN445" },
    "446": { label: "Literal no Idioma 6", default: "FN446" },
    "447": { label: "Literal no Idioma 7", default: "FN447" },
    "448": { label: "Literal no Idioma 1", default: "FN448" },
    "449": { label: "Literal no Idioma 2", default: "FN449" },
    "450": { label: "Literal no Idioma 3", default: "FN450" },
    "451": { label: "Literal no Idioma 4", default: "FN451" },
    "452": { label: "Literal no Idioma 5", default: "FN452" },
    "453": { label: "Literal no Idioma 6", default: "FN453" },
    "454": { label: "Literal no Idioma 7", default: "FN454" },
    "455": { label: "Literal no Idioma 1", default: "FN455" },
    "456": { label: "Literal no Idioma 2", default: "FN456" },
    "457": { label: "Literal no Idioma 3", default: "FN457" },
    "458": { label: "Literal no Idioma 4", default: "FN458" },
    "459": { label: "Literal no Idioma 5", default: "FN459" },
    "460": { label: "Literal no Idioma 6", default: "FN460" },
    "461": { label: "Literal no Idioma 7", default: "FN461" },
    "462": { label: "Literal no Idioma 1", default: "FN462" },
    "463": { label: "Literal no Idioma 2", default: "FN463" },
    "464": { label: "Literal no Idioma 3", default: "FN464" },
    "465": { label: "Literal no Idioma 4", default: "FN465" },
    "466": { label: "Literal no Idioma 5", default: "FN466" },
    "467": { label: "Literal no Idioma 6", default: "FN467" },
    "468": { label: "Literal no Idioma 7", default: "FN468" },
    "469": { label: "Literal no Idioma 1", default: "FN469" },
    "470": { label: "Literal no Idioma 2", default: "FN470" },
    "471": { label: "Literal no Idioma 3", default: "FN471" },
    "472": { label: "Literal no Idioma 4", default: "FN472" },
    "473": { label: "Literal no Idioma 5", default: "FN473" },
    "474": { label: "Literal no Idioma 6", default: "FN474" },
    "475": { label: "Literal no Idioma 7", default: "FN475" },
    "476": { label: "Literal no Idioma 1", default: "FN476" },
    "477": { label: "Literal no Idioma 2", default: "FN477" },
    "478": { label: "Literal no Idioma 3", default: "FN478" },
    "479": { label: "Literal no Idioma 4", default: "FN479" },
    "480": { label: "Literal no Idioma 5", default: "FN480" },
    "481": { label: "Literal no Idioma 6", default: "FN481" },
    "482": { label: "Literal no Idioma 7", default: "FN482" },
    "483": { label: "Literal no Idioma 1", default: "FN483" },
    "484": { label: "Literal no Idioma 2", default: "FN484" },
    "485": { label: "Literal no Idioma 3", default: "FN485" },
    "486": { label: "Literal no Idioma 4", default: "FN486" },
    "487": { label: "Literal no Idioma 5", default: "FN487" },
    "488": { label: "Literal no Idioma 6", default: "FN488" },
    "489": { label: "Literal no Idioma 7", default: "FN489" },
    "490": { label: "Literal no Idioma 1", default: "FN490" },
    "491": { label: "Literal no Idioma 2", default: "FN491" },
    "492": { label: "Literal no Idioma 3", default: "FN492" },
    "493": { label: "Literal no Idioma 4", default: "FN493" },
    "494": { label: "Literal no Idioma 5", default: "FN494" },
    "495": { label: "Literal no Idioma 6", default: "FN495" },
    "496": { label: "Literal no Idioma 7", default: "FN496" },
    "497": { label: "Literal no Idioma 1", default: "FN497" },
    "498": { label: "Literal no Idioma 2", default: "FN498" },
    "499": { label: "Literal no Idioma 3", default: "FN499" },
    "500": { label: "Literal no Idioma 4", default: "FN500" },
    "501": { label: "Literal no Idioma 5", default: "FN501" },
    "502": { label: "Literal no Idioma 6", default: "FN502" },
    "503": { label: "Literal no Idioma 7", default: "FN503" },
    "504": { label: "Literal no Idioma 1", default: "FN504" },
    "505": { label: "Literal no Idioma 2", default: "FN505" },
    "506": { label: "Literal no Idioma 3", default: "FN506" },
    "507": { label: "Literal no Idioma 4", default: "FN507" },
    "508": { label: "Literal no Idioma 5", default: "FN508" },
    "509": { label: "Literal no Idioma 6", default: "FN509" },
    "510": { label: "Literal no Idioma 7", default: "FN510" },
    "511": { label: "Literal no Idioma 1", default: "FN511" },
    "512": { label: "Literal no Idioma 2", default: "FN512" },
    "513": { label: "Literal no Idioma 3", default: "FN513" },
    "514": { label: "Literal no Idioma 4", default: "FN514" },
    "515": { label: "Literal no Idioma 5", default: "FN515" },
    "516": { label: "Literal no Idioma 6", default: "FN516" },
    "517": { label: "Literal no Idioma 7", default: "FN517" },
    "518": { label: "Literal no Idioma 1", default: "FN518" },
    "519": { label: "Literal no Idioma 2", default: "FN519" },
    "520": { label: "Literal no Idioma 3", default: "FN520" },
    "521": { label: "Literal no Idioma 4", default: "FN521" },
    "522": { label: "Literal no Idioma 5", default: "FN522" },
    "523": { label: "Literal no Idioma 6", default: "FN523" },
    "524": { label: "Literal no Idioma 7", default: "FN524" },
    "525": { label: "Literal no Idioma 1", default: "FN525" },
    "526": { label: "Literal no Idioma 2", default: "FN526" },
    "527": { label: "Literal no Idioma 3", default: "FN527" },
    "528": { label: "Literal no Idioma 4", default: "FN528" },
    "529": { label: "Literal no Idioma 5", default: "FN529" },
    "530": { label: "Literal no Idioma 6", default: "FN530" },
    "531": { label: "Literal no Idioma 7", default: "FN531" },
    "532": { label: "Literal no Idioma 1", default: "FN532" },
    "533": { label: "Literal no Idioma 2", default: "FN533" },
    "534": { label: "Literal no Idioma 3", default: "FN534" },
    "535": { label: "Literal no Idioma 4", default: "FN535" },
    "536": { label: "Literal no Idioma 5", default: "FN536" },
    "537": { label: "Literal no Idioma 6", default: "FN537" },
    "538": { label: "Literal no Idioma 7", default: "FN538" },
    "539": { label: "Literal no Idioma 1", default: "FN539" },
    "540": { label: "Literal no Idioma 2", default: "FN540" },
    "541": { label: "Literal no Idioma 3", default: "FN541" },
    "542": { label: "Literal no Idioma 4", default: "FN542" },
    "543": { label: "Literal no Idioma 5", default: "FN543" },
    "544": { label: "Literal no Idioma 6", default: "FN544" },
    "545": { label: "Literal no Idioma 7", default: "FN545" },
    "546": { label: "Literal no Idioma 1", default: "FN546" },
    "547": { label: "Literal no Idioma 2", default: "FN547" },
    "548": { label: "Literal no Idioma 3", default: "FN548" },
    "549": { label: "Literal no Idioma 4", default: "FN549" },
    "550": { label: "Literal no Idioma 5", default: "FN550" },
    "551": { label: "Literal no Idioma 6", default: "FN551" },
    "552": { label: "Literal no Idioma 7", default: "FN552" },
    "553": { label: "Literal no Idioma 1", default: "FN553" },
    "554": { label: "Literal no Idioma 2", default: "FN554" },
    "555": { label: "Literal no Idioma 3", default: "FN555" },
    "556": { label: "Literal no Idioma 4", default: "FN556" },
    "557": { label: "Literal no Idioma 5", default: "FN557" },
    "558": { label: "Literal no Idioma 6", default: "FN558" },
    "559": { label: "Literal no Idioma 7", default: "FN559" },
    "560": { label: "Literal no Idioma 1", default: "FN560" },
    "561": { label: "Literal no Idioma 2", default: "FN561" },
    "562": { label: "Literal no Idioma 3", default: "FN562" },
    "563": { label: "Literal no Idioma 4", default: "FN563" },
    "564": { label: "Literal no Idioma 5", default: "FN564" },
    "565": { label: "Literal no Idioma 6", default: "FN565" },
    "566": { label: "Literal no Idioma 7", default: "FN566" },
    "567": { label: "Literal no Idioma 1", default: "FN567" },
    "568": { label: "Literal no Idioma 2", default: "FN568" },
    "569": { label: "Literal no Idioma 3", default: "FN569" },
    "570": { label: "Literal no Idioma 4", default: "FN570" },
    "571": { label: "Literal no Idioma 5", default: "FN571" },
    "572": { label: "Literal no Idioma 6", default: "FN572" },
    "573": { label: "Literal no Idioma 7", default: "FN573" },
    "574": { label: "Literal no Idioma 1", default: "FN574" },
    "575": { label: "Literal no Idioma 2", default: "FN575" },
    "576": { label: "Literal no Idioma 3", default: "FN576" },
    "577": { label: "Literal no Idioma 4", default: "FN577" },
    "578": { label: "Literal no Idioma 5", default: "FN578" },
    "579": { label: "Literal no Idioma 6", default: "FN579" },
    "580": { label: "Literal no Idioma 7", default: "FN580" },
    "581": { label: "Literal no Idioma 1", default: "FN581" },
    "582": { label: "Literal no Idioma 2", default: "FN582" },
    "583": { label: "Literal no Idioma 3", default: "FN583" },
    "584": { label: "Literal no Idioma 4", default: "FN584" },
    "585": { label: "Literal no Idioma 5", default: "FN585" },
    "586": { label: "Literal no Idioma 6", default: "FN586" },
    "587": { label: "Literal no Idioma 7", default: "FN587" },
    "588": { label: "Literal no Idioma 1", default: "FN588" },
    "589": { label: "Literal no Idioma 2", default: "FN589" },
    "590": { label: "Literal no Idioma 3", default: "FN590" },
    "591": { label: "Literal no Idioma 4", default: "FN591" },
    "592": { label: "Literal no Idioma 5", default: "FN592" },
    "593": { label: "Literal no Idioma 6", default: "FN593" },
    "594": { label: "Literal no Idioma 7", default: "FN594" },
    "595": { label: "Literal no Idioma 1", default: "FN595" },
    "596": { label: "Literal no Idioma 2", default: "FN596" },
    "597": { label: "Literal no Idioma 3", default: "FN597" },
    "598": { label: "Literal no Idioma 4", default: "FN598" },
    "599": { label: "Literal no Idioma 5", default: "FN599" },
    "600": { label: "Literal no Idioma 6", default: "FN600" },
    "601": { label: "Literal no Idioma 7", default: "FN601" },
    "602": { label: "Literal no Idioma 1", default: "FN602" },
    "603": { label: "Literal no Idioma 2", default: "FN603" },
    "604": { label: "Literal no Idioma 3", default: "FN604" },
    "605": { label: "Literal no Idioma 4", default: "FN605" },
    "606": { label: "Literal no Idioma 5", default: "FN606" },
    "607": { label: "Literal no Idioma 6", default: "FN607" },
    "608": { label: "Literal no Idioma 7", default: "FN608" },
    "609": { label: "Literal no Idioma 1", default: "FN609" },
    "610": { label: "Literal no Idioma 2", default: "FN610" },
    "611": { label: "Literal no Idioma 3", default: "FN611" },
    "612": { label: "Literal no Idioma 4", default: "FN612" },
    "613": { label: "Literal no Idioma 5", default: "FN613" },
    "614": { label: "Literal no Idioma 6", default: "FN614" },
    "615": { label: "Literal no Idioma 7", default: "FN615" },
    "616": { label: "Literal no Idioma 1", default: "FN616" },
    "617": { label: "Literal no Idioma 2", default: "FN617" },
    "618": { label: "Literal no Idioma 3", default: "FN618" },
    "619": { label: "Literal no Idioma 4", default: "FN619" },
    "620": { label: "Literal no Idioma 5", default: "FN620" },
    "621": { label: "Literal no Idioma 6", default: "FN621" },
    "622": { label: "Literal no Idioma 7", default: "FN622" },
    "623": { label: "Literal no Idioma 1", default: "FN623" },
    "624": { label: "Literal no Idioma 2", default: "FN624" },
    "625": { label: "Literal no Idioma 3", default: "FN625" },
    "626": { label: "Literal no Idioma 4", default: "FN626" },
    "627": { label: "Literal no Idioma 5", default: "FN627" },
    "628": { label: "Literal no Idioma 6", default: "FN628" },
    "629": { label: "Literal no Idioma 7", default: "FN629" },
    "630": { label: "Literal no Idioma 1", default: "FN630" },
    "631": { label: "Literal no Idioma 2", default: "FN631" },
    "632": { label: "Literal no Idioma 3", default: "FN632" },
    "633": { label: "Literal no Idioma 4", default: "FN633" },
    "634": { label: "Literal no Idioma 5", default: "FN634" },
    "635": { label: "Literal no Idioma 6", default: "FN635" },
    "636": { label: "Literal no Idioma 7", default: "FN636" },
    "637": { label: "Literal no Idioma 1", default: "FN637" },
    "638": { label: "Literal no Idioma 2", default: "FN638" },
    "639": { label: "Literal no Idioma 3", default: "FN639" },
    "640": { label: "Literal no Idioma 4", default: "FN640" },
    "641": { label: "Literal no Idioma 5", default: "FN641" },
    "642": { label: "Literal no Idioma 6", default: "FN642" },
    "643": { label: "Literal no Idioma 7", default: "FN643" },
    "644": { label: "Literal no Idioma 1", default: "FN644" },
    "645": { label: "Literal no Idioma 2", default: "FN645" },
    "646": { label: "Literal no Idioma 3", default: "FN646" },
    "647": { label: "Literal no Idioma 4", default: "FN647" },
    "648": { label: "Literal no Idioma 5", default: "FN648" },
    "649": { label: "Literal no Idioma 6", default: "FN649" },
    "650": { label: "Literal no Idioma 7", default: "FN650" },
    "651": { label: "Literal no Idioma 1", default: "FN651" },
    "652": { label: "Literal no Idioma 2", default: "FN652" },
    "653": { label: "Literal no Idioma 3", default: "FN653" },
    "654": { label: "Literal no Idioma 4", default: "FN654" },
    "655": { label: "Literal no Idioma 5", default: "FN655" },
    "656": { label: "Literal no Idioma 6", default: "FN656" },
    "657": { label: "Literal no Idioma 7", default: "FN657" },
    "659": { label: "Informação Nutricional do Produto", default: "FN659" },
    "660": { label: "Porção Nutricional do Produto", default: "FN660" },
    "661": { label: "Observação", default: "FN661" },
    "662": { label: "Data Embalagem + Dias Processo/Congelamento (Ordem Produção)", default: "FN662" },
    "663": { label: "Dia Data Produção", default: "FN663" },
    "664": { label: "MÃªs Data Produção", default: "FN664" },
    "665": { label: "Observação", default: "FN665" },
    "666": { label: "imprimir texto das \"INFORMAÇÕES NUTRICIONAIS\"", default: "FN666" },
    "667": { label: "Data da embalagem", default: "FN667" },
    "668": { label: "Data de Congelamento do Produto", default: "FN668" },
    "669": { label: "Data de Produção idioma 1", default: "FN669" },
    "670": { label: "Data de Produção idioma 2", default: "FN670" },
    "671": { label: "Data de Produção idioma 3", default: "FN671" },
    "672": { label: "Data de Produção idioma 4", default: "FN672" },
    "673": { label: "Data de Produção idioma 5", default: "FN673" },
    "674": { label: "Data de Produção idioma 6", default: "FN674" },
    "675": { label: "Data de Produção idioma 7", default: "FN675" },
    "676": { label: "Data de Validade idioma 1", default: "FN676" },
    "677": { label: "Data de Validade idioma 2", default: "FN677" },
    "678": { label: "Data de Validade idioma 3", default: "FN678" },
    "679": { label: "Data de Validade idioma 4", default: "FN679" },
    "680": { label: "Data de Validade idioma 5", default: "FN680" },
    "681": { label: "Data de Validade idioma 6", default: "FN681" },
    "682": { label: "Data de Validade idioma 7", default: "FN682" },
    "683": { label: "Data de Congelamento idioma 1", default: "FN683" },
    "684": { label: "Data de Congelamento idioma 2", default: "FN684" },
    "685": { label: "Data de Congelamento idioma 3", default: "FN685" },
    "686": { label: "Data de Congelamento idioma 4", default: "FN686" },
    "687": { label: "Data de Congelamento idioma 5", default: "FN687" },
    "688": { label: "Data de Congelamento idioma 6", default: "FN688" },
    "689": { label: "Data de Congelamento idioma 7", default: "FN689" },
    "690": { label: "Data de Abate idioma 1", default: "FN690" },
    "691": { label: "Data de Abate idioma 2", default: "FN691" },
    "692": { label: "Data de Abate idioma 3", default: "FN692" },
    "693": { label: "Data de Abate idioma 4", default: "FN693" },
    "694": { label: "Data de Abate idioma 5", default: "FN694" },
    "695": { label: "Data de Abate idioma 6", default: "FN695" },
    "696": { label: "Data de Abate idioma 7", default: "FN696" },
    "697": { label: "!+Código do Produto+Quant Peças+SIF+Data de Abate", default: "FN697" },
    "698": { label: "Código de Exportação para a China", default: "FN698" },
    "699": { label: "País de Destino (idioma 1)", default: "FN699" },
    "700": { label: "País de Destino (idioma 2)", default: "FN700" },
    "701": { label: "País de Destino (idioma 3)", default: "FN701" },
    "702": { label: "País de Destino (idioma 4)", default: "FN702" },
    "703": { label: "País de Destino (idioma 5)", default: "FN703" },
    "704": { label: "País de Destino (idioma 6)", default: "FN704" },
    "705": { label: "País de Destino (idioma 7)", default: "FN705" },
    "706": { label: "Porções por embalagem da informação nutricional", default: "FN706" },
    "707": { label: "Peso da porção da informação nutricional", default: "FN707" },
    "708": { label: "Característica 1", default: "FN708" },
    "709": { label: "Característica 2", default: "FN709" },
    "710": { label: "Característica 3", default: "FN710" },
    "711": { label: "Característica 4", default: "FN711" },
    "712": { label: "Característica 5", default: "FN712" },
    "713": { label: "Característica 6", default: "FN713" },
    "714": { label: "Característica 7", default: "FN714" },
    "715": { label: "Característica 8", default: "FN715" },
    "716": { label: "Característica 9", default: "FN716" },
    "717": { label: "Característica 10", default: "FN717" },
    "718": { label: "Característica 11", default: "FN718" },
    "719": { label: "Característica 12", default: "FN719" },
    "720": { label: "Característica 13", default: "FN720" },
    "721": { label: "Característica 14", default: "FN721" },
    "722": { label: "Característica 15", default: "FN722" },
    "723": { label: "Característica 16", default: "FN723" },
    "724": { label: "!+Código do Produto+Quant Peças+Lote Padrão+SIF+Data de Abate", default: "FN724" },
    "725": { label: "Data de Produção no formato DDMMAAAA", default: "FN725" },
    "726": { label: "QrCode do Código do Produto+Quant Peças", default: "FN726" },
    "727": { label: "Data de Produção no formato DDMMAA", default: "FN727" },
    "728": { label: "!+Código do Produto+Quant Peças+SIF+Data de Abate", default: "FN728" },
    "729": { label: "Prazo de validade para situação Resfriado Embal", default: "FN729" },
    "730": { label: "Prazo de validade para situação Resfriado Embal", default: "FN730" },
    "731": { label: "Temperatura 1 de conservação Resfriado (Alfanumérico)", default: "FN731" },
    "732": { label: "Temperatura 2 de conservação Resfriado (Alfanumérico)", default: "FN732" },
    "733": { label: "Prazo de validade para situação Congelado Embal", default: "FN733" },
    "734": { label: "Prazo de validade para situação Congelado Embal", default: "FN734" },
    "735": { label: "Temperatura 1 de conservação Congelado (Alfanumérico)", default: "FN735" },
    "736": { label: "Temperatura 2 de conservação Congelado (Alfanumérico)", default: "FN736" },
    "737": { label: "Prazo de validade para situação Freezer Embal", default: "FN737" },
    "738": { label: "Prazo de validade para situação Freezer Embal", default: "FN738" },
    "739": { label: "Temperatura 1 de conservação Freezer (Alfanumérico)", default: "FN739" },
    "740": { label: "Temperatura 2 de conservação Freezer (Alfanumérico)", default: "FN740" },
    "741": { label: "Temperatura (idioma 1)", default: "FN741" },
    "742": { label: "Temperatura (idioma 2)", default: "FN742" },
    "743": { label: "Temperatura (idioma 3)", default: "FN743" },
    "744": { label: "Temperatura (idioma 4)", default: "FN744" },
    "745": { label: "Temperatura (idioma 5)", default: "FN745" },
    "746": { label: "Temperatura (idioma 6)", default: "FN746" },
    "747": { label: "Temperatura (idioma 7)", default: "FN747" },
    "748": { label: "Código do Produto do Cliente", default: "FN748" },
    "749": { label: "QrCode - !+Código do Produto+Quant Peças+SIF+Data de Abate", default: "FN749" },
    "750": { label: "Data de Produção no formato AAAAMMDD", default: "FN750" },
    "751": { label: "Sigla", default: "FN751" },
    "752": { label: "URL de Consulta do QR Code EAN", default: "FN752" },
    "753": { label: "QrCode - !+Código do Produto", default: "FN753" },
    "754": { label: "QrCode - Sequencial", default: "FN754" },
    "755": { label: "Desc", default: "FN755" },
    "756": { label: "Peso Líquido com a descrição \"Kg\" no final", default: "FN756" },
    "757": { label: "QrCode - Cód Barra", default: "FN757" },
    "758": { label: "Shipping Mark relacionado ao item da ordem de produção", default: "FN758" },
    "759": { label: "Mensagem informada no Cadastro de Contrato", default: "FN759" },
    "9999": { label: "Imprime BASE TESTE quando variável APIS_BASE_TESTE = S", default: "FN9999" }
};

// Estado da Aplicação
let currentValues = {};

// Elementos DOM
const zplEditor = document.getElementById('zpl-editor');
const dynamicForm = document.getElementById('dynamic-form');
const btnReset = document.getElementById('btn-reset');
const searchInput = document.getElementById('search-input');
const btnSearchNext = document.getElementById('btn-search-next');

// Novos Elementos de Arquivo
const btnFileNew = document.getElementById('btn-file-new');
const btnFileOpen = document.getElementById('btn-file-open');
const btnFileSave = document.getElementById('btn-file-save');
const hiddenFileInput = document.getElementById('hidden-file-input');
const currentFileNameDisplay = document.getElementById('current-file-name');

const btnCopyZpl = document.getElementById('btn-copy-zpl');
const btnRender = document.getElementById('btn-render');
const previewImg = document.getElementById('preview-img');
const previewPlaceholder = document.getElementById('preview-placeholder');
const loadingSpinner = document.getElementById('loading-spinner');
const settingDpi = document.getElementById('setting-dpi');
const settingWidth = document.getElementById('setting-width');
const settingHeight = document.getElementById('setting-height');
const btnSaveJpg = document.getElementById('btn-save-jpg');
const btnToggleGrid = document.getElementById('btn-toggle-grid');
const gridCanvas = document.getElementById('grid-canvas');
const gridCoords = document.getElementById('grid-coords');

// Elementos de Layout Pré-Impresso
const previewBgImg = document.getElementById('preview-bg-img');
const previewWrapper = document.getElementById('preview-image-container');
const toggleBgActive = document.getElementById('toggle-bg-active');
const bgNameInput = document.getElementById('bg-name');
const bgWidthInput = document.getElementById('bg-width');
const bgHeightInput = document.getElementById('bg-height');
const bgFileInput = document.getElementById('bg-file');
const btnSaveLayout = document.getElementById('btn-save-layout');
const layoutsList = document.getElementById('layouts-list');
const dropzone = document.getElementById('dropzone');
const dropzoneText = document.getElementById('dropzone-text');

// ==========================================
// FILE EDITOR LOGIC
// ==========================================
let fileHandle = null;
let currentFileName = null;

function updateFileNameDisplay(name) {
    currentFileNameDisplay.textContent = name || 'Nenhum arquivo aberto';
    if (!name) {
        zplEditor.disabled = true;
        btnFileSave.disabled = true;
    } else {
        zplEditor.disabled = false;
        btnFileSave.disabled = false;
    }
}

btnFileNew.addEventListener('click', async () => {
    const fileName = prompt("Digite o nome do novo arquivo:", "novo_arquivo.zpl");
    if (fileName) {
        fileHandle = null;
        currentFileName = fileName;
        zplEditor.value = "";
        updateFileNameDisplay(currentFileName);
        parseZPLAndGenerateForm();
    }
});

btnFileOpen.addEventListener('click', async () => {
    // Tenta usar File System Access API se disponível (somente HTTPS/localhost)
    if (window.showOpenFilePicker) {
        try {
            const [handle] = await window.showOpenFilePicker({
                types: [{ description: 'ZPL Files', accept: { 'text/plain': ['.zpl', '.txt'] } }],
            });
            fileHandle = handle;
            const file = await fileHandle.getFile();
            currentFileName = file.name;
            const content = await file.text();
            zplEditor.value = content;
            updateFileNameDisplay(currentFileName);
            parseZPLAndGenerateForm();
        } catch (err) {
            console.log('Seleção cancelada ou erro:', err);
        }
    } else {
        // Fallback para HTTP comum
        hiddenFileInput.click();
    }
});

hiddenFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    currentFileName = file.name;
    fileHandle = null; // No handle in fallback
    const reader = new FileReader();
    reader.onload = (re) => {
        zplEditor.value = re.target.result;
        updateFileNameDisplay(currentFileName);
        parseZPLAndGenerateForm();
        // Reset input so the same file can be selected again
        hiddenFileInput.value = '';
    };
    reader.readAsText(file);
});

btnFileSave.addEventListener('click', async () => {
    const content = zplEditor.value;
    const saveName = currentFileName || 'novo_arquivo.zpl';
    
    // Tenta usar File System Access API
    if (window.showSaveFilePicker) {
        try {
            if (!fileHandle) {
                fileHandle = await window.showSaveFilePicker({
                    suggestedName: saveName,
                    types: [{ description: 'ZPL Files', accept: { 'text/plain': ['.zpl', '.txt'] } }],
                });
                const file = await fileHandle.getFile();
                currentFileName = file.name;
            }
            const writable = await fileHandle.createWritable();
            await writable.write(content);
            await writable.close();
            updateFileNameDisplay(currentFileName);
            alert('Arquivo salvo com sucesso!');
        } catch (err) {
            console.log('Salvamento cancelado ou erro:', err);
        }
    } else {
        // Fallback: faz o download
        // O Chrome tentará perguntar onde salvar e pode pré-preencher o nome do arquivo.
        const blob = new Blob([content], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = saveName;
        a.click();
        URL.revokeObjectURL(a.href);
    }
});

// ==========================================
// INIT
// ==========================================
function init() {
    // Inicializa sem arquivo aberto
    zplEditor.value = "";
    updateFileNameDisplay(null);
    parseZPLAndGenerateForm();
    renderLayoutsList();
    
    // Atualiza preview quando há erro de load (fallback seguro)
    previewImg.addEventListener('error', () => {
        previewImg.classList.add('hidden');
        previewPlaceholder.innerHTML = '<p style="color:var(--danger)">Erro ao carregar a imagem renderizada. Verifique sua conexão ou formato do ZPL.</p>';
        previewPlaceholder.style.display = 'flex';
    });
}

// Botão Reset agora carrega o template de exemplo em um "novo arquivo"
btnReset.addEventListener('click', () => {
    if (confirm("Isto substituirá o código atual pelo template padrão. Deseja continuar?")) {
        fileHandle = null;
        currentFileName = "template_etiqueta.zpl";
        zplEditor.value = DEFAULT_ZPL;
        updateFileNameDisplay(currentFileName);
        parseZPLAndGenerateForm();
    }
});

// Elementos de Zoom
const previewDisplay = document.querySelector('.preview-display');
const btnZoomIn = document.getElementById('btn-zoom-in');
const btnZoomOut = document.getElementById('btn-zoom-out');
const btnZoomReset = document.getElementById('btn-zoom-reset');
const btnToolPan = document.getElementById('btn-tool-pan');
const btnToolInspect = document.getElementById('btn-tool-inspect');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o sistema (Novo init gerencia o estado vazio/desabilitado)
    init();
    
    // Configura os botões de abas
    setupTabs();
    
    // Adiciona escuta a mudanças no editor
    zplEditor.addEventListener('input', parseZPLAndGenerateForm);
    
    // Busca no editor
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            findNextInEditor();
        }
    });
    // Reseta índice de busca quando digitar novo texto
    searchInput.addEventListener('input', () => {
        lastSearchIndex = 0;
    });
    btnSearchNext.addEventListener('click', findNextInEditor);
    
    btnCopyZpl.addEventListener('click', copyMergedZPL);
    btnRender.addEventListener('click', renderLabel);
    if (btnSaveJpg) btnSaveJpg.addEventListener('click', saveAsJpg);
    if (btnToggleGrid) btnToggleGrid.addEventListener('click', toggleGrid);
    
    // Inicializa suporte a layouts pré-impressos ANTES de renderizar
    // para que o estado de fundo seja aplicado já na primeira renderização
    initBackgroundLayouts();
    
    // Configura controles de Zoom e Pan
    initZoomAndPan();
    
    // Dispara a primeira renderização (já com o fundo restaurado)
    renderLabel();
});

// Lógica de Abas
function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const contentId = tab.getAttribute('data-tab');
            document.getElementById(contentId).classList.add('active');
        });
    });
}

// Analisa ZPL e Cria o Formulário Dinâmico
function parseZPLAndGenerateForm() {
    const zplCode = zplEditor.value;
    
    // Regex para achar ^FN seguido de números (ex: ^FN109, ^FN3)
    const regex = /\^FN(\d+)/g;
    let match;
    const detectedVars = new Set();
    
    while ((match = regex.exec(zplCode)) !== null) {
        detectedVars.add(match[1]);
    }
    
    // Se não houver variáveis
    if (detectedVars.size === 0) {
        dynamicForm.innerHTML = '<div class="no-vars-msg">Nenhuma variável ^FN detectada no código ZPL atual.</div>';
        return;
    }
    
    // Ordena as variáveis numericamente
    const sortedVars = Array.from(detectedVars).sort((a, b) => parseInt(a) - parseInt(b));
    
    // Preserva valores anteriores ou usa valores padrões do dicionário
    const updatedValues = {};
    sortedVars.forEach(vNum => {
        if (currentValues[vNum] !== undefined) {
            updatedValues[vNum] = currentValues[vNum];
        } else if (VARIABLE_METADATA[vNum] !== undefined) {
            updatedValues[vNum] = VARIABLE_METADATA[vNum].default;
        } else {
            updatedValues[vNum] = "";
        }
    });
    currentValues = updatedValues;
    
    // Gera HTML do formulário
    dynamicForm.innerHTML = '';
    sortedVars.forEach(vNum => {
        const metadata = VARIABLE_METADATA[vNum] || { label: `Variável ${vNum}`, default: "" };
        
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'form-field';
        
        const label = document.createElement('label');
        label.setAttribute('for', `var-${vNum}`);
        label.innerHTML = `${metadata.label} <span>(^FN${vNum})</span>`;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `var-${vNum}`;
        input.value = currentValues[vNum];
        input.placeholder = `Insira o valor para ^FN${vNum}`;
        
        // Atualiza valor em tempo real e re-mescla
        input.addEventListener('input', (e) => {
            currentValues[vNum] = e.target.value;
        });
        
        fieldDiv.appendChild(label);
        fieldDiv.appendChild(input);
        dynamicForm.appendChild(fieldDiv);
    });
}

// Busca de Texto no Editor ZPL
let lastSearchIndex = 0;

function findNextInEditor() {
    const searchTerm = searchInput.value;
    if (!searchTerm) return;
    
    const text = zplEditor.value;
    const lowerText = text.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();
    
    // Pega o índice a partir da última posição encontrada
    let index = lowerText.indexOf(lowerSearch, lastSearchIndex);
    
    if (index === -1) {
        // Se não encontrou a partir daquele ponto, reinicia do começo
        index = lowerText.indexOf(lowerSearch, 0);
    }
    
    if (index !== -1) {
        zplEditor.focus();
        zplEditor.setSelectionRange(index, index + searchTerm.length);
        lastSearchIndex = index + 1;
        
        // Simulação de scroll
        const lineHeight = parseInt(getComputedStyle(zplEditor).lineHeight) || 22.4;
        const textBefore = text.substring(0, index);
        const linesBefore = textBefore.split('\n').length;
        // Centraliza a linha encontrada na view
        zplEditor.scrollTop = (linesBefore - 1) * lineHeight - (zplEditor.clientHeight / 2);
    } else {
        alert("Texto não encontrado.");
        lastSearchIndex = 0;
    }
}

// Restaura Código Padrão
function resetZPL() {
    if (confirm("Deseja realmente restaurar o código ZPL padrão? Isso limpará suas alterações no código.")) {
        zplEditor.value = DEFAULT_ZPL;
        currentValues = {};
        parseZPLAndGenerateForm();
        renderLabel();
    }
}

// Mescla valores no código ZPL
function getMergedZPL() {
    let zpl = zplEditor.value;
    
    // Remove o comando de armazenar formato (^DF...^FS), pois o simulador precisa renderizar a etiqueta imediatamente
    zpl = zpl.replace(/\^DF[a-zA-Z0-9_\-\s:]+(\^FS)?/gi, '');
    
    // Garante que o ZPL termine com ^XZ se não estiver presente
    if (!zpl.trim().endsWith('^XZ')) {
        zpl = zpl.trim() + '\n^XZ';
    }
    
    // Para cada variável, substitui ^FNX^FS por ^FNX^FD[VALOR]^FS
    // Se não houver ^FS imediato, mas o padrão for ^FNX, também cuidamos
    for (const [key, val] of Object.entries(currentValues)) {
        // Encontra ^FN[key]
        const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const pattern = new RegExp(`\\^FN${escapedKey}(\\^FS)?`, 'g');
        
        zpl = zpl.replace(pattern, `^FN${key}^FD${val}^FS`);
    }
    
    return zpl;
}

// Copia o ZPL mesclado para a área de transferência
function copyMergedZPL() {
    const mergedZpl = getMergedZPL();
    navigator.clipboard.writeText(mergedZpl)
        .then(() => {
            alert("Código ZPL mesclado com as variáveis copiado com sucesso!");
        })
        .catch(err => {
            console.error("Erro ao copiar ZPL: ", err);
            alert("Não foi possível copiar o código. Por favor, selecione e copie manualmente.");
        });
}

// Envia para o Labelary para renderizar a etiqueta
function renderLabel() {
    if (!zplEditor.value.trim()) {
        previewImg.classList.add('hidden');
        previewPlaceholder.innerHTML = '<p style="color:var(--text-secondary);">Nenhum código ZPL para renderizar. Abra ou crie um arquivo.</p>';
        previewPlaceholder.classList.remove('hidden');
        previewPlaceholder.style.display = 'flex';
        loadingSpinner.classList.add('hidden');
        return;
    }

    const dpi = settingDpi.value;
    // Garante que decimais usem ponto em vez de vírgula na API
    const widthCm = parseFloat(settingWidth.value.toString().replace(',', '.')) || 10.2;
    const heightCm = parseFloat(settingHeight.value.toString().replace(',', '.')) || 15.2;
    // Labelary usa polegadas: converte de centímetros
    const width = (widthCm / 2.54).toFixed(4);
    const height = (heightCm / 2.54).toFixed(4);
    const zpl = getMergedZPL();
    
    // Exibe loading spinner
    loadingSpinner.classList.remove('hidden');
    previewPlaceholder.classList.add('hidden');
    previewImg.classList.add('hidden');
    
    // Endpoint Labelary
    const url = `https://api.labelary.com/v1/printers/${dpi}/labels/${width}x${height}/0`;
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'image/png',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: zpl
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na API do Labelary: ${response.status} ${response.statusText}`);
        }
        return response.blob();
    })
    .then(blob => {
        const imgUrl = URL.createObjectURL(blob);
        previewImg.src = imgUrl;
        previewImg.classList.remove('hidden');
        // Habilita botões de salvar JPG e grid
        if (btnSaveJpg) {
            btnSaveJpg.disabled = false;
            btnSaveJpg.title = 'Baixar etiqueta simulada como JPG';
        }
        if (btnToggleGrid) {
            btnToggleGrid.disabled = false;
            btnToggleGrid.title = 'Exibir/ocultar grade de coordenadas ZPL';
        }
        // Redesenha grid se estiver ativo
        if (gridVisible) {
            previewImg.onload = () => drawGrid();
            if (previewImg.complete) drawGrid();
        }
        if (typeof updateBgDisplay === 'function') {
            updateBgDisplay();
        }
    })
    .catch(error => {
        console.error(error);
        previewPlaceholder.innerHTML = `
            <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#ef4444" stroke-width="1.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p style="color:#f87171;">Erro ao renderizar a etiqueta.</p>
            <span style="font-size:12px; color:var(--text-muted); max-width: 300px;">
                Verifique a conexão de rede ou se o código ZPL é válido. ${error.message}
            </span>
        `;
        previewPlaceholder.classList.remove('hidden');
    })
    .finally(() => {
        loadingSpinner.classList.add('hidden');
    });
}

// ==========================================
// GRID DE COORDENADAS ZPL
// ==========================================

let gridVisible = false;

// Alterna visibilidade do grid
function toggleGrid() {
    gridVisible = !gridVisible;
    if (btnToggleGrid) {
        btnToggleGrid.classList.toggle('active', gridVisible);
        btnToggleGrid.title = gridVisible
            ? 'Ocultar grade de coordenadas ZPL'
            : 'Exibir grade de coordenadas ZPL';
    }
    if (gridVisible) {
        drawGrid();
    } else {
        if (gridCanvas) gridCanvas.classList.add('hidden');
        if (gridCoords) gridCoords.classList.add('hidden');
    }
}

// Desenha o grid de coordenadas ZPL sobre a imagem
function drawGrid() {
    if (!gridCanvas || !previewImg || previewImg.classList.contains('hidden')) return;

    const natW = previewImg.naturalWidth;
    const natH = previewImg.naturalHeight;
    if (!natW || !natH) return;

    // Posiciona e dimensiona o canvas exatamente sobre a imagem renderizada
    // Usa offset em vez de getBoundingClientRect para não ser afetado pelo zoom (transform)
    gridCanvas.style.left   = previewImg.offsetLeft + 'px';
    gridCanvas.style.top    = previewImg.offsetTop  + 'px';
    gridCanvas.style.width  = previewImg.offsetWidth  + 'px';
    gridCanvas.style.height = previewImg.offsetHeight + 'px';
    gridCanvas.width  = natW;
    gridCanvas.height = natH;
    gridCanvas.classList.remove('hidden');

    const ctx = gridCanvas.getContext('2d');
    ctx.clearRect(0, 0, natW, natH);

    const MINOR = 10;   // grid fino: a cada 10 dots
    const MAJOR = 100;  // grid grosso: a cada 100 dots

    // ── Linhas finas (10 em 10) ──
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.18)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= natW; x += MINOR) {
        ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, natH); ctx.stroke();
    }
    for (let y = 0; y <= natH; y += MINOR) {
        ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(natW, y + 0.5); ctx.stroke();
    }

    // ── Linhas grossas (100 em 100) com labels ──
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.65)';
    ctx.lineWidth = 1;
    ctx.font = 'bold 11px JetBrains Mono, monospace';
    ctx.textBaseline = 'top';

    for (let x = 0; x <= natW; x += MAJOR) {
        ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, natH); ctx.stroke();
        // Label com fundo
        const label = String(x);
        const tw = ctx.measureText(label).width;
        ctx.fillStyle = 'rgba(10, 14, 26, 0.75)';
        ctx.fillRect(x + 2, 2, tw + 4, 15);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.95)';
        ctx.fillText(label, x + 4, 3);
    }

    ctx.textAlign = 'left';
    for (let y = MAJOR; y <= natH; y += MAJOR) {
        ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(natW, y + 0.5); ctx.stroke();
        const label = String(y);
        const tw = ctx.measureText(label).width;
        ctx.fillStyle = 'rgba(10, 14, 26, 0.75)';
        ctx.fillRect(2, y + 2, tw + 4, 15);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.95)';
        ctx.fillText(label, 4, y + 3);
    }
}

// A função setupGridHover foi removida pois o hover de coordenadas
// agora é gerenciado globalmente pela ferramenta "Inspecionar"


// Replica exatamente o visual da tela (mix-blend-mode: multiply)
async function buildLabelCanvas() {
    const zplImgSrc = previewImg && !previewImg.classList.contains('hidden') ? previewImg.src : null;
    if (!zplImgSrc) return null;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Carrega a imagem ZPL via fetch para evitar canvas tainted
    const zplResponse = await fetch(zplImgSrc);
    const zplBlob = await zplResponse.blob();
    const zplObjectUrl = URL.createObjectURL(zplBlob);

    const zplImg = new Image();
    await new Promise((resolve, reject) => {
        zplImg.onload = resolve;
        zplImg.onerror = reject;
        zplImg.src = zplObjectUrl;
    });

    canvas.width  = zplImg.naturalWidth;
    canvas.height = zplImg.naturalHeight;

    // Verifica se há layout pré-impresso ativo
    const bgActive = toggleBgActive && toggleBgActive.checked;
    const activeLayout = savedLayouts.find(l => l.id === activeLayoutId);
    const hasBg = bgActive && activeLayout && activeLayout.dataUrl;

    if (hasBg) {
        // ── COM FUNDO: replica o mix-blend-mode: multiply do CSS ──
        // 1. Carrega a imagem de fundo
        const bgImg = new Image();
        await new Promise((resolve, reject) => {
            bgImg.onload = resolve;
            bgImg.onerror = reject;
            bgImg.src = activeLayout.dataUrl;
        });

        // 2. Desenha o fundo preenchendo todo o canvas
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

        // 3. Aplica multiply: pixels brancos da ZPL se tornam transparentes,
        //    revelando o fundo por baixo — idêntico ao CSS mix-blend-mode: multiply
        ctx.globalCompositeOperation = 'multiply';
        ctx.drawImage(zplImg, 0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over'; // restaura o modo padrão

    } else {
        // ── SEM FUNDO: fundo branco + ZPL normal ──
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(zplImg, 0, 0);
    }

    URL.revokeObjectURL(zplObjectUrl);

    // Converte para blob JPEG com qualidade 95%
    return new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.95));
}


// Salva a etiqueta renderizada como JPG
async function saveAsJpg() {
    if (!previewImg || previewImg.classList.contains('hidden')) {
        alert('Nenhuma etiqueta renderizada. Clique em "Simular Impressão" primeiro.');
        return;
    }

    // Muda o botão para estado de progresso
    if (btnSaveJpg) { btnSaveJpg.disabled = true; btnSaveJpg.textContent = 'Gerando...'; }

    try {
        const jpgBlob = await buildLabelCanvas();
        if (!jpgBlob) throw new Error('Canvas vazio');

        const timestamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
        const filename  = `etiqueta_${timestamp}.jpg`;

        // ── Método 1: File System Access API (abre diálogo "Salvar Como") ──
        if ('showSaveFilePicker' in window) {
            const fileHandle = await window.showSaveFilePicker({
                suggestedName: filename,
                types: [{ description: 'Imagem JPEG', accept: { 'image/jpeg': ['.jpg', '.jpeg'] } }]
            });
            const writable = await fileHandle.createWritable();
            await writable.write(jpgBlob);
            await writable.close();

        // ── Método 2: object URL + anchor click (fallback) ──
        } else {
            const objUrl = URL.createObjectURL(jpgBlob);
            const a = document.createElement('a');
            a.href     = objUrl;
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(objUrl); }, 500);
        }

    } catch (err) {
        // Usuário cancelou o diálogo — não exibe erro
        if (err.name !== 'AbortError') {
            console.error('Erro ao salvar JPG:', err);
            alert('Não foi possível salvar o arquivo. Verifique o console para detalhes.');
        }
    } finally {
        // Restaura o botão
        if (btnSaveJpg) {
            btnSaveJpg.disabled = false;
            btnSaveJpg.innerHTML = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px;vertical-align:middle"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke-linecap="round" stroke-linejoin="round"/><polyline points="7 10 12 15 17 10" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="15" x2="12" y2="3" stroke-linecap="round"/></svg> Salvar JPG`;
        }
    }
}



// ==========================================
// SUPORTE A LAYOUTS PRÉ-IMPRESSOS
// ==========================================

let savedLayouts = [];
let activeLayoutId = null;
let uploadedImageBase64 = null;

// Inicializa a funcionalidade de layouts pré-impressos
function initBackgroundLayouts() {
    // Carrega layouts do localStorage
    const rawLayouts = localStorage.getItem('zpl_bg_layouts');
    if (rawLayouts) {
        try {
            savedLayouts = JSON.parse(rawLayouts);
        } catch (e) {
            console.error("Erro ao ler layouts do localStorage:", e);
            savedLayouts = [];
        }
    }
    
    // Restaura o layout ativo e estado do toggle
    const savedActiveId = localStorage.getItem('zpl_active_layout_id');
    const savedToggle = localStorage.getItem('zpl_bg_active') === 'true';
    
    if (savedActiveId && savedLayouts.find(l => l.id === savedActiveId)) {
        activeLayoutId = savedActiveId;
        // Sincroniza dimensões
        const layout = savedLayouts.find(l => l.id === activeLayoutId);
        if (layout) {
            if (settingWidth) settingWidth.value = layout.width;
            if (settingHeight) settingHeight.value = layout.height;
        }
    } else if (savedLayouts.length > 0) {
        // Fallback: seleciona o primeiro da lista
        activeLayoutId = savedLayouts[0].id;
    }
    
    if (toggleBgActive) {
        toggleBgActive.checked = savedToggle && activeLayoutId !== null;
    }
    
    // Configura o input do arquivo e área de dropzone
    if (dropzone && bgFileInput) {
        dropzone.addEventListener('click', () => {
            bgFileInput.click();
        });
        
        bgFileInput.addEventListener('change', handleFileSelect);
        
        // Drag and Drop
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });
        
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
        });
        
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                processFile(e.dataTransfer.files[0]);
            }
        });
    }
    
    // Ação de salvar layout
    if (btnSaveLayout) {
        btnSaveLayout.addEventListener('click', saveNewLayout);
    }
    
    // Toggle de ativação do fundo
    if (toggleBgActive) {
        toggleBgActive.addEventListener('change', () => {
            // Se habilitar e nenhum layout estiver ativo, seleciona o primeiro disponível
            if (toggleBgActive.checked && !activeLayoutId && savedLayouts.length > 0) {
                activeLayoutId = savedLayouts[0].id;
                const layout = savedLayouts.find(l => l.id === activeLayoutId);
                if (layout) {
                    if (settingWidth) settingWidth.value = layout.width;
                    if (settingHeight) settingHeight.value = layout.height;
                }
                renderLayoutsList();
            }
            localStorage.setItem('zpl_bg_active', toggleBgActive.checked);
            updateBgDisplay();
        });
    }
    
    // Renderiza a lista inicial
    renderLayoutsList();
    
    // Aplica o estado restaurado
    updateBgDisplay();
}

// Processa o arquivo selecionado ou arrastado
function handleFileSelect(e) {
    if (e.target.files.length > 0) {
        processFile(e.target.files[0]);
    }
}

function processFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedImageBase64 = e.target.result;
        if (dropzoneText) {
            dropzoneText.textContent = `Imagem carregada: ${file.name}`;
            dropzoneText.style.color = 'var(--success)';
        }
    };
    reader.readAsDataURL(file);
}

// Salva o novo layout
function saveNewLayout() {
    const name = bgNameInput.value.trim();
    const width = parseFloat(bgWidthInput.value);
    const height = parseFloat(bgHeightInput.value);
    
    if (!name) {
        alert('Por favor, informe o nome do layout.');
        return;
    }
    if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
        alert('Por favor, informe dimensões válidas de largura e altura.');
        return;
    }
    if (!uploadedImageBase64) {
        alert('Por favor, selecione ou arraste uma imagem do layout.');
        return;
    }
    
    // Cria objeto do layout
    const newLayout = {
        id: Date.now().toString(),
        name: name,
        width: width,
        height: height,
        dataUrl: uploadedImageBase64
    };
    
    savedLayouts.push(newLayout);
    localStorage.setItem('zpl_bg_layouts', JSON.stringify(savedLayouts));
    
    // Reseta form
    bgNameInput.value = '';
    uploadedImageBase64 = null;
    if (dropzoneText) {
        dropzoneText.textContent = 'Clique para selecionar imagem';
        dropzoneText.style.color = '';
    }
    bgFileInput.value = '';
    
    // Re-renderiza e seleciona o recém cadastrado
    renderLayoutsList();
    selectLayout(newLayout.id);
}

// Renderiza a lista de layouts salvos
function renderLayoutsList() {
    if (!layoutsList) return;
    
    layoutsList.innerHTML = '';
    
    if (savedLayouts.length === 0) {
        layoutsList.innerHTML = '<div class="no-layouts-msg">Nenhum layout cadastrado ainda.</div>';
        return;
    }
    
    savedLayouts.forEach(layout => {
        const card = document.createElement('div');
        card.className = `layout-card ${layout.id === activeLayoutId ? 'active' : ''}`;
        
        // Thumbnail da imagem
        const img = document.createElement('img');
        img.className = 'layout-thumb';
        img.src = layout.dataUrl;
        img.alt = layout.name;
        
        // Informações
        const info = document.createElement('div');
        info.className = 'layout-card-info';
        
        const title = document.createElement('span');
        title.className = 'layout-card-title';
        title.textContent = layout.name;
        
        const dims = document.createElement('span');
        dims.className = 'layout-card-dims';
        dims.textContent = `${layout.width} cm x ${layout.height} cm`;
        
        info.appendChild(title);
        info.appendChild(dims);
        
        // Ações (Excluir)
        const actions = document.createElement('div');
        actions.className = 'layout-card-actions';
        
        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn-delete-layout';
        btnDelete.textContent = 'Excluir';
        btnDelete.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteLayout(layout.id);
        });
        
        actions.appendChild(btnDelete);
        
        card.appendChild(img);
        card.appendChild(info);
        card.appendChild(actions);
        
        // Click do card para selecionar
        card.addEventListener('click', () => {
            selectLayout(layout.id);
        });
        
        layoutsList.appendChild(card);
    });
}

// Seleciona um layout para impressão
function selectLayout(id) {
    activeLayoutId = id;
    const layout = savedLayouts.find(l => l.id === id);
    
    if (layout) {
        // Sincroniza dimensões na tela de configurações da impressora
        if (settingWidth) settingWidth.value = layout.width;
        if (settingHeight) settingHeight.value = layout.height;
        
        // Ativa o switch de visualização
        if (toggleBgActive) {
            toggleBgActive.checked = true;
        }
        
        // Persiste no localStorage
        localStorage.setItem('zpl_active_layout_id', id);
        localStorage.setItem('zpl_bg_active', 'true');
        
        updateBgDisplay();
        renderLayoutsList();
        
        // Renderiza novamente a etiqueta com as novas configurações e sobreposição
        renderLabel();
    }
}

// Modal de confirmação customizado (substitui o confirm() nativo)
function confirmModal(message) {
    return new Promise((resolve) => {
        const overlay = document.getElementById('confirm-modal');
        const msgEl = document.getElementById('confirm-modal-msg');
        const btnOk = document.getElementById('confirm-modal-ok');
        const btnCancel = document.getElementById('confirm-modal-cancel');
        
        if (!overlay) {
            // Fallback se o modal não existir no HTML
            resolve(confirm(message));
            return;
        }
        
        msgEl.textContent = message;
        overlay.classList.remove('hidden');
        
        function cleanup() {
            overlay.classList.add('hidden');
            btnOk.removeEventListener('click', onOk);
            btnCancel.removeEventListener('click', onCancel);
            overlay.removeEventListener('click', onOverlayClick);
        }
        
        function onOk() { cleanup(); resolve(true); }
        function onCancel() { cleanup(); resolve(false); }
        function onOverlayClick(e) {
            if (e.target === overlay) { cleanup(); resolve(false); }
        }
        
        btnOk.addEventListener('click', onOk);
        btnCancel.addEventListener('click', onCancel);
        overlay.addEventListener('click', onOverlayClick);
    });
}

// Exclui um layout
async function deleteLayout(id) {
    const confirmed = await confirmModal('Deseja realmente excluir este layout?');
    if (confirmed) {
        savedLayouts = savedLayouts.filter(l => l.id !== id);
        localStorage.setItem('zpl_bg_layouts', JSON.stringify(savedLayouts));
        
        if (activeLayoutId === id) {
            activeLayoutId = null;
            localStorage.removeItem('zpl_active_layout_id');
            localStorage.setItem('zpl_bg_active', 'false');
            if (toggleBgActive) {
                toggleBgActive.checked = false;
            }
            updateBgDisplay();
        }
        
        renderLayoutsList();
    }
}

// Atualiza o display de sobreposição da imagem de fundo
function updateBgDisplay() {
    const bgActive = toggleBgActive && toggleBgActive.checked;
    const activeLayout = savedLayouts.find(l => l.id === activeLayoutId);
    
    if (bgActive && activeLayout) {
        if (previewBgImg) {
            previewBgImg.src = activeLayout.dataUrl;
            previewBgImg.classList.remove('hidden');
        }
        if (previewWrapper) {
            previewWrapper.classList.add('has-bg');
        }
    } else {
        if (previewBgImg) {
            previewBgImg.src = '';
            previewBgImg.classList.add('hidden');
        }
        if (previewWrapper) {
            previewWrapper.classList.remove('has-bg');
        }
    }
}

// ==========================================
// CONTROLES DE ZOOM E PAN
// ==========================================

let currentZoom = 1;
const ZOOM_STEP = 0.25;
const MIN_ZOOM = 0.25;
const MAX_ZOOM = 5;
let panX = 0;
let panY = 0;
let isPanning = false;
let startPanX = 0;
let startPanY = 0;
let currentTool = 'pan'; // 'pan' ou 'inspect'

function initZoomAndPan() {
    if (btnToolPan) btnToolPan.addEventListener('click', () => setTool('pan'));
    if (btnToolInspect) btnToolInspect.addEventListener('click', () => setTool('inspect'));

    if (btnZoomIn) btnZoomIn.addEventListener('click', handleZoomIn);
    if (btnZoomOut) btnZoomOut.addEventListener('click', handleZoomOut);
    if (btnZoomReset) btnZoomReset.addEventListener('click', handleZoomReset);
    
    if (previewDisplay) {
        previewDisplay.addEventListener('wheel', handleWheelZoom, { passive: false });
        previewDisplay.addEventListener('mousedown', handlePanStart);
    }
    
    window.addEventListener('mousemove', handlePanMove);
    window.addEventListener('mouseup', handlePanEnd);

    // Eventos globais para Inspecionar (Mostrar Coordenadas)
    if (previewImg) {
        previewImg.addEventListener('mousemove', handleInspectHover);
        previewImg.addEventListener('mouseleave', () => {
            if (gridCoords) gridCoords.classList.add('hidden');
        });
    }
}

function setTool(tool) {
    currentTool = tool;
    if (btnToolPan) btnToolPan.classList.toggle('active', tool === 'pan');
    if (btnToolInspect) btnToolInspect.classList.toggle('active', tool === 'inspect');
    
    if (previewWrapper) {
        previewWrapper.style.cursor = tool === 'pan' ? 'grab' : 'crosshair';
    }
}

function updateZoomPan() {
    if (previewWrapper) {
        previewWrapper.style.transform = `translate(${panX}px, ${panY}px) scale(${currentZoom})`;
    }
    if (btnZoomReset) {
        btnZoomReset.textContent = `${Math.round(currentZoom * 100)}%`;
    }
}

function setZoom(newZoom, mouseX = null, mouseY = null) {
    const oldZoom = currentZoom;
    currentZoom = Math.max(MIN_ZOOM, Math.min(newZoom, MAX_ZOOM));
    
    if (oldZoom === currentZoom) return;

    if (mouseX !== null && mouseY !== null && previewDisplay) {
        const displayRect = previewDisplay.getBoundingClientRect();
        // Calculate mouse position relative to the center of the display
        const dx = mouseX - (displayRect.left + displayRect.width / 2);
        const dy = mouseY - (displayRect.top + displayRect.height / 2);
        
        // Calculate how much the point under mouse will move due to scale
        const ratio = currentZoom / oldZoom;
        
        // Adjust pan to counteract this movement
        panX = panX - (dx - panX) * (ratio - 1);
        panY = panY - (dy - panY) * (ratio - 1);
    }
    
    updateZoomPan();
}

function handleZoomIn() { setZoom(currentZoom + ZOOM_STEP); }
function handleZoomOut() { setZoom(currentZoom - ZOOM_STEP); }

function handleZoomReset() {
    currentZoom = 1;
    panX = 0;
    panY = 0;
    if (previewWrapper) {
        previewWrapper.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    updateZoomPan();
    setTimeout(() => {
        if (previewWrapper) previewWrapper.style.transition = 'transform 0.1s ease-out';
    }, 250);
}

function handleWheelZoom(e) {
    e.preventDefault();
    // Wheel delta determines direction. A typical scroll is 100-120.
    const zoomDelta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    // Smoother zoom via wheel
    setZoom(currentZoom + zoomDelta, e.clientX, e.clientY);
}

function handlePanStart(e) {
    if (e.button !== 0) return; // Only left click
    // Don't pan if clicking on buttons or their children
    if (e.target.closest('.zoom-toolbar')) return;
    
    // Se a ferramenta for 'inspect', não inicia o pan
    if (currentTool === 'inspect') return;
    
    isPanning = true;
    startPanX = e.clientX - panX;
    startPanY = e.clientY - panY;
    
    if (previewWrapper) {
        previewWrapper.style.cursor = 'grabbing';
        previewWrapper.style.transition = 'none'; // disable transition for smooth drag
    }
}

function handlePanMove(e) {
    if (!isPanning) return;
    panX = e.clientX - startPanX;
    panY = e.clientY - startPanY;
    updateZoomPan();
}

function handlePanEnd() {
    if (isPanning) {
        isPanning = false;
        if (previewWrapper) {
            previewWrapper.style.cursor = currentTool === 'pan' ? 'grab' : 'crosshair';
            previewWrapper.style.transition = 'transform 0.1s ease-out';
        }
    }
}

function handleInspectHover(e) {
    // Só mostra as coordenadas se a ferramenta Inspecionar estiver ativa ou se a grade estiver ligada
    if (currentTool !== 'inspect' && !gridVisible) {
        if (gridCoords) gridCoords.classList.add('hidden');
        return;
    }

    const rect = previewImg.getBoundingClientRect();
    const scaleX = previewImg.naturalWidth  / rect.width;
    const scaleY = previewImg.naturalHeight / rect.height;
    const zplX = Math.round((e.clientX - rect.left) * scaleX);
    const zplY = Math.round((e.clientY - rect.top)  * scaleY);

    if (gridCoords) {
        gridCoords.textContent = `^FO${zplX},${zplY}`;
        gridCoords.style.left = e.clientX + 'px';
        gridCoords.style.top  = e.clientY + 'px';
        gridCoords.classList.remove('hidden');
    }
}
