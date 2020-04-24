import React from 'react'
import './MobileAppsPage.css'
import MobileAppsCard from '../components/MobileAppsCard'


function MobileAppsPage(props) {

  const mobileAppsArray = [
    {
      id: 100,
      title: 'Finder App',
      img: 'https://github.com/linkfang/portfolio/blob/master/src/img/test.gif'

    },
    {
      id: 200,
      title: 'Player App',
      img: 'https://sxj9tw.ch.files.1drv.com/y4mQogyEFM8ogTmkLv7imVl0g9SovfADGv6uk6rdiNKB0eHORyZXM_q9HMQaHT7fAuqG0lbuHzFw-2H7g9xSO_cgTtHmALDVT7Jp1KRoUMuVL24DjUPH1HEDFOb5RkxoM1OOoveiwrw8fKmPRm_1BgX1YoFpes5uSTxtrZeD-Ip96DguTHAONwuqWmOxiBKZ76aMXfcvGMvi267BYYAMSK9jQ?width=576&height=1024&cropmode=none'
    },
    {
      id: 300,
      title: 'Reminder App',
      img: 'https://hhypiq.ch.files.1drv.com/y4mflVJsE6mAr-ma_pIU4Ld5PHVRrSjQ4kC3Xg6ieGKlFgsFllez3JHTlXfbr_xa2NZhoZ0qv82jcpySEsiBCTWeR8W1_SkxZhXSJvwQwgPc17XkMykSJkelDvlWA7CxgzXrrR3icYvrdc7eJt7KEloSn0bFRspCgMA2tAQMk3alFiOiTvU4oGVgeMXOOrKyIFOy9My6m0Uxq_fDY8XvEEaPA?width=573&height=1024&cropmode=none'
    },    
    {
      id: 400,
      title: 'Reviewer App',
      img: 'https://sxiyla.ch.files.1drv.com/y4mSURzFTAvWOrYmGxjRx-jAtQQ0hnNjC-sJT9REYopj_pBIkB3coe-z1OmQRFlxXi7zJUe7Ggl9JZLsZ9skOhEW6GvSISFyuhVFiYLOsxQUOwH08xvHyLCLgeY-E63AJwhi41-d03G5j6MnHsI3lJTF2J1iboB7feduk1azK7qN4-kec0oThLYivX_tIck4s2tqirpxy7Ml-6H9LnZRuMOMg?width=494&height=1024&cropmode=none'
    },
    {
      id: 500,
      title: 'Reviewer App',
      img: 'https://to1ucq.ch.files.1drv.com/y4mfJs_dO09Vb96ZrpczIdx-ShEgNI8b6D7I3q_EHaw1aD-z5_vWd1oT2k4Tl1Hw6t5e24j04LQTkMfg7M4ZXPZK6_ub6xI4B5vOehb4D2CdelHAIAXuRvRwuLtVfC_txYUQH-EhnvfDM0ZDjXT4RIx6TVMoZOuySc00uc0hNs7u-dP5e4r-5GNdEBsCVo5wDuxuZV1t3-ZF9jbY3VQFwa_6A?width=576&height=1024&cropmode=none'
    }
  ]

  const cardList = mobileAppsArray.map(
    card => <MobileAppsCard key={card.id} title={card.title} img={card.img}/>
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