// =========================================================
// Judith Designs Bio Link - v2.8.0 - Dynamic Product Images
// Optimized for Instagram/TikTok mobile viewports in 2026.
// Keeps selected Option 3 Cushion style for Logo.
// Implements an intelligent image-loading fallback decision system 
// for the "Favorites of the week" cards.
// =========================================================

import React, { useState, useEffect } from 'react';

// --- ENLACES OFICIALES ---
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/judithdesigns.art/",
  tiktok: "https://www.tiktok.com/@judithdesigns.art",
  pinterest: "https://www.pinterest.com/JudithDesingsArts/",
  etsyMain: "https://www.etsy.com/shop/JudithDesignsArtShop",
  etsyShop1: "https://www.etsy.com/shop/JudithDesignsArtShop",
  etsyShop2: "https://www.etsy.com/shop/JudithDesignsArt"
};

// --- DICCIONARIO BILINGÜE COMPLETO ---
const TRANSLATIONS = {
  es: {
    headerSub: "🎨 DECORACIÓN PERSONALIZADA PARA FIESTAS 🎈",
    headerLine1: "🎁 Diseños de plantilla fáciles de ensamblar",
    headerLine2: "✨ Celebra con estilo con nuestros productos únicos para tus celebraciones ✨",
    selectStoreTitle: "SELECCIONA UNA DE MIS TIENDAS EN ETSY",
    templatesTitle: "Plantillas en Blanco",
    decorTitle: "Decoración personalizada para fiestas",
    
    // Tienda 1: Blank Templates
    shop1Name: "JudithDesignsArtShop",
    shop1Desc: "Moldes Limpios y Shakers 3D listos para cortar (SVG & Studio)",
    
    // Tienda 2: Custom Decor
    shop2Name: "JudithDesignsArt",
    shop2Desc: "Papeles Digitales y Diseños Personalizados de Alta Resolución",

    howToBuild: "¿No sabes cómo armar los moldes?",
    howToBuildSub: "Mira mis videos rápidos de armado en TikTok",
    viewReels: "Ver Reels",
    couponTitle: "🎁 Cupón de Descuento Especial 🎁",
    couponSubtitle: "¡Copia el código y úsalo en tu carrito de Etsy para obtener un 10% de descuento adicional!",
    copiedMessage: "¡Código copiado al portapapeles! 💖",
    favoritesTitle: "⭐ Favoritos de la Semana ⭐",
    favoritesSubtitle: "Las plantillas digitales más vendidas de nuestro taller",
    viewProduct: "Ver en Etsy",
    digitalBadge: "DIGITAL",
    plotterTitle: "¿Qué formato de archivo necesitas?",
    plotterSubtitle: "Selecciona tu máquina de corte para recibir consejos técnicos e indicaciones precisas:",
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Resolvemos tus dudas sobre el uso de archivos digitales",
    faqItems: [
      {
        q: "¿Qué formatos recibo al comprar un archivo?",
        a: "Recibirás una carpeta ZIP descargable inmediatamente después del pago que incluye formatos SVG, PDF, PNG y DXF, perfectamente limpios para corte manual o digital."
      },
      {
        q: "¿Los moldes incluyen instrucciones de armado?",
        a: "¡Sí! Todos los moldes complejos vienen acompañados de guías visuales paso a paso en formato PDF y enlaces a video-tutoriales explicativos."
      },
      {
        q: "¿Puedo usar los diseños para venta comercial?",
        a: "Nuestras plantillas están permitidas para la producción de proyectos físicos comerciales a pequeña escala. Está prohibida la reventa de los archivos digitales en sí."
      }
    ],
    plotterTips: {
      cricut: "💡 ¡Usa archivos **.SVG**! Cricut Design Space los escala perfectamente de forma nativa. Agrupa tus líneas de score (marcado) y cámbialas de 'Cut' a 'Score' antes de procesar.",
      cameobasic: "💡 Como usas la edición básica de Silhouette Studio (gratuita), debes usar archivos **.DXF**. Asegúrate de habilitar 'Autocentrante' en la configuración para que el molde se alinee.",
      cameopro: "💡 ¡Soporte completo para **.SVG**! Abre el archivo directamente en Silhouette Studio. Conserva capas, tamaños reales y líneas de marcado precisas sin configuraciones extra.",
      scanncut: "💡 Brother ScanNCut requiere formatos **.FCM** o **.SVG**. Te recomendamos cargar el archivo .SVG en Brother CanvasWorkspace (web o desktop) para transferirlo por Wifi de forma limpia."
    },
    footerCredits: "Diseñado con amor por Judith Designs © 2026"
  },
  en: {
    headerSub: "🎨 CUSTOM PARTY DECORATIONS 🎈",
    headerLine1: "🎁 Easy-to-assemble design templates",
    headerLine2: "✨ Celebrate in style with our unique products for your celebrations ✨",
    selectStoreTitle: "SELECT ONE OF MY ETSY SHOPS",
    templatesTitle: "Blank Templates",
    decorTitle: "Custom Party Decor",
    
    // Shop 1: Blank Templates
    shop1Name: "JudithDesignsArtShop",
    shop1Desc: "Clean templates and 3D Shakers ready to cut (SVG & Studio)",
    
    // Shop 2: Custom Decor
    shop2Name: "JudithDesignsArt",
    shop2Desc: "Digital Papers & High Resolution Custom Designs",

    howToBuild: "Don't know how to assemble the templates?",
    howToBuildSub: "Watch my quick tutorial videos on TikTok",
    viewReels: "Watch Reels",
    couponTitle: "🎁 Special Discount Coupon 🎁",
    couponSubtitle: "Copy this code and use it on your Etsy cart for an extra 10% discount!",
    copiedMessage: "Code copied to clipboard! 💖",
    favoritesTitle: "⭐ Weekly Favorites ⭐",
    favoritesSubtitle: "The top-selling digital patterns from our creative workshop",
    viewProduct: "View on Etsy",
    digitalBadge: "DIGITAL",
    plotterTitle: "Which file format do you need?",
    plotterSubtitle: "Select your cutting machine to receive technical advice and recommended extensions:",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "We solve your doubts about using digital cutting files",
    faqItems: [
      {
        q: "What file formats do I receive upon purchase?",
        a: "You will receive an instant downloadable ZIP folder containing SVG, PDF, PNG, and DXF files, completely optimized for manual or digital cutting."
      },
      {
        q: "Do the templates include assembly guides?",
        a: "Yes! All complex templates include step-by-step visual assembly PDF guides and direct links to video tutorials."
      },
      {
        q: "Can I use these designs for commercial use?",
        a: "Our templates are approved for small-scale physical commercial production. Reselling the digital files is strictly prohibited."
      }
    ],
    plotterTips: {
      cricut: "💡 Use **.SVG** files! Cricut Design Space scales them perfectly natively. Group your score lines and change them from 'Cut' to 'Score' before processing your mat.",
      cameobasic: "💡 Since you are using Silhouette Studio Basic Edition (free), you must import **.DXF** files. Make sure 'Auto-Center' is enabled in settings for perfect alignment.",
      cameopro: "💡 Full **.SVG** support! Open the file directly in Silhouette Studio Designer/Business. It preserves layer hierarchy, real sizes, and score lines flawlessly.",
      scanncut: "💡 Brother ScanNCut requires **.FCM** or **.SVG** formats. We suggest uploading the .SVG file to Brother CanvasWorkspace to transfer it cleanly via Wifi."
    },
    footerCredits: "Designed with love by Judith Designs © 2026"
  }
};

