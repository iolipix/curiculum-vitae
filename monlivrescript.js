const translations = {
    fr: {
        name: "Pit, l'Héritage Perdu",
        profession: "Bientôt disponible (visuel temporaire)",
        intro: "Lien Achat",
        nav: {
            law: "Droit",
            programmation: "Programmation",
            langues: "Langues",
            aviation: "Aviation",
            passions: "Passions",
            smma: "SMMA",
            book: "Mon Livre"
        },
        footer: {
            mailLabel: "Mail",
            quickLinks: "Liens Rapides",
            location: "Localisation",
            locationText: "La Rochelle, France",
            contact: "Contact",
            linkedin: "LinkedIn",
            copyright: "© 2025 Théophane Maurey. Tous droits réservés."
        }
    },
    en: {
        name: "Pit, The Lost Legacy",
        profession: "Coming soon (temporary visual)",
        intro: "Purchase Link",
        nav: {
            law: "Law",
            programmation: "Programming",
            langues: "Languages",
            aviation: "Aviation",
            passions: "Passions",
            smma: "SMMA",
            book: "My Book"
        },
        footer: {
            mailLabel: "Mail",
            quickLinks: "Quick Links",
            location: "Location",
            locationText: "La Rochelle, France",
            contact: "Contact",
            linkedin: "LinkedIn",
            copyright: "© 2025 Théophane Maurey. All rights reserved."
        }
    },
    es: {
        name: "Pit, El Legado Perdido",
        profession: "Próximamente (imagen temporal)",
        intro: "Enlace de Compra",
        nav: {
            law: "Derecho",
            programmation: "Programación",
            langues: "Idiomas",
            aviation: "Aviación",
            passions: "Pasiones",
            smma: "SMMA",
            book: "Mi Libro"
        },
        footer: {
            mailLabel: "Correo",
            quickLinks: "Enlaces Rápidos",
            location: "Ubicación",
            locationText: "La Rochelle, Francia",
            contact: "Contacto",
            linkedin: "LinkedIn",
            copyright: "© 2025 Théophane Maurey. Todos los derechos reservados."
        }
    },
    jp: {
        name: "ピット：失われた遺産",
        profession: "近日公開（仮のビジュアル）",
        intro: "購入リンク",
        nav: {
            law: "法律",
            programmation: "プログラミング",
            langues: "言語",
            aviation: "航空",
            passions: "趣味",
            smma: "メディア管理",
            book: "私の本"
        },
        footer: {
            mailLabel: "メール",
            quickLinks: "クイックリンク",
            location: "所在地",
            locationText: "ラ・ロシェル、フランス",
            contact: "連絡先",
            linkedin: "LinkedIn",
            copyright: "© 2025 テオファン・モレ. 全著作権所有."
        }
    }
};

function changeLanguage() {
    const selectedLang = document.getElementById("language-select").value;
    const elements = {
        name: document.getElementById("name"),
        profession: document.getElementById("profession"),
        intro: document.getElementById("intro"),
        nav: {
            law: document.getElementById("law-link"),
            programmation: document.getElementById("programmation-link"),
            langues: document.getElementById("langues-link"),
            aviation: document.getElementById("aviation-link"),
            passions: document.getElementById("passions-link"),
            smma: document.getElementById("smma-link"),
            book: document.getElementById("book-link")
        },
        footer: {
            mailLabel: document.getElementById("mail-label"),
            quickLinks: document.getElementById("quick-links-label"),
            location: document.getElementById("location-label"),
            locationText: document.getElementById("location-text"),
            contact: document.getElementById("contact-link"),
            linkedin: document.getElementById("linkedin-link"),
            copyright: document.querySelector(".footer-copyright")
        }
    };

    if (translations[selectedLang]) {
        elements.name.textContent = translations[selectedLang].name;
        elements.profession.textContent = translations[selectedLang].profession;
        elements.intro.textContent = translations[selectedLang].intro;

        Object.keys(elements.nav).forEach(key => {
            elements.nav[key].textContent = translations[selectedLang].nav[key];
        });

        elements.footer.mailLabel.textContent = translations[selectedLang].footer.mailLabel;
        elements.footer.quickLinks.textContent = translations[selectedLang].footer.quickLinks;
        elements.footer.location.textContent = translations[selectedLang].footer.location;
        elements.footer.locationText.textContent = translations[selectedLang].footer.locationText;
        elements.footer.contact.textContent = translations[selectedLang].footer.contact;
        elements.footer.linkedin.textContent = translations[selectedLang].footer.linkedin;
        elements.footer.copyright.textContent = translations[selectedLang].footer.copyright;
    }
}



// Gestion du menu burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelectorAll('nav ul li a');

// Afficher ou cacher le menu burger
burger.addEventListener('click', (e) => {
    nav.classList.toggle('active'); // Affiche ou cache le menu
    burger.classList.toggle('active'); // Change l'apparence du bouton burger
    e.stopPropagation(); // Empêche le clic de se propager et de déclencher l'événement du document
});

// Fermer le menu lorsque l'utilisateur clique sur un lien dans le menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Fermer le menu si l'utilisateur clique sur la croix
closeMenu.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('active');
});

// Fermer le menu si l'utilisateur clique en dehors du menu burger
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
});



