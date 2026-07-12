# Floresta Interior

**Banhos de floresta guiados, no seu bolso.**

Floresta Interior é uma aplicação web instalável criada para o Instituto [Mestra Natureza](https://www.instagram.com/mestranatureza). O projeto leva práticas de reconexão com a natureza para uma experiência pensada desde o início para o celular.

> Aqui, agora, você também é floresta.

## O projeto

O app propõe práticas curtas que podem ser realizadas em uma praça, um quintal, uma rua arborizada ou diante de uma janela. A interface procura reduzir distrações e conduzir cada atividade com instruções claras, ritmo e continuidade.

## Recursos

* Banho Sob Medida, organizado pelo tempo disponível e pelos sentidos que a pessoa deseja despertar
* 8 banhos guiados, incluindo práticas de visão, audição, olfato, tato, meditação e gratidão
* 4 meditações da Mestra
* jornada de 21 dias com práticas diárias
* diário da natureza com vocabulário de sensações
* Radar da Conexão com autoavaliação em 6 eixos
* conteúdo sobre a ciência e os fundamentos dos banhos de floresta
* instalação na tela inicial como PWA
* suporte a funcionamento offline por service worker

## Decisões de produto e interface

* experiência mobile first, com navegação inferior e áreas de toque adequadas
* suporte a áreas seguras de tela em dispositivos móveis
* controles com rótulos acessíveis e navegação por teclado
* persistência do progresso no navegador
* manifest e ícones próprios para instalação
* imagens otimizadas e recursos essenciais mantidos em cache

## Dados

Os registros locais da experiência são mantidos no navegador com `localStorage`. O front-end também prevê recursos conectados ao Supabase, cuja disponibilidade depende da configuração do ambiente de publicação.

## Tecnologias

HTML, CSS e JavaScript, com manifest de PWA, service worker e cliente Supabase. A interface não exige framework nem processo de build.

## Executar localmente

```bash
python -m http.server 4173
```

Depois, abra `http://localhost:4173`.

## Status

Projeto em testes e evolução contínua, com atenção especial ao comportamento em celulares e à experiência de instalação.

## Conteúdo e direitos

Os textos, práticas e meditações têm como base o **Guia Prático para Banhos Florestais** e o curso [Banhos de Floresta: teoria e prática para uma vida plena](https://banhodefloresta.mestranatureza.com/), do Instituto Mestra Natureza.

Textos, áudios, imagens e materiais das práticas têm seus direitos reservados. O código está disponível para consulta e estudo.
