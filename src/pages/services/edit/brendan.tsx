import Link from "next/link"
import clsx from 'clsx'
import { useState, useEffect } from "react"
//import { Button, buttonClass } from 'src/components/buttons/button'



export default function Brendan() {
  return (
    <>
      <h1>Editor: Brendan Finan</h1>
      <h2>
        <Link href="/">	← Return</Link>
      </h2>
      <h2>
    

      </h2>
      <h3>Portfolio</h3>
      <li>
            <a href="https://DSMell.org">DSMell.org: Diagnosing that smell in Des Moines, IA</a>
      </li>
      <li>
          <a href="https://www.medium.com/@brendanfinan">Medium.com blog: Writing about Programmable Attention and Myosotis</a>
      </li>

      <h3> Hire Me</h3>

            <li><a href="https://calendly.com/brendanfinan/chat">Set up a chat on Calendly</a></li>
            <li><a href="https://medium.com/@brendanfinan/email-me-brother-305de1cd8f79">Email me</a></li>


    </>
  );
}
