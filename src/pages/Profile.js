import React from 'react';
// Importa a biblioteca React, que é essencial para criar componentes React.

import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
// Importa componentes específicos do React-Bootstrap, como Container, Row, Col, Image, Card, e Button, que são usados para criar layouts e estilizar a aplicação de forma consistente.

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// Importa ícones específicos do FontAwesome para GitHub, LinkedIn e Twitter, que serão usados como botões de ícones sociais.

import '../styles/Profile.css';
// Importa um arquivo CSS personalizado para estilizar o componente Profile.

const Profile = () => {
// Define um componente funcional chamado 'Profile'.

  return (
    <Container fluid className="">
     {/* Inicia o retorno JSX. Container é um componente do React-Bootstrap que fornece um contêiner responsivo para o conteúdo. */}

      <Row className="justify-content-center banner  white-text">
      {/* Row é usado para criar uma linha dentro do Container, e 'justify-content-center' centraliza o conteúdo horizontalmente. 'banner' é uma classe CSS personalizada. */}

        <Col md={6} className="text-center">
         {/* Col é usado para definir uma coluna que ocupa 6 das 12 colunas em dispositivos médios. 'text-center' centraliza o texto. */}

          <Image src="charlie.jpg" roundedCircle className="mb-3 profile-img" />
           {/* Image é um componente para exibir uma imagem. 'src' define a imagem a ser exibida, 'roundedCircle' torna a imagem circular, e 'mb-3 profile-img' aplica margens inferiores e uma classe CSS personalizada. */}

          <h2>Jonas Developer</h2>
           {/* Exibe o nome "Jonas Developer" em um título <h2>. */}

          <p className>Full Stack Developer</p>
           {/* Exibe a descrição "Full Stack Developer" em um parágrafo com a classe 'text-muted', que estiliza o texto com uma cor mais suave. */}
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
       {/* Cria uma nova linha centralizada com margem superior (mt-4). */}

        <Col md={8}>
         {/* Define uma coluna que ocupa 8 das 12 colunas em dispositivos médios. */}

          <Card>
           {/* Cria um Card do React-Bootstrap para encapsular conteúdo. */}

            <Card.Body>
             {/* Cria o corpo do Card onde o conteúdo principal é colocado. */}

              <Card.Title>About Me</Card.Title>
               {/* Exibe o título "About Me" dentro do Card. */}

              <Card.Text>
               {/* Define o texto do Card. */}

                I am a passionate Full Stack Developer with experience in building web and mobile applications. I love coding, learning new technologies, and solving challenging problems.
                 {/* Texto descritivo sobre o desenvolvedor. */}

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
       {/* Cria outra linha centralizada com margem superior. */}

        <Col md={8}>
         {/* Define uma coluna que ocupa 8 das 12 colunas em dispositivos médios. */}

          <Card>
           {/* Cria outro Card para exibir habilidades. */}

            <Card.Body>
            {/* Corpo do Card. */}

              <Card.Title>Skills</Card.Title>
               {/* Exibe o título "Skills" no Card. */}

              <ul>
               {/* Lista não ordenada que exibe as habilidades do desenvolvedor. */}

                <li>JavaScript, React, Node.js</li>
                <li>HTML, CSS, Bootstrap</li>
                <li>Python, Django</li>
                <li>SQL, MongoDB</li>
                 {/* Cada <li> representa uma habilidade ou conjunto de habilidades. */}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
       {/* Outra linha centralizada com margem superior. */}

        <Col md={8} className="text-center">
         {/* Define uma coluna que ocupa 8 das 12 colunas em dispositivos médios, com o texto centralizado. */}

          <Button variant="dark" href="https://github.com" className="m-2">
           {/* Cria um botão com estilo 'dark' que redireciona para o GitHub. 'm-2' adiciona margem ao redor do botão. */}

            <FaGithub /> GitHub
             {/* Exibe o ícone do GitHub seguido do texto "GitHub". */}

          </Button>
          <Button variant="primary" href="https://linkedin.com" className="m-2">
           {/* Cria um botão com estilo 'primary' que redireciona para o LinkedIn. */}

            <FaLinkedin /> LinkedIn
             {/* Exibe o ícone do LinkedIn seguido do texto "LinkedIn". */}

          </Button>
          <Button variant="info" href="https://twitter.com" className="m-2">
           {/* Cria um botão com estilo 'info' que redireciona para o Twitter. */}

            <FaTwitter /> Twitter
             {/* Exibe o ícone do Twitter seguido do texto "Twitter". */}

          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
// Exporta o componente Profile para que possa ser usado em outras partes da aplicação.
