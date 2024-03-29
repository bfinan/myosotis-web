import Link from 'next/link';
import { BumpLink } from 'src/components/bumplink'
import { Button } from 'src/components/buttons/button'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://dlwuvzvlhxguzprtnopf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsd3V2enZsaHhndXpwcnRub3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4MDE2MTEsImV4cCI6MTk5ODM3NzYxMX0.jSJTWbirr2o0oQ4k-eZLUSev3liJl1CBnQpL4FBQuX0')


export default function WikibumpPage() {
  return (
    <>
      <div>🚧 UNDER CONSTRUCTION 🚧</div>
      <h1>Wikibump</h1>
      <p>
        Wikibump is a tool for bumping the names of entities, specifically Wikidata entities and named articles in the English Wikipedia.
        Apologies in advance because I am not great at CSS
        -- Brendan
      </p>
      <h3>User: Brendan Finan</h3>
      <h2>
        <Link href="/"  >Back to home</Link> <br></br>
        <BumpLink class="square" title="Typescript" wikititle='https://www.wikipedia.org/wiki/Typescript'></BumpLink>

        <BumpLink class="square" title="Niacin" wikititle='https://www.wikipedia.org/wiki/Niacin'></BumpLink>
        <BumpLink title="Running" wikititle='https://www.wikipedia.org/wiki/Running'></BumpLink>
        <BumpLink title="Boston Marathon" wikititle='https://www.wikipedia.org/wiki/Boston_Marathon'></BumpLink>
        <BumpLink title="Datepicker" wikititle='https://www.wikidata.org/wiki/Q25345907'></BumpLink>
        <BumpLink title="Prediction Market" wikititle='https://www.wikipedia.org/wiki/Prediction_Market'></BumpLink>
        <BumpLink title="Gastrocnemius Muscle" wikititle='https://www.wikidata.org/wiki/Q943203'></BumpLink>
        <BumpLink title="Glycogen" wikititle='https://en.wikipedia.org/wiki/Glycogen'></BumpLink>
        <BumpLink title="Lactic Acid" wikititle='https://en.wikipedia.org/wiki/Lactic_acid'></BumpLink>
        <BumpLink title="Contango" wikititle='https://en.wikipedia.org/wiki/Contango'></BumpLink>
        <BumpLink title="Random-access-memory" wikititle='https://en.wikipedia.org/wiki/Random-access_memory'></BumpLink>
        
      </h2>

      <input ></input>

      <Button>Submit</Button>
    </>
  );
}
