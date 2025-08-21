type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Básico",
        desc: "Comece a impulsionar o crescimento da sua startup com ferramentas essenciais.",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Começar Gratuitamente",
        features: [
            "Geração básica de insights de IA",
            "Acesso a 1 projeto",
            "Suporte da comunidade",
            "Análise de métricas limitada"
        ],
        link: "#"
    },
    {
        id: "pro",
        title: "Premium",
        desc: "Desbloqueie recursos avançados para estratégias de crescimento aprimoradas e escaláveis.",
        monthlyPrice: 10,
        yearlyPrice: 120,
        badge: "Mais Popular",
        buttonText: "Assinar Plano Premium",
        features: [
            "Geração avançada de insights de IA",
            "Acesso a 5 projetos",
            "Suporte prioritário por e-mail",
            "Análise de métricas detalhada",
            "Ferramentas de colaboração em equipe",
            "Dashboard de Crescimento Personalizável",
            "Recomendações Estratégicas de IA"
        ],
        link: "#"
    },
    {
        id: "enterprise",
        title: "Empresarial",
        desc: "Soluções personalizadas e otimizadas para grandes startups e empresas.",
        monthlyPrice: 15,
        yearlyPrice: 180,
        badge: "Entre em Contato",
        buttonText: "Fale com Vendas",
        features: [
            "Geração ilimitada de insights de IA",
            "Projetos ilimitados",
            "Gerente de conta dedicado",
            "Análise e relatórios personalizados",
            "Segurança de nível empresarial",
            "Atualizações gratuitas"
        ],
        link: "#"
    }
];
