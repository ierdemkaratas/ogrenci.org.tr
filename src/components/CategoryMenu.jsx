import React, { useState } from 'react';

const categoriesData = [
    {
        main: { name: "Kadın", icon: "👩‍🦳", link: "#" },
        subCategories: [
            {
                title: "Giyim",
                items: ["Elbise", "Tişört", "Gömlek", "Günlük Ayakkabı", "Kot Pantolon", "Kot Ceket", "Pantolon", "Mont", "Bluz", "Ceket", "Etek", "Kazak", "Tesettür", "Büyük Beden", "Trençkot", "Yağmurluk & Rüzgarlık", "Sweatshirt", "Kaban", "Hırka", "Palto"]
            },
            {
                title: "Ayakkabı",
                items: ["Topuklu Ayakkabı", "Sneaker", "Günlük Ayakkabı", "Babet", "Sandalet", "Bot", "Çizme", "Kar Botu", "Loafer"]
            },
            {
                title: "Çanta",
                items: ["Omuz Çantası", "Sırt Çantası", "Bel Çantası", "Okul Çantası", "Laptop Çantası", "Portföy", "Postacı Çantası", "El Çantası", "Kanvas Çanta", "Makyaj Çantası", "Abiye Çanta", "Çapraz Çanta", "Bez Çanta", "Anne Bebek Çantası", "Evrak Çantası", "Tote Çanta", "Beslenme Çantası", "Kartlık", "Cüzdan", "Kadın Spor Çantası"]
            },
            {
                title: "Ev & İç Giyim",
                items: ["Pijama Takımı", "Gecelik", "Sütyen", "İç Çamaşırı Takımları", "Fantezi Giyim", "Çorap", "Korse", "Külot", "Büstiyer", "Bralet", "Atlet & Body", "Kombinezon", "Jartiyer"]
            },
            {
                title: "Kozmetik",
                items: ["Parfüm", "Göz Makyajı", "Cilt Bakım", "Saç Bakımı", "Makyaj", "Ağız Bakım", "Cinsel Sağlık", "Vücut Bakım", "Hijyenik Ped", "Duş Jeli & Kremleri", "Epilasyon Ürünleri", "Ruj", "Dudak Nemlendirici", "Aydınlatıcı & Highlighter", "Eyeliner", "Ten Makyajı", "Manikür & Pedikür", "BB & CC Krem", "El Kremi", "Yüz Nemlendirici"]
            },
            {
                title: "Spor & Outdoor",
                items: ["Sweatshirt", "Tişört", "Spor Sütyeni", "Tayt", "Eşofman", "Koşu Ayakkabısı", "Spor Çorap", "Spor Ekipmanları", "Outdoor Ayakkabı", "Kar Botu", "Outdoor Ekipmanları", "Sporcu Besinleri", "Sporcu Aksesuarları", "Outdoor Çanta", "Kayak Malzemeleri", "Uyku Tulumu", "Mat", "Dağcılık", "Kadın Spor Ceket", "Spor Ayakkabı"]
            }
        ]
    },
    {
        main: { name: "Erkek", icon: "👨‍🦳", link: "#" },
        subCategories: [
            { title: "Giyim", items: ["Tişört", "Gömlek", "Pantolon", "Ceket", "Jean"] },
            { title: "Ayakkabı", items: ["Sneaker", "Bot", "Klasik Ayakkabı"] },
            { title: "Aksesuar", items: ["Saat", "Cüzdan", "Kemer"] },
            { title: "Spor & Outdoor", items: ["Eşofman", "Şort", "Spor Ayakkabı"] }
        ]
    },
    {
        main: { name: "Anne & Çocuk", icon: "👶", link: "#" },
        subCategories: [
            { title: "Bebek Giyim", items: ["Zıbın", "Body", "Pijama"] },
            { title: "Çocuk Giyim", items: ["Elbise", "Tişört", "Pantolon"] },
            { title: "Bebek Bakım", items: ["Bebek Bezi", "Islak Mendil", "Şampuan"] }
        ]
    },
    {
        main: { name: "Ev & Yaşam", icon: "🏠", link: "#" },
        subCategories: [
            { title: "Mutfak", items: ["Tencere", "Tava", "Bardak"] },
            { title: "Dekorasyon", items: ["Tablo", "Vazo", "Ayna"] },
            { title: "Banyo", items: ["Havlu", "Sabunluk", "Duş Perdesi"] }
        ]
    },
    {
        main: { name: "Süpermarket", icon: "🛒", link: "#" },
        subCategories: [
            { title: "Gıda", items: ["Bakliyat", "Makarna", "Yağ"] },
            { title: "İçecek", items: ["Su", "Meyve Suyu", "Soda"] },
            { title: "Temizlik", items: ["Deterjan", "Yumuşatıcı", "Yüzey Temizleyici"] }
        ]
    },
    {
        main: { name: "Kozmetik", icon: "💅", link: "#" },
        subCategories: [
            { title: "Makyaj", items: ["Ruj", "Fondöten", "Maskara"] },
            { title: "Cilt Bakımı", items: ["Nemlendirici", "Serum", "Maske"] },
            { title: "Saç Bakımı", items: ["Şampuan", "Saç Kremi", "Saç Maskesi"] }
        ]
    },
    {
        main: { name: "Ayakkabı & Çanta", icon: "👟", link: "#" },
        subCategories: [
            { title: "Ayakkabı", items: ["Sneaker", "Bot", "Sandalet"] },
            { title: "Çanta", items: ["Sırt Çantası", "Omuz Çantası", "Cüzdan"] },
        ]
    },
    {
        main: { name: "Elektronik", icon: "📱", link: "#" },
        subCategories: [
            { title: "Telefon", items: ["Akıllı Telefon", "Aksesuar", "Kılıf"] },
            { title: "Bilgisayar", items: ["Laptop", "Masaüstü", "Tablet"] },
            { title: "Ev Elektroniği", items: ["Televizyon", "Buzdolabı", "Çamaşır Makinesi"] }
        ]
    },
    {
        main: { name: "Spor & Outdoor", icon: "🚴", link: "#" },
        subCategories: [
            { title: "Spor Giyim", items: ["Tişört", "Şort", "Tayt"] },
            { title: "Ekipman", items: ["Dumbbell", "Yoga Matı", "Bisiklet"] },
            { title: "Outdoor", items: ["Kamp Malzemeleri", "Yürüyüş Ayakkabısı", "Termos"] }
        ]
    },
    {
        main: { name: "Kitap, Kırtasiye & Hobi", icon: "📚", link: "#" },
        subCategories: [
            { title: "Kitap", items: ["Roman", "Edebiyat", "Bilim Kurgu"] },
            { title: "Kırtasiye", items: ["Defter", "Kalem", "Silgi"] },
            { title: "Hobi", items: ["Resim Malzemeleri", "Müzik Aletleri", "Oyun"] }
        ]
    }
    // Diğer kategorileri buraya ekleyebilirsiniz...
];

