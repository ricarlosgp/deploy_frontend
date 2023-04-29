// arquivos .jsx é a sintaxe utilizada para criar interface com o REACKET. Graças ao JSX conseguimos escrever HTML dentro do JS.

//criando uma interface do zero. Todo componente deve-se iniciar com letra maiúscula por isso o App. 
//Toda função deve ser aberta com parenteses e dentro das chaves é o corpo da função
/*OBS: Details é um componente e <h1>Hello Wold!</h1> é um elemento. Por padrão um componente retorna apenas um elemento. Então, se eu colocar um elemento span abaixo do h1 vai apresentar erro. Dentro de um return temos que ter apenas um elemento porém, dentro de um elemento contido no return podemos ter vários elementos e por isso podemos criar uma div dentro do return ou um Fragment que é representado por esse símbolo <></>. A diferença da div para o fragment é que a div podemos estilizar no css já o fragment não.
Então resumindo, o return está devolvendo um único elemento que é a div e a div contêm mais de um elemento que é o h1 e span

import "./styles.js";

export function Details(){

  return (
    <div>
      <h1>Hello Wold!</h1>
      <span>ricarlos guimarães</span>
    </div>

  )
}
*/

//estilizando com o styled-components 
import { useState, useEffect } from 'react';
import { Container, Links, Content } from "./styles";
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';


import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";



export function Details(){
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }

  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header/>
      {
      data &&
      <main>
        <Content>   
          <ButtonText
            title="Excluir nota"
            onClick={handleRemove}
          />

          <h1>
              {data.title}
          </h1>

          <p>
              {data.description}
          </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}> 
                        <a href={link.url} target="_blank"> 
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))                  
                }
              </Section>
            }

          <Button 
            title="Voltar" 
            onClick={handleBack}
          />
        </Content>
      </main>
      }
    </Container>
  )
}
