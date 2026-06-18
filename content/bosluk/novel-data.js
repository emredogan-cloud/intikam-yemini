/* ════════════════════════════════════════════════════════════════
   bosluk/novel-data.js
   SARMAŞIK · BOŞLUK — Kitap meta'sı ve hareket (akt) tanımları.

   Üçleme: SARMAŞIK  (I) NAZAR · (II) BOŞLUK · (III) KEFARET
   Bu dosya İKİNCİ KİTAP — BOŞLUK.

   Tür: yakın-gelecek siber-noir hayalet-gerilimi / dönüşüm hikâyesi.
   Çekirdek: silinen adam, her şeyi gören sistemin göremediği boşluğa
   dönüşür — ama dönüşümün her basamağı bir kayıptır, ve her zafer bir
   şeyi daha öldürür.
   Mekân: NAZAR'la aynı; İstanbul-dokulu, isimsiz 14 milyonluk sahil
   metropolü. Kitap içinde tarihlenmez. Deniable-ölüm imzası sürer.

   Görünürlük: görünmez → inkâr edilen (Aşama 1 → 2).
   Yetenek: hayatta kalan → karşı-gözetim hayaleti → operatör eşiği
   (Evre 2 → 3 → 4 eşiği). Asla doğuştan elit; her kazanım yaralı.
   ════════════════════════════════════════════════════════════════ */

window.SARMASIK = window.SARMASIK || {};
window.SARMASIK.entries = window.SARMASIK.entries || [];

/* ────────── HAREKETLER — Eşik + Beş Hareket ──────────
   NAZAR "Eşik + Dört Hareket" yaptı; BOŞLUK onu beşe genişletir
   (dönüşüm daha çok basamak ister). Hareketler sıralıdır, geri dönüş
   yoktur. Sırayı finalize.js belirler.

   Görsel sigil arkı: eksik kare → enkaz → kör nokta → negatif kafes →
   çatallanan iz → kapanan defter.
*/
window.SARMASIK.categories = [
    {
        id: "esik-ii",
        name: "Eşik",
        full: "Eşik",
        epoch: "Gelecek · tarihsiz",
        sigil: "⬚",
        accent: "#5fd0e2",
        description: "Her şeyi gören bir sistemin defterinde, çözülmeyen bir kayıt. Olması gereken yerde, insan biçiminde bir boşluk. Henüz kimse ona bir ad vermedi — ama kör noktalarda bir şey kımıldıyor."
    },
    {
        id: "enkaz",
        name: "Enkaz",
        full: "Birinci Hareket — Enkaz",
        epoch: "Silinmeden sonra; ilk aylar",
        sigil: "▨",
        accent: "#6b7785",
        description: "Silinen adamdan geriye kalan. Donuk hayatta kalma, ölü bölgeler, soğuk bir deftere dönüşen sayım. Sonra: sistemin bir başkasına, ailesine yaptığını yapmak üzere olduğunun sezilmesi — ve dayanılmaz bilgi."
    },
    {
        id: "kor-nokta",
        name: "Kör Nokta",
        full: "İkinci Hareket — Kör Nokta",
        epoch: "Aylar; uzun çıraklık",
        sigil: "◌",
        accent: "#4f7a86",
        description: "Yanmış bir adam, hayaleti olmadığı yeri okuyarak bulur. Acı veren, yavaş bir çıraklık: görünmeden yaşamanın grameri. Kaçmaktan eyleme geçiş kararı, ve bedeli."
    },
    {
        id: "negatif-uzay",
        name: "Negatif Uzay",
        full: "Üçüncü Hareket — Negatif Uzay",
        epoch: "Aylar; ilk edimler",
        sigil: "▢",
        accent: "#3f6470",
        description: "Yöntem kimliğe dönüşür. İlk müdahale, ilk anomali. Kerem kendi küçük panoptikonunu — NÖBETÇİ'yi — kurar. Ve bir operasyon bozulur; acemilik bir bedel ister, ödenir."
    },
    {
        id: "av",
        name: "Av",
        full: "Dördüncü Hareket — Av",
        epoch: "Adın doğuşu; kedi-fare",
        sigil: "⊚",
        accent: "#8a6f5f",
        description: "Sistem boşluğu adlandırır, ve adlandırma onu gerçek kılar. Kendisi gibi düşünen biri onu okumaya başlar. İlk gerçek darbe ışığa uzanır — ve ışığa uzanmak daima bir gölge düşürür."
    },
    {
        id: "defter",
        name: "Defter",
        full: "Beşinci Hareket — Defter",
        epoch: "Hesaplaşma; bedel",
        sigil: "▦",
        accent: "#9a5f6a",
        description: "Güvenilen şey zehirlenir. Yolun sonundaki ders mühürlenir; bir yaratıcı, yarattığı şeyi nihayet tanır. Boşluk daha yetkin, daha az insandır. Defter kapanır, ama hesap kapanmaz."
    }
];

window.SARMASIK.book = {
    title: "Boşluk",
    subtitle: "SARMAŞIK Üçlemesi — İkinci Kitap",
    series: "SARMAŞIK · II",
    edition: "İlk Tab' · MMXXVI",
    epigraph: "“Her şeyi gören bir gözden saklanmanın tek yolu, ona bakılacak bir şey bırakmamaktır. Ama geriye hiçbir şey bırakmayan, geriye kendinden de bir şey bırakmaz.”",
    backText: "Bir adam silindi, ve silinmek bir kapı oldu. Bu cilt, o kapıdan geçen şeyin ne yaptığını anlatır — ve her yaptığının ondan ne götürdüğünü. İçi boşalmış bir adam, kendisini yok eden makineyi yenmek için başka türden bir makineye dönüşür; ve dönüşümün her basamağında, geriye, insan olan bir şey biraz daha azalır.",
    epilogueText: "Burada Boşluk tükenir. Adsız adam artık bir ada sahip — düşmanın taktığı, inkâr edilen bir ad. İlk darbesini indirdi, ve aygıt yalnızca yaralandı, sonra kendini onardı; çünkü bir sarmaşığı kesmek onu öldürmez. Avcı, yarattığı şeyi nihayet tanıdı, ama söyleyemiyor. Ve bir telefonda, hâlâ açılmamış, bir kız kardeşin son sözü bekliyor. Üçüncü Kitap — KEFARET — bunun bedelinin nasıl ödendiğini anlatacak.",
    colophon: "Cormorant Garamond, EB Garamond, Marcellus ve IBM Plex Mono harfleriyle dizildi. SARMAŞIK Üçlemesi'nin ikinci kitabıdır. Boşluğun daima bir biçimi vardır; ve o biçim, oradan koparılan şeyin biçimidir."
};

window.SARMASIK.categoryById = function (id) {
    return window.SARMASIK.categories.find(c => c.id === id);
};
