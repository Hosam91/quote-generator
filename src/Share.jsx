import React from 'react'

export default function Share({ shareTo })
{
    console.log(shareTo);
  return (
      <div className={`${shareTo?'share active':'share ' }`}>
          <ul>
              <li><a href="#">== Facebook</a></li>
              <li><a href="#">== Instagram</a></li>
              <li><a href="#">== Twitter</a></li>
              <li><a href="#">== linkedin</a></li>
              <li><a href="#">== whatsapp</a></li>
          </ul>



    </div>
  )
}
