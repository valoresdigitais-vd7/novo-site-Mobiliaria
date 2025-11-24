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

const PrivacyPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Privacidade" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Introdução</h2>
            <p>
                A Favam Imóveis valoriza a privacidade e a segurança das informações de seus clientes, parceiros e visitantes.
                Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais
                conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
            </p>

            <h2>2. Coleta de Dados</h2>
            <p>
                Coletamos apenas as informações necessárias para oferecer nossos serviços de intermediação e consultoria imobiliária.
                Os dados podem incluir informações pessoais (como nome, e-mail e telefone), dados financeiros em casos de
                pré-qualificação bancária, e interações via WhatsApp ou formulários online.
            </p>

            <h2>3. Finalidade do Tratamento de Dados</h2>
            <ul>
                <li>Fornecer atendimento imobiliário personalizado;</li>
                <li>Agendar visitas e tours nos imóveis anunciados;</li>
                <li>Enviar comunicações de marketing relevantes e educativas;</li>
                <li>Efetuar pré-qualificação financeira junto a parceiros bancários;</li>
                <li>Analisar métricas internas para melhoria da experiência do usuário e performance de campanhas.</li>
            </ul>

            <h2>4. Compartilhamento de Dados</h2>
            <p>
                Seus dados poderão ser compartilhados apenas com instituições parceiras quando for necessário para concluir
                uma etapa da jornada de compra ou investimento, como bancos (Caixa Econômica Federal, Bradesco),
                plataformas de CRM imobiliário (Kenlo, Vista, Superlógica) e provedores de automação de marketing.
                Nunca vendemos ou comercializamos dados pessoais a terceiros.
            </p>

            <h2>5. Retenção e Segurança dos Dados</h2>
            <p>
                Adotamos medidas de segurança técnicas e administrativas para proteger os dados coletados contra acessos
                não autorizados, destruição ou modificação indevida. Os dados são mantidos pelo tempo necessário
                para cumprimento das finalidades descritas ou obrigações legais aplicáveis.
            </p>

            <h2>6. Seus Direitos</h2>
            <p>
                Você pode, a qualquer momento, solicitar à Favam Imóveis:
            </p>
            <ul>
                <li>Acesso aos seus dados pessoais;</li>
                <li>Correção de informações incorretas ou desatualizadas;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Revogação do consentimento para tratamento de seus dados.</li>
            </ul>

            <h2>7. Cookies e Tecnologias Semelhantes</h2>
            <p>
                Utilizamos cookies e pixels de rastreamento apenas para melhorar sua experiência no site, personalizar conteúdos
                e mensurar resultados de campanhas, sempre respeitando as boas práticas de privacidade e segurança.
            </p>

            <h2>8. Comunicação e Contato</h2>
            <p>
                Para quaisquer dúvidas, solicitações ou exercício de direitos, o titular dos dados pode entrar em contato com
                nosso Encarregado de Proteção de Dados (DPO) pelo e-mail:{" "}
                <a href="mailto:privacidade@favamimoveis.com.br" className="text-blue-600 dark:text-blue-400">
                    privacidade@favamimoveis.com.br
                </a>
            </p>

            <h2>9. Alterações nesta Política</h2>
            <p>
                Esta Política de Privacidade pode ser atualizada periodicamente conforme alterações legais ou de processos internos.
                Recomendamos que os usuários revisitem esta página regularmente para manter-se informados sobre eventuais mudanças.
            </p>

            <h2>10. Disposições Finais</h2>
            <p>
                Ao utilizar nossos serviços e canais digitais, você concorda com os termos desta Política de Privacidade.
                A Favam Imóveis reafirma seu compromisso com a transparência e a proteção dos dados de todos os seus clientes
                e parceiros.
            </p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;
