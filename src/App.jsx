/* 
 * Version: 2.5.0 - Judith Designs Custom Style Premium 
 * Autor: DevMaster Architect
 * Ecosistema de colores: 
 *   - Rosa Pastel: #FCDCE7
 *   - Fucsia Vibrante: #F42B88
 *   - Morado Elegante: #7A4A87
 */

import React, { useState } from 'react';

const TRANSLATIONS = {
  es: {
    tagline1: "Moldes Limpios y Shakers 3D listos para cortar (SVG & Studio)",
    tagline2: "Papeles Digitales y Diseños Personalizados de Alta Resolución",
    headerSub: "🎨 DECORACIÓN PERSONALIZADA PARA FIESTAS 🎈",
    bio: "🎁 Diseños de plantilla fáciles de ensamblar",
    bio2: "✨ Celebra con estilo con nuestros productos únicos para tus celebraciones ✨",
    tutorialTitle: "¿No sabes cómo armar los moldes?",
    tutorialDesc: "Mira mis videos rápidos de armado en TikTok",
    tutorialBtn: "Ver Reels",
    selectShop: "Selecciona una de mis tiendas en Etsy",
    tabShop1: "✂️ Plantillas en Blanco",
    tabShop2: "🎨 Decoración personalizada para fiestas",
    couponTitle: "Cupón de Bienvenida",
    couponOffer: "Consigue un {discount} en tu orden",
    couponCopy: "Copiar",
    couponCopied: "¡Código {coupon} copiado! Úsalo en Etsy",
    catalogTitle: "Favoritos de la Semana",
    allCatalog: "Ver catálogo completo",
    downloadBtn: "Ver",
    compatTitle: "¿Qué formato de archivo necesitas?",
    compatDesc: "Nuestros moldes se adaptan a tu plotter de corte. Elige tu máquina de corte para recibir consejos útiles:",
    faqTitle: "Preguntas Frecuentes",
    footerText: "Diseñado con amor en el taller digital de Judith. Todas las descargas y transacciones directas se realizan bajo los protocolos de compra segura en Etsy.",
    shareProfile: "Compartir Perfil",
    shareCopied: "¡Enlace copiado para compartir!",
    digitalBadge: "Digital",
    easyAssemble: "Fácil Armado",
    bestSeller: "Más Vendido",
    shakerLayered: "Shaker Capas",
    customToOrder: "A Medida",
    instantDownload: "Descarga Instantánea",
    cricutTip: "✨ Usa el archivo SVG. En Cricut Design Space, recuerda cambiar las líneas de doblado internas a tipo 'Marcado' (Score) y adjuntarlas antes de cortar.",
    cameoFreeTip: "⚠️ Silhouette Studio (Versión Gratuita) NO abre SVGs directamente. Usa el archivo .STUDIO incluido en tu descarga.",
    cameoProTip: "✨ ¡Excelente! Silhouette Studio Designer/Business Edition soporta la importación directa de SVGs con un solo clic.",
    scanncutTip: "✨ Brother ScanNCut requiere archivos FCM o SVG limpios. Sube tu SVG directamente a CanvasWorkspace para enviarlo a cortar."
  },
  en: {
    tagline1: "Clean Templates & 3D Shakers ready to cut (SVG & Studio)",
    tagline2: "Digital Papers & High-Resolution Custom Designs",
    headerSub: "🎨 CUSTOM PARTY DECOR FOR PARTIES 🎈",
    bio: "🎁 Easy-to-assemble template designs",
    bio2: "✨ Celebrate in style with our unique products designed for your special occasions ✨",
    tutorialTitle: "Don't know how to assemble the templates?",
    tutorialDesc: "Watch my quick assembly videos on TikTok",
    tutorialBtn: "Watch Reels",
    selectShop: "Select one of my Etsy shops",
    tabShop1: "✂️ Blank Templates",
    tabShop2: "🎨 Custom Party Decor",
    couponTitle: "Welcome Coupon",
    couponOffer: "Get {discount} on your order",
    couponCopy: "Copy",
    couponCopied: "Code {coupon} copied! Use it on Etsy",
    catalogTitle: "Favorites of the Week",
    allCatalog: "See full catalog",
    downloadBtn: "Look",
    compatTitle: "Which file format do you need?",
    compatDesc: "Our templates adapt to your cutting machine. Select your machine to see helpful tips:",
    faqTitle: "Frequently Asked Questions",
    footerText: "Designed with love in Judith's digital workshop. All downloads and direct transactions are carried out under Etsy's secure purchase protocols.",
    shareProfile: "Share Profile",
    shareCopied: "Link copied to share!",
    digitalBadge: "Digital",
    easyAssemble: "Easy Assembly",
    bestSeller: "Best Seller",
    shakerLayered: "Layered Shaker",
    customToOrder: "Custom Made",
    instantDownload: "Instant Download",
    cricutTip: "✨ Use the SVG file. In Cricut Design Space, remember to change the internal score lines to 'Score' type and attach them before cutting.",
    cameoFreeTip: "⚠️ Silhouette Studio (Free Version) does NOT open SVGs directly. Use the .STUDIO file included in your download.",
    cameoProTip: "✨ Great! Silhouette Studio Designer/Business Edition supports direct SVG import with a single click.",
    scanncutTip: "✨ Brother ScanNCut requires FCM or clean SVG files. Upload your SVG directly to CanvasWorkspace to send it to cut."
  }
};

