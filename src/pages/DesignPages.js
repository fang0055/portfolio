import React from 'react'
import DesignWorksCard from '../components/DesignWorksCard'

function DesignWorksPage(props) {

  const designWorksArray = [
    {
      id: 100,
      title: 'Self-checkout',
      img: 'https://rnekxq.ch.files.1drv.com/y4mQQh72UDbhQ8AUhlhQQebsKSUp7h1jT0uV1zFFh_WZhSsBnhruCcEk-lfw1qNZLSCWaDwcF-jgiOkmVKMeWpVd2ZFeYDWXQTgw-UgEUWZaVQl8QTgzOQfZomRVjoph-_gCRDo2W6NSAMYKctQdJ6OjuUzGPY1anLqHvMp0hn5rPCXy7_IePELbBwHAM-Z1flOueGGWkOB0fi4z9ehRXMlBA?width=1024&height=768&cropmode=none',
      hover: 'https://rnhnla.ch.files.1drv.com/y4md_BJdIpG4ElvF4Ry7bp5fYZgl2l0-763qaNPLueup-Kt6SyiSkk40l4nLq-ZclySwBZaA7po8OyYeVyVxNU2nfBEL5coo1XjAAnr3Vq4grYIfkRn8oLKRTscDVu88H4JCf4gx83_CfFnVvLzTm9CNAtgE-2PhlGreWCBatiya32Er8w-fKBIS-ENOa-eZUTXvES73YkE1TqIVXRSxut3Nw?width=1024&height=768&cropmode=none',
      preview: 'https://1drv.ms/u/s!Apc5AcFl00C1y59Y9Ee8NtvfZyhtaw?e=g3TjDg',
      typeTall: false
    },
    {
      id: 200,
      title: 'Group Study',
      img: 'https://6gfgqq.ch.files.1drv.com/y4mPLcQ6PQ_3CQCxfP0_nCZl3JWYKDxNvk3w7OUag_99kY2aD4BBJNosZMQEOnjk88liXMAiIVPBWDacskSRcLzxKISVaYze7jiogByIf59iQlTPQuRlwpK_JTNwhi4hpjWc_89CmQ8vak7saaOcXHHfH-liomtS_agawBWWfluEMxSlPinfC9dKo_V7QWcXUBtYIUqzdxxHA06_5KB3Wh7SQ?width=485&height=1024&cropmode=none',
      hover: 'https://6ggyzw.ch.files.1drv.com/y4mJjHJjesx2dbUn9YrjTWHcE-JBwzqcNPjCow_iH3MHQ280_RVlVZqx0fksoV5-x-pdRdjoKWCrZ3L2HTkkcvl_LUMpxiZDeOIQPM3ox8Wh-ZpGmntLY6LyZu8yB5rzEE7c7dmySv9Z1Pr1xdQQF_bhS4XJmq4dZ7spLBFfTsHnXgPIEB4LY3JxqAOjE8nWweC9shQtyHZcaRPzmDb0wHtzw?width=485&height=1024&cropmode=none',
      preview: 'https://1drv.ms/u/s!Apc5AcFl00C1y6MUYC6DELK52tVEug?e=Q3mPwk',
      typeTall: true
    },
    {
      id: 300,
      title: 'Instant Tutor',
      img: 'https://6ge4bw.ch.files.1drv.com/y4m25pA95z5c8acErqR5VXpoAJYBosalMnwcMSzRtrzG-ZHqVAD8ebfBD28pCQJDrBNxwXdk8zdg1SzRgUfpXi26NSnzdefBZJgVzm66IszzSLRRSASe6UqX-m29hfQSEC583ks-atrOYq0gC7DqtVKB44S7_oaXbyQ42XLodeLU44Ux65jVPXv3h9LedbAUi4M-bOMTljPH7tsnS5CnY5H_g?width=485&height=1024&cropmode=none',
      hover: 'https://hxa3tg.ch.files.1drv.com/y4mrU_4TfT1bHYxOf9ApQiz0iocVBXdxIVV5kMJ8pHqdgdret2vP4EqdILOeDbpjH6yd3cj5zDUPMak8GY2f5KG9BKzlG_MIPTGGwAjrzRfoUPH7qtLkg7WSw-FFbtzVFi5MBKamSUyqBaiw31m1EHmZwAcq_8IeTPY0YhjpiYJyIMlA6OdX4aPPu7RK_SURdAVwtK124Zkc6Na_GY4AyCQZg?width=485&height=1024&cropmode=none',
      preview: 'https://1drv.ms/u/s!Apc5AcFl00C1y6MbEEkLab05ztJmFA?e=VwpWDU',
      typeTall: true
    },  
    {
      id: 400,
      title: 'Flower delivery',
      img: 'https://hptlwq.ch.files.1drv.com/y4mVP6hLoj2Ck-tZpk1TSatuEZSUfax7wRoqauuyngj9gqvaWZLg1wwDdwYHCdh-IQYvT1R-XU6c1kBYvE2WLFJT7F9-LJLNRNaDOVG_86onindLUQ1YiN3LyNGjHzIVZ_1tuIcL2MJkEoi09GKroL8tjIslvjXh6RYxURlqMtejrrm7G0cdzJf4cdj8o4ecp_r2PcJhEbEBhg9LyKkHclMAQ?width=473&height=1024&cropmode=none',
      hover: 'https://ul8nqa.ch.files.1drv.com/y4m3iez4yHFAdHw6Pe4g5lpHEbDga_pJBKVhIDs68rv7WZu4j6thTJ3hPnsuu6YL5M3Cc_OA4ufZq7FGGn54vrxqs7Xsaq43PfyfNV32C-LaYrxzx3HtsoheG1m1VygF1HCzvWhDShOYhtpvp2BgCifl0qdLb4nKTK_9tQptPSQumkuYcPGagAsne3Uy6PdvbiAqFkYD1h9nHW6jzFmWg3QCA?width=473&height=1024&cropmode=none',
      preview: 'https://1drv.ms/u/s!Apc5AcFl00C1y6MR22WNGoU7uJUVYQ?e=Q9eUiB',
      typeTall: true
    }
  ]

  const cardList = designWorksArray.map(
    card => <DesignWorksCard key={card.id} card={card}/>
  )

  return(
    <div className='main'>
      <div className='cardsCtn'>
        {cardList}
      </div>
    </div>
  )
}

export default DesignWorksPage