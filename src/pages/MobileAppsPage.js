import React from 'react'
import './MobileAppsPage.css'
import MobileAppsCard from '../components/MobileAppsCard'


function MobileAppsPage(props) {

  const mobileAppsArray = [
    {
      id: 100,
      title: 'Fitted',
      img: 'https://chi01pap002files.storage.live.com/y4mlCW6VW6x_FUz5ZQwCI6yIJFwEJGOOwm_rzDkQbK1Usew9EeaVnQ9T__nyoa1RNYonaIIhnY8dTYNua388aqNQXUfZ2AQqArr8k63WpBbeOScia_HRmE02ISQBO40rbZluZMbcaAmqMwrDssnGyv2cV1EsaaIsxPxK_m1Awk89pOBvdBTYUYIOJL5m4vvFMiO?width=305&height=660&cropmode=none',
      gif: 'https://github.com/linkfang/portfolio-gifs/blob/master/fitted.gif?raw=true',
      repo: '',
      language: 'Swift',
      isPrivate: true
    },
    {
      id: 200,
      title: 'Nearby Foods',
      img: 'https://chi01pap002files.storage.live.com/y4mK2b2vSJmQ0qmucCgoGNpP3tKQUQy8XQEXmKUvaSTaGQuzbo7o0rP-GmaXJ8-DtafdfCOvN25Uq25pHNdbnYyCpfqqYWo23XcS1HVbLSZuNxWzEGGHFrnIvx2BukJfviGOOQuHb36anbqrYSXE__RVENrkb8L36P4pTuBi0rLZiFTZRoArzye8qjIPnl2oMHP?width=305&height=660&cropmode=none',
      gif: 'https://github.com/linkfang/portfolio-gifs/blob/master/nearbyFood.gif?raw=true',
      repo: 'https://github.com/zhou0160/react-native-yelp',
      language: 'React Native',
      isPrivate: false
    },
    {
      id: 300,
      title: 'Player',
      img: 'https://chi01pap002files.storage.live.com/y4m8kGQZJ-BstO7hAU58lLhwkXmLP4Lbbo6pzuRwsEqJWLXyh_taZr6v3U8mQvSjeqB1-XTc6kYjJVWtKBwdau9pc8yZMSJolZepqJ4UqxXfL5LyM8xJp09BqsDAdsqyVSGoozqcYnbcQj1qMg-qzq16raARXCXF4brh9bsygfJOeAWq8kWXeWnDGcuhqH5PhHi?width=305&height=660&cropmode=none',
      gif: 'https://github.com/linkfang/portfolio-gifs/blob/master/playerPre.gif?raw=true',
      repo: 'https://github.com/linkfang/player',
      language: 'Cordova',
      isPrivate: false
    },
    {
      id: 400,
      title: 'Github Searcher',
      img: 'https://chi01pap002files.storage.live.com/y4mWjd0mlTla4f0Kd9J9vmog_dCRyTGNqUOnNsGftSVRpGFNiYxEi_cTF_DIbZeWBFUl5K47_lNj-8SQlTx769t-HNYK5V9QcwuC26OC4MKOGk2Av6PzmXficAdMeFV9D_QLx9KZPCAQ8c8DQ5kgXPhyisOsAwelwM40_CI3af7wNxEjrX4udv1lmWrY1nN3UQR?width=304&height=660&cropmode=none',
      gif: 'https://github.com/linkfang/portfolio-gifs/blob/master/githubSearcher.gif?raw=true',
      repo: 'https://github.com/linkfang/github-searcher',
      language: 'Kotlin',
      isPrivate: false
    },
    {
      id: 500,
      title: 'Tundra',
      img: 'https://chi01pap002files.storage.live.com/y4mZkmbGE9ho0YuJFEIQwgAASMiTn8toMrSRAAb8FByQLlhKWGKmlkPSbFzQeReW8IUT3tqAMpF_mkGHKNPKyibnCZeIJZALrbPDOWhP3u04bRPgHfy55HEa1nRjOSVdGuQnwuwMhejqfD6NVZcjK073ev-nmUfLCjcCr4OWogoJRuOA1vbgRl3mmtBAEwdsiBn?width=304&height=660&cropmode=none',
      gif: 'https://github.com/linkfang/portfolio-gifs/blob/master/tundraPre.gif?raw=true',
      repo: 'https://github.com/linkfang/tundra',
      language: 'Cordova',
      isPrivate: false
    },    
    {
      id: 600,
      title: 'Reviewer',
      img: 'https://chi01pap002files.storage.live.com/y4mKwNU3iYAIXUBFn6YLF9SOM0pO6R5GWlKssqv263Se8haVCnLwR9IFzT7YV1gYpvcwQu5vHzaB1cs5dsRpodrTMMClWtKSL2kxH6q_br2VwA91jWWkx4kl8yk_Ujm86wvj-jbgM9Iz_xUnSKrAn2IuoOcXVS53L_xVF48Dar_JkZ2nvYrW8tOacxrp_f3AFg5?width=304&height=660&cropmode=none',
      gif: 'https://github.com/linkfang/portfolio-gifs/blob/master/reviewerPre.gif?raw=true',
      repo: 'https://github.com/linkfang/reviewer',
      language: 'Cordova',
      isPrivate: false
    },
    {
      id: 700,
      title: 'Finder',
      img: 'https://chi01pap002files.storage.live.com/y4mRoVRu0KOfUOrdn_QHotxbDo2lPMDlUaxp_LIEKmh8pfyMTdWRG3VDjwfXXeTv2oXlc0BQxldE7ZixIiF1-FhatHdTL5DWls-AASMKIH2MIu5QwmOqEEXkUUCxOkXpH47y6-8Br07LF_nQLs8AUT7K5BXCzgBMurtznqaNHKem05iQysRPzDH7w605YXqtEKO?width=305&height=660&cropmode=none',
      gif: 'https://chi01pap002files.storage.live.com/y4m_PrWVkzuGI7yuWR_o866yqHDd_-dtTVKWjWvRwM1giQU0o6Hmrp3j5cou11gtW_CZE-DN90tk8Sqsg57uT_vmjwRNTs1c76zOhU1FwPb3kcHcIhBQSWKxa-UDz995Sb9eAsvq5dX9YyCHsXLG8mBSlDAy49LEorPip4XWkECvEpnnBf1ZfLg0diLDb94NWpf?width=1080&height=2240&cropmode=none',
      repo: 'https://github.com/linkfang/finder',
      language: 'Cordova',
      isPrivate: false
    },
    {
      id: 800,
      title: 'Reminder',
      img: 'https://chi01pap002files.storage.live.com/y4ml2x-llhbX8_7HINc4F4rcLeb_x9LX0hYUldkAhXfjPn9LKWzfS6G9tL7OQXGQUqn9NqeCFU693yTwysb8OAhA7ytCzXReNursGKkhV_UN479QhEuClBA77qM2t39xgg4bdkRDRiGa9jkKtlQ0PINki9-SPiCpfKbmirj1uIbWdPe3krU0ZIA-mbDr6Hq2Hu3?width=305&height=660&cropmode=none',
      gif: 'https://chi01pap002files.storage.live.com/y4mPnUcdMBhaWPo5htfo80M7qHnZ9HWtBgeOcnWQkxFzDXgtKSBWgx4EfHN5nz7VVbpekVhgdRxgpundSXQBp5QNLJBpx3eP-B2IN1g4UEZPDj_DxXYXBf0Qi2w70Y4hP8QZcza5fzD7UYHYshs2icW-HIu8IfeXaWiJM8VvMx4RecrwVnVC-XVhdaBjUJape3y?width=577&height=1024&cropmode=none',
      repo: 'https://github.com/linkfang/rememberall',
      language: 'Cordova',
      isPrivate: false
    }
  ]

  const cardList = mobileAppsArray.map(
    card => <MobileAppsCard key={card.id} card={card}/>
  )

  return(
    <div className='main'>
      <div className='cardsCtn'>
        {cardList}
      </div>
    </div>
  )
}

export default MobileAppsPage