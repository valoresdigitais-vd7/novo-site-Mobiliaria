import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { TESTIMONIALS } from '../constants'; // Substituído por dados locais para contextualização
import { CheckCircleIcon, ZapIcon, ShieldIcon } from '../components/icons';

// --- MOCKED DATA FOR CONTEXT (Imobiliária Favam) ---

const REAL_ESTATE_TESTIMONIALS = [
    {
        quote: "O ROI do meu investimento em Ribeirão Preto superou os 12% ao ano. A análise de dados deles é incomparável.",
        author: "Carlos Mendes",
        role: "Investidor em RP",
        avatarUrl: "https://i.pravatar.cc/150?u=carlos"
    },
    {
        quote: "Conseguimos nossa casa em Mococa em menos de 20 dias. O processo de pré-qualificação pelo WhatsApp foi incrível.",
        author: "Ana & Felipe",
        role: "Primeira Moradia",
        avatarUrl: "https://i.pravatar.cc/150?u=ana"
    },
    {
        quote: "A curadoria para imóveis de luxo em Capitólio foi precisa. Não perdi tempo visitando opções fora do meu perfil.",
        author: "Roberto Valente",
        role: "Imóvel de Lazer",
        avatarUrl: "https://i.pravatar.cc/150?u=roberto"
    }
];

// --- SHARED COMPONENTS ---

