export const siteConfig = {
  name: 'Tirso Tormo',
  title: 'Estudiante de ASIR | Futuro SysAdmin ',
  role: 'Estudiante de ASIR & Entusiasta del Home Labbing',
  description: 'Portfolio de Tirso Tormo - Técnico SMR y estudiante de ASIR especializado en administración de redes, virtualización y sistemas.',
  accentColor: '#14b8a6',
  social: {
    email: 'tirso.tormoo@gmail.com',
    github: 'https://github.com/TirsoTormo',
    linkedin: 'https://www.linkedin.com/in/tirso-tormo/',
    twitter: ''
  },
  aboutMe:
    'Soy graduado en Sistemas Microinformáticos y Redes (SMR) y actual estudiante de 1º de ASIR en España. Me apasiona la administración de sistemas, la infraestructura de redes y revivir hardware legacy para exprimir su máximo potencial.',
  skills: [
    'Linux (Debian/Ubuntu)',
    'Windows Server & Active Directory',
    'Virtualización (Proxmox VE)',
    'Redes (TCP/IP, DNS, DHCP, VLANs)',
    'Bash Scripting',
    'Mantenimiento Hardware Legacy'
  ],
  projects: [
    {
      title: 'Argos - Network Intelligence Suite',
      description: 'Herramienta CLI modular para auditoría de redes locales (LAN). Permite descubrimiento de activos L2, tests de velocidad cliente/servidor e inyección de paquetes a medida. Código profesional refactorizado con Pylint (10/10) y sistema Plug & Play.',
      tech: ['Python', 'Scapy', 'GitHub Actions', 'CI/CD'],
      link: 'https://github.com/TirsoTormo/argos-net-intelligence',
    }
  ],
  experience: [],
  education: [
    {
      school: "CIP FP BATOI",
      degree: "Grado Superior en Administración de Sistemas Informáticos en Red (ASIR)",
      dateRange: "2025 - Presente",
      achievements: [
        "Estudio en profundidad de arquitecturas de red, enrutamiento y seguridad perimetral",
        "Implementación y administración de sistemas de almacenamiento físico y lógico (RAID, LVM)",
        "Despliegue y gestión de sistemas operativos de servidor (Linux y Windows Server)"
      ]
    },
    {
      school: "Col·legi Sant Roc Alcoi",
      degree: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
      dateRange: "2023 - 2025",
      achievements: [
        "Título completado con sólida base teórica y práctica en hardware",
        "Montaje, mantenimiento, diagnóstico y reparación de equipos informáticos",
        "Despliegue y configuración inicial de redes locales (LAN) y servicios básicos"
      ]
    }
  ]
};