const CategoryMenu = () => {
    const [activeMainCategory, setActiveMainCategory] = useState(categoriesData[0].main.name);

    // Aktif ana kategoriye göre alt kategorileri bul
    const activeCategory = categoriesData.find(cat => cat.main.name === activeMainCategory);

    return (
        <div className="bg-white border border-gray-200 rounded-md shadow-lg flex max-w-7xl mx-auto" style={{ width: '100vw', maxWidth: '1280px' }}> {/* Genişliği ayarla */}
            {/* Sol Menü (Ana Kategoriler) */}
            <div className="w-1/5 border-r border-gray-200 py-4 px-2">
                {categoriesData.map((category) => (
                    <a
                        key={category.main.name}
                        href={category.main.link}
                        className={`flex items-center p-2 rounded-md hover:bg-gray-100 ${activeMainCategory === category.main.name ? 'bg-gray-100 text-blue-600 font-semibold' : 'text-gray-700'
                            }`}
                        onMouseEnter={() => setActiveMainCategory(category.main.name)}
                    >
                        {/* İkon için şimdilik text kullanıldı, gerçek uygulamada SVG veya ikon kütüphanesi kullanın */}
                        <span className="mr-2 text-xl">{category.main.icon}</span>
                        <span>{category.main.name}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-auto text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                ))}
            </div>

            {/* Sağ Menü (Alt Kategoriler) */}
            <div className="w-4/5 p-4 flex flex-wrap">
                {activeCategory && activeCategory.subCategories.map((subCategory, index) => (
                    <div key={index} className="w-1/3 mb-6 pr-4"> {/* Her bir alt kategori sütunu için */}
                        <h3 className="font-semibold text-gray-800 mb-2">{subCategory.title}</h3>
                        <ul className="space-y-1">
                            {subCategory.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryMenu;