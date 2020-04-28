import React from 'react'
import WebAppCard from '../components/WebAppsCard'

function WebAppsPage(props) {

  const webAppsArray = [
    {
      id: 100,
      title: 'Hanson Agrochemical Consulting Website',
      img: 'https://el36wq.ch.files.1drv.com/y4mK_tVmQHOf9YtWD396p6D4uju4wkN_9MeyT3H7_P1DLVyJFLIZ3iO4LzKMdj_smdZLeyn7vysw8MDWL_rqkz4wmAcMWf7idI9ZXb_hzBV7ykRXi9kZK7vdzICvFCrzz9MMYBnowqY--_41o8L-xsuEh7CVinAjNHA5jfafqc1I1HN4aDAb4Z_y9H_AVa6EQNJE3FpYjEUGhGHmx9PGrpXdw?width=1024&height=520&cropmode=none',
      hover: 'https://linkfang.github.io/portfolio-gifs/hanson.gif',
      repo: 'https://github.com/linkfang/hansonagrochemical',
      preview: 'http://www.hansonagrochemical.com/'
    },
    {
      id: 200,
      title: 'Pizza Shop Management System',
      img: 'https://ev0r6a.ch.files.1drv.com/y4mfqImOoW9rP0YPmrcOPs-5yhyZZ3WIuDTHH3g3u-Dkd6Aag0VlYJsef6r9PovlagpA0WJKnPk1D0NZlF36utkCB6hPJ3dQyUfXluDKF77SdPkA5Not49u-SJMiXjUZeidu6J3AgDKKxjfRXtIdb1fgLkhez9ntJtYoUQllA6yamPsT32rBAhEcRe3cRmmubwZPaZrXDOZW7Ximl4-EpGy8A?width=1024&height=570&cropmode=none',
      hover: 'https://ev12cw.ch.files.1drv.com/y4mViVQidiexTFTz0026fF2TT_8_mb2TEo7Yc7TeWViS4ua8IMtKX7VENWJQx84LBgGG3CdxDLgoGUJnLSdpT6yeH3wDYKpgN2iHTJcLHyIdpu5tnxcCcbbU0HL2hGhSnQovprRTRmgY0GRaKi7HvEm9TACFoV_kgMGIW0Q8vHWMnk4PPv6kS0LRe2PuwlKJt9jzOJgjfo6J49_huCHW-TzJw?width=1024&height=568&cropmode=none',
      repo: 'https://github.com/linkfang/pizzaShop',
      preview: 'https://linkfang.github.io/pizzaShop/index.html'
    },  
    {
      id: 300,
      title: 'Movie Recommendation Website',
      img: 'https://ulpa4g.ch.files.1drv.com/y4mfoNrFLcRDhyr6uJ1RjqBkqXqWQfP-jBk3IBtl4TGs1QBe6Ln7dUgoapMOMezWAw6jR4a4sE2SAtjyb-izR69HFDn7ID7kOY6uiLWdQPUiTQyXQQCA5WY4RcJalmG9qkWZtwusRwribx6hOW6R0AToyu7404FwV3v9NNQ1CFsPzL7cgoue88ld1xRzYMlyYv2X3kwUelzEh5va4MB5iOLHw?width=1024&height=562&cropmode=none',
      hover: 'https://linkfang.github.io/portfolio-gifs/movie.gif',
      repo: 'https://github.com/linkfang/API-Project',
      preview: 'https://linkfang.github.io/API-Project/'
    },
    {
      id: 400,
      title: 'Personal Website',
      img: 'https://ulqewq.ch.files.1drv.com/y4mXVzMfdF8MbrGetv0nX49ei2BFeVpqPPpuEWcVw_K73L6EwkZrIKf2OP_XnQsNqIaGvZqiJHdEyADm4ioNJNmLrIzrOiVt_KU7tyQ-VkZlrlJUjMCs9kNkZ4ybypBr9FF5iTdTk5v17ukjVTK--HAmrXNKjYcZ6Kaj-soK46kcGOorSSZXUJoy9dcdgkY16Y3rRcmPd31hSi6GcVWv7GC_w?width=1024&height=575&cropmode=none',
      hover: 'https://linkfang.github.io/portfolio-gifs/personalWebsite.gif',
      repo: 'https://github.com/linkfang/Bootstrap-Project-Link',
      preview: 'https://linkfang.github.io/Bootstrap-Project-Link/'
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