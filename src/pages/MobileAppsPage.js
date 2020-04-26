import React from 'react'
import './MobileAppsPage.css'
import MobileAppsCard from '../components/MobileAppsCard'


function MobileAppsPage(props) {

  const mobileAppsArray = [
    {
      id: 100,
      title: 'Fitted',
      img: 'https://t43tqa.ch.files.1drv.com/y4meayeUcYiJc82a1BJJWRCmcMDglROa25IFWZ8pnHucUrkdeYZGn3uBsx0ebFREWGVq9dz8PlHRGrjOMqVmkOdYahESc8Nb3cPRqFB3lX31pynttZtk_kCOLvUmZcVtc2gC3AOQn63Irv6KF9bC1ePrle-gRR_cVYFNhJc_Dc3ZTryRFgIMs7U335_jHuxfVSO4MX4yjps1h3IBTRLV5KlMw?width=473&height=1024&cropmode=none',
      gif: 'https://linkfang.github.io/portfolio-gifs/fitted.gif',
      repo: 'https://github.com/zhou0160/react-native-yelp'
    },
    {
      id: 200,
      title: 'Nearby Foods',
      img: 'https://6ggxia.ch.files.1drv.com/y4mJiw_VcymgINCjF0AFO9s2gUEDBagfCOUNIYAYcFgpANk4UMAmWDQH6qzINR87dFatU1Mm3j945aW7EIEJlAzOu01_1qigRtidLW9RSLdxLrmf11vvyMN9wJtDBveofAVMGchT42HiJAZamOsR6OGFYL5wrxTTMXkmW8s4--Tjlr6SLdhJRKSAYgFEuAPYJoyOLUNXs3KodiahuOVgHLfHw?width=473&height=1024&cropmode=none',
      gif: 'https://rdg4ig.ch.files.1drv.com/y4mo78gIa_fzzthD67lwjVTtbDTAgIRmRR-DuloT35efBFYsnR0LR-_d3DzBMCA3EeTI7dXo5awoHC3czH07gNh_Dfco9Y0Qic7LBvX4SlO07V-15aqh6ato5FmA3ZMAxE0dMfpar3J4Svr8l_WCV_wfYe-03LuOlveT7C-sl-cOK0FSYDXfHju747HnqNqpH-J0I6CDJQxV2spglWfUpUSYg?width=473&height=1024&cropmode=none',
      repo: 'https://github.com/zhou0160/react-native-yelp'
    },
    {
      id: 300,
      title: 'Player',
      img: 'https://6ggpia.ch.files.1drv.com/y4msGeTvCD8pPatnKAhloZUzWUCPsTx_oIlsabdw_GgVk-yyqVqcKzeyHa-ssTS8t8_lFUlE_N7M7fZIvxe1-_ErbqSHuxbgk5NTYYxxpQh2xDeEcXjr085fmYFzgIL8nfMChOE19cqzXvw_BfOP-q_ELhmuqSAVSnRo36-o1tsG2DLKs5MFh9wnv5THclxa4asq_0W4iGWXYmZAHtAM3j6tA?width=473&height=1024&cropmode=none',
      gif: 'https://linkfang.github.io/portfolio-gifs/playerPre.gif',
      repo: 'https://github.com/linkfang/player'
    },
    {
      id: 400,
      title: 'Github Searcher',
      img: 'https://hxzfcg.ch.files.1drv.com/y4mgMOsic3bZFiHag2uC9lwG1XuposS91jVlJlJeJ8MvGrHBTQlbsvMD-Y1fy-xSOMUJR9qlMBtZMMz0G1b4cpFPxfTki3LPmVZoAN40am8Ku3HB1PdC8xfkd5n7RcMCP4sg7cxIFdT7gigt5tQPZhjJwcV1Q2Ap8l9GJtb_f_RL1hpAV9K0oIQDBsllE1nHw0RwnC0zCT40cQ6bmMQd3kNnA?width=472&height=1024&cropmode=none',
      gif: 'https://hxaofa.ch.files.1drv.com/y4mf97MMdt8c14hr5ocxAPPAi0sPCSwnCfpwHZoM62IRbtkv1R9Aw50GwvO1lh7S2FIlw_W9ZgH0THMybR5N5n6cl2Rpf-ov_ckQT1Txu7hlgUYgBFWxvdKTgE06C0Y3da682IQmUcrt75tjFZD8OENm1a-ExP5ucqeDeNEG7UV0N5lHWu9IUppUr7z8UGbqHPiujajwUPgpP0LjgGTpfN9jQ?width=473&height=1024&cropmode=none',
      repo: 'https://github.com/linkfang/github-searcher'
    },
    {
      id: 500,
      title: 'Tundra',
      img: 'https://rdgwig.ch.files.1drv.com/y4maGezfgLiCfcrW1TmAjpqWms-QIp6jbvIiwzwYRTZ0Sq2gMZNRoDHXTe2jfCAWQ2OPPrhTnDkH5C6cvCGjVC0Ey_po-DH7uhoDVsqJqrjS-KXg-5LNQKh5ysfPBjafht3EVuI231h0z9hZYhUHYCiJrSzUmgHiFfAoGGzQNknnil9vEQ4Xy3u64QyF4QvwyZgQz-8rkrcgaHq08ysVlOi5g?width=472&height=1024&cropmode=none',
      gif: 'https://linkfang.github.io/portfolio-gifs/tundraPre.gif',
      repo: 'https://github.com/linkfang/tundra'
    },    
    {
      id: 600,
      title: 'Reviewer',
      img: 'https://rdgb6a.ch.files.1drv.com/y4mmR5iOfcVGJhcLmInGbUNNJWyQz5EpAcVky46j20hiJcY08npLpwkj461gV7XZp9oT7_Wqt8gTsvLaBmH4mk92d8A-oTYBwTaIKpcBzkHO7leuftFYA7jyyB3BKQPcwPoPrXpl1hrJbNt7ngthT-SZIpES9JWLTTy3Xz4nT-Dhy0YHJOzuKG542SWQ7xQhNd3VMbizj9GdhCteiICc-vQpA?width=472&height=1024&cropmode=none',
      gif: 'https://linkfang.github.io/portfolio-gifs/reviewerPre.gif',
      repo: 'https://github.com/linkfang/reviewer'
    },
    {
      id: 700,
      title: 'Finder',
      img: 'https://el11ug.ch.files.1drv.com/y4mE6Dmd2-Q_zOuKgWEC5jlJZoMVChNti6aP-vhTVtGsuYSKW2JBaL6QxOMLsXh2lt-bxCWVPKRKYLRQTJKiHv19xlqSNlUKuPbDbi2xpxyX4IYvs_cqKivgn--QiUC9iDsv2Qzx9iwU0PFVvukEG6-vPSYHxqZZM6pWcqdwoEk4AsFUeJlROq5S_qMP1xBSC7sQvs4eZxVP2LRM1S-qI8Q8A?width=473&height=1024&cropmode=none',
      gif: 'https://u1pgca.ch.files.1drv.com/y4myMl3LLyiCNZV9Op3CFDQ2Pny1RgMYRIX1D6eTeVGrmeTXUPFCXnWgz9x2UCzZuKOIta6tAPwOL0B-rA3vBUvwDAagikJUs3Yyoj__pOKbslEUTzZoSeT-SmYK1iqbWhC9iRcjL5HQm_zmOzZNbnfZJUsqjrbVKM9uoPI-kMZpm6F5-ZPOPuXA3CVT075HUAeyb_yxy5AlihUVK4ZcJI2fg?width=473&height=1024&cropmode=none',
      repo: 'https://github.com/linkfang/finder'
    },
    {
      id: 800,
      title: 'Reminder',
      img: 'https://el1g5q.ch.files.1drv.com/y4mLi2VpKiDJvXhZINbANMeY_B-4voWA9rH77iD1TTBJkHlygslykyYne-B3IjO3SU1I5isMz803ec7fhZKIjccPR-29Yqu4Ui67tp1pD30yC8iJ-XbG-dzuhgxbUfb4YReOJMqAhIFu49Jz6-34RWqJ0i7tZtL6la9y4yJO8P2whbpYxRlMMsQ8J1gYibwdD1Q5fxwb4zygoq2_4I2KX5GFA?width=473&height=1024&cropmode=none',
      gif: 'https://el3irq.ch.files.1drv.com/y4mIKJF6Bk4uKvVASnojvByXtnAZWAN3_w9EbXygDwAzBHdsfH6doaUmIfptlEcfjxOtldHUvcXzvY5BezYZa30IjougxpHmU9DHSwEPkeILk-b9ePsy9mNGsK7VIZ3scRMDla1XgCG0PvaZi8oOiUEkaB-jO-4RG0AgmoPvx9IlqUQW_IXaoXfhLN3Q-O8aaYPHZGTd7yOZVQKMnH2ZhuAuw?width=577&height=1024&cropmode=none',
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