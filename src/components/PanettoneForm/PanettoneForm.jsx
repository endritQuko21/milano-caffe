import { useState } from 'react';
import './PanettoneForm.css';

//const WHATSAPP_NUMBER = '34972612003';
//const EMAIL_ADDRESS   = 'milanocaffe2015@gmail.com';
const WHATSAPP_NUMBER = '642411299';
const EMAIL_ADDRESS   = 'endritquko@gmail.com';

const VARIETIES = [
  'Chocolate negro 70%',
  'Chocolate & Naranja',
  'Milka',
  'Fruta confitada tradicional',
];

const INITIAL = {
  nombre:    '',
  apellidos: '',
  correo:    '',
  movil:     '',
  variedad:  '',
  fecha:     '',
  comentario:'',
};

function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d.toISOString().split('T')[0];
}

function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

function buildWhatsApp(fields) {
  const msg = [
    `*MILANO CAFFÈ*`,
    `*Confirmación de pedido*`,
    `━━━━━━━━━━━━━━`,

    `⚠️ *Importante*`,
    `El pedido no queda confirmado hasta que nuestro equipo te contacte por WhatsApp.`,
    `Te avisaremos en cuanto esté validado.`,
    `━━━━━━━━━━━━━━`,

    `🧾 *Pedido*`,
    `🍰 Panettone artesanal`,
    `• Variedad: *${fields.variedad}*`,
    `• Recogida: *${formatDate(fields.fecha)}*`,
    `━━━━━━━━━━━━━━`,

    `👤 *Cliente*`,
    `${fields.nombre} ${fields.apellidos}`,
    `${fields.correo}`,
    `${fields.movil}`,

    fields.comentario && `━━━━━━━━━━━━━━`,
    fields.comentario && `📝 *Notas*`,
    fields.comentario && `${fields.comentario}`,

    `━━━━━━━━━━━━━━`,
    `🙏 *Gracias por tu pedido*`,
    `Te contactaremos en breve 🤍`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function buildMailto(fields) {
  const subject = `Pedido Panettone – ${fields.nombre} ${fields.apellidos}`;
  const body = [
    `Pedido de Panettone — Milano Caffè`,
    ``,
    `Nombre: ${fields.nombre} ${fields.apellidos}`,
    `Correo: ${fields.correo}`,
    `Móvil: ${fields.movil}`,
    `Variedad: ${fields.variedad}`,
    `Fecha de recogida: ${formatDate(fields.fecha)}`,
    fields.comentario ? `Comentario: ${fields.comentario}` : '',
  ].filter(Boolean).join('\n');

  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function PanettoneForm() {
  const [fields, setFields]   = useState(INITIAL);
  const [errors, setErrors]   = useState({});
  const [sent, setSent]       = useState(false);

  const set = (key) => (e) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  function validate() {
    const e = {};
    if (!fields.nombre.trim())    e.nombre    = 'Obligatorio';
    if (!fields.apellidos.trim()) e.apellidos = 'Obligatorio';
    if (!fields.correo.trim() || !/\S+@\S+\.\S+/.test(fields.correo))
                                  e.correo    = 'Email no válido';
    if (!fields.movil.trim())     e.movil     = 'Obligatorio';
    if (!fields.variedad)         e.variedad  = 'Selecciona una variedad';
    if (!fields.fecha)            e.fecha     = 'Selecciona una fecha';
    return e;
  }

  function handleSubmit(channel) {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});

    if (channel === 'whatsapp') {
      window.open(buildWhatsApp(fields), '_blank');
    } else {
      window.location.href = buildMailto(fields);
    }

    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <div className="pform">

      <div className="pform__header">
        <p className="pform__eyebrow">Pedido</p>
        <h3 className="pform__title">Reserva tu panettone</h3>
        <p className="pform__sub">
          Mínimo 7 días de antelación. Te confirmaremos el pedido
          por WhatsApp o email.
        </p>
      </div>

      <div className="pform__body">

        {/* Fila 1 */}
        <div className="pform__row">
          <div className={`pform__field${errors.nombre ? ' error' : ''}`}>
            <label className="pform__label">Nombre</label>
            <input
              className="pform__input"
              type="text"
              placeholder="María"
              value={fields.nombre}
              onChange={set('nombre')}
            />
            {errors.nombre && <span className="pform__error">{errors.nombre}</span>}
          </div>

          <div className={`pform__field${errors.apellidos ? ' error' : ''}`}>
            <label className="pform__label">Apellidos</label>
            <input
              className="pform__input"
              type="text"
              placeholder="García López"
              value={fields.apellidos}
              onChange={set('apellidos')}
            />
            {errors.apellidos && <span className="pform__error">{errors.apellidos}</span>}
          </div>
        </div>

        {/* Fila 2 */}
        <div className="pform__row">
          <div className={`pform__field${errors.correo ? ' error' : ''}`}>
            <label className="pform__label">Correo electrónico</label>
            <input
              className="pform__input"
              type="email"
              placeholder="maria@ejemplo.com"
              value={fields.correo}
              onChange={set('correo')}
            />
            {errors.correo && <span className="pform__error">{errors.correo}</span>}
          </div>

          <div className={`pform__field${errors.movil ? ' error' : ''}`}>
            <label className="pform__label">Móvil</label>
            <input
              className="pform__input"
              type="tel"
              placeholder="612 345 678"
              value={fields.movil}
              onChange={set('movil')}
            />
            {errors.movil && <span className="pform__error">{errors.movil}</span>}
          </div>
        </div>

        {/* Fila 3 */}
        <div className="pform__row">
          <div className={`pform__field${errors.variedad ? ' error' : ''}`}>
            <label className="pform__label">Tipo de panettone</label>
            <select
              className="pform__input pform__select"
              value={fields.variedad}
              onChange={set('variedad')}
            >
              <option value="">Selecciona una variedad…</option>
              {VARIETIES.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
            {errors.variedad && <span className="pform__error">{errors.variedad}</span>}
          </div>

          <div className={`pform__field${errors.fecha ? ' error' : ''}`}>
            <label className="pform__label">Fecha de recogida</label>
            <input
              className="pform__input"
              type="date"
              min={getMinDate()}
              value={fields.fecha}
              onChange={set('fecha')}
            />
            {errors.fecha && <span className="pform__error">{errors.fecha}</span>}
          </div>
        </div>

        {/* Comentario */}
        <div className="pform__field">
          <label className="pform__label">
            Comentario <span className="pform__optional">(opcional)</span>
          </label>
          <textarea
            className="pform__input pform__textarea"
            placeholder="Cantidad, alergias, indicaciones especiales…"
            rows={4}
            value={fields.comentario}
            onChange={set('comentario')}
          />
        </div>

        {/* Acciones */}
        <div className="pform__actions">
          <button
            type="button"
            className="pform__btn pform__btn--wa"
            onClick={() => handleSubmit('whatsapp')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar por WhatsApp
          </button>

          <button
            type="button"
            className="pform__btn pform__btn--mail"
            onClick={() => handleSubmit('mail')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Enviar por Email
          </button>
        </div>

        {sent && (
          <p className="pform__sent">
            ✓ Pedido enviado — te confirmamos en breve.
          </p>
        )}

      </div>
    </div>
  );
}

export default PanettoneForm;