import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: A real cookie banner would have state management and logic to set cookies.
// This is a visual placeholder.
const CookieConsentBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
        <p className="text-sm">Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.</p>
        <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Aceitar</button>
            <Link to="/politica-de-cookies" className="px-4 py-2 rounded text-sm hover:bg-neutral-700">Saber mais</Link>
        </div>
    </div>
);

const LegalPageLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 mb-6">Última atualização: {lastUpdated}</p>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    </div>
);

const CookiesPage: React.FC = () => {
    return (
        <>
            <LegalPageLayout title="Política de Cookies" lastUpdated="1 de Janeiro de 2024">
                <h2>1. O que são Cookies?</h2>
                <p>
                    Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou smartphone)
                    quando você visita um site. Eles ajudam o site a reconhecer seu dispositivo e lembrar de informações sobre
                    sua visita, como preferências de idioma, região e dados de navegação.
                </p>

                <h2>2. Por que usamos Cookies?</h2>
                <p>
                    A Favam Imóveis utiliza cookies para oferecer uma melhor experiência de navegação e personalização de conteúdo.
                    Esses cookies permitem entender melhor o comportamento dos visitantes e otimizar os serviços oferecidos,
                    como formulários de contato, suporte via WhatsApp e campanhas digitais.
                </p>

                <h2>3. Tipos de Cookies que Utilizamos</h2>
                <ul>
                    <li><strong>Essenciais:</strong> necessários para o funcionamento básico do site e suas funcionalidades.</li>
                    <li><strong>De Desempenho:</strong> nos ajudam a entender como os visitantes interagem com o site, analisando estatísticas de acesso.</li>
                    <li><strong>De Funcionalidade:</strong> armazenam preferências do usuário para oferecer uma experiência mais personalizada.</li>
                    <li><strong>De Marketing:</strong> usados para oferecer anúncios relevantes e otimizar campanhas em Google Ads e Meta Ads.</li>
                </ul>

                <h2>4. Como Controlar e Gerenciar Cookies</h2>
                <p>
                    Você pode gerenciar suas preferências de cookies diretamente nas configurações do seu navegador.
                    É possível optar por bloquear, restringir ou excluir cookies. No entanto, ao desativar certos tipos de cookies,
                    algumas partes do site podem não funcionar corretamente.
                </p>

                <h2>5. Cookies de Terceiros</h2>
                <p>
                    Nosso site pode utilizar cookies de parceiros externos, como Google, Meta e plataformas de CRM,
                    para fins de análise de desempenho e remarketing. Esses cookies estão sujeitos às políticas de privacidade
                    de seus respectivos provedores.
                </p>

                <h2>6. Atualizações desta Política</h2>
                <p>
                    Podemos atualizar esta Política de Cookies periodicamente para refletir melhorias nos nossos serviços ou alterações legais.
                    Recomendamos que você consulte esta página regularmente para estar ciente de possíveis modificações.
                </p>

                <h2>7. Contato</h2>
                <p>
                    Em caso de dúvidas sobre esta Política de Cookies ou sobre como utilizamos seus dados, entre em contato
                    conosco através do e-mail <a href="mailto:contato@favamimoveis.com.br" className="text-primary underline">contato@favamimoveis.com.br</a>.
                </p>

                <p className="mt-8 font-semibold">
                    Favam Imóveis © {new Date().getFullYear()} — Todos os direitos reservados.
                </p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;