// --- MOCK PRODUCTOS DESTACADOS: TIENDA 1 (BLANK TEMPLATES) ---
// Puedes agregar nombres de imágenes en la propiedad 'image'. Si el archivo existe en 'public', se cargará.
// Si lo dejas como "" (vacío), cargará automáticamente el diseño "blank" de degradado y emoji.
const FAVORITES_BLANK_SHOP = [
  {
    id: 1,
    titleEs: "Plantilla de Caja Mini Nutella",
    titleEn: "Mini Nutella Box Template",
    price: "$3.55",
    tagsEs: ["Fácil Armado", "Shaker"],
    tagsEn: ["Easy Build", "Shaker"],
    rating: 5,
    gradient: "from-pink-400 to-indigo-300",
    emoji: "🌸",
    image: "Plantilla Nutella.jpg", // Nombre del archivo en la carpeta public
    link: "http://bit.ly/4fs1YXm"
  },
  {
    id: 2,
    titleEs: "Plantilla Kinder Egg",
    titleEn: "Kinder egg holder template",
    price: "$4.00",
    tagsEs: ["Corte Limpio", "Regalos"],
    tagsEn: ["Clean Cut", "Gift Ideas"],
    rating: 5,
    gradient: "from-rose-300 to-purple-400",
    emoji: "🎁",
    image: "Plantilla Kinder.jpg", // Si no existe en la carpeta public, se convertirá automáticamente en blank
    link: "https://shorturl.at/E7Mim"
  },
  {
    id: 3,
    titleEs: "Plantilla Caja de Actividades",
    titleEn: "Activity Box Template",
    price: "$6.00",
    tagsEs: ["Multicapas", "SVG Premium"],
    tagsEn: ["Multilayer", "Premium SVG"],
    rating: 5,
    gradient: "from-fuchsia-400 to-amber-200",
    emoji: "🌈",
    image: "Plantilla Activity Box.jpg", // Vacío para forzar estilo blank de inmediato
    link: "https://shorturl.at/xBWhD"
  }
];

