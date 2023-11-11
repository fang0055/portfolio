import WebAppCard from '../components/WebAppsCard'

function WebAppsPage() {

  const webAppsArray = [
    {
      id: 500,
      title: 'Cheer Up',
      img: 'https://chi01pap002files.storage.live.com/y4m2jmLALW6l4ijSNxlSWtU2_n-J3KjyiitImIxUYj7rLijnGr4lrrKtBOM513Gqb-GNgeTx6p40SpWJIIJs-USVm4ZuopQDJt5yezQuYvifE5enjo0EgSrywwAh-vsqaZVcrc8gtBbNMsQkDK_YR_9VS6IvO_bVKUecTjga_GmU35GHJWej_DUBp0opBiVVznN?width=660&height=394&cropmode=none',
      hover: 'https://github.com/linkfang/portfolio-gifs/blob/master/cheerup.gif?raw=true',
      repo: 'https://cheerup-ten.vercel.app/',
      preview: 'https://cheerup-ten.vercel.app/',
      isPrivate: true,
      moreInfo: "React, Spotify API, Vercel/Azure"
    },
    {
      id: 100,
      title: 'Hanson Agrochemical Consulting',
      img: 'https://chi01pap002files.storage.live.com/y4mZ16E8P2rPzKgQWg15hj87LMJTWZg9qoiuVLo1m0xcVSkIHeLeN_6UGq1wurEJ113M5oiYuT5x0JQIILY2KQz7tD3zRfejNAmHXDTgPKvcz-GuRAFdNj__ixl9gNgEtQKCRowl_AHl_BXhh335E7LrtppLGX4KmkPeo7kxfdq6r5BS859R9BMjB-xcvZpd6m6?width=660&height=335&cropmode=none',
      hover: 'https://github.com/linkfang/portfolio-gifs/blob/master/hanson.gif?raw=true',
      repo: 'https://github.com/linkfang/hansonagrochemical',
      preview: 'http://www.hansonagrochemical.com/',
      isPrivate: false,
      moreInfo: "GitHub pages using custom domain"
    },
    {
      id: 200,
      title: 'Pizza Shop Management System',
      img: 'https://chi01pap002files.storage.live.com/y4m0-aDBf3pr5r2bny1a-_MzhKIBHC0S875quANiBORTLprOXyLAO0KNa0Kga_pS8YWp0wJ8JT7KW0sGx6AVR-i-KcfB-TIkqdjivo4U8SMWHAmPf8RXQ0NWXoM3ZcbAbvXviF4GYIxtPoUI_p9A6Pm28B3Do4uwvey9VCSbDL94LjBi7w4zrDSDU2JzHauZGLd?width=660&height=367&cropmode=none',
      hover: 'https://chi01pap002files.storage.live.com/y4mwlat35hdQlO5doz5QPqMmPknj80fqGHXQU0VN1IxkKKPV_CHMzwvh5dwoMrDpmKQNUeVoy8AJYaixxstMTd2NDXNDIXE6_xin5t6vKAdtK5w-6DfL2SGOdN35g6Z5X7IFdZVgkxoCuCc_u7G45vYVxGQQTy8eiYHvQRVP-K7s-9QS4mpw1VYS5znwgcCezpN?width=660&height=366&cropmode=none',
      repo: 'https://github.com/linkfang/pizzaShop',
      preview: 'https://linkfang.github.io/pizzaShop/index.html',
      isPrivate: false,
      moreInfo: "Edumedia Server"
    },  
    {
      id: 300,
      title: 'Movie Recommendation Website',
      img: 'https://chi01pap002files.storage.live.com/y4m6zJAlIwcbs2NLYT-KnNQX0x59RMtjPE4foVDQuDhRD0Ze0J5H_Q4ncsz73omdploMiVzakArMcnmBRqNz8A6b-RClXO4TGwVZqjKPvYX2d0PLjf76oh-uj2jCzxmrTGLp5Erx15ZJFe03a0UnwfTWyLiIWtq8F5CqmX9xrNQneRaSjfh1jWedbh-lUr1tKkJ?width=660&height=362&cropmode=none',
      hover: 'https://github.com/linkfang/portfolio-gifs/blob/master/movie.gif?raw=true',
      repo: 'https://github.com/linkfang/API-Project',
      preview: 'https://linkfang.github.io/API-Project/',
      isPrivate: false,
      moreInfo: "The MovieDB API"
    },
    {
      id: 400,
      title: 'Personal Website',
      img: 'https://chi01pap002files.storage.live.com/y4mSwZIJxxhD9IRyoZbsjfM7JgAY5z0gVbveNz3kQmFNYihw2KUCA2-vVE0CSRjX5iYKiMoC_eL-lO1sLFrW9WFi6QAIwn7RHxpGWJNPZwopfKGkocbVbBoGDVCqztI0LjlXMlbM6P2CVdHB2GkCDjs8o9YwSS137o3u-sNMrl_1WbhsDY2QVpXpmdOqiHAnz3g?width=660&height=371&cropmode=none',
      hover: 'https://github.com/linkfang/portfolio-gifs/blob/master/personalWebsite.gif?raw=true',
      repo: 'https://github.com/linkfang/Bootstrap-Project-Link',
      preview: 'https://linkfang.github.io/Bootstrap-Project-Link/',
      isPrivate: false,
      moreInfo: "Bootstrap"
    }
  ]

  const cardList = webAppsArray.map(
    card => <WebAppCard key={card.id} card={card}/>
  )

  return(
    <div className='main'>
      <div className='cardsCtn'>
        {cardList}
      </div>
    </div>
  )
}

export default WebAppsPage