import React from 'react';

interface Props {};
interface ComponentState {};

export default class Extra extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
        return(
            <section id="extra">
                <div className="SectionContainer">
                    <h1><span>A lil extra</span></h1>
                    <p>
                        Hi and thank you for visiting my website! I bet you weren’t expecting this huge wall of text down here. But for those who are interested and have a moment a longer read, I wanted to express a little further about who I am by explaining how I’ve come to this point, why exactly this site exists in the first place, and where I hope to go from here. While I have broken this post into three sections, brevity was not my forte when it came to drafting this. I did try to condense this, but I thought that the details I've included give this site a little more personality, so enjoy!
                    </p>
                </div>
                <div className="SectionContainer">
                    <div className="SubHeader">Learning to code, like actually code</div>
                        <p>
                        Obviously, through the rest of the site, one could get a small sense of who I am professionally. I’m a software engineer. Simple and straightforward - I like to write code, especially ones that have viewable results. But like many other professionals in the tech industry I've come to learn, I did not major in computer science, or any STEM field for that matter, thus don’t have that “traditional” tech background, whatever that means. Yes, I dabbled in CS classes here and there, which eventually led to a minor, but I had never, while picking out courses each semester, really thought that I would ever develop a career in tech. The last CS course I took actually made me feel completely inept at coding and all but smothered the remaining hope I had in pursuing a career in tech. The interest was still there, of course, in the back of my mind, but the belief that I could was pretty much extinguished.
                        </p><p>
                        So then why did I participate in a coding fellowship, the summer before my senior year, the summer dubbed as the most important career-building time for an about-to-be-thrown-into-the-real-adult-world individual? Honestly, I don’t really know - or rather, I don’t have the clearest answer for this. At that point, I was pretty sure that I was just in pure panic mode about not being remotely employable after graduation. After all, I was a psychology major, which doesn’t exactly scream “hire me!” to most companies. I definitely thoroughly enjoyed studying psychology but gave it little thought to how it could translate into an actual career. And so a slightly groundless and extremely desperate thought of mine convinced me that employers want employees who are not only tech savvy but also code literate, even if none of the job requirements were tangentially related to tech (because hey she can code - maybe she can become our sudo IT person!). Thus, I applied to a coding fellowship offered by a small St. Louis-based tech company.
                        </p><p>
                        And then the fellowship ended up being one of the best decisions ever. I absolutely loved it, as I hope one might gather from my transition into a full-time employee there.
                        </p><p>
                        First of all, I started off the coding fellowship pretty cocky, which sounds counterintuitive, considering that I had just completed one of the most brutal classes I have ever taken -- yeah, the one that basically sent me the message of ‘nope, you’re not good enough for tech.’ But I already knew how to create (and then destroy, and then re-create to only destroy again because wow, I didn’t know what was going on) tables in MySQL! I knew how to even make associative arrays in PHP and not lose track of my data! Clearly, my knowledge was more than enough for the first few weeks of the fellowship.
                        </p><p>
                        Just about a week in, I realized how wrong I was.
                        </p><p>
                        The list of things I ended up learning that summer is quite extensive, and it wasn’t just limited to web development and software creation. Towards the end, I became really interested in JQuery and AJAX and shaped the remaining portion of my summer creating something that I wanted to use in my own daily life, a task tool app. I know it wasn’t the most creative project, but I was at a loss at what to do and was suggested to perfect something that I already like using. I wanted to create a user experience that I myself wanted, so the task tool ended up being one with various collapsibles, drag and drop reorderings of lists and tasks, and color customization. It was cute, but I guess has been rendered pretty useless to me because of my inability to access it from other devices, since my database was locally kept.
                        </p><p>
                        Over the next couple of summers, I’ve expressed to the company's CEO, who created the fellowship, about how proud and excited I was to see the fellowship transform and continue to teach these valuable skills to under-represented individuals in the tech industry. And in a way that again has slightly stroked my ego, the CEO told me that my progress has proven that the fellowship and their teaching methods work in getting someone up to speed as dev.
                        </p><p>
                        That expressed sentiment made me overjoyed, but honestly I had a lot of trouble calling myself a developer up until around that point, which was about six months into the role. I found it troublesome, or strange rather, largely due to the lack of confidence I had in my abilities. Looking back at the first few months, I think I am absolutely correct in stating that I was a bad coder, simply because I just straight up did not know how to do a lot of things. But in a way that might come off as contradictory, I now would not say I was a bad software engineer in the making. The hard technical skills were not there yet, but I had the capabilities, drive, and passion to learn, which I like to believe are good starters to become good at anything.
                        </p>
                </div>
                <div className="SectionContainer">
                    <div className="SubHeader">Creating this website and trying to forget what the first iteration looked like</div>
                        <p>
                        Imagine the most simplistic static site, comprised of a navigation bar ripped off of W3Schools (God bless that website) and white, round-cornered boxes with some good ole 1px solid borders that were all melded together in unity by the most perfect color palette of pink and purple hues that I had so meticulously selected. I like to think that it vaguely resembled an early 2000s. So yeah - it was pretty ugly, but I was proud of it nonetheless.
                        </p><p>
                        The sheer atrocity of it, I think, would have been fun to juxtapose with this React version of my site that you are currently on, but I don’t have that code anymore. I’m pretty sure that I lost it completely, since I have no idea what GitHub account holds that repository, and the only version of it that I have locally has some crazy JavaScript updates that I have no idea why I used and an updated blue color palette (ooo!).
                        </p><p>
                        Now, I could have simply made an account on a website building platform and designed a beautifully smooth site with flawless UI, interactive scrolling, and other fancy features, but I feel like there would have been a certain shame in using one of those, as someone who is building a career in software engineering / web development. Also I’m frugal. You have to pay monthly subscriptions to those, and I wanted to spend the bare minimum - so basically, just this domain name.
                        </p><p>
                        I know there really isn’t a lot going on here, but it was fun to set up. And so I’m pretty pleased with the outcome.
                        </p><p>
                        To have a continuous deployment of this site, I’m using Netlify, which offers a free-tier account. And for the styling, I have implemented a design by StyleShout. I knew I needed a base structure but wanted to do a lot more customizing to experiment and also showcase some creativity.
                        </p>
                </div>
                <div className="SectionContainer">
                    <div className="SubHeader">Developing a career in tech</div>
                        <p>
                        So then, where do I go on from here? I'm not exactly sure, but I know I want to at least continue doing something similar to what I am doing right now, which building my skills as a well-rounded software engineer. Yes, my experiences have mostly been in front-end web dev projects, since I very much enjoy seeing the outlook of software, and changing the UX, but I'm always open to learning to do new things. And I believe that my growth through the past year as a full time Software Engineer has really showcased my ability to learn quickly and efficiently.
                        </p><p>
                        I love speaking to industry professionals, getting different perspectives in fields related to tech, since there is so much opportunity out there and many things that I have yet to discover. And as I continue to build my expertise and career, I hope to one day become the person that people, who are in situations similar to my current one, seek out for mentorship.
                        </p><p>
                        So I’d love to connect with you, especially given that you may have taken the time to read this through to the end. So please shoot me and <a href="mailto:kellyjung96@gmail.com" target="_blank">email</a> or <a href="[https://www.linkedin.com/in/kellysjung](https://www.linkedin.com/in/kellysjung)" target="_blank">connect with me on LinkedIn</a>!
                        </p><p>
                        Thank you for sticking with me as I recounted this little journey in a long and winded manner. (I’ve recently read two memoirs, and so I think that’s the reason why I feel compelled to write like this.) Trust me - this was the condensed version.
                        </p>
                </div>
            </section>
        );
    }
}