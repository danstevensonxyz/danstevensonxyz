---
title: Building online forms at Sheffield City Council
date: "2021-05-01"
description: "The Digital Acceleration Project was an ambitious one! Sheffield City Council delivers a massive range of public services, and in the project I built over 100 forms in less than 12 months."
image: "./dap-apply-for-free-school-meals.png"
---


>The Digital Acceleration Project was an ambitious one! Sheffield City Council, like all councils, delivers a massive range of public services, but the way citizens access those services was not always consistent or "digital by default". The aim of the project was to take as many of the council's paper-based forms and get them online, using the existing AEM content management system. My role in the project evolved rapidly from BA to UX to forms developer, and I ended up building over 100 forms in less than 12 months.

## October 2019 - kick off

The project was quickly set up, and my role was going to be as a business analyst, engaging with the various different "service owners" whose forms were going to be digitised to understand their requirements and turn them into a specification to be used by our outsourced developers. 

We had a huge list of over paper-based forms that apparently needed to be digitised. 

My initial approach to this was to turn the problem around slightly. Most of the forms were not overly complicated on the face of it (a couple of pages of A4 and less than 20 questions), but needed adapting to meet digital standards. Some of the things that needed changing were:

- form titles to follow the GDS principle that "<a href="https://designnotes.blog.gov.uk/2015/06/22/good-services-are-verbs-2/" target="_blank">good services are verbs</a>" (e.g. “Trade Suppliers Form” should be changed to “Register your business as a supplier to the council”)
- we should generally ask for <a href="https://designnotes.blog.gov.uk/2015/07/03/one-thing-per-page/" target="_blank">one thing per page</a> (e.g. ask questions one at a time, like you do in real life, rather than in an overwhelming list)
- use plain English (users probably don't understand council jargon or acronyms, so these needed to be removed.)

Since the new forms were not going to follow the sort of “lift-and-shift” (I hate that term!) that some service owners were expecting, I decided the best approach might be to build basic wireframe prototypes that they could see and interact with. I used Microsoft Visio to build the wireframes and then InVision to stick them together and build links between pages. 

The concept of a wireframe prototype, even though new to most service owners, was really well-received, and it was much easier to show services a new thing, than having a look at their old form and discussing line-by-line where I wanted to make changes. 

>I really enjoyed the process of applying GDS-style principles to improve some fairly clunky forms. It was also nice to work with services who were appreciative of the help. Some of the "service owners" were not familiar with how to implement good digital services, but they were all familiar with Amazon-style convenience, and knew their users expected the same from them. What we initially expected would be resistance from services, actually ended up being collaboration. 

Once signed-off, it was a pretty straight-forward process to build the specification for the developer from the Visio shape data which could be exported to Excel. The Excel file included the various details required for each element, including the page, question label, question type (e.g. radio button, paragraph text, date), required/optional, routing, element name for the backend system, etc.

I was happy to hear the developers say we were producing the best specs they’ve received. Unfortunately though, the specs weren’t smoothly being turned into working forms.

## December 2019 - teething problems

The project started with a few teething problems, when the agency developer couldn’t install some council software on his non-council laptop. But the problems persisted for longer than they should have done, and this wasn’t because of issues with kit or council systems. Unfortunately the work from the agency developer wasn’t up to scratch. Forms were being built with errors, typos, missing questions and basically not to spec. 

The project, with a lack of decent output, was at risk of being pulled. 

I suggested that since I’d been working on building the specs, and since the content management system didn’t need any specialist knowledge (apart from a bit of JavaScript that I was willing to learn), that we could cut out the middle-man and I could build the forms. The agency apologised for the issues, but by that point we’d already realised that we could do things ourselves without needing to pay for an expensive external developer. 

It worked really smoothly. It’s a perfect example of the <a href="http://www.agilemanifesto.org" target="_blank">Agile Manifesto</a> principle of “working software over comprehensive documentation.” Previously, we were producing loads of documentation that was then not being turned into working software. If we went with a build-first attitude, we’d be able to create the forms from scratch, use them as the prototype we were showing service owners (rather than more basic wireframe ones), and then adapt them based on feedback.

Amazingly, it was more than twice quicker to build forms in the CMS than it was to build the finicky wireframes and stitch them together, and we had also completely cut out that time-consuming step. 

The feedback loop was also much quicker. When getting feedback from services, it could be directly implemented onto the staging version of the form, rather than needing to update a wireframe and spec. We could therefore get sign-off on a form on the same day as the demo, every time. No need to revise the spec, send to a developer to build in several days time and then ask for sign-off again.

The JavaScript routing and show/hide logic appealed to my methodical mindset. To be honest, most of the logic looked something a bit like this:

A question is set to be hidden by default...
```javascript
nextQuestion.visible = false
```

And rules were set on a different question (usually a radio button) that determined whether the next question would display...
```javascript
if (this.value === “Yes”){
    nextQuestion.visible = true
} else {
    nextQuestion.visible = false
}
```

But there were also some forms that were so non-linear, it felt like writing the plot of <a href="https://en.wikipedia.org/wiki/Black_Mirror:_Bandersnatch" target="_blank">Bandersnatch</a>! They involved lots of logic, and the need to be able to reset logic so that if the user went back to change an answer, the system would respond as if they were going down the route for the first time. Challenging, but always interesting problems to solve. 

## March 2020 - a breakthrough and a pandemic

Through the beginning of 2020 there were still issues which meant launching forms was difficult. Basically, the staging version of the CMS that we were using to build and demo forms had newer components than the production (live) version of the council website. So our project was able to build and get sign-off for things in staging, but we didn't have the ability to launch forms in production, because the two versions were not compatible.

Council developers were trying to get the two version to align, but had various issues that were beyond the scope of my work or knowledge! 

Anyway, in March there was a breakthrough which opened the floodgates for forms to be released at will. On a particularly good day I was able to build 7 forms for a service, get their feedback, make the changes, get QA and release them (although these were particularly simple forms, and it was rare for so many to be ‘owned’ by the same service.) Having control of the full release process within the team was a massive help!

Like most people, we moved to working remotely, but not even a pandemic could stop us now!

![Apply for free school meals form screenshot](/dap-apply-for-free-school-meals.png "Apply for free school meals form screenshot")

## Summer 2020 - traction and “Track and Trace”

>In summer 2020, despite the frustration of coronavirus, I did the best work of my life. First and foremost, I was working with a great team. 

Alice as PM had to juggle another project while keeping on top of the service owners and making sure they were giving us the information we needed to keep building. We got an increase in demand to build because some services could no longer accept paper delivered forms, and Alice made sure things were prioritised and we weren’t getting unreasonable requests. 

Andy as QA had an amazing eye for detail and became really knowledgeable about UX and able to question whether aspects of the form should be structured differently. Working under difficult circumstances at the beginning of the project, when everything seemed to be broken, he was really good at documenting bugs and what needed to be done about them. 

Keeping each other sane at daily Zoom standups (which included talk about food and Netflix as much as anything else), the three of us were able to continue to work really effectively under difficult circumstances. 

It was in the spring and summer that I built the most important forms of the project. 

First was a <a href="https://www.sheffield.gov.uk/form/schools-childcare/apply-for-free-school-meals" target="_blank">free school meals form</a> that could be completed by parents or teachers. It’s a fairly basic form asking for the parent’s, child/children’s and school details. It allowed the parent or school staff to fill in the form for up to 10 children, rather than having to submit one each as was the case before - when selecting the appropriate number of children, the routing I built meant the user would see child details pages for that number. 

The <a href="https://www.sheffield.gov.uk/form/disability-mental-health/apply-for-a-disabled-persons-travel-pass" target="_blank">disabled person's travel pass</a> is a vital way for disabled people to maintain their independence and be able to travel around easily on public transport. The old paper form wasn’t easy though, and asked for details to be submitted that the council already had on record. It also asked about a variety of disabilities, and if the person has more than one disability, they needed to provide evidence for each one. 

By speaking to the service, I learned that more than 80% of submissions are renewals and the service were very supportive in the decision to have two options: one for renewals and one for first-time applicants. For renewals, the process was massively simplified and evidence of disability was not requested again for most people. For new applicants, they were asked about a single disability, submit evidence for that disability and were routed to the end; they weren’t asked any more superfluous questions. 

This was the best example on the project where existing processes were far from ideal, and the service owners were very supportive in making changes and improvements.

Later in the summer I was extremely busy working on coronavirus-related forms. The government announced a series of business grants to be administered by local councils, so with specs from our UX team I built forms that have led to the award of more than £50 million in business grants. I also built a click-and-collect-style form for Sheffield Libraries, which citizens can use to collect items from their local library, which had the nice additional feature of notifying whichever library the user selected.

The council also had to set up a rapid operation to conduct “Track and Trace” calls, and I built forms that staff could complete while speaking to people on the phone. These were incredibly complex forms and the required process changed from day to day, making them difficult to maintain. They effectively needed logic and routing to account for a range of circumstances, depending on who the person had been in contact with, where they had been, whether they were in hospital, and whether they needed a proxy to speak on their behalf due to age or language barriers.

Overall though I was working with a great team who knew the required processes inside-out, and I was able to adapt the forms as soon as they needed changes to be made. The central government system that was implemented gets a bad wrap, and a lot of this is probably justified. But the Sheffield City Council solution was implemented with existing staff working long hours (no expensive contractors) and using existing software (no expensive procurement). From what I’m told the system worked extremely well. 

## December 2020 — 100 and done

As processes stabalised, the requirements for coronavirus forms decreased later in the summer, allowing me to focus more on business-as-usual forms at a more stable rate.

After building more than 100 forms across the full range of council services, the requirements coming from services was decreasing and I was asked to work on the forms alongside another web project at Sheffield City Council, a bit less focussed on building. 

My role on the new project was as a BA — which, at the end of the day, was closer to my actual job at the council than a web developer. But I’d gotten used to and enjoyed the process of being able to build and launch citizen-facing services. I’d heard of Northcoders (a software development training provider) earlier in the year, and decided that in the New Year I’d start a course with them, so that I can hopefully make the work done in 2020 a more central part of what I bring to projects. 

>The Digital Acceleration Project gave me an even greater appreciation of public sector work, the easy (and not so easy!) improvements that can be made with good digital services, and my interest in building them. 