// LeadCaptureForm Component (Antigo InlineCheckoutForm)
interface LeadCaptureFormProps {
    segmentContext: string;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ segmentContext }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        // Simulate API call for lead generation / CRM integration (Kenlo/Vista)
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (email && email.includes('@')) {
            setStatus('success');
            setMessage(`Cadastro recebido! Um especialista em ${segmentContext} entrará em contato via WhatsApp.`);
        } else {
            setStatus('error');
            setMessage('Por favor, insira um email válido para receber a curadoria.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email ou telefone"
                    required
                    className="flex-grow px-5 py-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm text-neutral-900 dark:text-white placeholder-neutral-400"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Processando...' : 'Iniciar Análise'}
                </button>
            </div>
            {message && (
                <div className={`mt-4 p-3 rounded-md text-sm font-medium ${status === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {message}
                </div>
            )}
            <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-center gap-1">
                <ShieldIcon className="w-3 h-3" /> Dados protegidos. Análise gratuita e sem compromisso.
            </p>
        </form>
    );
};

// --- SECTIONS ---

const HeroSection: React.FC = () => (
    <section className="relative py-24 md:py-36 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col gap-8 items-center text-center">
                <div className="max-w-4xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-6">
                        MOCOCA • RIBEIRÃO PRETO • CACONDE • CAPITÓLIO
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                        Da Aprovação Bancária à <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Chave na Mão em 15 Dias</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                        Combinamos <strong>inteligência de mercado</strong> e automação para encontrar as melhores oportunidades residenciais e de investimento. Menos burocracia, mais ROI.
                    </p>
                    
                    <LeadCaptureForm segmentContext="Imóveis" />
                    
                    <div className="mt-10 flex items-center justify-center gap-8 text-neutral-400 grayscale opacity-70">
                        {/* Placeholder logos for partners/integrations */}
                        <span className="text-sm font-semibold">Integrado com:</span>
                        <span className="font-bold">Kenlo</span>
                        <span className="font-bold">WhatsApp API</span>
                        <span className="font-bold">Google Ads</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const PillarsSection: React.FC = () => {
    const pillars = [
        {
            icon: <ZapIcon className="h-8 w-8 text-primary" />,
            title: 'Agilidade 80/20',
            description: 'Focamos nos 20% das etapas que geram 80% dos resultados. Pré-qualificação financeira via WhatsApp e contratos digitais.'
        },
        {
            icon: <ShieldIcon className="h-8 w-8 text-primary" />,
            title: 'Segurança Jurídica',
            description: 'Due diligence completa de cada imóvel. Garantimos a segurança do seu patrimônio antes de qualquer assinatura.'
        },
        {
            icon: <CheckCircleIcon className="h-8 w-8 text-primary" />,
            title: 'ROI Maximizado',
            description: 'Para investidores: análise detalhada de potencial de valorização e liquidez em Ribeirão Preto e região.'
        }
    ];
    return (
        <section id="pillars" className="py-24 bg-neutral-100 dark:bg-neutral-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Metodologia Favam Imóveis</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Por que conseguimos resultados superiores à média do mercado?</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                     {pillars.map((pillar) => (
                         <div key={pillar.title} className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral-200 dark:border-neutral-700">
                             <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6">
                                {pillar.icon}
                             </div>
                             <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{pillar.title}</h3>
                             <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{pillar.description}</p>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

const SocialProofSection: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    return (
        <section id="testimonials" className="py-24 overflow-hidden bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Resultados Reais em <span className="text-primary">4 Mercados</span>
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        Veja como estamos transformando o mercado imobiliário com atendimento consultivo e tecnologia.
                    </p>
                </div>
                
                <div ref={scrollContainer} className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4">
                    {REAL_ESTATE_TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-80 md:w-[400px] bg-neutral-50 dark:bg-neutral-800 p-8 rounded-2xl border border-neutral-100 dark:border-neutral-700">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                ))}
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300 italic text-lg mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center pt-6 border-t border-neutral-200 dark:border-neutral-700">
                                <img src={testimonial.avatarUrl} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover bg-neutral-200" />
                                <div className="ml-4">
                                    <p className="font-bold text-neutral-900 dark:text-white">{testimonial.author}</p>
                                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const RoadmapCTASection: React.FC = () => (
    <section id="cta" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                        Roadmap 90 Dias: <br/>Sua Jornada Imobiliária
                    </h2>
                    <p className="text-lg text-blue-100 mb-8">
                        Não vendemos apenas imóveis, entregamos um plano estruturado. Baixe nosso guia completo ou fale agora com um consultor.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center font-bold text-sm">1</div>
                            <span className="text-blue-50">Foundation: Análise de Perfil & ICP</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center font-bold text-sm">2</div>
                            <span className="text-blue-50">Activation: Tours Virtuais & Visitas </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center font-bold text-sm">3</div>
                            <span className="text-blue-50">Optimization: Negociação & Jurídico</span>
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/consultoria" className="inline-flex justify-center items-center bg-white text-primary font-bold py-4 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-xl">
                            Falar com Consultor
                        </Link>
                        <Link to="/calculadora-roi" className="inline-flex justify-center items-center bg-primary-dark border border-white/30 hover:bg-primary-darker text-white font-semibold py-4 px-8 rounded-lg transition-all">
                            Simular Financiamento
                        </Link>
                    </div>
                </div>
                
                <div className="hidden lg:block relative">
                    {/* Abstract visual representation of a dashboard or property card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                         <div className="flex justify-between items-end mb-6">
                             <div>
                                 <p className="text-blue-200 text-sm uppercase tracking-wider">Ticket Médio</p>
                                 <p className="text-4xl font-bold text-white">R$ 850k+</p>
                             </div>
                             <div className="text-right">
                                 <p className="text-blue-200 text-sm uppercase tracking-wider">Tempo Médio</p>
                                 <p className="text-2xl font-bold text-white">15 Dias</p>
                             </div>
                         </div>
                         <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                             <div className="h-full bg-white w-4/5 rounded-full"></div>
                         </div>
                         <p className="mt-4 text-sm text-blue-100">Eficiência de fechamento superior ao mercado tradicional.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const HomePage: React.FC = () => {
  return (
    <div className="antialiased bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <HeroSection />
      <PillarsSection />
      <SocialProofSection />
      <RoadmapCTASection />
      
      <footer className="py-12 bg-neutral-900 text-neutral-400 text-center text-sm">
          <div className="container mx-auto px-4">
              <p>&copy; {new Date().getFullYear()} Favam Imóveis. Todos os direitos reservados.</p>
              <p className="mt-2">CRECI 12345-J • Mococa • Ribeirão Preto • Caconde • Capitólio</p>
          </div>
      </footer>
    </div>
  );
};

export default HomePage;
