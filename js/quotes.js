const quotes = [
    {
        quote: "시간은 인생의 동전이다. 시간은 네가 가진 유일한 동전이고, 그 동전을 어디에 쓸지는 너만이 결정할 수 있다. 네 대신 타인이 그 동전을 써버리지 않도록 주의하라",
        author: "Carl Sandburg",
    },
    {
        quote: "당신이 평온과 행복을 찾는다면 누군가 질투할 수도 있다. 그래도 행복하게 살아가라.",
        author: "Mother Teresa",
    },
    {
        quote: "준비에 실패하는 것은 실패를 준비하는 것이다.",
        author: "Benjamin Franklin",
    },
    {
        quote: "나는 매우 일찍 인생을 무조건 받아들이기로 결정했다. 나는 인생이 나를 위해 특별한 것을 해주기를 결코 기대하지 않았으나, 나는 내가 희망했던 것보다 훨씬 더 많은 것을 성취한 것 같았다. 대부분의 경우 그런 일은 내가 찾지 않아도 저절로 일어났다.",
        author: "Audrey Hepburn", 
    },
    {
        quote: "과학은 시로부터 탄생했다. 시대가 변하면 과학과 시는 더 높은 수준에서 친구로 다시 만나게 될 것이다.",
        author: "Johann Wolfgang von Goethe", 
    },
    {
        quote: "천재와 광인사이에는 아주 가느다란 선이 있다. 나는 이 선을 지웠다.",
        author: "Oscar Levant", 
    },
    {
        quote: "슬픔 속에는 연금술이 있다. 슬픔은 지혜로 변해 기쁨 또는 행복을 가져다 줄 수 있다.",
        author: "Pearl S Buck", 
    },
    {
        quote: "내가 상상할 수 있는 가장 슬픈 일은 사치에 익숙해지는 것이다.",
        author: "Charlie Chaplin", 
    },
    {
        quote: "어젯밤 10파운드짜리 마시멜로를 먹는 꿈을 꾸었는데, 깨어보니 베개가 사라지고 없었다.",
        author: "Tommy Cooper", 
    },
    {
        quote: "오래 살기를 원하면 잘 살아라. 어리석음과 사악함이 수명을 줄인다.",
        author: "Benjamin Franklin", 
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quoteSize = Math.floor(Math.random() * quotes.length); // 0~9

quote.innerText = quotes[quoteSize].quote;
author.innerText = "\n" + quotes[quoteSize].author;