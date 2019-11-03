import React from 'react';
import CustomCollapsible from './common/custom_collapsible';

interface Props {};
interface ComponentState {
    Expanded: boolean;
};

export default class ExtraSection_1Extra extends React.Component<Props, ComponentState> {   
    constructor(props: Props){
        super(props);
        this.state = {
            Expanded: false
        }
        this.OpenCollapsible = this.OpenCollapsible.bind(this);
    }

    OpenCollapsible: any = (SectionNumber: number) => {
        this.setState({Expanded: !this.state.Expanded});
    }

	render(): JSX.Element {
        return(
            <section id="extra">
                <div style={{ padding: '10px 0px' }}>
             
                    <h1><span>A lil extra</span></h1>
                    <p>
                        Hi and thank you for visiting my website! For those who are interested and have a moment a longer read, I wanted to talk a little further about myself and my start in tech. While I have broken this post into three sections, brevity was not my forte when it came to drafting this. But I thought the details included gave more personality to my story, so please enjoy!
                    </p>
                </div>
                
                <CustomCollapsible ButtonClassName="Color3" Name="Learning to code">
                    <div className="SubHeader">...like actually code</div>
                    <p>
                    Like many other professionals in the tech industry I've come to learn, I did not major in computer science, or any STEM related field for that matter, thus don’t have that “traditional” tech background, whatever that means. Yes, I dabbled in CS classes here and there, which eventually led to a minor, but I had never really thought that I would develop a career in tech. The last CS course I took actually made me feel completely inept at coding and all but smothered the remaining hope I had in pursuing a career in tech. The interest was still there, of course, but the belief that I could was pretty much extinguished.
                    </p><p>
                    So then why did I participate in a coding fellowship, the summer before my senior year, the summer dubbed as the most important career-building time for an about-to-be-thrown-into-the-real-adult-world individual? Honestly, I don’t really know. At that point, I am pretty sure that I was just in pure panic mode about not being remotely employable after graduation. After all, I was a psychology major, which doesn’t exactly scream “hire me!” to most companies. I thoroughly enjoyed studying psychology but really gave it little thought on how it could translate into an actual career. And so a slightly groundless and extremely desperate thought of mine convinced me that employers hire those who are not only tech savvy but also code literate, even if none of the job requirements were tangentially related to tech (because hey she can code - maybe she can become our sudo IT person!). Thus, I applied for a <a href="https://www.lessannoyingcrm.com/Fellowship/" rel="noopener noreferrer" target="_blank" title="Learn more about the fellowship here!">coding fellowship offered by a small St. Louis-based tech company</a>.
                    </p><p>
                    First of all, I started off the coding fellowship pretty cocky, which sounds counterintuitive, considering that I had just completed one of the most brutal classes I have ever taken -- yeah, the one that basically sent me the message of ‘nope, you’re not good enough for tech.’ But I already knew how to create (and then destroy, and then re-create to only destroy again because wow, I didn’t know what was going on) tables in MySQL! I knew how to make loops and functions and how to apply logic to my code! Clearly, my knowledge was more than enough for the first few weeks of the fellowship.
                    </p><p>
                    Just about a week in, I realized how wrong I was.
                    </p><p>
                    The list of things I ended up learning that summer is quite extensive, and it wasn’t just limited to coding. Towards the end, I became really interested in JQuery and AJAX and shaped the remaining portion of my summer creating something that I wanted to use in my own daily life, a task list app. I know it wasn’t the most creative project, but I wanted to create a user experience that I myself wanted, so the task app ended up being one with various collapsibles, drag and drop reorderings of lists and tasks, and color customization. It was cute but has been rendered pretty useless to me because of my inability to access it from other devices, since my database was locally kept.
                    </p><p>
                    Over the next couple of summers, I’ve expressed to the company's CEO, who created the fellowship, about how proud and excited I was to see the fellowship transform and continue to teach these valuable skills to under-represented individuals in the tech industry. And in a way that again has slightly stroked my ego, the CEO told me that my progress has proven that the fellowship and their teaching methods work in getting someone up to speed as dev.
                    </p><p>
                    That expressed sentiment made me overjoyed, but honestly I had a lot of trouble calling myself an engineer or a developer up until around that point, which was about six months into the role. I found it troublesome, or strange rather, largely due to the lack of confidence I had in my abilities. Looking back at the first few months, I think I am absolutely correct in stating that I was a bad coder, simply because I just straight up did not know how to do a lot of things. But in a way that might come off as contradictory, I now would not say I was a bad software engineer. I was just one in the making. The hard technical skills were not there yet, but I had the capabilities, drive, and passion to learn, which I like to believe are good starters to become good at anything.
                    </p>
                </CustomCollapsible>
                <CustomCollapsible ButtonClassName="Color4" Name="Creating this website">
                    <div className="SubHeader">...and trying to forget what the first iteration looked like</div>
                    <p>
                    Imagine the most simplistic static site, comprised of a navigation bar ripped off of W3Schools (God bless that site) and boxes with good ole 1px solid borders that were all melded together in unity by the most perfect color palette of pink and purple hues that I had so meticulously selected. I like to think that it vaguely resembled an early 2000s website. So yeah - it was pretty ugly, but I was proud of it nonetheless.
                    </p><p>
                    The sheer atrocity of it, I think, would have been fun to juxtapose with this React version, but I don’t have most of that code anymore.
                    </p><p>
                    Now, I could have simply made an account on a website building platform and designed a beautifully smooth site with flawless UI, interactive scrolling, and other fancy features, but I feel like there would have been a certain shame in using one of those, as someone who is building a career in software engineering / web development. Also I’m frugal. You have to pay monthly subscriptions to those, and I wanted to spend the bare minimum - so basically, just this domain name.
                    </p><p>
                    I know there really isn’t a lot going on here, but it was fun to set up. And so I’m pretty pleased with the outcome.
                    </p><p>
                    To have a continuous deployment of this site, I’m using <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>, which offers a free-tier account. And for the styling, I have implemented a design by <a href="https://www.styleshout.com/free-templates/ceevee/" target="_blank" rel="noopener noreferrer">StyleShout</a>. I knew I needed a base structure but wanted to do a lot more customizing to experiment and also showcase some creativity. Lastly, the background image for my header was provided by <a href="https://unsplash.com/@eberhardgross" target="_blank" rel="noopener noreferrer"> Eberhard Grossgasteiger on Unsplash</a>.
                    </p>
                </CustomCollapsible>
                <CustomCollapsible ButtonClassName="Color5" Name="Developing a career in tech">
                    <div className="SubHeader">... and going from here</div>
                    <p>
                    So then, where do I go on from here? I'm not exactly sure, but I know I want to at least continue doing something similar to what I am doing right now, which building my skills as a well-rounded software engineer. Yes, my experiences have mostly been in front-end web dev projects, since I very much enjoy seeing the outlook of software, and changing the UX, but I'm always open to learning to do new things. And I believe that my growth through the past year as a full time Software Engineer has really showcased my ability to learn quickly and efficiently.
                    </p><p>
                    I love speaking to industry professionals, getting different perspectives in fields related to tech, since there is so much opportunity out there and many things that I have yet to discover. And as I continue to build my expertise and career, I hope to one day become the person that people, who are in situations similar to my current one, seek out for mentorship.
                    </p><p>
                    So I’d love to connect with you, especially given that you may have taken the time to read this through to the end. So please shoot me and <a href="mailto:kellyjung96@gmail.com" target="_blank" rel="noopener noreferrer">email</a> or <a href="[https://www.linkedin.com/in/kellysjung](https://www.linkedin.com/in/kellysjung)" target="_blank" rel="noopener noreferrer">connect with me on LinkedIn</a>!
                    </p><p>
                    Thank you for sticking with me as I recounted this little journey in a long and winded manner. (I’ve recently read two memoirs, and so I think that’s the reason why I feel compelled to write like this.) Trust me - this was the condensed version.
                    </p>
                </CustomCollapsible>
            </section>
        );
    }
}