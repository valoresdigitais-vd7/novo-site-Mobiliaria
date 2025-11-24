import React, { useState, useRef } from 'react';
import type { Product, Testimonial } from '../types'; // Keeping types import for compatibility
// We will override constants with specific Real Estate data inside components for this refactor
import { CheckCircleIcon, ZapIcon, ShieldIcon, ChevronDownIcon, UsersIcon, TargetIcon, HeartIcon } from '../components/icons';

// --- SHARED COMPONENTS ---

// LeadCaptureForm Component (Refactored from InlineCheckoutForm)
// Foco: Pré-qualificação e Captação de Leads (AIDA: Ação)
interface LeadCaptureFormProps {
    ctaLabel: string;
    placeholder?: string;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ ctaLabel, placeholder = "Seu melhor e-mail ou WhatsApp" }) => {
    const [contact, setContact] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        // Simulação de envio para CRM (Kenlo/Vista) ou API
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (contact && contact.length > 5) {
            setStatus('success');
            setMessage(`Recebemos seu contato! Um consultor especialista iniciará sua pré-qualificação em instantes.`);
        } else {
            setStatus('error');
            setMessage('Por favor, insira um contato válido.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-lg">
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={placeholder}
                    required
                    className="flex-grow px-4 py-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow text-neutral-900 dark:text-white"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Processando...' : ctaLabel}
                </button>
            </div>
            {message && (
                <p className={`mt-3 text-sm font-medium ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

// --- AIDA STAGE 1: ATENÇÃO (Hero Section) ---

const HeroSection: React.FC = () => (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 items-center">
                <div className="text-center max-w-4xl">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary dark:text-primary-light font-semibold text-sm tracking-wide">
                        Estratégia Imobiliária 80/20
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                        Invista nos <span className="text-primary dark:text-primary-light">4% dos Imóveis</span> que Geram Resultados Reais
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        Inteligência de mercado para Mococa, Ribeirão Preto, Caconde e Capitólio. Unimos atendimento humanizado e dados para encontrar a oportunidade perfeita para moradia ou investimento.
                    </p>
                    <div className="max-w-xl mx-auto mt-8">
                        <LeadCaptureForm ctaLabel="Fazer Pré-qualificação" />
                    </div>
                    <p className="mt-4 text-xs text-neutral-500 uppercase tracking-widest">
                        Análise de Crédito Gratuita • Atendimento via WhatsApp • CRM Integrado
                    </p>
                </div>
                
                {/* Hero Video / Visual Proof */}
                <div className="w-full flex justify-center mt-8">
                    <div className="w-full max-w-4xl aspect-video rounded-xl shadow-2xl overflow-hidden border-4 border-white dark:border-neutral-800 relative">
                        {/* Placeholder visual representando imóveis premium */}
                        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-500">
                             <span className="text-lg">Vídeo Tour: Casas, Apartamentos e Fazendas Selecionados</span>
                        </div>
                        {/* Se houver vídeo real, descomentar o iframe abaixo */}
                        {/* 
                        <iframe
                            className="w-full h-full relative z-10"
                            src="https://www.youtube.com/embed/PLACEHOLDER?autoplay=1&mute=1&loop=1&playlist=PLACEHOLDER&controls=0"
                            title="Tour Imobiliário Favam"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        */}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- AIDA STAGE 2: INTERESSE (Metodologia e Proposta de Valor) ---

const MethodologySection: React.FC = () => (
    <section id="methodology" className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                            <ShieldIcon className="h-8 w-8 text-red-600 dark:text-red-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">O Mercado Tradicional é <span className="text-red-600 dark:text-red-400">Ineficiente</span></h2>
                    </div>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                        Você perde horas visitando imóveis que não perfilam, enfrenta burocracia bancária sem suporte e toma decisões baseadas em emoção, não em números.
                    </p>
                    <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                        <li className="flex items-start"><span className="text-red-500 mr-3">❌</span><span>Visitas improdutivas a imóveis fora do perfil.</span></li>
                        <li className="flex items-start"><span className="text-red-500 mr-3">❌</span><span>Falta de clareza sobre o potencial de valorização.</span></li>
                        <li className="flex items-start"><span className="text-red-500 mr-3">❌</span><span>Processos de financiamento lentos e opacos.</span></li>
                    </ul>
                </div>
                
                <div className="order-1 md:order-2 bg-neutral-50 dark:bg-neutral-800/50 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <ZapIcon className="h-8 w-8 text-primary dark:text-primary-light" />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">A Abordagem <span className="text-primary dark:text-primary-light">Favam Imóveis</span></h2>
                    </div>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                        Utilizamos automação de marketing e análise de dados para filtrar os 80% de ruído e focar nos 20% de oportunidades reais para seu perfil (ICP).
                    </p>
                     <ul className="space-y-4 text-neutral-700 dark:text-neutral-300 font-medium">
                        <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                            <span>Pré-qualificação bancária em até 24h.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                            <span>Curadoria de imóveis com alto potencial de ROI.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                            <span>Consultoria jurídica e financeira completa.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// --- AIDA STAGE 3: DESEJO (Segmentação e Prova Social) ---

const MarketSegmentsSection: React.FC = () => (
    <section id="segments" className="py-20 bg-neutral-100 dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Oportunidades Mapeadas por Região</h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                    Entendemos a dinâmica de cada mercado para maximizar seu patrimônio e qualidade de vida.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Mococa */}
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md border-t-4 border-primary hover:shadow-xl transition-shadow">
                    <UsersIcon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Mococa</h3>
                    <p className="text-sm font-semibold text-primary mb-3 uppercase">Primeira Moradia</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                        Saia do aluguel com parcelas menores que a locação. Foco em urgência e facilidade de aprovação no Minha Casa Minha Vida.
                    </p>
                    <a href="#" className="text-primary font-bold text-sm hover:underline">Ver imóveis em Mococa &rarr;</a>
                </div>

                {/* Ribeirão Preto */}
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md border-t-4 border-secondary hover:shadow-xl transition-shadow">
                    <TargetIcon className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ribeirão Preto</h3>
                    <p className="text-sm font-semibold text-secondary mb-3 uppercase">Arbitragem & Custo</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                        More melhor pagando menos. Estratégias de arbitragem imobiliária para quem busca qualidade de vida e economia inteligente.
                    </p>
                    <a href="#" className="text-secondary font-bold text-sm hover:underline">Calcular economia em RP &rarr;</a>
                </div>

                {/* Caconde */}
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md border-t-4 border-green-600 hover:shadow-xl transition-shadow">
                    <ZapIcon className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Caconde</h3>
                    <p className="text-sm font-semibold text-green-600 mb-3 uppercase">Investidor Agro</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                        Oportunidades rurais e urbanas para investidores. ROI estimado de 8% a 12% ao ano com segurança patrimonial.
                    </p>
                    <a href="#" className="text-green-600 font-bold text-sm hover:underline">Baixar relatório Agro &rarr;</a>
                </div>

                {/* Capitólio */}
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
                    <HeartIcon className="h-12 w-12 text-amber-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Capitólio</h3>
                    <p className="text-sm font-semibold text-amber-500 mb-3 uppercase">Lazer Premium</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                        Seu refúgio no Mar de Minas. Imóveis de alto padrão para lazer ou renda via temporada (Airbnb/Booking).
                    </p>
                    <a href="#" className="text-amber-500 font-bold text-sm hover:underline">Agendar tour VIP &rarr;</a>
                </div>
            </div>
        </div>
    </section>
);

const FinancialImpactSection: React.FC = () => (
    <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Números que Constroem Patrimônio</h2>
                    <p className="text-neutral-300 text-lg mb-8">
                        Não vendemos apenas metros quadrados. Vendemos inteligência financeira aplicada ao mercado imobiliário. Veja o impacto da nossa consultoria 80/20.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-neutral-800 rounded-lg">
                            <div className="text-3xl font-bold text-primary-light mb-1">90 Dias</div>
                            <div className="text-sm text-neutral-400">Roadmap médio até as chaves</div>
                        </div>
                        <div className="p-4 bg-neutral-800 rounded-lg">
                            <div className="text-3xl font-bold text-green-400 mb-1">+12%</div>
                            <div className="text-sm text-neutral-400">ROI médio em Caconde (a.a.)</div>
                        </div>
                        <div className="p-4 bg-neutral-800 rounded-lg">
                            <div className="text-3xl font-bold text-amber-400 mb-1">4%</div>
                            <div className="text-sm text-neutral-400">Foco nos imóveis "Best-in-Class"</div>
                        </div>
                        <div className="p-4 bg-neutral-800 rounded-lg">
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-sm text-neutral-400">Processo digital e transparente</div>
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700">
                    <h3 className="text-xl font-bold mb-6 text-center">Simulação de Economia (Exemplo: Mococa)</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
                            <span className="text-neutral-400">Aluguel Médio (5 anos)</span>
                            <span className="text-red-400 font-mono">- R$ 72.000</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
                            <span className="text-neutral-400">Prestação Financiamento</span>
                            <span className="text-yellow-400 font-mono">R$ 68.000</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
                            <span className="text-neutral-400">Valorização do Imóvel</span>
                            <span className="text-green-400 font-mono">+ R$ 45.000</span>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                            <span className="font-bold text-lg">Ganho Patrimonial Real</span>
                            <span className="font-bold text-2xl text-primary-light">+ R$ 49.000</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded transition-colors">
                            Quero minha simulação personalizada
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const SocialProofSection: React.FC = () => (
    <section id="testimonials" className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">Quem Confiou na Estratégia</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        quote: "A equipe focou exatamente no que eu precisava. Em 2 visitas em Ribeirão, fechamos negócio. A economia de tempo foi surreal.",
                        author: "Ricardo M.",
                        role: "Investidor - Ribeirão Preto"
                    },
                    {
                        quote: "Achava que não conseguiria financiar minha casa em Mococa. A pré-qualificação deles me mostrou o caminho e hoje tenho a chave na mão.",
                        author: "Ana Clara S.",
                        role: "Primeira Moradia - Mococa"
                    },
                    {
                        quote: "Comprei um sítio em Caconde como investimento. O relatório de ROI que me apresentaram foi decisivo e preciso.",
                        author: "Dr. Fernando P.",
                        role: "Investidor Agro - Caconde"
                    }
                ].map((testimonial, idx) => (
                    <div key={idx} className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                        <div className="flex text-primary mb-4">
                            {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-300 italic mb-4">"{testimonial.quote}"</p>
                        <div>
                            <p className="font-bold text-neutral-900 dark:text-white">{testimonial.author}</p>
                            <p className="text-xs text-neutral-500 uppercase">{testimonial.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- AIDA STAGE 4: AÇÃO (Passos e CTAs Finais) ---

const RoadmapSection: React.FC = () => {
    const steps = [
        { number: '01', title: 'Pré-Qualificação', description: 'Preencha o formulário e descubra seu poder de compra em 24h via WhatsApp.' },
        { number: '02', title: 'Curadoria 80/20', description: 'Selecionamos apenas os imóveis que encaixam no seu perfil e orçamento.' },
        { number: '03', title: 'Tour & Decisão', description: 'Visitas presenciais ou virtuais focadas, seguidas de assessoria jurídica completa.' }
    ];

    return (
        <section id="roadmap" className="py-20 bg-neutral-100 dark:bg-neutral-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Seu Caminho até a Chave na Mão</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Processo simplificado, transparente e seguro.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map(step => (
                        <div key={step.number} className="relative p-8 bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                           <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-primary">{step.number}</div>
                           <div className="text-2xl font-bold text-primary dark:text-primary-light mb-4">{step.title}</div>
                           <p className="text-neutral-600 dark:text-neutral-300 relative z-10">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalActionSection: React.FC = () => (
    <section id="cta" className="py-24 bg-primary relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-dark to-primary opacity-90 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Não Deixe a Oportunidade Passar</h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-10">
                O mercado imobiliário é dinâmico. Os melhores imóveis (os 4% do topo) são vendidos rapidamente. 
                Garanta sua consultoria gratuita hoje mesmo.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <button className="bg-white text-primary font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-neutral-100 transition-transform transform hover:scale-105 flex items-center">
                    <ZapIcon className="h-5 w-5 mr-2" />
                    Falar no WhatsApp Agora
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white/10 transition-colors flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Agendar Tour Guiado
                </button>
            </div>
            
            <p className="mt-8 text-sm text-cyan-200 opacity-80">
                Atendimento imediato para Mococa, Ribeirão Preto, Caconde e Capitólio.
            </p>
        </div>
    </section>
);

const FAQSection: React.FC = () => {
    // FAQ Data Inlined for context
    const FAQs = [
        { question: "Como funciona a pré-qualificação?", answer: "Analisamos seu perfil financeiro junto aos principais bancos para definir seu potencial de compra antes mesmo de escolher o imóvel." },
        { question: "Vocês cobram pela consultoria?", answer: "Não. Nossa remuneração vem do sucesso da transação imobiliária. A consultoria inicial e curadoria são gratuitas." },
        { question: "Atendem investidores de fora da região?", answer: "Sim. Temos processos digitais completos, incluindo tours virtuais e assinatura de contrato digital, ideais para investidores de Capitólio e Caconde." },
        { question: "Qual o ROI médio em Caconde?", answer: "Historicamente, observamos retornos entre 8% a 12% ao ano, combinando valorização da terra e produção agro." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-neutral-50 dark:bg-neutral-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Dúvidas Frequentes</h2>
                </div>
                <div className="space-y-4">
                    {FAQs.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-md font-medium text-neutral-800 dark:text-neutral-100">{item.question}</span>
                                <ChevronDownIcon
                                    className={`h-5 w-5 text-neutral-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}
                            >
                                <div className="px-5 pb-5 pt-0">
                                    <p className="text-neutral-600 dark:text-neutral-300 text-sm">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- FINAL PAGE COMPONENT ---

const RealEstateLandingPage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-neutral-900 bg-white dark:bg-neutral-950">
      {/* 
        AIDA STRUCTURE:
        1. Attention: Hero with Strong Promise & Segmentation
        2. Interest: Methodology 80/20 & Pain Points
        3. Desire: Specific Markets, Financial Data, Social Proof
        4. Action: Roadmap & Final CTAs
      */}
      
      <HeroSection />
      
      <MethodologySection />
      
      <MarketSegmentsSection />
      
      <FinancialImpactSection />
      
      <SocialProofSection />
      
      <RoadmapSection />
      
      <FinalActionSection />
      
      <FAQSection />
      
      <footer className="bg-neutral-900 text-neutral-400 py-12 text-center text-sm border-t border-neutral-800">
        <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Favam Imóveis. Todos os direitos reservados.</p>
            <p className="mt-2">CRECI J-XXXXX • Mococa • Ribeirão Preto • Caconde • Capitólio</p>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateLandingPage;
