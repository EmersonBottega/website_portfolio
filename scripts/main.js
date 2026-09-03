const translations = {
  pt_br: {
    page_title: "Emerson Bottega | Software Developer",
    hero: {
      eyebrow: "SOFTWARE DEVELOPER · FULLSTACK",
      title: "Olá, eu sou Emerson.",
      description:
        "Desenvolvedor de software com experiência em aplicações web, Ruby on Rails, JavaScript e cloud. Gosto de entender sistemas de ponta a ponta e transformar desafios complexos em soluções confiáveis.",
      primary_action: "Vamos conversar ↗",
      resume_action: "Baixar currículo",
    },
    navigation: {
      label: "Navegação principal",
      experience: "Experiência",
      skills: "Skills",
      education: "Formação",
      contact: "Contato",
    },
    accessibility: {
      skip_link: "Pular para o conteúdo",
      professional_links: "Links profissionais",
    },
    about: {
      title: "Sobre mim",
      lead: "Minha trajetória combina backend, frontend, DevSecOps e computação em nuvem — uma visão ampla do ciclo de vida de aplicações web.",
      body: "Atuo com desenvolvimento e manutenção de sistemas em produção, integração com bancos de dados, otimização de consultas, monitoramento e processamento assíncrono. Estou em busca de equipes que valorizem qualidade de software, inovação, autonomia e aprendizado contínuo.",
      years: "anos desenvolvendo software",
      clients: "clientes atendidos pelo sistema",
      english: "inglês avançado",
    },
    experience: {
      title: "Experiência",
      intro:
        "Experiência prática em ambientes produtivos, com foco em evolução de produto e engenharia de software.",
      sante: {
        title: "Desenvolvedor de Software · Ruby on Rails",
        one: "Manutenção e evolução de sistema web utilizado por mais de 1.500 clientes B2B.",
        two: "Otimização de consultas PostgreSQL e atuação fullstack em discovery, desenvolvimento e code review.",
        three:
          "Implementação e monitoramento de fluxos assíncronos com Sidekiq, importação segura de dados e integrações via webhooks.",
      },
      devsecops: {
        title: "Estagiário DevSecOps · AWS",
        one: "Desenvolvimento de habilidades em Linux, Docker, Kubernetes e AWS.",
        two: "Execução de desafios práticos em infraestrutura de nuvem e prática diária de Scrum.",
      },
      react: {
        title: "Estagiário Frontend · React Native",
        one: "Estudo guiado em frontend com foco em React Native.",
        two: "Desenvolvimento de três projetos práticos e colaboração em equipe ágil.",
      },
    },
    skills: {
      title: "Ferramentas que utilizo",
      intro:
        "Tecnologias que fazem parte da minha experiência prática e formação.",
      languages: "Linguagens",
      frameworks: "Frameworks e bibliotecas",
      infrastructure: "Cloud e ferramentas",
      databases: "Bancos de dados",
    },
    education: {
      title: "Formação & certificação",
      in_progress: "EM ANDAMENTO",
      degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      school: "Instituto Federal do Paraná (IFPR) · Campus Cascavel",
      certification: "Certificação válida até 2026.",
      english_title: "Inglês avançado",
      english_body: "Nível C1 no Programa de Ensino de Línguas.",
    },
    projects: {
      title: "Projeto em destaque",
      body: "Responsável pelo frontend da landing page da Mentae, criando uma experiência clara para apresentar soluções de saúde mental e gestão de riscos psicossociais.",
      status: "Frontend · Landing page",
      card_body:
        "Uma presença digital com linguagem visual acolhedora e foco em conversão.",
      action: "Visitar projeto ↗",
    },
    contact: { title: "Vamos construir algo juntos?" },
    footer: {
      note: "Feito com HTML, CSS e JavaScript.",
      back_to_top: "Voltar ao topo ↑",
    },
  },
  en: {
    page_title: "Emerson Bottega | Software Developer",
    hero: {
      eyebrow: "SOFTWARE DEVELOPER · FULLSTACK",
      title: "Hello, I’m Emerson.",
      description:
        "Software developer experienced in web applications, Ruby on Rails, JavaScript, and cloud. I enjoy understanding systems end to end and turning complex challenges into reliable solutions.",
      primary_action: "Let's talk ↗",
      resume_action: "Download resume",
    },
    navigation: {
      label: "Main navigation",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    accessibility: {
      skip_link: "Skip to content",
      professional_links: "Professional links",
    },
    about: {
      title: "About me",
      lead: "My path combines backend, frontend, DevSecOps, and cloud computing — giving me a broad view of the web application lifecycle.",
      body: "I work with production systems, database integration, query optimization, monitoring, and asynchronous processing. I am looking for teams that value software quality, innovation, autonomy, and continuous learning.",
      years: "years building software",
      clients: "clients served by the system",
      english: "advanced English",
    },
    experience: {
      title: "Experience",
      intro:
        "Hands-on experience in production environments, focused on product evolution and software engineering.",
      sante: {
        title: "Software Developer · Ruby on Rails",
        one: "Maintained and enhanced a web system used by more than 1,500 B2B clients.",
        two: "Optimized PostgreSQL queries and worked fullstack across discovery, development, and code review.",
        three:
          "Implemented and monitored asynchronous workflows with Sidekiq, secure data imports, and webhook integrations.",
      },
      devsecops: {
        title: "DevSecOps Intern · AWS",
        one: "Developed skills in Linux, Docker, Kubernetes, and AWS.",
        two: "Completed practical cloud infrastructure challenges and worked daily with Scrum.",
      },
      react: {
        title: "Frontend Intern · React Native",
        one: "Completed guided frontend training focused on React Native.",
        two: "Built three practical projects and collaborated in an agile team.",
      },
    },
    skills: {
      title: "Tools I use",
      intro:
        "Technologies that are part of my hands-on experience and education.",
      languages: "Languages",
      frameworks: "Frameworks and libraries",
      infrastructure: "Cloud and tools",
      databases: "Databases",
    },
    education: {
      title: "Education & certification",
      in_progress: "IN PROGRESS",
      degree: "Technologist in Systems Analysis and Development",
      school: "Federal Institute of Paraná (IFPR) · Cascavel Campus",
      certification: "Certification valid through 2026.",
      english_title: "Advanced English",
      english_body: "C1 level through the Language Teaching Program.",
    },
    projects: {
      title: "Featured project",
      body: "Responsible for the frontend of Mentae’s landing page, creating a clear experience to present mental health and psychosocial risk management solutions.",
      status: "Frontend · Landing page",
      card_body:
        "A welcoming digital presence focused on clear communication and conversion.",
      action: "Visit project ↗",
    },
    contact: { title: "Let’s build something together." },
    footer: {
      note: "Built with HTML, CSS, and JavaScript.",
      back_to_top: "Back to top ↑",
    },
  },
};

let current_language = "pt_br";

function get_translation_value(translation_object, translation_path) {
  return translation_path
    .split(".")
    .reduce(
      (current_value, path_part) => current_value?.[path_part],
      translation_object,
    );
}

function apply_translation(language_code) {
  const selected_translation = translations[language_code];
  document.documentElement.lang = language_code === "pt_br" ? "pt-BR" : "en";
  document.title = selected_translation.page_title;
  document.querySelectorAll("[data_i18n]").forEach((element) => {
    const translation_value = get_translation_value(
      selected_translation,
      element.getAttribute("data_i18n"),
    );
    if (translation_value) element.textContent = translation_value;
  });
  document.querySelectorAll("[data_i18n_aria]").forEach((element) => {
    const translation_value = get_translation_value(
      selected_translation,
      element.getAttribute("data_i18n_aria"),
    );
    if (translation_value)
      element.setAttribute("aria-label", translation_value);
  });
  document.getElementById("language_button").textContent =
    language_code === "pt_br" ? "EN" : "PT";
  document
    .getElementById("language_button")
    .setAttribute(
      "aria-label",
      language_code === "pt_br" ? "Switch to English" : "Mudar para português",
    );
  document.getElementById("resume_link").href =
    language_code === "pt_br"
      ? "documents/Emerson_Bottega_Currículo.pdf"
      : "documents/Emerson_Bottega_Resume.pdf";
  current_language = language_code;
}

function toggle_language() {
  apply_translation(current_language === "pt_br" ? "en" : "pt_br");
}

document
  .getElementById("language_button")
  .addEventListener("click", toggle_language);
document.getElementById("current_year").textContent = new Date().getFullYear();
apply_translation(current_language);
