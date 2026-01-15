const translations = {
    fr: {
        contactTitle: "Contactez-moi",
        contactIntro: "Si vous avez des questions ou souhaitez me contacter, n'hésitez pas à remplir ce formulaire.",
        nameLabel: "Nom :",
        emailLabel: "Email :",
        subjectLabel: "Sujet :",
        messageLabel: "Message :",
        sendButton: "Envoyer",
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
        contactTitle: "Contact Me",
        contactIntro: "If you have any questions or wish to contact me, please fill out this form.",
        nameLabel: "Name:",
        emailLabel: "Email:",
        subjectLabel: "Subject:",
        messageLabel: "Message:",
        sendButton: "Send",
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
        contactTitle: "Contáctame",
        contactIntro: "Si tienes alguna pregunta o deseas contactarme, completa este formulario.",
        nameLabel: "Nombre:",
        emailLabel: "Correo Electrónico:",
        subjectLabel: "Asunto:",
        messageLabel: "Mensaje:",
        sendButton: "Enviar",
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
        contactTitle: "お問い合わせ",
        contactIntro: "ご質問やお問い合わせがある場合は、このフォームにご記入ください。",
        nameLabel: "名前：",
        emailLabel: "メール：",
        subjectLabel: "件名：",
        messageLabel: "メッセージ：",
        sendButton: "送信",
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

    if (translations[selectedLang]) {
        // Contact Section
        document.querySelector(".content h2").textContent = translations[selectedLang].contactTitle;
        document.querySelector(".content p").textContent = translations[selectedLang].contactIntro;
        document.querySelector("label[for='name']").textContent = translations[selectedLang].nameLabel;
        document.querySelector("label[for='email']").textContent = translations[selectedLang].emailLabel;
        document.querySelector("label[for='subject']").textContent = translations[selectedLang].subjectLabel;
        document.querySelector("label[for='message']").textContent = translations[selectedLang].messageLabel;
        document.querySelector(".submit-btn").textContent = translations[selectedLang].sendButton;

        // Navigation
        document.getElementById("law-link").textContent = translations[selectedLang].nav.law;
        document.getElementById("programmation-link").textContent = translations[selectedLang].nav.programmation;
        document.getElementById("langues-link").textContent = translations[selectedLang].nav.langues;
        document.getElementById("aviation-link").textContent = translations[selectedLang].nav.aviation;
        document.getElementById("passions-link").textContent = translations[selectedLang].nav.passions;
        document.getElementById("smma-link").textContent = translations[selectedLang].nav.smma;
        document.getElementById("book-link").textContent = translations[selectedLang].nav.book;

        // Footer
        document.getElementById("mail-label").textContent = translations[selectedLang].footer.mailLabel;
        document.getElementById("quick-links-label").textContent = translations[selectedLang].footer.quickLinks;
        document.getElementById("location-label").textContent = translations[selectedLang].footer.location;
        document.getElementById("location-text").textContent = translations[selectedLang].footer.locationText;
        document.getElementById("contact-link").textContent = translations[selectedLang].footer.contact;
        document.getElementById("linkedin-link").textContent = translations[selectedLang].footer.linkedin;
        document.querySelector(".footer-copyright").textContent = translations[selectedLang].footer.copyright;
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



