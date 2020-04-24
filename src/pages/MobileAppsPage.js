import React from 'react'
import './MobileAppsPage.css'
import MobileAppsCard from '../components/MobileAppsCard'


function MobileAppsPage(props) {

  const mobileAppsArray = [
    {
      id: 100,
      title: 'Finder',
      img: 'https://el11ug.ch.files.1drv.com/y4mE6Dmd2-Q_zOuKgWEC5jlJZoMVChNti6aP-vhTVtGsuYSKW2JBaL6QxOMLsXh2lt-bxCWVPKRKYLRQTJKiHv19xlqSNlUKuPbDbi2xpxyX4IYvs_cqKivgn--QiUC9iDsv2Qzx9iwU0PFVvukEG6-vPSYHxqZZM6pWcqdwoEk4AsFUeJlROq5S_qMP1xBSC7sQvs4eZxVP2LRM1S-qI8Q8A?width=473&height=1024&cropmode=none',
      gif: 'https://u1pgca.ch.files.1drv.com/y4myMl3LLyiCNZV9Op3CFDQ2Pny1RgMYRIX1D6eTeVGrmeTXUPFCXnWgz9x2UCzZuKOIta6tAPwOL0B-rA3vBUvwDAagikJUs3Yyoj__pOKbslEUTzZoSeT-SmYK1iqbWhC9iRcjL5HQm_zmOzZNbnfZJUsqjrbVKM9uoPI-kMZpm6F5-ZPOPuXA3CVT075HUAeyb_yxy5AlihUVK4ZcJI2fg?width=473&height=1024&cropmode=none',
      repo: 'https://github.com/linkfang/finder'
    },
    {
      id: 200,
      title: 'Player',
      img: 'https://6ggpia.ch.files.1drv.com/y4msGeTvCD8pPatnKAhloZUzWUCPsTx_oIlsabdw_GgVk-yyqVqcKzeyHa-ssTS8t8_lFUlE_N7M7fZIvxe1-_ErbqSHuxbgk5NTYYxxpQh2xDeEcXjr085fmYFzgIL8nfMChOE19cqzXvw_BfOP-q_ELhmuqSAVSnRo36-o1tsG2DLKs5MFh9wnv5THclxa4asq_0W4iGWXYmZAHtAM3j6tA?width=473&height=1024&cropmode=none',
      gif: 'https://linkfang.github.io/portfolio/src/img/previewImgs/playerPre.gif',
      repo: 'https://github.com/linkfang/player'
    },
    {
      id: 300,
      title: 'Tundra',
      img: 'https://rdgwig.ch.files.1drv.com/y4maGezfgLiCfcrW1TmAjpqWms-QIp6jbvIiwzwYRTZ0Sq2gMZNRoDHXTe2jfCAWQ2OPPrhTnDkH5C6cvCGjVC0Ey_po-DH7uhoDVsqJqrjS-KXg-5LNQKh5ysfPBjafht3EVuI231h0z9hZYhUHYCiJrSzUmgHiFfAoGGzQNknnil9vEQ4Xy3u64QyF4QvwyZgQz-8rkrcgaHq08ysVlOi5g?width=472&height=1024&cropmode=none',
      gif: 'https://linkfang.github.io/portfolio/src/img/previewImgs/tundraPre.gif',
      repo: 'https://github.com/linkfang/tundra'
    },    
    {
      id: 400,
      title: 'Reviewer',
      img: 'https://rdgb6a.ch.files.1drv.com/y4mmR5iOfcVGJhcLmInGbUNNJWyQz5EpAcVky46j20hiJcY08npLpwkj461gV7XZp9oT7_Wqt8gTsvLaBmH4mk92d8A-oTYBwTaIKpcBzkHO7leuftFYA7jyyB3BKQPcwPoPrXpl1hrJbNt7ngthT-SZIpES9JWLTTy3Xz4nT-Dhy0YHJOzuKG542SWQ7xQhNd3VMbizj9GdhCteiICc-vQpA?width=472&height=1024&cropmode=none',
      gif: 'https://linkfang.github.io/portfolio/src/img/previewImgs/reviewerPre.gif',
      repo: 'https://github.com/linkfang/reviewer'
    },
    {
      id: 500,
      title: 'Reminder',
      img: 'https://el1g5q.ch.files.1drv.com/y4mLi2VpKiDJvXhZINbANMeY_B-4voWA9rH77iD1TTBJkHlygslykyYne-B3IjO3SU1I5isMz803ec7fhZKIjccPR-29Yqu4Ui67tp1pD30yC8iJ-XbG-dzuhgxbUfb4YReOJMqAhIFu49Jz6-34RWqJ0i7tZtL6la9y4yJO8P2whbpYxRlMMsQ8J1gYibwdD1Q5fxwb4zygoq2_4I2KX5GFA?width=473&height=1024&cropmode=none',
      gif: 'https://linkfang.github.io/portfolio/src/img/previewImgs/playerPre.gif',
      repo: 'https://github.com/linkfang/rememberall'
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