import React, { useState, useEffect } from 'react'
import BodyItems from '../BodyItems/BodyItems'
import './Body.css'
import CopyToClipboard from 'react-copy-to-clipboard'

const Body = () => {
  const [inputValue, setInputValue] = useState('')
  const [shortenedLink, setShortenedLink] = useState('')
  const [copied, setCopied] = useState(false)
  // const [loading, setLoading] = useState(false)

  const getData = async () => {
    // setLoading(true)
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      )

      let shortenedLink = await response.json()
      console.log(shortenedLink.result.full_short_link)
      setShortenedLink(shortenedLink.result.full_short_link)
      setInputValue('')
      // setLoading(false)
    } catch (error) {
      console.log(error)
      // setLoading(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copied])

  // if (loading) {
  //   return <h1 className='loading'>Loading...</h1>
  // }

  return (
    <div className='body_container'>
      <div className='body_items'>
        <input
          type='text'
          placeholder='Enter link to be shortened'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />

        <button className='body_btn' onClick={() => getData()}>
          Shorten it
        </button>
      </div>
      <div className='body_inputs'>
        {shortenedLink && (
          <div className='input'>
            <p className='shortened_paragraph'>{shortenedLink}</p>
            <CopyToClipboard
              text={shortenedLink}
              onCopy={() => setCopied(true)}
            >
              <button className='body_inputs_btn'>
                {copied ? 'copied' : 'copy'}
              </button>
            </CopyToClipboard>
          </div>
        )}
      </div>

      <BodyItems />
    </div>
  )
}

export default Body