// --- MOCK PRODUCTOS DESTACADOS: TIENDA 2 (CUSTOM PARTY DECOR) ---
const FAVORITES_CUSTOM_SHOP = [
  {
    id: 4,
    titleEs: "Caja de Dulces Personalizada",
    titleEn: "Personalized Treat Box",
    price: "$42.00",
    tagsEs: ["Personalizado", "Completo"],
    tagsEn: ["Customized", "Full Set"],
    rating: 5,
    gradient: "from-purple-300 to-pink-300",
    emoji: "🦄",
    image: "Caja blancas.jpg",
    link: "https://shorturl.at/OYTaL"
  },
  {
    id: 5,
    titleEs: "Adorno Personalizado para Pastel de 48 cumpleaños",
    titleEn: "Personalized 48th Birthday Cake Topper",
    price: "$28.97",
    tagsEs: ["Papeles", "Decoración de cartulina 3D"],
    tagsEn: ["Backgrounds", "3D Cardstock Decoration"],
    rating: 5,
    gradient: "from-cyan-300 to-fuchsia-300",
    emoji: "🖼️",
    image: "Plantilla Cake.jpg",
    link: "https://shorturl.at/oGRxB"
  },
  {
    id: 6,
    titleEs: "Diseño de Banderín Editable Floral",
    titleEn: "Custom Birthday Cake Topper",
    price: "$18.97",
    tagsEs: ["3 Estilos Unicos", "Decoración de cartulina hecha a mano"],
    tagsEn: ["3 Unique Styles", "Handmade Cardstock Decoration"],
    rating: 5,
    gradient: "from-rose-300 to-amber-100",
    emoji: "🌺",
    image: "Custom Cake topper portada .jpg",
    link: "https://shorturl.at/ycGb5"
  }
];