const Icons = {
  Etsy: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.1 2c-.8 0-2 .4-2.8.9-.6.4-.8.7-.9 1.1-.3-.1-.5-.2-.8-.2-1.3 0-2.4 1.1-2.4 2.5 0 .2 0 .4.1.6-.7-.5-1.5-.8-2.4-.8-2.2 0-3.9 1.8-3.9 4 0 .3 0 .5.1.8-.7-.5-1.6-.8-2.5-.8-2.5 0-4.4 2.1-4.4 4.6 0 .5.1 1 .2 1.4L1 18.2c-.3.4-.4.8-.4 1.2 0 1.4 1.1 2.6 2.5 2.6h15.7c2.3 0 4.2-1.9 4.2-4.2V4.2c0-1.2-.9-2.2-2.1-2.2zM8.4 18.3c-.6 0-1-.4-1-1v-2.7c0-.6.4-1 1-1s1 .4 1 1v2.7c0 .6-.4 1-1 1zm4.8 0c-.6 0-1-.4-1-1v-4.5c0-.6.4-1 1-1s1 .4 1 1v4.5c0 .6-.4 1-1 1zm4.8 0c-.6 0-1-.4-1-1v-6.3c0-.6.4-1 1-1s1 .4 1 1v6.3c0 .6-.4 1-1 1z" />
    </svg>
  ),
  Instagram: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
    </svg>
  ),
  TikTok: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.16.99 1.11 2.37 1.83 3.84 2.05v3.86c-1.78-.03-3.51-.74-4.83-1.95-.06-.05-.11-.1-.18-.17v6.62c.04 2.21-.86 4.38-2.46 5.9-1.8 1.76-4.38 2.53-6.84 2.06-2.5-.42-4.71-2.13-5.83-4.43-1.22-2.41-1.12-5.38.27-7.69 1.34-2.27 3.87-3.69 6.53-3.66.19 0 .38.01.57.03v3.9c-.89-.25-1.86-.09-2.61.43-.88.58-1.39 1.62-1.34 2.68.04 1.16.8 2.2 1.89 2.57 1.05.37 2.24.1 3.04-.63.63-.55.97-1.36.94-2.2V.02h.01z" />
    </svg>
  ),
  Pinterest: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.906 2.17-2.906 1.024 0 1.517.769 1.517 1.689 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.76-2.245 3.76-5.487 0-2.861-2.061-4.869-5.007-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.21-.174.25-.402.145-1.495-.694-2.427-2.875-2.427-4.625 0-3.771 2.74-7.235 7.901-7.235 4.148 0 7.37 2.957 7.37 6.901 0 4.124-2.599 7.44-6.208 7.44-1.213 0-2.353-.63-2.744-1.372l-.747 2.846c-.27 1.029-.999 2.319-1.487 3.111 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.367 11.988-11.987C24 5.367 18.633 0 12.017 0z" />
    </svg>
  ),
  Scissors: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="9.8" y1="8.5" x2="20" y2="18" />
      <line x1="9.8" y1="15.5" x2="20" y2="6" />
    </svg>
  ),
  Sparkles: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Star: ({ className = "w-4 h-4 text-pink-400" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Play: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  Check: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  ChevronDown: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
};

export default function App() {
  const [lang, setLang] = useState('es'); 
  const [activeShop, setActiveShop] = useState('shop1'); 
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [faqOpen, setFaqOpen] = useState({});
  const [selectedMachine, setSelectedMachine] = useState('');
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const t = (key) => TRANSLATIONS[lang][key] || key;

  const shop1Data = {
    name: "JudithDesignsArtShop",
    tagline: t('tagline1'),
    coupon: "JUDITHDIY10",
    discount: "10% OFF",
    etsyUrl: "https://www.etsy.com/shop/JudithDesignsArtShop",
    products: [
      {
        id: "p1",
        title: lang === 'es' ? "Molde Cajita Mini Nutella 25g" : "Mini Nutella 25g Box Template",
        price: "$3.55",
        tag: t('easyAssemble'),
        rating: 5,
        reviews: 32,
        bgGradient: "from-rose-100 to-pink-200",
        desc: lang === 'es' 
          ? "Plantilla en blanco compatible con Cricut y Cameo. Incluye video guía paso a paso para recortar y pegar."
          : "Blank SVG layout compatible with Cricut and Cameo. Includes step-by-step video guide for assembly."
      },
      {
        id: "p2",
        title: lang === 'es' ? "Cake Topper 3D de Bautizo / Comunión" : "3D Baptism / Communion Cake Topper",
        price: "$3.99",
        tag: t('shakerLayered'),
        rating: 4.8,
        reviews: 45,
        bgGradient: "from-purple-100 to-indigo-200",
        desc: lang === 'es'
          ? "Archivo digital por capas ideal para cartulinas y acetato. Perfecto para proyectos Shaker con lentejuelas."
          : "Layered digital cut file ideal for cardstock and acetate. Perfect for sequin Shaker projects."
      },
      {
        id: "p3",
        title: lang === 'es' ? "Molde de Tubo M&M's 1.77 oz" : "M&M's 1.77 oz Tube Box Template",
        price: "$4.20",
        tag: t('bestSeller'),
        rating: 5,
        reviews: 19,
        bgGradient: "from-teal-100 to-emerald-200",
        desc: lang === 'es'
          ? "Estructura autoarmable para souvenirs de cumpleaños infantiles. Ajuste exacto para dulces M&M."
          : "Self-assembling box template for children's birthdays. Exact fit for classic M&M candy tubes."
      }
    ]
  };

  const shop2Data = {
    name: "JudithDesignsArt",
    tagline: t('tagline2'),
    coupon: "JUDITHART15",
    discount: "15% OFF",
    etsyUrl: "https://www.etsy.com/shop/JudithDesignsArt",
    products: [
      {
        id: "p4",
        title: lang === 'es' ? "Set Papel Digital Navidad Pastel" : "Pastel Christmas Digital Paper Set",
        price: "$3.00",
        tag: "300 DPI JPG",
        rating: 5,
        reviews: 24,
        bgGradient: "from-amber-100 to-orange-200",
        desc: lang === 'es'
          ? "Patrones sin costuras (seamless) en tonos rosa y azul celeste. Ideal para cajas, fondos y sublimación."
          : "Seamless pattern papers in soft pink and blue tones. Ideal for paper packaging, backdrops, and sublimation."
      },
      {
        id: "p5",
        title: lang === 'es' ? "Papeles Digitales de Pascua / Conejito" : "Easter / Bunny Digital Background Pack",
        price: "$2.60",
        tag: t('instantDownload'),
        rating: 4.9,
        reviews: 18,
        bgGradient: "from-sky-100 to-blue-200",
        desc: lang === 'es'
          ? "Colección primaveral de papeles decorativos imprimibles. Alta definición para manualidades."
          : "Spring collection of printable scrapbooking background papers. High definition design."
      },
      {
        id: "p6",
        title: lang === 'es' ? "Custom Shaker Cake Topper Digital" : "Custom Digital Shaker Cake Topper Design",
        price: "$12.00",
        tag: t('customToOrder'),
        rating: 5,
        reviews: 12,
        bgGradient: "from-fuchsia-100 to-pink-200",
        desc: lang === 'es'
          ? "Diseño personalizado con el nombre, edad y temática que elijas. Archivo digital listo para tu plotter de corte."
          : "Personalized design featuring name, age, and theme. Ready-to-use digital file for your cutting machine."
      }
    ]
  };

  const activeShopData = activeShop === 'shop1' ? shop1Data : shop2Data;

  const copyToClipboard = (text, message) => {
    if (!text) {
      setToastMessage(message);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      setToastMessage(message);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Copy failed: ', err);
    }
    document.body.removeChild(tempInput);
  };

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const getCompatibilityMessage = () => {
    switch (selectedMachine) {
      case 'cricut':
        return t('cricutTip');
      case 'cameo_free':
        return t('cameoFreeTip');
      case 'cameo_pro':
        return t('cameoProTip');
      case 'scanncut':
        return t('scanncutTip');
      default:
        return lang === 'es' ? "Selecciona tu máquina para ver el formato recomendado." : "Select your machine to view the recommended format.";
    }
  };

  return (
    <div className="min-h-screen bg-[#FCDCE7] text-slate-800 font-sans antialiased selection:bg-pink-300 selection:text-slate-900 pb-10">
      
      {/* TOAST DE NOTIFICACIÓN GLOBAL */}
      {showToast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#F42B88] border border-pink-400 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-bounce max-w-[90%] text-center">
          <Icons.Check className="w-5 h-5 shrink-0" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* CONTENEDOR BIO-LINK MOBILE-FIRST SIN FONDO BLANCO */}
      <div className="max-w-md mx-auto bg-[#FCDCE7] min-h-screen shadow-2xl relative flex flex-col justify-between border-x border-[#F42B88]/10">
        
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* BARRA DE ACCIONES SUPERIOR: CAMBIO DE IDIOMA */}
          <div className="flex justify-end items-center pt-2">
            <div className="bg-white/80 backdrop-blur p-1 rounded-full border border-pink-100 flex items-center space-x-1 shadow-sm">
              <button
                onClick={() => {
                  setLang('es');
                  copyToClipboard('', 'Idioma cambiado a Español');
                }}
                className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${
                  lang === 'es' ? 'bg-[#F42B88] text-white shadow-sm' : 'text-[#7A4A87] hover:text-[#F42B88]'
                }`}
              >
                ESP
              </button>
              <button
                onClick={() => {
                  setLang('en');
                  copyToClipboard('', 'Language changed to English');
                }}
                className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${
                  lang === 'en' ? 'bg-[#F42B88] text-white shadow-sm' : 'text-[#7A4A87] hover:text-[#F42B88]'
                }`}
              >
                ENG
              </button>
            </div>
          </div>

          {/* CABECERA CON LOGOTIPO ADAPTATIVO "AS IS" (SIN RECORTES) */}
          <header className="text-center pt-2 pb-2 space-y-4">
            <div className="flex justify-center">
              <div className="relative inline-block max-w-[150px] mx-auto">
                {!imgError && (
                  <img 
                    src="Image JD.png" 
                    alt="Judith Designs" 
                    className={`w-full h-auto rounded-2xl shadow-sm transition-opacity duration-300 ${
                      imgLoaded ? 'opacity-100' : 'opacity-0 absolute'
                    }`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                  />
                )}
                {(!imgLoaded || imgError) && (
                  <div className="w-28 h-28 rounded-2xl bg-white flex flex-col items-center justify-center relative border border-pink-200 shadow-sm">
                    <span className="text-2xl font-serif font-black text-[#F42B88] tracking-tighter">JD</span>
                    <Icons.Sparkles className="w-4 h-4 text-[#7A4A87] absolute bottom-3" />
                  </div>
                )}
              </div>
            </div>

            {/* TEXTO EN FUCSIA VIBRANTE Y MORADO ELEGANTE */}
            <div className="space-y-1">
              <p className="text-xs text-[#F42B88] font-bold tracking-wider uppercase flex items-center justify-center gap-1">
                <span>{t('headerSub')}</span>
              </p>
              <p className="text-xs text-[#7A4A87] font-semibold max-w-xs mx-auto leading-relaxed">
                {t('bio')}
              </p>
              <p className="text-xs text-[#7A4A87] font-medium max-w-xs mx-auto leading-relaxed mt-1 italic">
                {t('bio2')}
              </p>
            </div>

            {/* BOTONES DE REDES SOCIALES CON FONDO BLANCO E ICONO MORADO */}
            <div className="flex justify-center gap-3 pt-1">
              <a href="https://instagram.com/judithdesigns.art" target="_blank" rel="noreferrer" aria-label="Instagram de Judith" className="p-2.5 bg-white hover:bg-pink-100 rounded-full text-[#7A4A87] hover:text-[#F42B88] transition-colors border border-pink-200 shadow-sm">
                <Icons.Instagram className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@judithdesigns.art" target="_blank" rel="noreferrer" aria-label="TikTok de Judith" className="p-2.5 bg-white hover:bg-purple-100 rounded-full text-[#7A4A87] hover:text-[#F42B88] transition-colors border border-purple-100 shadow-sm">
                <Icons.TikTok className="w-5 h-5" />
              </a>
              <a href="https://www.pinterest.com/JudithDesingsArts/?invite_code=fe67652a50ae40c29845f09396355dc7&sender=932456435256902320" target="_blank" rel="noreferrer" aria-label="Pinterest de Judith" className="p-2.5 bg-white hover:bg-sky-100 rounded-full text-[#7A4A87] hover:text-[#F42B88] transition-colors border border-sky-100 shadow-sm">
                <Icons.Pinterest className="w-5 h-5" />
              </a>
            </div>
          </header>

          {/* SECCIÓN VIDEOTUTORIALES DE ARMADO (FONDO LILA A ROSA PASTEL) */}
          <section className="bg-gradient-to-r from-purple-50/60 to-[#FCDCE7] p-3.5 rounded-2xl border border-pink-200/50 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-white rounded-xl text-[#F42B88] shadow-sm animate-pulse shrink-0">
                <Icons.Play className="w-4 h-4" />
              </span>
              <div className="text-left">
                <h3 className="text-xs font-bold text-slate-800">{t('tutorialTitle')}</h3>
                <p className="text-[10px] text-[#7A4A87] font-semibold">{t('tutorialDesc')}</p>
              </div>
            </div>
            <a 
              href="https://tiktok.com/@judithdesigns.art" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-white hover:bg-[#F42B88] text-[#F42B88] hover:text-white px-3.5 py-1.5 rounded-lg text-[10px] font-bold shadow-sm transition-all border border-pink-200 shrink-0"
            >
              {t('tutorialBtn')}
            </a>
          </section>

          {/* TABS DE LAS DOS TIENDAS DE ETSY */}
          <section className="space-y-3">
            <span className="block text-[10px] uppercase font-bold text-[#7A4A87] tracking-widest text-center">{t('selectShop')}</span>
            <div className="bg-white/80 p-1 rounded-2xl flex border border-pink-100">
              <button
                onClick={() => setActiveShop('shop1')}
                className={`flex-1 py-3 text-center rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeShop === 'shop1'
                    ? 'bg-white text-[#F42B88] shadow-md transform scale-[1.01] border border-pink-100'
                    : 'text-[#7A4A87] hover:text-slate-800'
                }`}
              >
                {t('tabShop1')}
              </button>
              <button
                onClick={() => setActiveShop('shop2')}
                className={`flex-1 py-3 text-center rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeShop === 'shop2'
                    ? 'bg-white text-[#7A4A87] shadow-md transform scale-[1.01] border border-pink-100'
                    : 'text-[#7A4A87] hover:text-slate-800'
                }`}
              >
                {t('tabShop2')}
              </button>
            </div>
          </section>

          {/* DETALLES DE LA TIENDA SELECCIONADA */}
          <section className="text-center bg-white/60 p-4 rounded-2xl border border-pink-100/50">
            <h2 className="text-md font-serif font-bold text-[#7A4A87] flex items-center justify-center gap-2">
              <Icons.Sparkles className="w-4 h-4 text-[#F42B88]" />
              {activeShopData.name}
            </h2>
            <p className="text-xs text-[#7A4A87] mt-1 leading-relaxed">
              {activeShopData.tagline}
            </p>
          </section>

          {/* CONTAINER DEL CUPÓN COPIABLE */}
          <section className="bg-white/80 p-4 rounded-2xl border border-pink-100 flex items-center justify-between shadow-sm">
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-[#F42B88] uppercase tracking-widest">{t('couponTitle')}</span>
              <p className="text-xs font-bold text-slate-700">{t('couponOffer').replace('{discount}', activeShopData.discount)}</p>
            </div>
            <button
              onClick={() => copyToClipboard(
                activeShopData.coupon, 
                t('couponCopied').replace('{coupon}', activeShopData.coupon)
              )}
              className="px-3.5 py-1.5 bg-[#F42B88] hover:bg-[#F42B88]/90 active:scale-95 text-white text-xs font-bold rounded-lg transition-transform flex items-center gap-1 shadow"
            >
              <span className="bg-white/20 px-1 rounded font-mono text-[10px]">{activeShopData.coupon}</span>
              <span>{t('couponCopy')}</span>
            </button>
          </section>

          {/* LISTADO DE PRODUCTOS DESTACADOS */}
          <section className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A4A87]">{t('catalogTitle')}</h3>
              <a
                href={activeShopData.etsyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#F42B88] hover:underline font-bold flex items-center gap-1"
              >
                {t('allCatalog')}
                <Icons.Etsy className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-4">
              {activeShopData.products.map((product) => (
                <div key={product.id} className="bg-white/80 border border-pink-100 rounded-2xl p-4 flex gap-4 transition-all hover:border-pink-300 hover:shadow-md group relative">
                  
                  {/* Caja de previsualización */}
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-br ${product.bgGradient} shrink-0 flex flex-col items-center justify-center relative overflow-hidden shadow-inner border border-slate-100`}>
                    <Icons.Sparkles className="w-8 h-8 text-white/50" />
                    <span className="absolute bottom-1 right-1 bg-white/80 backdrop-blur-sm text-[8px] px-1.5 py-0.5 rounded font-bold text-slate-700">
                      {t('digitalBadge')}
                    </span>
                  </div>

                  {/* Cuerpo del contenido del Producto */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-1 flex-wrap">
                        <span className="bg-pink-50 text-[#F42B88] text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          {product.tag}
                        </span>
                        <span className="text-xs font-extrabold text-[#7A4A87]">{product.price}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#F42B88] transition-colors leading-tight">
                        {product.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {product.desc}
                      </p>
                    </div>

                    {/* Calificación de Estrellas y Botón de Enlace */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 text-[10px] text-slate-600 font-bold">
                        <Icons.Star />
                        <span>{product.rating}</span>
                        <span className="text-slate-400 font-normal">({product.reviews})</span>
                      </div>
                      <a
                        href={activeShopData.etsyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 bg-white hover:bg-[#F42B88] border border-pink-200 hover:border-[#F42B88] text-slate-700 hover:text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                      >
                        {t('downloadBtn')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DETECTOR DE COMPATIBILIDAD DE SOFTWARE */}
          <section className="bg-white/60 border border-pink-200 rounded-2xl p-4 space-y-3">
            <h3 className="text-xs font-bold text-[#7A4A87] uppercase tracking-wider flex items-center gap-1">
              <Icons.Scissors className="w-4 h-4 text-[#F42B88]" />
              {t('compatTitle')}
            </h3>
            <p className="text-[11px] text-[#7A4A87] font-semibold leading-relaxed">
              {t('compatDesc')}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedMachine('cricut')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                  selectedMachine === 'cricut' ? 'bg-[#F42B88] text-white border-[#F42B88]' : 'bg-white border-pink-100 text-[#7A4A87]'
                }`}
              >
                Cricut
              </button>
              <button
                onClick={() => setSelectedMachine('cameo_free')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                  selectedMachine === 'cameo_free' ? 'bg-[#F42B88] text-white border-[#F42B88]' : 'bg-white border-pink-100 text-[#7A4A87]'
                }`}
              >
                Cameo (Studio Basic)
              </button>
              <button
                onClick={() => setSelectedMachine('cameo_pro')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                  selectedMachine === 'cameo_pro' ? 'bg-[#F42B88] text-white border-[#F42B88]' : 'bg-white border-pink-100 text-[#7A4A87]'
                }`}
              >
                Cameo Designer/Biz
              </button>
              <button
                onClick={() => setSelectedMachine('scanncut')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                  selectedMachine === 'scanncut' ? 'bg-[#F42B88] text-white border-[#F42B88]' : 'bg-white border-pink-100 text-[#7A4A87]'
                }`}
              >
                ScanNCut
              </button>
            </div>
            <div className="p-3 bg-white/80 rounded-xl border border-pink-100 text-[11px] text-[#7A4A87] font-semibold">
              {getCompatibilityMessage()}
            </div>
          </section>

          {/* BOTÓN CTA MAESTRO PARA VISITAR TIENDA DE ETSY DIRECTAMENTE */}
          <section className="pt-2">
            <a
              href={activeShopData.etsyUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#F42B88] hover:bg-[#F42B88]/90 text-white font-extrabold text-xs py-4 rounded-2xl shadow-lg shadow-pink-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <Icons.Etsy className="w-4 h-4" />
              {lang === 'es' ? 'Visitar Tienda Oficial en Etsy' : 'Visit Official Etsy Shop'}
            </a>
          </section>

          {/* SECCIÓN PREGUNTAS FRECUENTES (FAQs) */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A4A87] px-1">{t('faqTitle')}</h3>
            <div className="space-y-2">
              {[
                {
                  q_es: "¿Recibiré un producto físico?",
                  q_en: "Will I receive a physical product?",
                  a_es: "No, el 100% de nuestras colecciones de papeles digitales y moldes son ARCHIVOS DIGITALES para descarga instantánea. No se envía ningún paquete físico a tu domicilio.",
                  a_en: "No, 100% of our digital paper collections and templates are DIGITAL FILES for instant download. No physical package will be shipped to your address."
                },
                {
                  q_es: "¿Los archivos de cajitas vienen con tutorial?",
                  q_en: "Do the box templates include a tutorial?",
                  a_es: "¡Sí! Todos los moldes complejos tienen guías rápidas de ensamblaje en formato video. Puedes verlos buscando nuestra cuenta de Instagram y TikTok: @judithdesigns.art.",
                  a_en: "Yes! All complex templates include quick video assembly guides. You can watch them by searching our Instagram & TikTok accounts: @judithdesigns.art."
                },
                {
                  q_es: "¿Puedo usar los diseños para fines comerciales?",
                  q_en: "Can I use the designs for commercial purposes?",
                  a_es: "Puedes utilizarlos para uso comercial en formato físico (es decir, fabricar las cajitas físicas o toppers terminados y venderlos a tus clientes locales). Queda prohibida la reventa de los archivos digitales.",
                  a_en: "You can use them for physical commercial use (meaning, making and selling the physical boxes or toppers to your local clients). Reselling or redistributing the digital files is strictly prohibited."
                }
              ].map((faq, index) => {
                const question = lang === 'es' ? faq.q_es : faq.q_en;
                const answer = lang === 'es' ? faq.a_es : faq.a_en;
                return (
                  <div key={index} className="border border-pink-100 rounded-xl overflow-hidden bg-white/40">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-3 text-left flex justify-between items-center text-xs font-bold text-slate-700 hover:text-[#F42B88] transition-colors focus:outline-none"
                    >
                      <span>{question}</span>
                      <Icons.ChevronDown className={`w-4 h-4 transition-transform duration-200 ${faqOpen[index] ? 'rotate-180' : ''}`} />
                    </button>
                    {faqOpen[index] && (
                      <div className="p-3 pt-0 text-xs text-slate-500 leading-relaxed border-t border-pink-100 bg-white/80 animate-slideDown">
                        {answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* PIE DE PÁGINA */}
        <footer className="border-t border-pink-100 bg-white/20 p-6 text-center space-y-3">
          <p className="text-[10px] text-[#7A4A87] leading-relaxed">
            {t('footerText')}
          </p>
          <div className="flex justify-center gap-4 text-[10px] font-bold text-[#7A4A87]">
            <a href="#terminos" className="hover:text-[#F42B88]">{lang === 'es' ? 'Términos' : 'Terms'}</a>
            <span>•</span>
            <a href="#privacidad" className="hover:text-[#F42B88]">{lang === 'es' ? 'Privacidad' : 'Privacy'}</a>
            <span>•</span>
            <button
              onClick={() => copyToClipboard(window.location.href, t('shareCopied'))}
              className="hover:text-[#F42B88] flex items-center gap-1"
            >
              {t('shareProfile')}
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}