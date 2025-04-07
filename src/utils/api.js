export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://nomoreparties.co/news/v2/everything'
    : 'https://newsapi.org/v2/everything';

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
};

export function getSavedNews() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: '67eb9aa4101108a7960bf472',
        title:
          "2 of Streaming's Top 10 Shows This Week Replaced Major Characters During Production",

        url: 'https://www.cnet.com/tech/services-and-software/why-these-two-streaming-hits-replaced-key-cast-members/',
        publishedAt: '2025-03-30T17:07:21.6872791Z',
        description:
          'Commentary: Both series sit in the Top 10 lineups on Netflix and Max',
        urlToImage:
          'https://www.cnet.com/a/img/resize/37d3212203207069ffa4cedbd887feaa519c95d7/hub/2025/03/26/cc8c1222-7dfa-4bd9-acf9-46806ee2f6a5/the-residence.jpg?auto=webp&fit=crop&height=675&width=1200',
        source: 'CNET News',
        keyword: 'Netflix',
      },
      {
        _id: 'the-7eaf00264efe7dea869f20e',
        title:
          'Ive not heard of incel before: Teenager dissects Adolescence with his worried parents',
        url: 'https://www.bbc.com/news/articles/c93nzv49dg2o',
        publishedAt: '2025-03-30T00:25:44Z',
        description:
          'Fifteen-year-old teenager talks Andrew Tate and girl-boy friendships with his concerned parents following release of Netflix drama, Adolescence.',
        urlToImage:
          'https://ichef.bbci.co.uk/news/1024/branded_news/b9dc/live/9c2f4230-0c82-11f0-b6c2-a58dae0af4a0.jpg',
        source: 'BBC News',
        keyword: 'Netflix',
      },
      {
        _id: '67eb9b4003c221fd7d2da84a',
        title: 'Why are Morrisons and Sainsbury',
        url: 'https://www.bbc.co.uk/news/articles/c30mevm3g60o',
        publishedAt: '2025-03-30T17:07:21.6872791Z',
        description:
          "Morrisons and Sainsbury's have announced a raft of cafe closures - but some customers insist they should stay open.",
        urlToImage:
          'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/9c4b/live/8c853980-0c9f-11f0-ba12-8d27eb561761.jpg',
        source: 'BBC News',
        keyword: 'cafe',
      },
    ])
  );
}

export function saveItem(item) {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: '67eb9bb666d3ac04fd0b7d0c',
        url: item.url,
        title: item.title,
        urlToImage: item.urlToImage,
        description: item.description,
        source: item.source.name,
        keyword: item.keyword,
        publishedAt: item.publishedAt,
      },
    ]);
  });
}

export const deleteItem = () => {
  return new Promise((resolve, reject) => {
    const response = {
      ok: true,
      status: 200,
      statusText: 'OK',
    };
    resolve(response);
  });
};
