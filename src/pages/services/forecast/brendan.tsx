import Link from "next/link"
import clsx from 'clsx'
import { useState, useEffect } from "react"
//import { Button, buttonClass } from 'src/components/buttons/button'



export default function Brendan() {
  return (
    <>
      <h1>Forecaster: Brendan Finan</h1>
      <h2>
        <Link href="/">	← Return</Link>
      </h2>
      <h2>
    

      </h2>
      <h3>Links</h3>

      <li>
          <a href="https://manifold.markets/@BrendanFinan"> Me on Manifold Markets</a>
      </li>
      <li>
      <a href="https://manifold.markets/@contango"> My automated tradebot on Manifold Markets</a>
      </li>
      <li>
      <a href="https://www.metaculus.com/tournament/quarterly-cup/"> My Metaculus Profile </a>
      </li>

      <br></br>

      <h3> Free Forecasting offer </h3>

      I will provide a free forecast on your question, and a few sentences explaining my prediction!
      <a href="mailto://brendanfinan@protonmail.com"> Click here to email me</a> a link to your question.
      <br></br>
      All questions are welcome, but it will be especially helpful to me if you have clearly specified resolution criteria, and if your question is hosted on Manifold Markets.
      <br></br>

      <h3> Hire Me</h3>
      I can provide a more advanced prediction on your question, and a short report to back my prediction up.
      <a href="https://calendly.com/brendanfinan/chat"> Click here to set up a chat on Calendly</a> if you`re interested!
    </>
  );
}
