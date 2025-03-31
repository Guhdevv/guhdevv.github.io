
        const questoes = [
            {
                pergunta: "<b>1 - O COBIT 2019 é um framework que ajuda as organizações a alcançar seus objetivos estratégicos. Nesse contexto, é correto afirmar que:",
                opcoes: [
                    "A) O COBIT 2019 incorpora o conceito de princípios e práticas ágeis, alinhando-se às demandas do mercado.",
                    "B) O ciclo de vida de implementação do COBIT foi removido na versão 2019 para simplificar o framework.",
                    "C) O COBIT 2019 é um framework prescritivo, ou seja, define regras rígidas que todas as organizações devem seguir.",
                    "D) A estrutura de objetivos de governança e gestão no COBIT 2019 é baseada exclusivamente em processos financeiros e operacionais.",
                    "E) O COBIT 2019 elimina a necessidade de alinhamento entre as práticas de governança de TI e as necessidades estratégicas da organização."
                ],
                respostaCorreta: 'A'
            },
            {
                pergunta: "2 - Qual é o principal objetivo do COBIT?",
                opcoes: [
                    "A) Garantir a segurança da informação.",
                    "B) Alinhar a governança de TI com os objetivos de negócios.",
                    "C) Reduzir custos operacionais.",
                    "D) Implementar soluções de software.",
                    "E) Aumentar a eficiência dos processos de TI."
                ],
                respostaCorreta: 'B'
            },
            {
                pergunta: "3 - Qual é o principal objetivo da Governança de TI?",
                opcoes: [
                    "A) Reduzir custos operacionais.",
                    "B) Garantir a segurança da informação.",
                    "C) Alinhar a TI com os objetivos de negócio.",
                    "D) Implementar novas tecnologias.",
                    "E) Aumentar a eficiência dos processos."
                    
                ],
                respostaCorreta: 'C'
            },
            {
                pergunta: "4 - Deus é fiel",
                opcoes: [
                    "A) ",
                    "B) ",
                    "C) ",
                    "D) ",
                    "E) "
                    
                ],
                respostaCorreta: ''
            },     
            // Adicione mais questões aqui
        ];

        const quizForm = document.getElementById('quizForm');

        // Renderiza as questões e opções
        questoes.forEach((questao, index) => {
            const perguntaElement = document.createElement('p');
            perguntaElement.textContent = questao.pergunta;
            quizForm.appendChild(perguntaElement);

            questao.opcoes.forEach((opcao, i) => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="radio" name="resposta${index}" value="${String.fromCharCode(65 + i)}"> ${opcao}`;
                quizForm.appendChild(label);
            });
        });

        function verificarRespostas() {
            const resultadoDiv = document.getElementById('resultado');
            let resultado = '';

            questoes.forEach((questao, index) => {
                const respostas = document.getElementsByName(`resposta${index}`);
                let respostaSelecionada;

                for (let i = 0; i < respostas.length; i++) {
                    if (respostas[i].checked) {
                        respostaSelecionada = respostas[i].value;
                        break;
                    }
                }

                if (respostaSelecionada) {
                    if (respostaSelecionada === questao.respostaCorreta) {
                        resultado += `Questão ${index + 1}: Correto!<br>`;
                    } else {
                        resultado += `Questão ${index + 1}: Errado! A resposta correta é ${questao.respostaCorreta}.<br>`;
                    }
                } else {
                    resultado += `Questão ${index + 1}: Por favor, selecione uma alternativa.<br>`;
                }
            });

            resultadoDiv.innerHTML = resultado;
        }

        
