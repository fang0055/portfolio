import DesignWorksCard from '../components/DesignWorksCard'

function DesignWorksPage() {

  const designWorksArray = [
    {
      id: 100,
      title: 'Self-checkout',
      img: 'https://chi01pap002files.storage.live.com/y4mqiKdNxxilwmXKAHxbFqGaek2klbKTTThmfePQgXp9n6U8_0fZdHBDJte_jzUIffy8qespo7xuTX6yYP-CXC0LrRdrXBnKxq6ShNRrWdoCPJiw3w0eqJU1k9A4Ev5wJbOnQjs684MULUCWdU0swI9EVUIpHEZ13BAKZtrZlIy2WOpKTVcV63CtqmohQMCyopW?width=1024&height=768&cropmode=none',
      hover: 'https://chi01pap002files.storage.live.com/y4mUpQvZFKGgSYM8t4PXRf5C6wFeqL2ztDSkLvMmDs80qgxjJkociGJqLkGbuwPB4frPwVuQM5yPtWLL8ZMoazfAnNiswhx1YYzkj_TlE5FvV2XdG__hbDNvtesbUAZNtDbVCnjE_Q1wIVmnOaaeoGJbz5FrMFX9AvnD1rkBnJGvrkb4pHwIvLCjXozypvuf8i4?width=1024&height=768&cropmode=none',
      preview: 'https://1drv.ms/u/s!Apc5AcFl00C1y59Y9Ee8NtvfZyhtaw?e=g3TjDg',
      typeTall: false
    },
    {
      id: 200,
      title: 'Group Study',
      img: 'https://chi01pap002files.storage.live.com/y4mPq_dtnKcPud8Uirr8R5cciTwF7lVB8SgjwS7YzPJV2TRruByYr8rIitIV9oySgThokJ2mKy-jTs80crNAO6uEwtLkVxH0rARUWVsTiHmS7AYdXlnwDH-DwSEzl-aEyI9k45BnCTA6UWKuCP2GCw9iIbh3QF0GU6aQRqBygzu-bnTXevx0HVuQBBRAnHKDmKE?width=313&height=660&cropmode=none',
      hover: 'https://chi01pap002files.storage.live.com/y4m3_c4zpRqnNp81cLx_rxeHMVQS9pqgPwSuMpBVKiKz92k87vINSiW4DZGcm1QmuNYQ1Wk2tscPknjFuzOK0x9cDipbWAAYSE8kz3W1b_lY1smoCFx9OaGW-KpslrDCvxT4lFCtF2qygjnAJyra3X8ITszVWcghYXi9QJdkiStT9w-RSWlCeTFiPZcrdNdqRzo?width=313&height=660&cropmode=none',
      preview: 'https://1drv.ms/u/s!Apc5AcFl00C1y6MUYC6DELK52tVEug?e=Q3mPwk',
      typeTall: true
    },
    {
      id: 300,
      title: 'Instant Tutor',
      img: 'https://chi01pap002files.storage.live.com/y4mcTwit3hGxXxra_jML2vdQQlXZabLbPHi0rwTA-RtMbezOHyizQ_nGzdhbTFpogfd7r9jeFas1FWFfgT615kbIqNfVEuxxU8nm36Wejf0RNRcX9NjUlXsmIIDsFCgoUr4Al255f8sxq-eTA08ynMRHIXHTSx-CojO06SjfZVj3eJiNweNXb28L4mq1iBhmzZo?width=313&height=660&cropmode=none',
      hover: 'https://chi01pap002files.storage.live.com/y4mIklUCnoMkWr-ykg9ZAK7_1nrmjbFD8IxrnyfG0PUw7rQ9o3UzxIxGLcuLIPTs74W3vt_cBnmtuxMmhARKbtevgNjLtlW9W8YjYfE3W2jtKvXWuNH7ClxBEvuCmrCWozht4m3Pa8C39bdrcVXPb4x-Hn8Q0o3JfFzfyrp6e72R-BCodoGLoLYax7CPzXcJLLR?width=313&height=660&cropmode=none',
      preview: 'https://1drv.ms/u/s!Apc5AcFl00C1y6MbEEkLab05ztJmFA?e=VwpWDU',
      typeTall: true
    },  
    {
      id: 400,
      title: 'Flower delivery',
      img: 'https://chi01pap002files.storage.live.com/y4mRTCBuqawRuwRb1GpCRMxLOhwTYmXvLAGqmCScNpck7HhjBi2DVCOYbxcniqloCmMRzycVUqp1r3tmTDOPnbRUWAmVEWKdxwRI9IFOFQeBcitjHq7ybrKdWobSAl-E5bz5Xw1cJVUlIRhAexmsj-anZjWxwn_AcDkgS0a1gsObn1mSKrfuY028KPF9Xs-Dln0?width=305&height=660&cropmode=none',
      hover: 'https://chi01pap002files.storage.live.com/y4mVGwRs0_MFBi0FCEaEKlrg0qbObxzWnShCVD--FL0_64niPdE_pWPcO7ENLJRCOQqFXQry8wq44lqC0oxY-H0xJ1iX0eKMcVHRM8lBa1xIZA4kMH6lGza8BmWcnuWzQS7ZzSYingupsa83R7PUuWXafs5r8q1NtBnU8CVYcBdYlhMVu3sWJ43eCT92vOghFva?width=281&height=660&cropmode=none',
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