export default function App() {
  const [lang, setLang] = useState('es');
  const [activeTab, setActiveTab] = useState('blank'); // 'blank' o 'custom'
  const [selectedPlotter, setSelectedPlotter] = useState('cricut');
  const [openFaq, setOpenFaq] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  // Registro de errores para las imágenes de productos individuales
  const [failedProdImages, setFailedProdImages] = useState({});

  const t = (key) => TRANSLATIONS[lang][key] || key;

  // Selecciona la lista de favoritos correcta según la tienda activa
  const currentFavorites = activeTab === 'blank' ? FAVORITES_BLANK_SHOP : FAVORITES_CUSTOM_SHOP;

  // Registra si la imagen de un producto específico falló al cargar
  const handleProductImgError = (prodId) => {
    setFailedProdImages((prev) => ({
      ...prev,
      [prodId]: true
    }));
  };

  // Acción para copiar cupón
  const handleCopyCoupon = () => {
    const input = document.createElement('input');
    input.setAttribute('value', 'JUDITHDIY10');
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-[#FCDCE7] font-sans text-[#7A4A87] selection:bg-[#F42B88] selection:text-white pb-12">
      
      {/* CAPA DE MICROESTRELLAS VECTORIALES DE FONDO */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="15%" r="2" fill="#F42B88" />
          <circle cx="85%" cy="8%" r="3" fill="#7A4A87" />
          <circle cx="90%" cy="40%" r="2" fill="#F42B88" />
          <circle cx="5%" cy="60%" r="4" fill="#7A4A87" />
          <circle cx="95%" cy="85%" r="3" fill="#F42B88" />
        </svg>
      </div>

      {/* CONTENEDOR ENMASCARADO MÓVIL (MOBILE-FIRST) */}
      <div className="max-w-md mx-auto px-4 pt-4 relative z-10">

        {/* SELECTOR DE IDIOMA FLOTANTE CON INTERRUPTOR DE 2 POSICIONES */}
        <div className="flex justify-end mb-4">
          <div className="bg-white/80 border border-[#FCDCE7] p-1 rounded-full shadow-sm flex items-center relative gap-1">
            <button
              onClick={() => setLang('es')}
              className={`text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-full transition-all duration-300 ${
                lang === 'es' ? 'bg-[#F42B88] text-white shadow' : 'text-[#7A4A87] hover:bg-[#FCDCE7]/50'
              }`}
            >
              ESP
            </button>
            <button
              onClick={() => setLang('en')}
              className={`text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-full transition-all duration-300 ${
                lang === 'en' ? 'bg-[#F42B88] text-white shadow' : 'text-[#7A4A87] hover:bg-[#FCDCE7]/50'
              }`}
            >
              ENG
            </button>
          </div>
        </div>

        {/* HEADER DE CABECERA CON LOGOTIPO DE MARCA EN FORMATO CUSHION */}
        <header className="flex flex-col items-center justify-center text-center mb-6">
          <div className="relative mb-4">
            {/* OPCIÓN 3 SELECCIONADA EN EL CANVAS: DOBLE ANILLO CUSHION DE LUJO */}
            <div className="w-28 h-28 bg-[#FCDCE7] rounded-3xl p-1.5 ring-2 ring-white ring-offset-2 ring-offset-[#FCDCE7] shadow-md flex items-center justify-center overflow-hidden">
              {!imgError ? (
                <img 
                  src="Image JD.png" 
                  alt="Judith Designs Logo" 
                  className="w-full h-full object-contain rounded-2xl"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#fff1f2] to-[#fdf2f8] flex items-center justify-center">
                  <span className="text-[#F42B88] text-3xl font-extrabold font-serif">JD</span>
                </div>
              )}
            </div>
          </div>

          {/* DESCRIPCIÓN DE CABECERA */}
          <div className="space-y-1.5 px-2">
            <h2 className="text-xs font-bold tracking-wide text-[#F42B88] uppercase">
              {t('headerSub')}
            </h2>
            <p className="text-[11px] font-bold text-[#7A4A87]">
              {t('headerLine1')}
            </p>
            <p className="text-[10px] italic text-[#7A4A87] leading-relaxed max-w-[280px] mx-auto">
              {t('headerLine2')}
            </p>
          </div>
        </header>

        {/* REDES SOCIALES ULTRA-DINÁMICAS E INTERACTIVAS */}
        <div className="flex justify-center items-center gap-5 mb-8">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white border border-[#FCDCE7] flex items-center justify-center shadow-sm text-[#7A4A87] transition-all duration-500 ease-out transform hover:scale-125 hover:-rotate-6 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-pink-500/20 active:scale-95"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white border border-[#FCDCE7] flex items-center justify-center shadow-sm text-[#7A4A87] transition-all duration-500 ease-out transform hover:scale-125 hover:rotate-6 hover:bg-[#010101] hover:text-white hover:border-transparent hover:shadow-[3px_3px_0px_#00f2fe,-3px_-3px_0px_#fe0979] active:scale-95"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.92-1.88 2.63-5.5 3.49-8.32 2.02-2.5-1.28-3.96-4.14-3.55-6.93.3-2.14 1.74-4.06 3.82-4.68 1.12-.34 2.33-.31 3.47.05v4.07c-.77-.3-1.6-.39-2.4-.24-1.21.22-2.22 1.15-2.5 2.34-.41 1.67.63 3.46 2.3 3.84 1.21.28 2.56-.2 3.14-1.25.32-.57.42-1.22.42-1.87V.02h2.52z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.pinterest}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white border border-[#FCDCE7] flex items-center justify-center shadow-sm text-[#7A4A87] transition-all duration-500 ease-out transform hover:scale-125 hover:-translate-y-1 hover:bg-[#E60023] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-red-600/30 active:scale-95"
            aria-label="Pinterest"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.948-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.907 2.17-2.907 1.025 0 1.517.769 1.517 1.686 0 1.029-.654 2.57-1.001 4.001-.284 1.196.598 2.172 1.771 2.172 2.131 0 3.774-2.247 3.774-5.486 0-2.87-2.061-4.881-5.024-4.881-3.416 0-5.421 2.563-5.421 5.211 0 1.031.395 2.139.89 2.74.098.119.112.224.083.345-.091.378-.293 1.189-.332 1.346-.051.211-.17.257-.393.153-1.465-.681-2.378-2.822-2.378-4.545 0-3.699 2.69-7.099 7.751-7.099 4.061 0 7.217 2.894 7.217 6.76 0 4.032-2.54 7.279-6.07 7.279-1.185 0-2.3-.615-2.681-1.343l-.731 2.782c-.263 1.011-.974 2.277-1.45 3.053 1.063.328 2.19.507 3.355.507 6.621 0 11.988-5.366 11.988-11.987C23.999 5.367 18.636 0 12.017 0z" />
            </svg>
          </a>
        </div>

        {/* CONTENEDOR CENTRAL: COHESIÓN Y GLASSMORPHISM PREMIUM */}
        <div className="bg-white/75 backdrop-blur-xl border border-[#FCDCE7] rounded-3xl p-5 shadow-[0_12px_40px_rgba(244,63,94,0.03)] mb-6 space-y-6">

          {/* BANNER DE SOPORTE DE VIDEO (TIKTOK / REELS) */}
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50/70 to-pink-50/70 rounded-2xl border border-pink-100 hover:border-[#F42B88] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-pink-200 flex items-center justify-center text-lg shadow-sm group-hover:rotate-12 transition-transform duration-300">
                🎬
              </span>
              <div>
                <h3 className="text-xs font-bold text-[#7A4A87] group-hover:text-[#F42B88] transition-colors">
                  {t('howToBuild')}
                </h3>
                <p className="text-[10px] text-[#7A4A87]/80">
                  {t('howToBuildSub')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-[#FCDCE7] rounded-lg px-2.5 py-1 text-[10px] font-bold text-[#F42B88] shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#F42B88] rounded-full animate-ping" />
              {t('viewReels')}
            </div>
          </a>

          {/* SECTOR DE TIENDAS EN ETSY CON CONTROL DE ESTADO EXCLUSIVO */}
          <div className="space-y-3.5">
            <h3 className="text-[10px] font-black tracking-widest text-[#7A4A87] text-center uppercase">
              {t('selectStoreTitle')}
            </h3>

            {/* Selector de pestañas */}
            <div className="bg-[#fff1f2]/70 p-1 rounded-2xl border border-pink-100/60 grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setActiveTab('blank')}
                className={`p-3 rounded-xl text-[11px] font-extrabold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 ${
                  activeTab === 'blank'
                    ? 'bg-white border-2 border-[#F42B88] text-[#F42B88] shadow-sm scale-102'
                    : 'bg-transparent border-transparent text-[#7A4A87] hover:bg-white/40'
                }`}
              >
                <span>✂️</span> {t('templatesTitle')}
              </button>

              <button
                onClick={() => setActiveTab('custom')}
                className={`p-3 rounded-xl text-[11px] font-extrabold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 ${
                  activeTab === 'custom'
                    ? 'bg-white border-2 border-[#F42B88] text-[#F42B88] shadow-sm scale-102'
                    : 'bg-transparent border-transparent text-[#7A4A87] hover:bg-white/40'
                }`}
              >
                <span>🎨</span> {t('decorTitle')}
              </button>
            </div>

            {/* BOTÓN CTA MAESTRO COMPLETAMENTE DINÁMICO (Cambia según pestaña seleccionada) */}
            <a
              href={activeTab === 'blank' ? SOCIAL_LINKS.etsyShop1 : SOCIAL_LINKS.etsyShop2}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full group overflow-hidden rounded-2xl border border-pink-100 shadow-sm"
            >
              {/* Resplandor trasero interactivo */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 group-hover:from-pink-100 group-hover:to-purple-100 transition-all duration-300" />
              
              <div className="relative w-full bg-white p-5 text-center flex flex-col items-center justify-center hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="text-[#F42B88] text-sm animate-pulse">✨</span>
                  <span className="text-[14px] font-black text-[#7A4A87] tracking-tight group-hover:text-[#F42B88] transition-colors">
                    {activeTab === 'blank' ? t('shop1Name') : t('shop2Name')}
                  </span>
                  <span className="text-[#F42B88] text-sm animate-pulse">✨</span>
                </div>
                <p className="text-[10px] text-[#7A4A87]/90 font-medium tracking-wide leading-relaxed px-4">
                  {activeTab === 'blank' ? t('shop1Desc') : t('shop2Desc')}
                </p>
              </div>
            </a>
          </div>

          {/* SECCIÓN INTERACTIVA DE CUPÓN CON COPIADO EN PORTAPAPELES */}
          <div className="p-4 bg-gradient-to-br from-pink-50/40 to-purple-50/40 rounded-2xl border border-pink-100 text-center relative">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-[#F42B88] mb-1 flex items-center justify-center gap-1">
              {t('couponTitle')}
            </h4>
            <p className="text-[9px] text-[#7A4A87]/90 leading-relaxed mb-3">
              {t('couponSubtitle')}
            </p>
            <button
              onClick={handleCopyCoupon}
              className="w-full py-2.5 bg-white border-2 border-dashed border-[#F42B88] hover:border-[#7A4A87] text-[#F42B88] hover:text-[#7A4A87] rounded-xl font-mono text-xs font-extrabold tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
            >
              <span>🎟️</span>
              <span className="bg-pink-100/60 px-2 py-0.5 rounded text-[11px]">JUDITHDIY10</span>
              <span className="text-[10px] font-sans opacity-75">(10% OFF)</span>
            </button>
          </div>

          {/* INTERACTIVE SELECTOR FOR PLOTTERS */}
          <div className="bg-white border border-[#FCDCE7] rounded-2xl p-4 space-y-3.5">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-widest text-[#F42B88] mb-1">
                {t('plotterTitle')}
              </h4>
              <p className="text-[9px] text-[#7A4A87] leading-relaxed">
                {t('plotterSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'cricut', name: 'Cricut' },
                { id: 'cameobasic', name: 'Cameo (Basic)' },
                { id: 'cameopro', name: 'Cameo (Designer)' },
                { id: 'scanncut', name: 'ScanNCut' }
              ].map((plotter) => (
                <button
                  key={plotter.id}
                  onClick={() => setSelectedPlotter(plotter.id)}
                  className={`py-2.5 px-1 text-[10px] font-bold rounded-xl border transition-all duration-300 ${
                    selectedPlotter === plotter.id
                      ? 'bg-gradient-to-r from-pink-100 to-purple-100 border-[#F42B88] text-[#F42B88] shadow-inner scale-[0.98]'
                      : 'bg-slate-50 border-slate-200 text-[#7A4A87] hover:bg-pink-50/50 hover:border-[#FCDCE7]'
                  }`}
                >
                  {plotter.name}
                </button>
              ))}
            </div>

            {selectedPlotter && (
              <div className="p-3 bg-[#fff5f6] border border-pink-100 rounded-xl text-[10px] text-[#7A4A87] leading-relaxed animate-fadeIn">
                <p dangerouslySetInnerHTML={{
                  __html: t('plotterTips')[selectedPlotter]
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F42B88] font-bold">$1</strong>')
                }} />
              </div>
            )}
          </div>

          {/* FAVORITOS DE LA SEMANA TOTALMENTE DINÁMICOS CON CARGA DE IMAGEN O BLANK INTEGRADO */}
          <div className="space-y-3">
            <div className="text-center">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-[#F42B88]">
                {t('favoritesTitle')}
              </h4>
              <p className="text-[9px] text-[#7A4A87] opacity-80">
                {t('favoritesSubtitle')}
              </p>
            </div>

            <div className="space-y-3">
              {currentFavorites.map((prod) => {
                // Una imagen se considera válida si tiene una ruta definida y NO ha fallado su carga
                const hasValidImage = prod.image && !failedProdImages[prod.id];

                return (
                  <a
                    key={prod.id}
                    href={prod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2.5 bg-white border border-pink-100 hover:border-[#F42B88] rounded-2xl shadow-sm hover:scale-[1.01] transition-all duration-300 group"
                  >
                    {/* CONTENEDOR MULTI-DECISIÓN: RENDERIZA IMAGEN O BLANK (DEGRADADO + EMOJI) */}
                    <div className={`w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl relative shadow-inner overflow-hidden border border-pink-100/50 ${
                      hasValidImage ? 'bg-white' : `bg-gradient-to-tr ${prod.gradient}`
                    }`}>
                      {hasValidImage ? (
                        <img 
                          src={prod.image} 
                          alt={lang === 'es' ? prod.titleEs : prod.titleEn} 
                          className="w-full h-full object-cover rounded-xl"
                          onError={() => handleProductImgError(prod.id)}
                        />
                      ) : (
                        <span>{prod.emoji}</span>
                      )}
                      
                    {/* Insignia Digital Flotante */}
                      {activeTab === 'blank' && (
                      <span className="absolute top-1 left-1 bg-white/95 text-[7px] px-1 font-black rounded text-[#F42B88] uppercase shadow-sm tracking-wide">
                        {t('digitalBadge')}
                      </span>
                    )}
                    </div>

                    <div className="flex-1 ml-3 min-w-0">
                      <div className="flex gap-1 mb-1">
                        {(lang === 'es' ? prod.tagsEs : prod.tagsEn).map((tag, i) => (
                          <span key={i} className="text-[7px] font-bold bg-pink-50 border border-pink-200 text-[#F42B88] px-1 py-0.2 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h5 className="text-[10px] font-extrabold text-[#7A4A87] truncate group-hover:text-[#F42B88] transition-colors">
                        {lang === 'es' ? prod.titleEs : prod.titleEn}
                      </h5>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {Array.from({ length: prod.rating }).map((_, i) => (
                          <span key={i} className="text-[9px]">⭐</span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right ml-2 flex flex-col items-end">
                      <span className="text-[11px] font-black text-[#F42B88] mb-1">{prod.price}</span>
                      <span className="text-[8px] bg-[#7A4A87] text-white px-2 py-1 rounded-lg font-black uppercase group-hover:bg-[#F42B88] transition-colors shadow-sm">
                        {t('viewProduct')}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ) */}
          <div className="space-y-2 pt-2 border-t border-pink-100">
            <div className="text-center">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-[#7A4A87]">
                {t('faqTitle')}
              </h4>
              <p className="text-[9px] text-[#7A4A87]/80 mb-3">
                {t('faqSubtitle')}
              </p>
            </div>

            <div className="space-y-2">
              {t('faqItems').map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-[#FCDCE7] rounded-xl bg-white/50 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-3 flex items-center justify-between text-left text-[10px] font-bold text-[#7A4A87] hover:text-[#F42B88] transition-colors focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <svg
                        className={`w-3.5 h-3.5 text-[#F42B88] transition-transform duration-300 transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-24 p-3 bg-white/80 border-t border-[#FCDCE7]' : 'max-h-0'
                      }`}
                    >
                      <p className="text-[9px] text-[#7A4A87] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* NOTIFICACIÓN TOAST INTELIGENTE */}
        {showToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#7A4A87] text-white px-5 py-2.5 rounded-full text-[10px] font-bold tracking-wider shadow-lg flex items-center gap-2 border border-pink-400 animate-slideUp">
            <span>💖</span>
            {t('copiedMessage')}
          </div>
        )}

        {/* FOOTER GENERAL */}
        <footer className="text-center py-4 text-[9px] text-[#7A4A87]/60 font-semibold uppercase tracking-wider">
          <p>{t('footerCredits')}</p>
        </footer>

      </div>
    </div>
  );
}