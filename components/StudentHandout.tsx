import React from 'react';

const StudentHandout: React.FC = () => {
  return (
    <div className="hidden print:block bg-white text-black p-8 font-serif leading-relaxed max-w-[210mm] mx-auto">
      <div className="text-center border-b-2 border-black pb-4 mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-widest mb-2">The Art of Storytelling</h1>
        <p className="italic text-lg">Unit 2.1 & 2.2 Student Worksheet</p>
      </div>

      {/* --- SECTION 1: NARRATIVE --- */}
      <div className="mb-12">
        <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">Unit 2.1: A Bad Day at Work</h2>
        
        <div className="mb-8">
          <h3 className="font-bold mb-2">Ex 3. Complete the story by choosing the correct verb.</h3>
          <p className="text-justify indent-8 leading-loose">
            I'll never (1) _______________ [forget / remind] that day. It started out as just an ordinary day at work. I never (2) _______________ [expected / wondered] that within a few hours I would be in great danger!
          </p>
          <p className="text-justify indent-8 leading-loose">
            I was 27 and had been a river guide for several years... It was only then that I (3) _______________ [believed / realized] I was underwater... I (4) _______________ [remember / remind] looking up at the surface of the water, and (5) _______________ [recognizing / wondering] which of us could hold his breath the longest.
          </p>
          <p className="text-justify indent-8 leading-loose">
            Suddenly the hippo released me... Meanwhile, the hippo had quietly (6) _______________ [appeared / disappeared].
          </p>
          <p className="text-justify indent-8 leading-loose">
            I (7) _______________ [believe / expect], though, that I met him one more time... Being there obviously (8) _______________ [recognized / reminded] me of what had happened. Then, just as we were going past the same place in the river, a huge hippo suddenly (9) _______________ [appeared / realized].
          </p>
          <p className="text-justify indent-8 leading-loose">
            I (10) _______________ [screamed / whispered] so loudly that those with me said they'd never heard anything like it... I'm sure I (11) _______________ [recognized / realized] the same hippo, still just as angry.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Ex 4a. Vocabulary Focus.</h3>
          <p className="italic mb-2 text-sm">Use: believe, expect, realize, recognize, remember, remind, wonder</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Wait... I didn't ____________________ you were here!</li>
            <li>I can't ____________________ where I put my keys.</li>
            <li>I was ____________________ if you'd like to join us?</li>
            <li>Do you ____________________ in ghosts?</li>
            <li>I didn't ____________________ him with his new haircut.</li>
            <li>Please ____________________ me to call mom.</li>
            <li>I didn't ____________________ the exam to be so hard.</li>
          </ol>
        </div>
      </div>

      <div className="break-inside-avoid-page h-4"></div>

      {/* --- SECTION 2: HOAXES --- */}
      <div className="mb-12">
        <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">Unit 2.2: Unbelievable?</h2>

        <div className="mb-8">
            <h3 className="font-bold mb-2">Ex 2. Comprehension.</h3>
            <p className="mb-2">Read the stories (Moon Melon, Balloon Boy, Piltdown Man) and answer:</p>
            <ul className="list-none space-y-2">
                <li>1. Which story is the oldest? ____________________</li>
                <li>2. Which story is going round online? ____________________</li>
                <li>3. Which story did people believe for the longest time? ____________________</li>
                <li>4. Which story was a result of wanting to be famous? ____________________</li>
            </ul>
        </div>

        <div className="mb-8">
            <h3 className="font-bold mb-2">Ex 5a. The Balloon Boy Story.</h3>
            <div className="border border-black p-2 mb-4 text-sm text-center font-mono">
                as soon as • by the time (that) • during • meanwhile • until • while
            </div>
            <p className="text-justify leading-loose">
                A couple, Richard and Mayumi Heene, let a large gas balloon float off into the air and then, (1) ____________________ it was high in the sky, they claimed that their six-year-old son was inside the balloon. The police were informed and helicopters were sent up to track the balloon (2) ____________________ they could find a safe way of getting him down.
            </p>
            <p className="text-justify leading-loose mt-2">
                (3) ____________________ the balloon landed an hour or so later, the story was live on television. When the boy was not found inside, the media reported that he had fallen out (4) ____________________ the flight... (5) ____________________, the boy was actually safe at home. We can't say for sure... but (6) ____________________ reporters were interviewing the family on TV, the boy accidentally mentioned that they'd done it to be on TV.
            </p>
        </div>
      </div>

      <div className="break-before-page"></div>

      {/* --- SECTION 3: GRAMMAR & VOCAB --- */}
      <div className="mb-12">
        <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">Grammar & Vocabulary</h2>

        <div className="mb-8">
            <h3 className="font-bold mb-2">Ex 6. Time Linkers. Match the linker to the rule.</h3>
            <ul className="list-none space-y-2">
                <li>1. Describes when something happened but not for how long: ____________________ [while / until]</li>
                <li>2. Describes an event that happens immediately after: ____________________ [as soon as / by the time]</li>
                <li>3. Describes a contrasting event happening simultaneously: ____________________ [until / meanwhile]</li>
                <li>4. Describes an action that happened before the main events: ____________________ [by the time / during]</li>
                <li>5. Describes an action happening at a point within a period: ____________________ [during / as soon as]</li>
                <li>6. Describes an action continuing up to a point then stops: ____________________ [until / during]</li>
            </ul>
        </div>

        <div className="mb-8">
            <h3 className="font-bold mb-2">Ex 7a. The Piltdown Man. Choose the correct option.</h3>
            <p className="text-justify leading-loose">
                (1) _______________ [During / While] the early twentieth century, scientists were keen to find evidence... In 1912 that evidence seemed to have been found (2) _______________ [meanwhile / while] Dawson and Woodward were digging...
            </p>
            <p className="text-justify leading-loose mt-2">
                (3) _______________ [As soon as / Until] they saw the jawbone... Woodward claimed the bones belonged to a human who lived (4) _______________ [by the time / during] the Lower Pleistocene period.
            </p>
            <p className="text-justify leading-loose mt-2">
                Most scientists accepted this opinion (5) _______________ [until / while] nearly forty years later... (6) _______________ [By the time / Meanwhile], Dawson... had died. The Piltdown Man hoax damaged science because (7) _______________ [while / by the time] the hoax was discovered, scientists had wasted forty years.
            </p>
        </div>

        <div className="mb-8">
             <h3 className="font-bold mb-2">Ex 8b. Vocabulary.</h3>
             <div className="grid grid-cols-2 gap-8">
                <div>
                    <p className="italic text-sm mb-1">announce • claim • interview • mention • tell</p>
                    <p className="leading-relaxed">
                        Police (1) _______________ yesterday that calls to 999 had risen. They (2) _______________ the public to ignore a story which (3) _______________ that dialling 999 charges your battery.
                    </p>
                </div>
                <div>
                    <p className="italic text-sm mb-1">admit • inform • invent • keep quiet • report</p>
                    <p className="leading-relaxed">
                         The newspaper which recently (4) _______________ that Beijing was showing digital sunrises has now (5) _______________ that a journalist actually (6) _______________ the story.
                    </p>
                </div>
             </div>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500 mt-12 border-t pt-2">
        Generated by The Art of Storytelling Web App
      </div>
    </div>
  );
};

export default StudentHandout;
