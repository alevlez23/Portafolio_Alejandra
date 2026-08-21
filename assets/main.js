/* =========================================================
   PORTAFOLIO ALEJANDRA
   JAVASCRIPT PRINCIPAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MENÚ RESPONSIVE
  ======================================================= */

  const navToggle =
    document.getElementById("nav-toggle");

  const navLinks =
    document.getElementById("nav-links");


  /**
   * Cierra el menú móvil.
   */
  const closeMenu = () => {

    if (!navToggle || !navLinks) {
      return;
    }

    navLinks.classList.remove("open");

    navToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    navToggle.setAttribute(
      "aria-label",
      "Abrir menú de navegación"
    );


    const icon =
      navToggle.querySelector("i");


    if (icon) {

      icon.classList.remove(
        "fa-xmark"
      );

      icon.classList.add(
        "fa-bars"
      );

    }

  };


  /**
   * Abre o cierra el menú.
   */
  const toggleMenu = () => {

    if (!navToggle || !navLinks) {
      return;
    }


    const isOpen =
      navLinks.classList.toggle(
        "open"
      );


    navToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );


    navToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Cerrar menú de navegación"
        : "Abrir menú de navegación"
    );


    const icon =
      navToggle.querySelector("i");


    if (icon) {

      icon.classList.toggle(
        "fa-bars",
        !isOpen
      );

      icon.classList.toggle(
        "fa-xmark",
        isOpen
      );

    }

  };


  /* Activar botón */

  if (navToggle && navLinks) {

    navToggle.addEventListener(
      "click",
      toggleMenu
    );


    /* Cerrar menú al seleccionar una página */

    const links =
      navLinks.querySelectorAll("a");


    links.forEach((link) => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


    /* Cerrar con Escape */

    document.addEventListener(
      "keydown",
      (event) => {

        if (event.key === "Escape") {

          closeMenu();

        }

      }
    );


    /* Cerrar si la pantalla vuelve a escritorio */

    window.addEventListener(
      "resize",
      () => {

        if (window.innerWidth > 760) {

          closeMenu();

        }

      }
    );

  }


  /* =======================================================
     AÑO AUTOMÁTICO DEL FOOTER
  ======================================================= */

  const yearElements =
    document.querySelectorAll(
      "#current-year"
    );


  const currentYear =
    new Date().getFullYear();


  yearElements.forEach(
    (element) => {

      element.textContent =
        currentYear;

    }
  );


  /* =======================================================
     FORMULARIO DE CONTACTO
  ======================================================= */

  const contactForm =
    document.getElementById(
      "contact-form"
    );

  const formStatus =
    document.getElementById(
      "form-status"
    );


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      (event) => {

        /* Evita envío a un servidor */

        event.preventDefault();


        /* ===============================================
           VALIDAR CAMPOS
        =============================================== */

        if (!contactForm.checkValidity()) {

          contactForm.reportValidity();


          if (formStatus) {

            formStatus.textContent =
              "Completa correctamente todos los campos antes de continuar.";

            formStatus.style.color =
              "#ff9b9b";

          }


          return;

        }


        /* ===============================================
           LEER DATOS
        =============================================== */

        const nombre =
          document
            .getElementById("nombre")
            ?.value
            .trim();

        const email =
          document
            .getElementById("email")
            ?.value
            .trim();

        const asunto =
          document
            .getElementById("asunto")
            ?.value
            .trim();

        const mensaje =
          document
            .getElementById("mensaje")
            ?.value
            .trim();


        /* ===============================================
           VERIFICACIÓN ADICIONAL
        =============================================== */

        if (
          !nombre ||
          !email ||
          !asunto ||
          !mensaje
        ) {

          if (formStatus) {

            formStatus.textContent =
              "Todos los campos son obligatorios.";

            formStatus.style.color =
              "#ff9b9b";

          }


          return;

        }


        /* ===============================================
           FORMULARIO DE DEMOSTRACIÓN
        =============================================== */

        if (formStatus) {

          formStatus.textContent =
            `Gracias, ${nombre}. El formulario fue validado correctamente. Esta versión del portafolio es una demostración y no envía ni almacena tus datos.`;

          formStatus.style.color =
            "#53e6a5";

        }


        /*
         * Limpiamos el formulario porque
         * los datos no serán enviados.
         */

        contactForm.reset();

      }
    );

  }


  /* =======================================================
     ENLACES EXTERNOS
  ======================================================= */

  const externalLinks =
    document.querySelectorAll(
      'a[target="_blank"]'
    );


  externalLinks.forEach((link) => {

    /*
     * Refuerzo de seguridad para enlaces
     * que se abren en otra pestaña.
     */

    const rel =
      link.getAttribute("rel") || "";


    const values =
      new Set(
        rel
          .split(" ")
          .filter(Boolean)
      );


    values.add("noopener");
    values.add("noreferrer");


    link.setAttribute(
      "rel",
      Array.from(values).join(" ")
    );

  });

});
