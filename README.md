[reporte_rechazo.html](https://github.com/user-attachments/files/26125228/reporte_rechazo.html)# rechazos-app[reporte_rechazo.html](https://github.com/user-attachments/files/26125047/reporte_rechazo.6.html)
<!DOCTYPE html>[Uploading report<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Gestión de Rechazos</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5; min-height: 100vh; }
.app { max-width: 440px; margin: 0 auto; padding: 1rem 1rem 3rem; }
.screen { display: none; }
.screen.active { display: block; }
.header { text-align: center; padding: 1.5rem 0 1rem; }
.header-icon { width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; }
.header-icon.green { background: #1D9E75; }
.header-icon svg { width: 26px; height: 26px; fill: white; }
.header h1 { font-size: 20px; font-weight: 600; color: #111; }
.header p  { font-size: 13px; color: #888; margin-top: 4px; }
.progress { display: flex; justify-content: center; gap: 5px; margin-bottom: 1.2rem; }
.progress-step { width: 36px; height: 4px; border-radius: 2px; background: #ddd; transition: background 0.2s; }
.progress-step.done   { background: #1D9E75; }
.progress-step.active { background: #5DCAA5; }
.progress-step.done-b   { background: #2563EB; }
.progress-step.active-b { background: #60A5FA; }
.card { background: white; border: 1px solid #eee; border-radius: 14px; padding: 1.25rem; margin-bottom: 12px; }
.label { font-size: 11px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; display: block; }
select, input[type="text"], textarea {
  width: 100%; padding: 11px 13px; border: 1px solid #e0e0e0; border-radius: 10px;
  font-size: 15px; background: #fafafa; color: #111; font-family: inherit; outline: none; transition: border-color 0.15s;
}
select:focus, input:focus, textarea:focus { border-color: #1D9E75; background: white; }
textarea { resize: vertical; min-height: 70px; }
.btn-green { width:100%; padding:14px; background:#1D9E75; color:white; border:none; border-radius:10px; font-size:15px; font-weight:600; cursor:pointer; margin-top:8px; transition:background 0.15s; }
.btn-green:hover { background:#0F6E56; }
.btn-green:disabled { background:#ccc; color:#999; cursor:not-allowed; }
.btn-blue { width:100%; padding:14px; background:#2563EB; color:white; border:none; border-radius:10px; font-size:15px; font-weight:600; cursor:pointer; margin-top:8px; }
.btn-blue:hover { background:#1D4ED8; }
.btn-blue:disabled { background:#ccc; color:#999; cursor:not-allowed; }
.btn-secondary { width:100%; padding:12px; background:transparent; color:#666; border:1px solid #ddd; border-radius:10px; font-size:14px; cursor:pointer; margin-top:8px; }
.btn-secondary:hover { background:#f5f5f5; }
.home-btn { display:flex; align-items:center; gap:16px; background:white; border:1px solid #eee; border-radius:16px; padding:1.25rem; margin-bottom:12px; cursor:pointer; transition:all 0.15s; text-align:left; width:100%; }
.home-btn:hover { transform:translateY(-1px); box-shadow:0 4px 12px rgba(0,0,0,0.08); }
.home-btn-icon { width:48px; height:48px; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.home-btn-icon.g { background:#E1F5EE; }
.home-btn-icon.b { background:#EFF6FF; }
.home-btn h2 { font-size:16px; font-weight:600; color:#111; margin-bottom:3px; }
.home-btn p  { font-size:12px; color:#888; line-height:1.4; }
.foto-area { border:2px dashed #ddd; border-radius:10px; padding:1.5rem 1rem; text-align:center; cursor:pointer; transition:border-color 0.15s; }
.foto-area:hover { border-color:#1D9E75; }
.foto-area p { font-size:13px; color:#999; margin-top:6px; }
.foto-preview { width:100%; border-radius:10px; max-height:200px; object-fit:cover; display:none; margin-top:10px; }
.upload-status { display:none; align-items:center; gap:8px; margin-top:10px; padding:9px 12px; border-radius:8px; font-size:13px; }
.upload-status.uploading { display:flex; background:#FFF8E1; color:#795548; }
.upload-status.success   { display:flex; background:#E1F5EE; color:#085041; }
.upload-status.error     { display:flex; background:#FFEBEE; color:#b71c1c; }
.spinner { width:16px; height:16px; border:2px solid #ddd; border-top-color:#1D9E75; border-radius:50%; animation:spin 0.7s linear infinite; flex-shrink:0; }
@keyframes spin { to { transform:rotate(360deg); } }
.vendedor-search { position:relative; margin-bottom:8px; }
.vendedor-search input { padding-left:36px; }
.search-icon { position:absolute; left:11px; top:50%; transform:translateY(-50%); pointer-events:none; }
.vendedor-list { max-height:260px; overflow-y:auto; border:1px solid #eee; border-radius:10px; }
.vendedor-item { padding:10px 13px; cursor:pointer; border-bottom:1px solid #f0f0f0; display:flex; align-items:center; gap:10px; transition:background 0.1s; }
.vendedor-item:last-child { border-bottom:none; }
.vendedor-item:hover { background:#f5f5f5; }
.vendedor-item.selected { background:#E1F5EE; }
.v-code { width:34px; height:34px; border-radius:50%; background:#1D9E75; color:white; font-size:11px; font-weight:600; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.v-name { font-size:13px; color:#111; font-weight:500; }
.v-sub  { font-size:11px; color:#999; }
.motivos-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.motivo-btn { padding:11px 8px; border:1px solid #e0e0e0; border-radius:10px; background:#fafafa; color:#333; font-size:12px; cursor:pointer; text-align:center; line-height:1.3; transition:all 0.15s; }
.motivo-btn.selected   { background:#E1F5EE; border-color:#1D9E75; color:#085041; font-weight:600; }
.motivo-btn.selected-b { background:#EFF6FF; border-color:#2563EB; color:#1D4ED8; font-weight:600; }
.motivo-btn:hover:not(.selected):not(.selected-b) { border-color:#aaa; background:white; }
.resumen-box { background:#f9f9f9; border-radius:10px; padding:1rem; margin-bottom:12px; }
.resumen-row { display:flex; justify-content:space-between; align-items:flex-start; padding:5px 0; font-size:13px; border-bottom:1px solid #eee; gap:8px; }
.resumen-row:last-child { border-bottom:none; }
.resumen-row span:first-child { color:#999; flex-shrink:0; }
.resumen-row span:last-child  { color:#111; font-weight:500; text-align:right; word-break:break-all; }
.foto-thumb { width:100%; border-radius:10px; max-height:140px; object-fit:cover; margin-bottom:10px; display:none; }
.wsp-btn { display:flex; align-items:center; justify-content:center; gap:10px; width:100%; padding:13px; background:#25D366; color:white; border:none; border-radius:10px; font-size:15px; font-weight:600; cursor:pointer; margin-top:8px; text-decoration:none; transition:opacity 0.15s; }
.wsp-btn:hover { opacity:0.9; }
.sheets-badge { display:flex; align-items:center; justify-content:center; gap:6px; font-size:12px; margin-top:10px; color:#888; }
.sheets-badge.ok  { color:#1D9E75; }
.sheets-badge.err { color:#e24b4a; }
.success-icon { width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 12px; }
.success-icon.g { background:#E1F5EE; }
.success-icon.b { background:#EFF6FF; }
</style>
</head>
<body>
<div class="app">

<!-- HOME -->
<div id="s-home" class="screen active">
  <div class="header">
    <div class="header-icon green">
      <svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
    </div>
    <h1>Gestión de Rechazos</h1>
    <p>Seleccioná el tipo de reporte</p>
  </div>
  <button class="home-btn" onclick="startFlow('calle')">
    <div class="home-btn-icon g">
      <svg viewBox="0 0 24 24" fill="#1D9E75"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
    </div>
    <div>
      <h2>Rechazo en calle</h2>
      <p>Pedido no entregado al cliente. Notifica al vendedor por WhatsApp.</p>
    </div>
  </button>
  <button class="home-btn" onclick="startFlow('deposito')">
    <div class="home-btn-icon b">
      <svg viewBox="0 0 24 24" fill="#2563EB"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
    </div>
    <div>
      <h2>Reclamo Depósito</h2>
      <p>Pedido entregado con mercadería descontada. Se registra en planilla.</p>
    </div>
  </button>
</div>

<!-- CHOFER -->
<div id="s-chofer" class="screen">
  <div class="progress" id="prog-chofer"></div>
  <div class="card">
    <label class="label">Chofer</label>
    <select id="sel-chofer" onchange="checkChofer()">
      <option value="">— Seleccioná tu nombre —</option>
    </select>
  </div>
  <button class="btn-green" id="btn-chofer" onclick="nextStep()" disabled>Continuar</button>
  <button class="btn-secondary" onclick="show('s-home')">Atrás</button>
</div>

<!-- FOTO -->
<div id="s-foto" class="screen">
  <div class="progress" id="prog-foto"></div>
  <div class="card">
    <label class="label">Foto del local / remito</label>
    <div class="foto-area" onclick="document.getElementById('foto-input').click()">
      <input type="file" id="foto-input" accept="image/*" capture="environment" onchange="onFoto(this)" style="display:none">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#ccc"><path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z"/></svg>
      <p id="foto-label">Tocar para sacar foto</p>
      <img id="foto-preview" class="foto-preview">
    </div>
    <div class="upload-status" id="upload-status">
      <div class="spinner"></div>
      <span id="upload-msg"></span>
    </div>
  </div>
  <button class="btn-green" id="btn-foto" onclick="nextStep()" disabled>Continuar</button>
  <button class="btn-secondary" onclick="prevStep()">Atrás</button>
</div>

<!-- MOTIVO -->
<div id="s-motivo" class="screen">
  <div class="progress" id="prog-motivo"></div>
  <div class="card">
    <label class="label">Motivo del rechazo</label>
    <div class="motivos-grid" id="motivos-grid"></div>
    <div style="margin-top:10px">
      <label class="label">Observación</label>
      <textarea id="obs" placeholder="Agregá cualquier detalle adicional..." oninput="checkMotivo()"></textarea>
    </div>
  </div>
  <button class="btn-green" id="btn-motivo" onclick="onMotivoNext()" disabled>Continuar</button>
  <button class="btn-secondary" onclick="prevStep()">Atrás</button>
</div>

<!-- VENDEDOR (solo calle) -->
<div id="s-vendedor" class="screen">
  <div class="progress" id="prog-vendedor"></div>
  <div class="card">
    <label class="label">Vendedor responsable</label>
    <div class="vendedor-search">
      <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="#bbb"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      <input type="text" id="vendedor-search" placeholder="Buscar por código o nombre..." oninput="filterVendedores()">
    </div>
    <div class="vendedor-list" id="vendedor-list"></div>
  </div>
  <button class="btn-green" id="btn-vendedor" onclick="nextStep()" disabled>Continuar</button>
  <button class="btn-secondary" onclick="prevStep()">Atrás</button>
</div>

<!-- ENVÍO CALLE -->
<div id="s-envio" class="screen">
  <div style="text-align:center;padding:1.5rem 0 0.5rem">
    <div class="success-icon g">
      <svg viewBox="0 0 24 24" fill="#1D9E75" width="30" height="30"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
    </div>
    <h1 style="font-size:20px;font-weight:600;color:#111">Reporte listo</h1>
    <p style="font-size:13px;color:#888;margin-top:4px">Enviá el aviso por WhatsApp</p>
  </div>
  <div class="card" style="margin-top:12px">
    <img id="foto-thumb" class="foto-thumb">
    <div class="resumen-box" id="resumen-calle"></div>
  </div>
  <a id="wsp-v" class="wsp-btn" target="_blank">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.529 5.849L0 24l6.335-1.51A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.01-1.37l-.36-.213-3.76.896.953-3.66-.234-.376A9.818 9.818 0 1 1 12 21.818z"/></svg>
    Enviar a vendedor
  </a>
  <div class="sheets-badge" id="sheets-badge-calle">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
    <span id="sheets-msg-calle">Guardando en planilla...</span>
  </div>
  <button class="btn-secondary" onclick="resetApp()" style="margin-top:12px">Nuevo reporte</button>
</div>

<!-- DEPÓSITO OK -->
<div id="s-deposito-ok" class="screen">
  <div style="text-align:center;padding:1.5rem 0 0.5rem">
    <div class="success-icon b">
      <svg viewBox="0 0 24 24" fill="#2563EB" width="30" height="30"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
    </div>
    <h1 style="font-size:20px;font-weight:600;color:#111">Reclamo registrado</h1>
    <p style="font-size:13px;color:#888;margin-top:4px">Se guardó en Google Sheets</p>
  </div>
  <div class="card" style="margin-top:12px">
    <img id="foto-thumb-dep" class="foto-thumb">
    <div class="resumen-box" id="resumen-dep"></div>
  </div>
  <div class="sheets-badge" id="sheets-badge-dep">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
    <span id="sheets-msg-dep">Guardando en planilla...</span>
  </div>
  <button class="btn-secondary" onclick="resetApp()" style="margin-top:12px">Nuevo reporte</button>
</div>

</div>
<script>
const CLD_CLOUD  = 'dahri8jfr';
const CLD_PRESET = 'rechazos_unsigned';
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzWPwc2c2uFyX555zGyPOyZssrTR_PMiCDfhlw4bB2h9Y0_WNoNydb-YRF4OqSykqwD/exec';

const RESPUESTA_URL = 'https://reclamos611.github.io/rechazos-app/respuesta_vendedor.html';

const VENDEDORES = [
  {codigo:'V31',nombre:'VILLALBA MAXIMILIANO EZEQUIEL',wsp:'543513489668'},
  {codigo:'V32',nombre:'OLIVARES EDGAR FABIAN ARIEL',wsp:'543525642704'},
  {codigo:'V33',nombre:'ORDOÑEZ RODRIGUEZ ISMAEL MARTIN',wsp:'543521477092'},
  {codigo:'V34',nombre:'BALDO JULIAN MARCELO',wsp:'543541527601'},
  {codigo:'V35',nombre:'BAZAN LUCIANO MANUEL',wsp:'543549468268'},
  {codigo:'V36',nombre:'NEIRA RUIZ NAHUEL',wsp:'543518566977'},
  {codigo:'V37',nombre:'SCORRANI IGNACIO MATIAS',wsp:'543513938671'},
  {codigo:'V38',nombre:'MARTINEZ MAURICIO SEBASTIAN',wsp:'543515725775'},
  {codigo:'V39',nombre:'MERLO RODOLFO SEBASTIAN',wsp:'543546519096'},
  {codigo:'V41',nombre:'CISTERNA DIEGO SEBASTIAN',wsp:'543513660165'},
  {codigo:'V42',nombre:'RESTIVO VALERIA CARINA',wsp:'543516800868'},
  {codigo:'V43',nombre:'RUEDA CUJAR ALEXANDER GREGOREVICHS',wsp:'543536562443'},
  {codigo:'V44',nombre:'BERNAHOLA JORGE AGUSTIN',wsp:'543513638356'},
  {codigo:'V45',nombre:'ROMERO PARAVICINI DIANA DE JESUS',wsp:'543534250642'},
  {codigo:'V46',nombre:'OCHOA ROXANA DEL VALLE',wsp:'543516134408'},
  {codigo:'V48',nombre:'SALDE MARCELA ANTONIA',wsp:'543534250641'},
  {codigo:'V49',nombre:'MOREIRA AIRALDI TOBIAS URIEL',wsp:'543517478111'},
  {codigo:'V51',nombre:'GONZALEZ MARIA CANDELARIA',wsp:'543512847999'},
  {codigo:'V52',nombre:'MARTINEZ DIEGO MATIAS',wsp:'543536562554'},
  {codigo:'V53',nombre:'CARRIZO EZEQUIEL ALEJANDRO',wsp:'543516796032'},
  {codigo:'V54',nombre:'MORENO LOBO JOHAN JAVIER',wsp:'543512068535'},
  {codigo:'V55',nombre:'PULIDO LARA EFRAIM JOSE',wsp:'543516796124'},
  {codigo:'V56',nombre:'RIVARA LORENZO',wsp:'543534250643'},
  {codigo:'V57',nombre:'DIAZ OMAR EDUARDO',wsp:'543516092927'},
  {codigo:'V58',nombre:'GONZALEZ MARCELA LUCIANA',wsp:'543536562445'},
  {codigo:'V59',nombre:'AVENDAÑO SERGIO ALEJANDRO',wsp:'543515645488'},
  {codigo:'V61',nombre:'PACHECO RODRIGO RAMON',wsp:'543513461430'},
  {codigo:'V62',nombre:'PAEZ MIGUEL SEBASTIAN',wsp:'543534250644'},
  {codigo:'V63',nombre:'MIRANDA MARIANA ROCIO',wsp:'543517346777'},
  {codigo:'V64',nombre:'GONZALEZ FRANCO MAXIMILIANO',wsp:'543513938427'},
  {codigo:'V65',nombre:'SANCHEZ JULIAN DAVID',wsp:'543516078259'},
];

const CHOFERES = [
  {id:'C1',  nombre:'GUZMAN DIEGO NORBERTO',         cel:'3515477459'},
  {id:'C2',  nombre:'CARO MAXIMILIANO ALBERTO',       cel:'3515149870'},
  {id:'C3',  nombre:'RICAPA PAREDES JOSE ANTONIO',    cel:'3515155580'},
  {id:'C4',  nombre:'AVALOS GOMEZ RODRIGO SEBASTIAN', cel:'3516352595'},
  {id:'C5',  nombre:'OYOLA GASTON AGUSTIN',           cel:'3517580862'},
  {id:'C6',  nombre:'LUJAN LUCAS',                    cel:'3518018476'},
  {id:'C7',  nombre:'JUAREZ LUIS ENRIQUE',            cel:'3515337280'},
  {id:'C8',  nombre:'MOLINA JORGE GABRIEL',           cel:'3512557899'},
  {id:'C9',  nombre:'RAFAELLI DIEGO DANIEL',          cel:'3515179964'},
  {id:'C10', nombre:'SUAREZ TOBIAS EMIR',             cel:'3518614649'},
  {id:'C251',nombre:'GONZALEZ CECILIA GUADALUPE',     cel:'3513584303'},
  {id:'C252',nombre:'BELEN EMILIANO AGUSTIN',         cel:'3513434601'},
  {id:'C253',nombre:'GUIRAO LUIS ANTONIO',            cel:'3512112002'},
  {id:'C254',nombre:'JUNCOS LUIS EZEQUIEL',           cel:'3516376540'},
  {id:'C255',nombre:'ROMANO RODRIGO ERNESTO',         cel:'3518506375'},
  {id:'C256',nombre:'IRIARTE MAURO ALEJANDRO',        cel:'3512078498'},
  {id:'C257',nombre:'CANELO PABLO FERNANDO',          cel:'3512082961'},
  {id:'C258',nombre:'NIETO GUSTAVO ATILIO',           cel:'3513997501'},
  {id:'C259',nombre:'GUEVARA ENRIQUE LEONARDO',       cel:'3513128665'},
  {id:'C260',nombre:'PALLOTI DUILIO',                 cel:'3513250393'},
  {id:'C261',nombre:'ROMANO MARTIN',                  cel:'3513906197'},
  {id:'C262',nombre:'TALAVERA ADRIAN ISMAEL',         cel:'3515085313'},
];

const MOTIVOS = [
  'Cerrado','Dirección incorrecta o insuficiente','Envases deteriorados o roto',
  'Error Administrativo - Refacturación','Error de Armado','No está el dueño',
  'No hizo pedido','Sin Dinero','Sin Stock','Zona peligrosa o camino malo',
];

const FLOWS = {
  calle:    ['chofer','foto','motivo','vendedor','envio'],
  deposito: ['chofer','foto','motivo','deposito-ok'],
};

let flow = '';
let stepIdx = 0;
let state = { chofer:null, motivo:'', obs:'', vendedor:null, fotoLocalUrl:null, fotoCldUrl:null };
let selectedMotivo = '';

function startFlow(tipo) {
  flow = tipo;
  stepIdx = 0;
  state = { chofer:null, motivo:'', obs:'', vendedor:null, fotoLocalUrl:null, fotoCldUrl:null };
  selectedMotivo = '';
  renderChoferes();
  goStep(0);
}

function goStep(idx) {
  stepIdx = idx;
  const step = FLOWS[flow][idx];
  show('s-' + step);
  renderProgress();
  if(step==='motivo')      renderMotivos();
  if(step==='vendedor')    renderVendedores('');
  if(step==='envio')       buildResumenCalle();
  if(step==='deposito-ok') buildResumenDeposito();
  window.scrollTo(0,0);
}

function nextStep() { goStep(stepIdx + 1); }
function prevStep() {
  if(stepIdx > 0) goStep(stepIdx - 1);
  else show('s-home');
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderProgress() {
  const steps = FLOWS[flow];
  const total = steps.length - 1;
  const isBlue = flow === 'deposito';
  ['chofer','foto','motivo','vendedor'].forEach(sc => {
    const el = document.getElementById('prog-' + sc);
    if(!el) return;
    let html = '';
    for(let i=0;i<total;i++){
      let cls = i<stepIdx?(isBlue?'done-b':'done'):i===stepIdx?(isBlue?'active-b':'active'):'';
      html += `<div class="progress-step ${cls}"></div>`;
    }
    el.innerHTML = html;
  });
}

function renderChoferes() {
  const sel = document.getElementById('sel-chofer');
  sel.innerHTML = '<option value="">— Seleccioná tu nombre —</option>';
  CHOFERES.forEach(c => {
    const o = document.createElement('option');
    o.value = c.id;
    o.textContent = `${c.id} — ${c.nombre}`;
    sel.appendChild(o);
  });
  document.getElementById('btn-chofer').disabled = true;
}

function checkChofer() {
  const v = document.getElementById('sel-chofer').value;
  document.getElementById('btn-chofer').disabled = !v;
  if(v) state.chofer = CHOFERES.find(c=>c.id===v);
}

async function onFoto(input) {
  const file = input.files[0];
  if(!file) return;
  state.fotoCldUrl = null;
  const reader = new FileReader();
  reader.onload = e => {
    state.fotoLocalUrl = e.target.result;
    document.getElementById('foto-preview').src = e.target.result;
    document.getElementById('foto-preview').style.display = 'block';
    document.getElementById('foto-label').textContent = 'Tocar para cambiar foto';
  };
  reader.readAsDataURL(file);
  setUploadStatus('uploading','Subiendo foto...');
  document.getElementById('btn-foto').disabled = true;
  try {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', CLD_PRESET);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLD_CLOUD}/image/upload`,{method:'POST',body:fd});
    const data = await res.json();
    if(data.secure_url){ state.fotoCldUrl=data.secure_url; setUploadStatus('success','✓ Foto subida correctamente'); }
    else throw new Error();
  } catch(e) { setUploadStatus('error','No se pudo subir — el reporte igual se envía'); }
  document.getElementById('btn-foto').disabled = false;
}

function setUploadStatus(type, msg) {
  const el = document.getElementById('upload-status');
  el.className = 'upload-status ' + type;
  el.querySelector('.spinner').style.display = type==='uploading'?'block':'none';
  document.getElementById('upload-msg').textContent = msg;
}

function renderMotivos() {
  const selClass = flow==='deposito'?'selected-b':'selected';
  document.getElementById('motivos-grid').innerHTML = MOTIVOS.map(m=>`
    <button class="motivo-btn ${selectedMotivo===m?selClass:''}" onclick="selectMotivo('${m}',this)">${m}</button>`).join('');
  document.getElementById('btn-motivo').disabled = !selectedMotivo && !document.getElementById('obs').value.trim();
}

function selectMotivo(m, btn) {
  selectedMotivo = m;
  const sc = flow==='deposito'?'selected-b':'selected';
  document.querySelectorAll('.motivo-btn').forEach(b=>b.classList.remove('selected','selected-b'));
  btn.classList.add(sc);
  document.getElementById('btn-motivo').disabled = false;
}

function checkMotivo() {
  document.getElementById('btn-motivo').disabled = !(selectedMotivo || document.getElementById('obs').value.trim());
}

function onMotivoNext() {
  state.motivo = selectedMotivo;
  state.obs = document.getElementById('obs').value.trim();
  nextStep();
}

function renderVendedores(q) {
  const list = document.getElementById('vendedor-list');
  const filtered = VENDEDORES.filter(v=>v.codigo.toLowerCase().includes(q.toLowerCase())||v.nombre.toLowerCase().includes(q.toLowerCase()));
  if(!filtered.length){list.innerHTML='<div style="padding:14px;text-align:center;font-size:13px;color:#aaa">Sin resultados</div>';return;}
  list.innerHTML = filtered.map(v=>`
    <div class="vendedor-item ${state.vendedor&&state.vendedor.codigo===v.codigo?'selected':''}" onclick="selectVendedor('${v.codigo}')">
      <div class="v-code">${v.codigo}</div>
      <div><div class="v-name">${v.nombre}</div><div class="v-sub">Vendedor</div></div>
    </div>`).join('');
}

function filterVendedores() { renderVendedores(document.getElementById('vendedor-search').value); }

function selectVendedor(codigo) {
  state.vendedor = VENDEDORES.find(v=>v.codigo===codigo);
  document.getElementById('btn-vendedor').disabled = false;
  renderVendedores(document.getElementById('vendedor-search').value);
}

function buildResumenCalle() {
  const fecha = new Date();
  const hora     = fecha.toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
  const fechaStr = fecha.toLocaleDateString('es-AR');

  // Link de respuesta para el vendedor
  const respParams = new URLSearchParams({
    chofer:   state.chofer.nombre,
    cel:      state.chofer.cel,
    motivo:   state.motivo,
    obs:      state.obs || '',
    fecha:    fechaStr,
    hora:     hora,
    foto:     state.fotoCldUrl || '',
    vendedor: state.vendedor.codigo + ' - ' + state.vendedor.nombre,
  });
  const respLink = RESPUESTA_URL + '?' + respParams.toString();

  const fotoLinea = state.fotoCldUrl ? `\n📸 Foto: ${state.fotoCldUrl}` : '';
  const obsLinea  = state.obs ? `\n📝 Obs: ${state.obs}` : '';

  const msg =
    `🚚 *RECHAZO DE ENTREGA*\n\n` +
    `👤 Chofer: ${state.chofer.id} - ${state.chofer.nombre}\n` +
    `🕐 ${fechaStr} ${hora}\n` +
    `👔 Vendedor: ${state.vendedor.codigo} - ${state.vendedor.nombre}\n\n` +
    `❌ Motivo: ${state.motivo}` +
    obsLinea + fotoLinea +
    `\n\n👉 *Respondé acá:* ${respLink}` +
    `\n\n_Tocá el link para gestionar el rechazo._`;

  document.getElementById('wsp-v').href = `https://wa.me/${state.vendedor.wsp}?text=${encodeURIComponent(msg)}`;

  const thumb = document.getElementById('foto-thumb');
  if(state.fotoLocalUrl){thumb.src=state.fotoLocalUrl;thumb.style.display='block';}

  document.getElementById('resumen-calle').innerHTML = `
    <div class="resumen-row"><span>Chofer</span><span>${state.chofer.id} — ${state.chofer.nombre}</span></div>
    <div class="resumen-row"><span>Vendedor</span><span>${state.vendedor.codigo} — ${state.vendedor.nombre}</span></div>
    <div class="resumen-row"><span>Motivo</span><span>${state.motivo}</span></div>
    ${state.obs?`<div class="resumen-row"><span>Obs.</span><span>${state.obs}</span></div>`:''}
    <div class="resumen-row"><span>Foto</span><span style="color:${state.fotoCldUrl?'#1D9E75':'#e24b4a'}">${state.fotoCldUrl?'✓ Subida':'Sin conexión'}</span></div>
    <div class="resumen-row"><span>Hora</span><span>${hora}</span></div>`;

  saveToSheets({
    tipo:'Rechazo Calle', fecha:fechaStr, hora,
    chofer:`${state.chofer.id} - ${state.chofer.nombre}`,
    vendedor:`${state.vendedor.codigo} - ${state.vendedor.nombre}`,
    motivo:state.motivo, observacion:state.obs||'', foto:state.fotoCldUrl||''
  }, 'calle');
}

function buildResumenDeposito() {
  const fecha = new Date();
  const hora     = fecha.toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
  const fechaStr = fecha.toLocaleDateString('es-AR');

  const thumb = document.getElementById('foto-thumb-dep');
  if(state.fotoLocalUrl){thumb.src=state.fotoLocalUrl;thumb.style.display='block';}

  document.getElementById('resumen-dep').innerHTML = `
    <div class="resumen-row"><span>Chofer</span><span>${state.chofer.id} — ${state.chofer.nombre}</span></div>
    <div class="resumen-row"><span>Motivo</span><span>${state.motivo}</span></div>
    ${state.obs?`<div class="resumen-row"><span>Obs.</span><span>${state.obs}</span></div>`:''}
    <div class="resumen-row"><span>Foto</span><span style="color:${state.fotoCldUrl?'#2563EB':'#e24b4a'}">${state.fotoCldUrl?'✓ Subida':'Sin conexión'}</span></div>
    <div class="resumen-row"><span>Hora</span><span>${hora}</span></div>`;

  saveToSheets({
    tipo:'Reclamo Deposito', fecha:fechaStr, hora,
    chofer:`${state.chofer.id} - ${state.chofer.nombre}`,
    vendedor:'', motivo:state.motivo, observacion:state.obs||'', foto:state.fotoCldUrl||''
  }, 'dep');
}

function saveToSheets(data, suffix) {
  const badgeEl = document.getElementById('sheets-badge-' + suffix);
  const msgEl   = document.getElementById('sheets-msg-'   + suffix);
  const params  = new URLSearchParams(data).toString();
  const img = new Image();
  img.onload = img.onerror = function() {
    if(badgeEl) badgeEl.className = 'sheets-badge ok';
    if(msgEl)   msgEl.textContent = '✓ Guardado en planilla';
  };
  img.src = SHEETS_URL + '?' + params;
  setTimeout(()=>{
    if(msgEl && msgEl.textContent==='Guardando en planilla...'){
      if(badgeEl) badgeEl.className='sheets-badge ok';
      if(msgEl)   msgEl.textContent='✓ Enviado a planilla';
    }
  }, 5000);
}

function resetApp() {
  state = {chofer:null,motivo:'',obs:'',vendedor:null,fotoLocalUrl:null,fotoCldUrl:null};
  selectedMotivo=''; flow=''; stepIdx=0;
  document.getElementById('sel-chofer').value='';
  document.getElementById('obs').value='';
  document.getElementById('vendedor-search').value='';
  document.getElementById('foto-preview').style.display='none';
  document.getElementById('foto-label').textContent='Tocar para sacar foto';
  document.getElementById('upload-status').className='upload-status';
  document.getElementById('foto-input').value='';
  show('s-home');
}
</script>
</body>
</html>
e_rechazo.html…]()

<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Gestión de Rechazos</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5; min-height: 100vh; }
.app { max-width: 440px; margin: 0 auto; padding: 1rem 1rem 3rem; }
.screen { display: none; }
.screen.active { display: block; }
.header { text-align: center; padding: 1.5rem 0 1rem; }
.header-icon { width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; }
.header-icon.green { background: #1D9E75; }
.header-icon svg { width: 26px; height: 26px; fill: white; }
.header h1 { font-size: 20px; font-weight: 600; color: #111; }
.header p  { font-size: 13px; color: #888; margin-top: 4px; }
.progress { display: flex; justify-content: center; gap: 5px; margin-bottom: 1.2rem; }
.progress-step { width: 36px; height: 4px; border-radius: 2px; background: #ddd; transition: background 0.2s; }
.progress-step.done   { background: #1D9E75; }
.progress-step.active { background: #5DCAA5; }
.progress-step.done-b   { background: #2563EB; }
.progress-step.active-b { background: #60A5FA; }
.card { background: white; border: 1px solid #eee; border-radius: 14px; padding: 1.25rem; margin-bottom: 12px; }
.label { font-size: 11px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; display: block; }
select, input[type="text"], textarea {
  width: 100%; padding: 11px 13px; border: 1px solid #e0e0e0; border-radius: 10px;
  font-size: 15px; background: #fafafa; color: #111; font-family: inherit; outline: none; transition: border-color 0.15s;
}
select:focus, input:focus, textarea:focus { border-color: #1D9E75; background: white; }
textarea { resize: vertical; min-height: 70px; }
.btn-green { width:100%; padding:14px; background:#1D9E75; color:white; border:none; border-radius:10px; font-size:15px; font-weight:600; cursor:pointer; margin-top:8px; transition:background 0.15s; }
.btn-green:hover { background:#0F6E56; }
.btn-green:disabled { background:#ccc; color:#999; cursor:not-allowed; }
.btn-blue { width:100%; padding:14px; background:#2563EB; color:white; border:none; border-radius:10px; font-size:15px; font-weight:600; cursor:pointer; margin-top:8px; }
.btn-blue:hover { background:#1D4ED8; }
.btn-blue:disabled { background:#ccc; color:#999; cursor:not-allowed; }
.btn-secondary { width:100%; padding:12px; background:transparent; color:#666; border:1px solid #ddd; border-radius:10px; font-size:14px; cursor:pointer; margin-top:8px; }
.btn-secondary:hover { background:#f5f5f5; }
.home-btn { display:flex; align-items:center; gap:16px; background:white; border:1px solid #eee; border-radius:16px; padding:1.25rem; margin-bottom:12px; cursor:pointer; transition:all 0.15s; text-align:left; width:100%; }
.home-btn:hover { transform:translateY(-1px); box-shadow:0 4px 12px rgba(0,0,0,0.08); }
.home-btn-icon { width:48px; height:48px; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.home-btn-icon.g { background:#E1F5EE; }
.home-btn-icon.b { background:#EFF6FF; }
.home-btn h2 { font-size:16px; font-weight:600; color:#111; margin-bottom:3px; }
.home-btn p  { font-size:12px; color:#888; line-height:1.4; }
.foto-area { border:2px dashed #ddd; border-radius:10px; padding:1.5rem 1rem; text-align:center; cursor:pointer; transition:border-color 0.15s; }
.foto-area:hover { border-color:#1D9E75; }
.foto-area p { font-size:13px; color:#999; margin-top:6px; }
.foto-preview { width:100%; border-radius:10px; max-height:200px; object-fit:cover; display:none; margin-top:10px; }
.upload-status { display:none; align-items:center; gap:8px; margin-top:10px; padding:9px 12px; border-radius:8px; font-size:13px; }
.upload-status.uploading { display:flex; background:#FFF8E1; color:#795548; }
.upload-status.success   { display:flex; background:#E1F5EE; color:#085041; }
.upload-status.error     { display:flex; background:#FFEBEE; color:#b71c1c; }
.spinner { width:16px; height:16px; border:2px solid #ddd; border-top-color:#1D9E75; border-radius:50%; animation:spin 0.7s linear infinite; flex-shrink:0; }
@keyframes spin { to { transform:rotate(360deg); } }
.vendedor-search { position:relative; margin-bottom:8px; }
.vendedor-search input { padding-left:36px; }
.search-icon { position:absolute; left:11px; top:50%; transform:translateY(-50%); pointer-events:none; }
.vendedor-list { max-height:260px; overflow-y:auto; border:1px solid #eee; border-radius:10px; }
.vendedor-item { padding:10px 13px; cursor:pointer; border-bottom:1px solid #f0f0f0; display:flex; align-items:center; gap:10px; transition:background 0.1s; }
.vendedor-item:last-child { border-bottom:none; }
.vendedor-item:hover { background:#f5f5f5; }
.vendedor-item.selected { background:#E1F5EE; }
.v-code { width:34px; height:34px; border-radius:50%; background:#1D9E75; color:white; font-size:11px; font-weight:600; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.v-name { font-size:13px; color:#111; font-weight:500; }
.v-sub  { font-size:11px; color:#999; }
.motivos-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.motivo-btn { padding:11px 8px; border:1px solid #e0e0e0; border-radius:10px; background:#fafafa; color:#333; font-size:12px; cursor:pointer; text-align:center; line-height:1.3; transition:all 0.15s; }
.motivo-btn.selected   { background:#E1F5EE; border-color:#1D9E75; color:#085041; font-weight:600; }
.motivo-btn.selected-b { background:#EFF6FF; border-color:#2563EB; color:#1D4ED8; font-weight:600; }
.motivo-btn:hover:not(.selected):not(.selected-b) { border-color:#aaa; background:white; }
.resumen-box { background:#f9f9f9; border-radius:10px; padding:1rem; margin-bottom:12px; }
.resumen-row { display:flex; justify-content:space-between; align-items:flex-start; padding:5px 0; font-size:13px; border-bottom:1px solid #eee; gap:8px; }
.resumen-row:last-child { border-bottom:none; }
.resumen-row span:first-child { color:#999; flex-shrink:0; }
.resumen-row span:last-child  { color:#111; font-weight:500; text-align:right; word-break:break-all; }
.foto-thumb { width:100%; border-radius:10px; max-height:140px; object-fit:cover; margin-bottom:10px; display:none; }
.wsp-btn { display:flex; align-items:center; justify-content:center; gap:10px; width:100%; padding:13px; background:#25D366; color:white; border:none; border-radius:10px; font-size:15px; font-weight:600; cursor:pointer; margin-top:8px; text-decoration:none; transition:opacity 0.15s; }
.wsp-btn:hover { opacity:0.9; }
.sheets-badge { display:flex; align-items:center; justify-content:center; gap:6px; font-size:12px; margin-top:10px; color:#888; }
.sheets-badge.ok  { color:#1D9E75; }
.sheets-badge.err { color:#e24b4a; }
.success-icon { width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 12px; }
.success-icon.g { background:#E1F5EE; }
.success-icon.b { background:#EFF6FF; }
</style>
</head>
<body>
<div class="app">

<!-- HOME -->
<div id="s-home" class="screen active">
  <div class="header">
    <div class="header-icon green">
      <svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
    </div>
    <h1>Gestión de Rechazos</h1>
    <p>Seleccioná el tipo de reporte</p>
  </div>
  <button class="home-btn" onclick="startFlow('calle')">
    <div class="home-btn-icon g">
      <svg viewBox="0 0 24 24" fill="#1D9E75"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
    </div>
    <div>
      <h2>Rechazo en calle</h2>
      <p>Pedido no entregado al cliente. Notifica al vendedor por WhatsApp.</p>
    </div>
  </button>
  <button class="home-btn" onclick="startFlow('deposito')">
    <div class="home-btn-icon b">
      <svg viewBox="0 0 24 24" fill="#2563EB"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
    </div>
    <div>
      <h2>Reclamo Depósito</h2>
      <p>Pedido entregado con mercadería descontada. Se registra en planilla.</p>
    </div>
  </button>
</div>

<!-- CHOFER -->
<div id="s-chofer" class="screen">
  <div class="progress" id="prog-chofer"></div>
  <div class="card">
    <label class="label">Chofer</label>
    <select id="sel-chofer" onchange="checkChofer()">
      <option value="">— Seleccioná tu nombre —</option>
    </select>
  </div>
  <button class="btn-green" id="btn-chofer" onclick="nextStep()" disabled>Continuar</button>
  <button class="btn-secondary" onclick="show('s-home')">Atrás</button>
</div>

<!-- FOTO -->
<div id="s-foto" class="screen">
  <div class="progress" id="prog-foto"></div>
  <div class="card">
    <label class="label">Foto del local / remito</label>
    <div class="foto-area" onclick="document.getElementById('foto-input').click()">
      <input type="file" id="foto-input" accept="image/*" capture="environment" onchange="onFoto(this)" style="display:none">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#ccc"><path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z"/></svg>
      <p id="foto-label">Tocar para sacar foto</p>
      <img id="foto-preview" class="foto-preview">
    </div>
    <div class="upload-status" id="upload-status">
      <div class="spinner"></div>
      <span id="upload-msg"></span>
    </div>
  </div>
  <button class="btn-green" id="btn-foto" onclick="nextStep()" disabled>Continuar</button>
  <button class="btn-secondary" onclick="prevStep()">Atrás</button>
</div>

<!-- MOTIVO -->
<div id="s-motivo" class="screen">
  <div class="progress" id="prog-motivo"></div>
  <div class="card">
    <label class="label">Motivo del rechazo</label>
    <div class="motivos-grid" id="motivos-grid"></div>
    <div style="margin-top:10px">
      <label class="label">Observación</label>
      <textarea id="obs" placeholder="Agregá cualquier detalle adicional..." oninput="checkMotivo()"></textarea>
    </div>
  </div>
  <button class="btn-green" id="btn-motivo" onclick="onMotivoNext()" disabled>Continuar</button>
  <button class="btn-secondary" onclick="prevStep()">Atrás</button>
</div>

<!-- VENDEDOR (solo calle) -->
<div id="s-vendedor" class="screen">
  <div class="progress" id="prog-vendedor"></div>
  <div class="card">
    <label class="label">Vendedor responsable</label>
    <div class="vendedor-search">
      <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="#bbb"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      <input type="text" id="vendedor-search" placeholder="Buscar por código o nombre..." oninput="filterVendedores()">
    </div>
    <div class="vendedor-list" id="vendedor-list"></div>
  </div>
  <button class="btn-green" id="btn-vendedor" onclick="nextStep()" disabled>Continuar</button>
  <button class="btn-secondary" onclick="prevStep()">Atrás</button>
</div>

<!-- ENVÍO CALLE -->
<div id="s-envio" class="screen">
  <div style="text-align:center;padding:1.5rem 0 0.5rem">
    <div class="success-icon g">
      <svg viewBox="0 0 24 24" fill="#1D9E75" width="30" height="30"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
    </div>
    <h1 style="font-size:20px;font-weight:600;color:#111">Reporte listo</h1>
    <p style="font-size:13px;color:#888;margin-top:4px">Enviá el aviso por WhatsApp</p>
  </div>
  <div class="card" style="margin-top:12px">
    <img id="foto-thumb" class="foto-thumb">
    <div class="resumen-box" id="resumen-calle"></div>
  </div>
  <a id="wsp-v" class="wsp-btn" target="_blank">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.529 5.849L0 24l6.335-1.51A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.01-1.37l-.36-.213-3.76.896.953-3.66-.234-.376A9.818 9.818 0 1 1 12 21.818z"/></svg>
    Enviar a vendedor
  </a>
  <div class="sheets-badge" id="sheets-badge-calle">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
    <span id="sheets-msg-calle">Guardando en planilla...</span>
  </div>
  <button class="btn-secondary" onclick="resetApp()" style="margin-top:12px">Nuevo reporte</button>
</div>

<!-- DEPÓSITO OK -->
<div id="s-deposito-ok" class="screen">
  <div style="text-align:center;padding:1.5rem 0 0.5rem">
    <div class="success-icon b">
      <svg viewBox="0 0 24 24" fill="#2563EB" width="30" height="30"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
    </div>
    <h1 style="font-size:20px;font-weight:600;color:#111">Reclamo registrado</h1>
    <p style="font-size:13px;color:#888;margin-top:4px">Se guardó en Google Sheets</p>
  </div>
  <div class="card" style="margin-top:12px">
    <img id="foto-thumb-dep" class="foto-thumb">
    <div class="resumen-box" id="resumen-dep"></div>
  </div>
  <div class="sheets-badge" id="sheets-badge-dep">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
    <span id="sheets-msg-dep">Guardando en planilla...</span>
  </div>
  <button class="btn-secondary" onclick="resetApp()" style="margin-top:12px">Nuevo reporte</button>
</div>

</div>
<script>
const CLD_CLOUD  = 'dahri8jfr';
const CLD_PRESET = 'rechazos_unsigned';
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzWPwc2c2uFyX555zGyPOyZssrTR_PMiCDfhlw4bB2h9Y0_WNoNydb-YRF4OqSykqwD/exec';

const RESPUESTA_URL = 'https://reclamos611.github.io/rechazos-app/respuesta_vendedor.html';

const VENDEDORES = [
  {codigo:'V31',nombre:'VILLALBA MAXIMILIANO EZEQUIEL',wsp:'543513489668'},
  {codigo:'V32',nombre:'OLIVARES EDGAR FABIAN ARIEL',wsp:'543525642704'},
  {codigo:'V33',nombre:'ORDOÑEZ RODRIGUEZ ISMAEL MARTIN',wsp:'543521477092'},
  {codigo:'V34',nombre:'BALDO JULIAN MARCELO',wsp:'543541527601'},
  {codigo:'V35',nombre:'BAZAN LUCIANO MANUEL',wsp:'543549468268'},
  {codigo:'V36',nombre:'NEIRA RUIZ NAHUEL',wsp:'543518566977'},
  {codigo:'V37',nombre:'SCORRANI IGNACIO MATIAS',wsp:'543513938671'},
  {codigo:'V38',nombre:'MARTINEZ MAURICIO SEBASTIAN',wsp:'543515725775'},
  {codigo:'V39',nombre:'MERLO RODOLFO SEBASTIAN',wsp:'543546519096'},
  {codigo:'V41',nombre:'CISTERNA DIEGO SEBASTIAN',wsp:'543513660165'},
  {codigo:'V42',nombre:'RESTIVO VALERIA CARINA',wsp:'543516800868'},
  {codigo:'V43',nombre:'RUEDA CUJAR ALEXANDER GREGOREVICHS',wsp:'543536562443'},
  {codigo:'V44',nombre:'BERNAHOLA JORGE AGUSTIN',wsp:'543513638356'},
  {codigo:'V45',nombre:'ROMERO PARAVICINI DIANA DE JESUS',wsp:'543534250642'},
  {codigo:'V46',nombre:'OCHOA ROXANA DEL VALLE',wsp:'543516134408'},
  {codigo:'V48',nombre:'SALDE MARCELA ANTONIA',wsp:'543534250641'},
  {codigo:'V49',nombre:'MOREIRA AIRALDI TOBIAS URIEL',wsp:'543517478111'},
  {codigo:'V51',nombre:'GONZALEZ MARIA CANDELARIA',wsp:'543512847999'},
  {codigo:'V52',nombre:'MARTINEZ DIEGO MATIAS',wsp:'543536562554'},
  {codigo:'V53',nombre:'CARRIZO EZEQUIEL ALEJANDRO',wsp:'543516796032'},
  {codigo:'V54',nombre:'MORENO LOBO JOHAN JAVIER',wsp:'543512068535'},
  {codigo:'V55',nombre:'PULIDO LARA EFRAIM JOSE',wsp:'543516796124'},
  {codigo:'V56',nombre:'RIVARA LORENZO',wsp:'543534250643'},
  {codigo:'V57',nombre:'DIAZ OMAR EDUARDO',wsp:'543516092927'},
  {codigo:'V58',nombre:'GONZALEZ MARCELA LUCIANA',wsp:'543536562445'},
  {codigo:'V59',nombre:'AVENDAÑO SERGIO ALEJANDRO',wsp:'543515645488'},
  {codigo:'V61',nombre:'PACHECO RODRIGO RAMON',wsp:'543513461430'},
  {codigo:'V62',nombre:'PAEZ MIGUEL SEBASTIAN',wsp:'543534250644'},
  {codigo:'V63',nombre:'MIRANDA MARIANA ROCIO',wsp:'543517346777'},
  {codigo:'V64',nombre:'GONZALEZ FRANCO MAXIMILIANO',wsp:'543513938427'},
  {codigo:'V65',nombre:'SANCHEZ JULIAN DAVID',wsp:'543516078259'},
];

const CHOFERES = [
  {id:'C1',  nombre:'GUZMAN DIEGO NORBERTO',         cel:'3515477459'},
  {id:'C2',  nombre:'CARO MAXIMILIANO ALBERTO',       cel:'3515149870'},
  {id:'C3',  nombre:'RICAPA PAREDES JOSE ANTONIO',    cel:'3515155580'},
  {id:'C4',  nombre:'AVALOS GOMEZ RODRIGO SEBASTIAN', cel:'3516352595'},
  {id:'C5',  nombre:'OYOLA GASTON AGUSTIN',           cel:'3517580862'},
  {id:'C6',  nombre:'LUJAN LUCAS',                    cel:'3518018476'},
  {id:'C7',  nombre:'JUAREZ LUIS ENRIQUE',            cel:'3515337280'},
  {id:'C8',  nombre:'MOLINA JORGE GABRIEL',           cel:'3512557899'},
  {id:'C9',  nombre:'RAFAELLI DIEGO DANIEL',          cel:'3515179964'},
  {id:'C10', nombre:'SUAREZ TOBIAS EMIR',             cel:'3518614649'},
  {id:'C251',nombre:'GONZALEZ CECILIA GUADALUPE',     cel:'3513584303'},
  {id:'C252',nombre:'BELEN EMILIANO AGUSTIN',         cel:'3513434601'},
  {id:'C253',nombre:'GUIRAO LUIS ANTONIO',            cel:'3512112002'},
  {id:'C254',nombre:'JUNCOS LUIS EZEQUIEL',           cel:'3516376540'},
  {id:'C255',nombre:'ROMANO RODRIGO ERNESTO',         cel:'3518506375'},
  {id:'C256',nombre:'IRIARTE MAURO ALEJANDRO',        cel:'3512078498'},
  {id:'C257',nombre:'CANELO PABLO FERNANDO',          cel:'3512082961'},
  {id:'C258',nombre:'NIETO GUSTAVO ATILIO',           cel:'3513997501'},
  {id:'C259',nombre:'GUEVARA ENRIQUE LEONARDO',       cel:'3513128665'},
  {id:'C260',nombre:'PALLOTI DUILIO',                 cel:'3513250393'},
  {id:'C261',nombre:'ROMANO MARTIN',                  cel:'3513906197'},
  {id:'C262',nombre:'TALAVERA ADRIAN ISMAEL',         cel:'3515085313'},
];

const MOTIVOS = [
  'Cerrado','Dirección incorrecta o insuficiente','Envases deteriorados o roto',
  'Error Administrativo - Refacturación','Error de Armado','No está el dueño',
  'No hizo pedido','Sin Dinero','Sin Stock','Zona peligrosa o camino malo',
];

const FLOWS = {
  calle:    ['chofer','foto','motivo','vendedor','envio'],
  deposito: ['chofer','foto','motivo','deposito-ok'],
};

let flow = '';
let stepIdx = 0;
let state = { chofer:null, motivo:'', obs:'', vendedor:null, fotoLocalUrl:null, fotoCldUrl:null };
let selectedMotivo = '';

function startFlow(tipo) {
  flow = tipo;
  stepIdx = 0;
  state = { chofer:null, motivo:'', obs:'', vendedor:null, fotoLocalUrl:null, fotoCldUrl:null };
  selectedMotivo = '';
  renderChoferes();
  goStep(0);
}

function goStep(idx) {
  stepIdx = idx;
  const step = FLOWS[flow][idx];
  show('s-' + step);
  renderProgress();
  if(step==='motivo')      renderMotivos();
  if(step==='vendedor')    renderVendedores('');
  if(step==='envio')       buildResumenCalle();
  if(step==='deposito-ok') buildResumenDeposito();
  window.scrollTo(0,0);
}

function nextStep() { goStep(stepIdx + 1); }
function prevStep() {
  if(stepIdx > 0) goStep(stepIdx - 1);
  else show('s-home');
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderProgress() {
  const steps = FLOWS[flow];
  const total = steps.length - 1;
  const isBlue = flow === 'deposito';
  ['chofer','foto','motivo','vendedor'].forEach(sc => {
    const el = document.getElementById('prog-' + sc);
    if(!el) return;
    let html = '';
    for(let i=0;i<total;i++){
      let cls = i<stepIdx?(isBlue?'done-b':'done'):i===stepIdx?(isBlue?'active-b':'active'):'';
      html += `<div class="progress-step ${cls}"></div>`;
    }
    el.innerHTML = html;
  });
}

function renderChoferes() {
  const sel = document.getElementById('sel-chofer');
  sel.innerHTML = '<option value="">— Seleccioná tu nombre —</option>';
  CHOFERES.forEach(c => {
    const o = document.createElement('option');
    o.value = c.id;
    o.textContent = `${c.id} — ${c.nombre}`;
    sel.appendChild(o);
  });
  document.getElementById('btn-chofer').disabled = true;
}

function checkChofer() {
  const v = document.getElementById('sel-chofer').value;
  document.getElementById('btn-chofer').disabled = !v;
  if(v) state.chofer = CHOFERES.find(c=>c.id===v);
}

async function onFoto(input) {
  const file = input.files[0];
  if(!file) return;
  state.fotoCldUrl = null;
  const reader = new FileReader();
  reader.onload = e => {
    state.fotoLocalUrl = e.target.result;
    document.getElementById('foto-preview').src = e.target.result;
    document.getElementById('foto-preview').style.display = 'block';
    document.getElementById('foto-label').textContent = 'Tocar para cambiar foto';
  };
  reader.readAsDataURL(file);
  setUploadStatus('uploading','Subiendo foto...');
  document.getElementById('btn-foto').disabled = true;
  try {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', CLD_PRESET);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLD_CLOUD}/image/upload`,{method:'POST',body:fd});
    const data = await res.json();
    if(data.secure_url){ state.fotoCldUrl=data.secure_url; setUploadStatus('success','✓ Foto subida correctamente'); }
    else throw new Error();
  } catch(e) { setUploadStatus('error','No se pudo subir — el reporte igual se envía'); }
  document.getElementById('btn-foto').disabled = false;
}

function setUploadStatus(type, msg) {
  const el = document.getElementById('upload-status');
  el.className = 'upload-status ' + type;
  el.querySelector('.spinner').style.display = type==='uploading'?'block':'none';
  document.getElementById('upload-msg').textContent = msg;
}

function renderMotivos() {
  const selClass = flow==='deposito'?'selected-b':'selected';
  document.getElementById('motivos-grid').innerHTML = MOTIVOS.map(m=>`
    <button class="motivo-btn ${selectedMotivo===m?selClass:''}" onclick="selectMotivo('${m}',this)">${m}</button>`).join('');
  document.getElementById('btn-motivo').disabled = !selectedMotivo && !document.getElementById('obs').value.trim();
}

function selectMotivo(m, btn) {
  selectedMotivo = m;
  const sc = flow==='deposito'?'selected-b':'selected';
  document.querySelectorAll('.motivo-btn').forEach(b=>b.classList.remove('selected','selected-b'));
  btn.classList.add(sc);
  document.getElementById('btn-motivo').disabled = false;
}

function checkMotivo() {
  document.getElementById('btn-motivo').disabled = !(selectedMotivo || document.getElementById('obs').value.trim());
}

function onMotivoNext() {
  state.motivo = selectedMotivo;
  state.obs = document.getElementById('obs').value.trim();
  nextStep();
}

function renderVendedores(q) {
  const list = document.getElementById('vendedor-list');
  const filtered = VENDEDORES.filter(v=>v.codigo.toLowerCase().includes(q.toLowerCase())||v.nombre.toLowerCase().includes(q.toLowerCase()));
  if(!filtered.length){list.innerHTML='<div style="padding:14px;text-align:center;font-size:13px;color:#aaa">Sin resultados</div>';return;}
  list.innerHTML = filtered.map(v=>`
    <div class="vendedor-item ${state.vendedor&&state.vendedor.codigo===v.codigo?'selected':''}" onclick="selectVendedor('${v.codigo}')">
      <div class="v-code">${v.codigo}</div>
      <div><div class="v-name">${v.nombre}</div><div class="v-sub">Vendedor</div></div>
    </div>`).join('');
}

function filterVendedores() { renderVendedores(document.getElementById('vendedor-search').value); }

function selectVendedor(codigo) {
  state.vendedor = VENDEDORES.find(v=>v.codigo===codigo);
  document.getElementById('btn-vendedor').disabled = false;
  renderVendedores(document.getElementById('vendedor-search').value);
}

function buildResumenCalle() {
  const fecha = new Date();
  const hora     = fecha.toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
  const fechaStr = fecha.toLocaleDateString('es-AR');

  // Link de respuesta para el vendedor
  const respParams = new URLSearchParams({
    chofer:   state.chofer.nombre,
    cel:      state.chofer.cel,
    motivo:   state.motivo,
    obs:      state.obs || '',
    fecha:    fechaStr,
    hora:     hora,
    foto:     state.fotoCldUrl || '',
    vendedor: state.vendedor.codigo + ' - ' + state.vendedor.nombre,
  });
  const respLink = RESPUESTA_URL + '?' + respParams.toString();

  const fotoLinea = state.fotoCldUrl ? `\n📸 Foto: ${state.fotoCldUrl}` : '';
  const obsLinea  = state.obs ? `\n📝 Obs: ${state.obs}` : '';

  const msg =
    `🚚 *RECHAZO DE ENTREGA*\n\n` +
    `👤 Chofer: ${state.chofer.id} - ${state.chofer.nombre}\n` +
    `🕐 ${fechaStr} ${hora}\n` +
    `👔 Vendedor: ${state.vendedor.codigo} - ${state.vendedor.nombre}\n\n` +
    `❌ Motivo: ${state.motivo}` +
    obsLinea + fotoLinea +
    `\n\n👉 *Respondé acá:* ${respLink}` +
    `\n\n_Tocá el link para gestionar el rechazo._`;

  document.getElementById('wsp-v').href = `https://wa.me/${state.vendedor.wsp}?text=${encodeURIComponent(msg)}`;

  const thumb = document.getElementById('foto-thumb');
  if(state.fotoLocalUrl){thumb.src=state.fotoLocalUrl;thumb.style.display='block';}

  document.getElementById('resumen-calle').innerHTML = `
    <div class="resumen-row"><span>Chofer</span><span>${state.chofer.id} — ${state.chofer.nombre}</span></div>
    <div class="resumen-row"><span>Vendedor</span><span>${state.vendedor.codigo} — ${state.vendedor.nombre}</span></div>
    <div class="resumen-row"><span>Motivo</span><span>${state.motivo}</span></div>
    ${state.obs?`<div class="resumen-row"><span>Obs.</span><span>${state.obs}</span></div>`:''}
    <div class="resumen-row"><span>Foto</span><span style="color:${state.fotoCldUrl?'#1D9E75':'#e24b4a'}">${state.fotoCldUrl?'✓ Subida':'Sin conexión'}</span></div>
    <div class="resumen-row"><span>Hora</span><span>${hora}</span></div>`;

  saveToSheets({
    tipo:'Rechazo Calle', fecha:fechaStr, hora,
    chofer:`${state.chofer.id} - ${state.chofer.nombre}`,
    vendedor:`${state.vendedor.codigo} - ${state.vendedor.nombre}`,
    motivo:state.motivo, observacion:state.obs||'', foto:state.fotoCldUrl||''
  }, 'calle');
}

function buildResumenDeposito() {
  const fecha = new Date();
  const hora     = fecha.toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
  const fechaStr = fecha.toLocaleDateString('es-AR');

  const thumb = document.getElementById('foto-thumb-dep');
  if(state.fotoLocalUrl){thumb.src=state.fotoLocalUrl;thumb.style.display='block';}

  document.getElementById('resumen-dep').innerHTML = `
    <div class="resumen-row"><span>Chofer</span><span>${state.chofer.id} — ${state.chofer.nombre}</span></div>
    <div class="resumen-row"><span>Motivo</span><span>${state.motivo}</span></div>
    ${state.obs?`<div class="resumen-row"><span>Obs.</span><span>${state.obs}</span></div>`:''}
    <div class="resumen-row"><span>Foto</span><span style="color:${state.fotoCldUrl?'#2563EB':'#e24b4a'}">${state.fotoCldUrl?'✓ Subida':'Sin conexión'}</span></div>
    <div class="resumen-row"><span>Hora</span><span>${hora}</span></div>`;

  saveToSheets({
    tipo:'Reclamo Deposito', fecha:fechaStr, hora,
    chofer:`${state.chofer.id} - ${state.chofer.nombre}`,
    vendedor:'', motivo:state.motivo, observacion:state.obs||'', foto:state.fotoCldUrl||''
  }, 'dep');
}

function saveToSheets(data, suffix) {
  const badgeEl = document.getElementById('sheets-badge-' + suffix);
  const msgEl   = document.getElementById('sheets-msg-'   + suffix);
  const params  = new URLSearchParams(data).toString();
  const img = new Image();
  img.onload = img.onerror = function() {
    if(badgeEl) badgeEl.className = 'sheets-badge ok';
    if(msgEl)   msgEl.textContent = '✓ Guardado en planilla';
  };
  img.src = SHEETS_URL + '?' + params;
  setTimeout(()=>{
    if(msgEl && msgEl.textContent==='Guardando en planilla...'){
      if(badgeEl) badgeEl.className='sheets-badge ok';
      if(msgEl)   msgEl.textContent='✓ Enviado a planilla';
    }
  }, 5000);
}

function resetApp() {
  state = {chofer:null,motivo:'',obs:'',vendedor:null,fotoLocalUrl:null,fotoCldUrl:null};
  selectedMotivo=''; flow=''; stepIdx=0;
  document.getElementById('sel-chofer').value='';
  document.getElementById('obs').value='';
  document.getElementById('vendedor-search').value='';
  document.getElementById('foto-preview').style.display='none';
  document.getElementById('foto-label').textContent='Tocar para sacar foto';
  document.getElementById('upload-status').className='upload-status';
  document.getElementById('foto-input').value='';
  show('s-home');
}
</script>
</body>
</html>
