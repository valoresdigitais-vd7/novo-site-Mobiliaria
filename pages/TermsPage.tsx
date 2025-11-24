
import React from 'react';

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

const TermsPage: React.FC = () => {
    return (
        <LegalPageLayout title="Termos de Uso – Favam Imóveis" lastUpdated="1 de Novembro de 2025">
            <h2>1. Introdução</h2>
            <p>Bem-vindo ao site da Favam Imóveis (<a href="https://favam.valoresdigitais.com">favam.valoresdigitais.com</a>). Ao acessar ou utilizar nossos serviços digitais, você concorda em cumprir estes Termos de Uso, que regem a utilização do portal, formulários e ferramentas integradas.</p>

            <h2>2. Objetivo e Domínio</h2>
            <p>O presente site tem como objetivo oferecer informações e oportunidades de aquisição, venda ou investimento em imóveis localizados em Mococa, Ribeirão Preto, Caconde e Capitólio, conectando clientes, parceiros e investidores de forma transparente e segura.</p>

            <h2>3. Aceitação dos Termos</h2>
            <p>O uso deste site implica concordância integral com as condições descritas. Caso não concorde, recomendamos que interrompa o uso imediatamente.</p>

            <h2>4. Serviços Oferecidos</h2>
            <p>A Favam Imóveis disponibiliza ferramentas como pré-qualificação financeira, integração com WhatsApp Business API, formulários de contato e landing pages segmentadas para diferentes perfis de consumidores e investidores.</p>

            <h2>5. Responsabilidades do Usuário</h2>
            <p>O usuário compromete-se a fornecer informações verídicas em todos os formulários e comunicações, responsabilizando-se por qualquer dado incorreto ou fraudulento enviado através do site ou canais associados.</p>

            <h2>6. Privacidade e Proteção de Dados</h2>
            <p>As informações coletadas são tratadas conforme a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>. A Favam Imóveis garante confidencialidade e utiliza os dados apenas para fins de atendimento, pré-qualificação e comunicação autorizada.</p>

            <h2>7. Modificação dos Termos</h2>
            <p>Estes termos poderão ser alterados a qualquer momento, sem aviso prévio, sendo recomendada a verificação periódica. A data de atualização será sempre exibida no topo deste documento.</p>

            <h2>8. Propriedade Intelectual</h2>
            <p>Todo o conteúdo do site, incluindo textos, gráficos, logotipos, marcas e elementos de interface, é de propriedade exclusiva da Favam Imóveis ou de seus licenciantes, sendo vedada a reprodução sem autorização prévia por escrito.</p>

            <h2>9. Limitação de Responsabilidade</h2>
            <p>A Favam Imóveis não se responsabiliza por danos diretos ou indiretos resultantes do uso inadequado do site, da indisponibilidade temporária de serviços ou de links externos mantidos por terceiros.</p>

            <h2>10. Contato e Suporte</h2>
            <p>Em caso de dúvidas, solicitações ou pedidos relacionados aos Termos de Uso, o usuário pode entrar em contato pelo WhatsApp Business oficial ou pelo e-mail <a href="mailto:contato@favamimoveis.com.br">contato@favamimoveis.com.br</a>.</p>

            <h2>11. Foro de Eleição</h2>
            <p>Fica eleito o foro da Comarca de Mococa/SP para dirimir quaisquer controvérsias oriundas deste instrumento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.</p>
        </LegalPageLayout>
    );
};

export default TermsPage;
