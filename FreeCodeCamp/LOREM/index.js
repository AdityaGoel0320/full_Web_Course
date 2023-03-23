

let btn = document.getElementById("btn")
let li = document.getElementById("li")

console.log("hi welcome to my console");

btn.addEventListener("click", fnc)

function fnc() {

    let arr = [
        "That's Strickland. Jesus, didn't that guy ever have hair ? Oh, oh Marty, here's your keys. You're all waxed up, ready for tonight.Don't worry. As long as you hit that wire with the connecting hook at precisely 88 miles per hour, the instance the lightning strikes the tower, everything will be fine. Whoa, wait, Doc. Hey you, get your damn hands off, oh. ",

        "Yeah Mom, we know, you have told us this story a million times. You felt sorry for him so you decided to go with him to The Fish Under The Sea Dance. Good. Have a good trip Einstein, watch your head. That's him.Well looky what we have here.No no no, you're staying right here with me. You guys, take him in back and I'll be right there.Well c'mon, this ain't no peep show.",

        "Yeah, where does he live ? Oh, you mean how you're supposed to act on a first date. Now, now, Biff, now, I never noticed any blindspot before when I would drive it. Hi, son. George, help me, please. Cause, George, she wants to go to the dance with you, she just doesn't know it yet.That's why we got to show her that you, George McFly, are a fighter. You're somebody who's gonna stand up for yourself, someone who's gonna protect her",

        "Ah.Hello, hello, anybody home ? Think, McFly, think.I gotta have time to get them re - typed.Do you realize what would happen if I hand in my reports in your handwriting.I'll get fired. You wouldn't want that to happen would you ? Would you ? I'll be at my grandma's.Here, let me give you the number.Bye.Precisely.I don't like her, Marty. Any girl who calls a boy is just asking for trouble."
        ,
        "I have to tell you about the future.Oh hey, Biff, hey, guys, how are you doing ? Marty, don't go this way. Strickland's looking for you.If you're caught it'll be four tardies in a row.Jesus.I, I don't know.",

        "Does your mom know about tomorrow night ? She's just trying to keep you respectable. Hey not too early I sleep in Sunday's, hey McFly, you're shoe's untied, don't be so gullible, McFly. I will. Roads? Where we're going we don't need roads.",

        "yes, Joey just loves being in his playpen.he cries whenever we take him out so we just leave him in there all the time.Well Marty, I hope you like meatloaf.Who are you ? Dammit, Doc, why did you have to tear up that letter ? If only I had more time.Wait a minute, I got all the time I want I got a time machine, I'll just go back and warn him. 10 minutes oughta do it. Time-circuits on, flux-capacitor fluxing, engine running, alright. No, no no no no, c'mon c'mon. C'mon c'mon, here we go, this time. Please, please, c'mon.Are you sure about this storm ? Good evening, I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines Mall.It's Saturday morning, October 26, 1985, 1:18 a.m. and this is temporal experiment number one. C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get down, that's it.",

        "So tell me, Marty, how long have you been in port ? But, what are you blind McFly, it's there. How else do you explain that wreck out there? Oh, oh Marty, here's your keys.You're all waxed up, ready for tonight. Ah. Oh."
        ,
        "That's good advice, Marty. Okay, alright, I'll prove it to you.Look at my driver's license, expires 1987. Look at my birthday, for crying out load I haven't even been born yet.And, look at this picture, my brother, my sister, and me.Look at the sweatshirt, Doc, class of 1984. Doc, is that a de - Yeah, well, how about my homework, McFly ? He's a peeping tom. Dad."
        ,
        "Yeah.Listen, woh.Hello, uh excuse me.Sorry about your barn.Oh yes sir.The hell you doing to my car ? No no no this sucker's electrical, but I need a nuclear reaction to generate the one point twenty-one gigawatts of electricity that I need"
    ];


    li.innerHTML = arr[Math.floor(Math.random() * 10)];
    console.log(
        li.innerHTML = arr[Math.floor(Math.random() * arr.length)]

    );


}