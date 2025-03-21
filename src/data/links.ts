
import { Briefcase, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: typeof Briefcase;
}

export const links: LinkItem[] = [
  {
    id: "portfolio",
    title: "Meu Portfólio",
    url: "https://portfolio.example.com",
    description: "Confira meus projetos e trabalhos recentes",
    icon: Briefcase
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com/in/example",
    description: "Conecte-se comigo no LinkedIn",
    icon: Linkedin
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://instagram.com/example",
    description: "Siga-me no Instagram para atualizações",
    icon: Instagram
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://youtube.com/c/example",
    description: "Assista meus vídeos no YouTube",
    icon: Youtube
  },
  {
    id: "newsletter",
    title: "Newsletter",
    url: "#newsletter",
    description: "Inscreva-se para receber novidades",
    icon: Mail
  }
];
