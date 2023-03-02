import { PageHeader } from "../../components/PageHeader";
import { Subtitle } from "../../components/Subtitle";
import { Text } from "../../components/Text";
import { AboutContainer, SectionTextBlock } from "./styles";
import { Title } from "../../components/Title";

import imgPreacher from '../../assets/preacher.webp'
import logoIpb from '../../assets/logo/logo_ipb.png'
import { FileArrowDown } from "phosphor-react";
import { TextBlock } from "../../components/TextBlock/styles";

import { motion } from "framer-motion"

import westminsterCatecism from '../../assets/books/westminster_catecism.pdf'
import largerCatecism from '../../assets/books/larger_catecism.pdf'
import shorterCatecism from '../../assets/books/shorter_catecism.pdf'


export function About() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      
      <PageHeader />      
      <AboutContainer>

        <TextBlock>
          <Subtitle>
            Nossa História
          </Subtitle>
          <Text>
            No dia 19 de agosto de 2012 foi então organizada, na cidade de Piracicaba, a Igreja Presbiteriana Astúrias, como filha da Igreja Presbiteriana de Piracicaba. O primeiro pastor a presidir a igreja foi o Rev. Jeremias Romualdo Alves, que permaneceu a frente da Igreja Presbiteriana Astúrias até 2015, quando foi chamado para cumprir designação de Capelão no Exército Brasileiro.
            <br /><br/>
            Em janeiro de 2016, assume a Igreja Presbiteriana Astúrias, como pastor presidente, para continuação dos trabalhos, o Rev. Robson Leandro Binotto, estando à frente de nossa Igreja até o presente momento.
          </Text>
        </TextBlock>

        <TextBlock>
          <Subtitle>
            Nosso Pastor
          </Subtitle>
          <Text>
            O Pastor <strong>Robson Leandro Binotto</strong> nasceu em 03 de março de 1972 na cidade de Osasco/SP. Após cursar Administração de Empresas em Minas Gerais, conheceu sua esposa Ana Paula, hoje, casados há 18 anos e como fruto desse relacionamento nasceu Samuel.
            Ainda jovem foi vocacionado para o sagrado ministério e em 2013 concluiu o curso de Bacharel em Teologia no Seminário Presbiteriano do Sul em Campinas/SP. 
            <br /><br />
            Ordenado a Pastor Presbiteriano, exerceu durante 2 anos seu ministério em Campinas; no ano de 2016 chegou na Igreja Presbiteriana Astúrias e hoje exerce suas funções em nossa comunidade que receptivamente os acolheu.
            Agradecemos a Deus por essa família que muito nos alegra com sua presença.
          </Text>
          <img src={imgPreacher} alt="Foto da esposa, filho e do Pastor Robson Binnoto" />
        </TextBlock>     

        <SectionTextBlock>
          <img src={logoIpb} alt="Logotipo da Igreja Presbiteriana do Brasil" />
          <Title>
            O Que é a Igreja Presbiteriana do Brasil?
          </Title>
          <Text>
            A Igreja Presbiteriana do Brasil é uma federação de igrejas que têm em comum uma história, uma forma de governo, uma teologia, bem como um padrão de culto e de vida comunitária. Historicamente, a IPB pertence à família das igrejas reformadas ao redor do mundo, tendo surgido no Brasil em 1859, como fruto do trabalho missionário da Igreja Presbiteriana dos Estados Unidos.
          </Text>
          <Title>
            Igreja Reformada
          </Title>
          <Text>
            Basicamente, quando falamos de Fé Reformada, referimo-nos à verdadeira religião cristã, como foi recuperada durante a Reforma Protestante dos séculos 16 e 17. Esse texto tratará de alguns assuntos referentes à fé Reformada, que a Igreja Presbiteriana do Brasil crê, mas você não encontrará a abordagem daqueles pontos cardeais da religião cristã que as Igrejas Reformadas compartilham com as demais, a saber, a Trindade, a expiação, a justificação pela fé, o nascimento virginal e a ressurreição corpórea de Jesus, seus milagres e a inspiração das Escrituras Sagradas. 
            <br /><br />
            A Fé Reformada adota todas as doutrinas apostólicas estabelecidas na Bíblia e formuladas em credos pelos grandes concílios ecumênicos da Igreja Primitiva. Ela é um relacionamento com Deus, através da mediação de Jesus Cristo, baseado no Evangelho revelado por Ele e pelas Escrituras Sagradas. 
            <br /><br />
            O conteúdo desse trabalho é seletivo e não abrange toda a fé cristã; não se pretende nem objetiva oferecer um resumo exaustivo da fé Reformada, antes aborda os princípios reformados, a Teocentricidade, a eleição, o sacrifício de Cristo e a Graça Irresistível de Jesus por nós, pecadores.
          </Text>
        </SectionTextBlock>

        <SectionTextBlock>
          <Title>
            Doutrina
          </Title>
          <Text>
            Os Símbolos de Fé oficiais da Igreja Presbiteriana do Brasil são: Confissão de Fé de Westminster, Catecismo Maior de Westminster e Breve Catecismo de Westminster.
          </Text>

          <TextBlock>
            <Subtitle>
              Quanto às Escrituras e a Revelação:
            </Subtitle>
            <Text>
              Cremos que a Bíblia é a Palavra de Deus, singular, inspirada, infalível e inerrante, e, portanto, a única regra de fé e prática para o cristão ( II Timóteo 3:15,16; II Pedro 1:21) (CFW, Cap. 1).
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Quanto ao ser de Deus:
            </Subtitle>
            <Text>
              Cremos em um só Deus, Criador de todas as coisas e eternamente existente em três pessoas: o Pai, o Filho e o Espírito Santo (Gênesis 1:1; João 10:30; Mateus 28:19).(CFW,Cap 11).
              <br /><br />
              Cremos na divindade de Jesus Cristo e nas afirmações da Bíblia quanto ao seu nascimento virginal (Isaías 7:14), vida sem pecado (Hebreus 4:15; 7:26), milagres (João 2:11), morte sacrificial (I Coríntios 15:3; Efésios 1:7; Hebreus 2:9), ressurreição ( João 11:25; 1 Coríntios 15:4), ascensão (Marcos 16:19; Atos 1:9) e segunda vinda em poder e glória (Atos 1:11; Mateus 25:31-33) (CFW, Caps. 11 e V111), bem como na plena humanidade e identificação conosco.
              <br /><br />
              Cremos na divindade do Espírito Santo que, segundo as Escrituras convence o homem do pecado, da justiça e do juízo e também traz consolo, paz e direção ao cristão ( João 16:7-14). ( CFW, Cap. 11, XXX1V).
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Quanto à criação do mundo e do homem:
            </Subtitle>
            <Text>
              Cremos na obra da criação de Deus conforme relatada no livro de Gênesis, obra essa da livre vontade de Deus para a manifestação da sua glória e eterno poder ( Romanos 1:20). Cremos que Deus criou todas as coisas do nada e tudo o que Ele criou visível ou invisível, foi tudo muito bom (Gênesis 1:1-31). Dentre a criação de Deus encontra-se o ser humano, dotado de inteligência, retidão e perfeita santidade, segundo a sua própria imagem (Gênesis 1:26), tendo a lei de Deus escrita em seu coração (Romanos 2:14-15), e o poder de cumpri-la, mas com a possibilidade de transgredi-la, sendo deixado à liberdade da sua própria vontade, que era sujeita à mudança (Gênesis 3:6). (CFW, Cap. IV e IX).
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Quanto ao estado do Homem hoje:
            </Subtitle>
            <Text>
              Cremos no relato bíblico da queda do homem do seu estado original diante de Deus e da criação (Gênesis 3:1-24). Cremos que daí em diante o homem perdeu o chamado livre arbítrio e a capacidade de voltar ao Criador (Romanos 3:9-20). O estado do homem depois da queda é de total depravação. (Romanos 3:23; Gênesis 2:17). (CFW, Cap. VI).
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
            Quanto a Salvação:
            </Subtitle>
            <Text>
              Cremos nos eternos decretos de Deus para a salvação do homem, que, por causa da total pecaminosidade de sua natureza, precisa da regeneração pelo Espírito Santo e da justificação através do sangue derramado por Cristo na cruz para ser salvo ( Romanos 3:23;6:23; 5:8,9; Tito 3:5). (CFW, Caps. III, IV, VII).
              <br /><br />
              Cremos que a salvação do homem é somente pela graça de Deus mediante a fé em Jesus Cristo, único mediador entre Deus e o homem ( João  5:24; Efésios 2:8-10). Essa fé é dada gratuitamente àqueles que Deus escolheu para a salvação em seu pacto gracioso. ( CFW, Caps. VII, VIII, X).
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Quanto à manutenção da salvação:
            </Subtitle>
            <Text>
              Cremos que aqueles que depositam sua fé somente em Jesus Cristo têm garantida a salvação eterna, mas aqueles que rejeitam o único e suficiente Salvador estarão eternamente separados de Deus ( João 3:16-18; João 5:11, 12). (CFW, Cap. X e XIV).
              <br /><br />
              Cremos que a manutenção da salvação depende exclusivamente de Deus, que garante ao salvo a vida eterna. Cremos que os crentes têm a obrigação diante de Deus de desenvolver a sua salvação com temor e tremor (Filipenses 2:12) ( CFW, Cap. XII, XVII, , XVIII).
              <br /><br />
              Cremos que através da capacitação do Espírito Santo o cristão está habilitado a viver uma vida de santidade, dedicação ao Reino de Deus e serviço humilde ao próximo (Romanos 8:13-18; 1Coríntios 3:16; 6:19,20; Efésios 4:30; 5:18; 1 Pedro 2:11-19; Tito 2:1-3-8). ( CFW, Cap. XIII, XVI).
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Quanto à Igreja:
            </Subtitle>
            <Text>
              Cremos que a Igreja, descrita na Bíblia como o corpo de Cristo, é composta da assembléia dos salvos por Jesus Cristo em todos os tempos. A essa igreja chamamos de invisível. Chamamos de Igreja visível o número de todos aqueles que, pelo mundo inteiro, professam a verdadeira religião, juntamente com seus filhos. (CFW, Cap. XXV).
              <br /><br />
              Cremos que o fim supremo da igreja é glorificar a Deus e a forma de cumprir sua missão é viver e proclamar a mensagem do evangelho entre todos os povos do mundo (Coríntios 12:12-14; Gálatas 3:26-28; 1 Pedro 2:9,10; Mateus 28:18-20, Marcos 16:15).
            </Text>
          </TextBlock>

          <button>
            <a href={westminsterCatecism} download >
            Confissão de Fé de Westimenter
            <FileArrowDown size={40} />
            </a>            
          </button>
          <button>
            <a href={largerCatecism} download>
              Catecismo Maior de Westimenter
              <FileArrowDown size={40} />
            </a>
          </button>
          <button>
            <a href={shorterCatecism} download>
              Breve Catecismo de Westimenter
              <FileArrowDown size={40} />
            </a>
          </button>
        </SectionTextBlock>

        <SectionTextBlock>
          <Title>
            O que fazemos?
          </Title>

          <TextBlock>
            <Subtitle>
              Culto de Adoração
            </Subtitle>
            <Text>
              Preparamos nosso espírito na atitude de quietude, contemplação e reverência necessárias ao Senhor. Entoamos hinos e louvores a Deus com o propósito de adorá-lo e oferecemos oração a Deus afim de que ele aceite o culto prestado.
              <br /><br />
              A leitura da palavra do Senhor é feita a congregação e a exposição do texto lido é realizada pelo pregador, afim de que alcançemos, com auxílio do Espírito Santo, o crescimento e desenvolvimento espiritual necessários para a Glória de Deus.
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Culto Infantil
            </Subtitle>
            <Text>
              Nossas crianças são parte vital de nossas famílias na Igreja e tentamos tornar o mais fácil possível trazê-las para a Igreja.
              <br /><br />
              Se você tem filhos, eles estão convidados a participar do nosso culto infantil. Começamos nosso culto todos juntos. Após os louvores, oração e ofertas ao Senhor, as crianças saem para seus cultos enquanto os adultos continuam juntos. Nossa equipe do dia terá prazer em ajudar você e seus filhos. A palavra do Senhor será ministrada ao seus corações e ficarão aos cuidados dos supervisores.
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Escola Bíblica Dominical
            </Subtitle>
            <Text>
              Todos os domingos de manhã, oferecemos aulas para toda a família da Igreja. Após breve louvor e oração, há separação de classes de crianças, jovens, adultos e novos convertidos.
              Neste momento, lidamos com tópicos da Bíblia, fazemos perguntas, respondemos, dialogamos e crescemos no entendimento das Sagradas Escrituras.
              <br /><br />
              A EBD aconteçe todo Domingo às 9:00.
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Reunião de Oração
            </Subtitle>
            <Text>
              O conhecimento e a aplicação da Palavra de Deus alimentam naturalmente nossa vida de oração: tanto como um grupo de crentes (oração coletiva) quanto sozinhos (oração particular).
              <br /><br />
              Há muitos exemplos nas escrituras para nos mostrar a importância de nos unirmos como um grupo do povo de Deus para implorar sinceramente pela bênção de Deus (por exemplo, Atos 1:24, Atos 6:6, Atos 13:3).
              <br /><br />
              Junte-se a nós nas Segundas-Feiras às 19:30.
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Estudo Bíblico
            </Subtitle>
            <Text>
              Como igreja, acreditamos na importância de estudar as Escrituras juntos.              
              <br /><br />
              Este encontro é aberto a todos os interessados, e geralamente, acontece as Quintas-Feiras as 19:30. Se você ama o Senhor e deseja que Deus mostre misericórdia junte-se a nós na igreja.
            </Text>
          </TextBlock>
        </SectionTextBlock>
        
      </AboutContainer>
    </motion.div>
  );
}